import{_ as t,p as e,q as n,a1 as a}from"./framework-d81ad7e5.js";const r={},o=a(`<h2 id="resttemplate" tabindex="-1"><a class="header-anchor" href="#resttemplate" aria-hidden="true">#</a> RestTemplate</h2><h3 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入" aria-hidden="true">#</a> 依赖注入</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>	@Bean
	// 开启负载均衡
	@LoadBalanced
	RestTemplate restTemplate() {
		return new RestTemplate();
	}
</code></pre></div><p>接下来便可以使用资源地址调用服务</p><div class="language-text" data-ext="text"><pre class="language-text"><code>String url =&quot;http://provider/getHi&quot;;
String respStr = restTemplate.getForObject(url, String.class);
		
</code></pre></div><h3 id="get-请求处理" tabindex="-1"><a class="header-anchor" href="#get-请求处理" aria-hidden="true">#</a> get 请求处理</h3><h4 id="getforentity" tabindex="-1"><a class="header-anchor" href="#getforentity" aria-hidden="true">#</a> getForEntity</h4><p>getForEntity方法的返回值是一个ResponseEntity，ResponseEntity是Spring对HTTP请求响应的封装，包括了几个重要的元素，如响应码、contentType、contentLength、响应消息体等。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;200,Hi,[Content-Type:&quot;text/plain;charset=UTF-8&quot;, Content-Length:&quot;8&quot;, Date:&quot;Fri, 10 Apr 2020 09:58:44 GMT&quot;, Keep-Alive:&quot;timeout=60&quot;, Connection:&quot;keep-alive&quot;]&gt;
</code></pre></div><h4 id="返回一个map" tabindex="-1"><a class="header-anchor" href="#返回一个map" aria-hidden="true">#</a> 返回一个Map</h4><p><strong>调用方</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>		String url =&quot;http://provider/getMap&quot;;
		   
		ResponseEntity&lt;Map&gt; entity = restTemplate.getForEntity(url, Map.class);
		   
		System.out.println(&quot;respStr: &quot;  + entity.getBody() );
</code></pre></div><p><strong>生产方</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>	@GetMapping(&quot;/getMap&quot;)
	public Map&lt;String, String&gt; getMap() {
		
		HashMap&lt;String, String&gt; map = new HashMap&lt;&gt;();
		map.put(&quot;name&quot;, &quot;500&quot;);
		return map; 
	}
</code></pre></div><h4 id="返回对象" tabindex="-1"><a class="header-anchor" href="#返回对象" aria-hidden="true">#</a> 返回对象</h4><p><strong>调用方</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>		ResponseEntity&lt;Person&gt; entity = restTemplate.getForEntity(url, Person.class);
		   
		System.out.println(&quot;respStr: &quot;  + ToStringBuilder.reflectionToString(entity.getBody() ));
</code></pre></div><p><strong>生产方</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>	@GetMapping(&quot;/getObj&quot;)
	public Person getObj() {


		Person person = new Person();
		person.setId(100);
		person.setName(&quot;xiaoming&quot;);
		return person; 
	}
</code></pre></div><p><strong>Person类</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>	private int id;
	private String name;
</code></pre></div><h4 id="传参调用" tabindex="-1"><a class="header-anchor" href="#传参调用" aria-hidden="true">#</a> 传参调用</h4><p><strong>使用占位符</strong></p><pre><code>	String url =&quot;http://provider/getObjParam?name={1}&quot;;
	   
	ResponseEntity&lt;Person&gt; entity = restTemplate.getForEntity(url, Person.class,&quot;hehehe...&quot;);
</code></pre><p><strong>使用map</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>		String url =&quot;http://provider/getObjParam?name={name}&quot;;
		   
		Map&lt;String, String&gt; map = Collections.singletonMap(&quot;name&quot;, &quot; memeda&quot;);
		ResponseEntity&lt;Person&gt; entity = restTemplate.getForEntity(url, Person.class,map);
</code></pre></div><h4 id="返回对象-1" tabindex="-1"><a class="header-anchor" href="#返回对象-1" aria-hidden="true">#</a> 返回对象</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>Person person = restTemplate.getForObject(url, Person.class,map);
</code></pre></div><h3 id="post-请求处理" tabindex="-1"><a class="header-anchor" href="#post-请求处理" aria-hidden="true">#</a> post 请求处理</h3><p><strong>调用方</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>	
		String url =&quot;http://provider/postParam&quot;;
		   
		Map&lt;String, String&gt; map = Collections.singletonMap(&quot;name&quot;, &quot; memeda&quot;);
		 ResponseEntity&lt;Person&gt; entity = restTemplate.postForEntity(url, map, Person.class);
</code></pre></div><p><strong>生产方</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>	@PostMapping(&quot;/postParam&quot;)
	public Person postParam(@RequestBody String name) {

		System.out.println(&quot;name:&quot; + name);

		Person person = new Person();
		person.setId(100);
		person.setName(&quot;xiaoming&quot; + name);
		return person; 
	}
</code></pre></div><h3 id="postforlocation" tabindex="-1"><a class="header-anchor" href="#postforlocation" aria-hidden="true">#</a> postForLocation</h3><p><strong>调用方</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>		String url =&quot;http://provider/postParam&quot;;
		   
		Map&lt;String, String&gt; map = Collections.singletonMap(&quot;name&quot;, &quot; memeda&quot;);
		URI location = restTemplate.postForLocation(url, map, Person.class);
		
		System.out.println(location);
</code></pre></div><p><strong>生产方</strong></p><p>需要设置头信息，不然返回的是null</p><div class="language-text" data-ext="text"><pre class="language-text"><code>	public URI postParam(@RequestBody Person person,HttpServletResponse response) throws Exception {

	URI uri = new URI(&quot;https://www.baidu.com/s?wd=&quot;+person.getName());
	response.addHeader(&quot;Location&quot;, uri.toString());
</code></pre></div><h3 id="exchange" tabindex="-1"><a class="header-anchor" href="#exchange" aria-hidden="true">#</a> exchange</h3><p>可以自定义http请求的头信息，同时保护get和post方法</p><h3 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h3><p>需要实现<code>ClientHttpRequestInterceptor</code>接口</p><p><strong>拦截器</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>public class LoggingClientHttpRequestInterceptor implements ClientHttpRequestInterceptor {

	@Override
	public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution)
			throws IOException {

		System.out.println(&quot;拦截啦！！！&quot;);
		System.out.println(request.getURI());

		ClientHttpResponse response = execution.execute(request, body);

		System.out.println(response.getHeaders());
		return response;
	}
</code></pre></div><p>添加到resttemplate中</p><div class="language-text" data-ext="text"><pre class="language-text"><code>	@Bean
	@LoadBalanced
	RestTemplate restTemplate() {
		RestTemplate restTemplate = new RestTemplate();
		restTemplate.getInterceptors().add(new LoggingClientHttpRequestInterceptor());
		return restTemplate;
	}
</code></pre></div>`,47),s=[o];function p(i,l){return e(),n("div",null,s)}const g=t(r,[["render",p],["__file","sp_restemp.html.vue"]]);export{g as default};
