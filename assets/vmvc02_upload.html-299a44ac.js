import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<blockquote><p>使用apache的开源jar包完成上传功能，使用jar包分别是：common-fileupload.jar和common-io.jar</p></blockquote><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
	 * 批量上传文件
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">request</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">response</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">username</span>
	 *            用户名; 用于区分用户上传的图片
	 * <span class="token keyword">@param</span> <span class="token parameter">moduleName</span>
	 *            模块名称; 用于区分该图片是位于那个模块进行上传
	 * <span class="token keyword">@return</span>
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">FileNotFoundException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> moduleName<span class="token punctuation">)</span>
			<span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span> <span class="token punctuation">{</span>

		<span class="token comment">// 创建list集合，用于接收上传文件的路径</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> filePathList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 拼接文件上传位置，这里使用Tomcat服务器，将文件上传到webapps中，和项目同目录，files将用于保存上传的文件，将上传的文件于项目分开</span>
		<span class="token class-name">String</span> strPath <span class="token operator">=</span> <span class="token string">&quot;,webapps,files,&quot;</span> <span class="token operator">+</span> moduleName <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> username<span class="token punctuation">;</span>

		<span class="token comment">// 解析出文件存放路径位置</span>
		<span class="token class-name">String</span> filepath <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;catalina.base&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> strPath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token char">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar<span class="token punctuation">)</span><span class="token punctuation">;</span>

		log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;文件上传位置--------&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> filepath<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 转换request，解析出request中的文件</span>
		<span class="token class-name">MultipartHttpServletRequest</span> multipartRequest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MultipartHttpServletRequest</span><span class="token punctuation">)</span> request<span class="token punctuation">;</span>

		<span class="token comment">// 获取文件map集合</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MultipartFile</span><span class="token punctuation">&gt;</span></span> fileMap <span class="token operator">=</span> multipartRequest<span class="token punctuation">.</span><span class="token function">getFileMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

		<span class="token comment">// 循环遍历，取出单个文件</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MultipartFile</span><span class="token punctuation">&gt;</span></span> entity <span class="token operator">:</span> fileMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

			<span class="token comment">// 获取单个文件</span>
			<span class="token class-name">MultipartFile</span> mf <span class="token operator">=</span> entity<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 获得原始文件名</span>
			fileName <span class="token operator">=</span> mf<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 截取文件类型; 这里可以根据文件类型进行判断</span>
			<span class="token class-name">String</span> fileType <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>fileName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token comment">// 截取上传的文件名称</span>
				<span class="token class-name">String</span> newFileName <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> fileName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;上传来的文件名称-------&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// 拼接上传文件位置</span>
				<span class="token class-name">String</span> newfilePath <span class="token operator">=</span> filepath <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> newFileName <span class="token operator">+</span> fileType<span class="token punctuation">;</span>

				log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;拼接好的文件路径地址-------------&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> newfilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// 重新组装文件路径，用于保存在list集合中</span>
				<span class="token class-name">String</span> filepathUrl <span class="token operator">=</span> <span class="token string">&quot;files&quot;</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> moduleName <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> username
						<span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separatorChar <span class="token operator">+</span> newFileName <span class="token operator">+</span> fileType<span class="token punctuation">;</span>

				log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;文件位置----------------&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> filepathUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// 创建文件存放路径实例</span>
				<span class="token class-name">File</span> dest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// 判断文件夹不存在就创建</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dest<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					dest<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// 创建文件实例</span>
				<span class="token class-name">File</span> uploadFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>newfilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// 判断文件已经存在，则删除该文件</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>uploadFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					uploadFile<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;start upload file--------------&gt;&gt;&gt;&gt;&gt;&gt;&gt; &quot;</span> <span class="token operator">+</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// 利于spring中的FileCopyUtils.copy()将文件复制</span>
				<span class="token class-name">FileCopyUtils</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>mf<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> uploadFile<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// 将文件路径存入list集合中</span>
				filePathList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>filepathUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;upload failed. filename: &quot;</span> <span class="token operator">+</span> fileName <span class="token operator">+</span> <span class="token string">&quot;----&gt;&gt;&gt;error message -----&gt;&gt;&gt;&gt;&gt; &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> filePathList<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h2 id="formdata" tabindex="-1"><a class="header-anchor" href="#formdata" aria-hidden="true">#</a> FormData</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">file_upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

			<span class="token comment">// 创建表单数据对象</span>
			<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 获取文件框中的数据</span>
			<span class="token keyword">var</span> file1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;file1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">var</span> file2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;file2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token comment">// 将文件数据添加至表单数据对象中</span>
			obj<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;file1&quot;</span><span class="token punctuation">,</span> file1<span class="token punctuation">)</span><span class="token punctuation">;</span>
			obj<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;file2&quot;</span><span class="token punctuation">,</span> file2<span class="token punctuation">)</span><span class="token punctuation">;</span>

			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;请求参数---》》》&quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 使用ajax异步文件上传</span>
			$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">url</span> <span class="token operator">:</span> util<span class="token punctuation">.</span><span class="token function">basePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;secure/upload-file/uploadDemo&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">type</span> <span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">data</span> <span class="token operator">:</span> obj<span class="token punctuation">,</span>
				<span class="token literal-property property">contentType</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token literal-property property">processData</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token literal-property property">mimeType</span> <span class="token operator">:</span> <span class="token string">&#39;multipart/form-data&#39;</span><span class="token punctuation">,</span>
				<span class="token function-variable function">success</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="uploadmethosd" tabindex="-1"><a class="header-anchor" href="#uploadmethosd" aria-hidden="true">#</a> uploadMethosd</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> fileName <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> realPath <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>realPath <span class="token operator">+</span> <span class="token string">&quot;real&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// 创建文件夹</span>
    <span class="token class-name">File</span> foder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>realPath <span class="token operator">+</span> <span class="token string">&quot;aacc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>foder<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      foder<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> newFileName <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> fileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>fileName<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      file<span class="token punctuation">.</span><span class="token function">transferTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>foder<span class="token punctuation">,</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalStateException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;fileName&quot;</span><span class="token punctuation">,</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;filePath&quot;</span><span class="token punctuation">,</span> realPath <span class="token operator">+</span> <span class="token string">&quot;aacc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SUCCESS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;CODE&quot;</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">.</span><span class="token constant">SC_OK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;quicefier&quot;</span><span class="token punctuation">,</span> realPath <span class="token operator">+</span> <span class="token string">&quot;aacc\\\\&quot;</span> <span class="token operator">+</span> newFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> map<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,6),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","vmvc02_upload.html.vue"]]);export{i as default};
