import{_ as a,p as e,q as n,a1 as s}from"./framework-d81ad7e5.js";const o={},t=s(`<h2 id="nacos配置中心详解-namespace、group、dataid" tabindex="-1"><a class="header-anchor" href="#nacos配置中心详解-namespace、group、dataid" aria-hidden="true">#</a> nacos配置中心详解-NameSpace、Group、DataID</h2><ul><li><p>将这三者类比为Java中的工程、包、类</p></li><li><p>namespace的默认值为public</p></li><li><p>group的默认值为DEFAULT_GROUP</p></li><li><p>cluster的默认值为DEFAULT</p></li><li><p>service就是微服务</p></li></ul><h3 id="dataid" tabindex="-1"><a class="header-anchor" href="#dataid" aria-hidden="true">#</a> dataId</h3><ul><li><strong>dataId</strong>：是配置中心里最基础的单元，它是一种<code>key-value</code>结构，key通常是我们的配置文件名称，比如：<code>application.yml、mybatis.xml</code>，而value是整个文件下的内容。</li></ul><p>目前支持<code>JSON、XML、YAML</code>等多种配置格式。</p><blockquote><p><strong><code>\${prefix}-\${spring.profile.active}.\${file-extension:properties}</code></strong></p></blockquote><ul><li>如果Data Id的值为<code>nacos-config-dev.properties</code>，则在 <code>bootstrap.properties</code> 配置如下：</li></ul><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.nacos.config.prefix</span><span class="token punctuation">=</span><span class="token value attr-value">nacos-config</span>
<span class="token key attr-name">spring.cloud.nacos.config.file-extension</span><span class="token punctuation">=</span><span class="token value attr-value">yaml</span>
<span class="token key attr-name">spring.profile.active</span><span class="token punctuation">=</span><span class="token value attr-value">dev</span>
<span class="token key attr-name">spring.cloud.nacos.config.server-addr</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:8848</span>
</code></pre></div><ul><li><p><strong>group</strong>：dataId配置的分组管理，比如同在dev环境下开发，但同环境不同分支需要不同的配置数据，这时就可以用分组隔离，默认分组<code>DEFAULT_GROUP</code>。</p></li><li><p><strong>namespace</strong>：项目开发过程中肯定会有<code>dev、test、pro</code>等多个不同环境，namespace则是对不同环境进行隔离，默认所有配置都在public里。</p></li></ul>`,9),c=[t];function p(l,i){return e(),n("div",null,c)}const d=a(o,[["render",p],["__file","nacos_c_config.html.vue"]]);export{d as default};