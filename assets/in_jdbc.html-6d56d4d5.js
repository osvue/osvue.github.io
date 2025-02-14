import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p="/img/oauth/test.png",o={},e=t(`<h1 id="spring-security-持久化" tabindex="-1"><a class="header-anchor" href="#spring-security-持久化" aria-hidden="true">#</a> Spring Security 持久化</h1><h2 id="mybatis-plus-version" tabindex="-1"><a class="header-anchor" href="#mybatis-plus-version" aria-hidden="true">#</a> Mybatis Plus Version</h2><h2 id="参考-osvue-githuo-io" tabindex="-1"><a class="header-anchor" href="#参考-osvue-githuo-io" aria-hidden="true">#</a> 参考 <strong><a href="osvue.githuo.io">osvue.githuo.io</a></strong></h2><h2 id="spring-data-jpa-version" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa-version" aria-hidden="true">#</a> Spring Data Jpa Version</h2><p>创建 <strong>Spring Boot</strong> 项目</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-oauth2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="配置用户实体类" tabindex="-1"><a class="header-anchor" href="#配置用户实体类" aria-hidden="true">#</a> 配置用户实体类</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;t_user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetails</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span><span class="token constant">IDENTITY</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> accountNonExpired<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> accountNonLocked<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> credentialsNonExpired<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> enabled<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@ManyToMany</span><span class="token punctuation">(</span>fetch <span class="token operator">=</span> <span class="token class-name">FetchType</span><span class="token punctuation">.</span><span class="token constant">EAGER</span><span class="token punctuation">,</span>cascade <span class="token operator">=</span> <span class="token class-name">CascadeType</span><span class="token punctuation">.</span><span class="token constant">PERSIST</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Role</span><span class="token punctuation">&gt;</span></span> roles<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">GrantedAuthority</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAuthorities</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">&gt;</span></span> authorities <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Role</span> role <span class="token operator">:</span> <span class="token function">getRoles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            authorities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleGrantedAuthority</span><span class="token punctuation">(</span>role<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> authorities<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAccountNonExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> accountNonExpired<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAccountNonLocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> accountNonLocked<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isCredentialsNonExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> credentialsNonExpired<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> enabled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//省略其他 get/set 方法</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>用户实体类主要需要实现 UserDetails 接口，并实现接口中的方法。</li></ul><ol><li>accountNonExpired、accountNonLocked、credentialsNonExpired、enabled 这四个属性分别用来描述用户的状态，表示账户是否没有过期、账户是否没有被锁定、密码是否没有过期、以及账户是否可用。</li><li>roles 属性表示用户的角色，User 和 Role 是多对多关系，用一个 @ManyToMany 注解来描述。</li><li>getAuthorities 方法返回用户的角色信息，我们在这个方法中把自己的 Role 稍微转化一下即可。</li></ol><h3 id="角色实体类" tabindex="-1"><a class="header-anchor" href="#角色实体类" aria-hidden="true">#</a> 角色实体类</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;t_role&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Role</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span><span class="token constant">IDENTITY</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> nameZh<span class="token punctuation">;</span>
    <span class="token comment">//省略 getter/setter</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="userdao-省略-详情参考jap" tabindex="-1"><a class="header-anchor" href="#userdao-省略-详情参考jap" aria-hidden="true">#</a> UserDao 省略 , 详情参考JAP ...</h3><h2 id="userservice" tabindex="-1"><a class="header-anchor" href="#userservice" aria-hidden="true">#</a> UserService</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetailsService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">UserDao</span> userDao<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserDetails</span> <span class="token function">loadUserByUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UsernameNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> userDao<span class="token punctuation">.</span><span class="token function">findUserByUsername</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UsernameNotFoundException</span><span class="token punctuation">(</span><span class="token string">&quot;用户不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>自己定义的 UserService 需要实现 UserDetailsService 接口，实现该接口，就要实现接口中的方法，也就是 loadUserByUsername ，这个方法的参数就是用户在登录的时候传入的用户名，根据用户名去查询用户信息（查出来之后，系统会自动进行密码比对）。</p></blockquote><h3 id="配置完成后-接下来在-spring-security-中稍作配置" tabindex="-1"><a class="header-anchor" href="#配置完成后-接下来在-spring-security-中稍作配置" aria-hidden="true">#</a> 配置完成后，接下来在 Spring Security 中稍作配置</h3><h3 id="配置spring-security-config" tabindex="-1"><a class="header-anchor" href="#配置spring-security-config" aria-hidden="true">#</a> 配置Spring Security Config</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * @Author: Mr.Han
 * @Description: spring_boot_plus
 * @Date: Created in 2020/4/17_14:07
 * @Modified By: THE GIFTED
 */</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>
  <span class="token comment">/*
    // TODO: 2020/4/17  原来在内存中存取用户
  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
        .withUser(&quot;os&quot;)
        .password(new BCryptPasswordEncoder().encode(&quot;123&quot;))
        .roles(&quot;admin&quot;)
        .and()
        .withUser(&quot;vue&quot;)
        .password(new BCryptPasswordEncoder().encode(&quot;123&quot;))
        .roles(&quot;user&quot;);
  }*/</span>

  <span class="token doc-comment comment">/**
   * @Function TODO 现在在数据库中存取
   *
   * <span class="token keyword">@author</span> THE GIFTED @Date 2020/4/17 14:24
   * <span class="token keyword">@param</span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    auth<span class="token punctuation">.</span><span class="token function">userDetailsService</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>



  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">WebSecurity</span> web<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    web<span class="token punctuation">.</span><span class="token function">ignoring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/js/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/css/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/images/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * @Function 配置登录规则
  * <span class="token keyword">@author</span>   THE GIFTED
  * @Date     2020/4/17 14:37
  * <span class="token keyword">@param</span>
  * <span class="token keyword">@return</span>
  */</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/admin/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/user/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">loginProcessingUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/doLogin&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">//登录成功的回调</span>
        <span class="token punctuation">.</span><span class="token function">successHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">,</span> authentication<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
          <span class="token class-name">Object</span> principal <span class="token operator">=</span> authentication<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">PrintWriter</span> out <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>principal<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">failureHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">//登录失败回调</span>
          resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">PrintWriter</span> out <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">logoutUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/logout&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">logoutSuccessHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">,</span> authentication<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
          resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">PrintWriter</span> out <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;注销成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exceptionHandling</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authenticationEntryPoint</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">,</span> authException<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">//未认证回调</span>
              resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token class-name">PrintWriter</span> out <span class="token operator">=</span> resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;尚未登录，请先登录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="application-properties" tabindex="-1"><a class="header-anchor" href="#application-properties" aria-hidden="true">#</a> application.properties</h2><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql:///ssm?useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai</span>

<span class="token key attr-name">spring.jpa.database</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token key attr-name">spring.jpa.database-platform</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token key attr-name">spring.jpa.hibernate.ddl-auto</span><span class="token punctuation">=</span><span class="token value attr-value">update</span>
<span class="token key attr-name">spring.jpa.show-sql</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.jpa.properties.hibernate.dialect</span><span class="token punctuation">=</span><span class="token value attr-value">org.hibernate.dialect.MySQL8Dialect</span>

</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$2a$10$GAouRFRbarO7ANR3N4aVCetKsIl1cMnDPKoon7wHRptA6przxhrKC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accountNonExpired&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accountNonLocked&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;credentialsNonExpired&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ROLE_user&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nameZh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;普通用户&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;authorities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ROLE_user&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+p+'" alt=""></p>',24),c=[e];function u(l,i){return s(),a("div",null,c)}const r=n(o,[["render",u],["__file","in_jdbc.html.vue"]]);export{r as default};
