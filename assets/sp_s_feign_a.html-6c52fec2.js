import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p="/images/image-20200413170210544.png",e="/images/image-20200413170342890.png",o="/images/image-20200413171817399.png",c="/images/image-20200413171910314.png",l={},i=t(`<h2 id="feign" tabindex="-1"><a class="header-anchor" href="#feign" aria-hidden="true">#</a> Feign</h2><p>OpenFeign是Netflix 开发的声明式、模板化的HTTP请求客户端。可以更加便捷、优雅地调用http api。</p><p>OpenFeign会根据带有注解的函数信息构建出网络请求的模板，在发送网络请求之前，OpenFeign会将函数的参数值设置到这些请求模板中。</p><p>feign主要是构建微服务消费端。只要使用OpenFeign提供的注解修饰定义网络请求的接口类，就可以使用该接口的实例发送RESTful的网络请求。还可以集成Ribbon和Hystrix，提供负载均衡和断路器。</p><p>英文表意为“假装，伪装，变形”， 是一个 Http 请求调用的轻量级框架，可以以 Java 接口注解的方式调用 Http 请求，而不用像 Java 中通过封装 HTTP 请求报文的方式直接调用。通过处理注解，将请求模板化，当实际调用的时候，传入参数，根据参数再应用到请求上，进而转化成真正的请求，这种请求相对而言比较直观。Feign 封装 了HTTP 调用流程，面向接口编程</p><h3 id="feign和openfeign的关系" tabindex="-1"><a class="header-anchor" href="#feign和openfeign的关系" aria-hidden="true">#</a> Feign和OpenFeign的关系</h3><p>Feign本身不支持Spring MVC的注解，它有一套自己的注解</p><p>OpenFeign是Spring Cloud 在Feign的基础上支持了Spring MVC的注解，如@RequesMapping等等。 OpenFeign的<code>@FeignClient</code>可以解析SpringMVC的@RequestMapping注解下的接口， 并通过动态代理的方式产生实现类，实现类中做负载均衡并调用其他服务。</p><h2 id="声明式服务调用" tabindex="-1"><a class="header-anchor" href="#声明式服务调用" aria-hidden="true">#</a> 声明式服务调用</h2><ul><li>创建接口，添加注解。</li></ul><ol><li><p>pom.xml。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>-- 引入feign依赖 ，用来实现接口伪装 --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>org.springframework.cloud<span class="token operator">&lt;</span>/groupId<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>spring-cloud-starter-openfeign<span class="token operator">&lt;</span>/artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/dependency<span class="token operator">&gt;</span>
</code></pre></div></li><li><p>添加接口,注解。</p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>一般一个服务提供者，写一个interface

//此处由于结合了eureka，所以name是 虚拟主机名，默认服务名，请求时 会将它解析成注册表中的服务。
//不结合eureka，就是自定义一个client名字。就用url属性指定 服务器列表。url<span class="token operator">=</span>“http://ip:port/”
//此时的name作用就是创建负载均衡器。
//也可以添加@RequestMapping
@FeignClient<span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;service-valuation&quot;</span><span class="token punctuation">)</span>
public interface ServiceForecast <span class="token punctuation">{</span>
	
	@RequestMapping<span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/forecast/single&quot;</span>,method <span class="token operator">=</span> RequestMethod.POST<span class="token punctuation">)</span>
	public ResponseResult<span class="token operator">&lt;</span>ForecastResponse<span class="token operator">&gt;</span> forecast<span class="token punctuation">(</span>@RequestBody ForecastRequest 		                   forecastRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>启动类</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>@EnableFeignClients
@EnableFeignClients就像是一个开关，只有使用了该注解，OpenFeign相关的组件和配置机制才会生效。
@EnableFeignClients还可以对OpenFeign相关组件进行自定义配置
</code></pre></div><ol start="4"><li>调用</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">ServiceForecast</span> serviceForecast<span class="token punctuation">;</span>

<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/forecast&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ForecastResponse</span><span class="token punctuation">&gt;</span></span> <span class="token function">forecast</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">ForecastRequest</span> forecastRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
	<span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ForecastResponse</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> serviceForecast<span class="token punctuation">.</span><span class="token function">forecast</span><span class="token punctuation">(</span>forecastRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">return</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>PS:调用此方法：会向service-valuation服务的接口：/forecast/single 发送请求。</p><hr><h2 id="feign继承" tabindex="-1"><a class="header-anchor" href="#feign继承" aria-hidden="true">#</a> Feign继承</h2><ol><li><p>编写通用服务接口A，接口方法上写@RequestMapping()，此接口用于 feign。</p></li><li><p>服务提供者 实现上面接口A。</p></li><li><p>服务消费者的feign client接口 继承A。</p></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// common组件：</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>online<span class="token punctuation">.</span>taxi<span class="token punctuation">.</span>common<span class="token punctuation">.</span>interactor</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestBody</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMethod</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>online<span class="token punctuation">.</span>taxi<span class="token punctuation">.</span>common<span class="token punctuation">.</span>dto<span class="token punctuation">.</span></span><span class="token class-name">ResponseResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>online<span class="token punctuation">.</span>taxi<span class="token punctuation">.</span>common<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>order<span class="token punctuation">.</span></span><span class="token class-name">ForecastRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>online<span class="token punctuation">.</span>taxi<span class="token punctuation">.</span>common<span class="token punctuation">.</span>dto<span class="token punctuation">.</span>order<span class="token punctuation">.</span></span><span class="token class-name">ForecastResponse</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CommonServiceForecast</span> <span class="token punctuation">{</span>

<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/forecast/single&quot;</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ForecastResponse</span><span class="token punctuation">&gt;</span></span> <span class="token function">forecast</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">ForecastRequest</span> 				forecastRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">// 提供者：</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServiceForecastController</span> <span class="token keyword">implements</span> <span class="token class-name">CommonServiceForecast</span> <span class="token punctuation">{</span>

<span class="token annotation punctuation">@Override</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/forecast&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ForecastResponse</span><span class="token punctuation">&gt;</span></span> <span class="token function">forecast</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">ForecastRequest</span> forecastRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 业务逻辑</span>
<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 消费者</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;service-valuation&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ServiceForecast</span> <span class="token keyword">extends</span> <span class="token class-name">CommonServiceForecast</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>有的企业这么用，不喜欢是因为这样服务端和客户端就耦合了，这么用，会方便编码。自己权衡取舍。没有对错。</p></blockquote><p>provider方提供公用API包，Feign通过SpringMVC的注解来加载URI</p><h3 id="_1-创建项目user-provider" tabindex="-1"><a class="header-anchor" href="#_1-创建项目user-provider" aria-hidden="true">#</a> 1.创建项目User-Provider</h3><p><img src="`+p+'" alt="image-20200413170210544"></p><h4 id="选择依赖" tabindex="-1"><a class="header-anchor" href="#选择依赖" aria-hidden="true">#</a> <strong>选择依赖</strong></h4><p><img src="'+e+`" alt="image-20200413170342890"></p><h3 id="_2-创建项目user-api" tabindex="-1"><a class="header-anchor" href="#_2-创建项目user-api" aria-hidden="true">#</a> 2.创建项目User-API</h3><p>依赖 spring-boot-starter-web</p><h4 id="创建一个接口-registerapi" tabindex="-1"><a class="header-anchor" href="#创建一个接口-registerapi" aria-hidden="true">#</a> 创建一个接口 RegisterApi</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserAPI</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 用户操作相关接口
 * <span class="token keyword">@author</span> hzqq
 *
 */</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/User&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RegisterApi</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/isAlive&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">isAlive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_3-user-provider-实现api" tabindex="-1"><a class="header-anchor" href="#_3-user-provider-实现api" aria-hidden="true">#</a> 3.User-Provider 实现API</h3><h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h4><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">eureka.client.service-url.defaultZone</span><span class="token punctuation">=</span><span class="token value attr-value">http://euk1.com:7001/eureka/</span>

<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">81</span>

<span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">user-provider</span>
</code></pre></div><h4 id="引入api" tabindex="-1"><a class="header-anchor" href="#引入api" aria-hidden="true">#</a> 引入API</h4><p>1.maven install User-Api项目</p><p>2.User-Provider的Pom.xml添加依赖</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.osvue.User-API<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>User-API<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="创建usercontroller" tabindex="-1"><a class="header-anchor" href="#创建usercontroller" aria-hidden="true">#</a> 创建UserController</h4><p>实现Api的接口</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserProvider</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserAPI</span><span class="token punctuation">.</span><span class="token class-name">RegisterApi</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">implements</span> <span class="token class-name">RegisterApi</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">isAlive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="_4-consumer调用" tabindex="-1"><a class="header-anchor" href="#_4-consumer调用" aria-hidden="true">#</a> 4.Consumer调用</h3><h4 id="创建项目user-consumer" tabindex="-1"><a class="header-anchor" href="#创建项目user-consumer" aria-hidden="true">#</a> 创建项目User-Consumer</h4><p><img src="`+o+'" alt="image-20200413171817399"></p><h4 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h4><p><img src="'+c+`" alt="image-20200413171910314"></p><h4 id="引入api-1" tabindex="-1"><a class="header-anchor" href="#引入api-1" aria-hidden="true">#</a> 引入API</h4><p>Pom.xml添加依赖</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.osvue.User-API<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>User-API<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="配置文件-1" tabindex="-1"><a class="header-anchor" href="#配置文件-1" aria-hidden="true">#</a> 配置文件</h4><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">eureka.client.service-url.defaultZone</span><span class="token punctuation">=</span><span class="token value attr-value">http://euk1.com:7001/eureka/</span>

<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">90</span>

<span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">consumer</span>
</code></pre></div><h4 id="创建service接口" tabindex="-1"><a class="header-anchor" href="#创建service接口" aria-hidden="true">#</a> 创建Service接口</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserConsumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserAPI</span><span class="token punctuation">.</span><span class="token class-name">RegisterApi</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;user-provider&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserConsumerService</span> <span class="token keyword">extends</span> <span class="token class-name">RegisterApi</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre></div><h4 id="创建controller" tabindex="-1"><a class="header-anchor" href="#创建controller" aria-hidden="true">#</a> 创建Controller</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>package com.osvue.UserConsumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConsumerController {

	@Autowired
	UserConsumerService consumerSrv;
	
	@GetMapping(&quot;/alive&quot;)
	public String alive() {
		
		return consumerSrv.isAlive();
	}
	
}

</code></pre></div><h4 id="修改启动类" tabindex="-1"><a class="header-anchor" href="#修改启动类" aria-hidden="true">#</a> 修改启动类</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserConsumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">EnableFeignClients</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserConsumerApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">UserConsumerApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="_5-测试" tabindex="-1"><a class="header-anchor" href="#_5-测试" aria-hidden="true">#</a> 5.测试</h3><p>访问 http://localhost:90/alive 即可完成声明式远程服务调用</p><h2 id="get和post" tabindex="-1"><a class="header-anchor" href="#get和post" aria-hidden="true">#</a> Get和Post</h2><p>Feign默认所有带参数的请求都是Post，想要使用指定的提交方式需引入依赖</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.github.openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>feign-httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>并指明提交方式</p><div class="language-text" data-ext="text"><pre class="language-text"><code>@RequestMapping(value = &quot;/alived&quot;, method = RequestMethod.POST)
@GetMapping(&quot;/findById&quot;)
</code></pre></div><h3 id="带参请求" tabindex="-1"><a class="header-anchor" href="#带参请求" aria-hidden="true">#</a> 带参请求</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>	@GetMapping(&quot;/findById&quot;)
	public Map findById(@RequestParam(&quot;id&quot;) Integer id);
	
	@PostMapping(&quot;/register&quot;)
	public Map&lt;String, String&gt; reg(@RequestBody User user);
</code></pre></div><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h2><p>feign的默认配置类是：org.springframework.cloud.openfeign.FeignClientsConfiguration。默认定义了feign使用的编码器，解码器等。</p><p>允许使用@FeignClient的configuration的属性自定义Feign配置。自定义的配置优先级高于上面的FeignClientsConfiguration。</p><p>通过权限的例子，学习feign的自定义配置。</p><p>服务提供者。上述例子开放service-valuation的权限 后，访问。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>开放权限：
<span class="token operator">&lt;</span><span class="token operator">!</span>-- 安全认证 --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>org.springframework.boot<span class="token operator">&lt;</span>/groupId<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>spring-boot-starter-security<span class="token operator">&lt;</span>/artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/dependency<span class="token operator">&gt;</span>

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter <span class="token punctuation">{</span>

	@Override
	protected void configure<span class="token punctuation">(</span>HttpSecurity http<span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
		// 关闭csrf
		http.csrf<span class="token punctuation">(</span><span class="token punctuation">)</span>.disable<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		// 表示所有的访问都必须认证，认证处理后才可以正常进行
		http.httpBasic<span class="token punctuation">(</span><span class="token punctuation">)</span>.and<span class="token punctuation">(</span><span class="token punctuation">)</span>.authorizeRequests<span class="token punctuation">(</span><span class="token punctuation">)</span>.anyRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>.fullyAuthenticated<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		// 所有的rest服务一定要设置为无状态，以提升操作效率和性能
		http.sessionManagement<span class="token punctuation">(</span><span class="token punctuation">)</span>.sessionCreationPolicy<span class="token punctuation">(</span>SessionCreationPolicy.STATELESS<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
		
spring: 
  security: 
    user: 
      name: root
      password: root
      
      
</code></pre></div><p>继续feign原来访问，报错。401。</p><p>有如下两种方式：</p><ol><li>自定义配置类。</li><li>增加拦截器。</li></ol><p><strong>自定义配置</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>配置类：
public class FeignAuthConfiguration <span class="token punctuation">{</span>
	
	@Bean
	public BasicAuthRequestInterceptor <span class="token function-name function">basicAuthRequestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin class-name">return</span> new BasicAuthRequestInterceptor<span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span>, <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

在feign上加配置
@FeignClient<span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;service-valuation&quot;</span>,configuration <span class="token operator">=</span> FeignAuthConfiguration.class<span class="token punctuation">)</span>


</code></pre></div><p>OK，可以正常访问了。</p><p>小结：如果在配置类上添加了@Configuration注解，并且该类在@ComponentScan所扫描的包中，那么该类中的配置信息就会被所有的@FeignClient共享。最佳实践是：不指定@Configuration注解（或者指定configuration，用注解忽略），而是手动：</p><p>@FeignClient(name = &quot;service-valuation&quot;,configuration = FeignAuthConfiguration.class)</p><p><strong>拦截器</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> feign.RequestInterceptor<span class="token punctuation">;</span>
<span class="token function">import</span> feign.RequestTemplate<span class="token punctuation">;</span>

public class MyBasicAuthRequestInterceptor implements RequestInterceptor <span class="token punctuation">{</span>

	@Override
	public void apply<span class="token punctuation">(</span>RequestTemplate template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		// TODO Auto-generated method stub
		template.header<span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span>, <span class="token string">&quot;Basic cm9vdDpyb290&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

feign:
  client: 
    config:  
      service-valuation: 
        
        request-interceptors:
        - com.online.taxi.passenger.feign.interceptor.MyBasicAuthRequestInterceptor
</code></pre></div><p>代码中取消上面的配置，访问，报401.用下面的方式。</p><h3 id="属性定义" tabindex="-1"><a class="header-anchor" href="#属性定义" aria-hidden="true">#</a> 属性定义</h3><ol><li>接上面例子，此例子和上面例子实现的功能一样。记得两者取一个即可。说明用属性而不是用属性中的configuration。</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>定义拦截器
public class MyBasicAuthRequestInterceptor implements RequestInterceptor <span class="token punctuation">{</span>

	@Override
	public void apply<span class="token punctuation">(</span>RequestTemplate template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		// TODO Auto-generated method stub
		template.header<span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span>, <span class="token string">&quot;Basic cm9vdDpyb290&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

配置文件
feign:
  client: 
    config:  
      service-valuation: 
        request-interceptors:
        - com.online.taxi.passenger.feign.interceptor.MyBasicAuthRequestInterceptor
        

</code></pre></div><p>再次访问，测试Ok。</p><ol start="2"><li>扩展</li></ol><p>指定服务名称配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>   feign:
     client: 
       config:  
         service-valuation: 
           connect-timeout: <span class="token number">5000</span>
           read-timeout: <span class="token number">5000</span>
           logger-level: full
           
</code></pre></div><p>通用配置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>   feign:
     client: 
       config:  
         default: 
           connect-timeout: <span class="token number">5000</span>
           read-timeout: <span class="token number">5000</span>
           logger-level: full
</code></pre></div><p>属性配置比Java代码优先级高。也可通过配置设置java代码优先级高。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>feign:
	client: 
		default-to-properties: <span class="token boolean">false</span>
</code></pre></div><p>feign在方法上可以设置：@RequestMapping,@ResponseBody。</p><p>方法中的参数可以设置：@RequestBody等等，Spring MVC中的注解。</p><p>推荐使用yml配置方式，在yml中按 代码提示键，可以看到所有配置。</p>`,97),u=[i];function r(k,g){return a(),s("div",null,u)}const m=n(l,[["render",r],["__file","sp_s_feign_a.html.vue"]]);export{m as default};
