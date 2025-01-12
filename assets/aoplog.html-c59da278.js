import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h4 id="实现web层的日志切面" tabindex="-1"><a class="header-anchor" href="#实现web层的日志切面" aria-hidden="true">#</a> 实现Web层的日志切面</h4><p>实现AOP的切面主要有以下几个要素：</p><ul><li>使用@Aspect注解将一个java类定义为切面类</li><li>使用@Pointcut定义一个切入点，可以是一个规则表达式，比如下例中某个package下的所有函数，也可以是一个注解等。</li><li>根据需要在切入点不同位置的切入内容 <ul><li><p>使用@Before在切入点开始处切入内容</p></li><li><p>使用@After在切入点结尾处切入内容</p></li><li><p>使用@AfterReturning在切入点return内容之后切入内容（可以用来对处理返回值做一些加工处理）</p></li><li><p>使用@Around在切入点前后切入内容，并自己控制何时执行切入点自身的内容</p></li><li><p>使用@AfterThrowing用来处理当切入内容部分抛出异常之后的处理逻辑。</p></li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr<span class="token punctuation">.</span>aop</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Enumeration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">JoinPoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">AfterReturning</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Aspect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Before</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Pointcut</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>context<span class="token punctuation">.</span>request<span class="token punctuation">.</span></span><span class="token class-name">RequestContextHolder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>context<span class="token punctuation">.</span>request<span class="token punctuation">.</span></span><span class="token class-name">ServletRequestAttributes</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * @ClassName: LogAspect
 * @Description:TODO(这里用一句话描述这个类的作用)
 * <span class="token keyword">@author</span>: hzq
 * <span class="token keyword">@date</span>: 2022-7-27 10:35:59
 * @Copyright: 2022
 */</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogAspect</span> <span class="token punctuation">{</span>

 <span class="token keyword">private</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">/*
  * 切点表达式 ~第一个 *代表任意修饰符及任意返回值.
  * 
  * ~第二个 *任意包名
  * 
  * ~第三个 *代表任意方法.
  * 
  * ~第四个 *定义在web包或者子包
  * 
  * ~第五个 *任意方法
  * 
  * ~ ..匹配任意数量的参数
  */</span>

 <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(public * com.osvue..*.controller..*(..))&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">webLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">}</span>

 <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">)</span>

 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doBefore</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 接收到请求，记录请求内容</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;WebLogAspect.doBefore()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">ServletRequestAttributes</span> attributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> attributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 记录下请求内容</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;URL : &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getRequestURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;HTTP_METHOD : &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;IP : &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getRemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;CLASS_METHOD : &quot;</span> <span class="token operator">+</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaringTypeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span>
    <span class="token operator">+</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;ARGS : &quot;</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
        <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> enu <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameterNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>enu<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">String</span> paraName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> enu<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>paraName <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span>paraName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>

 <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span><span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterReturning</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理完请求，返回内容</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;WebLogAspect.doAfterReturning()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="aop切面的优先级" tabindex="-1"><a class="header-anchor" href="#aop切面的优先级" aria-hidden="true">#</a> AOP切面的优先级</h3><ul><li><p>由于通过AOP实现，程序得到了很好的解耦，但是也会带来一些问题，比如：我们可能会对Web层做多个切面，校验用户，校验头信息等等，这个时候经常会碰到切面的处理顺序问题。</p></li><li><p>所以，我们需要定义每个切面的优先级，我们需要 <strong>@Order(i)</strong> 注解来标识切面的优先级。i的值越小，优先级越高。假设我们还有一个切面是CheckNameAspect用来校验name必须为didi，我们为其设置 <strong>@Order(10)</strong> ，而上文中WebLogAspect设置为 <strong>@Order(5)</strong> ，所以WebLogAspect有更高的优先级，这个时候执行顺序是这样的：</p></li><li><p>在@Before中优先执行 <strong>@Order(5)</strong> 的内容，再执行 <strong>@Order(10)</strong> 的内容</p></li><li><p>在@After和@AfterReturning中优先执行 <strong>@Order(10)</strong> 的内容，再执行 <strong>@Order(5)</strong> 的内容</p></li></ul><p>所以我们可以这样子总结：</p><blockquote><p>在切入点前的操作，按order的值由小到大执行</p></blockquote><blockquote><p>在切入点后的操作，按order的值由大到小执行</p></blockquote><p>在实际中order值可以设置为负值，确保是第一个进行执行的。</p>`,10),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","aoplog.html.vue"]]);export{k as default};
