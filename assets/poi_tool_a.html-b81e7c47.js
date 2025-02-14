import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="aspose-li" tabindex="-1"><a class="header-anchor" href="#aspose-li" aria-hidden="true">#</a> aspose Li</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>License</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Data</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Products</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Product</span><span class="token punctuation">&gt;</span></span>Aspose.Words for Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Product</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Products</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EditionType</span><span class="token punctuation">&gt;</span></span>Enterprise<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EditionType</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubscriptionExpiry</span><span class="token punctuation">&gt;</span></span>29991231<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubscriptionExpiry</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LicenseExpiry</span><span class="token punctuation">&gt;</span></span>29991231<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LicenseExpiry</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SerialNumber</span><span class="token punctuation">&gt;</span></span>---<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SerialNumber</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Data</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Signature</span><span class="token punctuation">&gt;</span></span>---<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Signature</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>License</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="一些poi工具" tabindex="-1"><a class="header-anchor" href="#一些poi工具" aria-hidden="true">#</a> 一些poi工具</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileNotFoundException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">RandomAccessFile</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token class-name">ByteBuffer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token class-name">MappedByteBuffer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>channels<span class="token punctuation">.</span></span><span class="token class-name">FileChannel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>channels<span class="token punctuation">.</span></span><span class="token class-name">FileChannel</span><span class="token punctuation">.</span><span class="token class-name">MapMode</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**	文件处理
 * <span class="token keyword">@author</span> Se7en
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileUtil</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**获取文件大小 返回 KB 保留3位小数  没有文件时返回0
	 * <span class="token keyword">@param</span> <span class="token parameter">filepath</span> 文件完整路径，包括文件名
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Double</span> <span class="token function">getFilesize</span><span class="token punctuation">(</span><span class="token class-name">String</span> filepath<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">File</span> backupath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>backupath<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1000.000</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 创建目录
	 * <span class="token keyword">@param</span> <span class="token parameter">destDirName</span> 目标目录名
	 * <span class="token keyword">@return</span> 
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">createDir</span><span class="token punctuation">(</span><span class="token class-name">String</span> destDirName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>destDirName<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//判断有没有父路径，就是判断文件整个路径是否存在</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>dir<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//不存在就全部创建</span>
			<span class="token keyword">return</span> dir<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 删除文件
	 * <span class="token keyword">@param</span> <span class="token parameter">filePathAndName</span>
	 *            String 文件路径及名称 如c:/fqf.txt
	 * <span class="token keyword">@return</span> boolean
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">delFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePathAndName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>File</span> myDelFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>File</span><span class="token punctuation">(</span>filePathAndName<span class="token punctuation">)</span><span class="token punctuation">;</span>
			myDelFile<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除文件操作出错&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**删除所有文件
	 * <span class="token keyword">@param</span> <span class="token parameter">file</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">delAllFile</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> f <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">delAllFile</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		file<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 读取到字节数组0
	 * <span class="token keyword">@param</span> <span class="token parameter">filePath</span> //路径
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
		<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> fileSize <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>fileSize <span class="token operator">&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;file too big...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">FileInputStream</span> fi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> fileSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> offset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> numRead <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>offset <span class="token operator">&lt;</span> buffer<span class="token punctuation">.</span>length
				<span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>numRead <span class="token operator">=</span> fi<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> buffer<span class="token punctuation">.</span>length <span class="token operator">-</span> offset<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			offset <span class="token operator">+=</span> numRead<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 确保所有数据均被读取</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>offset <span class="token operator">!=</span> buffer<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IOException</span><span class="token punctuation">(</span><span class="token string">&quot;Could not completely read file &quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		fi<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> buffer<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 读取到字节数组1
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">filePath</span>
	 * <span class="token keyword">@return</span>
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

		<span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>f<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">FileNotFoundException</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">ByteArrayOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> f<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">BufferedInputStream</span> in <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">int</span> buf_size <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
			<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>buf_size<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">!=</span> <span class="token punctuation">(</span>len <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> buf_size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> bos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">throw</span> e<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			bos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 读取到字节数组2
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">filePath</span>
	 * <span class="token keyword">@return</span>
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toByteArray2</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
		<span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>f<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">FileNotFoundException</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">FileChannel</span> channel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">FileInputStream</span> fs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			fs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
			channel <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> channel<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>channel<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// do nothing</span>
				<span class="token comment">// System.out.println(&quot;reading&quot;);</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> byteBuffer<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">throw</span> e<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				fs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * Mapped File way MappedByteBuffer 可以在处理大文件时，提升性能
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">filePath</span>
	 * <span class="token keyword">@return</span>
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toByteArray3</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

		<span class="token class-name">FileChannel</span> fc <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">RandomAccessFile</span> rf <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			rf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomAccessFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			fc <span class="token operator">=</span> rf<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">MappedByteBuffer</span> byteBuffer <span class="token operator">=</span> fc<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">MapMode</span><span class="token punctuation">.</span><span class="token constant">READ_ONLY</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
					fc<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//System.out.println(byteBuffer.isLoaded());</span>
			<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> fc<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>byteBuffer<span class="token punctuation">.</span><span class="token function">remaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// System.out.println(&quot;remain&quot;);</span>
				byteBuffer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> byteBuffer<span class="token punctuation">.</span><span class="token function">remaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">throw</span> e<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				rf<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				fc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * 下载文件
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileDownload</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token parameter">response</span> 
	 * <span class="token keyword">@param</span> <span class="token parameter">filePath</span>		//文件完整路径(包括文件名和扩展名)
	 * <span class="token keyword">@param</span> <span class="token parameter">fileName</span>		//下载后看到的文件名
	 * <span class="token keyword">@return</span>  文件名
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">fileDownload</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">,</span> <span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>  
		   
		<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token class-name">FileUtil</span><span class="token punctuation">.</span><span class="token function">toByteArray2</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    fileName <span class="token operator">=</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    response<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attachment; filename=\\&quot;&quot;</span> <span class="token operator">+</span> fileName <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    response<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/octet-stream;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    <span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    outputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    outputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    response<span class="token punctuation">.</span><span class="token function">flushBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> 

<span class="token punctuation">}</span>
</code></pre></div><h3 id="解压缩zip" tabindex="-1"><a class="header-anchor" href="#解压缩zip" aria-hidden="true">#</a> 解压缩zip</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">Charset</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Enumeration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipEntry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipFile</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipOutputStream</span></span><span class="token punctuation">;</span>

 

<span class="token doc-comment comment">/**java压缩成zip
 * <span class="token keyword">@author</span> Se7en
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileZip</span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token parameter">inputFileName</span> 你要压缩的文件夹(整个完整路径)
	 * <span class="token keyword">@param</span> <span class="token parameter">zipFileName</span>   压缩后的文件(整个完整路径)
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">zip</span><span class="token punctuation">(</span><span class="token class-name">String</span> inputFileName<span class="token punctuation">,</span> <span class="token class-name">String</span> zipFileName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token function">zip</span><span class="token punctuation">(</span>zipFileName<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>inputFileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">zip</span><span class="token punctuation">(</span><span class="token class-name">String</span> zipFileName<span class="token punctuation">,</span> <span class="token class-name">File</span> inputFile<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token class-name">ZipOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>zipFileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">zip</span><span class="token punctuation">(</span>out<span class="token punctuation">,</span> inputFile<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">zip</span><span class="token punctuation">(</span><span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">,</span> <span class="token class-name">File</span> f<span class="token punctuation">,</span> <span class="token class-name">String</span> base<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fl <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			out<span class="token punctuation">.</span><span class="token function">putNextEntry</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ZipEntry</span><span class="token punctuation">(</span>base <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			base <span class="token operator">=</span> base<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> base <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> fl<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">zip</span><span class="token punctuation">(</span>out<span class="token punctuation">,</span> fl<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> base <span class="token operator">+</span> fl<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			out<span class="token punctuation">.</span><span class="token function">putNextEntry</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ZipEntry</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">FileInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">int</span> b<span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**解压
	 * <span class="token keyword">@param</span> <span class="token parameter">zipFile</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">descDir</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">unZipFiles</span><span class="token punctuation">(</span><span class="token class-name">File</span> zipFile<span class="token punctuation">,</span> <span class="token class-name">String</span> descDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//解决中文文件夹乱码</span>
		<span class="token class-name">ZipFile</span> zip <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipFile</span><span class="token punctuation">(</span>zipFile<span class="token punctuation">,</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//获取压缩文件文件名</span>
			name <span class="token operator">=</span> zip<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>zip<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token char">&#39;\\\\&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> zip<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token char">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;zip压缩包文件异常，无法解压！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//解压后的文件路径</span>
		<span class="token class-name">String</span> finaPath <span class="token operator">=</span> descDir <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> name<span class="token punctuation">;</span>
		<span class="token class-name">File</span> pathFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>finaPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pathFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pathFile<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">ZipEntry</span><span class="token punctuation">&gt;</span></span> entries <span class="token operator">=</span> zip<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> entries<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">ZipEntry</span> entry <span class="token operator">=</span> entries<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">String</span> zipEntryName <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				in <span class="token operator">=</span> zip<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token class-name">String</span> outPath <span class="token operator">=</span> <span class="token punctuation">(</span>descDir <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> zipEntryName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 判断路径是否存在,不存在则创建文件路径</span>
			<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>outPath<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> outPath<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				file<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 判断文件全路径是否为文件夹,如果是上面已经上传,不需要解压</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>outPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token class-name">FileOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>outPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;找不到解压文件输出路径&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">int</span> len<span class="token punctuation">;</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buf1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span>
		<span class="token comment">//不加入close，原压缩文件删不掉</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			zip<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string">&quot;已解压&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> finaPath<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token doc-comment comment">/**
	 * 将存放在sourceFilePath目录下的源文件,打包成fileName名称的ZIP文件,并存放到zipFilePath。
	 * <span class="token keyword">@param</span> <span class="token parameter">sourceFilePath</span> 待压缩的文件路径
	 * <span class="token keyword">@param</span> <span class="token parameter">zipFilePath</span> 压缩后存放路径
	 * <span class="token keyword">@param</span> <span class="token parameter">fileName</span> 压缩后文件的名称
	 * <span class="token keyword">@return</span> flag
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">fileToZip</span><span class="token punctuation">(</span><span class="token class-name">String</span> sourceFilePath<span class="token punctuation">,</span><span class="token class-name">String</span> zipFilePath<span class="token punctuation">,</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token class-name">File</span> sourceFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>sourceFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>sourceFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;待压缩的文件目录：&quot;</span> <span class="token operator">+</span> sourceFilePath <span class="token operator">+</span> <span class="token string">&quot; 不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> flag<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token class-name">File</span> zipFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>zipFilePath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> fileName <span class="token operator">+</span> <span class="token string">&quot;.zip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>zipFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>zipFilePath <span class="token operator">+</span> <span class="token string">&quot; 目录下存在名字为：&quot;</span> <span class="token operator">+</span> fileName <span class="token operator">+</span> <span class="token string">&quot;.zip&quot;</span> <span class="token operator">+</span> <span class="token string">&quot; 打包文件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sourceFiles <span class="token operator">=</span> sourceFile<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> sourceFiles <span class="token operator">||</span> sourceFiles<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;待压缩的文件目录：&quot;</span> <span class="token operator">+</span> sourceFilePath <span class="token operator">+</span> <span class="token string">&quot; 里面不存在文件,无需压缩&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
						<span class="token keyword">return</span> flag<span class="token punctuation">;</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						<span class="token class-name">ZipOutputStream</span> zos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>zipFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token comment">//缓冲块</span>
						<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bufs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
						<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>sourceFiles<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
							<span class="token class-name">ZipEntry</span> zipEntry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipEntry</span><span class="token punctuation">(</span>sourceFiles<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
							zos<span class="token punctuation">.</span><span class="token function">putNextEntry</span><span class="token punctuation">(</span>zipEntry<span class="token punctuation">)</span><span class="token punctuation">;</span>
							<span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>sourceFiles<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
							<span class="token keyword">int</span> read <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
							<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>read<span class="token operator">=</span><span class="token punctuation">(</span>bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bufs<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
								zos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bufs<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> read<span class="token punctuation">)</span><span class="token punctuation">;</span>
							<span class="token punctuation">}</span>
							<span class="token comment">//关闭</span>
							<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> bis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
								bis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">}</span>
						flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
						<span class="token comment">//关闭</span>
						<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> zos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
							zos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>

			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> flag<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**获取文件后缀名
	 * <span class="token keyword">@param</span> <span class="token parameter">fileName</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getFileType</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strArray <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> suffixIndex <span class="token operator">=</span> strArray<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> strArray<span class="token punctuation">[</span>suffixIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div>`,8),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","poi_tool_a.html.vue"]]);export{i as default};
