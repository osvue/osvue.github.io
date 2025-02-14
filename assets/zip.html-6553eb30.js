import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h4 id="导出-zip" tabindex="-1"><a class="header-anchor" href="#导出-zip" aria-hidden="true">#</a> 导出 zip</h4><pre><code>		（前提 ，文件被重命名）
</code></pre><ol><li><p>先下载文件到指定目录（需要压缩的）</p><ol><li>查询所有文件</li><li>获取路径</li><li>输出目录</li></ol></li><li><p>生成file</p></li><li><p>循环压缩下载</p></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token doc-comment comment">/**
	 * 
	 * 此方法描述的是： 下载zip
	 * 
	 * <span class="token keyword">@author</span>: hzqq
	 * <span class="token keyword">@version</span>: 2021年10月13日 下午4:30:52
	 */</span>
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/batchZip&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">batchFileToZip</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> ids<span class="token punctuation">,</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			
		
	            
			<span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>ids<span class="token punctuation">,</span> <span class="token string">&quot;id must be not null !!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileBean</span><span class="token punctuation">&gt;</span></span> fileList <span class="token operator">=</span> fileService<span class="token punctuation">.</span><span class="token function">getFileList</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 查询数据库中记录</span>

			<span class="token class-name">String</span> zipName <span class="token operator">=</span> <span class="token string">&quot;tempFile.zip&quot;</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				zipName <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;.zip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
			<span class="token class-name">String</span> userAgent <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             
			 <span class="token comment">/*  文件的乱码处理 */</span>
            <span class="token comment">// 针对IE或者以IE为内核的浏览器：</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>userAgent<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;MSIE&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> userAgent<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;Trident&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            	zipName <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span>URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>zipName<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 非IE浏览器的处理：</span>
            	zipName <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>zipName<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ISO-8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
	            
			<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">&gt;</span></span> createFiles <span class="token operator">=</span> <span class="token function">createFiles</span><span class="token punctuation">(</span>fileList<span class="token punctuation">)</span><span class="token punctuation">;</span>
			response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;APPLICATION/OCTET-STREAM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attachment; filename=&quot;</span> <span class="token operator">+</span> zipName<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">ZipOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> createFiles<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token class-name">File</span> file <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">ZipUtils</span><span class="token punctuation">.</span><span class="token function">doCompress</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span>
					response<span class="token punctuation">.</span><span class="token function">flushBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
				out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>






    
	<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">&gt;</span></span> <span class="token function">createFiles</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileBean</span><span class="token punctuation">&gt;</span></span> fileList<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">/*
		 * 1.1 查询所有文件 1.2 获取路径 1.3 输出目录
		 	数据库中 存储为 文件相对路径 ，相对于 linux or  win 系统
		 */</span>
		<span class="token class-name">String</span> system <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;os.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> rootPath <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> tempPath <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">&gt;</span></span> files <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>system<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;win&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			rootPath <span class="token operator">=</span> fileUploadConfig<span class="token punctuation">.</span><span class="token function">getWinRootPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			rootPath <span class="token operator">=</span> fileUploadConfig<span class="token punctuation">.</span><span class="token function">getLinuxRootPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>system<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;win&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			tempPath <span class="token operator">=</span> fileUploadConfig<span class="token punctuation">.</span><span class="token function">getWinRootPathBackAllFileTemp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			tempPath <span class="token operator">=</span> fileUploadConfig<span class="token punctuation">.</span><span class="token function">getLinuxRootPathBackAllFileTemp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 输出到指定文件，为了更改文件名字</span>

			<span class="token comment">// Map&lt;String, Object&gt; map = new HashMap&lt;String, Object&gt;();</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FileBean</span> fileBean <span class="token operator">:</span> fileList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// generatorFileName(fileBean, map);</span>
			<span class="token function">generatorTempFile</span><span class="token punctuation">(</span>rootPath<span class="token punctuation">,</span> tempPath<span class="token punctuation">,</span> fileBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>tempPath <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> fileBean<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;fiel error!&quot;</span> <span class="token operator">+</span> fileBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			files<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> files<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 此方法描述的是：
	 * 
	 * <span class="token keyword">@author</span>: hzqq
	 * <span class="token keyword">@version</span>: 2021年10月13日 下午5:39:33
	 */</span>

	<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">generatorTempFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> rootPath<span class="token punctuation">,</span> <span class="token class-name">String</span> tempPath<span class="token punctuation">,</span> <span class="token class-name">FileBean</span> bean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">String</span> path <span class="token operator">=</span> rootPath <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> bean<span class="token punctuation">.</span><span class="token function">getFilePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> bean<span class="token punctuation">.</span><span class="token function">getFileEncName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 最终要输出的路径</span>
			<span class="token class-name">String</span> outPutPath <span class="token operator">=</span> tempPath <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> bean<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">/*
			 * file.mkdirs(); // 递归创建
			 */</span>
			<span class="token comment">// 要输出的临时文件路径 输出</span>
			<span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>outPutPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 真实存储文件的路径 读入</span>
			bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 设置3m缓存区</span>
			<span class="token keyword">int</span> len<span class="token punctuation">;</span>
			<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token comment">// io</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>bos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					bos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>bis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					bis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
	 * 
	 * 此方法描述的是： 为了防止重名
	 * 
	 * <span class="token keyword">@author</span>: hzqq
	 * <span class="token keyword">@version</span>: 2021年10月19日 下午6:00:15
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">generatorFileName</span><span class="token punctuation">(</span><span class="token class-name">FileBean</span> bean<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">String</span> fileOldName <span class="token operator">=</span> bean<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>fileOldName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Object</span> val <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>fileOldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">Integer</span> count <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">int</span> suffix <span class="token operator">=</span> fileOldName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				bean<span class="token punctuation">.</span><span class="token function">setFileName</span><span class="token punctuation">(</span>fileOldName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>suffix<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token operator">++</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>fileOldName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>suffix<span class="token punctuation">,</span>fileOldName<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>fileOldName<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>fileOldName<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="filebean" tabindex="-1"><a class="header-anchor" href="#filebean" aria-hidden="true">#</a> FileBean</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
    <span class="token doc-comment comment">/**  
     * 此类描述的是：  文件实体类
     * <span class="token keyword">@author</span>: hzqq 
     * <span class="token keyword">@version</span>: 2021年10月13日 下午4:23:41   
     */</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileBean</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5452801884470115159L</span><span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> fileId<span class="token punctuation">;</span><span class="token comment">//主键</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> filePath<span class="token punctuation">;</span><span class="token comment">//文件保存路径</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> fileEncName<span class="token punctuation">;</span> <span class="token comment">//文件别名</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fileName<span class="token punctuation">;</span><span class="token comment">//文件保存名称</span>
    
    
<span class="token punctuation">}</span>



        <span class="token doc-comment comment">/**  
            * 此方法描述的是：  
            * <span class="token keyword">@author</span>: hzqq  
            * <span class="token keyword">@version</span>: 2021年10月13日 下午4:54:19  
            */</span>  
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;script&gt;&quot;</span>
                <span class="token operator">+</span> <span class="token string">&quot;SELECT REALNAME,  file_path filePath ,file_name  FROM tp_uploadfile  WHERE id  IN &quot;</span>
                <span class="token operator">+</span> <span class="token string">&quot;&lt;foreach item=&#39;item&#39; index=&#39;index&#39; collection=&#39;strList&#39; open=&#39;(&#39; separator=&#39;,&#39; close=&#39;)&#39;&gt;&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot;#{item}&quot;</span>
                <span class="token operator">+</span> <span class="token string">&quot;&lt;/foreach&gt;&quot;</span>
            <span class="token operator">+</span> <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;filePath&quot;</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;filePath&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;REALNAME&quot;</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;fileName&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;file_name&quot;</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;fileEncName&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileBean</span><span class="token punctuation">&gt;</span></span> <span class="token function">getFileList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;strList&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>	<span class="token doc-comment comment">/**
		 * 批量下载
		 */</span>
		<span class="token keyword">function</span> <span class="token function">btnDownload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

			<span class="token keyword">var</span> selectrows <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#dg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">datagrid</span><span class="token punctuation">(</span><span class="token string">&quot;getChecked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>selectrows<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				$<span class="token punctuation">.</span>messager<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;提示&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;请选择要下载的数据&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> selectrows<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				ids <span class="token operator">+=</span> selectrows<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>attachId <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span>
			<span class="token punctuation">}</span>
			<span class="token function">postFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">ids</span><span class="token operator">:</span> ids<span class="token punctuation">,</span>
				<span class="token literal-property property">fileName</span><span class="token operator">:</span><span class="token string">&#39;移交资料&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> href<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
 
		<span class="token keyword">function</span> <span class="token function">postFile</span><span class="token punctuation">(</span><span class="token parameter">params<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">var</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			form<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span>
			form<span class="token punctuation">.</span>action <span class="token operator">=</span> url<span class="token punctuation">;</span>
			form<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">;</span>
			document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;hidden&quot;</span><span class="token punctuation">;</span>
				input<span class="token punctuation">.</span>name <span class="token operator">=</span> key<span class="token punctuation">;</span>
				input<span class="token punctuation">.</span>value <span class="token operator">=</span> params<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
				form<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			form<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
</code></pre></div><h2 id="ziputil" tabindex="-1"><a class="header-anchor" href="#ziputil" aria-hidden="true">#</a> zipUtil</h2><div class="language-java" data-ext="java"><pre class="language-java"><code> 
    <span class="token doc-comment comment">/**  
     * 文件名：ZipUtils.java  
     *  
     * 版本信息：  
     * 日期：2021年10月13日  
     * Copyright hzqq Corporation 2021   
     * 版权所有  
     *  
     */</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipEntry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipOutputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZipUtils</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">ZipUtils</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 
         * 此方法描述的是：  
         * <span class="token keyword">@author</span>: hzqq  
         * <span class="token keyword">@version</span>: 2021年10月13日 下午4:25:50
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doCompress</span><span class="token punctuation">(</span><span class="token class-name">String</span> srcFile<span class="token punctuation">,</span> <span class="token class-name">String</span> zipFile<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doCompress</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>zipFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 文件压缩
     * <span class="token keyword">@param</span> <span class="token parameter">srcFile</span> 目录或者单个文件
     * <span class="token keyword">@param</span> <span class="token parameter">zipFile</span> 压缩后的ZIP文件
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doCompress</span><span class="token punctuation">(</span><span class="token class-name">File</span> srcFile<span class="token punctuation">,</span> <span class="token class-name">File</span> zipFile<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ZipOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>zipFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">doCompress</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">,</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//记得关闭资源</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doCompress</span><span class="token punctuation">(</span><span class="token class-name">String</span> filelName<span class="token punctuation">,</span> <span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>
        <span class="token function">doCompress</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filelName<span class="token punctuation">)</span><span class="token punctuation">,</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doCompress</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">,</span> <span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>
        <span class="token function">doCompress</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> out<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doCompress</span><span class="token punctuation">(</span><span class="token class-name">File</span> inFile<span class="token punctuation">,</span> <span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">,</span> <span class="token class-name">String</span> dir<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> inFile<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> inFile<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>files<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> files<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">String</span> name <span class="token operator">=</span> inFile<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        name <span class="token operator">=</span> dir <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token class-name">ZipUtils</span><span class="token punctuation">.</span><span class="token function">doCompress</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> out<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
             <span class="token class-name">ZipUtils</span><span class="token punctuation">.</span><span class="token function">doZip</span><span class="token punctuation">(</span>inFile<span class="token punctuation">,</span> out<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doZip</span><span class="token punctuation">(</span><span class="token class-name">File</span> inFile<span class="token punctuation">,</span> <span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">,</span> <span class="token class-name">String</span> dir<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> entryName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            entryName <span class="token operator">=</span> dir <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> inFile<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            entryName <span class="token operator">=</span> inFile<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ZipEntry</span> entry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipEntry</span><span class="token punctuation">(</span>entryName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">putNextEntry</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>inFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        out<span class="token punctuation">.</span><span class="token function">closeEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div>`,10),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","zip.html.vue"]]);export{i as default};
