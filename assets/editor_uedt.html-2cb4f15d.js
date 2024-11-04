import{_ as o,M as e,p as c,q as l,R as n,t as a,N as t,a1 as p}from"./framework-d81ad7e5.js";const u={},k=p("<ul><li><strong>TinyMCE</strong> 　TinyMCE是一个开源的所见即所得的HTML编辑器，界面相当清新，界面模拟本地软件的风格，顶部有菜单栏。支持图片在线处理，插件多，功能非常强大，易于集成，并且拥有可定制的主题。支持目前流行的各种浏览器，它可以达到微软Word类似的编辑体验。 更多介绍及下载：<code>https://www.tiny.cloud/docs/demo/full-featured/</code></li><li><strong>CKEditor</strong> 　Ckeditor也是一款非常经典的富文本编辑器，官方下载量过千万。它是在非常著名的FCkEditor基础上开发的新版本，FckEditor的用户现在基本都转移到Ckeditor了。</li></ul><p>Ckeditor有高性能的实时预览，它特有行内编辑功能，使得编辑内容更加直观，仿佛是在编辑网页一样，有很强的可扩展性，被各大网站广泛运用。 更多介绍及下载：<code>https://ckeditor.com/</code></p><ul><li><strong>UEditor</strong> 　UEditor 是由百度出品的富文本web编辑器，具有轻量，可定制，注重用户体验等特点，开源免费。这款编辑器用过的人也非常多，功能非常全面，插件很多，还可以很方便插入百度地图，接入十分简单。 更多介绍及下载：<code>http://ueditor.baidu.com/website/</code></li><li><strong>wangEditor</strong> 　wangEditor轻量级，小巧实用，配置方便，使用简单。可以自定义皮肤功能，免费开源。用户数量也很多，尤其是用在一些轻型环境，比如论坛社区回帖。wangEditor是国人出品的开源项目。 更多介绍及下载：<code>http://www.wangeditor.com/</code></li><li><strong>kindeditor</strong> 　KindEditor历史也很长了，用户数也不少，国内某公司出品。免费开源。界面类似于office word，界面和功能中规中矩，文档齐全，使用还算方便。 更多介绍及下载：<code>http://kindeditor.net/demo.php</code></li></ul>",3),i={href:"http://kindeditor.net/demo.php",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.tiny.cloud/",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,null,-1),g={href:"http://fex.baidu.com/ueditor/#start-config",target:"_blank",rel:"noopener noreferrer"},d=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en-US<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>ueditor demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 加载编辑器的容器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/plain<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        这里写你的初始化内容
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 配置文件 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ueditor.config.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 编辑器源码文件 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ueditor.all.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 实例化编辑器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> ue <span class="token operator">=</span> <span class="token constant">UE</span><span class="token punctuation">.</span><span class="token function">getEditor</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="设置和读取编辑器的内容" tabindex="-1"><a class="header-anchor" href="#设置和读取编辑器的内容" aria-hidden="true">#</a> 设置和读取编辑器的内容</h3><ul><li><strong>getContent 和 setContent</strong> 方法可以设置和读取编辑器的内容</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> ue <span class="token operator">=</span> <span class="token constant">UE</span><span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//对编辑器的操作最好在编辑器ready之后再做</span>
ue<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置编辑器的内容</span>
    ue<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取html内容，返回: &lt;p&gt;hello&lt;/p&gt;</span>
    <span class="token keyword">var</span> html <span class="token operator">=</span> ue<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取纯文本内容，返回: hello</span>
    <span class="token keyword">var</span> txt <span class="token operator">=</span> ue<span class="token punctuation">.</span><span class="token function">getContentTxt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="定制工具栏图标" tabindex="-1"><a class="header-anchor" href="#定制工具栏图标" aria-hidden="true">#</a> 定制工具栏图标</h3><p>UEditor 工具栏上的按钮列表可以自定义配置,只需要通过修改配置项就可以实现需求</p><h4 id="配置项修改说明" tabindex="-1"><a class="header-anchor" href="#配置项修改说明" aria-hidden="true">#</a> 配置项修改说明</h4><p>修改配置项的方法：</p><ol><li>方法一：修改 ueditor.config.js 里面的 toolbars</li><li>方法二：实例化编辑器的时候传入 toolbars 参数</li></ol><h4 id="完整的按钮列表" tabindex="-1"><a class="header-anchor" href="#完整的按钮列表" aria-hidden="true">#</a> 完整的按钮列表</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">toolbars</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string">&#39;anchor&#39;</span><span class="token punctuation">,</span> <span class="token comment">//锚点</span>
        <span class="token string">&#39;undo&#39;</span><span class="token punctuation">,</span> <span class="token comment">//撤销</span>
        <span class="token string">&#39;redo&#39;</span><span class="token punctuation">,</span> <span class="token comment">//重做</span>
        <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span> <span class="token comment">//加粗</span>
        <span class="token string">&#39;indent&#39;</span><span class="token punctuation">,</span> <span class="token comment">//首行缩进</span>
        <span class="token string">&#39;snapscreen&#39;</span><span class="token punctuation">,</span> <span class="token comment">//截图</span>
        <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span> <span class="token comment">//斜体</span>
        <span class="token string">&#39;underline&#39;</span><span class="token punctuation">,</span> <span class="token comment">//下划线</span>
        <span class="token string">&#39;strikethrough&#39;</span><span class="token punctuation">,</span> <span class="token comment">//删除线</span>
        <span class="token string">&#39;subscript&#39;</span><span class="token punctuation">,</span> <span class="token comment">//下标</span>
        <span class="token string">&#39;fontborder&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字符边框</span>
        <span class="token string">&#39;superscript&#39;</span><span class="token punctuation">,</span> <span class="token comment">//上标</span>
        <span class="token string">&#39;formatmatch&#39;</span><span class="token punctuation">,</span> <span class="token comment">//格式刷</span>
        <span class="token string">&#39;source&#39;</span><span class="token punctuation">,</span> <span class="token comment">//源代码</span>
        <span class="token string">&#39;blockquote&#39;</span><span class="token punctuation">,</span> <span class="token comment">//引用</span>
        <span class="token string">&#39;pasteplain&#39;</span><span class="token punctuation">,</span> <span class="token comment">//纯文本粘贴模式</span>
        <span class="token string">&#39;selectall&#39;</span><span class="token punctuation">,</span> <span class="token comment">//全选</span>
        <span class="token string">&#39;print&#39;</span><span class="token punctuation">,</span> <span class="token comment">//打印</span>
        <span class="token string">&#39;preview&#39;</span><span class="token punctuation">,</span> <span class="token comment">//预览</span>
        <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span> <span class="token comment">//分隔线</span>
        <span class="token string">&#39;removeformat&#39;</span><span class="token punctuation">,</span> <span class="token comment">//清除格式</span>
        <span class="token string">&#39;time&#39;</span><span class="token punctuation">,</span> <span class="token comment">//时间</span>
        <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span> <span class="token comment">//日期</span>
        <span class="token string">&#39;unlink&#39;</span><span class="token punctuation">,</span> <span class="token comment">//取消链接</span>
        <span class="token string">&#39;insertrow&#39;</span><span class="token punctuation">,</span> <span class="token comment">//前插入行</span>
        <span class="token string">&#39;insertcol&#39;</span><span class="token punctuation">,</span> <span class="token comment">//前插入列</span>
        <span class="token string">&#39;mergeright&#39;</span><span class="token punctuation">,</span> <span class="token comment">//右合并单元格</span>
        <span class="token string">&#39;mergedown&#39;</span><span class="token punctuation">,</span> <span class="token comment">//下合并单元格</span>
        <span class="token string">&#39;deleterow&#39;</span><span class="token punctuation">,</span> <span class="token comment">//删除行</span>
        <span class="token string">&#39;deletecol&#39;</span><span class="token punctuation">,</span> <span class="token comment">//删除列</span>
        <span class="token string">&#39;splittorows&#39;</span><span class="token punctuation">,</span> <span class="token comment">//拆分成行</span>
        <span class="token string">&#39;splittocols&#39;</span><span class="token punctuation">,</span> <span class="token comment">//拆分成列</span>
        <span class="token string">&#39;splittocells&#39;</span><span class="token punctuation">,</span> <span class="token comment">//完全拆分单元格</span>
        <span class="token string">&#39;deletecaption&#39;</span><span class="token punctuation">,</span> <span class="token comment">//删除表格标题</span>
        <span class="token string">&#39;inserttitle&#39;</span><span class="token punctuation">,</span> <span class="token comment">//插入标题</span>
        <span class="token string">&#39;mergecells&#39;</span><span class="token punctuation">,</span> <span class="token comment">//合并多个单元格</span>
        <span class="token string">&#39;deletetable&#39;</span><span class="token punctuation">,</span> <span class="token comment">//删除表格</span>
        <span class="token string">&#39;cleardoc&#39;</span><span class="token punctuation">,</span> <span class="token comment">//清空文档</span>
        <span class="token string">&#39;insertparagraphbeforetable&#39;</span><span class="token punctuation">,</span> <span class="token comment">//&quot;表格前插入行&quot;</span>
        <span class="token string">&#39;insertcode&#39;</span><span class="token punctuation">,</span> <span class="token comment">//代码语言</span>
        <span class="token string">&#39;fontfamily&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字体</span>
        <span class="token string">&#39;fontsize&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字号</span>
        <span class="token string">&#39;paragraph&#39;</span><span class="token punctuation">,</span> <span class="token comment">//段落格式</span>
        <span class="token string">&#39;simpleupload&#39;</span><span class="token punctuation">,</span> <span class="token comment">//单图上传</span>
        <span class="token string">&#39;insertimage&#39;</span><span class="token punctuation">,</span> <span class="token comment">//多图上传</span>
        <span class="token string">&#39;edittable&#39;</span><span class="token punctuation">,</span> <span class="token comment">//表格属性</span>
        <span class="token string">&#39;edittd&#39;</span><span class="token punctuation">,</span> <span class="token comment">//单元格属性</span>
        <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token comment">//超链接</span>
        <span class="token string">&#39;emotion&#39;</span><span class="token punctuation">,</span> <span class="token comment">//表情</span>
        <span class="token string">&#39;spechars&#39;</span><span class="token punctuation">,</span> <span class="token comment">//特殊字符</span>
        <span class="token string">&#39;searchreplace&#39;</span><span class="token punctuation">,</span> <span class="token comment">//查询替换</span>
        <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span> <span class="token comment">//Baidu地图</span>
        <span class="token string">&#39;gmap&#39;</span><span class="token punctuation">,</span> <span class="token comment">//Google地图</span>
        <span class="token string">&#39;insertvideo&#39;</span><span class="token punctuation">,</span> <span class="token comment">//视频</span>
        <span class="token string">&#39;help&#39;</span><span class="token punctuation">,</span> <span class="token comment">//帮助</span>
        <span class="token string">&#39;justifyleft&#39;</span><span class="token punctuation">,</span> <span class="token comment">//居左对齐</span>
        <span class="token string">&#39;justifyright&#39;</span><span class="token punctuation">,</span> <span class="token comment">//居右对齐</span>
        <span class="token string">&#39;justifycenter&#39;</span><span class="token punctuation">,</span> <span class="token comment">//居中对齐</span>
        <span class="token string">&#39;justifyjustify&#39;</span><span class="token punctuation">,</span> <span class="token comment">//两端对齐</span>
        <span class="token string">&#39;forecolor&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字体颜色</span>
        <span class="token string">&#39;backcolor&#39;</span><span class="token punctuation">,</span> <span class="token comment">//背景色</span>
        <span class="token string">&#39;insertorderedlist&#39;</span><span class="token punctuation">,</span> <span class="token comment">//有序列表</span>
        <span class="token string">&#39;insertunorderedlist&#39;</span><span class="token punctuation">,</span> <span class="token comment">//无序列表</span>
        <span class="token string">&#39;fullscreen&#39;</span><span class="token punctuation">,</span> <span class="token comment">//全屏</span>
        <span class="token string">&#39;directionalityltr&#39;</span><span class="token punctuation">,</span> <span class="token comment">//从左向右输入</span>
        <span class="token string">&#39;directionalityrtl&#39;</span><span class="token punctuation">,</span> <span class="token comment">//从右向左输入</span>
        <span class="token string">&#39;rowspacingtop&#39;</span><span class="token punctuation">,</span> <span class="token comment">//段前距</span>
        <span class="token string">&#39;rowspacingbottom&#39;</span><span class="token punctuation">,</span> <span class="token comment">//段后距</span>
        <span class="token string">&#39;pagebreak&#39;</span><span class="token punctuation">,</span> <span class="token comment">//分页</span>
        <span class="token string">&#39;insertframe&#39;</span><span class="token punctuation">,</span> <span class="token comment">//插入Iframe</span>
        <span class="token string">&#39;imagenone&#39;</span><span class="token punctuation">,</span> <span class="token comment">//默认</span>
        <span class="token string">&#39;imageleft&#39;</span><span class="token punctuation">,</span> <span class="token comment">//左浮动</span>
        <span class="token string">&#39;imageright&#39;</span><span class="token punctuation">,</span> <span class="token comment">//右浮动</span>
        <span class="token string">&#39;attachment&#39;</span><span class="token punctuation">,</span> <span class="token comment">//附件</span>
        <span class="token string">&#39;imagecenter&#39;</span><span class="token punctuation">,</span> <span class="token comment">//居中</span>
        <span class="token string">&#39;wordimage&#39;</span><span class="token punctuation">,</span> <span class="token comment">//图片转存</span>
        <span class="token string">&#39;lineheight&#39;</span><span class="token punctuation">,</span> <span class="token comment">//行间距</span>
        <span class="token string">&#39;edittip &#39;</span><span class="token punctuation">,</span> <span class="token comment">//编辑提示</span>
        <span class="token string">&#39;customstyle&#39;</span><span class="token punctuation">,</span> <span class="token comment">//自定义标题</span>
        <span class="token string">&#39;autotypeset&#39;</span><span class="token punctuation">,</span> <span class="token comment">//自动排版</span>
        <span class="token string">&#39;webapp&#39;</span><span class="token punctuation">,</span> <span class="token comment">//百度应用</span>
        <span class="token string">&#39;touppercase&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字母大写</span>
        <span class="token string">&#39;tolowercase&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字母小写</span>
        <span class="token string">&#39;background&#39;</span><span class="token punctuation">,</span> <span class="token comment">//背景</span>
        <span class="token string">&#39;template&#39;</span><span class="token punctuation">,</span> <span class="token comment">//模板</span>
        <span class="token string">&#39;scrawl&#39;</span><span class="token punctuation">,</span> <span class="token comment">//涂鸦</span>
        <span class="token string">&#39;music&#39;</span><span class="token punctuation">,</span> <span class="token comment">//音乐</span>
        <span class="token string">&#39;inserttable&#39;</span><span class="token punctuation">,</span> <span class="token comment">//插入表格</span>
        <span class="token string">&#39;drafts&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 从草稿箱加载</span>
        <span class="token string">&#39;charts&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 图表</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre></div>`,11);function h(f,v){const s=e("ExternalLinkIcon");return c(),l("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[a("http://kindeditor.net/demo.php"),t(s)])]),n("li",null,[n("a",r,[a("https://www.tiny.cloud/"),t(s)])]),m,n("li",null,[n("a",g,[a("配置文档"),t(s)])])]),d])}const q=o(u,[["render",h],["__file","editor_uedt.html.vue"]]);export{q as default};
