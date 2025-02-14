import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<ul><li><p><code>anyRequest</code> | 匹配所有请求路径</p></li><li><p><code>access</code> | SpringEl表达式结果为true时可以访问</p></li><li><p><code>anonymous</code> | 匿名可以访问</p></li><li><p><code>denyAll</code> | 用户不能访问</p></li><li><p><code>fullyAuthenticated</code> | 用户完全认证可以访问（非remember-me下自动登录）</p></li><li><p><code>hasAnyAuthority</code> | 如果有参数，参数表示权限，则其中任何一个权限可以访问</p></li><li><p><code>hasAnyRole</code> | 如果有参数，参数表示角色，则其中任何一个角色可以访问</p></li><li><p><code>hasAuthority</code> | 如果有参数，参数表示权限，则其权限可以访问</p></li><li><p><code>hasIpAddress</code> | 如果有参数，参数表示IP地址，如果用户IP和参数匹配，则可以访问</p></li><li><p><code>hasRole</code> | 如果有参数，参数表示角色，则其角色可以访问</p></li><li><p><code>permitAll</code> | 用户可以任意访问</p></li><li><p><code>rememberMe</code> | 允许通过remember-me登录的用户访问</p></li><li><p><code>authenticated</code> | 用户登录后可访问</p></li><li><p>第一种就是在 configure(WebSecurity web) 方法中配置放行，像下面这样：</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">WebSecurity</span> web<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    web<span class="token punctuation">.</span><span class="token function">ignoring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/css/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/js/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/index.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/img/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/fonts/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/verifyCode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>第二种方式是在 configure(HttpSecurity http) 方法中进行配置：</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre></div><ul><li>两种方式最大的区别在于，<strong>第一种方式是不走 Spring Security 过滤器链</strong>，而第二种方式走 <strong>Spring Security 过滤器链</strong>，在过滤器链中，给请求放行。</li></ul><h3 id="登录请求分析" tabindex="-1"><a class="header-anchor" href="#登录请求分析" aria-hidden="true">#</a> 登录请求分析</h3><p>首先大家知道，当我们使用 Spring Security，用户登录成功之后，有两种方式获取用户登录信息：</p><p><code>SecurityContextHolder.getContext().getAuthentication()</code><code>在 Controller 的方法中，加入 Authentication 参数</code></p><ul><li>这两种方式获取到的数据都是来自 <code>SecurityContextHolder，SecurityContextHolder</code> 中的数据，本质上是保存在 <code>ThreadLocal</code> 中，<code>ThreadLocal</code> 的特点是存在它里边的数据，哪个线程存的，哪个线程才能访问到。</li></ul><p>这样就带来一个问题，当用户登录成功之后，将用户用户数据存在 <code>SecurityContextHolder</code> 中（thread1），当下一个请求来的时候（thread2），想从 <code>SecurityContextHolder</code> 中获取用户登录信息，却发现获取不到！为啥？因为它俩不是同一个 Thread。</p><ul><li>但实际上，正常情况下，我们使用 Spring Security 登录成功后，以后每次都能够获取到登录用户信息，这又是怎么回事呢？</li></ul><p>这我们就要引入 Spring Security 中的 <code>SecurityContextPersistenceFilter</code> 了。</p><ul><li>无论是 Spring Security 还是 Shiro，它的一系列功能其实都是由过滤器来完成的，在 Spring Security 中， <code>UsernamePasswordAuthenticationFilter</code> 过滤器，</li><li>在这个过滤器之前，还有一个过滤器就是 <code>SecurityContextPersistenceFilter</code>，请求在到达 <code>UsernamePasswordAuthenticationFilter</code> 之前都会先经过 <code>SecurityContextPersistenceFilter。</code></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityContextPersistenceFilter</span> <span class="token keyword">extends</span> <span class="token class-name">GenericFilterBean</span> <span class="token punctuation">{</span>
 
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> res<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
 
  <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> req<span class="token punctuation">;</span>
  <span class="token class-name">HttpServletResponse</span> response <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span><span class="token punctuation">)</span> res<span class="token punctuation">;</span>
  <span class="token class-name">HttpRequestResponseHolder</span> holder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpRequestResponseHolder</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>   response<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">SecurityContext</span> contextBeforeChainExecution <span class="token operator">=</span> repo<span class="token punctuation">.</span><span class="token function">loadContext</span><span class="token punctuation">(</span>holder<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">setContext</span><span class="token punctuation">(</span>contextBeforeChainExecution<span class="token punctuation">)</span><span class="token punctuation">;</span>
   chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>holder<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> holder<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">finally</span> <span class="token punctuation">{</span>
   <span class="token class-name">SecurityContext</span> contextAfterChainExecution <span class="token operator">=</span> <span class="token class-name">SecurityContextHolder</span>
     <span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">clearContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   repo<span class="token punctuation">.</span><span class="token function">saveContext</span><span class="token punctuation">(</span>contextAfterChainExecution<span class="token punctuation">,</span> holder<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     holder<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>SecurityContextPersistenceFilter</code> 继承自 GenericFilterBean，而 <code>GenericFilterBean</code> 则是 Filter 的实现，所以 <code>SecurityContextPersistenceFilter</code> 作为一个过滤器，它里边最重要的方法就是 doFilter 了。</li></ul><ol><li><p>在 doFilter 方法中，它首先会从 repo 中读取一个 SecurityContext 出来，这里的 repo 实际上就是 <code>HttpSessionSecurityContextRepository</code>，读取 SecurityContext 的操作会进入到 readSecurityContextFromSession 方法中，在这里我们看到了读取的核心方法 <code>Object contextFromSession = httpSession.getAttribute(springSecurityContextKey);</code>，这里的 springSecurityContextKey 对象的值就是 <code>SPRING_SECURITY_CONTEXT</code>，读取出来的对象最终会被转为一个 SecurityContext 对象。</p></li><li><p><code>SecurityContext</code> 是一个接口，它有一个唯一的实现类 <code>SecurityContextImpl</code>，这个实现类其实就是用户信息在 session 中保存的 value。</p></li><li><p>在拿到 SecurityContext 之后，通过 <code>SecurityContextHolder.setContext</code> 方法将这个 SecurityContext 设置到 ThreadLocal 中去，这样，在当前请求中，Spring Security 的后续操作，我们都可以直接从 SecurityContextHolder 中获取到用户信息了。</p></li><li><p>接下来，通过 chain.doFilter 让请求继续向下走（这个时候就会进入到 <code>UsernamePasswordAuthenticationFilter</code> 过滤器中了）。</p></li><li><p>在过滤器链走完之后，数据响应给前端之后，finally 中还有一步收尾操作，这一步很关键。这里从 <code>SecurityContextHolder</code> 中获取到 SecurityContext，获取到之后，会把 <code>SecurityContextHolder</code> 清空，然后调用 <code>repo.saveContext</code> 方法将获取到的 SecurityContext 存入 session 中。 至此，整个流程就很明了了。</p></li><li><p>每一个请求到达服务端的时候，首先从 session 中找出来 <code>SecurityContext</code> ，然后设置到 <code>SecurityContextHolder</code> 中去，方便后续使用，当这个请求离开的时候，<code>SecurityContextHolder</code> <code>会被清空，SecurityContext</code> 会被放回 session 中，方便下一个请求来的时候获取。</p></li><li><p>登录请求来的时候，还没有登录用户数据，但是登录请求走的时候，会将用户登录数据存入 session 中，下个请求到来的时候，就可以直接取出来用了。</p></li></ol><ul><li>如果我们暴露登录接口的时候，使用了前面提到的第一种方式，没有走 Spring Security，过滤器链，则在登录成功后，就不会将登录用户信息存入 session 中，进而导致后来的请求都无法获取到登录用户信息（后来的请求在系统眼里也都是未认证的请求）</li><li>如果你的登录请求正常，走了 Spring Security 过滤器链，但是后来的 A 请求没走过滤器链（采用前面提到的第一种方式放行），那么 A 请求中，也是无法通过 <code>SecurityContextHolder</code> 获取到登录用户信息的，因为它一开始没经过 <code>SecurityContextPersistenceFilter</code> 过滤器链。</li></ul>`,17),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","h_ignoreres.html.vue"]]);export{r as default};
