import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>Spring boot通常有⼀个名为 <strong>xxxApplication</strong>的类,⼊⼝类中有⼀个main⽅法, 在main⽅法中使⽤ **SpringApplication.run(xxxApplication.class,args)**启 动springboot应⽤的项⽬。</li><li><strong>@RestController</strong>: 就是 <strong>@Controller+@ResponseBody</strong> 组合，⽀持RESTful访问⽅ 式，返回结果都是json字符串。</li><li><strong>@SpringBootApplication</strong> 注解等价于: <ul><li><strong>@SpringBootConfiguration</strong> 标识注解,标识这是⼀个springboot的配置类</li><li><strong>@EnableAutoConfiguration</strong> ⾃动与项⽬中集成的第三⽅技术进⾏集成</li><li><strong>@ComponentScan</strong> 扫描⼊⼝类所在⼦包以及⼦包后代包中注解</li></ul></li></ul><h3 id="配置文件的拆分" tabindex="-1"><a class="header-anchor" href="#配置文件的拆分" aria-hidden="true">#</a> 配置文件的拆分</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">拆分如下</span><span class="token punctuation">:</span>
 <span class="token comment">#主配置⽂件:</span>
 application.yml <span class="token comment">#⽤来书写相同的的配置</span>
 <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment">#⽣产和测试为同⼀个端⼝</span>

 <span class="token comment">#⽣产配置⽂件:</span>
 application<span class="token punctuation">-</span>pord.yml
 <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">context-path</span><span class="token punctuation">:</span> /abcd
 <span class="token comment">#测试配置⽂件:</span>
 application<span class="token punctuation">-</span>dev.yml
 <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">context-path</span><span class="token punctuation">:</span> /springboot
</code></pre></div><ul><li>使⽤ <strong>@Repository @Service @Controller</strong> 以及 <strong>@Component</strong>管理不同简单对象 如: ⽐如要通过⼯⼚创建⾃定义User对象:</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token comment">// 通过⼯⼚创建之后可以在使⽤处任意注⼊该对象 如:在控制器中使⽤⾃定义简单对象创建</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>
 <span class="token annotation punctuation">@Autowired</span>
 <span class="token keyword">private</span> <span class="token class-name">User</span> user<span class="token punctuation">;</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>@Configuration @Bean</strong></li></ul><ul><li>管理复杂对象的创建</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>推荐<span class="token punctuation">)</span><span class="token operator">|</span><span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span>不推荐<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Beans</span> <span class="token punctuation">{</span>
 <span class="token annotation punctuation">@Bean</span>
 <span class="token keyword">public</span> <span class="token class-name">Calendar</span> <span class="token function">getCalendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li><strong>@Configuration</strong> 配置注解主要⽤来⽣产多个组件交给⼯⼚管理 (注册形式)</li><li><strong>@Component</strong> ⽤来管理单个组件(包扫描形式)</li></ol><ul><li><strong>@Value</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

 <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${name}&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>在配置⽂件中注⼊ <code>name: xiaohei</code></li></ul><ul><li><strong>@ConfigurationProperties(prefix=&quot;前缀&quot;)</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> bir<span class="token punctuation">;</span>
  
<span class="token punctuation">}</span>

</code></pre></div><ul><li>编写配置⽂件</li></ul><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">user</span><span class="token punctuation">:</span>
 <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">22</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> username
 <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">22</span>
 <span class="token key atrule">bir</span><span class="token punctuation">:</span> 2022/12/12
</code></pre></div><h3 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> aop</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starteraop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 @Aspect ⽤来类上,代表这个类是⼀个切⾯
 @Before ⽤在⽅法上代表这个⽅法是⼀个前置通知⽅法
 @After ⽤在⽅法上代表这个⽅法是⼀个后置通知⽅法
 @Around ⽤在⽅法上代表这个⽅法是⼀个环绕的⽅法
 @Around ⽤在⽅法上代表这个⽅法是⼀个环绕的⽅法
**/</span>

<span class="token doc-comment comment">/** 前置通知 */</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAspect</span> <span class="token punctuation">{</span>
 <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span>&quot;<span class="token function">execution</span><span class="token punctuation">(</span><span class="token operator">*</span> com<span class="token punctuation">.</span>sovue<span class="token punctuation">.</span>service<span class="token punctuation">.</span>*<span class="token punctuation">.</span>*
<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span>&quot;<span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;前置通知&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 joinPoint<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽬标对象</span>
 joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽅法签名</span>
 joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽅法参数</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**   后置 通知 */</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAspect</span> <span class="token punctuation">{</span>
 <span class="token annotation punctuation">@After</span><span class="token punctuation">(</span>&quot;<span class="token function">execution</span><span class="token punctuation">(</span><span class="token operator">*</span> com<span class="token punctuation">.</span>sovue<span class="token punctuation">.</span>service<span class="token punctuation">.</span>*<span class="token punctuation">.</span>*
<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span>&quot;<span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;后置通知&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 joinPoint<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽬标对象</span>
 joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽅法签名</span>
 joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽅法参数</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**注意: 前置通知和后置通知都没有返回值,⽅法参数都为
joinpoint**/</span>


<span class="token comment">/*  环绕切面 */</span>

<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyAspect</span> <span class="token punctuation">{</span>
 <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span>&quot;<span class="token function">execution</span><span class="token punctuation">(</span><span class="token operator">*</span> com<span class="token punctuation">.</span>sovue<span class="token punctuation">.</span>service<span class="token punctuation">.</span>*<span class="token punctuation">.</span>*
<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span>&quot;<span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span>
proceedingJoinPoint<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;进⼊环绕通知&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 proceedingJoinPoint<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽬标对象</span>
 proceedingJoinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽅法签</span>
名
 proceedingJoinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//⽅法参数</span>
 <span class="token class-name">Object</span> proceed <span class="token operator">=</span>
proceedingJoinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//放⾏执⾏⽬标⽅法</span>


 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>&quot;⽬标⽅法执⾏之后回到环绕通
知&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> proceed<span class="token punctuation">;</span><span class="token comment">//返回⽬标⽅法返回值</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//  注意: 环绕通知存在返回值,参数为ProceedingJoinPoint,</span>
<span class="token comment">// 如果执⾏放⾏,不会执⾏⽬标⽅法,⼀旦放⾏必须将⽬标⽅法的返回值</span>
<span class="token comment">// 返回,否则调⽤者⽆法接受返回数据</span>


</code></pre></div><h3 id="boot-下载" tabindex="-1"><a class="header-anchor" href="#boot-下载" aria-hidden="true">#</a> boot 下载</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/download&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">,</span>
<span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span>
response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
 <span class="token class-name">String</span> realPath <span class="token operator">=</span>
request<span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">FileInputStream</span> is <span class="token operator">=</span> <span class="token keyword">new</span>
<span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>realPath<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">ServletOutputStream</span> os <span class="token operator">=</span>
response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;contentdisposition&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;attachment;fileName=&quot;</span><span class="token operator">+</span>
<span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>is<span class="token punctuation">,</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">closeQuietly</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">closeQuietly</span><span class="token punctuation">(</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre></div>`,21),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","vu_boa.html.vue"]]);export{k as default};
