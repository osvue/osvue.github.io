import{_ as n,p as a,q as s,a1 as e}from"./framework-d81ad7e5.js";const o={},t=e(`<h2 id="relaxedpropertyresolver" tabindex="-1"><a class="header-anchor" href="#relaxedpropertyresolver" aria-hidden="true">#</a> RelaxedPropertyResolver</h2><h2 id="外部化配置" tabindex="-1"><a class="header-anchor" href="#外部化配置" aria-hidden="true">#</a> 外部化配置</h2><ul><li><strong>Relaxed binding</strong> 宽松绑定 有关宽松绑定的规则已经收紧。 我们假设有一个的acme.my-project.my-name属性： 所有前缀必须是kebab格式（小写，连字符分隔），acme.myProject或acme.my_project是无效的 - 你必须在此处使用acme.my-project 属性名称可以使用kebab-case（my-name），camel-case（myName）或snake-case（my_name） 环境属性（来自OS环境变量）必须使用常规的大写下划线格式，其中下划线只能用于分隔关键词的各个部分，ACME_MYPROJECT_MYNAME 新的宽松绑定有若干优势：</li></ul><p>只要键值是按照标准格式定义的，就无需担忧在 @ConditionalOnProperty: 中键值的结构，被支持的宽松的变量将会自动透明的工作。如果你正在使用 prefix 属性，你可以简单地通过使用 name 或者value 属性 放入全键值。 源于Environment 关注自动化，RelaxedPropertyResolver 将不再可用：env.getProperty(&quot;com.foo.my-bar&quot;) 将找到一个 com.foo.myBar 属性。 org.springframework.boot.bind 包将不再可用，现被 new relaxed binding infrastructure 替换。</p><p>特别是，RelaxedDataBinder 相关的应用方式被替换为新的绑定API。下面的列子实现一个 com.foo 为前缀的配置到一个 POJO。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>codenew Binder(ConfigurationPropertySources.from(propertySource)).bind(&quot;com.foo&quot;, Bindable.of(target)))
</code></pre></div><p>由于现在内置了轻松绑定，因此只要使用其中一种支持的格式，就可以请求任何属性而不必关心案例：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>codeFlagType flagType = Binder.get(environment).bind(&quot;acme.app.my-flag&quot;, FlagType.class).orElse(FlagType.DEFAULT);
</code></pre></div><p>@ConfigurationProperties 校验 如果要打开校验，需要在@ConfigurationProperties 对象上添加注解@Validated。</p><p>Configuration location 配置位置 spring.config.location 配置的实现已经配置设定；基于提前添加一个位置到默认配置列表，现在它替换了 默认配置。</p><p>如果你是按照以前的方式进行处理，你应该使用spring.config.additional-location进行替换。</p><h2 id="configuration-property-sources" tabindex="-1"><a class="header-anchor" href="#configuration-property-sources" aria-hidden="true">#</a> Configuration Property Sources</h2><p>Spring Boot 2.0不是直接使用现有的PropertySource接口进行绑定，而是引入了一个新的ConfigurationPropertySource接口。 我们引入了一个新的接口，为我们提供了一个合理的地方来实施放松绑定规则，这些规则以前是活页夹的一部分 接口的主要API非常简单： code:&gt;&gt;ConfigurationProperty getConfigurationProperty(ConfigurationPropertyName name); 还有一个IterableConfigurationPropertySource变相的实现了Iterable 接口，以便您可以发现源包含的所有名称。</p><p>通过使用以下代码，可以将Spring Environment调整为ConfigurationPropertySources Iterable sources = ConfigurationPropertySources.get(environment); 如果您需要它，我们还提供一个简单的MapConfigurationPropertySource实现。</p><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><ul><li>原来的code</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">RelaxedPropertyResolver</span> propertyResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RelaxedPropertyResolver</span><span class="token punctuation">(</span>environment<span class="token punctuation">,</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>　　
propertyResolver<span class="token punctuation">.</span><span class="token function">getSubProperties</span><span class="token punctuation">(</span><span class="token string">&quot;....&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>现在的code</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigurationPropertySource</span><span class="token punctuation">&gt;</span></span> sources <span class="token operator">=</span> <span class="token class-name">ConfigurationPropertySources</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>　　
<span class="token class-name">Binder</span> binder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Binder</span><span class="token punctuation">(</span>sources<span class="token punctuation">)</span><span class="token punctuation">;</span>　　
<span class="token class-name">BindResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Properties</span><span class="token punctuation">&gt;</span></span> bindResult <span class="token operator">=</span> binder<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Properties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>　　
<span class="token class-name">Properties</span> properties<span class="token operator">=</span> bindResult<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,19),p=[t];function r(c,i){return a(),s("div",null,p)}const u=n(o,[["render",r],["__file","ttoone.html.vue"]]);export{u as default};
