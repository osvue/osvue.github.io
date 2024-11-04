import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="文件上传速度" tabindex="-1"><a class="header-anchor" href="#文件上传速度" aria-hidden="true">#</a> 文件上传速度</h3><h3 id="接口支持" tabindex="-1"><a class="header-anchor" href="#接口支持" aria-hidden="true">#</a> 接口支持</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span>util<span class="token punctuation">.</span>http<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span></span><span class="token class-name">FileItem</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span>util<span class="token punctuation">.</span>http<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span>disk<span class="token punctuation">.</span></span><span class="token class-name">DiskFileItemFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span>util<span class="token punctuation">.</span>http<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletFileUpload</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span>util<span class="token punctuation">.</span>http<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRequestContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">ResultBean</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;attachment&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UploaderController</span> <span class="token punctuation">{</span>

	
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;upload&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">ResultBean</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span>   <span class="token punctuation">{</span>
		
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// 1.创建创建DiskFileItemFactory工厂</span>
			<span class="token class-name">DiskFileItemFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiskFileItemFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">String</span> tempPath <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span><span class="token comment">// 临时文件路径</span>
			factory<span class="token punctuation">.</span><span class="token function">setRepository</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>tempPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 设置临时文件目录</span>
			factory<span class="token punctuation">.</span><span class="token function">setSizeThreshold</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 设置使用临时存储的阀值,单位字节</span>
			<span class="token comment">/*
			 * 或者 DiskFileItemFactory factory = new DiskFileItemFactory(1024 *
			 * 100,new File(tempPath));
			 */</span>
			<span class="token comment">// 2.创建文件解析器</span>
			<span class="token class-name">ServletFileUpload</span> upload <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletFileUpload</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
			upload<span class="token punctuation">.</span><span class="token function">setHeaderEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 解决上传文件乱码问题</span>
			upload<span class="token punctuation">.</span><span class="token function">setFileSizeMax</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">50L</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置上传单个文件的大小的最大值，目前是设置为1024*1024*50字节，也就是50MB</span>
			upload<span class="token punctuation">.</span><span class="token function">setSizeMax</span><span class="token punctuation">(</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">50L</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 设置上传文件总量的最大值，最大值=同时上传的多个文件的大小的最大值的和，目前设置为50MB</span>
			<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileItem</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> upload<span class="token punctuation">.</span><span class="token function">parseRequest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ServletRequestContext</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			
			<span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FileItem</span> fileItem <span class="token operator">:</span> items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>fileItem<span class="token punctuation">.</span><span class="token function">isFormField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// 如果是普通表单字段</span>
					<span class="token class-name">String</span> name <span class="token operator">=</span> fileItem<span class="token punctuation">.</span><span class="token function">getFieldName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">String</span> value <span class="token operator">=</span> fileItem<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span><span class="token string">&quot;---&quot;</span><span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					in <span class="token operator">=</span> fileItem<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>in <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token class-name">ByteArrayOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// 关闭流</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>out <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>in <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token class-name">String</span> str <span class="token operator">=</span> out<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
				 
			<span class="token punctuation">}</span>
			
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// TODO Auto-generated catch block</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">return</span> <span class="token class-name">ResultBean</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="plana" tabindex="-1"><a class="header-anchor" href="#plana" aria-hidden="true">#</a> planA</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>XMLHttpRequest上传文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">//图片上传</span>
  <span class="token keyword">var</span> xhr<span class="token punctuation">;</span>
 
      <span class="token comment">//上传文件方法</span>
 
      <span class="token keyword">function</span> <span class="token function">UpladFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> fileObj <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// js 获取文件对象</span>
 
        <span class="token keyword">var</span> url <span class="token operator">=</span>  <span class="token string">&quot;/attachment/upload&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 接收上传文件的后台地址</span>
 
        <span class="token keyword">var</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// FormData 对象</span>
 
        form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> fileObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件对象</span>
 
        xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// XMLHttpRequest 对象</span>
 
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。</span>
 
        xhr<span class="token punctuation">.</span>onload <span class="token operator">=</span> uploadComplete<span class="token punctuation">;</span> <span class="token comment">//请求完成</span>
 
        xhr<span class="token punctuation">.</span>onerror <span class="token operator">=</span> uploadFailed<span class="token punctuation">;</span> <span class="token comment">//请求失败</span>
 
        xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span>onprogress <span class="token operator">=</span> progressFunction<span class="token punctuation">;</span> <span class="token comment">//【上传进度调用方法实现】</span>
 
        xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function-variable function">onloadstart</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//上传开始执行方法</span>
 
          ot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置上传开始时间</span>
 
          oloaded <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//设置上传开始时，以上传的文件大小为0</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//开始上传，发送form数据</span>
      <span class="token punctuation">}</span>
 
      <span class="token comment">//上传成功响应</span>
 
      <span class="token keyword">function</span> <span class="token function">uploadComplete</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//服务断接收完文件返回的结果</span>
 
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>target<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;上传成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;上传失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
 
      <span class="token comment">//上传失败</span>
 
      <span class="token keyword">function</span> <span class="token function">uploadFailed</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;上传失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
 
      <span class="token comment">//取消上传</span>
 
      <span class="token keyword">function</span> <span class="token function">cancleUploadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
 
      <span class="token comment">//上传进度实现方法，上传过程中会频繁调用该方法</span>
 
      <span class="token keyword">function</span> <span class="token function">progressFunction</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> progressBar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;progressBar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">var</span> percentageDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;percentage&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// event.total是需要传输的总字节，event.loaded是已经传输的字节。如果event.lengthComputable不为真，则event.total等于0</span>
 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>lengthComputable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//</span>
 
          progressBar<span class="token punctuation">.</span>max <span class="token operator">=</span> evt<span class="token punctuation">.</span>total<span class="token punctuation">;</span>
 
          progressBar<span class="token punctuation">.</span>value <span class="token operator">=</span> evt<span class="token punctuation">.</span>loaded<span class="token punctuation">;</span>
 
          percentageDiv<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
            Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>loaded <span class="token operator">/</span> evt<span class="token punctuation">.</span>total<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token keyword">var</span> time <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">var</span> nt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前时间</span>
 
        <span class="token keyword">var</span> pertime <span class="token operator">=</span> <span class="token punctuation">(</span>nt <span class="token operator">-</span> ot<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">//计算出上次调用该方法时到现在的时间差，单位为s</span>
 
        ot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//重新赋值时间，用于下次计算</span>
 
        <span class="token keyword">var</span> perload <span class="token operator">=</span> evt<span class="token punctuation">.</span>loaded <span class="token operator">-</span> oloaded<span class="token punctuation">;</span> <span class="token comment">//计算该分段上传的文件大小，单位b</span>
 
        oloaded <span class="token operator">=</span> evt<span class="token punctuation">.</span>loaded<span class="token punctuation">;</span> <span class="token comment">//重新赋值已上传文件大小，用以下次计算</span>
 
        <span class="token comment">//上传速度计算</span>
 
        <span class="token keyword">var</span> speed <span class="token operator">=</span> perload <span class="token operator">/</span> pertime<span class="token punctuation">;</span> <span class="token comment">//单位b/s</span>
 
        <span class="token keyword">var</span> bspeed <span class="token operator">=</span> speed<span class="token punctuation">;</span>
 
        <span class="token keyword">var</span> units <span class="token operator">=</span> <span class="token string">&quot;b/s&quot;</span><span class="token punctuation">;</span> <span class="token comment">//单位名称</span>
 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>speed <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          speed <span class="token operator">=</span> speed <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">;</span>
 
          units <span class="token operator">=</span> <span class="token string">&quot;k/s&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>speed <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          speed <span class="token operator">=</span> speed <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">;</span>
 
          units <span class="token operator">=</span> <span class="token string">&quot;M/s&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        speed <span class="token operator">=</span> speed<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">//剩余时间</span>
 
        <span class="token keyword">var</span> resttime <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>total <span class="token operator">-</span> evt<span class="token punctuation">.</span>loaded<span class="token punctuation">)</span> <span class="token operator">/</span> bspeed<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        time<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
          <span class="token string">&quot;，速度：&quot;</span> <span class="token operator">+</span> speed <span class="token operator">+</span> units <span class="token operator">+</span> <span class="token string">&quot;，剩余时间：&quot;</span> <span class="token operator">+</span> resttime <span class="token operator">+</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">;</span>
 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bspeed <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;上传已取消&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progress</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>progressBar<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 300px</span><span class="token punctuation">&quot;</span></span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progress</span><span class="token punctuation">&gt;</span></span>
 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>percentage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myfile<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">οnclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UpladFile()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">οnclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cancleUploadFile()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>取消<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="planb" tabindex="-1"><a class="header-anchor" href="#planb" aria-hidden="true">#</a> planB</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
         <span class="token selector">#progress</span> <span class="token punctuation">{</span>
             <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
             <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
             <span class="token property">border</span><span class="token punctuation">:</span> 1px solid gold<span class="token punctuation">;</span>
             <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
             <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>

         <span class="token selector">#progress .progress-item</span> <span class="token punctuation">{</span>
             <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
             <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
             <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
             <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
             <span class="token property">background</span><span class="token punctuation">:</span> chartreuse<span class="token punctuation">;</span>
             <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
             <span class="token property">transition</span><span class="token punctuation">:</span> width .3s linear<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
     文件上传框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
     显示进度条<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>progress-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     上传成功后的返回内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>callback<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>上传文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
     <span class="token comment">//首先监听input框的变动，选中一个新的文件会触发change事件</span>
     document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
         <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">)</span><span class="token punctuation">;</span>


     <span class="token keyword">function</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//获取到选中的文件</span>
         <span class="token keyword">var</span> file <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token comment">//创建formdata对象</span>
         <span class="token keyword">var</span> formdata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         formdata<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//创建xhr，使用ajax进行文件上传</span>
         <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/attachment/upload&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//回调</span>
         xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#callback&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         <span class="token comment">//获取上传的进度</span>
         xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>lengthComputable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword">var</span> percent <span class="token operator">=</span> event<span class="token punctuation">.</span>loaded <span class="token operator">/</span> event<span class="token punctuation">.</span>total <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
                 document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#progress .progress-item&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> percent <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         <span class="token comment">//将formdata上传</span>
         xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formdata<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,7),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","file_en.html.vue"]]);export{i as default};
