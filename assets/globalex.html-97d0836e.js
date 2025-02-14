import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="异常统一处理" tabindex="-1"><a class="header-anchor" href="#异常统一处理" aria-hidden="true">#</a> 异常统一处理</h3><ul><li><p>在class注解上 <strong>@ControllerAdvice</strong></p></li><li><p>在方法上注解上 <strong>@ExceptionHandler(value = Exception.class)</strong></p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
       <span class="token comment">/*

        * 返回json数据或者String数据：

        * 那么需要在方法上加上注解：@ResponseBody

        * 添加return即可。

        */</span>

       

       <span class="token comment">/*

        * 返回视图：

        * 定义一个ModelAndView即可，

        * 然后return;

        * 定义视图文件(比如：error.html,error.ftl,error.jsp);

        *

        */</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ControllerAdvice</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ExceptionHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResponseBody</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHoder</span> <span class="token punctuation">{</span>

 <span class="token annotation punctuation">@ResponseBody</span>
 <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">defaultErrorHandler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;global exception control ...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="log4j" tabindex="-1"><a class="header-anchor" href="#log4j" aria-hidden="true">#</a> log4j</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span>  <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="优雅注入" tabindex="-1"><a class="header-anchor" href="#优雅注入" aria-hidden="true">#</a> 优雅注入</h3><div class="language-java" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">CustomProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;custom.datasource.ds1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomProperties</span> <span class="token punctuation">{</span>
 
 <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> driverClassName<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 在启动类中加入：</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">BlogProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div>`,7),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","globalex.html.vue"]]);export{k as default};
