import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<ul><li><strong>配置类SecurityConfiguration</strong></li></ul><ul><li>只要使用spring security都要有这样一个配置类(如果是类配置的话)，继承WebSecurityConfigurerAdapter</li><li>主要实现两个方法configure<code>(AuthenticationManagerBuilder auth)</code>和<code>configure(HttpSecurity http)</code></li></ul><ol><li><p><code>AuthenticationManagerBuilder</code> 主要配置身份认证来源，也就是用户及其角色。</p></li><li><p><code>HttpSecurity</code> 主要配置路径，也就是资源的访问权限（是否需要认证，需要什么角色等）。</p></li></ol><h3 id="配置securityconfig" tabindex="-1"><a class="header-anchor" href="#配置securityconfig" aria-hidden="true">#</a> 配置SecurityConfig</h3><ul><li>继承 <code>WebSecurityConfigurerAdapter</code> 抽象类，实现 Spring Security 在 Web 场景下的自定义配置</li></ul><p>重写<code>configure(AuthenticationManagerBuilder auth)</code> 想要在 <code>WebSecurityConfigurerAdapter</code> 中进行认证相关的配置，可以使用 <code>configure(AuthenticationManagerBuilder auth)</code> 暴露一个 <code>AuthenticationManager</code> <code>的建造器：AuthenticationManagerBuilder</code> 如下所示：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// SecurityConfig.java</span>
<span class="token comment">// 登录认证</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    auth<span class="token punctuation">.</span>
            <span class="token comment">// &lt;X&gt; 使用内存中的 InMemoryUserDetailsManager</span>
            <span class="token function">inMemoryAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// &lt;Y&gt; 不使用 PasswordEncoder 密码编码器</span>
            <span class="token punctuation">.</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token class-name">NoOpPasswordEncoder</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// &lt;Z&gt; 配置 admin 用户</span>
            <span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;ADMIN&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// &lt;Z&gt; 配置 normal 用户</span>
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withUser</span><span class="token punctuation">(</span><span class="token string">&quot;normal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;normal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;NORMAL&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><ul><li><p>调 <code>AuthenticationManagerBuilder#inMemoryAuthentication()</code> 方法，使用内存级别的 <code>InMemoryUserDetailsManager Bean</code> 对象，提供认证的用户信息。</p></li><li><p>Spring 内置了两种 UserDetailsManager 实现：</p><ul><li>InMemoryUserDetailsManager</li><li>JdbcUserDetailsManager ，基于 JDBC的 JdbcUserDetailsManager 。</li></ul></li></ul><ul><li><p>实际项目中，我们更多采用调用<code>AuthenticationManagerBuilder#userDetailsService(userDetailsService)</code> 方法，使用自定义实现的 UserDetailsService 实现类，更加灵活、自由地实现认证的用户信息的读取。</p></li><li><p><strong>重写configure(HttpSecurity http)</strong> 配置 URL 的权限控制。</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;test/demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 配置请求地址的权限</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;test/admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">&quot;ADMIN&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;test/normal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">&quot;NORMAL&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 设置 Form 表单登陆</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            	<span class="token comment">//loginPage(&quot;/login&quot;)</span>
            	<span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            	<span class="token comment">//logoutUrl(&quot;/logout&quot;)</span>
            	<span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre></div><ul><li><code>authorizeRequests()</code> 配置路径拦截，表明路径访问所对应的权限，角色，认证信息。</li><li><code>formLogin()</code> 对应表单认证相关的配置</li><li><code>logout()</code> 对应了注销相关的配置</li><li><code>httpBasic()</code> 可以配置 basic 登录</li></ul><ul><li><ul><li>调用 HttpSecurity.authorizeRequests() 方法，开始<strong>配置 URL 的权限控制</strong>。</li></ul></li></ul><ul><li><p>【常用】permitAll() 方法，所有用户可访问。</p></li><li><p>【常用】denyAll() 方法，所有用户不可访问。</p></li><li><p>【常用】authenticated() 方法，登录用户可访问。</p><ul><li>anonymous() 方法，无需登录，即匿名用户可访问。</li><li>rememberMe() 方法，通过 remember me 登录的用户可访问。</li><li>fullyAuthenticated() 方法，非 remember me 登录的用户可访问。</li><li>hasIpAddress(String ipaddressExpression) 方法，来自指定 IP 表达式的用户可访问。</li></ul></li><li><p>【常用】hasRole(String role) 方法， 拥有指定角色的用户可访问。</p></li><li><p>【常用】hasAnyRole(String... roles) 方法，拥有指定任一角色的用户可访问。</p></li><li><p>【常用】hasAuthority(String authority) 方法，拥有指定权限(authority)的用户可访问。</p></li><li><p>【常用】hasAuthority(String... authorities) 方法，拥有指定任一权限(authority)的用户可访问。</p></li><li><p>【最牛】access(String attribute) 方法，当 Spring EL 表达式的执行结果为 true 时，可以访问。</p></li></ul><p>@PermitAll 注解，等价于 permitAll() 方法，所有用户可访问。</p><ul><li>重要！！！因为在SecurityConfig中，配置了 <strong>.anyRequest().authenticated()</strong> ，任何请求，访问的<strong>用户都需要经过认证</strong>。所以这里 @PermitAll 注解实际是不生效的。</li></ul><p>也就是说，Java Config 配置的权限，和注解配置的权限，两者是叠加的。</p><h3 id="anyrequest" tabindex="-1"><a class="header-anchor" href="#anyrequest" aria-hidden="true">#</a> anyRequest</h3><ul><li>anyRequest() :在之前认证过程中我们就已经使用过 anyRequest()，表示匹配所有的请求。一般情况下此方法都会使用，设置全 部内容都需要进行认证。</li></ul><h3 id="antmatcher" tabindex="-1"><a class="header-anchor" href="#antmatcher" aria-hidden="true">#</a> antMatcher</h3><p><code>public C antMatchers(String... antPatterns) </code></p><ul><li>需要放行所有静态资源，下面演示放行 js 文件夹下所有脚本文件。</li></ul><p><code>.antMatchers(&quot;/js/**&quot;,&quot;/css/**&quot;).permitAll() </code></p><p>还有一种配置方式是只要是<code>.js</code>文件都将被放行</p><p><code>.antMatchers(&quot;/**/*.js&quot;).permitAll() </code></p><h3 id="regexmatchers" tabindex="-1"><a class="header-anchor" href="#regexmatchers" aria-hidden="true">#</a> regexMatchers</h3><ul><li>使用正则表达式进行匹配。和 <code>antMatchers()</code> 主要的区别就是参数， <code>antMatchers()</code> 参数是 ant 表达式， <code>regexMatchers()</code> 参数是正则表达式。 演示所有以.js 结尾的文件都被放行。</li></ul><p><code>.regexMatchers( &quot;.+[.]js&quot;).permitAll()</code></p><h3 id="mvcmatchers" tabindex="-1"><a class="header-anchor" href="#mvcmatchers" aria-hidden="true">#</a> mvcMatchers</h3><ul><li>mvcMatchers()适用于配置了 servletPath 的情况。</li></ul><ul><li><p>在Spring Security的配置类中配置 <code>.servletPath() </code>是 <code>mvcMatchers()</code>返回值特有的方法，<code>antMatchers()</code>和 <code>regexMatchers()</code>没有这个方法。在<code>servletPath()</code>中配置了 servletPath 后，<code>mvcMatchers()</code>直接写 SpringMVC 中<code>@RequestMapping()</code>中设置的路径即可。</p><ul><li><code>.mvcMatchers(&quot;/demo&quot;).servletPath(&quot;/xxxx&quot;).permitAll()</code></li></ul></li><li><p>如果不习惯使用 mvcMatchers()也可以使用 antMatchers()，下面代码和上面代码是等效</p><ul><li><code>.antMatchers(&quot;/xxxx/demo&quot;).permitAll()</code></li></ul></li><li><p>也可以使用 <code>antMatchers()</code>，下面代码和上面代码是等效</p><ul><li><code>.antMatchers(&quot;/xxxx/demo&quot;).permitAll() </code></li></ul></li></ul>`,30),c=[o];function p(i,u){return a(),s("div",null,c)}const r=n(e,[["render",p],["__file","sec_config.html.vue"]]);export{r as default};