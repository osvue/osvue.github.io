import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h3><ol><li>基本选择器</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code>		<span class="token comment">/*通配符选择器*/</span>		<span class="token selector">*</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
		<span class="token comment">/*元素选择器*/</span>		<span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span> <span class="token punctuation">}</span>
		<span class="token comment">/*类选择器*/</span>		<span class="token selector">.list</span> <span class="token punctuation">{</span> <span class="token property">list-style</span><span class="token punctuation">:</span> square<span class="token punctuation">;</span> <span class="token punctuation">}</span>
		<span class="token comment">/*ID选择器*/</span>		<span class="token selector">#list</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token punctuation">}</span>
		<span class="token comment">/*后代选择器*/</span>		<span class="token selector">.list li</span> <span class="token punctuation">{</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>基本选择器扩展</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code>		<span class="token comment">/*子元素选择器*/</span>		<span class="token selector">#wrap &gt; .inner</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span>
					也可称为直接后代选择器<span class="token punctuation">,</span>此类选择器只能匹配到直接后代，不能匹配到深层次的后代元素
		<span class="token comment">/*相邻兄弟选择器*/</span>	<span class="token selector">#wrap #first + .inner</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token punctuation">}</span>
					它只会匹配紧跟着的兄弟元素
		<span class="token comment">/*通用兄弟选择器*/</span>	<span class="token selector">#wrap #first ~ div</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span><span class="token punctuation">}</span>
					它会匹配所有的兄弟元素<span class="token punctuation">(</span>不需要紧跟<span class="token punctuation">)</span>
		<span class="token comment">/*选择器分组*/</span>		<span class="token selector">h1,h2,h3</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span>  
					此处的逗号我们称之为结合符
</code></pre></div><ol start="3"><li>属性选择器</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code>    <span class="token comment">/*存在和值属性选择器*/</span>	
        [attr]：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
        [attr=val]：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
        [attr~=val]：表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少一个值为val。
    
    <span class="token comment">/*子串值属性选择器*/</span>
            [attr|=val] <span class="token punctuation">:</span> 选择attr属性的值是val（包括val）或以val-开头的元素。
            [attr^=val] <span class="token punctuation">:</span> 选择attr属性的值以val开头（包括val）的元素。
            [attr$=val] <span class="token punctuation">:</span> 选择attr属性的值以val结尾（包括val）的元素。
            [attr*=val] <span class="token punctuation">:</span> 选择attr属性的值中包含字符串val的元素。
</code></pre></div><ol start="4"><li>伪类与伪元素选择器</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code>    <span class="token comment">/*链接伪类*/</span>		<span class="token property">注意</span><span class="token punctuation">:</span><span class="token property">link，</span><span class="token punctuation">:</span><span class="token property">visited，</span><span class="token punctuation">:</span><span class="token property">target是作用于链接元素的！</span>
            <span class="token punctuation">:</span>link		<span class="token property">表示作为超链接，并指向一个未访问的地址的所有锚</span>
            <span class="token punctuation">:</span>visited	<span class="token property">表示作为超链接，并指向一个已访问的地址的所有锚</span>
            <span class="token punctuation">:</span>target 	代表一个特殊的元素，它的id是URI的片段标识符
    <span class="token comment">/*动态伪类*/</span>		<span class="token property">注意</span><span class="token punctuation">:</span><span class="token property">hover，</span><span class="token punctuation">:</span><span class="token property">active基本可以作用于所有的元素！</span>
            <span class="token punctuation">:</span>hover		<span class="token property">表示悬浮到元素上</span>
            <span class="token punctuation">:</span>active		表示匹配被用户激活的元素（点击按住时）
            
            <span class="token property">由于a标签的</span><span class="token punctuation">:</span><span class="token property">link和</span><span class="token punctuation">:</span><span class="token property">visited可以覆盖了所有a标签的状态，所以当</span><span class="token punctuation">:</span><span class="token property">link，</span><span class="token punctuation">:</span><span class="token property">visited，</span><span class="token punctuation">:</span><span class="token property">hover，</span><span class="token punctuation">:</span>active同时出现在a标签
            <span class="token property">身上时</span> <span class="token punctuation">:</span><span class="token property">link和</span><span class="token punctuation">:</span>visited不能放在最后！！！
            
            <span class="token property">隐私与</span><span class="token punctuation">:</span>visited选择器
                只有下列的属性才能被应用到已访问链接：
                    color
                    background-color
                    border-color
    <span class="token comment">/*表单相关伪类*/</span>
            <span class="token punctuation">:</span>enabled	<span class="token property">匹配可编辑的表单</span>
            <span class="token punctuation">:</span>disable	<span class="token property">匹配被禁用的表单</span>
            <span class="token punctuation">:</span>checked	<span class="token property">匹配被选中的表单</span>
            <span class="token punctuation">:</span>focus		匹配获焦的表单
            
    <span class="token comment">/*结构性伪类*/</span>
            index的值从1开始计数！！！！
            index可以为变量<span class="token function">n</span><span class="token punctuation">(</span>只能是n<span class="token punctuation">)</span>
            index可以为even odd
                #wrap <span class="token property">ele</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>		表示匹配#wrap中第index的子元素 这个子元素必须是ele
                #wrap <span class="token property">ele</span><span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>	表示匹配#wrap中第index的ele子元素
                <span class="token property">除此之外</span><span class="token punctuation">:</span><span class="token property">nth-child和</span><span class="token punctuation">:</span>nth-of-type有一个很重要的区别！！
                        <span class="token property">nth-of-type以元素为中心！！！</span>
                        
            <span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token property">系列</span>			
                <span class="token punctuation">:</span><span class="token property">first-child</span>
                <span class="token punctuation">:</span><span class="token property">last-child</span>
                <span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
                <span class="token punctuation">:</span>only-child	<span class="token punctuation">(</span><span class="token property">相对于</span><span class="token punctuation">:</span><span class="token property">first-child</span><span class="token punctuation">:</span>last-child <span class="token property">或者</span> <span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">nth-last-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token property">系列</span>
                <span class="token punctuation">:</span><span class="token property">first-of-type</span>
                <span class="token punctuation">:</span><span class="token property">last-of-type</span>
                <span class="token punctuation">:</span><span class="token function">nth-last-type</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
                <span class="token punctuation">:</span>only-of-type	<span class="token punctuation">(</span><span class="token property">相对于</span><span class="token punctuation">:</span><span class="token property">first-of-type</span><span class="token punctuation">:</span>last-of-type <span class="token property">或者</span> <span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">nth-last-of-type</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">)</span>
                
            <span class="token punctuation">:</span><span class="token property">not</span>		
            <span class="token punctuation">:</span><span class="token function">empty</span><span class="token punctuation">(</span>内容必须是空的，有空格都不行，有attr没关系<span class="token punctuation">)</span>
    <span class="token comment">/*伪元素*/</span>
            <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token property">after</span>
            <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token property">before</span>
            <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token property">firstLetter</span>
            <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token property">firstLine</span>
            <span class="token punctuation">:</span><span class="token punctuation">:</span>selection
</code></pre></div><h3 id="伪类与伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪类与伪元素选择器" aria-hidden="true">#</a> 伪类与伪元素选择器</h3><p>链接伪类 <code>:link :visited :target(css实现选项卡)</code> 动态伪类 <code>:hover :active(lvha)</code> 表单伪类 <code>:disabled :enabled :checked(自定义单选按钮) :focus</code> 结构性伪类 <code>ele:nth-child(index)</code><code>ele:nth-of-type(index) 以元素为中心</code></p><p>区别：</p><ol><li>nth-child找到第index个子元素 这个子元素必须满足ele的规则 nth-of-type找到底index个ele子元素</li><li>nth-of-type以元素为中心 注意： index可以是变量n（只能是n 0到正无穷） odd：奇数 even：偶数 伪元素 <code>::after</code><code>::before</code></li></ol><h3 id="自定义字体" tabindex="-1"><a class="header-anchor" href="#自定义字体" aria-hidden="true">#</a> 自定义字体</h3><ul><li><code>@font-face</code></li></ul><p>字体兼容处理网站 https://www.fontsquirrel.com/tools/webfont-generator icomoon字体图标 https://icomoon.io/#home</p><h3 id="文本新增样式" tabindex="-1"><a class="header-anchor" href="#文本新增样式" aria-hidden="true">#</a> 文本新增样式</h3><pre><code>	文本阴影
	怎么溢出显示省略号
		white-space=no-wrap
		overflow=hidden
		text-overflow=ellipsis
		包裹区域必须不能让子元素撑开
</code></pre><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>基本选择器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/*通配符选择器*/</span>
<span class="token selector">*</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/*元素选择器*/</span>
<span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/*类选择器*/</span>
<span class="token selector">.list</span> <span class="token punctuation">{</span> <span class="token property">list-style</span><span class="token punctuation">:</span> square<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/*ID选择器*/</span>
<span class="token selector">#list</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/*后代选择器*/</span>
<span class="token selector">.list li</span> <span class="token punctuation">{</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> #abcdef<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/*选择器分组*/</span>
<span class="token selector">#list,.second</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 子元素选择器 --&gt;</span>
<span class="token comment">&lt;!--我们也可以称它为直接后代选择器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#wrap &gt; .inner</span> <span class="token punctuation">{</span>
	<span class="token comment">/*color: pink;*/</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		wrap下一层
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span><span class="token entity named-entity" title=" ">&amp;nbsp;</span>最里层<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>innera<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>wrap下一层<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>innear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>wrap下一层<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>innaer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>wrap下一层<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">ul &gt; li:nth-child(3)</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
ul &gt; li:nth-child(2n) {
	background: #ff0;
}
ul &gt; li:nth-child(2n+1) {
	background: #0f0;
}
ul &gt; li:nth-child(n+4) {
	background: #abcdef;
}
ul &gt; li:nth-child(odd) {
	background: red;
}
ul &gt; li:nth-child(even) {
	background: blue;
}
*/</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>0-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>0-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>0-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>




<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 多行 第一行样式 */</span>
<span class="token selector">div::first-line</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 选中样式   */</span>
<span class="token selector">div::selection</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 第一个文字 */</span>
<span class="token selector">div::first-letter</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div::before</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;我在内容的前面&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div::after</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;我在内容的后面&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>---伪元素--<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>aaaaaaaaaaaaaaabbbbbbbbbbbbbbcccccccccccc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>abcdefg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>higklmn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 风车 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span>50px auto<span class="token punctuation">;</span> 
	<span class="token property">transition</span><span class="token punctuation">:</span>5s linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box div</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>180px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>180px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span>1px solid #000<span class="token punctuation">;</span> 
	<span class="token property">box-sizing</span><span class="token punctuation">:</span>border-box<span class="token punctuation">;</span>
	<span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box div:nth-child(1),.box div:nth-child(4)</span><span class="token punctuation">{</span> 
	<span class="token property">border-radius</span><span class="token punctuation">:</span>0 60%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box div:nth-child(2),.box div:nth-child(3)</span><span class="token punctuation">{</span> 
	<span class="token property">border-radius</span><span class="token punctuation">:</span>60% 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box:hover</span><span class="token punctuation">{</span>
	<span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">rotate</span><span class="token punctuation">(</span>720deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="文字css-处理" tabindex="-1"><a class="header-anchor" href="#文字css-处理" aria-hidden="true">#</a> 文字css 处理</h3><div class="language-css" data-ext="css"><pre class="language-css"><code>
<span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img/周冬雨.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	<span class="token comment">/*background-size: 100%;*/</span>
	<span class="token property">border</span><span class="token punctuation">:</span>5px solid #000<span class="token punctuation">;</span> 
	<span class="token property">resize</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span> 
	<span class="token property">overflow</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*  
&lt;div class=&quot;box&quot;&gt;&lt;/div&gt; */</span>


<span class="token comment">/* 超出省略号 */</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span>1px solid #000<span class="token punctuation">;</span>
	<span class="token property">font</span><span class="token punctuation">:</span>14px/30px <span class="token string">&quot;宋体&quot;</span><span class="token punctuation">;</span>
	<span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span> 
	<span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span> 
	<span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">/* 文字排版 */</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span>1px solid #000<span class="token punctuation">;</span>
	<span class="token property">font</span><span class="token punctuation">:</span>14px/30px <span class="token string">&quot;宋体&quot;</span><span class="token punctuation">;</span>
	<span class="token property">direction</span><span class="token punctuation">:</span>ltr<span class="token punctuation">;</span>
	<span class="token property">unicode-bidi</span><span class="token punctuation">:</span>bidi-override<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span><span class="token punctuation">{</span> 
	<span class="token property">font</span><span class="token punctuation">:</span>100px/200px <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">;</span> 
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span> 
	<span class="token property">text-shadow</span><span class="token punctuation">:</span>2px 2px 9px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1</span><span class="token punctuation">{</span> 
		<span class="token property">font</span><span class="token punctuation">:</span>100px/200px <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">;</span> 
		<span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span> 
		<span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
		<span class="token property">-webkit-text-stroke</span><span class="token punctuation">:</span>4px pink<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


<span class="token selector">h1</span><span class="token punctuation">{</span> 
	<span class="token property">font</span><span class="token punctuation">:</span>100px/200px <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">;</span> 
	<span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span> 
	<span class="token property">text-shadow</span><span class="token punctuation">:</span> -5px -10px <span class="token punctuation">,</span>5px 10px pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="html打印" tabindex="-1"><a class="header-anchor" href="#html打印" aria-hidden="true">#</a> html打印</h3><p>给打印添加分页符：两种被广泛认可的属性是page-break-before和page-break-after。 page-break-before告诉网页浏览器在一个指定样式之前插入一个分页符。利用page-break-before 属性使图片打印在一张新页面上，并且适合整张页面。 要使一个元素作为打印页上的最后一个项目显示，就给那个元素的样式添加page-break-after: always。</p><ul><li><strong>at-rule 谷歌</strong></li></ul><h3 id="盒模型新增样式" tabindex="-1"><a class="header-anchor" href="#盒模型新增样式" aria-hidden="true">#</a> 盒模型新增样式</h3><ul><li>box-shadow</li></ul><ul><li>关键字(内 外阴影) <ul><li>length(x轴的偏移量)</li><li>length(y轴的偏移量)</li><li>length(模糊程度)</li><li>length(阴影面积)</li><li>color(阴影颜色)</li></ul></li></ul><ul><li>text-shadow <ul><li>length(x轴的偏移量)</li><li>length(y轴的偏移量)</li><li>length(模糊程度)</li><li>color(阴影颜色)</li></ul></li></ul><h3 id="背景图处理css" tabindex="-1"><a class="header-anchor" href="#背景图处理css" aria-hidden="true">#</a> 背景图处理css</h3><ul><li><strong>css2</strong> background-color 平铺整个border-box background-image 默认从padding-box开始绘制，从border-box开始剪裁 css3中有多背景，默认绘制时尺寸是自己的位图像素 background-repeat 控制平铺与否 background-position 控制背景图片在背景区域中的位置 px 百分比 参照于背景区域减去背景图片的位图像素值 background-attachment scroll：默认值，背景图不会随着元素滚动条的滚动而滚动 fixed：背景图铺在视口中固定定位了</li><li><strong>css3</strong> background-origin background-clip background-size 图片是自适应的</li></ul><h4 id="如何实现一张图片的垂直水平居中" tabindex="-1"><a class="header-anchor" href="#如何实现一张图片的垂直水平居中" aria-hidden="true">#</a> 如何实现一张图片的垂直水平居中</h4><div class="language-css" data-ext="css"><pre class="language-css"><code>    <span class="token selector">body:after</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">img</span><span class="token punctuation">{</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><h3 id="transition过渡" tabindex="-1"><a class="header-anchor" href="#transition过渡" aria-hidden="true">#</a> transition过渡</h3><ol><li><p><strong>过渡</strong> transition-property 指定过渡动画的属性（并不是所有的属性都可以动画） transition-duration 指定过渡动画的时间（0也要带单位） transition-timing-function 指定过渡动画的形式（贝塞尔） transition-delay 指定过渡动画的延迟 transition 第一个可以被解析成时间的值会赋给transition-duration transtionend事件（DOM2） 在每个属性完成过渡时都会触发这个事件 当属性值的列表长度不一致时 跟时间有关的重复列表 transition-timing-function使用默认值</p></li><li><p><strong>2D变换（transform）</strong> rotate 旋转 translate 平移 skew 斜切 scale 缩放 变换组合! 顺序是从右往左的，变换的底层其实就是矩阵的运算 基点的变换 transform-origin</p></li></ol>`,34),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","mtcssa.html.vue"]]);export{i as default};
