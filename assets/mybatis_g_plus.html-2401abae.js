import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<div class="language-xml" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="iservice" tabindex="-1"><a class="header-anchor" href="#iservice" aria-hidden="true">#</a> IService</h3><h5 id="service层需要继承iservice-当然实现层也要继承对应的实现类" tabindex="-1"><a class="header-anchor" href="#service层需要继承iservice-当然实现层也要继承对应的实现类" aria-hidden="true">#</a> service层需要继承IService，当然实现层也要继承对应的实现类</h5><hr><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="impl" tabindex="-1"><a class="header-anchor" href="#impl" aria-hidden="true">#</a> impl</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="mapper" tabindex="-1"><a class="header-anchor" href="#mapper" aria-hidden="true">#</a> mapper</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


</code></pre></div><h2 id="mybaits-yml" tabindex="-1"><a class="header-anchor" href="#mybaits-yml" aria-hidden="true">#</a> mybaits yml</h2><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#数据源</span>
<span class="token comment">#配置mybatisplus</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  mapper<span class="token punctuation">-</span><span class="token key atrule">locations</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*Mapper.xml</span>
  global<span class="token punctuation">-</span><span class="token key atrule">config</span><span class="token punctuation">:</span>
    db<span class="token punctuation">-</span><span class="token key atrule">config</span><span class="token punctuation">:</span>
      id<span class="token punctuation">-</span><span class="token key atrule">type</span><span class="token punctuation">:</span> auto
    banner<span class="token punctuation">:</span> <span class="token boolean important">true</span>



<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token comment">#外部化xml配置</span>
  <span class="token comment">#config-location: classpath:mybatis-config.xml</span>
  <span class="token comment">#指定外部化 MyBatis Properties 配置，通过该配置可以抽离配置，实现不同环境的配置部署</span>
  <span class="token comment">#configuration-properties: classpath:mybatis/config.properties</span>
  <span class="token comment">#xml扫描，多个目录用逗号或者分号分隔（告诉 Mapper 所对应的 XML 文件位置）</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token important">*:/mapper/*.xml</span>
  <span class="token comment">#MyBaits 别名包扫描路径，通过该属性可以给包中的类注册别名</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> net.xinhuamm.noah.api.model.entity<span class="token punctuation">,</span>net.xinhuamm.noah.api.model.dto
  <span class="token comment">#如果配置了该属性，则仅仅会扫描路径下以该类作为父类的域对象</span>
  <span class="token comment">#type-aliases-super-type: java.lang.Object</span>
  <span class="token comment">#枚举类 扫描路径，如果配置了该属性，会将路径下的枚举类进行注入，让实体类字段能够简单快捷的使用枚举属性</span>
  <span class="token comment">#type-enums-package: com.baomidou.mybatisplus.samples.quickstart.enums</span>
  <span class="token comment">#项目启动会检查xml配置存在(只在开发时候打开)</span>
  <span class="token key atrule">check-config-location</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment">#SIMPLE：该执行器类型不做特殊的事情，为每个语句的执行创建一个新的预处理语句,REUSE：该执行器类型会复用预处理语句,BATCH：该执行器类型会批量执行所有的更新语句</span>
  <span class="token key atrule">default-executor-type</span><span class="token punctuation">:</span> REUSE
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token comment"># 是否开启自动驼峰命名规则（camel case）映射，即从经典数据库列名 A_COLUMN（下划线命名） 到经典 Java 属性名 aColumn（驼峰命名） 的类似映射</span>
    <span class="token key atrule">map-underscore-to-camel-case</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># 全局地开启或关闭配置文件中的所有映射器已经配置的任何缓存，默认为 true</span>
    <span class="token key atrule">cache-enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment">#懒加载</span>
    <span class="token comment">#aggressive-lazy-loading: true</span>
    <span class="token comment">#NONE：不启用自动映射 PARTIAL：只对非嵌套的 resultMap 进行自动映射 FULL：对所有的 resultMap 都进行自动映射</span>
    <span class="token comment">#auto-mapping-behavior: partial</span>
    <span class="token comment">#NONE：不做任何处理 (默认值)WARNING：以日志的形式打印相关警告信息 FAILING：当作映射失败处理，并抛出异常和详细信息</span>
    <span class="token comment">#auto-mapping-unknown-column-behavior: none</span>
    <span class="token comment">#如果查询结果中包含空值的列，则 MyBatis 在映射的时候，不会映射这个字段</span>
    <span class="token key atrule">call-setters-on-nulls</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># 这个配置会将执行的sql打印出来，在开发或测试的时候可以用</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token comment">#表名下划线命名默认true</span>
      <span class="token key atrule">table-underline</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment">#id类型</span>
      <span class="token key atrule">id-type</span><span class="token punctuation">:</span> auto
      <span class="token comment">#是否开启大写命名，默认不开启</span>
      <span class="token comment">#capital-mode: false</span>
      <span class="token comment">#逻辑已删除值,(逻辑删除下有效) 需要注入逻辑策略LogicSqlInjector 以@Bean方式注入</span>
      <span class="token key atrule">logic-not-delete-value</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token comment">#逻辑未删除值,(逻辑删除下有效)</span>
      <span class="token key atrule">logic-delete-value</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token comment">#数据库类型</span>
      <span class="token key atrule">db-type</span><span class="token punctuation">:</span> sql_server
</code></pre></div><h2 id="mybatis-plus-yml-打印详细sql" tabindex="-1"><a class="header-anchor" href="#mybatis-plus-yml-打印详细sql" aria-hidden="true">#</a> mybatis-plus yml 打印详细SQL</h2><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
  mapper<span class="token punctuation">-</span><span class="token key atrule">locations</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*Mapper.xml</span>
  global<span class="token punctuation">-</span><span class="token key atrule">config</span><span class="token punctuation">:</span>
    db<span class="token punctuation">-</span><span class="token key atrule">config</span><span class="token punctuation">:</span>
      id<span class="token punctuation">-</span><span class="token key atrule">type</span><span class="token punctuation">:</span> auto
    banner<span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 方法一:</span>

<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
        <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl <span class="token comment">#开启sql日志</span>

<span class="token comment"># 方法二:</span>

<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">com.chz.mapper</span><span class="token punctuation">:</span> debug
</code></pre></div><h3 id="config-mybatis" tabindex="-1"><a class="header-anchor" href="#config-mybatis" aria-hidden="true">#</a> config_mybatis</h3><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#mybatis-plus</span>

<span class="token key attr-name">mybatis-plus.mapper-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath*:**/mapper/xml/*.xml</span>

<span class="token key attr-name">mybatis-plus.type-aliases-package</span><span class="token punctuation">=</span><span class="token value attr-value">com.caochenlei.mpdemo.pojo</span>

<span class="token key attr-name">mybatis-plus.type-handlers-package</span><span class="token punctuation">=</span><span class="token value attr-value">com.caochenlei.mpdemo.type</span>

<span class="token key attr-name">mybatis-plus.type-enums-package</span><span class="token punctuation">=</span><span class="token value attr-value">com.caochenlei.mpdemo.enum</span>

<span class="token key attr-name">mybatis-plus.check-config-location</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token key attr-name">mybatis-plus.executor-type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>

<span class="token comment">#mybatis-plus.configuration</span>

<span class="token key attr-name">mybatis-plus.configuration.map-underscore-to-camel-case</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token key attr-name">mybatis-plus.configuration.default-enum-type-handler</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.ibatis.type.EnumTypeHandler</span>

<span class="token key attr-name">mybatis-plus.configuration.aggressive-lazy-loading</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token key attr-name">mybatis-plus.configuration.lazy-loading-enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token key attr-name">mybatis-plus.configuration.auto-mapping-behavior</span><span class="token punctuation">=</span><span class="token value attr-value">partial</span>

<span class="token key attr-name">mybatis-plus.configuration.auto-mapping-unknown-column-behavior</span><span class="token punctuation">=</span><span class="token value attr-value">none</span>

<span class="token key attr-name">mybatis-plus.configuration.local-cache-scope</span><span class="token punctuation">=</span><span class="token value attr-value">session</span>

<span class="token key attr-name">mybatis-plus.configuration.cache-enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token key attr-name">mybatis-plus.configuration.call-setters-on-nulls</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token key attr-name">mybatis-plus.configuration.configuration-factory</span><span class="token punctuation">=</span>

<span class="token key attr-name">mybatis-plus.configuration.log-impl</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.ibatis.logging.stdout.StdOutImpl</span>

<span class="token comment">#mybatis-plus.global-config</span>

<span class="token key attr-name">mybatis-plus.global-config.banner</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token key attr-name">mybatis-plus.global-config.enable-sql-runner</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token key attr-name">mybatis-plus.global-config.super-mapper-class</span><span class="token punctuation">=</span><span class="token value attr-value">com.baomidou.mybatisplus.core.mapper.Mapper</span>

<span class="token comment">#mybatis-plus.global-config.db-config</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.id-type</span><span class="token punctuation">=</span><span class="token value attr-value">assign_id</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.table-prefix</span><span class="token punctuation">=</span><span class="token value attr-value">tbl_</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.schema</span><span class="token punctuation">=</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.column-format</span><span class="token punctuation">=</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.property-format</span><span class="token punctuation">=</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.table-underline</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.capital-mode</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.logic-delete-field</span><span class="token punctuation">=</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.logic-delete-value</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.logic-not-delete-value</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.insert-strategy</span><span class="token punctuation">=</span><span class="token value attr-value">not_null</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.update-strategy</span><span class="token punctuation">=</span><span class="token value attr-value">not_null</span>

<span class="token key attr-name">mybatis-plus.global-config.db-config.select-strategy</span><span class="token punctuation">=</span><span class="token value attr-value">not_null </span>
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Resource</span> <span class="token class-name">TUserMapper</span> tUserMapper<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">UserDetails</span> <span class="token function">loadUserByUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UsernameNotFoundException</span> <span class="token punctuation">{</span>
    <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TUser</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">TUser</span> tUser <span class="token operator">=</span> tUserMapper<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOne</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="条件构造器and-or嵌套使用" tabindex="-1"><a class="header-anchor" href="#条件构造器and-or嵌套使用" aria-hidden="true">#</a> 条件构造器and or嵌套使用</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// A or (B and C)</span>
<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> i<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// A or (B or C)</span>
<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> i<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// A and (B and C)</span>
<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> i<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// A and (B or C)</span>
<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> i<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> wrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token string">&quot;delete_time&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;oid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">orderByDesc</span><span class="token punctuation">(</span><span class="token string">&quot;create_time&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

wrapper<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> i<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token string">&quot;type_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;收款单&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;退款单&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token string">&quot;type_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;手工收款单&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;手工退款单&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre></div><ul><li><strong>sql语句如下</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> am_payment
<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>
 delete_time <span class="token operator">IS</span> <span class="token boolean">NULL</span>
 <span class="token operator">AND</span>
 oid <span class="token operator">=</span> ? 
 
    <span class="token operator">AND</span> <span class="token punctuation">(</span>
            <span class="token keyword">status</span> <span class="token operator">=</span> ?
            <span class="token operator">AND</span>
            type_name <span class="token operator">IN</span> <span class="token punctuation">(</span>?<span class="token punctuation">,</span>?<span class="token punctuation">)</span>
            <span class="token operator">OR</span>
            type_name <span class="token operator">IN</span> <span class="token punctuation">(</span>?<span class="token punctuation">,</span>?<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> create_time <span class="token keyword">DESC</span><span class="token punctuation">,</span>id <span class="token keyword">DESC</span>
<span class="token keyword">limit</span> ?
<span class="token keyword">offset</span> ? 
</code></pre></div>`,21),o=[e];function c(l,u){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","mybatis_g_plus.html.vue"]]);export{k as default};
