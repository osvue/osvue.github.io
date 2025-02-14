import{_ as a,M as l,p as s,q as o,R as t,t as e,N as g,a1 as i}from"./framework-d81ad7e5.js";const r={},u=i(`<ul><li><strong>-Xms和-Xmx</strong></li></ul><ul><li><p><code>-Xms</code>: 设置初始化堆内存大小；</p></li><li><p><code>-Xmx</code>: 设置最大可分配堆内存大小;</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化128MB 堆内存, 允许最大堆内存最大1024MB. </span>
<span class="token function">java</span> <span class="token parameter variable">-Xms128m</span> <span class="token parameter variable">-Xmx1024m</span>
 
<span class="token comment"># 初始化256MB 堆内存, 允许最大堆内存最大4G.</span>
<span class="token function">java</span> <span class="token parameter variable">-Xms256m</span> <span class="token parameter variable">-Xmx4g</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code> 
    -Xbatch           禁用后台编译
    -Xbootclasspath/a:&lt;以 ; 分隔的目录和 zip/jar 文件&gt;
                      附加在引导类路径末尾
    -Xcheck:jni       对 JNI 函数执行其他检查
    -Xcomp            强制在首次调用时编译方法
    -Xdebug           不执行任何操作。为实现向后兼容而提供。
    -Xdiag            显示附加诊断消息
    -Xfuture          启用最严格的检查，预期将来的默认值。
                      此选项已过时，可能会在
                      未来发行版中删除。
    -Xint             仅解释模式执行
    -Xinternalversion
                      显示比 -version 选项更详细的
                      JVM 版本信息
    -Xlog:&lt;opts&gt;      配置或启用采用 Java 虚拟
                      机 (Java Virtual Machine, JVM) 统一记录框架进行事件记录。使用 -Xlog:help
                      可了解详细信息。
    -Xloggc:&lt;file&gt;    将 GC 状态记录在文件中（带时间戳）。
                      此选项已过时，可能会在
                      将来的发行版中删除。它将替换为 -Xlog:gc:&lt;file&gt;。
    -Xmixed           混合模式执行（默认值）
    -Xmn&lt;size&gt;        为年轻代（新生代）设置初始和最大堆大小
                      （以字节为单位）
    -Xms&lt;size&gt;        设置初始 Java 堆大小
    -Xmx&lt;size&gt;        设置最大 Java 堆大小
    -Xnoclassgc       禁用类垃圾收集
    -Xrs              减少 Java/VM 对操作系统信号的使用（请参见文档）
    -Xshare:auto      在可能的情况下使用共享类数据（默认值）
    -Xshare:off       不尝试使用共享类数据
    -Xshare:on        要求使用共享类数据，否则将失败。
                      这是一个测试选项，可能导致间歇性
                      故障。不应在生产环境中使用它。
    -XshowSettings    显示所有设置并继续
    -XshowSettings:all
                      显示所有设置并继续
    -XshowSettings:locale
                      显示所有与区域设置相关的设置并继续
    -XshowSettings:properties
                      显示所有属性设置并继续
    -XshowSettings:vm
                      显示所有与 vm 相关的设置并继续
    -XshowSettings:system
                      （仅 Linux）显示主机系统或容器
                      配置并继续
    -Xss&lt;size&gt;        设置 Java 线程堆栈大小
    -Xverify          设置字节码验证器的模式
                      请注意，选项 -Xverify:none 已过时，
                      可能会在未来发行版中删除。
    --add-reads &lt;module&gt;=&lt;target-module&gt;(,&lt;target-module&gt;)*
                      更新 &lt;module&gt; 以读取 &lt;target-module&gt;，而无论
                      模块如何声明。
                      &lt;target-module&gt; 可以是 ALL-UNNAMED，将读取所有未命名
                      模块。
    --add-exports &lt;module&gt;/&lt;package&gt;=&lt;target-module&gt;(,&lt;target-module&gt;)*
                      更新 &lt;module&gt; 以将 &lt;package&gt; 导出到 &lt;target-module&gt;，
                      而无论模块如何声明。
                      &lt;target-module&gt; 可以是 ALL-UNNAMED，将导出到所有
                      未命名模块。
    --add-opens &lt;module&gt;/&lt;package&gt;=&lt;target-module&gt;(,&lt;target-module&gt;)*
                      更新 &lt;module&gt; 以在 &lt;target-module&gt; 中打开
                      &lt;package&gt;，而无论模块如何声明。
    --illegal-access=&lt;value&gt;
                      允许或拒绝通过未命名模块中的代码对命名模块中的
                      类型成员进行访问。
                      &lt;value&gt; 为 &quot;deny&quot;、&quot;permit&quot;、&quot;warn&quot; 或 &quot;debug&quot; 之一
                      此选项将在未来发行版中删除。
    --limit-modules &lt;module name&gt;[,&lt;module name&gt;...]
                      限制可观察模块的领域
    --patch-module &lt;module&gt;=&lt;file&gt;(;&lt;file&gt;)*
                      使用 JAR 文件或目录中的类和资源
                      覆盖或增强模块。
    --source &lt;version&gt;
                      设置源文件模式中源的版本。
</code></pre></div><h2 id="jvisualvm插件安装" tabindex="-1"><a class="header-anchor" href="#jvisualvm插件安装" aria-hidden="true">#</a> jvisualvm插件安装</h2>`,5),m={href:"https://visualvm.github.io/index.html",target:"_blank",rel:"noopener noreferrer"},c=t("ul",null,[t("li",null,[e("jvisualvm是我们查看JVM内部结构和JVM调优的重要工具，在java的安装目录的bin目录下。 "),t("ul",null,[t("li",null,"我们安装的Java默认jvisualvm有很多插件是没有安装的"),t("li",null,"在bin目录下找到jvisualvm.exe打开，或者在dos窗口执行jvisualvm."),t("li",null,"在”工具-插件“之后，选择“设置-编辑”修改url地址为刚刚复制的对应的JDK版本的地址。")])])],-1);function d(p,v){const n=l("ExternalLinkIcon");return s(),o("div",null,[u,t("ul",null,[t("li",null,[t("a",m,[e("插件"),g(n)])])]),c])}const h=a(r,[["render",d],["__file","jvm_ty.html.vue"]]);export{h as default};
