import{_ as t,M as p,p as o,q as c,R as n,t as s,N as e,a1 as l}from"./framework-d81ad7e5.js";const u={},k=n("h2",{id:"导出world",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导出world","aria-hidden":"true"},"#"),s(" 导出world")],-1),i=n("blockquote",null,[n("p",null,"use Maven & Spring Boot")],-1),r={href:"https://gitee.com/osvue/quartz_boot_vue",target:"_blank",rel:"noopener noreferrer"},m=l(`<blockquote><p>quartz_boot_vue/ dataCk</p></blockquote><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>		<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.lowagie/itext --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.lowagie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>itext<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.lowagie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>itext-rtf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Color</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ByteArrayOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StreamUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">DocStyleUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Cell</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Document</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">DocumentException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Element</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Font</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">PageSize</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Paragraph</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Phrase</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Table</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span></span><span class="token class-name">BaseFont</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span>rtf<span class="token punctuation">.</span></span><span class="token class-name">RtfWriter2</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span>rtf<span class="token punctuation">.</span>style<span class="token punctuation">.</span></span><span class="token class-name">RtfFont</span></span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * 导出word 表格
   * <span class="token keyword">@param</span> <span class="token parameter">response</span>
   * <span class="token keyword">@param</span> <span class="token parameter">req</span>
   * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">DocumentException</span></span>
   * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
   */</span>
  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;export&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">export</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">)</span>
      <span class="token keyword">throws</span> <span class="token class-name">DocumentException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>


    <span class="token comment">// 以A4纸大小输出word</span>
    <span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token class-name">PageSize</span><span class="token punctuation">.</span><span class="token constant">A4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ByteArrayOutputStream</span> baos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 把word与输出流绑定</span>
    <span class="token class-name">RtfWriter2</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>doc<span class="token punctuation">,</span> baos<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 开始写入word，必须调用这个方法才能进行word的写入</span>
    doc<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// 加载额外字体的第一种方法：iText本身支持的字体少，这个时候可以使用系统自带的字体</span>
  <span class="token comment">/*  FontFactory.register(&quot;C:\\\\WINDOWS\\\\Fonts\\\\simsun.ttc&quot;);


   */</span><span class="token operator">/</span><span class="token operator">*</span> <span class="token comment">// 这是另一种加载字体的方法，把字体文件放到webapp下，防止某些电脑并没有第一种方法中的字体.</span>
    <span class="token class-name">String</span> realPath <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRealPath</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;font/&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">FontFactory</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>realPath <span class="token operator">+</span> <span class="token string">&quot;FZSTK.TTF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 方正舒体</span>
    <span class="token class-name">FontFactory</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>realPath <span class="token operator">+</span> <span class="token string">&quot;simfang.ttf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// simfang</span>
    <span class="token class-name">FontFactory</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>realPath <span class="token operator">+</span> <span class="token string">&quot;simhei.ttf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 黑体</span>
    <span class="token class-name">FontFactory</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>realPath <span class="token operator">+</span> <span class="token string">&quot;simkai.ttf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token operator">*</span><span class="token comment">//*</span>


    <span class="token comment">// 对字体文件右键查看详细信息的标题，可以获取getFont方法中第一个参数的字符串.</span>
    <span class="token comment">// 第二个参数不用管是编码集， 第三个参数是字体大小</span>
    <span class="token class-name">Font</span> titlefont <span class="token operator">=</span> <span class="token class-name">FontFactory</span><span class="token punctuation">.</span><span class="token function">getFont</span><span class="token punctuation">(</span><span class="token string">&quot;simsun&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BaseFont</span><span class="token punctuation">.</span><span class="token constant">WINANSI</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token operator">*</span><span class="token operator">/</span>
    <span class="token class-name">BaseFont</span> bfChinese <span class="token operator">=</span> <span class="token class-name">BaseFont</span><span class="token punctuation">.</span><span class="token function">createFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//        BaseFont.createFont(&quot;STSongStd-Light&quot;, &quot;UniGB-UCS2-H&quot;, BaseFont.NOT_EMBEDDED);</span>
    <span class="token comment">// 标题字体风格</span>
    <span class="token class-name">Font</span> titlefont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span>bfChinese<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">BOLD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置字体大小</span>
    titlefont<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//  设置字体格式,只能设置一种格式</span>
    titlefont<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">BOLD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置字体的重载方法，可以传递多种样式，比如加粗倾斜</span>
    titlefont<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token string">&quot;bold, italic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 加入一个段落,第一个参数是段落内容，第二个是字体</span>
    <span class="token class-name">Paragraph</span> paragraph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Paragraph</span><span class="token punctuation">(</span><span class="token string">&quot;第一个段落&quot;</span><span class="token punctuation">,</span> titlefont<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置段落的首行缩进</span>
    paragraph<span class="token punctuation">.</span><span class="token function">setFirstLineIndent</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置段落的段前间距，单位是float，这里与word本身不同不是磅值是厘米</span>
    paragraph<span class="token punctuation">.</span><span class="token function">setSpacingBefore</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置段落的段后间距，单位是float，这里与word本身不同不是磅值是厘米</span>
    paragraph<span class="token punctuation">.</span><span class="token function">setSpacingAfter</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置段落的右侧间距</span>
    paragraph<span class="token punctuation">.</span><span class="token function">setIndentationRight</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置段落的左侧间距</span>
    paragraph<span class="token punctuation">.</span><span class="token function">setIndentationLeft</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将段落添加到word</span>
    doc<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>paragraph<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// 申明一个6行的表格</span>
    <span class="token class-name">Table</span> table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Table</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置表格宽度</span>
    table<span class="token punctuation">.</span><span class="token function">setBorderWidth</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置表格每行的单元格的宽度,数组的长度表明了每行的单元格数量</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> widths <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置每行的单元格</span>
    table<span class="token punctuation">.</span><span class="token function">setWidths</span><span class="token punctuation">(</span>widths<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置表格所占的%</span>
    table<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">91</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置表格的对齐方式</span>
    table<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>




    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 申明一个单元格，Phrase表示单元格内容，参数1是单元格的文本内容，参数2是字体</span>
        <span class="token class-name">Cell</span> cell <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;content&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> titlefont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 水平对齐方式</span>
        cell<span class="token punctuation">.</span><span class="token function">setHorizontalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 垂直对齐方式</span>
        cell<span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将单元格插入到表格</span>
        table<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span>cell<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 将表格添加到word</span>
    doc<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">//添加图片</span>
   <span class="token comment">/* Image img = null;
    String imgUrl = &quot;d://dog.png&quot;;
    if(!StringUtils.isEmpty(imgUrl)){
      try {
        // 这个方法用于获取图片，可以传递图片的路径，或者可以传递图片的byte[]内容
        img = Image.getInstance(imgUrl);
        // 设置图片大小
        img.scaleAbsolute(180, 180);
      } catch (Exception e) {
        e.printStackTrace();
      }
    }


    doc.add(img);*/</span>
    <span class="token comment">// 关闭word文档对象,调用这个方法之后就无法添加内容到这个doc对象了.</span>
    doc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">String</span> fileName <span class="token operator">=</span>  <span class="token string">&quot;测试.doc&quot;</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/msword;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;attachment; filename=&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>fileName<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;gb2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ISO8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 得到输入流</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">OutputStream</span> os <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="复杂导出world" tabindex="-1"><a class="header-anchor" href="#复杂导出world" aria-hidden="true">#</a> 复杂导出World</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;exss&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createDocContext</span><span class="token punctuation">(</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">String</span> contextString<span class="token punctuation">)</span>
      <span class="token keyword">throws</span> <span class="token class-name">DocumentException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置纸张大小</span>
    <span class="token class-name">Document</span> document <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token class-name">PageSize</span><span class="token punctuation">.</span><span class="token constant">A4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 建立一个书写器，与document对象关联</span>
    <span class="token class-name">ByteArrayOutputStream</span> baos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">RtfWriter2</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span>baos<span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    document<span class="token punctuation">.</span><span class="token function">setMargins</span><span class="token punctuation">(</span><span class="token number">90f</span><span class="token punctuation">,</span> <span class="token number">90f</span><span class="token punctuation">,</span> <span class="token number">72f</span><span class="token punctuation">,</span> <span class="token number">72f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置标题字体样式：方正小标宋_GBK、二号、粗体</span>
    <span class="token comment">// Font tFont= DocStyleUtils.setFontStyle(&quot;方正小标宋_GBK&quot;, 22, Font.BOLD);</span>
    <span class="token class-name">RtfFont</span> tFont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RtfFont</span><span class="token punctuation">(</span><span class="token string">&quot;方正小标宋_GBK&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">BOLD</span><span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置正文字体样式:仿宋_GB2312、三号、常规</span>
    <span class="token comment">// Font cFont = DocStyleUtils.setFontStyle(&quot;仿 宋_GB2312&quot;, 16f, Font.NORMAL);</span>
    <span class="token comment">// 设置中文字体</span>
    <span class="token class-name">BaseFont</span> bfChinese <span class="token operator">=</span> <span class="token class-name">BaseFont</span><span class="token punctuation">.</span><span class="token function">createFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//        BaseFont.createFont(&quot;STSongStd-Light&quot;, &quot;UniGB-UCS2-H&quot;, BaseFont.NOT_EMBEDDED);</span>
    <span class="token comment">// 标题字体风格</span>
    <span class="token class-name">Font</span> titleFont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span>bfChinese<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">BOLD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 正文字体风格</span>
    <span class="token class-name">Font</span> contextFont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span>bfChinese<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">NORMAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// -----------</span>
    <span class="token comment">// 构建标题</span>
    <span class="token class-name">Font</span> cFont <span class="token operator">=</span> <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setFontStyle</span><span class="token punctuation">(</span><span class="token string">&quot;仿 宋&quot;</span><span class="token punctuation">,</span> <span class="token number">16f</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">NORMAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Paragraph</span> title <span class="token operator">=</span>
        <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>
            <span class="token string">&quot;配电线路故障周报第十二期（03月27日00时—04月03日00时）&quot;</span><span class="token punctuation">,</span> tFont<span class="token punctuation">,</span> <span class="token number">12f</span><span class="token punctuation">,</span> <span class="token class-name">Paragraph</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 构建[接收单位]</span>
    <span class="token class-name">Paragraph</span> jsdw <span class="token operator">=</span>
        <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>
            <span class="token string">&quot;【接收单位】&quot;</span><span class="token punctuation">,</span> <span class="token comment">/*DocStyleUtils.setFontStyle(&quot;黑 体&quot;, 18f, Font.BOLD)*/</span>
            <span class="token keyword">new</span> <span class="token class-name">RtfFont</span><span class="token punctuation">(</span><span class="token string">&quot;黑 体&quot;</span><span class="token punctuation">,</span> <span class="token number">18f</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">NORMAL</span><span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token number">32f</span><span class="token punctuation">,</span>
            <span class="token number">1.2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// [接收单位内容]</span>
    <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;公司各单位,hwhwhwhwh院&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Paragraph</span> jsdwnr <span class="token operator">=</span> <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cFont<span class="token punctuation">,</span> <span class="token number">32f</span><span class="token punctuation">,</span> <span class="token number">1.2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 构建【通报内容】</span>
    <span class="token class-name">Paragraph</span> tbnr <span class="token operator">=</span>
        <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>
            <span class="token string">&quot;【通报内容】&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* DocStyleUtils.setFontStyle(&quot;黑 体&quot;, 18f, Font.BOLD)*/</span>
            <span class="token keyword">new</span> <span class="token class-name">RtfFont</span><span class="token punctuation">(</span><span class="token string">&quot;黑 体&quot;</span><span class="token punctuation">,</span> <span class="token number">18f</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">NORMAL</span><span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">.</span>black<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token number">32f</span><span class="token punctuation">,</span>
            <span class="token number">1.2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tbnr<span class="token punctuation">.</span><span class="token function">setLeading</span><span class="token punctuation">(</span><span class="token number">30f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 一、总体情况</span>
    <span class="token class-name">Paragraph</span> ztqk <span class="token operator">=</span>
        <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>
            <span class="token string">&quot; 一、总体情况&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setFontStyle</span><span class="token punctuation">(</span><span class="token string">&quot;方正黑体_GBK&quot;</span><span class="token punctuation">,</span> <span class="token number">16f</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">BOLD</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">32f</span><span class="token punctuation">,</span> <span class="token number">1.2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">StringBuffer</span> finalResult <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    finalResult<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
        <span class="token string">&quot;除了手机上的鸿蒙系统外，华为还将带来搭载鸿蒙系统的MatePadPro2，根据曝光它将会配备12.9英寸120Hz的OLED显示屏，渲染图显示它相较于前代屏幕边框更窄，有着很高的屏占比，5G版本搭载麒麟9000芯片，WiFi版则搭载麒麟9000E，支持40W有线快充和27W无线充电。另外，据说还有个12.2英寸的版本，屏幕会有所不同。\\n&quot;</span>
            <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span>
            <span class="token operator">+</span> <span class="token string">&quot;由于受到美国的制裁，华为在手机等硬件市场遭遇了重创，而鸿蒙系统则是它们开辟的一条面向未来的全新赛道，目前尚处于起步阶段，除了要不断完善系统，覆盖更多类型的终端设备外，还需要配套的软件体系，形成相对完整的生态，并且仅靠自身的设备肯定是不够的，还得邀请更多合作伙伴融入鸿蒙系统的体系，一同绘制万物互联的蓝图。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Paragraph</span> p1Content <span class="token operator">=</span> <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>finalResult<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cFont<span class="token punctuation">,</span> <span class="token number">32f</span><span class="token punctuation">,</span> <span class="token number">1.2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// --------------------------------------</span>
    <span class="token comment">// Paragraph title = new Paragraph(&quot;标题&quot;);</span>
    <span class="token comment">// 设置标题格式对齐方式</span>
    title<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    title<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>titleFont<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">Paragraph</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Paragraph</span><span class="token punctuation">(</span>contextString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    context<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_LEFT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    context<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>contextFont<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 段间距</span>
    context<span class="token punctuation">.</span><span class="token function">setSpacingBefore</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置第一行空的列数</span>
    context<span class="token punctuation">.</span><span class="token function">setFirstLineIndent</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">// 设置Table表格,创建一个三列的表格</span>
    <span class="token class-name">Table</span> table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Table</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> width<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 设置每列宽度比例</span>
    table<span class="token punctuation">.</span><span class="token function">setWidths</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 占页面宽度比例</span>
    table<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 居中</span>
    table<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 垂直居中</span>
    table<span class="token punctuation">.</span><span class="token function">setAutoFillEmptyCells</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自动填满</span>
    table<span class="token punctuation">.</span><span class="token function">setBorderWidth</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 边框宽度</span>
    <span class="token comment">// 设置表头</span>
    <span class="token class-name">Cell</span> haderCell <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token string">&quot;表格表头&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    haderCell<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    haderCell<span class="token punctuation">.</span><span class="token function">setColspan</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span>haderCell<span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">endHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">Font</span> fontChinese <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span>bfChinese<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">NORMAL</span><span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">GREEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Cell</span> cell1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Paragraph</span><span class="token punctuation">(</span><span class="token string">&quot;这是一个3*3测试表格数据&quot;</span><span class="token punctuation">,</span> fontChinese<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cell1<span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span>cell1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token string">&quot;#1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token string">&quot;#2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    table<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token string">&quot;#3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>jsdw<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>jsdwnr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tbnr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ztqk<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">DocumentException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated catch block</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//    字体文档样式</span>
    <span class="token comment">// [接收单位内容]</span>
    <span class="token class-name">Font</span> ccFont <span class="token operator">=</span> <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setFontStyle</span><span class="token punctuation">(</span><span class="token string">&quot;仿 宋&quot;</span><span class="token punctuation">,</span> <span class="token number">22f</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">NORMAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">StringBuffer</span> sbs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sbs<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;华为在2019年8月份的开发者大会上正式推出了操作系统鸿蒙OS，它是一款面向全场景的分布式操作系统，创造一个超级虚拟终端互联的世界，将人、设备、场景有机地联系在一起，将消费者在全场景生活中接触的多种智能终端实现极速发现、极速连接、硬件互助、资源共享，用最合适的设备提供最佳的场景体验。2020年9月时升级到了鸿蒙OS2.0版本。···\\n&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;很多字打出来就被和谐。。。\\n&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;内容 和4L 差不多的意思。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Paragraph</span> wordFile <span class="token operator">=</span> <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>sbs<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ccFont<span class="token punctuation">,</span> <span class="token number">32f</span><span class="token punctuation">,</span> <span class="token number">1.2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">StringBuffer</span> sbs1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sbs1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;　目前已经有华为自家的电视、车机以及其它品牌的家电设备等搭载了鸿蒙系统，而本次发布会华为将让鸿蒙系统覆盖更多品类的终端设备，首先就是适配手机设备的鸿蒙系统，预计首批升级鸿蒙系统的产品将会有Mate40、Mate40Pro、Mate40Pro+、Mate40RS、MateX2、nova8、nova8Pro、MatePadPro，未来应该会开放更多设备进行升级。华为消费者业务CEO余承东在去年的年度旗舰新品发布盛典上表示，华为在网手机超过7亿台，因此作为全场景智慧生态的入口，手机是华为鸿蒙系统布局非常重要的一部分，华为肯定会尽力让更多产品升级鸿蒙系统。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Paragraph</span> fs <span class="token operator">=</span> <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>sbs1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ccFont<span class="token punctuation">,</span> <span class="token number">32f</span><span class="token punctuation">,</span> <span class="token number">1.2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>wordFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 表格----------------------------</span>
    <span class="token class-name">BaseFont</span> bcFont <span class="token operator">=</span>
        <span class="token class-name">BaseFont</span><span class="token punctuation">.</span><span class="token function">createFont</span><span class="token punctuation">(</span><span class="token class-name">BaseFont</span><span class="token punctuation">.</span><span class="token constant">HELVETICA</span><span class="token punctuation">,</span> <span class="token class-name">BaseFont</span><span class="token punctuation">.</span><span class="token constant">WINANSI</span><span class="token punctuation">,</span> <span class="token class-name">BaseFont</span><span class="token punctuation">.</span><span class="token constant">NOT_EMBEDDED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">Font</span> tableNameFont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span>bcFont<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">BOLD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Font</span> cellHeadFont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span>bcFont<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">BOLD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Paragraph</span> tablename1 <span class="token operator">=</span>
        <span class="token class-name">DocStyleUtils</span><span class="token punctuation">.</span><span class="token function">setParagraphStyle</span><span class="token punctuation">(</span><span class="token string">&quot;各单位线路故障情况统计&quot;</span><span class="token punctuation">,</span> tableNameFont<span class="token punctuation">,</span> <span class="token number">0.1f</span><span class="token punctuation">,</span> <span class="token class-name">Paragraph</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tablename1<span class="token punctuation">.</span><span class="token function">setLeading</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tablename1<span class="token punctuation">.</span><span class="token function">setSpacingAfter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Font</span> cellFont <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span>bcFont<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">NORMAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建一 表格(必须指定列，也可指定列和行)</span>


      <span class="token class-name">Table</span> table1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Table</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


      table1<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      table1<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">100f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// table1.setBorderWidthTop(0);</span>
      table1<span class="token punctuation">.</span><span class="token function">setCellsFitPage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      table1<span class="token punctuation">.</span><span class="token function">setBorderWidthTop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      table1<span class="token punctuation">.</span><span class="token function">setTop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


      table1<span class="token punctuation">.</span><span class="token function">setOffset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 设置每列所占比例</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> withs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        table1<span class="token punctuation">.</span><span class="token function">setWidths</span><span class="token punctuation">(</span>withs<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">DocumentException</span> e1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO Auto-generated catch block</span>
        e1<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 表头</span>
      <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cellHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


      <span class="token comment">// RtfFont cellFont = new RtfFont(&quot;仿宋_GB2312&quot;,9,Font.NORMAL,Color.BLACK);</span>


      cellHeaders<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;序号&quot;</span><span class="token punctuation">,</span> cellHeadFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellHeaders<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;单位&quot;</span><span class="token punctuation">,</span> cellHeadFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellHeaders<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;重合不良&quot;</span><span class="token punctuation">,</span> cellHeadFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellHeaders<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;重合良好&quot;</span><span class="token punctuation">,</span> cellHeadFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellHeaders<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;接地故障&quot;</span><span class="token punctuation">,</span> cellHeadFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellHeaders<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;分支线停电&quot;</span><span class="token punctuation">,</span> cellHeadFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellHeaders<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;合计&quot;</span><span class="token punctuation">,</span> cellHeadFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 居中显示</span>
        cellHeaders<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setHorizontalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 纵向居中显示</span>
        cellHeaders<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        table1<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span>cellHeaders<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>


      <span class="token comment">// 第二行合并跨越</span>
      <span class="token class-name">Cell</span> cell001 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token string">&quot;tjdwmc提交单位名称&quot;</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cell001<span class="token punctuation">.</span><span class="token function">setColspan</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cell001<span class="token punctuation">.</span><span class="token function">setHorizontalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cell001<span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      table1<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span>cell001<span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cellFirstRow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


      cellFirstRow<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;chblSum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellFirstRow<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;chlhSum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellFirstRow<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;jdgzSum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellFirstRow<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;fzxtdSum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cellFirstRow<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span>
          <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;chblSum+chlhSum+jdgzSum+fzxtdSum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cellFirstRow<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 居中显示</span>
        cellFirstRow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setHorizontalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 纵向居中显示</span>
        cellFirstRow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        table1<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span>cellFirstRow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>


      <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>


        <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cell <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;map.get()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;map.get(  重合不良 )&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;所发生的&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;接地故障&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;分支线停电&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cell<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span>
            <span class="token keyword">new</span> <span class="token class-name">Cell</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span>
                    <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>
                        <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
                            <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
                            <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>
                            <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    cellFont<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> cell<span class="token punctuation">.</span>length<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 居中显示</span>
          cell<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setHorizontalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 纵向居中显示</span>
          cell<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token constant">ALIGN_MIDDLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          table1<span class="token punctuation">.</span><span class="token function">addCell</span><span class="token punctuation">(</span>cell<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>


      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tablename1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>table1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>p1Content<span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">DocumentException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated catch block</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 导出Zip</span>


    <span class="token class-name">String</span> fileName <span class="token operator">=</span>  <span class="token string">&quot;sdfsdf测试Word.doc&quot;</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/msword;charset=UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;attachment; filename=&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>fileName<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;gb2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ISO8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 得到输入流</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">OutputStream</span> os <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="styleutils" tabindex="-1"><a class="header-anchor" href="#styleutils" aria-hidden="true">#</a> StyleUtils</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>util</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Chunk</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Font</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Paragraph</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>lowagie<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Phrase</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Color</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DocStyleUtils</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：设置字体的样式，颜色为黑色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日期：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">family</span> 字体类型
	 * <span class="token keyword">@param</span> <span class="token parameter">size</span>   字体大小，22f为二号，18f为小二号，16f为三号
	 * <span class="token keyword">@param</span> <span class="token parameter">style</span>  字体样式
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Font</span> <span class="token function">setFontStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> family<span class="token punctuation">,</span> <span class="token keyword">float</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> style<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">setFontStyle</span><span class="token punctuation">(</span>family<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">,</span> size<span class="token punctuation">,</span> style<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：设置字体的样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日期：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">family</span> 字体类型
	 * <span class="token keyword">@param</span> <span class="token parameter">color</span>  字体颜色
	 * <span class="token keyword">@param</span> <span class="token parameter">size</span>   字体大小，22f为二号，18f为小二号，16f为三号
	 * <span class="token keyword">@param</span> <span class="token parameter">style</span>  字体样式
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Font</span> <span class="token function">setFontStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> family<span class="token punctuation">,</span> <span class="token class-name">Color</span> color<span class="token punctuation">,</span> <span class="token keyword">float</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> style<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Font</span> font <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		font<span class="token punctuation">.</span><span class="token function">setFamily</span><span class="token punctuation">(</span>family<span class="token punctuation">)</span><span class="token punctuation">;</span>
		font<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		font<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
		font<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> font<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：为文字填充浅灰色背景<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日期：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">content</span>   需要填充背景颜色的内容
	 * <span class="token keyword">@param</span> <span class="token parameter">appendStr</span> 不需要填充背景颜色的内容
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Phrase</span> <span class="token function">setPhraseStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">String</span> appendStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Chunk</span> chunk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chunk</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 填充的背景颜色为浅灰色</span>
		chunk<span class="token punctuation">.</span><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">LIGHT_GRAY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Phrase</span> phrase <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">;</span>
		phrase<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>appendStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> phrase<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：设置段落的样式，设置前半截内容和后半截内容格式不一样的段落样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">content</span>         前半截内容
	 * <span class="token keyword">@param</span> <span class="token parameter">font</span>            字体的样式
	 * <span class="token keyword">@param</span> <span class="token parameter">firstLineIndent</span> 首行缩进多少字符，16f约等于一个字符
	 * <span class="token keyword">@param</span> <span class="token parameter">appendStr</span>       后半截内容
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Paragraph</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">Font</span> font<span class="token punctuation">,</span> <span class="token keyword">float</span> firstLineIndent<span class="token punctuation">,</span> <span class="token class-name">String</span> appendStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Paragraph</span> par <span class="token operator">=</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> font<span class="token punctuation">,</span> <span class="token number">0f</span><span class="token punctuation">,</span> <span class="token number">12f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Phrase</span> phrase <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phrase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		phrase<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>par<span class="token punctuation">)</span><span class="token punctuation">;</span>
		phrase<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>appendStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Paragraph</span> paragraph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Paragraph</span><span class="token punctuation">(</span>phrase<span class="token punctuation">)</span><span class="token punctuation">;</span>
		paragraph<span class="token punctuation">.</span><span class="token function">setFirstLineIndent</span><span class="token punctuation">(</span>firstLineIndent<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 设置对齐方式为两端对齐</span>
		paragraph<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Paragraph</span><span class="token punctuation">.</span><span class="token constant">ALIGN_JUSTIFIED_ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> paragraph<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：设置段落的样式，设置前半截内容填充了浅灰色的背景颜色，后半截内容没有背景颜色的段落样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日期：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">content</span>         前半截有背景颜色的内容
	 * <span class="token keyword">@param</span> <span class="token parameter">font</span>            字体的样式
	 * <span class="token keyword">@param</span> <span class="token parameter">firstLineIndent</span> 首行缩进的字符，16f约等于一个字符
	 * <span class="token keyword">@param</span> <span class="token parameter">leading</span>         行间距12f表示单倍行距
	 * <span class="token keyword">@param</span> <span class="token parameter">appendStr</span>       后半截内容
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Paragraph</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">Font</span> font<span class="token punctuation">,</span> <span class="token keyword">float</span> firstLineIndent<span class="token punctuation">,</span> <span class="token keyword">float</span> leading<span class="token punctuation">,</span>
			<span class="token class-name">String</span> appendStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Phrase</span> phrase <span class="token operator">=</span> <span class="token function">setPhraseStyle</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> appendStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Paragraph</span> par <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Paragraph</span><span class="token punctuation">(</span>phrase<span class="token punctuation">)</span><span class="token punctuation">;</span>
		par<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>font<span class="token punctuation">)</span><span class="token punctuation">;</span>
		par<span class="token punctuation">.</span><span class="token function">setFirstLineIndent</span><span class="token punctuation">(</span>firstLineIndent<span class="token punctuation">)</span><span class="token punctuation">;</span>
		par<span class="token punctuation">.</span><span class="token function">setLeading</span><span class="token punctuation">(</span>leading<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 设置对齐方式为两端对齐</span>
		par<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">Paragraph</span><span class="token punctuation">.</span><span class="token constant">ALIGN_JUSTIFIED_ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> par<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：设置段落的样式，一般用于设置标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日期：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">content</span>   段落的内容
	 * <span class="token keyword">@param</span> <span class="token parameter">font</span>      字体样式
	 * <span class="token keyword">@param</span> <span class="token parameter">leading</span>   行间距
	 * <span class="token keyword">@param</span> <span class="token parameter">alignment</span> 对齐方式
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Paragraph</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">Font</span> font<span class="token punctuation">,</span> <span class="token keyword">float</span> leading<span class="token punctuation">,</span> <span class="token keyword">int</span> alignment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> font<span class="token punctuation">,</span> <span class="token number">0f</span><span class="token punctuation">,</span> leading<span class="token punctuation">,</span> <span class="token number">0f</span><span class="token punctuation">,</span> alignment<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：设置段落的样式，对齐方式为两端对齐，缩进样式是文本之后0.2毫米<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日期：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">content</span>         段落的内容
	 * <span class="token keyword">@param</span> <span class="token parameter">font</span>            字体的样式
	 * <span class="token keyword">@param</span> <span class="token parameter">firstLineIndent</span> 首行缩进多少字符，16f约等于一个字符
	 * <span class="token keyword">@param</span> <span class="token parameter">leading</span>         行间距
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Paragraph</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">Font</span> font<span class="token punctuation">,</span> <span class="token keyword">float</span> firstLineIndent<span class="token punctuation">,</span> <span class="token keyword">float</span> leading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> font<span class="token punctuation">,</span> firstLineIndent<span class="token punctuation">,</span> leading<span class="token punctuation">,</span> <span class="token number">0.6f</span><span class="token punctuation">,</span> <span class="token class-name">Paragraph</span><span class="token punctuation">.</span><span class="token constant">ALIGN_JUSTIFIED_ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 功能说明：设置段落的样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BR</span><span class="token punctuation">&gt;</span></span>
	 * 修改日期：2021-04-27
	 * 
	 * <span class="token keyword">@author</span> hzqq
	 * <span class="token keyword">@param</span> <span class="token parameter">content</span>          段落的内容
	 * <span class="token keyword">@param</span> <span class="token parameter">font</span>             字体的样式
	 * <span class="token keyword">@param</span> <span class="token parameter">firstLineIndent</span>  首行缩进多少字符，16f约等于一个字符
	 * <span class="token keyword">@param</span> <span class="token parameter">leading</span>          行间距
	 * <span class="token keyword">@param</span> <span class="token parameter">indentationRight</span> 缩进样式中的文本之后多少毫米，0.6f相当于0.2毫米
	 * <span class="token keyword">@param</span> <span class="token parameter">alignment</span>        对齐方式
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Paragraph</span> <span class="token function">setParagraphStyle</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">Font</span> font<span class="token punctuation">,</span> <span class="token keyword">float</span> firstLineIndent<span class="token punctuation">,</span> <span class="token keyword">float</span> leading<span class="token punctuation">,</span>
			<span class="token keyword">float</span> indentationRight<span class="token punctuation">,</span> <span class="token keyword">int</span> alignment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Paragraph</span> par <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Paragraph</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> font<span class="token punctuation">)</span><span class="token punctuation">;</span>
		par<span class="token punctuation">.</span><span class="token function">setFirstLineIndent</span><span class="token punctuation">(</span>firstLineIndent<span class="token punctuation">)</span><span class="token punctuation">;</span>
		par<span class="token punctuation">.</span><span class="token function">setLeading</span><span class="token punctuation">(</span>leading<span class="token punctuation">)</span><span class="token punctuation">;</span>
		par<span class="token punctuation">.</span><span class="token function">setIndentationRight</span><span class="token punctuation">(</span>indentationRight<span class="token punctuation">)</span><span class="token punctuation">;</span>
		par<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span>alignment<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> par<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,8);function d(g,w){const a=p("ExternalLinkIcon");return o(),c("div",null,[k,i,n("p",null,[n("a",r,[s("个人案例"),e(a)])]),m])}const y=t(u,[["render",d],["__file","imex_02.html.vue"]]);export{y as default};
