import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const e="/img/oauth/redis.png",o={},p=t('<h1 id="整合redis" tabindex="-1"><a class="header-anchor" href="#整合redis" aria-hidden="true">#</a> 整合redis</h1><ul><li>InMemoryAuthorizationCodeServices 这个表授权码存在内存中。</li><li>InMemoryTokenStore 表示生成的令牌存在内存中。</li></ul><p>授权码用过一次就会失效，存在内存中没什么问题，但是令牌，我们实际上还有其他的存储方案。</p><p>我们所使用的 InMemoryTokenStore 实现了 TokenStore 接口，我们来看下 TokenStore 接口的实现类：</p><p><img src="'+e+`" alt=""></p><p>可以看到，有多种方式来存储 access_token。</p><ol><li>InMemoryTokenStore，这是我们之前使用的，也是系统默认的，就是将 access_token 存到内存中，单机应用这个没有问题，但是在分布式环境下不推荐。</li><li>JdbcTokenStore，看名字就知道，这种方式令牌会被保存到数据中，这样就可以方便的和其他应用共享令牌信息。</li><li>JwtTokenStore，这个其实不是存储，因为使用了 jwt 之后，在生成的 jwt 中就有用户的所有信息，服务端不需要保存，这也是无状态登录，关于 OAuth2 结合 JWT 的用法</li><li>RedisTokenStore，这个很明显就是将 access_token 存到 redis 中。</li><li>JwkTokenStore，将 access_token 保存到 JSON Web Key。</li></ol><p>虽然这里支持的方案比较多，但是我们常用的实际上主要是两个，RedisTokenStore 和 JwtTokenStore，JwtTokenStore 的比较复杂</p><p>首先我们启动一个 Redis 服务，然后给 auth-server 添加 Redis 依赖：</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>依赖添加成功后，在 application.properties 中添加 redis 配置：</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.redis.host</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">spring.redis.port</span><span class="token punctuation">=</span><span class="token value attr-value">6379</span>
<span class="token key attr-name">spring.redis.password</span><span class="token punctuation">=</span><span class="token value attr-value">123</span>
</code></pre></div><p>配置完成后，我们修改 TokenStore 的实例，如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccessTokenConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">TokenStore</span> <span class="token function">tokenStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RedisTokenStore</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14),c=[p];function l(i,r){return a(),s("div",null,c)}const u=n(o,[["render",l],["__file","in_redis.html.vue"]]);export{u as default};