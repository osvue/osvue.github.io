import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h4 id="启动好es" tabindex="-1"><a class="header-anchor" href="#启动好es" aria-hidden="true">#</a> 启动好ES</h4><h4 id="配置kibana" tabindex="-1"><a class="header-anchor" href="#配置kibana" aria-hidden="true">#</a> 配置Kibana</h4><h4 id="配置logstash" tabindex="-1"><a class="header-anchor" href="#配置logstash" aria-hidden="true">#</a> 配置LogStash</h4><h4 id="配置logback-logback-spring-xml" tabindex="-1"><a class="header-anchor" href="#配置logback-logback-spring-xml" aria-hidden="true">#</a> 配置Logback（logback-spring.xml）</h4><h4 id="logstash独立部署-微服务节点通过网络向logstash发送日志信息。" tabindex="-1"><a class="header-anchor" href="#logstash独立部署-微服务节点通过网络向logstash发送日志信息。" aria-hidden="true">#</a> Logstash独立部署，微服务节点通过网络向Logstash发送日志信息。</h4><h3 id="一-配置kibana" tabindex="-1"><a class="header-anchor" href="#一-配置kibana" aria-hidden="true">#</a> 一：配置Kibana</h3><pre><code>1、Kibana配置文件
2、/config/kibana.yml
	server.port: 5601       ##服务端口
	server.host: &quot;0.0.0.0&quot;  ##服务器ip  本机
	elasticsearch.url: &quot;http://localhost:9200&quot; ##elasticsearch服务地址 与elasticsearch对应
3、启动kibana
</code></pre><h3 id="二-配置logstash" tabindex="-1"><a class="header-anchor" href="#二-配置logstash" aria-hidden="true">#</a> 二：配置LogStash</h3><ul><li>自定义配置文件 logstash.conf</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>input <span class="token punctuation">{</span>
    tcp <span class="token punctuation">{</span>
    mode <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;server&quot;</span>
    <span class="token comment">#这个需要配置成本机IP，不然logstash无法启动</span>
    <span class="token function">host</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;127.0.0.1&quot;</span>
    <span class="token comment">#端口号 这里其实把logstash作为服务，开启4567端口接收logback发出的消息</span>
    port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">4567</span>
    codec <span class="token operator">=</span><span class="token operator">&gt;</span> json_lines
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
filter <span class="token punctuation">{</span>  
    json <span class="token punctuation">{</span>  
        <span class="token builtin class-name">source</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;message&quot;</span>  
        remove_field <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">]</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  

 
output <span class="token punctuation">{</span>
   
  stdout <span class="token punctuation">{</span>
    codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug
  <span class="token punctuation">}</span>
 
  <span class="token comment"># Sending properly parsed log events to elasticsearch</span>
  elasticsearch <span class="token punctuation">{</span>
    hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9200&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><ul><li>如下的命令来测试 logstash.conf 是否正确：</li></ul><ul><li>bin/logstash --config.test_and_exit -f logstash.conf</li><li>启动 bin/logstash -f logstash.conf</li></ul><p>二：配置Logback（logback-spring.xml）</p><ol><li>maven项目加入</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.logstash.logback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>logstash-logback-encoder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><ol start="2"><li>logback-spring.xml增加 （文件路径为 ：<strong>/resource/logback-spring.xml</strong>）</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOGSTASH<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>net.logstash.logback.appender.LogstashTcpSocketAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>destination</span><span class="token punctuation">&gt;</span></span>169.254.247.253:9250<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>destination</span><span class="token punctuation">&gt;</span></span> 

 <span class="token comment">&lt;!-- encoder必须配置,有多种可选 --&gt;</span> 

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>net.logstash.logback.encoder.LogstashEncoder<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span> 


 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${log.level}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOGSTASH<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="my-config" tabindex="-1"><a class="header-anchor" href="#my-config" aria-hidden="true">#</a> my Config</h4><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span> <span class="token attr-name">scan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>contextName</span><span class="token punctuation">&gt;</span></span>MovieBooking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>contextName</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timestamp</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TIMESTAMP<span class="token punctuation">&quot;</span></span> <span class="token attr-name">datePattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yyyy-MM-dd<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 文件保存路径 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOGPATH<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>log<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>springProperty</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>context<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appName<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>server.name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>localhost.log<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token comment">&lt;!-- 输出到控制台 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stdout<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.PatternLayout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>
				%d{HH:mm:ss.SSS} [%thread] %-5level %logger{40} - %msg%n
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

	<span class="token comment">&lt;!-- 输出到文件 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileLog<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.RollingFileAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>\${LOGPATH}\${file.separator}microservername.logs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>append</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>append</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>
				%d{HH:mm:ss.SSS} [%thread] %-5level %logger{40} - %msg%n
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rollingPolicy</span>
			<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.TimeBasedRollingPolicy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>\${LOGPATH}\${file.separator}all\${file.separator}%d{yyyy-MM-dd}.log
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxHistory</span><span class="token punctuation">&gt;</span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxHistory</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rollingPolicy</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>triggeringPolicy</span>
			<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MaxFileSize</span><span class="token punctuation">&gt;</span></span>10MB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MaxFileSize</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>triggeringPolicy</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>


	<span class="token comment">&lt;!--开启tcp格式的logstash传输，通过TCP协议连接Logstash --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stash<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>net.logstash.logback.appender.LogstashTcpSocketAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!--  这是是logstash服务器地址 端口 --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>destination</span><span class="token punctuation">&gt;</span></span>127.0.0.1:4567<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>destination</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!--输出的格式，推荐使用这个 --&gt;</span>
		 
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>net.logstash.logback.encoder.LogstashEncoder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>providers</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timestamp</span> <span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span> <span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>message</span> <span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loggerName</span> <span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>threadName</span> <span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logLevel</span> <span class="token punctuation">/&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>callerData</span> <span class="token punctuation">/&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>providers</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keepAliveDuration</span><span class="token punctuation">&gt;</span></span>5 minutes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keepAliveDuration</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INFO<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileLog<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stdout<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stash<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>




<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,19),e=[o];function c(l,u){return n(),s("div",null,e)}const i=a(p,[["render",c],["__file","elk.html.vue"]]);export{i as default};
