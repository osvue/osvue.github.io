import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const o={},p=t(`<ul><li><p><strong>@ImportResouce</strong>注解加载XML配置文件</p></li><li><p>编写<strong>application-bean.xml</strong>注入bean;</p></li><li><p>在<code>src/main/resouces</code>下编写配置文件<code>application-bean.xml</code>文件</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ImportResource</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * classpath路径：locations=<span class="token punctuation">{</span>&quot;classpath:application-bean1.xml&quot;,&quot;classpath:application-bean2.xml&quot;<span class="token punctuation">}</span>
 * file路径： locations = <span class="token punctuation">{</span>&quot;file:d:/test/application-bean1.xml&quot;<span class="token punctuation">}</span>;
 */</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ImportResource</span><span class="token punctuation">(</span>locations<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;classpath:application-bean.xml&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//@ImportResource(locations={&quot;file:d:/test/application-bean1.xml&quot;})</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigClass</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div>`,2),c=[p];function e(l,i){return a(),s("div",null,c)}const r=n(o,[["render",e],["__file","impxml.html.vue"]]);export{r as default};
