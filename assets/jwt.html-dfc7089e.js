import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<h2 id="sso" tabindex="-1"><a class="header-anchor" href="#sso" aria-hidden="true">#</a> SSO</h2><blockquote><p>传统的通过 session 来记录用户认证信息的方式我们可以理解为这是一种有状态登录，而 JWT 则代表了一种无状态登录。<strong>无状态登录天然的具备单点登录能力</strong></p></blockquote><h3 id="有状态" tabindex="-1"><a class="header-anchor" href="#有状态" aria-hidden="true">#</a> 有状态</h3><p>有状态服务，即服务端需要记录每次会话的客户端信息，从而识别客户端身份，根据用户身份进行请求的处理，典型的设计如 Tomcat 中的 Session。例如登录：用户登录后，我们把用户的信息保存在服务端 session 中，并且给用户一个 cookie 值，记录对应的 session，然后下次请求，用户携带 cookie 值来（这一步有浏览器自动完成），我们就能识别到对应 session，从而找到用户的信息。这种方式目前来看最方便，但是也有一些缺陷，如下：</p><ul><li>服务端保存大量数据，增加服务端压力</li><li>服务端保存用户状态，不支持集群化部署</li></ul><h3 id="无状态" tabindex="-1"><a class="header-anchor" href="#无状态" aria-hidden="true">#</a> 无状态</h3><p>微服务集群中的每个服务，对外提供的都使用 RESTful 风格的接口。而 RESTful 风格的一个最重要的规范就是：服务的无状态性，即：</p><ul><li>服务端不保存任何客户端请求者信息</li><li>客户端的每次请求必须具备自描述信息，通过这些信息识别客户端身份</li></ul><p>那么这种无状态性有哪些好处呢？</p><ul><li>客户端请求不依赖服务端的信息，多次请求不需要必须访问到同一台服务器</li><li>服务端的集群和状态对客户端透明</li><li>服务端可以任意的迁移和伸缩（可以方便的进行集群化部署）</li><li>减小服务端存储压力</li></ul><h3 id="如何实现无状态" tabindex="-1"><a class="header-anchor" href="#如何实现无状态" aria-hidden="true">#</a> 如何实现无状态</h3><p>无状态登录的流程：</p><ul><li>首先客户端发送账户名/密码到服务端进行认证</li><li>认证通过后，服务端将用户信息加密并且编码成一个 token，返回给客户端</li><li>以后客户端每次发送请求，都需要携带认证的 token</li><li>服务端对客户端发送来的 token 进行解密，判断是否有效，并且获取用户登录信息</li></ul><h3 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h3><ol><li>JWT，全称是 Json Web Token ， 是一种 JSON 风格的轻量级的授权和身份认证规范，可实现无状态、分布式的 Web 应用授权</li><li>JWT 作为一种规范，并没有和某一种语言绑定在一起，常用的 Java 实现是 GitHub 上的开源项目 jjwt，地址如下：<code>https://github.com/jwtk/jjwt</code></li></ol><h4 id="jwt-数据格式" tabindex="-1"><a class="header-anchor" href="#jwt-数据格式" aria-hidden="true">#</a> JWT 数据格式</h4><p>JWT 包含三部分数据：</p><p>1.Header：头部，通常头部有两部分信息：</p><ul><li>声明类型，这里是JWT</li><li>加密算法，自定义</li></ul><p>我们会对头部进行 Base64Url 编码（可解码），得到第一部分数据。</p><p>2.Payload：载荷，就是有效数据，在官方文档中(RFC7519)，这里给了 7 个示例信息：</p><ul><li>iss (issuer)：表示签发人</li><li>exp (expiration time)：表示token过期时间</li><li>sub (subject)：主题</li><li>aud (audience)：受众</li><li>nbf (Not Before)：生效时间</li><li>iat (Issued At)：签发时间</li><li>jti (JWT ID)：编号</li></ul><p>这部分也会采用 Base64Url 编码，得到第二部分数据。</p><p>3.Signature：签名，是整个数据的认证信息。一般根据前两步的数据，再加上服务的的密钥 secret（密钥保存在服务端，不能泄露给客户端），通过 Header 中配置的加密算法生成。用于验证整个数据完整和可靠性。</p><h4 id="jwt-交互流程" tabindex="-1"><a class="header-anchor" href="#jwt-交互流程" aria-hidden="true">#</a> JWT 交互流程</h4><ol><li>应用程序或客户端向授权服务器请求授权</li><li>获取到授权后，授权服务器会向应用程序返回访问令牌</li><li>应用程序使用访问令牌来访问受保护资源（如API）</li></ol><p>因为 JWT 签发的 token 中已经包含了用户的身份信息，并且每次请求都会携带，这样服务的就无需保存用户信息，甚至无需去数据库查询，这样就符合了 RESTful 的无状态规范。</p><h3 id="jwt-存在的问题" tabindex="-1"><a class="header-anchor" href="#jwt-存在的问题" aria-hidden="true">#</a> JWT 存在的问题</h3><p>JWT 也不是天衣无缝，由客户端维护登录状态带来的一些问题在这里依然存在，举例如下：</p><ol><li>续签问题，这是被很多人诟病的问题之一，传统的 cookie+session 的方案天然的支持续签，但是 jwt 由于服务端不保存用户状态，因此很难完美解决续签问题，如果引入 redis，虽然可以解决问题，但是 jwt 也变得不伦不类了。</li><li>注销问题，由于服务端不再保存用户信息，所以一般可以通过修改 secret 来实现注销，服务端 secret 修改后，已经颁发的未过期的 token 就会认证失败，进而实现注销，不过毕竟没有传统的注销方便。</li><li>密码重置，密码重置后，原本的 token 依然可以访问系统，这时候也需要强制修改 secret。</li><li>基于第 2 点和第 3 点，一般建议不同用户取不同 secret。</li></ol><p><strong>OAuth2 中的问题</strong></p><p>上一篇代码中 , 授权服务器派发了 access_token 之后，客户端拿着 access_token 去请求资源服务器，资源服务器要去校验 access_token 的真伪，所以我们在资源服务器上配置了 RemoteTokenServices，让资源服务器做远程校验：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token class-name">RemoteTokenServices</span> <span class="token function">tokenServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">RemoteTokenServices</span> services <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RemoteTokenServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">setCheckTokenEndpointUrl</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:8080/oauth/check_token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">setClientId</span><span class="token punctuation">(</span><span class="token string">&quot;osvue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">setClientSecret</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> services<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在高并发环境下这样的校验方式显然是有问题的，如果结合 JWT，用户的所有信息都保存在 JWT 中，这样就可以有效的解决上面的问题。</p><h2 id="jwt-代码改造方案" tabindex="-1"><a class="header-anchor" href="#jwt-代码改造方案" aria-hidden="true">#</a> JWT 代码改造方案</h2><h3 id="授权服务器改造" tabindex="-1"><a class="header-anchor" href="#授权服务器改造" aria-hidden="true">#</a> 授权服务器改造</h3><ul><li>修改 AccessTokenConfig 类，如下：</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccessTokenConfig</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token constant">SIGNING_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;javaboy&quot;</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">TokenStore</span> <span class="token function">tokenStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JwtTokenStore</span><span class="token punctuation">(</span><span class="token function">jwtAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">JwtAccessTokenConverter</span> <span class="token function">jwtAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JwtAccessTokenConverter</span> converter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JwtAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        converter<span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span><span class="token constant">SIGNING_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> converter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这里的改造主要是两方面：</p><ol><li>TokenStore 我们使用 JwtTokenStore 这个实例。之前我们将 access_token 无论是存储在内存中，还是存储在 Redis 中，都是要存下来的，客户端将 access_token 发来之后，我们还要校验看对不对。但是如果使用了 JWT，access_token 实际上就不用存储了（无状态登录，服务端不需要保存信息），因为用户的所有信息都在 jwt 里边，所以这里配置的 JwtTokenStore 本质上并不是做存储。</li><li>另外我们还提供了一个 JwtAccessTokenConverter，这个 JwtAccessTokenConverter 可以实现将用户信息和 JWT 进行转换（将用户信息转为 jwt 字符串，或者从 jwt 字符串提取出用户信息）。</li><li>另外，在 JWT 字符串生成的时候，我们需要一个签名，这个签名需要自己保存好。</li></ol><p>这里 JWT 默认生成的用户信息主要是用户角色、用户名等，如果我们希望在生成的 JWT 上面添加额外的信息，可以按照如下方式添加：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomAdditionalInformation</span> <span class="token keyword">implements</span> <span class="token class-name">TokenEnhancer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">OAuth2AccessToken</span> <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AccessToken</span> accessToken<span class="token punctuation">,</span> <span class="token class-name">OAuth2Authentication</span> authentication<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> info <span class="token operator">=</span> accessToken<span class="token punctuation">.</span><span class="token function">getAdditionalInformation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        info<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;osvue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DefaultOAuth2AccessToken</span><span class="token punctuation">)</span> accessToken<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAdditionalInformation</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> accessToken<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>自定义类 <strong>CustomAdditionalInformation</strong> 实现 TokenEnhancer 接口，并实现接口中的 enhance 方法。enhance 方法中的 <strong>OAuth2AccessToken</strong> 参数就是已经生成的 access_token 信息，我们可以从 <strong>OAuth2AccessToken</strong> 中取出已经生成的额外信息，然后在此基础上追加自己的信息。</p><p><strong>「需要提醒一句，其实我们配置的 JwtAccessTokenConverter 也是 TokenEnhancer 的一个实例」</strong></p><p>配置完成之后，我们还需要在 AuthorizationServer 中修改 AuthorizationServerTokenServices 实例，如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token class-name">JwtAccessTokenConverter</span> jwtAccessTokenConverter<span class="token punctuation">;</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token class-name">CustomAdditionalInformation</span> customAdditionalInformation<span class="token punctuation">;</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token class-name">AuthorizationServerTokenServices</span> <span class="token function">tokenServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">DefaultTokenServices</span> services <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultTokenServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">setClientDetailsService</span><span class="token punctuation">(</span><span class="token function">clientDetailsService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">setSupportRefreshToken</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">setTokenStore</span><span class="token punctuation">(</span>tokenStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">TokenEnhancerChain</span> tokenEnhancerChain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TokenEnhancerChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tokenEnhancerChain<span class="token punctuation">.</span><span class="token function">setTokenEnhancers</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>jwtAccessTokenConverter<span class="token punctuation">,</span> customAdditionalInformation<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">setTokenEnhancer</span><span class="token punctuation">(</span>tokenEnhancerChain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> services<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这里主要是是在 DefaultTokenServices 中配置 TokenEnhancer，将之前的 JwtAccessTokenConverter 和 CustomAdditionalInformation 两个实例注入进来即可。</p><p>如此之后，我们的 auth-server 就算是配置成功了。</p><h3 id="资源服务器改造" tabindex="-1"><a class="header-anchor" href="#资源服务器改造" aria-hidden="true">#</a> 资源服务器改造</h3><p>接下来我们还需要对资源服务器进行改造，也就是 user-server，我们将 auth-server 中的 AccessTokenConfig 类拷贝到 user-server 中，然后在资源服务器配置中不再配置远程校验地址，而是配置一个 TokenStore 即可：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableResourceServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResourceServerConfig</span> <span class="token keyword">extends</span> <span class="token class-name">ResourceServerConfigurerAdapter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">TokenStore</span> tokenStore<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">ResourceServerSecurityConfigurer</span> resources<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        resources<span class="token punctuation">.</span><span class="token function">resourceId</span><span class="token punctuation">(</span><span class="token string">&quot;res1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tokenStore</span><span class="token punctuation">(</span>tokenStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/admin/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这里配置好之后，会自动调用 JwtAccessTokenConverter 将 jwt 解析出来，jwt 里边就包含了用户的基本信息，所以就不用远程校验 access_token 了。</p><p><strong>测试</strong></p>`,53),p=[o];function c(u,i){return s(),a("div",null,p)}const k=n(e,[["render",c],["__file","jwt.html.vue"]]);export{k as default};
