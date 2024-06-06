import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="导出txt" tabindex="-1"><a class="header-anchor" href="#导出txt" aria-hidden="true">#</a> 导出txt</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/txt&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exportTxt</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">//导出txt文件</span>
		response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token string">&quot;产品信息&quot;</span><span class="token punctuation">;</span>

		<span class="token class-name">BufferedOutputStream</span> buff <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">StringBuffer</span> write <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ServletOutputStream</span> outSTr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span>
					<span class="token string">&quot;attachment; filename=&quot;</span> <span class="token operator">+</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span>URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 导出中文名称</span>
			outSTr <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 建立</span>
			buff <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>outSTr<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">String</span> tab <span class="token operator">=</span> <span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">;</span>
			<span class="token class-name">String</span> tcb <span class="token operator">=</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;产品名称&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;品牌名称&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;商品条码&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;标准号&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;标准名称&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;标准分类&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;产品规格&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;保质期&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;产品成分&quot;</span> <span class="token operator">+</span> tcb<span class="token punctuation">)</span><span class="token punctuation">;</span>
			write<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;下单总数量&quot;</span> <span class="token operator">+</span> tcb <span class="token operator">+</span> tab<span class="token punctuation">)</span><span class="token punctuation">;</span>

			buff<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>write<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			buff<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			buff<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e1<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				buff<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				outSTr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>



<span class="token comment">// --------------------------------------</span>

导出txt 标准操作

  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/dldt&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">downloadtxt</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取日志</span>
    <span class="token comment">// List&lt;DtmSystemLog&gt; list = logService.getLogs();</span>
    <span class="token comment">// 拼接字符串</span>
    <span class="token class-name">StringBuffer</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// for(DtmSystemLog log:list){</span>
    text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;log.getOpeuser()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;log.getOpedesc()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;dateString&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 换行字符</span>
<span class="token comment">//  }</span>
    <span class="token function">exportTxt</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
  <span class="token punctuation">}</span>
  <span class="token comment">/*
   * 导出txt文件
   *
   * @author
   *
   * @param response
   *
   * @param text 导出的字符串
   *
   * @return
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exportTxt</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置响应的内容类型</span>
    response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置文件的名称和格式</span>
    response<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;attachment;filename=&quot;</span> <span class="token operator">+</span> <span class="token function">genAttachmentFileName</span><span class="token punctuation">(</span><span class="token string">&quot;文件名称&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JSON_FOR_UCC_&quot;</span><span class="token punctuation">)</span><span class="token comment">// 设置名称格式，没有这个中文名称无法显示</span>
            <span class="token operator">+</span> <span class="token string">&quot;.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BufferedOutputStream</span> buff <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ServletOutputStream</span> outStr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      outStr <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      buff <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>outStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      buff<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      buff<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      buff<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// LOGGER.error(&quot;导出文件文件出错:{}&quot;,e);</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        buff<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        outStr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// LOGGER.error(&quot;关闭流对象出错 e:{}&quot;,e);</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 防止中文文件名显示出错</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">genAttachmentFileName</span><span class="token punctuation">(</span><span class="token class-name">String</span> cnName<span class="token punctuation">,</span> <span class="token class-name">String</span> defaultName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      cnName <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>cnName<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;gb2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ISO8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cnName <span class="token operator">=</span> defaultName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cnName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  
</code></pre></div><h2 id="zip下载" tabindex="-1"><a class="header-anchor" href="#zip下载" aria-hidden="true">#</a> zip下载</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
   * 将一组文件打zip包
   *
   * <span class="token keyword">@param</span> <span class="token parameter">srcFiles</span>
   * <span class="token keyword">@param</span> <span class="token parameter">targetFileName</span>
   * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">filesToZip</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">&gt;</span></span>  srcFiles<span class="token punctuation">,</span> <span class="token class-name">String</span> targetFileName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>  <span class="token punctuation">{</span>
    <span class="token class-name">String</span> fileOutName <span class="token operator">=</span> targetFileName <span class="token operator">+</span> <span class="token string">&quot;.zip&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">FileInputStream</span> in <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ZipOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>fileOutName<span class="token punctuation">)</span><span class="token punctuation">;</span>
      out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> srcFiles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">putNextEntry</span><span class="token punctuation">(</span><span class="token keyword">new</span>  <span class="token class-name">ZipEntry</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>in <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>in <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>fos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        out<span class="token punctuation">.</span><span class="token function">closeEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="导出zip" tabindex="-1"><a class="header-anchor" href="#导出zip" aria-hidden="true">#</a> 导出ZIP</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">CRC32</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">CheckedOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipEntry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipOutputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZipThread</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">BUFFER</span> <span class="token operator">=</span> <span class="token number">8192</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">File</span> zipFile<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ZipThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> pathName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        zipFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>pathName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">compress</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> pathName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ZipOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token comment">//            java.util.zip包中另外一些比较重要的类是Adler32和CRC32，它们实现了java.util.zip.Checksum接 口，</span>
<span class="token comment">//            并估算了压缩数据的校验和（checksum）。众所周知，在运算速度方面，</span>
<span class="token comment">//            Adler32算法比CRC32算法要有一定的优势；但在数据可信度方 面，CRC32算法则要更胜一筹。</span>
            <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>zipFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">CheckedOutputStream</span> cos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheckedOutputStream</span><span class="token punctuation">(</span>fileOutputStream<span class="token punctuation">,</span>
                    <span class="token keyword">new</span> <span class="token class-name">CRC32</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span>cos<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> basedir <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pathName<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">compress</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>pathName<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> out<span class="token punctuation">,</span> basedir<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">compress</span><span class="token punctuation">(</span><span class="token class-name">String</span> srcPathName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>srcPathName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>srcPathName <span class="token operator">+</span> <span class="token string">&quot;不存在！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>zipFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">CheckedOutputStream</span> cos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheckedOutputStream</span><span class="token punctuation">(</span>fileOutputStream<span class="token punctuation">,</span>
                    <span class="token keyword">new</span> <span class="token class-name">CRC32</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ZipOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipOutputStream</span><span class="token punctuation">(</span>cos<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> basedir <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token function">compress</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> out<span class="token punctuation">,</span> basedir<span class="token punctuation">)</span><span class="token punctuation">;</span>
            out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">compress</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">,</span> <span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">,</span> <span class="token class-name">String</span> basedir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 判断是目录还是文件 */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;压缩：&quot;</span> <span class="token operator">+</span> basedir <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compressDirectory</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> out<span class="token punctuation">,</span> basedir<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;压缩：&quot;</span> <span class="token operator">+</span> basedir <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compressFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> out<span class="token punctuation">,</span> basedir<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 压缩一个目录
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">compressDirectory</span><span class="token punctuation">(</span><span class="token class-name">File</span> dir<span class="token punctuation">,</span> <span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">,</span> <span class="token class-name">String</span> basedir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> dir<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> files<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/* 递归 */</span>
            <span class="token function">compress</span><span class="token punctuation">(</span>files<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> out<span class="token punctuation">,</span> basedir <span class="token operator">+</span> dir<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 压缩一个文件
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">compressFile</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">,</span> <span class="token class-name">ZipOutputStream</span> out<span class="token punctuation">,</span> <span class="token class-name">String</span> basedir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ZipEntry</span> entry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipEntry</span><span class="token punctuation">(</span>basedir <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            out<span class="token punctuation">.</span><span class="token function">putNextEntry</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> count<span class="token punctuation">;</span>
            <span class="token keyword">byte</span> data<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token constant">BUFFER</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>count <span class="token operator">=</span> bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">BUFFER</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            bis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">//测试</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ZipThread</span> zc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipThread</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\63575\\\\Desktop\\\\07/ce.zip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            zc<span class="token punctuation">.</span><span class="token function">compress</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\data\\\\lib&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;C:\\\\home\\\\yanxiuhair\\\\logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;C:\\\\mvn\\\\src\\\\test\\\\java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre></div><h2 id="文件下载工具类" tabindex="-1"><a class="header-anchor" href="#文件下载工具类" aria-hidden="true">#</a> 文件下载工具类</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DownloadUtil</span> <span class="token punctuation">{</span>

<span class="token class-name">ByteArrayOutputStream</span> baos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//这个是spring的工具类 ,是下面注释代码的实现</span>
<span class="token class-name">StreamUtils</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>baos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
baos.close();
os = response.getOutputStream();
byte[] b = new byte[10240];
int length;
while ((length = bais.read(b))&gt; 0)
os.write(b, 0, length);
os.flush();
os.close();
bais.close();*/</span>
 
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">filePath</span> 要下载的文件路径
     * <span class="token keyword">@param</span> <span class="token parameter">returnName</span> 返回的文件名
     * <span class="token keyword">@param</span> <span class="token parameter">response</span> HttpServletResponse
     * <span class="token keyword">@param</span> <span class="token parameter">delFlag</span> 是否删除文件
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">,</span><span class="token class-name">String</span> returnName<span class="token punctuation">,</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span><span class="token keyword">boolean</span> delFlag<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">prototypeDownload</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">,</span> returnName<span class="token punctuation">,</span> response<span class="token punctuation">,</span> delFlag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">file</span> 要下载的文件
     * <span class="token keyword">@param</span> <span class="token parameter">returnName</span> 返回的文件名
     * <span class="token keyword">@param</span> <span class="token parameter">response</span> HttpServletResponse
     * <span class="token keyword">@param</span> <span class="token parameter">delFlag</span> 是否删除文件
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">,</span><span class="token class-name">String</span> returnName<span class="token punctuation">,</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span><span class="token keyword">boolean</span> delFlag<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">prototypeDownload</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> returnName<span class="token punctuation">,</span> response<span class="token punctuation">,</span> delFlag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">file</span> 要下载的文件
     * <span class="token keyword">@param</span> <span class="token parameter">returnName</span> 返回的文件名
     * <span class="token keyword">@param</span> <span class="token parameter">response</span> HttpServletResponse
     * <span class="token keyword">@param</span> <span class="token parameter">delFlag</span> 是否删除文件
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prototypeDownload</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">,</span><span class="token class-name">String</span> returnName<span class="token punctuation">,</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span><span class="token keyword">boolean</span> delFlag<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 下载文件</span>
        <span class="token class-name">FileInputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletOutputStream</span> outputStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
            response<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置响应类型    PDF文件为&quot;application/pdf&quot;，WORD文件为：&quot;application/msword&quot;， EXCEL文件为：&quot;application/vnd.ms-excel&quot;。  </span>
            response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/octet-stream;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token comment">//设置响应的文件名称,并转换成中文编码</span>
            <span class="token comment">//returnName = URLEncoder.encode(returnName,&quot;UTF-8&quot;);</span>
            returnName <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">encodeURL</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>returnName<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;iso8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//保存的文件名,必须和页面编码一致,否则乱码</span>
            
            <span class="token comment">//attachment作为附件下载；inline客户端机器有安装匹配程序，则直接打开；注意改变配置，清除缓存，否则可能不能看到效果</span>
            response<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;attachment;filename=&quot;</span><span class="token operator">+</span>returnName<span class="token punctuation">)</span><span class="token punctuation">;</span>  
            
            <span class="token comment">//将文件读入响应流</span>
            inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            outputStream <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> readLength<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span> buf<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            readLength <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>readLength <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> readLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
                readLength <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                outputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                outputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//删除原文件</span>
            
            <span class="token keyword">if</span><span class="token punctuation">(</span>delFlag<span class="token punctuation">)</span> <span class="token punctuation">{</span>                
                file<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * by tony 天赐
     * <span class="token keyword">@param</span> <span class="token parameter">byteArrayOutputStream</span> 将文件内容写入ByteArrayOutputStream
     * <span class="token keyword">@param</span> <span class="token parameter">response</span> HttpServletResponse    写入response
     * <span class="token keyword">@param</span> <span class="token parameter">returnName</span> 返回的文件名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">ByteArrayOutputStream</span> byteArrayOutputStream<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> returnName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/octet-stream;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        returnName <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">encodeURL</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>returnName<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;iso8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//保存的文件名,必须和页面编码一致,否则乱码</span>
        response<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;attachment;filename=&quot;</span> <span class="token operator">+</span> returnName<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        response<span class="token punctuation">.</span><span class="token function">setContentLength</span><span class="token punctuation">(</span>byteArrayOutputStream<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">ServletOutputStream</span> outputstream <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//取得输出流</span>
        byteArrayOutputStream<span class="token punctuation">.</span><span class="token function">writeTo</span><span class="token punctuation">(</span>outputstream<span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//写到输出流</span>
        byteArrayOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                    <span class="token comment">//关闭</span>
        outputstream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                            <span class="token comment">//刷数据</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","vmvc03_exp.html.vue"]]);export{i as default};
