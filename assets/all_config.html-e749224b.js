import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<ul><li>SpringBoot启动会加载大量的自动配置类</li><li>我们看我们需要的功能有没有SpringBoot默认写好的自动配置类；</li><li>我们再来看这个自动配置类中到底配置了哪些组件；（只要我们要用的组件有，我们就不需要再来配置了）</li><li>给容器中自动配置类添加组件的时候，会从properties类中获取某些属性。我们就可 以在配置文件中指定这些属性的值； <ul><li>xxxxAutoConfigurartion：自动配置类；给容器中添加组件</li><li>xxxxProperties:封装配置文件中的默认配置</li></ul></li></ul><ul><li>导入配置文件自动提示的包</li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="配置文件占位符" tabindex="-1"><a class="header-anchor" href="#配置文件占位符" aria-hidden="true">#</a> 配置文件占位符</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>\${random.int}生成一个int的随机数 
\${random.value}生成一个随机字符串
\${random.long}生成一个long的随机数据
\${random.int(10)}生成0-10的随机int数
\${random.int[10,100]} 生到10-100的随机int数


\${sutudent.name}读取ioc容器里面的student对象里的name属性
</code></pre></div><ol><li>如果配置是写在properties里面只有Map不能取到</li><li>如果配置写在yml 数组 集合 都取不到</li><li>如果属性是使用驼峰命名法则不能使用属性名注入，要使用 <strong><code>@Value(&quot;\${student.user-name}&quot;)</code></strong> 来取值不能使用 **<code>@Value(&quot;\${student.userName}&quot;)</code>**来取值</li></ol><h3 id="yml语法" tabindex="-1"><a class="header-anchor" href="#yml语法" aria-hidden="true">#</a> yml语法</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">student</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> xiaoming
  <span class="token key atrule">age</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>a.age<span class="token punctuation">}</span>
  <span class="token key atrule">hobby</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> LOL
    <span class="token punctuation">-</span> DNF
    <span class="token punctuation">-</span> CF
    <span class="token punctuation">-</span> LOL
  <span class="token key atrule">lists</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> LOL
    <span class="token punctuation">-</span> DNF
  <span class="token key atrule">maps</span><span class="token punctuation">:</span>
    <span class="token key atrule">k1</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">k2</span><span class="token punctuation">:</span> v2
  <span class="token key atrule">sets</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> LOL
    <span class="token punctuation">-</span> DNF
    <span class="token punctuation">-</span> CF
    <span class="token punctuation">-</span> LOL
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2019/12/12
<span class="token key atrule">a</span><span class="token punctuation">:</span>
  <span class="token key atrule">age</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>random.int(1<span class="token punctuation">,</span>100)<span class="token punctuation">}</span>


<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8088</span>
<span class="token comment">#数据源</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/shiro<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;useSSL=true&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token comment">#配置mybatisplus</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*Mapper.xml</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#端口</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token comment">#数据源</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/test<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;useSSL=true</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token comment">#配置数据源的类型</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> org.springframework.jdbc.datasource.DriverManagerDataSource
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
</code></pre></div>`,20),l=[p];function o(c,u){return n(),s("div",null,l)}const r=a(e,[["render",o],["__file","all_config.html.vue"]]);export{r as default};
