import{_ as n,o as s,c as t,a as e}from"./app-215c512d.js";const p={};function o(c,a){return s(),t("div",null,a[0]||(a[0]=[e(`<h2 id="springboot-集成-freemarker-导出-word-或-excel-模板文件" tabindex="-1"><a class="header-anchor" href="#springboot-集成-freemarker-导出-word-或-excel-模板文件" aria-hidden="true">#</a> SpringBoot 集成 FreeMarker 导出 Word 或 Excel 模板文件</h2><h3 id="思路解说" tabindex="-1"><a class="header-anchor" href="#思路解说" aria-hidden="true">#</a> 思路解说</h3><blockquote><ol><li>word 模板文件（doc 或 docx 文件）另存为 xml 文件</li><li>将后缀 xml 改成 html；大部分文档会改成 ftl（FreeMarker 的后缀名），因为 word 文件另存为 xml 文件后，xml 文件中的代码很乱，后面的修改会很麻烦，因为我习惯用 VSCode 编辑器，安装 Beautify 插件后，可以自动格式化 html 代码，这样有利于后面的修改</li><li>将内容用<code>\${param ! &#39;&#39;}</code>替换；例：<code>姓名：月牙坠</code>--&gt;<code>姓名：\${name ! &#39;&#39;}</code></li><li>word 文件中的图片是 Base64 编码，我在这里封装了一个方法 imgUrl2Base64（图片地址转Base64编码） <code>top.yueyazhui.word_freemarker.util.ExportDocUtil.getImageBase64</code>；如果 imgUrl 中含有中文，将 imgUrl 以 &quot;/&quot; 切割成数组，含有中文的那部分用URLEncoder.encode(&quot;&quot;, UTF-8&quot;) 编码后，重新拼接 imgUrl；</li><li>如果想要列表（表格）内容，在 html 文件中找到单个内容，在外层加<code>&lt;#list favorites as favorite&gt;&lt;/#list&gt;</code></li><li>封装导出 word 文件到客户端的方法<code>top.yueyazhui.word_freemarker.service.IExportDocService.exportDocToClient</code></li><li>html 中引用的数据源是一个<code>Map&lt;String, Object&gt;</code>类型，所以传递数据的时候需要把<code>Object</code>类型转成<code>Map&lt;String, Object&gt;</code>类型</li><li>word 原文件<code>src/main/resources/attachment/info.doc</code></li><li>导出 Excel 与 导出 Word 基本一样；只需改变响应的内容类型：<code>response.setContentType(&quot;application/msword&quot;); response.setContentType(&quot;application/msexcel&quot;);</code></li><li>导出 Excel 时，Excel 中不能有图片</li><li>在实际开发中，Word 可能会很复杂，需要用到多种 FreeMarker 语法，常用的 FreeMarker 语法</li></ol></blockquote><p>👀 注：<br> 遇到列表时，考虑的情况</p><ul><li><p>以 Word 模板列表条数为准（保持模板格式）</p></li><li><p>以数据的条数为准 （展示全部数据）</p></li><li><p>没有数据</p></li><li><p>数据条数小于 Word 模板列表条数</p></li><li><p>数据条数大于 Word 模板列表条数</p></li></ul><h3 id="freemarker-配置" tabindex="-1"><a class="header-anchor" href="#freemarker-配置" aria-hidden="true">#</a> FreeMarker 配置</h3><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#指定freemarker的模板路径和模板的后缀</span>
<span class="token key attr-name">spring.freemarker.template-loader-path</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates/</span>
<span class="token key attr-name">spring.freemarker.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.html</span>
<span class="token comment"># 指定字符集</span>
<span class="token key attr-name">spring.freemarker.charset</span><span class="token punctuation">=</span><span class="token value attr-value">utf-8</span>
<span class="token comment"># 指定是否要启用缓存</span>
<span class="token key attr-name">spring.freemarker.cache</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">#指定是否要暴露请求和会话属性</span>
<span class="token key attr-name">spring.freemarker.expose-request-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.freemarker.expose-session-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre></div><h3 id="freemarker-语法" tabindex="-1"><a class="header-anchor" href="#freemarker-语法" aria-hidden="true">#</a> FreeMarker 语法</h3><h4 id="特殊字符转义" tabindex="-1"><a class="header-anchor" href="#特殊字符转义" aria-hidden="true">#</a> 特殊字符转义</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#noparse</span><span class="token punctuation">&gt;</span></span>
    &lt;#include &quot;./common.ftl&quot;&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#noparse</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h4><h5 id="判断如果存在-就输出这个值" tabindex="-1"><a class="header-anchor" href="#判断如果存在-就输出这个值" aria-hidden="true">#</a> 判断如果存在，就输出这个值</h5><div class="language-html" data-ext="html"><pre class="language-html"><code>info.name??
</code></pre></div><h5 id="判断如果不存在-就输出默认值" tabindex="-1"><a class="header-anchor" href="#判断如果不存在-就输出默认值" aria-hidden="true">#</a> 判断如果不存在，就输出默认值</h5><div class="language-html" data-ext="html"><pre class="language-html"><code>info.sex ! &#39;未知&#39;
info.name ! &#39;&#39; 为了防止 info.name 不存在报错
</code></pre></div><h4 id="内置函数-调用区别于属性的访问-使用-代替" tabindex="-1"><a class="header-anchor" href="#内置函数-调用区别于属性的访问-使用-代替" aria-hidden="true">#</a> 内置函数，调用区别于属性的访问，使用 ? 代替</h4><h5 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h5><div class="language-html" data-ext="html"><pre class="language-html"><code>html：对字符串进行HTML编码
cap_first：将字符串第一个字母大写
lower_case：将字符串转换成小写
trim：去掉字符串前后的空白字符
length: 获取字符长度
</code></pre></div><h5 id="sequences-序列" tabindex="-1"><a class="header-anchor" href="#sequences-序列" aria-hidden="true">#</a> Sequences(序列)</h5><div class="language-html" data-ext="html"><pre class="language-html"><code>size：获得序列中元素的数目
</code></pre></div><h5 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h5><div class="language-html" data-ext="html"><pre class="language-html"><code>int：取得数字的整数部分
</code></pre></div><h4 id="简化" tabindex="-1"><a class="header-anchor" href="#简化" aria-hidden="true">#</a> 简化</h4><h5 id="是否存在" tabindex="-1"><a class="header-anchor" href="#是否存在" aria-hidden="true">#</a> 是否存在</h5><div class="language-html" data-ext="html"><pre class="language-html"><code>info.name?if_exists
info.name?exists
info.name??
</code></pre></div><h5 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h5><div class="language-html" data-ext="html"><pre class="language-html"><code>info.name?default(&quot;月牙坠&quot;)
info.name ! &quot;月牙坠&quot;
</code></pre></div><h4 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h4><div class="language-html" data-ext="html"><pre class="language-html"><code>日期格式
info.birth?string(&#39;yyyy-MM-dd&#39;)
三种不同的数字格式
info.num?string.number 20
info.num?string.currency $20.00
info.num?string.percent 20%
</code></pre></div><h4 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#assign</span> <span class="token attr-name">mark</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> ture</span> <span class="token punctuation">/&gt;</span></span>
mark?string(&quot;yes&quot;,&quot;no&quot;) yes
</code></pre></div><h4 id="条件" tabindex="-1"><a class="header-anchor" href="#条件" aria-hidden="true">#</a> 条件</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#if</span> <span class="token attr-name">info.score</span> <span class="token attr-name">gte</span> <span class="token attr-name">60</span> <span class="token attr-name">&amp;&amp;</span> <span class="token attr-name">info.score</span> <span class="token attr-name">lte</span> <span class="token attr-name">85</span><span class="token punctuation">&gt;</span></span>
    及格
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#elseif</span> <span class="token attr-name">info.score</span> <span class="token punctuation">&gt;</span></span>= 85 &amp;&amp; info.score &lt;= 100&gt;
    优秀
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#else</span><span class="token punctuation">&gt;</span></span>
    不及格
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#if</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>gt：大于（greater than）
gte：大于等于（greater than or equal）
lt：小于（less than）
lte：小于等于（less than or equal）
eq：等于（equal）
neq：不等于
</code></pre></div><h4 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#break</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h4 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#switch</span> <span class="token attr-name">info.sex</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#case</span> <span class="token attr-name">1</span><span class="token punctuation">&gt;</span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#break</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#case</span> <span class="token attr-name">0</span><span class="token punctuation">&gt;</span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#break</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#default</span><span class="token punctuation">&gt;</span></span>未知
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#switch</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h4><h5 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h5><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">info.favorites</span> <span class="token attr-name">as</span> <span class="token attr-name">favorite</span><span class="token punctuation">&gt;</span></span>
    获取列表大小：info.favorites?size
    获取游标：favorite_index
    判断是否有下一个元素：favorite_has_next
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h5 id="数字-1" tabindex="-1"><a class="header-anchor" href="#数字-1" aria-hidden="true">#</a> 数字</h5><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">0..100</span> <span class="token attr-name">as</span> <span class="token attr-name">i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="前端-vue" tabindex="-1"><a class="header-anchor" href="#前端-vue" aria-hidden="true">#</a> 前端（vue）</h3><blockquote><p>api</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">exportDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/export/doc/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;blob&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>view</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> exportDoc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/**&#39;</span>

<span class="token function">exportDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> fileNameEncode <span class="token operator">=</span> res<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;filename=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> fileName <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>fileNameEncode<span class="token punctuation">)</span>

  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>type
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
  <span class="token keyword">let</span> objectUrl <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>href <span class="token operator">=</span> objectUrl
  link<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName
  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>objectUrl<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>注：axios 的响应拦截器</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 二进制数据则直接返回</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>request<span class="token punctuation">.</span>responseType <span class="token operator">===</span> <span class="token string">&#39;blob&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre></div>`,50)]))}const r=n(p,[["render",o],["__file","dev3_free_b.html.vue"]]);export{r as default};
