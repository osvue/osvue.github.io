import{_ as n,p as a,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},p=e(`<ul><li><p>p6spy是一个开源的数据库监控插件，我们能通过使用p6spy打印数据库操作或者保存操作日志</p></li><li><p><strong>pom</strong></p></li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/p6spy/p6spy --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>p6spy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>p6spy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.8.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource</span>
<span class="token comment">#原来</span>
<span class="token comment">#spring.datasource.url=jdbc:mysql://x.x.x.x:3306/table</span>

<span class="token comment">#使用p6spy后需要修改成的样子</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:p6spy:mysql://x.x.x.x:3306/table?</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">username</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">password</span>

<span class="token comment">#原来</span>
<span class="token comment">#spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver</span>

<span class="token comment">#使用p6spy后需要修改成的样子</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.P6SpyDriver</span>
</code></pre></div><ul><li><strong>添加spy.properties配置文件（与application.yml同级）</strong></li></ul><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">module.log</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory</span>
<span class="token comment"># 使用日志系统记录sql</span>
<span class="token key attr-name">appender</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.Slf4JLogger</span>
<span class="token comment">## 配置记录Log例外</span>
<span class="token key attr-name">excludecategories</span><span class="token punctuation">=</span><span class="token value attr-value">info,debug,result,batc,resultset</span>
<span class="token comment"># 设置使用p6spy driver来做代理</span>
<span class="token key attr-name">deregisterdrivers</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># 日期格式</span>
<span class="token key attr-name">dateformat</span><span class="token punctuation">=</span><span class="token value attr-value">yyyy-MM-dd HH:mm:ss</span>
<span class="token comment"># 实际驱动</span>
<span class="token key attr-name">driverlist</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token comment"># 是否开启慢SQL记录</span>
<span class="token key attr-name">outagedetection</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># 慢SQL记录标准 秒</span>
<span class="token key attr-name">outagedetectioninterval</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
</code></pre></div><ul><li><strong>自定义日志打印</strong></li></ul><ol><li>实现MessageFormattingStrategy接口</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">P6SpyLogger</span> <span class="token keyword">implements</span> <span class="token class-name">MessageFormattingStrategy</span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">connectionId</span> 连接id
     * <span class="token keyword">@param</span> <span class="token parameter">now</span> 当前时间
     * <span class="token keyword">@param</span> <span class="token parameter">elapsed</span> 耗时
     * <span class="token keyword">@param</span> <span class="token parameter">category</span> 类型
     * <span class="token keyword">@param</span> <span class="token parameter">prepared</span> 声明的sql语句
     * <span class="token keyword">@param</span> <span class="token parameter">sql</span> 有效的sql语句
     * <span class="token keyword">@param</span> <span class="token parameter">datasource</span> 连接属性
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">formatMessage</span><span class="token punctuation">(</span><span class="token keyword">int</span> connectionId<span class="token punctuation">,</span> <span class="token class-name">String</span> now<span class="token punctuation">,</span> <span class="token keyword">long</span> elapsed<span class="token punctuation">,</span> <span class="token class-name">String</span> category<span class="token punctuation">,</span> <span class="token class-name">String</span> prepared<span class="token punctuation">,</span> <span class="token class-name">String</span> sql<span class="token punctuation">,</span><span class="token class-name">String</span> datasource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>sql<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;[ &quot;</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; ] --- | took &quot;</span>
                <span class="token operator">+</span> elapsed <span class="token operator">+</span> <span class="token string">&quot;ms | &quot;</span> <span class="token operator">+</span> category <span class="token operator">+</span> <span class="token string">&quot; | connection &quot;</span> <span class="token operator">+</span> connectionId <span class="token operator">+</span><span class="token string">&quot;\\n &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;datasource &quot;</span> <span class="token operator">+</span> datasource <span class="token operator">+</span><span class="token string">&quot;\\n &quot;</span>
                <span class="token operator">+</span> sql <span class="token operator">+</span> <span class="token string">&quot;;&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li><strong>在spy.properties中添加配置</strong></li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code># 自定义日志打印（就是上面添加的P6SpyLogger.java）
#logMessageFormat=com.p6spy.demop6spy.conf.P6SpyLogger
</code></pre></div><ul><li><strong>使用p6spy提供的logMessageFormat实现</strong></li></ul><div class="language-config" data-ext="config"><pre class="language-config"><code>logMessageFormat=com.p6spy.engine.spy.appender.CustomLineFormat
customLogMessageFormat=%(currentTime) | SQL use time： %(executionTime) ms | connect info： %(category)-%(connectionId) | execute sql： %(sql)
</code></pre></div><h4 id="allconfig" tabindex="-1"><a class="header-anchor" href="#allconfig" aria-hidden="true">#</a> allConfig</h4><div class="language-cfg" data-ext="cfg"><pre class="language-cfg"><code># 指定应用的日志拦截模块,默认为com.p6spy.engine.spy.P6SpyFactory 
#modulelist=com.p6spy.engine.spy.P6SpyFactory,com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory
 
# 真实JDBC driver , 多个以 逗号 分割 默认为空
#driverlist=
 
# 是否自动刷新 默认 flase
#autoflush=false
 
# 配置SimpleDateFormat日期格式 默认为空
#dateformat=
 
# 打印堆栈跟踪信息 默认flase
#stacktrace=false
 
# 如果 stacktrace=true，则可以指定具体的类名来进行过滤。
#stacktraceclass=
 
# 监测属性配置文件是否进行重新加载
#reloadproperties=false
 
# 属性配置文件重新加载的时间间隔，单位:秒 默认60s
#reloadpropertiesinterval=60
 
# 指定 Log 的 appender，取值：
#appender=com.p6spy.engine.spy.appender.Slf4JLogger
#appender=com.p6spy.engine.spy.appender.StdoutLogger
#appender=com.p6spy.engine.spy.appender.FileLogger
 
# 指定 Log 的文件名 默认 spy.log
#logfile=spy.log
 
# 指定是否每次是增加 Log，设置为 false 则每次都会先进行清空 默认true
#append=true
 
# 指定日志输出样式  默认为com.p6spy.engine.spy.appender.SingleLineFormat , 单行输出 不格式化语句
#logMessageFormat=com.p6spy.engine.spy.appender.SingleLineFormat
# 也可以采用  com.p6spy.engine.spy.appender.CustomLineFormat 来自定义输出样式, 默认值是%(currentTime)|%(executionTime)|%(category)|connection%(connectionId)|%(sqlSingleLine)
# 可用的变量为:
#   %(connectionId)            connection id
#   %(currentTime)             当前时间
#   %(executionTime)           执行耗时
#   %(category)                执行分组
#   %(effectiveSql)            提交的SQL 换行
#   %(effectiveSqlSingleLine)  提交的SQL 不换行显示
#   %(sql)                     执行的真实SQL语句，已替换占位
#   %(sqlSingleLine)           执行的真实SQL语句，已替换占位 不换行显示
#customLogMessageFormat=%(currentTime)|%(executionTime)|%(category)|connection%(connectionId)|%(sqlSingleLine)
 
# date类型字段记录日志时使用的日期格式 默认dd-MMM-yy
#databaseDialectDateFormat=dd-MMM-yy
 
# boolean类型字段记录日志时使用的日期格式 默认boolean 可选值numeric
#databaseDialectBooleanFormat=boolean
 
# 是否通过jmx暴露属性 默认true
#jmx=true
 
# 如果jmx设置为true 指定通过jmx暴露属性时的前缀 默认为空
# com.p6spy(.&lt;jmxPrefix&gt;)?:name=&lt;optionsClassName&gt;
#jmxPrefix=
 
# 是否显示纳秒 默认false
#useNanoTime=false
 
# 实际数据源 JNDI
#realdatasource=/RealMySqlDS
# 实际数据源 datasource class
#realdatasourceclass=com.mysql.jdbc.jdbc2.optional.MysqlDataSource
 
# 实际数据源所携带的配置参数 以 k=v 方式指定 以 分号 分割
#realdatasourceproperties=port;3306,serverName;myhost,databaseName;jbossdb,foo;bar
 
# jndi数据源配置 
# 设置 JNDI 数据源的 NamingContextFactory。 
#jndicontextfactory=org.jnp.interfaces.NamingContextFactory
# 设置 JNDI 数据源的提供者的 URL。 
#jndicontextproviderurl=localhost:1099
# 设置 JNDI 数据源的一些定制信息，以分号分隔。 
#jndicontextcustom=java.naming.factory.url.pkgs;org.jboss.naming:org.jnp.interfaces
 
# 是否开启日志过滤 默认false， 这项配置是否生效前提是配置了 include/exclude/sqlexpression
#filter=false
 
# 过滤 Log 时所包含的表名列表，以逗号分隔 默认为空
#include=
# 过滤 Log 时所排除的表名列表，以逗号分隔 默认为空
#exclude=
 
# 过滤 Log 时的 SQL 正则表达式名称  默认为空
#sqlexpression=
 
#显示指定过滤 Log 时排队的分类列表，取值: error, info, batch, debug, statement,
#commit, rollback, result and resultset are valid values
# (默认 info,debug,result,resultset,batch)
#excludecategories=info,debug,result,resultset,batch
 
# 是否过滤二进制字段
# (default is false)
#excludebinary=false
 
# P6Log 模块执行时间设置，整数值 (以毫秒为单位)，只有当超过这个时间才进行记录 Log。 默认为0
#executionThreshold=
 
# P6Outage 模块是否记录较长时间运行的语句 默认false
# outagedetection=true|false
# P6Outage 模块执行时间设置，整数值 （以秒为单位)），只有当超过这个时间才进行记录 Log。 默认30s
# outagedetectioninterval=integer time (seconds)
</code></pre></div>`,14),o=[p];function c(l,r){return a(),s("div",null,o)}const u=n(t,[["render",c],["__file","boot_z_pspy.html.vue"]]);export{u as default};
