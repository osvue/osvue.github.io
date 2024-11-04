import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="poi" tabindex="-1"><a class="header-anchor" href="#poi" aria-hidden="true">#</a> poi</h2><div class="language-java" data-ext="java"><pre class="language-java"><code> 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>hssf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">HSSFCellStyle</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>hssf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">HSSFFont</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>hssf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">HSSFSheet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>hssf<span class="token punctuation">.</span>usermodel<span class="token punctuation">.</span></span><span class="token class-name">HSSFWorkbook</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>hssf<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CellRangeAddress</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>poi<span class="token punctuation">.</span>hssf<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Region</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CellStyleUtil</span> <span class="token punctuation">{</span>

	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">renderBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
		
		<span class="token class-name">HSSFWorkbook</span> wb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HSSFWorkbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">HSSFSheet</span> sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">createSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">HSSFCellStyle</span> setBorder <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">createCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//	一、设置背景色：</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setFillForegroundColor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 设置背景色</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setFillPattern</span><span class="token punctuation">(</span><span class="token class-name">HSSFCellStyle</span><span class="token punctuation">.</span><span class="token constant">SOLID_FOREGROUND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//	二、设置边框:</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setBorderBottom</span><span class="token punctuation">(</span><span class="token class-name">HSSFCellStyle</span><span class="token punctuation">.</span><span class="token constant">BORDER_THIN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//下边框</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setBorderLeft</span><span class="token punctuation">(</span><span class="token class-name">HSSFCellStyle</span><span class="token punctuation">.</span><span class="token constant">BORDER_THIN</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//左边框</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setBorderTop</span><span class="token punctuation">(</span><span class="token class-name">HSSFCellStyle</span><span class="token punctuation">.</span><span class="token constant">BORDER_THIN</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//上边框</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setBorderRight</span><span class="token punctuation">(</span><span class="token class-name">HSSFCellStyle</span><span class="token punctuation">.</span><span class="token constant">BORDER_THIN</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//右边框</span>

		<span class="token comment">//	三、设置居中:</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">HSSFCellStyle</span><span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 居中</span>

		<span class="token comment">//四、设置字体:</span>

		<span class="token class-name">HSSFFont</span> font <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">createFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		font<span class="token punctuation">.</span><span class="token function">setFontName</span><span class="token punctuation">(</span><span class="token string">&quot;黑体&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		font<span class="token punctuation">.</span><span class="token function">setFontHeightInPoints</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置字体大小</span>

		<span class="token class-name">HSSFFont</span> font2 <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">createFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		font2<span class="token punctuation">.</span><span class="token function">setFontName</span><span class="token punctuation">(</span><span class="token string">&quot;仿宋_GB2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		font2<span class="token punctuation">.</span><span class="token function">setBoldweight</span><span class="token punctuation">(</span><span class="token class-name">HSSFFont</span><span class="token punctuation">.</span><span class="token constant">BOLDWEIGHT_BOLD</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//粗体显示</span>

		font2<span class="token punctuation">.</span><span class="token function">setFontHeightInPoints</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>font<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//选择需要用到的字体格式</span>

		<span class="token comment">//五、设置列宽:</span>

		sheet<span class="token punctuation">.</span><span class="token function">setColumnWidth</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3766</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第一个参数代表列id(从0开始),第2个参数代表宽度值 参考 ：&quot;2012-08-10&quot;的宽度为2500</span>

		<span class="token comment">//六、设置自动换行:</span>

		setBorder<span class="token punctuation">.</span><span class="token function">setWrapText</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置自动换行</span>

		<span class="token comment">//七、合并单元格:</span>
		 

			<span class="token class-name">Region</span> region1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Region</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">//参数1：行号 参数2：起始列号 参数3：行号 参数4：终止列号</span>

			<span class="token comment">//或者用</span>

			<span class="token comment">//	CellRangeAddress region1 = new CellRangeAddress(rowNumber, rowNumber, (short) 0, (short) 11);</span>

			<span class="token comment">//但应注意两个构造方法的参数不是一样的，具体使用哪个取决于POI的不同版本。</span>

		   sheet<span class="token punctuation">.</span><span class="token function">addMergedRegion</span><span class="token punctuation">(</span>region1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,2),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","poi4.html.vue"]]);export{i as default};
