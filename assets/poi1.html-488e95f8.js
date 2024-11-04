import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="遍历workbook" tabindex="-1"><a class="header-anchor" href="#遍历workbook" aria-hidden="true">#</a> 遍历workbook</h3><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// load源文件   </span>

POIFSFileSystem fs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">POIFSFileSystem</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

HSSFWorkbook wb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HSSFWorkbook</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span><span class="token punctuation">;</span>   

<span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> wb<span class="token punctuation">.</span><span class="token function">getNumberOfSheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   

  HSSFSheet sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">getSheetAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>   

  <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> sheet<span class="token punctuation">.</span><span class="token function">getFirstRowNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sheet<span class="token punctuation">.</span><span class="token function">getLastRowNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   

  HSSFRow row <span class="token operator">=</span> sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>   

      <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   

    。。。操作<span class="token punctuation">}</span>   

     <span class="token punctuation">}</span>   

    <span class="token punctuation">}</span>   

 <span class="token comment">// 目标文件   </span>

 FileOutputStream fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>objectPath<span class="token punctuation">)</span><span class="token punctuation">;</span>   

 <span class="token comment">//写文件   </span>

 swb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>   

 fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="得到列和单元格" tabindex="-1"><a class="header-anchor" href="#得到列和单元格" aria-hidden="true">#</a> 得到列和单元格</h3><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>HSSFRow row <span class="token operator">=</span> sheet<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>   

HSSFCell cell <span class="token operator">=</span> row<span class="token punctuation">.</span><span class="token function">getCell</span><span class="token punctuation">(</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre></div><h3 id="设置sheet名称和单元格内容为中文" tabindex="-1"><a class="header-anchor" href="#设置sheet名称和单元格内容为中文" aria-hidden="true">#</a> 设置sheet名称和单元格内容为中文</h3><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wb<span class="token punctuation">.</span><span class="token function">setSheetName</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token string">&quot;中文&quot;</span><span class="token punctuation">,</span>HSSFCell<span class="token punctuation">.</span><span class="token constant">ENCODING_UTF_16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     

cell<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

cell<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;中文&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre></div><h3 id="单元格内容未公式或数值-可以这样读写" tabindex="-1"><a class="header-anchor" href="#单元格内容未公式或数值-可以这样读写" aria-hidden="true">#</a> 单元格内容未公式或数值，可以这样读写</h3><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  cell<span class="token punctuation">.</span><span class="token function">setCellType</span><span class="token punctuation">(</span>HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_NUMERIC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

  cell<span class="token punctuation">.</span><span class="token function">getNumericCellValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
</code></pre></div><h3 id="设置列宽、行高" tabindex="-1"><a class="header-anchor" href="#设置列宽、行高" aria-hidden="true">#</a> 设置列宽、行高</h3><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> sheet<span class="token punctuation">.</span><span class="token function">setColumnWidth</span><span class="token punctuation">(</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span>column<span class="token punctuation">,</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>   

 row<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre></div><h3 id="添加区域-合并单元格" tabindex="-1"><a class="header-anchor" href="#添加区域-合并单元格" aria-hidden="true">#</a> 添加区域，合并单元格</h3><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> Region region <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Region</span><span class="token punctuation">(</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span>rowFrom<span class="token punctuation">,</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span>columnFrom<span class="token punctuation">,</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span>rowTo<span class="token punctuation">,</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span>columnTo<span class="token punctuation">)</span><span class="token punctuation">;</span>   

 sheet<span class="token punctuation">.</span><span class="token function">addMergedRegion</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">;</span>   

 <span class="token comment">//得到所有区域   </span>

 sheet<span class="token punctuation">.</span><span class="token function">getNumMergedRegions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div><h3 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h3><p>根据单元格不同属性返回字符串数值</p><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">public</span> String <span class="token function">getCellStringValue</span><span class="token punctuation">(</span><span class="token parameter">HSSFCell cell</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   

    String cellValue <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>   

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>cell<span class="token punctuation">.</span><span class="token function">getCellType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   

    <span class="token keyword">case</span> HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_STRING</span><span class="token operator">:</span>   

      cellValue <span class="token operator">=</span> cell<span class="token punctuation">.</span><span class="token function">getStringCellValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

      <span class="token keyword">if</span><span class="token punctuation">(</span>cellValue<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token operator">||</span>cellValue<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span>   

        cellValue<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>   

      <span class="token keyword">break</span><span class="token punctuation">;</span>   

    <span class="token keyword">case</span> HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_NUMERIC</span><span class="token operator">:</span>   

       cellValue <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span><span class="token function">getNumericCellValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

       <span class="token keyword">break</span><span class="token punctuation">;</span>   

     <span class="token keyword">case</span> HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_FORMULA</span><span class="token operator">:</span>   

       cell<span class="token punctuation">.</span><span class="token function">setCellType</span><span class="token punctuation">(</span>HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_NUMERIC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

       cellValue <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span><span class="token function">getNumericCellValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

       <span class="token keyword">break</span><span class="token punctuation">;</span>   

     <span class="token keyword">case</span> HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_BLANK</span><span class="token operator">:</span>   

       cellValue<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>   

       <span class="token keyword">break</span><span class="token punctuation">;</span>   

     <span class="token keyword">case</span> HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_BOOLEAN</span><span class="token operator">:</span>   

       <span class="token keyword">break</span><span class="token punctuation">;</span>   

     <span class="token keyword">case</span> HSSFCell<span class="token punctuation">.</span><span class="token constant">CELL_TYPE_ERROR</span><span class="token operator">:</span>   

       <span class="token keyword">break</span><span class="token punctuation">;</span>   

     <span class="token keyword">default</span><span class="token operator">:</span>   

       <span class="token keyword">break</span><span class="token punctuation">;</span>   

     <span class="token punctuation">}</span>   

     <span class="token keyword">return</span> cellValue<span class="token punctuation">;</span>   

   <span class="token punctuation">}</span>  

</code></pre></div><h3 id="常用单元格边框格式" tabindex="-1"><a class="header-anchor" href="#常用单元格边框格式" aria-hidden="true">#</a> 常用单元格边框格式</h3><p>虚线HSSFCellStyle.BORDER_DOTTED 实线HSSFCellStyle.BORDER_THIN</p><p>代码</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HSSFCellStyle</span> <span class="token function">getCellStyle</span><span class="token punctuation">(</span><span class="token keyword">short</span> type<span class="token punctuation">)</span>   

  <span class="token punctuation">{</span>    

    <span class="token class-name">HSSFWorkbook</span> wb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HSSFWorkbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

    <span class="token class-name">HSSFCellStyle</span> style <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">createCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

    style<span class="token punctuation">.</span><span class="token function">setBorderBottom</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//下边框   </span>

    style<span class="token punctuation">.</span><span class="token function">setBorderLeft</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//左边框   </span>

    style<span class="token punctuation">.</span><span class="token function">setBorderRight</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//右边框   </span>

    style<span class="token punctuation">.</span><span class="token function">setBorderTop</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//上边框   </span>

   <span class="token keyword">return</span> style<span class="token punctuation">;</span>   

   <span class="token punctuation">}</span>  
</code></pre></div><h3 id="设置字体和内容位置" tabindex="-1"><a class="header-anchor" href="#设置字体和内容位置" aria-hidden="true">#</a> 设置字体和内容位置</h3><p>代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
HSSFFont f  <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">createFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

f<span class="token punctuation">.</span><span class="token function">setFontHeightInPoints</span><span class="token punctuation">(</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//字号   </span>

f<span class="token punctuation">.</span><span class="token function">setBoldweight</span><span class="token punctuation">(</span>HSSFFont<span class="token punctuation">.</span><span class="token constant">BOLDWEIGHT_NORMAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//加粗   </span>

style<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>   

style<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span>HSSFCellStyle<span class="token punctuation">.</span><span class="token constant">ALIGN_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//左右居中   </span>

style<span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span>HSSFCellStyle<span class="token punctuation">.</span><span class="token constant">VERTICAL_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//上下居中   </span>

style<span class="token punctuation">.</span><span class="token function">setRotation</span><span class="token punctuation">(</span>short rotation<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//单元格内容的旋转的角度   </span>

HSSFDataFormat df <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">createDataFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

style1<span class="token punctuation">.</span><span class="token function">setDataFormat</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span><span class="token function">getFormat</span><span class="token punctuation">(</span><span class="token string">&quot;0.00%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置单元格数据格式   </span>

cell<span class="token punctuation">.</span><span class="token function">setCellFormula</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//给单元格设公式   </span>

style<span class="token punctuation">.</span><span class="token function">setRotation</span><span class="token punctuation">(</span>short rotation<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//单元格内容的旋转的角度   </span>

cell<span class="token punctuation">.</span><span class="token function">setCellStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>   


</code></pre></div><p>1### 插入图片</p><p>代码</p><p>//先把读进来的图片放到一个ByteArrayOutputStream中，以便产生ByteArray</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>

ByteArrayOutputStream byteArrayOut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

BufferedImage bufferImg <span class="token operator">=</span> ImageIO<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;ok.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

ImageIO<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bufferImg<span class="token punctuation">,</span><span class="token string">&quot;jpg&quot;</span><span class="token punctuation">,</span>byteArrayOut<span class="token punctuation">)</span><span class="token punctuation">;</span>   

 <span class="token comment">//读进一个excel模版   </span>

FileInputStream fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>filePathName<span class="token operator">+</span><span class="token string">&quot;/stencil.xlt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

fs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">POIFSFileSystem</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>   

<span class="token comment">//创建一个工作薄   </span>

HSSFWorkbook wb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HSSFWorkbook</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span><span class="token punctuation">;</span>   

HSSFSheet sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span><span class="token function">getSheetAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

HSSFPatriarch patriarch <span class="token operator">=</span> sheet<span class="token punctuation">.</span><span class="token function">createDrawingPatriarch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

HSSFClientAnchor anchor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HSSFClientAnchor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1023</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token punctuation">(</span>short<span class="token punctuation">)</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     

patriarch<span class="token punctuation">.</span><span class="token function">createPicture</span><span class="token punctuation">(</span>anchor <span class="token punctuation">,</span> wb<span class="token punctuation">.</span><span class="token function">addPicture</span><span class="token punctuation">(</span>byteArrayOut
</code></pre></div>`,33),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","poi1.html.vue"]]);export{i as default};
