import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>Spring的工具类都是以Utils结尾，所以要查看这些工具类，只需要在API文档中查询所有*Utils即可</li></ul><h3 id="propertiesloaderutils" tabindex="-1"><a class="header-anchor" href="#propertiesloaderutils" aria-hidden="true">#</a> PropertiesLoaderUtils</h3><ul><li>这个工具类主要是针对Properties文件的加载操作，<strong>在Spring对.properties文件和.factories文件的操作都有使用到</strong></li></ul><p>这个类提供的有用方法：</p><ul><li>Properties loadProperties(Resource resource) throws IOException：从一个资源文件加载Properties；</li><li>Properties loadProperties(EncodedResource resource) throws IOException：加载资源文件，传入的是提供了编码的资源类（EncodedResource）；</li><li>void fillProperties(Properties props, Resource resource) throws IOException：从一个资源类中加载资源，并填充到指定的Properties对象中；</li><li>void fillProperties(Properties props, EncodedResource resource) throws IOException：从一个编码资源类中加载资源，并填充到指定的Properties对象中；</li><li>Properties loadAllProperties(String resourceName) throws IOException：根据资源文件名称，加载并合并classpath中的所有资源文件；</li><li>Properties loadAllProperties(String resourceName, ClassLoader classLoader) throws IOException：从指定的ClassLoader中，根据资源文件名称，加载并合并classpath中的所有资源文件；</li></ul><p>方法不是很多，而且共性较大，我们就从最简单的 <code>Properties loadProperties(Resource resource)</code>开始。</p><p><strong>loadProperties</strong></p><p>测试方法很简单，我们首先准备一个test.properties文件，放到resources下面</p><h4 id="测试读取" tabindex="-1"><a class="header-anchor" href="#测试读取" aria-hidden="true">#</a> 测试读取</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">Properties</span> ret <span class="token operator">=</span> <span class="token class-name">PropertiesLoaderUtils</span><span class="token punctuation">.</span><span class="token function">loadProperties</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ClassPathResource</span><span class="token punctuation">(</span><span class="token string">&quot;smk.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> em <span class="token operator">=</span> ret<span class="token punctuation">.</span><span class="token function">propertyNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token keyword">while</span><span class="token punctuation">(</span>em<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">Object</span> e <span class="token operator">=</span> em<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// TODO Auto-generated catch block</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
 	<span class="token punctuation">}</span>
</code></pre></div><h3 id="xml-方式-读取-properties-注入" tabindex="-1"><a class="header-anchor" href="#xml-方式-读取-properties-注入" aria-hidden="true">#</a> xml 方式 读取 properties 注入</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.beans.factory.config.PropertyPlaceholderConfigurer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locations<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>classpath:config/enum/ipContro.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>classpath:config/enum/security.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileEncoding<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
 

	<span class="token comment">&lt;!-- 安全 密钥 分段 存储
	private String smRespPuba;
	private String smRespPubb;
	
	private String smRespPria;
	private String smRespPrib;
	
	
	  --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>securityKey<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.lusifer.audit.config.SecurityKey<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smReqPuba<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pub.req.a}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smReqPubb<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pub.req.b}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smReqPria<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pri.req.a}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smReqPrib<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pri.req.b}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		
		
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smRespPuba<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pub.resp.a}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smRespPubb<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pub.resp.b}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smRespPria<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pri.resp.a}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smRespPrib<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${smt.pri.resp.b}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span> 
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>


</code></pre></div>`,12),e=[o];function c(u,l){return n(),s("div",null,e)}const i=a(p,[["render",c],["__file","sprutils.html.vue"]]);export{i as default};
