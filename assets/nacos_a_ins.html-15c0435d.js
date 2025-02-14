import{_ as a,p as n,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h2 id="数据持久化" tabindex="-1"><a class="header-anchor" href="#数据持久化" aria-hidden="true">#</a> 数据持久化</h2><p><code>cd nacos/conf/ application.properties</code></p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>

<span class="token key attr-name">spring.datasource.platform</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>

<span class="token comment">### Count of DB:</span>
<span class="token key attr-name">db.num</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>

<span class="token comment">### Connect URL of DB:</span>
<span class="token key attr-name">db.url.0</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=UTC</span>
<span class="token key attr-name">db.user.0</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">db.password.0</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token comment">### Connection pool configuration: hikariCP</span>
<span class="token key attr-name">db.pool.config.connectionTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">30000</span>
<span class="token key attr-name">db.pool.config.validationTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">db.pool.config.maximumPoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">20</span>
<span class="token key attr-name">db.pool.config.minimumIdle</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>

</code></pre></div><h3 id="启动-单节点" tabindex="-1"><a class="header-anchor" href="#启动-单节点" aria-hidden="true">#</a> 启动 单节点</h3><ul><li>nacos 默认启动为集群模式，</li><li><code> startup.cmd -m standalone</code> -m 单节点模式</li></ul>`,5),p=[o];function c(l,r){return n(),s("div",null,p)}const i=a(t,[["render",c],["__file","nacos_a_ins.html.vue"]]);export{i as default};
