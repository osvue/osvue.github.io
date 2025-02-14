import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">rememberMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>只需要添加一个 <code>.rememberMe()</code> 即可，自动登录功能就成功添加进来了。</li></ul><ul><li>JdbcTokenRepositoryImpl</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>persistent_logins<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>username<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>series<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>token<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>last_used<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>series<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_unicode_ci<span class="token punctuation">;</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// 用来保存令牌的处理类则是 PersistentRememberMeToken，该类的定义也很简洁命令：</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersistentRememberMeToken</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> series<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> tokenValue<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Date</span> date<span class="token punctuation">;</span>
    <span class="token comment">//省略 getter</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpMethod</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>authentication<span class="token punctuation">.</span></span><span class="token class-name">AuthenticationManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>authentication<span class="token punctuation">.</span></span><span class="token class-name">AuthenticationProvider</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>authentication<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">DaoAuthenticationProvider</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">HttpSecurity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">WebSecurity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span></span><span class="token class-name">EnableWebSecurity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>web<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span></span><span class="token class-name">WebSecurityConfigurerAdapter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>bcrypt<span class="token punctuation">.</span></span><span class="token class-name">BCryptPasswordEncoder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>password<span class="token punctuation">.</span></span><span class="token class-name">PasswordEncoder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>web<span class="token punctuation">.</span>authentication<span class="token punctuation">.</span>rememberme<span class="token punctuation">.</span></span><span class="token class-name">JdbcTokenRepositoryImpl</span></span><span class="token punctuation">;</span>
 
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSecurityConfigurer</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">AuthenticationManager</span> <span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">WebSecurity</span> web<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//Ignore, public</span>
        web<span class="token punctuation">.</span><span class="token function">ignoring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/public/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/static/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * anyRequest          |   匹配所有请求路径
     * access              |   SpringEl表达式结果为true时可以访问
     * anonymous           |   匿名可以访问
     * denyAll             |   用户不能访问
     * fullyAuthenticated  |   用户完全认证可以访问（非remember-me下自动登录）
     * hasAnyAuthority     |   如果有参数，参数表示权限，则其中任何一个权限可以访问
     * hasAnyRole          |   如果有参数，参数表示角色，则其中任何一个角色可以访问
     * hasAuthority        |   如果有参数，参数表示权限，则其权限可以访问
     * hasIpAddress        |   如果有参数，参数表示IP地址，如果用户IP和参数匹配，则可以访问
     * hasRole             |   如果有参数，参数表示角色，则其角色可以访问
     * permitAll           |   用户可以任意访问
     * rememberMe          |   允许通过remember-me登录的用户访问
     * authenticated       |   用户登录后可访问
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    	
    	http
          <span class="token comment">// CSRF禁用，因为不使用session</span>
          <span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	
<span class="token comment">//        http.csrf().ignoringAntMatchers(&quot;/oauth/authorize&quot;, &quot;/oauth/token&quot;, &quot;/oauth/rest_token&quot;);</span>
    	
     <span class="token comment">// 过滤请求</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/public/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/static/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/oauth/rest_token*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/login*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/user/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasAnyRole</span><span class="token punctuation">(</span><span class="token string">&quot;ADMIN&quot;</span><span class="token punctuation">)</span>

                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> <span class="token string">&quot;/login*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                
                <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">loginPage</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">loginProcessingUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/signin&quot;</span><span class="token punctuation">)</span>

                <span class="token punctuation">.</span><span class="token function">failureUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/login?error=1&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">usernameParameter</span><span class="token punctuation">(</span><span class="token string">&quot;oidc_user&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">passwordParameter</span><span class="token punctuation">(</span><span class="token string">&quot;oidcPwd&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">rememberMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token string">&quot;javaboy&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">tokenRepository</span><span class="token punctuation">(</span><span class="token function">jdbcTokenRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">logoutUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/signout&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">deleteCookies</span><span class="token punctuation">(</span><span class="token string">&quot;JSESSIONID&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">logoutSuccessUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">exceptionHandling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        http<span class="token punctuation">.</span><span class="token function">authenticationProvider</span><span class="token punctuation">(</span><span class="token function">authenticationProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">JdbcTokenRepositoryImpl</span> <span class="token function">jdbcTokenRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JdbcTokenRepositoryImpl</span> jdbcTokenRepository <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdbcTokenRepositoryImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jdbcTokenRepository<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> jdbcTokenRepository<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 身份认证接口
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">AuthenticationProvider</span> <span class="token function">authenticationProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DaoAuthenticationProvider</span> daoAuthenticationProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DaoAuthenticationProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        daoAuthenticationProvider<span class="token punctuation">.</span><span class="token function">setUserDetailsService</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        daoAuthenticationProvider<span class="token punctuation">.</span><span class="token function">setPasswordEncoder</span><span class="token punctuation">(</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> daoAuthenticationProvider<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * BCrypt  加密
     *
     * <span class="token keyword">@return</span> PasswordEncoder
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre></div><h3 id="二次校验" tabindex="-1"><a class="header-anchor" href="#二次校验" aria-hidden="true">#</a> 二次校验</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/admin&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/rememberme&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">rememberme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;rememberme&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>/hello</code> 接口，只要认证后就可以访问，无论是通过用户名密码认证还是通过自动登录认证，只要认证了，就可以访问。</li><li><code>/admin</code> 接口，必须要用户名密码认证之后才能访问，如果用户是通过自动登录认证的，则必须重新输入用户名密码才能访问该接口。</li><li><code>/rememberme</code> 接口，必须是通过自动登录认证后才能访问，如果用户是通过用户名/密码认证的，则无法访问该接口。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/rememberme&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rememberMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fullyAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">rememberMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token string">&quot;srccde&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">tokenRepository</span><span class="token punctuation">(</span><span class="token function">jdbcTokenRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>可以看到：</p><p><code>/rememberme 接口是需要 rememberMe 才能访问</code>。 <code>/admin</code> 是需要 <code>fullyAuthenticated，fullyAuthenticated</code> 不同于 authenticated，fullyAuthenticated 不包含自动登录的形式，而 authenticated 包含自动登录的形式。 最后剩余的接口（<code>/hello</code>）都是 <code>authenticated</code> 就能访问。</p>`,11),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","e_rememberme.html.vue"]]);export{k as default};
