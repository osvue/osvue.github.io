import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>凡是被Spring管理的类，实现接口 <strong>EnvironmentAware</strong> 重写方法 <strong>setEnvironment</strong></li><li>可以在工程启动时，获取到系统环境变量和 <strong>application</strong>配置文件中的变量。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">EnvironmentAware</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>env<span class="token punctuation">.</span></span><span class="token class-name">Environment</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 实现接口：EnvironmentAware就能获取到系统环境信息
 * 
 * <span class="token keyword">@author</span> THE GIFTED
 *
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnvAwaer</span> <span class="token keyword">implements</span> <span class="token class-name">EnvironmentAware</span> <span class="token punctuation">{</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEnvironment</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">String</span> sp <span class="token operator">=</span> env<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> port <span class="token operator">=</span> env<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;server.port&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><ul><li>还可以通过 @<strong>ConfigurationProperties</strong> 读取application属性配置文件中的属性 <ul><li>依赖</li></ul></li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--spring-boot-configuration:spring boot 配置处理器; --&gt;</span>

       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>

           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>

           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>

       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="自定义properties" tabindex="-1"><a class="header-anchor" href="#自定义properties" aria-hidden="true">#</a> 自定义properties</h3><h4 id="configurationproperties-prefix-abcd-locations-classpath-config-abcd-properties" tabindex="-1"><a class="header-anchor" href="#configurationproperties-prefix-abcd-locations-classpath-config-abcd-properties" aria-hidden="true">#</a> @ConfigurationProperties(prefix = &quot;abcd&quot;,locations = &quot;classpath:config/abcd.properties&quot;)</h4>`,6),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","evn.html.vue"]]);export{r as default};
