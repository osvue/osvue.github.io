import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--添加activiti和SpringBoot整合的依赖
            MyBatis版本会有冲突，所以需要排除,所需数据库的依赖根据需求添加--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.activiti<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>activiti-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.0.0.SR1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-lang3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--activiti可以绘制流程的的依赖--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.activiti<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>activiti-image-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.0.0.SR1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="安装activiti环境" tabindex="-1"><a class="header-anchor" href="#安装activiti环境" aria-hidden="true">#</a> 安装Activiti环境</h3><ul><li><p>在idea插件中安装绘图插件 <code>actiBPM</code></p></li><li><p>解决中文乱码</p></li><li><p>在IDEA中将<code>File–&gt;Settings–&gt;Editor–&gt;File Encodings</code>修改为UTF-8</p></li><li><p>在IDEA的<code>Help–&gt;Edit Custom VM Options中末尾添加-Dfile.encoding=UTF-8</code></p></li><li><p>在IDEA的安装目录的bin目录下将<code>idea.exe.vmoptions和idea64.exe.vmoptions</code>两个文件末尾添加<code>-Dfile.encoding=UTF-8</code></p></li><li><p>重启idea</p></li></ul><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> actspringboot
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/activiti<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;useSSL=false&amp;autoReconnect=true&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">activiti</span><span class="token punctuation">:</span>
    <span class="token comment"># false:默认值。activiti在启动时，会对比数据库表中保存的版本。如果没有表或者版本不匹配，将抛出异常</span>
    <span class="token comment"># true:activiti会对数据库中所有表进行更新操作，如果表不存在，则会自动创建</span>
    <span class="token comment"># create_drop:在activiti启动时创建表，在关闭时删除表（必须手动关闭引擎，才能删除表）</span>
    <span class="token comment"># drop-create:在activiti启动时删除原来的旧表，然后再创建新表（不需要手动关闭引擎）</span>
    <span class="token comment"># 线上一般使用false,开发中使用true</span>
    <span class="token key atrule">database-schema-update</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># 自动部署验证设置:true-开启（默认）、false-关闭</span>
    <span class="token key atrule">check-process-definitions</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># 开启历史表</span>
    <span class="token key atrule">db-history-used</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># 历史记录存储等级</span>
    <span class="token key atrule">history-level</span><span class="token punctuation">:</span> full

</code></pre></div><h4 id="usep6s" tabindex="-1"><a class="header-anchor" href="#usep6s" aria-hidden="true">#</a> useP6s</h4><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.p6spy.engine.spy.P6SpyDriver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>p6spy<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/activi<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;useSSL=false&amp;zeroDateTimeBehavior=convertToNull</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">hikari</span><span class="token punctuation">:</span>
      <span class="token key atrule">minimum-idle</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">maximum-pool-size</span><span class="token punctuation">:</span> <span class="token number">9</span>
      <span class="token key atrule">auto-commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">idle-timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>
      <span class="token key atrule">pool-name</span><span class="token punctuation">:</span> Weblog<span class="token punctuation">-</span>HikariCP
      <span class="token key atrule">max-lifetime</span><span class="token punctuation">:</span> <span class="token number">1800000</span>
      <span class="token key atrule">connection-timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>
      <span class="token key atrule">connection-test-query</span><span class="token punctuation">:</span> SELECT 1

<span class="token comment"># # activiti验证自动部署（默认开启）,activiti会自动部署processes目录下的任何BPMN 2.0流程定义</span>
<span class="token comment"># 如果开启，需要在resources下创建processes文件夹，并在其中创建流程定义（例如：one-task-process.bpmn20.xml）</span>
<span class="token comment"># 否则启动项目时会报错：class path resource [processes/] cannot be resolved to URL because it does not exist</span>
<span class="token comment">#spring.activiti.check-process-definitions=false</span>
  <span class="token key atrule">activiti</span><span class="token punctuation">:</span>
    <span class="token key atrule">check-process-definitions</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    
    <span class="token key atrule">database-schema-update</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre></div><ul><li>只是在Spring Boot项目中添加依赖，就会在幕后发生很多事情： <ol><li>自动创建了内存数据库（如果没有配置<code>spring.datasource.url</code>的话），并传递给Activiti流程引擎配置</li><li>创建并暴露了<code>Activiti ProcessEngine bean</code>（Activiti核心类）</li><li>所有的<code>Activiti</code>服务都暴露为<code>Spring bean</code>（如<strong>RuntimeService、TaskService</strong>等）</li><li>创建了<code>Spring Job Executor</code>并且，<strong>processes目录下的任何BPMN 2.0</strong>流程定义都会被自动部署。</li></ol></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
</code></pre></div>`,10),o=[e];function c(l,u){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","activiti_k_boot_activi.html.vue"]]);export{k as default};
