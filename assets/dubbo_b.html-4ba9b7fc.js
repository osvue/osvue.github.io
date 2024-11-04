import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h3 id="安装jdk" tabindex="-1"><a class="header-anchor" href="#安装jdk" aria-hidden="true">#</a> 安装jdk</h3><ul><li>rpm -ivh jdk-8u131-linux-x64.rpm</li><li>java –version 检查是否成功</li></ul><h3 id="安装zookeeper" tabindex="-1"><a class="header-anchor" href="#安装zookeeper" aria-hidden="true">#</a> 安装Zookeeper</h3><p>下载 http://zookeeper.apache.org/ 并上传解压缩</p><h4 id="配置zookeeper环境变量" tabindex="-1"><a class="header-anchor" href="#配置zookeeper环境变量" aria-hidden="true">#</a> 配置zookeeper环境变量</h4><p>修改文件 vi /etc/profile 追加内容</p><p>在path后追加<code>/usr/local/zookeeper/bin</code></p><p><strong>注意中间间隔是： 冒号</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>export PATH=$PATH:/usr/local/hadoop/bin:/usr/local/hadoop/sbin:/usr/local/zo

okeeper/bin
</code></pre></div><p>source /etc/profile 重新加载配置</p><h4 id="修改zoo-cfg" tabindex="-1"><a class="header-anchor" href="#修改zoo-cfg" aria-hidden="true">#</a> 修改zoo.cfg</h4><p>重命名zoo_sample.cfg 为zoo.cfg</p><p>默认加载配置文件会找zoo.cfg这个文件</p><p>修改配置文件</p><div class="language-text" data-ext="text"><pre class="language-text"><code>vi /usr/local/zookeeper/conf/zoo.cfg
</code></pre></div><p>创建数据存放目录</p><p>Mkdir /data/zookeeper</p><p>创建Myid文件，并写入服务器编号</p><p><strong>注意</strong>：这里写入myid文件的编号和接下来要配置的服务器列表编号一一对应，每台服务器配置的编号也应该不一样。</p><p>Myid文件里只有一个数字 1</p><p>创建好的这个目录用于存储zookeeper产生的数据</p><p>修改datadir为刚才我们创建的目录</p><p>dataDir=/data/zookeeper</p><p>在最后面加入集群服务器列表</p><div class="language-text" data-ext="text"><pre class="language-text"><code>server.1=192.168.2.51:2888:3888

server.2=cm02:2888:3888

server.3=cm03:2888:3888
</code></pre></div><p>配置的服务器集群个数建议是奇数的</p><p>半数以上节点存活，就可以对外提供服务</p><p>其中 server.x 这里的数字编号 就是我们的myid里写入的数字</p><p>Cm01是主机名或ip地址</p><p>接下来是对外通讯端口和内部选举端口</p><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4><p>zkServer.sh start 命令启动一台zookeeper服务器</p><p>没报错的话 使用jps看一下进程</p><p>QuorumPeerMain是zookeeper的主进程</p><p>通过status命令可以查看服务器运行状态</p><p><strong>注意：当我们使用集群模式启动zookeeper的时候，由于我们只启动了一台服务器，集群总共3台，没有满足zookeeper半数以上节点运行原则，所以服务虽然起来了，但是没有办法对外提供服务。</strong></p><p><strong>这时我们需要启动第二台服务器</strong></p><h2 id="dubbo-hello-world" tabindex="-1"><a class="header-anchor" href="#dubbo-hello-world" aria-hidden="true">#</a> Dubbo Hello World</h2><h3 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h3><p>SpringBoot + dubbo</p><h3 id="pom-xml-依赖" tabindex="-1"><a class="header-anchor" href="#pom-xml-依赖" aria-hidden="true">#</a> Pom.xml 依赖</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>
		<span class="token comment">&lt;!-- Aapche Dubbo --&gt;</span>


		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${dubbo.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${dubbo.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>


		<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.apache.curator/curator-framework --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>curator-framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>curator-recipes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.4.14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="服务提供方-provider" tabindex="-1"><a class="header-anchor" href="#服务提供方-provider" aria-hidden="true">#</a> 服务提供方 provider</h3><h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h4><div class="language-pro" data-ext="pro"><pre class="language-pro"><code>server.port=8081

spring.application.name=DemoProvider
dubbo.scan.base-packages=com.osvue.db1.service

dubbo.protocol.name=dubbo
dubbo.protocol.port=666
dubbo.protocol.host=192.168.101.106

dubbo.registry.address=zookeeper://192.168.150.13:2181
</code></pre></div><h4 id="服务接口" tabindex="-1"><a class="header-anchor" href="#服务接口" aria-hidden="true">#</a> 服务接口</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="接口实现" tabindex="-1"><a class="header-anchor" href="#接口实现" aria-hidden="true">#</a> 接口实现</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span>version <span class="token operator">=</span> <span class="token string">&quot;1.0.0&quot;</span> <span class="token punctuation">,</span>timeout <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">,</span> interfaceClass <span class="token operator">=</span> <span class="token class-name">DemoService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;来啦~~~！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token string">&quot;hello:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="服务消费方-customer" tabindex="-1"><a class="header-anchor" href="#服务消费方-customer" aria-hidden="true">#</a> 服务消费方 customer</h3><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>spring.application.name=DemoCustomer
dubbo.scan.base-packages=com.osvue.db1.service

dubbo.registry.address=zookeeper://192.168.150.13:2181

</code></pre></div><h4 id="自动注入" tabindex="-1"><a class="header-anchor" href="#自动注入" aria-hidden="true">#</a> 自动注入</h4><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@Reference</span><span class="token punctuation">(</span>version <span class="token operator">=</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">)</span>
	<span class="token class-name">DemoService</span> serv<span class="token punctuation">;</span>
	
</code></pre></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div>`,56),o=[e];function c(l,u){return n(),s("div",null,o)}const r=a(p,[["render",c],["__file","dubbo_b.html.vue"]]);export{r as default};
