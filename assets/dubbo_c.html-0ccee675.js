import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<h2 id="restful风格的api" tabindex="-1"><a class="header-anchor" href="#restful风格的api" aria-hidden="true">#</a> restful风格的API</h2><p>Representational State Transfer，资源表现层状态转换</p><h3 id="根路径" tabindex="-1"><a class="header-anchor" href="#根路径" aria-hidden="true">#</a> 根路径</h3><p>osvue.com</p><h3 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h3><p>http://</p><h3 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h3><p>v1</p><p>可以直接写在URL上，或者写在header中传递“Accept-Version: v2”</p><div class="language-text" data-ext="text"><pre class="language-text"><code> @RequestMapping(headers = &quot;Accept-Version=v2&quot;,value = &quot;models&quot;,method = RequestMethod.GET)
</code></pre></div><h3 id="用http协议里的动词来实现资源的增删改查" tabindex="-1"><a class="header-anchor" href="#用http协议里的动词来实现资源的增删改查" aria-hidden="true">#</a> 用HTTP协议里的动词来实现资源的增删改查</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>GET 用来获取资源，
POST 用来新建资源（也可以用于更新资源）。
DELETE 用来删除资源。 
UPDATE http://api.chesxs.com/v1/fence 更新围栏信息 
</code></pre></div><h3 id="用例" tabindex="-1"><a class="header-anchor" href="#用例" aria-hidden="true">#</a> 用例</h3><h4 id="单个资源" tabindex="-1"><a class="header-anchor" href="#单个资源" aria-hidden="true">#</a> 单个资源</h4><p>http://osvue.com/api/v1/Users/1 使用Get方法获取id是1的用户数据</p><div class="language-text" data-ext="text"><pre class="language-text"><code>         正确：GET /model/models/{id}        #获取单个资源

         正确：POST /model/models            #创建单个资源

         正确：PUT /model/models/{id}        #更新单个资源

         正确：DELETE /model/models/{id}   #删除单个资源

         正确：PATCH /model/models/{id}   #更新单个资源（只传差异）

         正确：GET /model/configRuleFile    #获取单个资源（如果仅有一个值时，应采用单数方式）
</code></pre></div><p>返回结果：</p><p>如果指定的资源并不存在，那么应该返回404 Not Found状态，否则应该返回200 OK状态码</p><h4 id="资源集合" tabindex="-1"><a class="header-anchor" href="#资源集合" aria-hidden="true">#</a> 资源集合</h4><p>对于资源集合，支持以下URL</p><pre><code>   正确： GET /model/models                             #获取资源列表

   正确： GET /model/models?ids={ids}             #批量获取资源列表

   正确： DELETE /model/models?ids={ids}       #批量删除资源列表

   返回结果：
</code></pre><p>如果列表为空，则应该空数组</p><h4 id="响应结果" tabindex="-1"><a class="header-anchor" href="#响应结果" aria-hidden="true">#</a> 响应结果</h4><table><thead><tr><th></th><th>响应状态码</th><th>含义</th></tr></thead><tbody><tr><td>成功</td><td>200</td><td>调用成功</td></tr><tr><td></td><td>201</td><td>创建成功</td></tr><tr><td></td><td>204</td><td>执行成功，但无返回值</td></tr><tr><td>失败</td><td>400</td><td>无效请求</td></tr><tr><td></td><td>401</td><td>没有登录</td></tr><tr><td></td><td>403</td><td>没有权限</td></tr><tr><td></td><td>404</td><td>请求的资源不存在</td></tr><tr><td></td><td>500</td><td>服务内部错误</td></tr></tbody></table><h2 id="swagger" tabindex="-1"><a class="header-anchor" href="#swagger" aria-hidden="true">#</a> swagger</h2><p>Swagger是一个简单但功能强大的API表达工具。它具有地球上最大的API工具生态系统，数以千计的开发人员，使用几乎所有的现代编程语言，都在支持和使用Swagger。使用Swagger生成API，我们可以得到交互式文档，自动生成代码的SDK以及API的发现特性等。</p><h3 id="openapi" tabindex="-1"><a class="header-anchor" href="#openapi" aria-hidden="true">#</a> OpenAPI</h3><p>OpenAPI规范是Linux基金会的一个项目，试图通过定义一种用来描述API格式或API定义的语言，来规范RESTful服务开发过程。OpenAPI规范帮助我们描述一个API的基本信息</p><p>比如：</p><ul><li>有关该API的一般性描述</li><li>可用路径（/资源）</li><li>在每个路径上的可用操作（获取/提交...）</li><li>每个操作的输入/输出格式</li></ul><p>根据OpenAPI规范编写的二进制文本文件，能够像代码一样用任何VCS工具管理起来一旦编写完成，API文档可以作为：</p><ul><li>需求和系统特性描述的根据</li><li>前后台查询、讨论、自测的基础</li><li>部分或者全部代码自动生成的根据</li><li>其他重要的作用，比如开放平台开发者的手册...</li></ul><h3 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h3><h4 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h4><p>https://swagger.io/</p><h4 id="在线编辑器" tabindex="-1"><a class="header-anchor" href="#在线编辑器" aria-hidden="true">#</a> 在线编辑器</h4><p>http://editor.swagger.io/</p><h3 id="编写api文档" tabindex="-1"><a class="header-anchor" href="#编写api文档" aria-hidden="true">#</a> 编写API文档</h3><p>我们可以选择使用JSON或者YAML的语言格式来编写API文档</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">swagger</span><span class="token punctuation">:</span> <span class="token string">&#39;2.0&#39;</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0.0
  <span class="token key atrule">title</span><span class="token punctuation">:</span> osvue.com api
  <span class="token key atrule">description</span><span class="token punctuation">:</span> 描述接口信息
  <span class="token key atrule">contact</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> yiming
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//osvue.com
    <span class="token key atrule">email</span><span class="token punctuation">:</span> 888@qqq.com
  <span class="token key atrule">license</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> MIT
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//opensource.org/licenses/MIT
<span class="token key atrule">schemes</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> http
  
<span class="token key atrule">host</span><span class="token punctuation">:</span> osvue.com
<span class="token key atrule">basePath</span><span class="token punctuation">:</span> /api/v1

<span class="token key atrule">paths</span><span class="token punctuation">:</span>
  /user/<span class="token punctuation">{</span>userid<span class="token punctuation">}</span><span class="token punctuation">:</span>
    <span class="token key atrule">get</span><span class="token punctuation">:</span>
      <span class="token key atrule">summary</span><span class="token punctuation">:</span> 获取一个用户
      <span class="token key atrule">description</span><span class="token punctuation">:</span> 根据id获取用户信息
      <span class="token key atrule">parameters</span><span class="token punctuation">:</span> 
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> userid
          <span class="token key atrule">in</span><span class="token punctuation">:</span> path
          <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> 用户id
          <span class="token key atrule">type</span><span class="token punctuation">:</span> string
      <span class="token key atrule">responses</span><span class="token punctuation">:</span>
        <span class="token key atrule">200</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> OK
    
  <span class="token key atrule">/user</span><span class="token punctuation">:</span>
    <span class="token key atrule">get</span><span class="token punctuation">:</span>
      <span class="token key atrule">summary</span><span class="token punctuation">:</span> 返回List 包含所有用户
      <span class="token key atrule">description</span><span class="token punctuation">:</span> 返回List 包含所有用户
      <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> pageSize
            <span class="token key atrule">in</span><span class="token punctuation">:</span> query
            <span class="token key atrule">description</span><span class="token punctuation">:</span> 每页显示多少
            <span class="token key atrule">type</span><span class="token punctuation">:</span> integer
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> pageNum
            <span class="token key atrule">in</span><span class="token punctuation">:</span> query
            <span class="token key atrule">description</span><span class="token punctuation">:</span> 当前第几页
            <span class="token key atrule">type</span><span class="token punctuation">:</span> integer
      
      <span class="token key atrule">responses</span><span class="token punctuation">:</span>
        <span class="token key atrule">200</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> OK
          
          <span class="token key atrule">schema</span><span class="token punctuation">:</span>
            <span class="token key atrule">type</span><span class="token punctuation">:</span> array
            <span class="token key atrule">items</span><span class="token punctuation">:</span> 
              <span class="token key atrule">required</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> username
              <span class="token key atrule">properties</span><span class="token punctuation">:</span>
                <span class="token key atrule">username</span><span class="token punctuation">:</span>
                  <span class="token key atrule">type</span><span class="token punctuation">:</span> string
                <span class="token key atrule">password</span><span class="token punctuation">:</span>
                  <span class="token key atrule">type</span><span class="token punctuation">:</span> string    
 
</code></pre></div><h3 id="整合springboot" tabindex="-1"><a class="header-anchor" href="#整合springboot" aria-hidden="true">#</a> 整合SpringBoot</h3><h4 id="官方依赖" tabindex="-1"><a class="header-anchor" href="#官方依赖" aria-hidden="true">#</a> 官方依赖</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
        &lt;groupId&gt;io.springfox&lt;/groupId&gt;
        &lt;artifactId&gt;springfox-swagger2&lt;/artifactId&gt;
        &lt;version&gt;2.2.2&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
        &lt;groupId&gt;io.springfox&lt;/groupId&gt;
        &lt;artifactId&gt;springfox-swagger-ui&lt;/artifactId&gt;
        &lt;version&gt;2.2.2&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
        &lt;groupId&gt;org.codehaus.jackson&lt;/groupId&gt;
        &lt;artifactId&gt;jackson-core-asl&lt;/artifactId&gt;
        &lt;version&gt;1.9.13&lt;/version&gt;
&lt;/dependency&gt;
</code></pre></div><h4 id="第三方" tabindex="-1"><a class="header-anchor" href="#第三方" aria-hidden="true">#</a> 第三方</h4><p>https://github.com/SpringForAll/spring-boot-starter-swagger</p><h4 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.spring4all&lt;/groupId&gt;
    &lt;artifactId&gt;swagger-spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;1.9.0.RELEASE&lt;/version&gt;
&lt;/dependency&gt;
</code></pre></div><h4 id="启用注解" tabindex="-1"><a class="header-anchor" href="#启用注解" aria-hidden="true">#</a> 启用注解</h4><p>http://localhost:803//v2/api-docs</p><p>http://localhost:8080/swagger-ui.html</p><h4 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>swagger.docket.controller.title=group-controller
swagger.docket.controller.base-package=com.osvue.springboot.controller

swagger.docket.restcontroller.title=group-restcontroller
swagger.docket.restcontroller.base-package=com.osvue.springboot.controller.rest

</code></pre></div><h4 id="实体模型" tabindex="-1"><a class="header-anchor" href="#实体模型" aria-hidden="true">#</a> 实体模型</h4><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;权限id&quot;</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>dataType <span class="token operator">=</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span>required <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>example <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
</code></pre></div><h4 id="接口方法" tabindex="-1"><a class="header-anchor" href="#接口方法" aria-hidden="true">#</a> 接口方法</h4><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;获取所有权限&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Permission</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token keyword">return</span> permissionSrv<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;添加权限&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">RespStat</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ApiParam</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;permission&quot;</span><span class="token punctuation">,</span>required <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> example <span class="token operator">=</span> <span class="token string">&quot;{json}&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;权限对象&quot;</span><span class="token punctuation">)</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Permission</span> permission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;permission:&quot;</span> <span class="token operator">+</span> <span class="token class-name">ToStringBuilder</span><span class="token punctuation">.</span><span class="token function">reflectionToString</span><span class="token punctuation">(</span>permission<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		permissionSrv<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>permission<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token class-name">RespStat</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>接口类描述</p><div class="language-text" data-ext="text"><pre class="language-text"><code>
@Api(value = &quot;用户权限管理&quot;,tags={&quot;用户操作接口&quot;})
</code></pre></div>`,58),o=[p];function c(l,u){return a(),s("div",null,o)}const i=n(e,[["render",c],["__file","dubbo_c.html.vue"]]);export{i as default};
