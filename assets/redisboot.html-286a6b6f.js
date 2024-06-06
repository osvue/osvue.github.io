import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="boot-redistemplate" tabindex="-1"><a class="header-anchor" href="#boot-redistemplate" aria-hidden="true">#</a> boot RedisTemplate</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">CacheManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CachingConfigurerSupport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>interceptor<span class="token punctuation">.</span></span><span class="token class-name">KeyGenerator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
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

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token keyword">extends</span> <span class="token class-name">CachingConfigurerSupport</span> <span class="token punctuation">{</span>

 
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

</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code>
 <span class="token annotation punctuation">@Autowired</span>
 <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>
 <span class="token annotation punctuation">@Autowired</span>
 <span class="token keyword">private</span> <span class="token class-name">StringRedisTemplate</span> stringRedisTemplate<span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * 普通缓存放入
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>        键
  * <span class="token keyword">@param</span> <span class="token parameter">value</span>      值
  * <span class="token keyword">@param</span> <span class="token parameter">expireTime</span> 超时时间(秒)
  * <span class="token keyword">@return</span> true成功 false失败
  */</span>
 <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> expireTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expireTime<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 普通缓存放入
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>        键
  * <span class="token keyword">@param</span> <span class="token parameter">value</span>      值
  * <span class="token keyword">@param</span> <span class="token parameter">expireTime</span> 超时时间(秒)
  * <span class="token keyword">@return</span> true成功 false失败
  */</span>

 <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> expireTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expireTime<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 普通缓存放入
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
  * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
  * <span class="token keyword">@return</span> true成功 false失败
  */</span>
 <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 普通缓存放入
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
  * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
  * <span class="token keyword">@return</span> true成功 false失败
  */</span>
 <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 普通缓存获取
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
  * <span class="token keyword">@return</span> 值
  */</span>

 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 在原有的值基础上新增字符串到末尾。
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
  * <span class="token keyword">@param</span> <span class="token parameter">value</span> 追加的值
  * <span class="token keyword">@return</span> true成功 false失败
  */</span>

 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 截取key键对应值得字符串，从开始下标位置开始到结束下标的位置(包含结束下标)的字符串。
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
  * <span class="token keyword">@param</span> <span class="token parameter">start</span> 开始位置
  * <span class="token keyword">@param</span> <span class="token parameter">end</span>   结束位置
  * <span class="token keyword">@return</span>
  */</span>

 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 获取原来key键对应的值并重新赋新值。
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
  * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
  * <span class="token keyword">@return</span> 原来旧值
  */</span>

 <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getAndSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAndSet</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 覆盖从指定位置开始的值。
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>    键
  * <span class="token keyword">@param</span> <span class="token parameter">value</span>  值
  * <span class="token keyword">@param</span> <span class="token parameter">offset</span> 位置
  */</span>

 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 普通缓存获取
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
  * <span class="token keyword">@return</span> 值
  */</span>

 <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 获取指定字符串的长度。
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>
  * <span class="token keyword">@return</span> 长度
  */</span>

 <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 如果键不存在则新增,存在则不改变已经有的值
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>
  * <span class="token keyword">@param</span> <span class="token parameter">value</span>
  * <span class="token keyword">@return</span> true成功 false失败
  */</span>

 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">setIfAbsent</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setIfAbsent</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 删除指定KEY的缓存
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">keys</span>
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>keys <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> keys<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>keys<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">arrayToList</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 根据key设置过期时间
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>     键
  * <span class="token keyword">@param</span> <span class="token parameter">seconds</span> 超时时间(秒)
  * <span class="token keyword">@return</span> true成功 false失败
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> seconds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> seconds<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 根据key获取过期时间
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
  * <span class="token keyword">@return</span> 时间(秒) 返回0代表为永久有效
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 递增
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
  * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要增加几(大于0)
  * <span class="token keyword">@return</span> 返回增加后的值
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递增因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 递减
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
  * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要减少几(小于0)
  * <span class="token keyword">@return</span> 返回减少后的值
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">decr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递减因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token operator">-</span>delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 设置map集合到redis。
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">map</span>
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">multiSet</span><span class="token punctuation">(</span><span class="token class-name">Map</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiSet</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 根据集合取出对应的value值。* @param list
  * 
  * <span class="token keyword">@return</span>
  */</span>
 <span class="token keyword">public</span> <span class="token class-name">List</span> <span class="token function">multiGet</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiGet</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","redisboot.html.vue"]]);export{i as default};
