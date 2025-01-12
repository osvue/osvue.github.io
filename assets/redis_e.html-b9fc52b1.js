import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-json<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> application</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>
spring.redis.host=192.168.150.99
spring.redis.port=6379
</code></pre></div><h3 id="stringtemplate" tabindex="-1"><a class="header-anchor" href="#stringtemplate" aria-hidden="true">#</a> stringTemplate</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">StringRedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTemplate</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    自定义 模板 ooxx 
    */</span>
    <span class="token annotation punctuation">@Bean</span>   
    <span class="token keyword">public</span> <span class="token class-name">StringRedisTemplate</span> <span class="token function">ooxx</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> fc<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">StringRedisTemplate</span> tp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisTemplate</span><span class="token punctuation">(</span>fc<span class="token punctuation">)</span><span class="token punctuation">;</span>

        tp<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>  tp <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestRedis</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">RedisTemplate</span>  redisTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;ooxx&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">StringRedisTemplate</span>  stringRedisTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">ObjectMapper</span>  objectMapper<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



<span class="token comment">//        stringRedisTemplate.opsForValue().set(&quot;hello01&quot;,&quot;china&quot;);</span>
<span class="token comment">//</span>
<span class="token comment">//        System.out.println(stringRedisTemplate.opsForValue().get(&quot;hello01&quot;));</span>

        <span class="token class-name">RedisConnection</span> conn <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">getConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        conn<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;hello02&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;水电费稍等&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>conn<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;hello02&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//        HashOperations&lt;String, Object, Object&gt; hash = stringRedisTemplate.opsForHash();</span>
<span class="token comment">//        hash.put(&quot;sean&quot;,&quot;name&quot;,&quot;zzz&quot;);</span>
<span class="token comment">//        hash.put(&quot;sean&quot;,&quot;age&quot;,&quot;22&quot;);</span>
<span class="token comment">//</span>
<span class="token comment">//        System.out.println(hash.entries(&quot;sean&quot;));</span>


        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        stringRedisTemplate.setHashValueSerializer(new Jackson2JsonRedisSerializer&lt;Object&gt;(Object.class));</span>

        <span class="token class-name">Jackson2HashMapper</span> jm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2HashMapper</span><span class="token punctuation">(</span>objectMapper<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span><span class="token string">&quot;sean01&quot;</span><span class="token punctuation">,</span>jm<span class="token punctuation">.</span><span class="token function">toHash</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Map</span> map <span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token string">&quot;sean01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Person</span> per <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">convertValue</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>per<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        stringRedisTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;ooxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">RedisConnection</span> cc <span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">getConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cc<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MessageListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pattern<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;ooxx&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            stringRedisTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;ooxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello  from wo zi ji &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","redis_e.html.vue"]]);export{k as default};
