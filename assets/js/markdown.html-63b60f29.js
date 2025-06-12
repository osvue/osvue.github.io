import{_ as o,r,o as l,c as i,a as p,b as a,d as n,e}from"./app-215c512d.js";const d={},m={href:"http://osvue.github.io",target:"_blank",rel:"noopener noreferrer"},c={href:"http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference",target:"_blank",rel:"noopener noreferrer"},u={id:"更多语法参考-流程图语法参考",tabindex:"-1"},h={href:"http://adrai.github.io/flowchart.js/",target:"_blank",rel:"noopener noreferrer"},g={id:"更多语法参考-序列图语法参考",tabindex:"-1"},k={href:"http://bramp.github.io/js-sequence-diagrams/",target:"_blank",rel:"noopener noreferrer"},x={id:"更多语法参考-甘特图语法参考",tabindex:"-1"},f={href:"https://knsv.github.io/mermaid/#gant-diagrams",target:"_blank",rel:"noopener noreferrer"},b={id:"更多语法参考-mermaid-流程图语法参考",tabindex:"-1"},y={href:"https://knsv.github.io/mermaid/#flowcharts-basic-syntax",target:"_blank",rel:"noopener noreferrer"},z={id:"更多语法参考-mermaid-序列图语法参考",tabindex:"-1"},w={href:"https://knsv.github.io/mermaid/#sequence-diagrams",target:"_blank",rel:"noopener noreferrer"},v={href:"http://fortawesome.github.io/Font-Awesome/3.2.1/icons/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments",target:"_blank",rel:"noopener noreferrer"},T={href:"http://docs.mathjax.org/en/latest/tex.html#tex-eq-numbers",target:"_blank",rel:"noopener noreferrer"};function C(M,s){const t=r("ExternalLinkIcon");return l(),i("div",null,[s[35]||(s[35]=p(`<p>标签： Cmd-Markdown</p><hr><h2 id="markdown-分组" tabindex="-1"><a class="header-anchor" href="#markdown-分组" aria-hidden="true">#</a> markdown 分组</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">autoGroup-1</span><span class="token punctuation">:</span> Markdown
<span class="token key atrule">title</span><span class="token punctuation">:</span> Markdown 简明语法手册</span>
<span class="token punctuation">---</span></span>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>这是一个危险警告</p></div><details class="custom-container details"><p>这是一个详情块，在 IE / Edge 中不生效</p></details><h3 id="_1-斜体和粗体" tabindex="-1"><a class="header-anchor" href="#_1-斜体和粗体" aria-hidden="true">#</a> 1. 斜体和粗体</h3><p>使用 * 和 ** 表示斜体和粗体。</p><p>示例：</p><p>这是 <em>斜体</em>，这是 <strong>粗体</strong>。</p><h3 id="_2-分级标题" tabindex="-1"><a class="header-anchor" href="#_2-分级标题" aria-hidden="true">#</a> 2. 分级标题</h3><p>使用 === 表示一级标题，使用 --- 表示二级标题。</p><p>示例：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>这是一个一级标题
============================

这是一个二级标题
--------------------------------------------------

### 这是一个三级标题
</code></pre></div><p>你也可以选择在行首加井号表示不同级别的标题 (H1-H6)，例如：# H1, ## H2, ### H3，#### H4。</p><h3 id="_3-外链接" tabindex="-1"><a class="header-anchor" href="#_3-外链接" aria-hidden="true">#</a> 3. 外链接</h3><p>使用 [描述](链接地址) 为文字增加外链接。</p><p>示例：</p>`,20)),a("p",null,[s[1]||(s[1]=n("这是去往 ")),a("a",m,[s[0]||(s[0]=n("本人博客")),e(t)]),s[2]||(s[2]=n(" 的链接。"))]),s[36]||(s[36]=p('<h3 id="_4-无序列表" tabindex="-1"><a class="header-anchor" href="#_4-无序列表" aria-hidden="true">#</a> 4. 无序列表</h3><p>使用 *，+，- 表示无序列表。</p><p>示例：</p><ul><li>无序列表项 一</li><li>无序列表项 二</li><li>无序列表项 三</li></ul><h3 id="_5-有序列表" tabindex="-1"><a class="header-anchor" href="#_5-有序列表" aria-hidden="true">#</a> 5. 有序列表</h3><p>使用数字和点表示有序列表。</p><p>示例：</p><ol><li>有序列表项 一</li><li>有序列表项 二</li><li>有序列表项 三</li></ol><h3 id="_6-文字引用" tabindex="-1"><a class="header-anchor" href="#_6-文字引用" aria-hidden="true">#</a> 6. 文字引用</h3><p>使用 &gt; 表示文字引用。</p><p>示例：</p><blockquote><p>野火烧不尽，春风吹又生。</p></blockquote><h3 id="_7-行内代码块" tabindex="-1"><a class="header-anchor" href="#_7-行内代码块" aria-hidden="true">#</a> 7. 行内代码块</h3><p>使用 `代码` 表示行内代码块。</p><p>示例：</p><p>让我们聊聊 <code>html</code>。</p><h3 id="_8-代码块" tabindex="-1"><a class="header-anchor" href="#_8-代码块" aria-hidden="true">#</a> 8. 代码块</h3><p>使用 四个缩进空格 表示代码块。</p><p>示例：</p><pre><code>这是一个代码块，此行左侧有四个不可见的空格。\n</code></pre><h3 id="_9-插入图像" tabindex="-1"><a class="header-anchor" href="#_9-插入图像" aria-hidden="true">#</a> 9. 插入图像</h3><p>使用 ![描述](图片链接地址) 插入图像。</p><p>示例：</p><p><img src="https://www.zybuluo.com/static/img/my_head.jpg" alt="我的头像"></p><h1 id="cmd-markdown-高阶语法手册" tabindex="-1"><a class="header-anchor" href="#cmd-markdown-高阶语法手册" aria-hidden="true">#</a> Cmd Markdown 高阶语法手册</h1><h3 id="_1-内容目录" tabindex="-1"><a class="header-anchor" href="#_1-内容目录" aria-hidden="true">#</a> 1. 内容目录</h3><p>在段落中填写 <code>[TOC]</code> 以显示全文内容的目录结构。</p><p>[TOC]</p><h3 id="_2-标签分类" tabindex="-1"><a class="header-anchor" href="#_2-标签分类" aria-hidden="true">#</a> 2. 标签分类</h3><p>在编辑区任意行的列首位置输入以下代码给文稿标签：</p><p>标签： 数学 英语 Markdown</p><p>或者</p><p>Tags： 数学 英语 Markdown</p><h3 id="_3-删除线" tabindex="-1"><a class="header-anchor" href="#_3-删除线" aria-hidden="true">#</a> 3. 删除线</h3><p>使用 ~~ 表示删除线。</p><p><s>这是一段错误的文本。</s></p><h3 id="_4-注脚" tabindex="-1"><a class="header-anchor" href="#_4-注脚" aria-hidden="true">#</a> 4. 注脚</h3><p>使用 [^keyword] 表示注脚。</p><p>这是一个注脚[^footnote]的样例。</p><p>这是第二个注脚[^footnote2]的样例。</p><h3 id="_5-latex-公式" tabindex="-1"><a class="header-anchor" href="#_5-latex-公式" aria-hidden="true">#</a> 5. LaTeX 公式</h3><p>$ 表示行内公式：</p><p>质能守恒方程可以用一个很简洁的方程式 <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:0.8141079999999999em;vertical-align:0em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.05764em;">E</span><span class="mrel">=</span><span class="mord mathit">m</span><span class="mord"><span class="mord mathit">c</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span></span></span></span> 来表达。</p> 表示整行公式： $$\\sum_{i=1}^n a_i=0 <p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>f</mi><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>x</mi><mi>x</mi></msub><mo separator="true">,</mo><mo>…</mo><mo separator="true">,</mo><msub><mi>x</mi><mi>n</mi></msub><mo>)</mo><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>⋯</mo><mo>+</mo><msubsup><mi>x</mi><mi>n</mi><mn>2</mn></msubsup></mrow><annotation encoding="application/x-tex">f(x_1,x_x,\\ldots,x_n) = x_1^2 + x_2^2 + \\cdots + x_n^2 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8641079999999999em;"></span><span class="strut bottom" style="height:1.1141079999999999em;vertical-align:-0.25em;"></span><span class="base displaystyle textstyle uncramped"><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathit">x</span><span class="vlist"><span style="top:0.15em;margin-right:0.05em;margin-left:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle cramped"><span class="mord mathrm">1</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mpunct">,</span><span class="mord"><span class="mord mathit">x</span><span class="vlist"><span style="top:0.15em;margin-right:0.05em;margin-left:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle cramped"><span class="mord mathit">x</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mpunct">,</span><span class="minner">…</span><span class="mpunct">,</span><span class="mord"><span class="mord mathit">x</span><span class="vlist"><span style="top:0.15em;margin-right:0.05em;margin-left:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle cramped"><span class="mord mathit">n</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span><span class="mrel">=</span><span class="mord"><span class="mord mathit">x</span><span class="vlist"><span style="top:0.247em;margin-left:0em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle cramped"><span class="mord mathrm">1</span></span></span><span style="top:-0.4129999999999999em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mbin">+</span><span class="mord"><span class="mord mathit">x</span><span class="vlist"><span style="top:0.247em;margin-left:0em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle cramped"><span class="mord mathrm">2</span></span></span><span style="top:-0.4129999999999999em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mbin">+</span><span class="minner">⋯</span><span class="mbin">+</span><span class="mord"><span class="mord mathit">x</span><span class="vlist"><span style="top:0.247em;margin-left:0em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle cramped"><span class="mord mathit">n</span></span></span><span style="top:-0.4129999999999999em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">2</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span></span></span></span></span></p> \\sum^{j-1}_{k=0}{\\widehat{\\gamma}_{kj} z_k} ',46)),a("p",null,[s[4]||(s[4]=n("访问 ")),a("a",c,[s[3]||(s[3]=n("MathJax")),e(t)]),s[5]||(s[5]=n(" 参考更多使用方法。"))]),s[37]||(s[37]=p(`<h3 id="_6-加强的代码块" tabindex="-1"><a class="header-anchor" href="#_6-加强的代码块" aria-hidden="true">#</a> 6. 加强的代码块</h3><p>支持四十一种编程语言的语法高亮的显示，行号显示。</p><p>非代码示例：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ sudo apt-get install vim-gnome
</code></pre></div><p>Python 示例：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@requires_authorization</span>
<span class="token keyword">def</span> <span class="token function">somefunc</span><span class="token punctuation">(</span>param1<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> param2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;A docstring&#39;&#39;&#39;</span>
    <span class="token keyword">if</span> param1 <span class="token operator">&gt;</span> param2<span class="token punctuation">:</span> <span class="token comment"># interesting</span>
        <span class="token keyword">print</span> <span class="token string">&#39;Greater&#39;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>param2 <span class="token operator">-</span> param1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token boolean">None</span>

<span class="token keyword">class</span> <span class="token class-name">SomeClass</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> message <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;interpreter
... prompt&#39;&#39;&#39;</span>
</code></pre></div><p>JavaScript 示例：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
* nth element in the fibonacci series.
* <span class="token keyword">@param</span> <span class="token parameter">n</span> &gt;= 0
* <span class="token keyword">@return</span> the nth element, &gt;= 0.
*/</span>
<span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> tmp<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>n <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">+=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_7-流程图" tabindex="-1"><a class="header-anchor" href="#_7-流程图" aria-hidden="true">#</a> 7. 流程图</h3><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-flow" data-ext="flow"><pre class="language-flow"><code>st<span class="token operator">=&gt;</span>start<span class="token operator">:</span> Start<span class="token operator">:</span><span class="token operator">&gt;</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>zybuluo<span class="token punctuation">.</span>com
io<span class="token operator">=&gt;</span>inputoutput<span class="token operator">:</span> verification
op<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> Your Operation
cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> Yes or No<span class="token operator">?</span>
sub<span class="token operator">=&gt;</span>subroutine<span class="token operator">:</span> Your Subroutine
e<span class="token operator">=&gt;</span>end

st<span class="token operator">-</span><span class="token operator">&gt;</span>io<span class="token operator">-</span><span class="token operator">&gt;</span>op<span class="token operator">-</span><span class="token operator">&gt;</span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>sub<span class="token operator">-</span><span class="token operator">&gt;</span>io
</code></pre></div>`,11)),a("h4",u,[s[7]||(s[7]=a("a",{class:"header-anchor",href:"#更多语法参考-流程图语法参考","aria-hidden":"true"},"#",-1)),s[8]||(s[8]=n(" 更多语法参考：")),a("a",h,[s[6]||(s[6]=n("流程图语法参考")),e(t)])]),s[38]||(s[38]=p(`<h3 id="_8-序列图" tabindex="-1"><a class="header-anchor" href="#_8-序列图" aria-hidden="true">#</a> 8. 序列图</h3><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1</h4><div class="language-seq" data-ext="seq"><pre class="language-seq"><code>Alice-&gt;Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob--&gt;Alice: I am good thanks!
</code></pre></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2</h4><div class="language-seq" data-ext="seq"><pre class="language-seq"><code>Title: Here is a title
A-&gt;B: Normal line
B--&gt;C: Dashed line
C-&gt;&gt;D: Open arrow
D--&gt;&gt;A: Dashed open arrow
</code></pre></div>`,5)),a("h4",g,[s[10]||(s[10]=a("a",{class:"header-anchor",href:"#更多语法参考-序列图语法参考","aria-hidden":"true"},"#",-1)),s[11]||(s[11]=n(" 更多语法参考：")),a("a",k,[s[9]||(s[9]=n("序列图语法参考")),e(t)])]),s[39]||(s[39]=a("h3",{id:"_9-甘特图",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_9-甘特图","aria-hidden":"true"},"#"),n(" 9. 甘特图")],-1)),s[40]||(s[40]=a("p",null,"甘特图内在思想简单。基本是一条线条图，横轴表示时间，纵轴表示活动（项目），线条表示在整个期间上计划和实际的活动完成情况。它直观地表明任务计划在什么时候进行，及实际进展与计划要求的对比。",-1)),s[41]||(s[41]=a("div",{class:"language-gantt","data-ext":"gantt"},[a("pre",{class:"language-gantt"},[a("code",null,`    title 项目开发流程
    section 项目确定
        需求分析       :a1, 2016-06-22, 3d
        可行性报告     :after a1, 5d
        概念验证       : 5d
    section 项目实施
        概要设计      :2016-07-05  , 5d
        详细设计      :2016-07-08, 10d
        编码          :2016-07-15, 10d
        测试          :2016-07-22, 5d
    section 发布验收
        发布: 2d
        验收: 3d
`)])],-1)),a("h4",x,[s[13]||(s[13]=a("a",{class:"header-anchor",href:"#更多语法参考-甘特图语法参考","aria-hidden":"true"},"#",-1)),s[14]||(s[14]=n(" 更多语法参考：")),a("a",f,[s[12]||(s[12]=n("甘特图语法参考")),e(t)])]),s[42]||(s[42]=a("h3",{id:"_10-mermaid-流程图",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_10-mermaid-流程图","aria-hidden":"true"},"#"),n(" 10. Mermaid 流程图")],-1)),s[43]||(s[43]=a("div",{class:"language-graphLR","data-ext":"graphLR"},[a("pre",{class:"language-graphLR"},[a("code",null,`    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
`)])],-1)),a("h4",b,[s[16]||(s[16]=a("a",{class:"header-anchor",href:"#更多语法参考-mermaid-流程图语法参考","aria-hidden":"true"},"#",-1)),s[17]||(s[17]=n(" 更多语法参考：")),a("a",y,[s[15]||(s[15]=n("Mermaid 流程图语法参考")),e(t)])]),s[44]||(s[44]=a("h3",{id:"_11-mermaid-序列图",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_11-mermaid-序列图","aria-hidden":"true"},"#"),n(" 11. Mermaid 序列图")],-1)),s[45]||(s[45]=a("div",{class:"language-sequence","data-ext":"sequence"},[a("pre",{class:"language-sequence"},[a("code",null,`    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
`)])],-1)),a("h4",z,[s[19]||(s[19]=a("a",{class:"header-anchor",href:"#更多语法参考-mermaid-序列图语法参考","aria-hidden":"true"},"#",-1)),s[20]||(s[20]=n(" 更多语法参考：")),a("a",w,[s[18]||(s[18]=n("Mermaid 序列图语法参考")),e(t)])]),s[46]||(s[46]=p(`<h3 id="_12-表格支持" tabindex="-1"><a class="header-anchor" href="#_12-表格支持" aria-hidden="true">#</a> 12. 表格支持</h3><table><thead><tr><th>项目</th><th style="text-align:right;">价格</th><th style="text-align:center;">数量</th></tr></thead><tbody><tr><td>计算机</td><td style="text-align:right;">$1600</td><td style="text-align:center;">5</td></tr><tr><td>手机</td><td style="text-align:right;">$12</td><td style="text-align:center;">12</td></tr><tr><td>管线</td><td style="text-align:right;">$1</td><td style="text-align:center;">234</td></tr></tbody></table><h3 id="_13-定义型列表" tabindex="-1"><a class="header-anchor" href="#_13-定义型列表" aria-hidden="true">#</a> 13. 定义型列表</h3><p>名词 1 : 定义 1（左侧有一个可见的冒号和四个不可见的空格）</p><p>代码块 2 : 这是代码块的定义（左侧有一个可见的冒号和四个不可见的空格）</p><pre><code>    代码块（左侧有八个不可见的空格）
</code></pre><h3 id="_14-html-标签" tabindex="-1"><a class="header-anchor" href="#_14-html-标签" aria-hidden="true">#</a> 14. Html 标签</h3><p>本站支持在 Markdown 语法中嵌套 Html 标签，譬如，你可以用 Html 写一个纵跨两行的表格：</p><pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th rowspan=&quot;2&quot;&gt;值班人员&lt;/th&gt;
        &lt;th&gt;星期一&lt;/th&gt;
        &lt;th&gt;星期二&lt;/th&gt;
        &lt;th&gt;星期三&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;李强&lt;/td&gt;
        &lt;td&gt;张明&lt;/td&gt;
        &lt;td&gt;王平&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre><table><tbody><tr><th rowspan="2">值班人员</th><th>星期一</th><th>星期二</th><th>星期三</th></tr><tr><td>李强</td><td>张明</td><td>王平</td></tr></tbody></table><h3 id="_15-内嵌图标" tabindex="-1"><a class="header-anchor" href="#_15-内嵌图标" aria-hidden="true">#</a> 15. 内嵌图标</h3><p>本站的图标系统对外开放，在文档中输入</p><pre><code>&lt;i class=&quot;icon-weibo&quot;&gt;&lt;/i&gt;
</code></pre><p>即显示微博的图标： <i class="icon-weibo icon-2x"></i></p><p>替换 上述 <code>i 标签</code> 内的 <code>icon-weibo</code> 以显示不同的图标，例如：</p><pre><code>&lt;i class=&quot;icon-renren&quot;&gt;&lt;/i&gt;
</code></pre><p>即显示人人的图标： <i class="icon-renren icon-2x"></i></p>`,17)),a("p",null,[s[22]||(s[22]=n("更多的图标和玩法可以参看 ")),a("a",v,[s[21]||(s[21]=n("font-awesome")),e(t)]),s[23]||(s[23]=n(" 官方网站。"))]),s[47]||(s[47]=a("h3",{id:"_16-待办事宜-todo-列表",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_16-待办事宜-todo-列表","aria-hidden":"true"},"#"),n(" 16. 待办事宜 Todo 列表")],-1)),s[48]||(s[48]=a("p",null,"使用带有 [ ] 或 [x] （未完成或已完成）项的列表语法撰写一个待办事宜列表，并且支持子列表嵌套以及混用Markdown语法，例如：",-1)),s[49]||(s[49]=a("pre",null,[a("code",null,`- [ ] **Cmd Markdown 开发**
    - [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
    - [ ] 支持以 PDF 格式导出文稿
    - [x] 新增Todo列表功能 [语法参考](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)
    - [x] 改进 LaTex 功能
        - [x] 修复 LaTex 公式渲染问题
        - [x] 新增 LaTex 公式编号功能 [语法参考](http://docs.mathjax.org/en/latest/tex.html#tex-eq-numbers)
- [ ] **七月旅行准备**
    - [ ] 准备邮轮上需要携带的物品
    - [ ] 浏览日本免税店的物品
    - [x] 购买蓝宝石公主号七月一日的船票
`)],-1)),s[50]||(s[50]=a("p",null,"对应显示如下待办事宜 Todo 列表：",-1)),a("ul",null,[a("li",null,[s[32]||(s[32]=n("[ ] ")),s[33]||(s[33]=a("strong",null,"Cmd Markdown 开发",-1)),a("ul",null,[s[30]||(s[30]=a("li",null,"[ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率",-1)),s[31]||(s[31]=a("li",null,"[ ] 支持以 PDF 格式导出文稿",-1)),a("li",null,[s[25]||(s[25]=n("[x] 新增Todo列表功能 ")),a("a",q,[s[24]||(s[24]=n("语法参考")),e(t)])]),a("li",null,[s[29]||(s[29]=n("[x] 改进 LaTex 功能 ")),a("ul",null,[s[28]||(s[28]=a("li",null,"[x] 修复 LaTex 公式渲染问题",-1)),a("li",null,[s[27]||(s[27]=n("[x] 新增 LaTex 公式编号功能 ")),a("a",T,[s[26]||(s[26]=n("语法参考")),e(t)])])])])])]),s[34]||(s[34]=a("li",null,[n("[ ] "),a("strong",null,"七月旅行准备"),a("ul",null,[a("li",null,"[ ] 准备邮轮上需要携带的物品"),a("li",null,"[ ] 浏览日本免税店的物品"),a("li",null,"[x] 购买蓝宝石公主号七月一日的船票")])],-1))]),s[51]||(s[51]=a("p",null,[n("[^footnote]: 这是一个 "),a("em",null,"注脚"),n(" 的 "),a("strong",null,"文本"),n("。")],-1)),s[52]||(s[52]=a("p",null,[n("[^footnote2]: 这是另一个 "),a("em",null,"注脚"),n(" 的 "),a("strong",null,"文本"),n("。")],-1))])}const L=o(d,[["render",C],["__file","markdown.html.vue"]]);export{L as default};
