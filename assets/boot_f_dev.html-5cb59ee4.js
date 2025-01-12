import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>线上环境prod(product)</li><li>开发环境dev(development)</li><li>测试环境test</li><li>提测环境qa</li></ul><h2 id="boot选择启动某个配置文件" tabindex="-1"><a class="header-anchor" href="#boot选择启动某个配置文件" aria-hidden="true">#</a> boot选择启动某个配置文件</h2><ul><li><code>bootstrap.yml</code>在<code>application.yml</code>之前加载，一般在spring cloud使用配置中心时使用；</li><li><code>bootstrap.yml</code>同名属性会被<code>application.yml</code>覆盖；</li><li><code>application.yml</code>在<code>application.properties</code>之前加载，同名属性会被<code>application.properties</code>覆盖</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Spring Boot配置文件提供了隔离一部分应用程序配置的方法，并可使其仅在某指定环境可用。任何有@Component和@Configuration注解的Bean都用@profile来指定加载哪个配置文件。如：</p></div><h3 id="profile" tabindex="-1"><a class="header-anchor" href="#profile" aria-hidden="true">#</a> <code>@Profile</code></h3><ul><li><strong>@Component</strong>或**@Configuration<strong>注解的类可以使用</strong>@profil**e</li><li><strong>@Profile</strong>中需要指定一个字符串，约定生效的环境 <ul><li><strong>@profile注解的作用是指定类或方法在特定的 Profile 环境生效</strong></li><li>任何@Component或@Configuration注解的类都可以使用@Profile注解。</li><li>在使用DI来依赖注入的时候，能够根据@profile标明的环境，将注入符合当前运行环境的相应的bean。</li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token comment">// class</span>
<span class="token annotation punctuation">@Configuration</span> 
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span> “production”<span class="token punctuation">)</span><span class="token comment">//加载production配置文件，即也代表当前是production环境</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// method</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">standaloneDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EmbeddedDatabaseBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token class-name">EmbeddedDatabaseType</span><span class="token punctuation">.</span><span class="token constant">HSQL</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addScript</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:com/bank/config/sql/schema.sql&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addScript</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:com/bank/config/sql/test-data.sql&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;prod&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">jndiDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InitialContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">DataSource</span><span class="token punctuation">)</span> ctx<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token string">&quot;java:comp/env/jdbc/datasource&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="profile激活" tabindex="-1"><a class="header-anchor" href="#profile激活" aria-hidden="true">#</a> profile激活</h4><p>实际使用中，注解中标示了prod、test、qa等多个环境，运行时使用哪个profile由<strong>spring.profiles.active</strong>控制</p><ul><li>环境的值与<strong>application-prod.properties</strong>中<code>**-**</code>后面的值对应，这是SpringBoot约定好的 <strong>以普通Spring的方式，可以使用spring.profile.active环境属性来指定哪些配置文件处于活动状态</strong></li></ul><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># spring.profiles.active = dev</span>
<span class="token comment"># 或</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev

</code></pre></div><ul><li><code>java -jar abcdte.jar --spring.profiles.active=dev</code></li></ul><h3 id="以编程方式启动某配置文件" tabindex="-1"><a class="header-anchor" href="#以编程方式启动某配置文件" aria-hidden="true">#</a> 以编程方式启动某配置文件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>@SpringBootApplication
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        SpringApplication app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">(</span>DemoApplication<span class="token punctuation">.</span>class<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//启动dev配置文件</span>
        app<span class="token punctuation">.</span><span class="token function">setAdditionalProfiles</span><span class="token punctuation">(</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// dev 或prod</span>
        app<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="maven的pom文件中启动某配置文件" tabindex="-1"><a class="header-anchor" href="#maven的pom文件中启动某配置文件" aria-hidden="true">#</a> maven的pom文件中启动某配置文件</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 本地开发环境 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>dev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles.active</span><span class="token punctuation">&gt;</span></span>dev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles.active</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 开启本地开发环境 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 测试环境 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles.active</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles.active</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 生产环境 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>pro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles.active</span><span class="token punctuation">&gt;</span></span>pro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles.active</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="yaml下的列表" tabindex="-1"><a class="header-anchor" href="#yaml下的列表" aria-hidden="true">#</a> YAML下的列表</h3><p>如，以下yaml配置文件：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">book</span><span class="token punctuation">:</span> 
    <span class="token key atrule">list</span><span class="token punctuation">:</span> 
    <span class="token key atrule">-name</span><span class="token punctuation">:</span> Java
    <span class="token key atrule">-name</span><span class="token punctuation">:</span> C++
 

</code></pre></div><ul><li>可用以下形式获取book列表：</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>“book”<span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FooProperties</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyPojo</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span>（）<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyPojo</span><span class="token punctuation">&gt;</span></span>  <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token punctuation">.</span>list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="资源配置文件" tabindex="-1"><a class="header-anchor" href="#资源配置文件" aria-hidden="true">#</a> 资源配置文件</h3><ul><li>Springboot的资源配置文件除了<code>application.properties</code>之外，还可以有对应的资源文件<code>application-{profile}.properties</code>。</li><li>假设，一个应用的工作环境有：dev、test、prod</li></ul><ul><li><code>applcation.properties</code> - 公共配置</li><li><code>application-dev.properties</code> - 开发环境配置</li><li><code>application-test.properties</code> - 测试环境配置</li><li><code>application-prod.properties</code> - 生产环境配置</li><li>不同的properties配置文件也可以是在 <strong>applcation.properties</strong> 文件中来激活 profile：<strong>spring.profiles.active = test</strong></li></ul>`,24),e=[o];function c(l,i){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","boot_f_dev.html.vue"]]);export{k as default};
