import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="freemarker配置文件" tabindex="-1"><a class="header-anchor" href="#freemarker配置文件" aria-hidden="true">#</a> freeMarker配置文件</h2><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>

<span class="token comment"># 是否允许HttpServletRequest属性覆盖(隐藏)控制器生成的同名模型属性。</span>
<span class="token key attr-name">spring.freemarker.allow-request-override</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
 
<span class="token comment"># 是否允许HttpSession属性覆盖(隐藏)控制器生成的同名模型属性。</span>
<span class="token key attr-name">spring.freemarker.allow-session-override</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
 
<span class="token comment"># 是否启用模板缓存。</span>
<span class="token key attr-name">spring.freemarker.cache</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
 
<span class="token comment"># 模板编码。</span>
<span class="token key attr-name">spring.freemarker.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
 
<span class="token comment"># 是否检查模板位置是否存在</span>
<span class="token key attr-name">spring.freemarker.check-template-location</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
 
<span class="token comment"># Content-Type value.</span>
<span class="token key attr-name">spring.freemarker.content-type</span><span class="token punctuation">=</span><span class="token value attr-value">text/html</span>
 
<span class="token comment"># 是否启用freemarker</span>
<span class="token key attr-name">spring.freemarker.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
 
<span class="token comment"># 设定所有request的属性在merge到模板的时候，是否要都添加到model中.</span>
<span class="token key attr-name">spring.freemarker.expose-request-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
 
<span class="token comment"># 是否在merge模板的时候，将HttpSession属性都添加到model中</span>
<span class="token key attr-name">spring.freemarker.expose-session-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
 
<span class="token comment"># 设定是否以springMacroRequestContext的形式暴露RequestContext给Spring’s macro library使用</span>
<span class="token key attr-name">spring.freemarker.expose-spring-macro-helpers</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
 
<span class="token comment"># 是否优先从文件系统加载template，以支持热加载，默认为true</span>
<span class="token key attr-name">spring.freemarker.prefer-file-system-access</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
 
<span class="token comment"># 设定模板的前缀.</span>
<span class="token key attr-name">spring.freemarker.prefix</span><span class="token punctuation">=</span>
 
<span class="token comment"># 是否在FreeMaker中使用 request.contextPath</span>
<span class="token key attr-name">spring.freemarker.request-context-attribute</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
 
<span class="token comment"># 设定FreeMarker keys.</span>
<span class="token key attr-name">spring.freemarker.settings.*</span><span class="token punctuation">=</span>
 
<span class="token comment"># 设定模板的后缀.</span>
<span class="token key attr-name">spring.freemarker.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.ftl</span>
 
<span class="token comment"># 设定模板的加载路径，多个以逗号分隔，默认:</span>
<span class="token key attr-name">spring.freemarker.template-loader-path</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates/</span>
 
<span class="token comment"># 设定默认的视图解析地址</span>
<span class="token key attr-name">spring.freemarker.view-names</span><span class="token punctuation">=</span>


<span class="token comment">## Spring Boot  For Freemarker </span>
<span class="token key attr-name">spring.freemarker.template-loader-path</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates </span>
<span class="token key attr-name">spring.freemarker.cache</span><span class="token punctuation">=</span><span class="token value attr-value">false </span>
<span class="token key attr-name">spring.freemarker.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8 </span>
<span class="token key attr-name">spring.freemarker.check-template-location</span><span class="token punctuation">=</span><span class="token value attr-value">true </span>
<span class="token key attr-name">spring.freemarker.content-type</span><span class="token punctuation">=</span><span class="token value attr-value">text/html </span>
<span class="token key attr-name">spring.freemarker.expose-request-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false </span>
<span class="token key attr-name">spring.freemarker.expose-session-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false </span>
<span class="token key attr-name">spring.freemarker.request-context-attribute</span><span class="token punctuation">=</span><span class="token value attr-value">request </span>
<span class="token key attr-name">spring.freemarker.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.ftl</span>


</code></pre></div><h3 id="coding" tabindex="-1"><a class="header-anchor" href="#coding" aria-hidden="true">#</a> coding</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/html&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>
 
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>path resources/template/index.html</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    name:\${name}
    age:\${age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8889</span>
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.sys.log.domain
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> hystory<span class="token punctuation">-</span>server
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>///security<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;useSSL=false</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">hikari</span><span class="token punctuation">:</span>
      <span class="token key atrule">minimum-idle</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">idle-timeout</span><span class="token punctuation">:</span> <span class="token number">600000</span>
      <span class="token key atrule">maximum-pool-size</span><span class="token punctuation">:</span> <span class="token number">10</span>
      <span class="token key atrule">auto-commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">pool-name</span><span class="token punctuation">:</span> MyHikariCP
      <span class="token key atrule">max-lifetime</span><span class="token punctuation">:</span> <span class="token number">1800000</span>
      <span class="token key atrule">connection-timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>
      <span class="token key atrule">connection-test-query</span><span class="token punctuation">:</span> SELECT 1
      <span class="token comment">#配置 freemarker 文件路径和文件后缀</span>
  <span class="token key atrule">freemarker</span><span class="token punctuation">:</span>
    <span class="token key atrule">suffix</span><span class="token punctuation">:</span> .html
    <span class="token key atrule">template-loader-path</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>/templates/
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">com.sys.log.mapper</span><span class="token punctuation">:</span> DEBUG
</code></pre></div><h2 id="freemarker模板文件" tabindex="-1"><a class="header-anchor" href="#freemarker模板文件" aria-hidden="true">#</a> FreeMarker模板文件</h2><ul><li>主要有4个部分组成：</li></ul><ul><li>文本，直接输出的部分</li><li>注释，即<code>&lt;#--...--&gt;</code>格式不会输出</li><li>插值(Interpolation)：即<code>\${..}</code>或者#{..}格式的部分，将使用数据模型中的部分替代输出</li><li>FTL指令：FreeMarker指令，和HTML标记类似，名字前加#予以区分，不会输出。</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#--</span> <span class="token attr-name">注释部分</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#--</span> <span class="token attr-name">下面使用插值</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Welcome \${user} !<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>We have these animals:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#--</span> <span class="token attr-name">使用FTL指令</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">animals</span> <span class="token attr-name">as</span> <span class="token attr-name">being</span><span class="token punctuation">&gt;</span></span>
　　<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\${being.name} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="list-指令" tabindex="-1"><a class="header-anchor" href="#list-指令" aria-hidden="true">#</a> list 指令</h3><div class="language-ftl" data-ext="ftl"><pre class="language-ftl"><code><span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#list</span><span class="token content ftl"> nameList <span class="token keyword">as</span> names</span><span class="token punctuation">&gt;</span></span></span>    
  <span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">names</span><span class="token punctuation">}</span></span></span>   
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#list</span><span class="token punctuation">&gt;</span></span></span>

<span class="token comment">&lt;!-- 在 freemarker 中渲染模板  判断是否分页 --&gt;</span>

  <span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#if</span><span class="token content ftl">  nameList_has_next</span><span class="token punctuation">&gt;</span></span></span>
							 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>p</span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>br</span> <span class="token attr-name"><span class="token namespace">w:</span>type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>p</span><span class="token punctuation">&gt;</span></span> 
						<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#if</span><span class="token punctuation">&gt;</span></span></span>
                        
                     <span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#if</span><span class="token content ftl">  <span class="token operator">!</span>showLimit</span><span class="token punctuation">&gt;</span></span></span>
						 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>p</span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>br</span> <span class="token attr-name"><span class="token namespace">w:</span>type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>p</span><span class="token punctuation">&gt;</span></span> 
					<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#if</span><span class="token punctuation">&gt;</span></span></span>
                    

<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#if</span><span class="token content ftl"> nameList_has_next  </span><span class="token punctuation">&gt;</span></span></span>
  freemarker 模板引擎
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#if</span><span class="token punctuation">&gt;</span></span></span>



<span class="token ftl language-ftl"><span class="token ftl-comment comment">&lt;#-- 使用FTL指令 --&gt;</span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#list</span><span class="token content ftl"> animals <span class="token keyword">as</span> being</span><span class="token punctuation">&gt;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">being<span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span></span> for <span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">being<span class="token punctuation">.</span>price</span><span class="token punctuation">}</span></span></span> Euros<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#list</span><span class="token punctuation">&gt;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>主要是进行迭代服务器端传递过来的List集合，name 是 list 循环的时候取的一个循环变量。相关指令：</p><ul><li>item_index：当前变量的索引值</li><li>item_has_next：是否存在下一个对象</li><li>break：跳出迭代</li></ul><p><strong>（2）if 指令</strong></p><div class="language-ftl" data-ext="ftl"><pre class="language-ftl"><code><span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#if</span><span class="token content ftl"> name <span class="token operator">==</span> <span class="token string">&quot;freemarker&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
  freemarker 模板引擎
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#if</span><span class="token punctuation">&gt;</span></span></span>

<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#assign</span><span class="token content ftl"> number1 <span class="token operator">=</span> <span class="token number">8</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#assign</span><span class="token content ftl"> number2 <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#if</span><span class="token content ftl"> <span class="token punctuation">(</span>number1 <span class="token operator">+</span> number2 <span class="token operator">&gt;</span> <span class="token number">12</span> <span class="token operator">||</span> number1 <span class="token operator">-</span> number2 <span class="token operator">&gt;</span> <span class="token number">6</span><span class="token punctuation">)</span></span><span class="token punctuation">&gt;</span></span></span>
    &quot;*&quot; : <span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">number1 <span class="token operator">*</span> number2</span><span class="token punctuation">}</span></span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#else</span><span class="token punctuation">&gt;</span></span></span>
    &quot;/&quot; : <span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">number1 <span class="token operator">/</span> number2</span><span class="token punctuation">}</span></span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#if</span><span class="token punctuation">&gt;</span></span></span>
 
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#if</span><span class="token content ftl"> users<span class="token operator">??</span></span><span class="token punctuation">&gt;</span></span></span>  <span class="token ftl language-ftl"><span class="token ftl-comment comment">&lt;#--空判断--&gt;</span></span>
    <span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#list</span><span class="token content ftl"> users <span class="token keyword">as</span> user </span><span class="token punctuation">&gt;</span></span></span>
        <span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">user<span class="token punctuation">.</span>id</span><span class="token punctuation">}</span></span></span> - <span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">user<span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span></span>
    <span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#list</span><span class="token punctuation">&gt;</span></span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;</span><span class="token directive keyword">#else</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token ftl language-ftl"><span class="token ftl-interpolation"><span class="token punctuation">\${</span><span class="token content ftl">user<span class="token operator">!</span><span class="token string">&quot;变量为空则给一个默认值&quot;</span></span><span class="token punctuation">}</span></span></span>
<span class="token ftl language-ftl"><span class="token ftl-directive"><span class="token punctuation">&lt;/</span><span class="token directive keyword">#if</span><span class="token punctuation">&gt;</span></span></span>
</code></pre></div><h3 id="include-指令" tabindex="-1"><a class="header-anchor" href="#include-指令" aria-hidden="true">#</a> include 指令</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#include filename&gt;
&lt;#include filename options&gt;

该标签用于导入文件。option包含下面2种属性：

encoding=&quot;GBK&quot; 编码格式 
parse=true 是否作为ftl语法解析，默认是 true，false 就是以文本方式引入。
注意在ftl文件里布尔值都是直接赋值的如 parse=true，而不是 parse=&quot;true&quot;


</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#include</span> <span class="token attr-name">&quot;include.html&quot;</span><span class="token punctuation">/&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#include</span> <span class="token attr-name">&quot;include.ftl&quot;</span> <span class="token attr-name">encoding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>GBK<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
&lt;#include &quot;/common/copyright.ftl&quot; encoding=&quot;GBK&quot; parse=false/&gt;
</code></pre></div><h3 id="switch-case-default-break" tabindex="-1"><a class="header-anchor" href="#switch-case-default-break" aria-hidden="true">#</a> switch , case , default , break</h3><p>语法：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#switch value&gt;
    &lt;#case refValue&gt;语句1&lt;#break&gt;
    &lt;#case refValue&gt;语句2&lt;#break&gt;
    &lt;#default&gt;语句3
&lt;/#switch&gt;
</code></pre></div><p>示例：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#switch name&gt;
    &lt;#case &quot;freemarker&quot;&gt;This is a freemarker&#39;s template.&lt;#break&gt;
    &lt;#case &quot;velocity&quot;&gt;This is a velocity&#39;s template.&lt;#break&gt;
    &lt;#default&gt;This is a jsp&#39;s template.
&lt;/#switch&gt;
</code></pre></div><p><strong>（6）import 指令</strong></p><p>类似于java里的 import，它导入文件，然后就可以在当前文件里使用被导入文件里的宏组件。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#import path as hash&gt;
</code></pre></div><p>path：文件路径</p><p>hash：为导入的文件定义命名空间</p><h3 id="assign-指令" tabindex="-1"><a class="header-anchor" href="#assign-指令" aria-hidden="true">#</a> assign 指令</h3><p>assign指令用于为该模板页面创建或替换一个顶层变量。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#assign a=1&gt;
&lt;#assign x=1 y=2&gt;
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#assign arg1&gt;
    hello freemarker
&lt;/#assign&gt;

&lt;#assign arg2&gt;
    \${arg1} world
&lt;/#assign&gt;

&lt;#assign arg3=&quot;\${arg1} world&quot;&gt;
</code></pre></div><h3 id="noparse-指令" tabindex="-1"><a class="header-anchor" href="#noparse-指令" aria-hidden="true">#</a> noparse 指令</h3><p>noparse指令指定FreeMarker不处理该指定里包含的内容。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#assign a=1&gt;
&lt;#noparse&gt;
    \${a}
&lt;/#noparse&gt;

输出结果：
\${a}
</code></pre></div><h3 id="setting" tabindex="-1"><a class="header-anchor" href="#setting" aria-hidden="true">#</a> setting</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 语法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>value</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 用来设置整个系统的一个环境 --&gt;</span>
</code></pre></div><p>该指令用于设置FreeMarker的运行环境,name的取值范围包含如下几个：</p><ul><li><strong>locale</strong>：该选项指定该模板所用的国家/语言选项</li><li><strong>number_format</strong>：指定格式化输出数字的格式</li><li><strong>boolean_format</strong>：指定两个布尔值的语法格式,默认值是true,false</li><li><strong>date_format，time_format，datetime_format</strong>：指定格式化输出日期的格式</li></ul><p>time_zone：设置格式化输出日期时所使用的时区</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串输出:</span>

$<span class="token punctuation">{</span><span class="token string">&quot;Hello \${name} !&quot;</span><span class="token punctuation">}</span> <span class="token operator">/</span> $<span class="token punctuation">{</span><span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; !&quot;</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#assign cname<span class="token operator">=</span>r<span class="token string">&quot;特殊字符完成输出(http:\\www.baidu.com)&quot;</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>cname<span class="token punctuation">}</span>

<span class="token comment">// 字符串截取 ： </span>

通过下标直接获取下标对应的字母： $<span class="token punctuation">{</span>name<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
起点下标<span class="token punctuation">.</span><span class="token punctuation">.</span>结尾下标截取字符串：$<span class="token punctuation">{</span>name<span class="token punctuation">[</span><span class="token number">0.</span><span class="token number">.5</span><span class="token punctuation">]</span><span class="token punctuation">}</span>


<span class="token comment">// 算数运算：</span>


<span class="token operator">&lt;</span>#<span class="token operator">--</span> 支持<span class="token string">&quot;+&quot;</span>、<span class="token string">&quot;－&quot;</span>、<span class="token string">&quot;*&quot;</span>、<span class="token string">&quot;/&quot;</span>、<span class="token string">&quot;%&quot;</span>运算符 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign number1 <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign number2 <span class="token operator">=</span> <span class="token number">5</span><span class="token operator">&gt;</span>
<span class="token string-property property">&quot;+&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">+</span> number2<span class="token punctuation">}</span>
<span class="token string-property property">&quot;－&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">-</span> number2<span class="token punctuation">}</span>
<span class="token string-property property">&quot;*&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">*</span> number2<span class="token punctuation">}</span>
<span class="token string-property property">&quot;/&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">/</span> number2<span class="token punctuation">}</span>
<span class="token string-property property">&quot;%&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">%</span> number2<span class="token punctuation">}</span>

<span class="token comment">// 比较运算符：</span>


<span class="token operator">&lt;</span>#<span class="token keyword">if</span> number1 <span class="token operator">+</span> number2 gte <span class="token number">12</span> <span class="token operator">||</span> number1 <span class="token operator">-</span> number2 lt <span class="token number">6</span><span class="token operator">&gt;</span>
<span class="token string-property property">&quot;*&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">*</span> number2<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#<span class="token keyword">else</span><span class="token operator">&gt;</span>
<span class="token string-property property">&quot;/&quot;</span> <span class="token operator">:</span> $<span class="token punctuation">{</span>number1 <span class="token operator">/</span> number2<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>

<span class="token comment">// 内建函数：</span>


<span class="token operator">&lt;</span>#assign data <span class="token operator">=</span> <span class="token string">&quot;abcd1234&quot;</span><span class="token operator">&gt;</span>
第一个字母大写：$<span class="token punctuation">{</span>data<span class="token operator">?</span>cap_first<span class="token punctuation">}</span>
所有字母小写：$<span class="token punctuation">{</span>data<span class="token operator">?</span>lower_case<span class="token punctuation">}</span>
所有字母大写：$<span class="token punctuation">{</span>data<span class="token operator">?</span>upper_case<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#assign floatData <span class="token operator">=</span> <span class="token number">12.34</span><span class="token operator">&gt;</span>

数值取整数：$<span class="token punctuation">{</span>floatData<span class="token operator">?</span>int<span class="token punctuation">}</span>
获取集合的长度：$<span class="token punctuation">{</span>users<span class="token operator">?</span>size<span class="token punctuation">}</span>
时间格式化：$<span class="token punctuation">{</span>dateTime<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">// 空判断和对象集合：</span>


<span class="token operator">&lt;</span>#<span class="token keyword">if</span> users<span class="token operator">??</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>#list users <span class="token keyword">as</span> user <span class="token operator">&gt;</span>
        $<span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">-</span> $<span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#<span class="token keyword">else</span><span class="token operator">&gt;</span>
    $<span class="token punctuation">{</span>user<span class="token operator">!</span><span class="token string">&quot;变量为空则给一个默认值&quot;</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>

<span class="token comment">// Map集合：</span>

<span class="token operator">&lt;</span>#assign mapData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;程序员&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;salary&quot;</span><span class="token operator">:</span><span class="token number">15000</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>

直接通过Key获取 Value值：$<span class="token punctuation">{</span>mapData<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
通过Key遍历Map：

<span class="token operator">&lt;</span>#list mapData<span class="token operator">?</span>keys <span class="token keyword">as</span> key<span class="token operator">&gt;</span>
<span class="token literal-property property">Key</span><span class="token operator">:</span> $<span class="token punctuation">{</span>key<span class="token punctuation">}</span> <span class="token operator">-</span> Value<span class="token operator">:</span> $<span class="token punctuation">{</span>mapData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>

<span class="token comment">// 通过Value遍历Map：</span>

<span class="token operator">&lt;</span>#list mapData<span class="token operator">?</span>values <span class="token keyword">as</span> value<span class="token operator">&gt;</span>
      <span class="token literal-property property">Value</span><span class="token operator">:</span> $<span class="token punctuation">{</span>value<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>

<span class="token comment">// List集合：</span>


<span class="token operator">&lt;</span>#assign listData<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;ITDragon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cool&quot;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>#list listData <span class="token keyword">as</span> value<span class="token operator">&gt;</span>$<span class="token punctuation">{</span>value<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>

<span class="token comment">// include指令：</span>

引入其他文件：<span class="token operator">&lt;</span>#include <span class="token string">&quot;otherFreeMarker.ftl&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// macro宏指令：</span>

<span class="token operator">&lt;</span>#macro mo<span class="token operator">&gt;</span>
定义无参数的宏macro<span class="token operator">--</span>$<span class="token punctuation">{</span>name<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#macro<span class="token operator">&gt;</span>
<span class="token literal-property property">使用宏macro</span><span class="token operator">:</span> <span class="token operator">&lt;</span>@mo <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#macro moArgs a b c<span class="token operator">&gt;</span>
定义带参数的宏macro<span class="token operator">--</span> $<span class="token punctuation">{</span>a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#macro<span class="token operator">&gt;</span>
<span class="token literal-property property">使用带参数的宏macro</span><span class="token operator">:</span> <span class="token operator">&lt;</span>@moArgs a<span class="token operator">=</span><span class="token number">1</span> b<span class="token operator">=</span><span class="token number">2</span> c<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 命名空间：</span>

<span class="token operator">&lt;</span>#<span class="token keyword">import</span> <span class="token string">&quot;otherFreeMarker.ftl&quot;</span> <span class="token keyword">as</span> otherFtl<span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>otherFtl<span class="token punctuation">.</span>otherName<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>@otherFtl<span class="token punctuation">.</span>addMethod a<span class="token operator">=</span><span class="token number">10</span> b<span class="token operator">=</span><span class="token number">20</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign otherName<span class="token operator">=</span><span class="token string">&quot;修改otherFreeMarker.ftl中的otherName变量值&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>otherFtl<span class="token punctuation">.</span>otherName<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#assign otherName<span class="token operator">=</span><span class="token string">&quot;修改otherFreeMarker.ftl中的otherName变量值&quot;</span> <span class="token keyword">in</span> otherFtl <span class="token operator">/</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>otherFtl<span class="token punctuation">.</span>otherName<span class="token punctuation">}</span>
</code></pre></div><h3 id="null判断" tabindex="-1"><a class="header-anchor" href="#null判断" aria-hidden="true">#</a> null判断</h3><ul><li>如果name为null，freemarker就会报错。如果需要判断对象是否为空：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#<span class="token keyword">if</span> name<span class="token operator">??</span><span class="token operator">&gt;</span>
……
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>
<span class="token comment">/*
当然也可以通过设置默认值\${name!&#39;&#39;}来避免对象为空的错误。
如果name为空，就以默认值（“!”后的字符）显示。

对象user，name为user的属性的情况，user，name都有可能为空，那么可以写成\${(user.name)!&#39;&#39;},表示user或者name为null，都显示为空。判断为空
*/</span>
<span class="token operator">&lt;</span>#<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token operator">??</span><span class="token operator">&gt;</span>
……
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#<span class="token keyword">if</span> list<span class="token operator">?</span>exists <span class="token operator">&amp;&amp;</span> list<span class="token punctuation">.</span>size <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&gt;</span>
空值判断：$<span class="token punctuation">{</span>book<span class="token punctuation">.</span>name<span class="token operator">?</span>if_exists <span class="token punctuation">}</span><span class="token punctuation">,</span>
$<span class="token punctuation">{</span>book<span class="token punctuation">.</span>name<span class="token operator">?</span><span class="token keyword">default</span><span class="token punctuation">(</span>‘xxx’<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token comment">//默认值xxx</span>
$<span class="token punctuation">{</span> book<span class="token punctuation">.</span>name<span class="token operator">!</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">}</span><span class="token comment">//默认值xxx</span>
</code></pre></div><h3 id="时间格式化显示" tabindex="-1"><a class="header-anchor" href="#时间格式化显示" aria-hidden="true">#</a> 时间格式化显示</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#assign datetimeformat<span class="token operator">=</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss zzz&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>lastBuildDate<span class="token operator">&gt;</span>$<span class="token punctuation">{</span>date<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span>datetimeformat<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>lastBuildDate<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>pubDate<span class="token operator">&gt;</span>$<span class="token punctuation">{</span>date<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span>datetimeformat<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pubDate<span class="token operator">&gt;</span>
</code></pre></div><h3 id="数字格式" tabindex="-1"><a class="header-anchor" href="#数字格式" aria-hidden="true">#</a> 数字格式</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">{</span>book<span class="token operator">?</span>string<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">--</span><span class="token number">20</span>
$<span class="token punctuation">{</span>book<span class="token operator">?</span>string<span class="token punctuation">.</span>currency<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">&lt;</span>#<span class="token operator">--</span> $20<span class="token punctuation">.</span><span class="token number">00</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>book<span class="token operator">?</span>string<span class="token punctuation">.</span>percent<span class="token punctuation">}</span>—<span class="token operator">&lt;</span>#<span class="token operator">--</span> <span class="token number">20</span><span class="token operator">%</span> <span class="token operator">--</span><span class="token operator">&gt;</span>

</code></pre></div><h4 id="字符串截取substring-注意substring中括号的位置" tabindex="-1"><a class="header-anchor" href="#字符串截取substring-注意substring中括号的位置" aria-hidden="true">#</a> 字符串截取substring，注意substring中括号的位置</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#<span class="token keyword">if</span> res1<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token operator">?</span>length<span class="token operator">&lt;</span><span class="token number">12</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>res1<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>#<span class="token keyword">else</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>res1<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token operator">?</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>
</code></pre></div><h3 id="内置的默认值处理-default" tabindex="-1"><a class="header-anchor" href="#内置的默认值处理-default" aria-hidden="true">#</a> 内置的默认值处理：default</h3><p>用途: 用于处理默认值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">User</span><span class="token operator">:</span> $<span class="token punctuation">{</span>userLogin<span class="token punctuation">.</span>name<span class="token operator">?</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token string">&quot;Anonymous&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>td<span class="token operator">&gt;</span>$<span class="token punctuation">{</span><span class="token punctuation">(</span>emanager<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token operator">?</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>

<span class="token punctuation">{</span><span class="token comment">/* 输出: */</span><span class="token punctuation">}</span>
<span class="token literal-property property">User</span><span class="token operator">:</span> Anonymous
<span class="token operator">&lt;</span>td<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span> 
</code></pre></div>`,57),o=[e];function l(c,r){return a(),s("div",null,o)}const k=n(p,[["render",l],["__file","dev2_freemarker.html.vue"]]);export{k as default};
