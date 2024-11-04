import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>需要开启异步，SpringBoot 项目默认是没有开启异步的，我们需要手动配置开启异步功能</li><li>很简单，只需要在配置类上加上 <strong>@EnableAsync</strong>注解就行了，这个注解用于声明启用 Spring 的异步方法执行功能，需要和@Configuration注解一起使用，也可以直接加在启动类上。</li><li>通过使用 <strong>@Async</strong>注解就能简单的将原来的同步函数变为异步函数</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>dm</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Async</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  AsyncMethod   
 * @Description:TODO(异步方法)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2022-7-27 11:29:52    
 * @Copyright: 2022
 * 为了让@Async注解能够生效，还需要在Spring Boot的主程序中配置@EnableAsync
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncMethod</span> <span class="token punctuation">{</span>

 <span class="token annotation punctuation">@Async</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">asTw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token operator">+</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
 <span class="token annotation punctuation">@Async</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">asTwa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token operator">+</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// TODO Auto-generated catch block</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">//  Thread.sleep(TimeUnit.SECONDS,2);</span>
 <span class="token punctuation">}</span>
 
 
<span class="token punctuation">}</span>

</code></pre></div><h2 id="自定义线程池" tabindex="-1"><a class="header-anchor" href="#自定义线程池" aria-hidden="true">#</a> 自定义线程池</h2><ul><li>使用 <strong>@Async</strong> 的时候，一般都会自定义线程池，因为 <strong>@Async</strong>的默认线程池为 <code>SimpleAsyncTaskExecutor</code>，不是真的线程池，这个类不重用线程，默认每次调用都会创建一个新的线程。</li></ul><h4 id="自定义线程池有三种方式" tabindex="-1"><a class="header-anchor" href="#自定义线程池有三种方式" aria-hidden="true">#</a> 自定义线程池有三种方式</h4><ul><li><p>实现接口 AsyncConfigurer</p></li><li><p>继承 AsyncConfigurerSupport</p></li><li><p>配置由自定义的 TaskExecutor 替代内置的任务执行器</p></li><li><p><strong>实现接口 AsyncConfigurer</strong></p></li></ul>`,6),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","kz_async.html.vue"]]);export{k as default};
