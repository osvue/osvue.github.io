import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="commandlinerunner" tabindex="-1"><a class="header-anchor" href="#commandlinerunner" aria-hidden="true">#</a> CommandLineRunner</h3><ul><li>有在项目服务启动的时候就去加载一些数据或做一些事情这样的需求。</li><li>为了解决这样的问题，Spring Boot 为我们提供了一个方法，通过实现接口 <strong>CommandLineRunner</strong> 来实现。</li><li>Spring Boot应用程序在启动后，会遍历 <strong>CommandLineRunner</strong> 接口的实例并运行它们的run方法。</li><li>也可以利用@Order注解（或者实现Order接口）来规定所有 <strong>CommandLineRunner</strong>实例的运行顺序。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">CommandLineRunner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppRunner</span>  <span class="token keyword">implements</span> <span class="token class-name">CommandLineRunner</span><span class="token punctuation">{</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO Auto-generated method stub</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;自定义 runner start ..........&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div>`,3),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","runner.html.vue"]]);export{r as default};
