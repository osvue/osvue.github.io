import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="contextpath" tabindex="-1"><a class="header-anchor" href="#contextpath" aria-hidden="true">#</a> contextPath</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>Spring boot默认是/ ，
这样直接通过http://ip:port/就可以访问到index页面，
如果要修改为http://ip:port/path/ 访问的话，
那么需要在Application.properties文件中加入
server.context-path = /  你的path,比如：spring-boot,
那么访问地址就是http://ip:port/spring-boot 路径。
</code></pre></div><p><code>server.context-path=/spring-boot</code></p><h3 id="定时任务-简单" tabindex="-1"><a class="header-anchor" href="#定时任务-简单" aria-hidden="true">#</a> 定时任务（简单）</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableScheduling</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Scheduled</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableScheduling</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SchedulingConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">&quot;0/20 * * * * ?&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 每20秒执行一次</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; SchedulingConfig.scheduler()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),e=[o];function c(l,u){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","llss.html.vue"]]);export{k as default};
