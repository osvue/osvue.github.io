import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<h2 id="diskfileitemfactory类" tabindex="-1"><a class="header-anchor" href="#diskfileitemfactory类" aria-hidden="true">#</a> DiskFileItemFactory类</h2><ul><li>将请求消息实体中的每一个项目封装成单独的DiskFileItem (<strong>FileItem</strong>接口的实现) 对象的任务</li><li>由 <code>org.apache.commons.fileupload.FileItemFactory</code> 接口的默认实现</li></ul><ul><li><code>org.apache.commons.fileupload.disk.DiskFileItemFactory</code> 来完成。</li><li>当上传的文件项目比较小时，直接保存在内存中（速度比较快），比较大时，以临时文件的形式，保存在磁盘临时文件夹（虽然速度慢些，但是内存资源是有限的）。</li></ul><h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4><ul><li>依赖 <strong>commons-fileupload-1.2.1.jar</strong></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>1) public static final int DEFAULT_SIZE_THRESHOLD ：将文件保存在内存还是磁盘临时文件夹的默认临界值，值为10240，即10kb。

2) private File repository：用于配置在创建文件项目时，当文件项目大于临界值时使用的临时文件夹，默认采用系统默认的临时文件路径，可以通过系统属性 java.io.tmpdir获取。如下代码：

System.getProperty(&quot;java.io.tmpdir&quot;);

3) private int sizeThreshold：用于保存将文件保存在内存还是磁盘临时文件夹的临界值

构造方法
1) public DiskFileItemFactory()

      采用默认临界值和系统临时文件夹构造文件项工厂对象。

2) public DiskFileItemFactory(int sizeThreshold,File repository)

      采用参数指定临界值和系统临时文件夹构造文件项工厂对象。

3) FileItem createItem() 
       根据DiskFileItemFactory相关配置将每一个请求消息实体项目创建成DiskFileItem 实例，并返回。该方法从来不需要我们亲自调用，FileUpload组件在解析请求时内部使用。

4) void setSizeThreshold(int sizeThreshold)
        Apache文件上传组件在解析上传数据中的每个字段内容时，需要临时保存解析出的数据，以便在后面进行数据的进一步处理（保存在磁盘特定位置或插入数据库）。因为Java虚拟机默认可以使用的内存空间是有限的，超出限制时将会抛出“java.lang.OutOfMemoryError”错误。如果上传的文件很大，例如800M的文件，在内存中将无法临时保存该文件内容，Apache文件上传组件转而采用临时文件来保存这些数据；但如果上传的文件很小，例如600个字节的文件，显然将其直接保存在内存中性能会更加好些。

        setSizeThreshold方法用于设置是否将上传文件已临时文件的形式保存在磁盘的临界值（以字节为单位的int值），如果从没有调用该方法设置此临界值，将会采用系统默认值10KB。对应的getSizeThreshold() 方法用来获取此临界值。

5) void setRepository(File repository)
        setRepositoryPath方法用于设置当上传文件尺寸大于setSizeThreshold方法设置的临界值时，将文件以临时文件形式保存在磁盘上的存放目录。有一个对应的获得临时文件夹的 File getRespository() 方法。

         注意：当从没有调用此方法设置临时文件存储目录时，默认采用系统默认的临时文件路径，可以通过系统属性 java.io.tmpdir 获取。如下代码：

System.getProperty(&quot;java.io.tmpdir&quot;);
</code></pre></div><p><code>Tomcat系统默认临时目录为“&lt;tomcat安装目录&gt;/temp/”。</code></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// 必须设置好上传文件的最大阀值</span>

<span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">MAX_SIZE</span> <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span><span class="token comment">// 设置上传文件最大为 10G </span>

<span class="token comment">// 必须设置文件上传服务器上的临时目录</span>

<span class="token comment">// 文件上传参数配置</span>
<span class="token comment">// 创建一个新的文件上传句柄  </span>
<span class="token class-name">DiskFileItemFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiskFileItemFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 设置内存缓冲区，超过后写入临时文件</span>
factory<span class="token punctuation">.</span><span class="token function">setSizeThreshold</span><span class="token punctuation">(</span><span class="token number">4096</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 设置上传到服务器上文件的临时存放目录 -- 非常重要，防止存放到系统盘造成系统盘空间不足</span>
factory<span class="token punctuation">.</span><span class="token function">setRepository</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\uploadFileTemp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ServletFileUpload</span> upload <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletFileUpload</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>  
upload<span class="token punctuation">.</span><span class="token function">setHeaderEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 设置单个文件的最大上传值</span>
upload<span class="token punctuation">.</span><span class="token function">setSizeMax</span><span class="token punctuation">(</span><span class="token constant">MAX_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 文件上传上限10G</span>

<span class="token comment">// 上传成功后一定要删除临时目录的临时文件</span>

fileItem<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 请务必调用，在文件上传结束后，删除临时目录的文件...</span>

</code></pre></div>`,8),p=[o];function c(l,i){return s(),a("div",null,p)}const u=n(e,[["render",c],["__file","file_big.html.vue"]]);export{u as default};
