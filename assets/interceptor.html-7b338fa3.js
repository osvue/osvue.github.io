import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">InterceptorRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResourceHandlerRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurationSupport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurerAdapter</span></span><span class="token punctuation">;</span>
<span class="token comment">//@Component</span>
<span class="token comment">//public class InterceptorConfig extends WebMvcConfigurerAdapter {</span>
<span class="token comment">// @Override</span>
<span class="token comment">// public void addInterceptors(InterceptorRegistry registry) {</span>
<span class="token comment">//  // 添加拦截器</span>
<span class="token comment">//  registry.addInterceptor(new UserLoginInterceptor()).addPathPatterns(&quot;/**&quot;)// 定义拦截路径</span>
<span class="token comment">//    .excludePathPatterns(&quot;/hello/**&quot;); // 排除拦截路径</span>
<span class="token comment">// }</span>
<span class="token comment">//}</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterceptorConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserLoginInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 添加拦截器</span>
    <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/hello/**&quot;</span><span class="token punctuation">)</span><span class="token comment">// 添 加拦截的请求路径</span>
    <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/js/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/css/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/files/**&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 放⾏静态资源 静态资源被认为是 ⼀个控制器请求</span>
    <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/hello/world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 添加排除那些 请求路径不经过拦截器</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 注意:在springboot2.x版本中⾃定义拦截器之后出现项⽬中静态资 源 404情况,需要在⾃定义拦截器的配置中加⼊如下配置即可:</span>

 <span class="token comment">// springboot2.x 静态资源在⾃定义拦截器之后⽆法访问的 解决⽅案</span>
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 代表以 什么样的请求路径访问静态资源</span>
    <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/static/&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/templates/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor" aria-hidden="true">#</a> interceptor</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">HandlerInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ModelAndView</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserLoginInterceptor</span>  <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span><span class="token punctuation">{</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span>
   <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO Auto-generated method stub</span>
  <span class="token keyword">return</span> <span class="token class-name">HandlerInterceptor</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">preHandle</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
   <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO Auto-generated method stub</span>
  <span class="token class-name">HandlerInterceptor</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">postHandle</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> modelAndView<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
   <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO Auto-generated method stub</span>
  <span class="token class-name">HandlerInterceptor</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterCompletion</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 
<span class="token punctuation">}</span>

</code></pre></div>`,3),o=[e];function c(l,u){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","interceptor.html.vue"]]);export{i as default};
