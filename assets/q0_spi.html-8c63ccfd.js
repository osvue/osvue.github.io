import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/SPI-c16a31af.png",o={},e=t(`<h3 id="_1、什么是spi" tabindex="-1"><a class="header-anchor" href="#_1、什么是spi" aria-hidden="true">#</a> 1、什么是SPI？</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>   SPI 全称为 (Service Provider Interface) ，是JDK内置的一种服务提供发现机制。SPI是一种动态替换发现的机制， 比如有个接口，想运行时动态的给它添加实现，你只需要添加一个实现。我们经常遇到的就是java.sql.Driver接口，其他不同厂商可以针对同一接口做出不同的实现，mysql和postgresql都有不同的实现提供给用户，而Java的SPI机制可以为某个接口寻找服务实现。
</code></pre></div><p><img src="`+p+`" alt=""></p><p>​ 如上图所示，接口对应的抽象SPI接口；实现方实现SPI接口；调用方依赖SPI接口。</p><p>​ SPI接口的定义在调用方，在概念上更依赖调用方；组织上位于调用方所在的包中，实现位于独立的包中。</p><p>​ 当服务的提供者提供了一种接口的实现之后，需要在classpath下的META-INF/services/目录里创建一个以服务接口命名的文件，这个文件里的内容就是这个接口的具体的实现类。当其他的程序需要这个服务的时候，就可以通过查找这个jar包（一般都是以jar包做依赖）的META-INF/services/中的配置文件，配置文件中有接口的具体实现类名，可以根据这个类名进行加载实例化，就可以使用该服务了。JDK中查找服务实现的工具类是：java.util.ServiceLoader。</p><h3 id="_2、spi的用途" tabindex="-1"><a class="header-anchor" href="#_2、spi的用途" aria-hidden="true">#</a> 2、SPI的用途</h3><p>​ 数据库DriverManager、Spring、ConfigurableBeanFactory等都用到了SPI机制，这里以数据库DriverManager为例，看一下其实现的内幕。</p><p>​ DriverManager是jdbc里管理和注册不同数据库driver的工具类。针对一个数据库，可能会存在着不同的数据库驱动实现。我们在使用特定的驱动实现时，不希望修改现有的代码，而希望通过一个简单的配置就可以达到效果。 在使用mysql驱动的时候，会有一个疑问，DriverManager是怎么获得某确定驱动类的？我们在运用Class.forName(&quot;com.mysql.jdbc.Driver&quot;)加载mysql驱动后，就会执行其中的静态代码把driver注册到DriverManager中，以便后续的使用。</p><h5 id="driver实现" tabindex="-1"><a class="header-anchor" href="#driver实现" aria-hidden="true">#</a> Driver实现</h5><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>jdbc</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Driver</span> <span class="token keyword">extends</span> <span class="token class-name">NonRegisteringDriver</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>Driver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Driver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">registerDriver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Driver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> var1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Can&#39;t register driver!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>驱动的类的静态代码块中，调用DriverManager的注册驱动方法new一个自己当参数传给驱动管理器。</p><h5 id="mysql-drivermanager实现" tabindex="-1"><a class="header-anchor" href="#mysql-drivermanager实现" aria-hidden="true">#</a> Mysql DriverManager实现</h5><div class="language-java" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Load the initial JDBC drivers by checking the System property
     * jdbc.properties and then use the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">ServiceLoader</span></span></span><span class="token punctuation">}</span> mechanism
     */</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token function">loadInitialDrivers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;JDBC DriverManager initialized&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>可以看到其内部的静态代码块中有一个<code>loadInitialDrivers</code>方法，<code>loadInitialDrivers</code>用法用到了上文提到的spi工具类<code>ServiceLoader</code>:</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">loadInitialDrivers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> drivers<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            drivers <span class="token operator">=</span> <span class="token class-name">AccessController</span><span class="token punctuation">.</span><span class="token function">doPrivileged</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PrivilegedAction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc.drivers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            drivers <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// If the driver is packaged as a Service Provider, load it.</span>
        <span class="token comment">// Get all the drivers through the classloader</span>
        <span class="token comment">// exposed as a java.sql.Driver.class service.</span>
        <span class="token comment">// ServiceLoader.load() replaces the sun.misc.Providers()</span>

        <span class="token class-name">AccessController</span><span class="token punctuation">.</span><span class="token function">doPrivileged</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PrivilegedAction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token class-name">Void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token class-name">ServiceLoader</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Driver</span><span class="token punctuation">&gt;</span></span> loadedDrivers <span class="token operator">=</span> <span class="token class-name">ServiceLoader</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Driver</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Driver</span><span class="token punctuation">&gt;</span></span> driversIterator <span class="token operator">=</span> loadedDrivers<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">/* Load these drivers, so that they can be instantiated.
                 * It may be the case that the driver class may not be there
                 * i.e. there may be a packaged driver with the service class
                 * as implementation of java.sql.Driver but the actual class
                 * may be missing. In that case a java.util.ServiceConfigurationError
                 * will be thrown at runtime by the VM trying to locate
                 * and load the service.
                 *
                 * Adding a try catch block to catch those runtime errors
                 * if driver not available in classpath but it&#39;s
                 * packaged as service and that service is there in classpath.
                 */</span>
                <span class="token keyword">try</span><span class="token punctuation">{</span>
                    <span class="token keyword">while</span><span class="token punctuation">(</span>driversIterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        driversIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Do nothing</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DriverManager.initialize: jdbc.drivers = &quot;</span> <span class="token operator">+</span> drivers<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>drivers <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> drivers<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> driversList <span class="token operator">=</span> drivers<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;number of Drivers:&quot;</span> <span class="token operator">+</span> driversList<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> aDriver <span class="token operator">:</span> driversList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DriverManager.Initialize: loading &quot;</span> <span class="token operator">+</span> aDriver<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>aDriver<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DriverManager.Initialize: load failed: &quot;</span> <span class="token operator">+</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre></div><p>先查找jdbc.drivers属性的值，然后通过SPI机制查找驱动</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">ServiceLoader</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">PREFIX</span> <span class="token operator">=</span> <span class="token string">&quot;META-INF/services/&quot;</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">hasNextService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nextName <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>configs <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">String</span> fullName <span class="token operator">=</span> <span class="token constant">PREFIX</span> <span class="token operator">+</span> service<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>loader <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                        configs <span class="token operator">=</span> <span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemResources</span><span class="token punctuation">(</span>fullName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span>
                        configs <span class="token operator">=</span> loader<span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span>fullName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">fail</span><span class="token punctuation">(</span>service<span class="token punctuation">,</span> <span class="token string">&quot;Error locating configuration files&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pending <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>pending<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>configs<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                pending <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>service<span class="token punctuation">,</span> configs<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            nextName <span class="token operator">=</span> pending<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre></div><p>可以看到加载META-INF/services/ 文件夹下类名为文件名（这里相当于Driver.class.getName()）的资源，然后将其加载到虚拟机。</p><p>注释有这么一句“Load these drivers, so that they can be instantiated.” 意思是加载SPI扫描到的驱动来触发他们的初始化。即触发他们的static代码块</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * Registers the given driver with the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">DriverManager</span></span></span><span class="token punctuation">}</span>.
     * A newly-loaded driver class should call
     * the method <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">registerDriver</span></span><span class="token punctuation">}</span> to make itself
     * known to the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">DriverManager</span></span></span><span class="token punctuation">}</span>. If the driver is currently
     * registered, no action is taken.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">driver</span> the new JDBC Driver that is to be registered with the
     *               <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">DriverManager</span></span></span><span class="token punctuation">}</span>
     * <span class="token keyword">@param</span> <span class="token parameter">da</span>     the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">DriverAction</span></span></span><span class="token punctuation">}</span> implementation to be used when
     *               <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">DriverManager</span>#deregisterDriver</span></span><span class="token punctuation">}</span> is called
     * <span class="token keyword">@exception</span> <span class="token reference"><span class="token class-name">SQLException</span></span> if a database access error occurs
     * <span class="token keyword">@exception</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> if <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">driver</span></span><span class="token punctuation">}</span> is null
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">registerDriver</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>Driver</span> driver<span class="token punctuation">,</span>
            <span class="token class-name">DriverAction</span> da<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token comment">/* Register the driver if it has not already been added to our list */</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>driver <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            registeredDrivers<span class="token punctuation">.</span><span class="token function">addIfAbsent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DriverInfo</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> da<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// This is for compatibility with the original DriverManager</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;registerDriver: &quot;</span> <span class="token operator">+</span> driver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre></div><p>将自己注册到驱动管理器的驱动列表中</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DriverManager</span> <span class="token punctuation">{</span>


    <span class="token comment">// List of registered JDBC drivers</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">CopyOnWriteArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DriverInfo</span><span class="token punctuation">&gt;</span></span> registeredDrivers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CopyOnWriteArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>当获取连接的时候调用驱动管理器的连接方法从列表中获取。</p><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@CallerSensitive</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span>
        <span class="token class-name">String</span> user<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Properties</span> info <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            info<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>password <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            info<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> info<span class="token punctuation">,</span> <span class="token class-name">Reflection</span><span class="token punctuation">.</span><span class="token function">getCallerClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code> <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span>
        <span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Properties</span> info<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> caller<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         * When callerCl is null, we should check the application&#39;s
         * (which is invoking this class indirectly)
         * classloader, so that the JDBC driver class outside rt.jar
         * can be loaded from here.
         */</span>
        <span class="token class-name">ClassLoader</span> callerCL <span class="token operator">=</span> caller <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> caller<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// synchronize loading of the correct classloader.</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>callerCL <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                callerCL <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SQLException</span><span class="token punctuation">(</span><span class="token string">&quot;The url cannot be null&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;08001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DriverManager.getConnection(\\&quot;&quot;</span> <span class="token operator">+</span> url <span class="token operator">+</span> <span class="token string">&quot;\\&quot;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Walk through the loaded registeredDrivers attempting to make a connection.</span>
        <span class="token comment">// Remember the first exception that gets raised so we can reraise it.</span>
        <span class="token class-name">SQLException</span> reason <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">DriverInfo</span> aDriver <span class="token operator">:</span> registeredDrivers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// If the caller does not have permission to load the driver then</span>
            <span class="token comment">// skip it.</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isDriverAllowed</span><span class="token punctuation">(</span>aDriver<span class="token punctuation">.</span>driver<span class="token punctuation">,</span> callerCL<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    trying &quot;</span> <span class="token operator">+</span> aDriver<span class="token punctuation">.</span>driver<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Connection</span> con <span class="token operator">=</span> aDriver<span class="token punctuation">.</span>driver<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>con <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// Success!</span>
                        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;getConnection returning &quot;</span> <span class="token operator">+</span> aDriver<span class="token punctuation">.</span>driver<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> <span class="token punctuation">(</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>reason <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        reason <span class="token operator">=</span> ex<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    skipping: &quot;</span> <span class="token operator">+</span> aDriver<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

        <span class="token comment">// if we got here nobody could connect.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reason <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;getConnection failed: &quot;</span> <span class="token operator">+</span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> reason<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;getConnection: no suitable driver found for &quot;</span><span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SQLException</span><span class="token punctuation">(</span><span class="token string">&quot;No suitable driver found for &quot;</span><span class="token operator">+</span> url<span class="token punctuation">,</span> <span class="token string">&quot;08001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isDriverAllowed</span><span class="token punctuation">(</span><span class="token class-name">Driver</span> driver<span class="token punctuation">,</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>driver <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> aClass <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                aClass <span class="token operator">=</span>  <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

             result <span class="token operator">=</span> <span class="token punctuation">(</span> aClass <span class="token operator">==</span> driver<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre></div>`,28),c=[e];function l(u,i){return s(),a("div",null,c)}const r=n(o,[["render",l],["__file","q0_spi.html.vue"]]);export{r as default};
