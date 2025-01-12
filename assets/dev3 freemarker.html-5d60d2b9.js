import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="插值规则" tabindex="-1"><a class="header-anchor" href="#插值规则" aria-hidden="true">#</a> 插值规则</h3><p>FreeMarker的插值有如下两种类型:</p><h3 id="freemarker" tabindex="-1"><a class="header-anchor" href="#freemarker" aria-hidden="true">#</a> freemarker <code>#$</code></h3><ol><li>通用插值<code>\${expr};</code></li><li>数字格式化插值: <code>#{expr}或#{expr;format}</code></li></ol><h4 id="通用插值" tabindex="-1"><a class="header-anchor" href="#通用插值" aria-hidden="true">#</a> 通用插值</h4><p>对于通用插值,又可以分为以下4种情况:</p><ol><li>插值结果为字符串值:直接输出表达式结果</li><li>插值结果为数字值:根据默认格式 **(由#setting指令设置)**将表达式结果转换成文本输出.可以使用内建的字符串函数格式化单个插值,如下面的例子:</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span>#settion number_format<span class="token operator">=</span><span class="token string">&quot;currency&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign answer<span class="token operator">=</span><span class="token number">42</span><span class="token operator">/</span><span class="token operator">&gt;</span>

$<span class="token punctuation">{</span>answer<span class="token punctuation">}</span>
$<span class="token punctuation">{</span>answer<span class="token operator">?</span>string<span class="token punctuation">}</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span> the same <span class="token keyword">as</span> $<span class="token punctuation">{</span>answer<span class="token punctuation">}</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>answer<span class="token operator">?</span>string<span class="token punctuation">.</span>number<span class="token punctuation">}</span>
$<span class="token punctuation">{</span>answer<span class="token operator">?</span>string<span class="token punctuation">.</span>currency<span class="token punctuation">}</span>
$<span class="token punctuation">{</span>answer<span class="token operator">?</span>string<span class="token punctuation">.</span>percent<span class="token punctuation">}</span>
$<span class="token punctuation">{</span>answer<span class="token punctuation">}</span>


<span class="token literal-property property">输出结果是</span><span class="token operator">:</span>
$42<span class="token punctuation">.</span><span class="token number">00</span>
$42<span class="token punctuation">.</span><span class="token number">00</span>
<span class="token number">42</span>
$42<span class="token punctuation">.</span><span class="token number">00</span>
<span class="token number">4</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token operator">%</span>
</code></pre></div><ol start="3"><li>插值结果为 <strong>日期值</strong> :根据默认格式(由#setting指令设置)将表达式结果转换成文本输出.可以使用内建的字符串函数格式化单个插值,如下面的例子:</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">{</span>lastUpdated<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss zzzz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
$<span class="token punctuation">{</span>lastUpdated<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;EEE, MMM d, &#39;&#39;yy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
$<span class="token punctuation">{</span>lastUpdated<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;EEEE, MMMM dd, yyyy, hh:mm:ss a &#39;(&#39;zzz&#39;)&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">// 输出结果是:</span>

<span class="token number">2008</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">08</span> <span class="token number">08</span><span class="token operator">:</span><span class="token number">08</span><span class="token operator">:</span><span class="token number">08</span> Pacific Daylight Time
Tue<span class="token punctuation">,</span> Apr <span class="token number">8</span><span class="token punctuation">,</span> &#39;<span class="token number">03</span>
Tuesday<span class="token punctuation">,</span> April <span class="token number">08</span><span class="token punctuation">,</span> <span class="token number">2003</span><span class="token punctuation">,</span> <span class="token number">08</span><span class="token operator">:</span><span class="token number">08</span><span class="token operator">:</span><span class="token number">08</span> <span class="token constant">PM</span> <span class="token punctuation">(</span><span class="token constant">PDT</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>插值结果为布尔值:根据默认格式(由#setting指令设置)将表达式结果转换成文本输出.可以使用内建的字符串函数格式化单个插值,如下面的例子:</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#assign foo<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">/</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span>foo<span class="token operator">?</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;yes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;no&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token literal-property property">输出结果是</span><span class="token operator">:</span>
yes
</code></pre></div><h4 id="数字格式化插值" tabindex="-1"><a class="header-anchor" href="#数字格式化插值" aria-hidden="true">#</a> 数字格式化插值</h4><ul><li>数字格式化插值可采用 <strong>#{expr;format}</strong> 形式来格式化数字,其中format可以是:</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>mX:小数部分最小X位
MX:小数部分最大X位
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#assign x<span class="token operator">=</span><span class="token number">2.582</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#assign y<span class="token operator">=</span><span class="token number">4</span><span class="token operator">/</span><span class="token operator">&gt;</span>
#<span class="token punctuation">{</span>x<span class="token punctuation">;</span> <span class="token constant">M2</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span> 输出<span class="token number">2.58</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
#<span class="token punctuation">{</span>y<span class="token punctuation">;</span> <span class="token constant">M2</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span> 输出<span class="token number">4</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
#<span class="token punctuation">{</span>x<span class="token punctuation">;</span> m2<span class="token punctuation">}</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span> 输出<span class="token number">2.6</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
#<span class="token punctuation">{</span>y<span class="token punctuation">;</span> m2<span class="token punctuation">}</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span> 输出<span class="token number">4.0</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
#<span class="token punctuation">{</span>x<span class="token punctuation">;</span> m1M2<span class="token punctuation">}</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span> 输出<span class="token number">2.58</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
#<span class="token punctuation">{</span>x<span class="token punctuation">;</span> m1M2<span class="token punctuation">}</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span> 输出<span class="token number">4.0</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre></div><h3 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> 表达式</h3><ul><li>表达式是FreeMarker模板的核心功能,表达式放置在插值语法<code>\${}</code>之中时,表明需要输出表达式的值;</li><li>表达式语法也可与FreeMarker 标签结合,用于控制输出.实际上FreeMarker的表达式功能非常强大,它不仅支持直接指定值,输出变量值,也支持字符串格式化输出和集合访问等功能.</li></ul><h4 id="直接指定值" tabindex="-1"><a class="header-anchor" href="#直接指定值" aria-hidden="true">#</a> 直接指定值</h4><p>使用直接指定值语法让FreeMarker直接输出插值中的值,而不是输出变量值.直接指定值可以是字符串,数值,布尔值,集合和MAP对象.</p><ol><li><strong>字符串</strong></li></ol><ul><li><strong>直接指定字符串值使用单引号或双引号限定</strong>,如果字符串值中包含特殊字符需要转义,看下面的例子:</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">{</span><span class="token string">&quot;我的文件保存在C:\\\\盘&quot;</span><span class="token punctuation">}</span>
$<span class="token punctuation">{</span><span class="token string">&#39;我名字是\\&quot;annlee\\&quot;&#39;</span><span class="token punctuation">}</span>
<span class="token comment">// 输出结果是:</span>
<span class="token comment">/*
我的文件保存在C:\\盘
我名字是&quot;annlee&quot;
*/</span>
<span class="token comment">/*
FreeMarker支持如下转义字符:
\\&quot;;双引号(u0022)
\\&#39;;单引号(u0027)
\\\\;反斜杠(u005C)
\\n;换行(u000A)
\\r;回车(u000D)
\\t;Tab(u0009)
\\b;退格键(u0008)
\\f;Form feed(u000C)
\\l;&lt;
\\g;&gt;
\\a;&amp;
\\{;{
\\xCode;直接通过4位的16进制数来指定Unicode码,输出该unicode码对应的字符.
*/</span>


</code></pre></div><ul><li>如果某段文本中包含大量的特殊符号,FreeMarker提供了另一种特殊格式:</li></ul><ul><li>可以在指定字符串内容的引号前增加<strong>r</strong>标记,在r标记后的文件将会直接输出.看如下代码:</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">{</span>r<span class="token string">&quot;\${foo}&quot;</span><span class="token punctuation">}</span>
$<span class="token punctuation">{</span>r<span class="token string">&quot;C:\\foo\\bar&quot;</span><span class="token punctuation">}</span>
<span class="token comment">// 输出结果是:</span>
$<span class="token punctuation">{</span>foo<span class="token punctuation">}</span>
<span class="token constant">C</span><span class="token operator">:</span>\\foo\\bar
</code></pre></div><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#list <span class="token punctuation">[</span><span class="token string">&quot;星期一&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;星期二&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;星期三&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;星期四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;星期五&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;星期六&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;星期天&quot;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> x<span class="token operator">&gt;</span>
       $<span class="token punctuation">{</span>x<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#list<span class="token operator">&gt;</span>

<span class="token comment">/*
输出结果是:
星期一
星期二
星期三
星期四
星期五
星期六
星期天
*/</span>
</code></pre></div><ul><li>除此之外,集合元素也可以是表达式,例子如下: <code>[2 + 2, [1, 2, 3, 4], &quot;whatnot&quot;]</code></li></ul><ul><li>还可以使用数字范围定义数字集合,如2..5等同于[2, 3, 4, 5],但是更有效率.</li><li>注意,使用数字范围来定义集合时无需使用方括号,数字范围也支持反递增的数字范围,如5..2</li></ul><h3 id="map对象" tabindex="-1"><a class="header-anchor" href="#map对象" aria-hidden="true">#</a> Map对象</h3><p>Map对象使用花括号包括,Map中的key-value对之间以英文冒号&quot;:&quot;分隔,多组key-value对之间以英文逗号&quot;,&quot;分隔 Map对象的key和value都是表达式,但是key必须是字符串</p><h4 id="输出变量值" tabindex="-1"><a class="header-anchor" href="#输出变量值" aria-hidden="true">#</a> 输出变量值</h4><p>FreeMarker的表达式输出变量时,这些变量可以是顶层变量,也可以是Map对象中的变量,还可以是集合中的变量,并可以使用点(.)语法来访问Java对象的属性.下面分别讨论这些情况</p><ol><li>顶层变量 所谓顶层变量就是直接放在数据模型中的值,例如有如下数据模型:</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Map root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建数据模型</span>
root<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;annlee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//name是一个顶层变量</span>
</code></pre></div><ul><li>对于顶层变量,直接使用<code>\${variableName}</code>来输出变量值</li></ul><ol start="2"><li>输出集合元素 如果需要输出集合元素,则可以根据集合元素的索引来输出集合元素,集合元素的索引以方括号指定.假设有索引:</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&quot;星期一&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;星期二&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;星期三&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;星期四&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;星期五&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;星期六&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;星期天&quot;</span><span class="token punctuation">]</span>
<span class="token comment">// .该索引名为week</span>
<span class="token comment">// ,如果需要输出星期三,则可以使用如下语法:</span>
$<span class="token punctuation">{</span>week<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span> 
<span class="token comment">//输出第三个集合元素</span>

<span class="token comment">// 此外,FreeMarker还支持返回集合的子集合,如果需要返回集合的子集合,则可以使用如下语法:</span>
week<span class="token punctuation">[</span><span class="token number">3.</span><span class="token number">.5</span><span class="token punctuation">]</span> <span class="token comment">//返回week集合的子集合,子集合中的元素是week集合中的第4-6个元素</span>
</code></pre></div><ol start="3"><li><strong>输出Map元素</strong></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Author</span> author <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Author</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
author<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;annlee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
author<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token string">&quot;gz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
book<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;struts2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
book<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span>author<span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;struts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 为了访问数据模型中名为struts2的书的作者的名字,可以使用如下语法:</span>
book<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name <span class="token comment">//全部使用点语法</span>
book<span class="token punctuation">[</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name
book<span class="token punctuation">.</span>author<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token comment">//混合使用点语法和方括号语法</span>
book<span class="token punctuation">[</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token comment">//全部使用方括号语法</span>

<span class="token comment">// 使用点语法时,变量名字有顶层变量一样的限制,但方括号语法没有该限制,因为名字可以是任意表达式的结果.</span>
</code></pre></div><h4 id="字符串操作" tabindex="-1"><a class="header-anchor" href="#字符串操作" aria-hidden="true">#</a> 字符串操作</h4><p>FreeMarker的表达式对字符串操作非常灵活,可以将字符串常量和变量连接起来,也可以返回字符串的子串等.</p><ul><li><strong>字符串连接有两种语法</strong>:</li></ul><ol><li>使用\${..}或#{..}在字符串常量部分插入表达式的值,从而完成字符串连接.</li><li>直接使用连接运算符+来连接字符串</li></ol><p>例如有如下数据模型:</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
root<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;annlee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;!-- 下面将user变量和常量连接起来: --&gt;</span>
$<span class="token punctuation">{</span><span class="token string">&quot;hello, \${user}!&quot;</span><span class="token punctuation">}</span> <span class="token comment">//使用第一种语法来连接</span>
$<span class="token punctuation">{</span><span class="token string">&quot;hello, &quot;</span> <span class="token operator">+</span> user <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">}</span> <span class="token comment">//使用+号来连接</span>

<span class="token comment">// 上面的输出字符串都是hello,annlee!,可以看出这两种语法的效果完全一样.</span>

<span class="token comment">// 值得注意的是,\${..}只能用于文本部分,不能用于表达式,下面的代码是错误的:</span>
<span class="token operator">&lt;</span>#<span class="token keyword">if</span> $<span class="token punctuation">{</span>isBig<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token class-name">Wow</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#<span class="token keyword">if</span> <span class="token string">&quot;\${isBig}&quot;</span><span class="token operator">&gt;</span><span class="token class-name">Wow</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>

应该写成<span class="token operator">:</span>
<span class="token operator">&lt;</span>#<span class="token keyword">if</span> isBig<span class="token operator">&gt;</span><span class="token class-name">Wow</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>


<span class="token comment">// 截取子串可以根据字符串的索引来进行,截取子串时如果只指定了一个索引值,则用于取得字符串中指定索引所对应的字符;如果指定两个索引值,则返回两个索引中间的字符串子串.假如有如下数据模型:</span>

<span class="token class-name">Map</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 root<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;struts2,freemarker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可以通过如下语法来截取子串:</span>
$<span class="token punctuation">{</span>book<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span>$<span class="token punctuation">{</span>book<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token comment">//结果是su</span>
$<span class="token punctuation">{</span>book<span class="token punctuation">[</span><span class="token number">1.</span><span class="token number">.4</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token comment">//结果是tru</span>
</code></pre></div><h4 id="集合连接运算符" tabindex="-1"><a class="header-anchor" href="#集合连接运算符" aria-hidden="true">#</a> 集合连接运算符</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 这里所说的集合运算符是将两个集合连接成一个新的集合,连接集合的运算符是+,看如下的例子: --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">[&quot;星期一&quot;,&quot;星期二&quot;,&quot;星期三&quot;]</span> <span class="token attr-name">+</span> <span class="token attr-name">[&quot;星期四&quot;,&quot;星期五&quot;,&quot;星期六&quot;,&quot;星期天&quot;]</span> <span class="token attr-name">as</span> <span class="token attr-name">x</span><span class="token punctuation">&gt;</span></span>
\${x}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 输出结果是:星期一 星期二 星期三 星期四 星期五 星期六 星期天 --&gt;</span>
</code></pre></div><h4 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// FreeMarker表达式中完全支持算术运算,FreeMarker支持的算术运算符包括:+, - , * , / , % 看如下的代码:</span>
<span class="token operator">&lt;</span>#assign x<span class="token operator">=</span><span class="token number">5</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span> x <span class="token operator">*</span> x <span class="token operator">-</span> <span class="token number">100</span> <span class="token punctuation">}</span>
$<span class="token punctuation">{</span> x <span class="token operator">/</span><span class="token number">2</span> <span class="token punctuation">}</span>
$<span class="token punctuation">{</span> <span class="token number">12</span> <span class="token operator">%</span><span class="token number">10</span> <span class="token punctuation">}</span>
<span class="token comment">// 输出结果是:</span>
<span class="token operator">-</span><span class="token number">75</span> <span class="token number">2.5</span> <span class="token number">2</span>
</code></pre></div><ul><li>在表达式中使用算术运算符时要<strong>注意以下几点</strong>:</li></ul><ol><li>运算符两边的运算数字必须是数字</li><li>使用+运算符时,如果一边是数字,一边是字符串,就会自动将数字转换为字符串再连接,如:<code>\${3 + &quot;5&quot;}</code>,结果是:35</li></ol><p>使用内建的int函数可对数值取整,如:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>#assign x<span class="token operator">=</span><span class="token number">5</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span> <span class="token punctuation">(</span>x<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">?</span>int <span class="token punctuation">}</span>
$<span class="token punctuation">{</span> <span class="token number">1.1</span><span class="token operator">?</span>int <span class="token punctuation">}</span>
$<span class="token punctuation">{</span> <span class="token number">1.999</span><span class="token operator">?</span>int <span class="token punctuation">}</span>
$<span class="token punctuation">{</span> <span class="token operator">-</span><span class="token number">1.1</span><span class="token operator">?</span>int <span class="token punctuation">}</span>
$<span class="token punctuation">{</span> <span class="token operator">-</span><span class="token number">1.999</span><span class="token operator">?</span>int <span class="token punctuation">}</span>
<span class="token comment">// 结果是:2 1 1 -1 -1</span>
</code></pre></div><h4 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h4><p>表达式中支持的比较运算符有如下几个:</p><ol><li><code>=或者==</code>:判断两个值是否相等.</li><li><code>!=</code>:判断两个值是否不等.</li><li><code>&gt;或者gt</code>:判断左边值是否大于右边值</li><li><code>&gt;=或者gte</code>:判断左边值是否大于等于右边值</li><li><code>&lt;或者lt</code>:判断左边值是否小于右边值</li><li><code>&lt;=或者lte</code>:判断左边值是否小于等于右边值</li></ol><ul><li><strong>注意</strong> 大部分的时候,使用gt等字母运算符代替<code>&gt;</code>会有更好的效果,因为 FreeMarker会把<code>&gt;</code>解释成FTL标签的结束字符,当然,也可以使用括号来避免这种情况,如: <strong><code>&lt;#if (x&gt;y)&gt;</code></strong></li></ul><h4 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h4><p>逻辑运算符有如下几个: 逻辑与:&amp;&amp; 逻辑或:|| 逻辑非:! 逻辑运算符只能作用于布尔值,否则将产生错误</p><h2 id="内建函数" tabindex="-1"><a class="header-anchor" href="#内建函数" aria-hidden="true">#</a> 内建函数</h2><p>FreeMarker还提供了一些内建函数来转换输出,可以在任何变量后紧跟?,?后紧跟内建函数,就可以通过内建函数来轮换输出变量.下面是常用的内建的字符串函数:</p><ul><li><strong>html</strong>:对字符串进行HTML编码</li><li><strong>cap_first</strong>:使字符串第一个字母大写</li><li><strong>lower_case</strong>:将字符串转换成小写</li><li><strong>upper_case</strong>:将字符串转换成大写</li><li><strong>trim</strong>:去掉字符串前后的空白字符</li></ul><p>下面是集合的常用内建函数 size:获取序列中元素的个数</p><p>下面是数字值的常用内建函数 int:取得数字的整数部分,结果带符号</p><p>例如:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#assign</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tom &amp; Jerry<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
\${test?html}
\${test?upper_case?html}
结果是:
Tom <span class="token entity named-entity" title="&amp;">&amp;amp;</span> Jerry 
TOM <span class="token entity named-entity" title="&amp;">&amp;amp;</span> JERRY
</code></pre></div><h3 id="空值处理运算符" tabindex="-1"><a class="header-anchor" href="#空值处理运算符" aria-hidden="true">#</a> 空值处理运算符</h3><ol><li>FreeMarker对空值的处理非常严格,FreeMarker的变量必须有值,没有被赋值的变量就会抛出异常</li><li>因为FreeMarker未赋值的变量强制出错可以杜绝很多潜在的错误,如缺失潜在的变量命名,或者其他变量错误</li><li>这里所说的空值,实际上也包括那些并不存在的变量,对于一个Java的 null值而言,我们认为这个变量是存在的,只是它的值为null</li><li>但对于FreeMarker模板而言,它无法理解null值,null值和不存在的变量完全相同</li></ol><ul><li>为了处理缺失变量,FreeMarker提供了两个运算符:</li><li><strong><code>!:指定缺失变量的默认值</code></strong></li><li><strong><code>??:判断某个变量是否存在</code></strong></li></ul><blockquote><p>其中 <code>!</code>运算符的用法有如下两种:</p></blockquote><ol><li><p><strong>variable!或variable!defaultValue</strong> 第一种用法不给缺失的变量指定默认值,表明默认值是空字符串,长度为0的集合,或者长度为0的Map对象.</p></li><li><p>使用<code>!指定默认值时</code>,并不要求默认值的类型和变量类型相同.</p></li><li><p>使用<code>??运算符非常简单</code>,它总是返回一个布尔值,用法为:<code>variable??</code>,如果该变量存在,返回true,否则返回false</p></li></ol><ul><li>use <code>&lt;#if list?? &gt; todo.... &lt;/#if&gt;</code></li></ul><h2 id="freemarker的常用指令" tabindex="-1"><a class="header-anchor" href="#freemarker的常用指令" aria-hidden="true">#</a> FreeMarker的常用指令</h2><p>FreeMarker的FTL指令也是模板的重要组成部分,这些指令可实现对数据模型所包含数据的抚今迭代,分支控制.除此之外,还有一些重要的功能,也是通过FTL指令来实现的.</p><h3 id="if指令" tabindex="-1"><a class="header-anchor" href="#if指令" aria-hidden="true">#</a> if指令</h3><p>这是一个典型的分支控制指令,该指令的作用完全类似于Java语言中的if,if指令的语法格式如下:.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;#if condition&gt;...
&lt;#elseif condition&gt;...
&lt;#elseif condition&gt;...
&lt;#else&gt; ...
&lt;/#if&gt;

例子如下:
&lt;#assign age=23&gt;
&lt;#if (age&gt;60)&gt;老年人
&lt;#elseif (age&gt;40)&gt;中年人
&lt;#elseif (age&gt;20)&gt;青年人
&lt;#else&gt; 少年人
&lt;/#if&gt;
输出结果是:青年人
上面的代码中的逻辑表达式用括号括起来主要是因为里面有&gt;符号,由于FreeMarker会将&gt;符号当成标签的结束字符,可能导致程序出错,为了避免这种情况,我们应该在凡是出现这些符号的地方都使用括号.

4.2 switch , case , default , break指令

这些指令显然是分支指令,作用类似于Java的switch语句,switch指令的语法结构如下:
&lt;#switch value&gt;
&lt;#case refValue&gt;...&lt;#break&gt;
&lt;#case refValue&gt;...&lt;#break&gt;
&lt;#default&gt;...
&lt;/#switch&gt;

4.3 list, break指令

list指令是一个迭代输出指令,用于迭代输出数据模型中的集合,list指令的语法格式如下:
&lt;#list sequence as item&gt;
...
&lt;/#list&gt;
上面的语法格式中,sequence就是一个集合对象,也可以是一个表达式,但该表达式将返回一个集合对象,而item是一个任意的名字,就是被迭代输出的集合元素.此外,迭代集合对象时,还包含两个特殊的循环变量:
item_index:当前变量的索引值
item_has_next:是否存在下一个对象
也可以使用&lt;#break&gt;指令跳出迭代

例子如下:
&lt;#list [&quot;星期一&quot;, &quot;星期二&quot;, &quot;星期三&quot;, &quot;星期四&quot;, &quot;星期五&quot;, &quot;星期六&quot;, &quot;星期天&quot;] as x&gt;
\${x_index + 1}.\${x}&lt;#if x_has_next&gt;,&lt;/if&gt;
&lt;#if x=&quot;星期四&quot;&gt;&lt;#break&gt;&lt;/#if&gt;
&lt;/#list&gt;

4.4 include指令

include指令的作用类似于JSP的包含指令,用于包含指定页.include指令的语法格式如下:
&lt;#include filename [options]&gt;
在上面的语法格式中,两个参数的解释如下:
filename:该参数指定被包含的模板文件
options:该参数可以省略,指定包含时的选项,包含encoding和parse两个选项,其中encoding指定包含页面时所用的解码集,而parse指定被包含文件是否作为FTL文件来解析,如果省略了parse选项值,则该选项默认是true.

4.5 import指令

该指令用于导入FreeMarker模板中的所有变量,并将该变量放置在指定的Map对象中,import指令的语法格式如下:
&lt;#import &quot;/lib/common.ftl&quot; as com&gt;
上面的代码将导入/lib/common.ftl模板文件中的所有变量,交将这些变量放置在一个名为com的Map对象中.

4.6 noparse指令

noparse指令指定FreeMarker不处理该指定里包含的内容,该指令的语法格式如下:
&lt;#noparse&gt;...&lt;/#noparse&gt;

看如下的例子:
&lt;#noparse&gt;
&lt;#list books as book&gt;
&lt;tr&gt;&lt;td&gt;\${book.name}&lt;td&gt;作者:\${book.author}
&lt;/#list&gt;
&lt;/#noparse&gt;
输出如下:
&lt;#list books as book&gt;
&lt;tr&gt;&lt;td&gt;\${book.name}&lt;td&gt;作者:\${book.author}
&lt;/#list&gt;

4.7 escape , noescape指令

escape指令导致body区的插值都会被自动加上escape表达式,但不会影响字符串内的插值,只会影响到body内出现的插值,使用escape指令的语法格式如下:
&lt;#escape identifier as expression&gt;...
&lt;#noescape&gt;...&lt;/#noescape&gt;
&lt;/#escape&gt;

看如下的代码:
&lt;#escape x as x?html&gt;
First name:\${firstName}
Last name:\${lastName}
Maiden name:\${maidenName}
&lt;/#escape&gt;
上面的代码等同于:
First name:\${firstName?html}
Last name:\${lastName?html}
Maiden name:\${maidenName?html}

escape指令在解析模板时起作用而不是在运行时起作用,除此之外,escape指令也嵌套使用,子escape继承父escape的规则,如下例子:
&lt;#escape x as x?html&gt;
Customer Name:\${customerName}
Items to ship;
&lt;#escape x as itemCodeToNameMap[x]&gt;
\${itemCode1}
\${itemCode2}
\${itemCode3}
\${itemCode4}
&lt;/#escape&gt;
&lt;/#escape&gt;
上面的代码类似于:
Customer Name:\${customerName?html}
Items to ship;
\${itemCodeToNameMap[itemCode1]?html}
\${itemCodeToNameMap[itemCode2]?html}
\${itemCodeToNameMap[itemCode3]?html}
\${itemCodeToNameMap[itemCode4]?html}

对于放在escape指令中所有的插值而言,这此插值将被自动加上escape表达式,如果需要指定escape指令中某些插值无需添加escape表达式,则应该使用noescape指令,放在noescape指令中的插值将不会添加escape表达式.

4.8 assign指令

assign指令在前面已经使用了多次,它用于为该模板页面创建或替换一个顶层变量,assign指令的用法有多种,包含创建或替换一个顶层变量, 或者创建或替换多个变量等,它的最简单的语法如下:&lt;#assign name=value [in namespacehash]&gt;,这个用法用于指定一个名为name的变量,该变量的值为value,此外,FreeMarker允许在使用 assign指令里增加in子句,in子句用于将创建的name变量放入namespacehash命名空间中.

assign指令还有如下用法:&lt;#assign name1=value1 name2=value2 ... nameN=valueN [in namespacehash]&gt;,这个语法可以同时创建或替换多个顶层变量,此外,还有一种复杂的用法,如果需要创建或替换的变量值是一个复杂的表达式,则可以使用如下语法格式:&lt;#assign name [in namespacehash]&gt;capture this&lt;/#assign&gt;,在这个语法中,是指将assign指令的内容赋值给name变量.如下例子:
&lt;#assign x&gt;
&lt;#list [&quot;星期一&quot;, &quot;星期二&quot;, &quot;星期三&quot;, &quot;星期四&quot;, &quot;星期五&quot;, &quot;星期六&quot;, &quot;星期天&quot;] as n&gt;
\${n}
&lt;/#list&gt;
&lt;/#assign&gt;
\${x}
上面的代码将产生如下输出:星期一 星期二 星期三 星期四 星期五 星期六 星期天

虽然assign指定了这种复杂变量值的用法,但是我们也不要滥用这种用法,如下例子:&lt;#assign x&gt;Hello \${user}!&lt;/#assign&gt;,以上代码改为如下写法更合适:&lt;#assign x=&quot;Hello \${user}!&quot;&gt;

4.9 setting指令

该指令用于设置FreeMarker的运行环境,该指令的语法格式如下:&lt;#setting name=value&gt;,在这个格式中,name的取值范围包含如下几个:
locale:该选项指定该模板所用的国家/语言选项
number_format:指定格式化输出数字的格式
boolean_format:指定两个布尔值的语法格式,默认值是true,false
date_format,time_format,datetime_format:指定格式化输出日期的格式
time_zone:设置格式化输出日期时所使用的时区

4.10 macro , nested , return指令

macro可以用于实现自定义指令,通过使用自定义指令,可以将一段模板片段定义成一个用户指令,使用macro指令的语法格式如下:
&lt;#macro name param1 param2 ... paramN&gt;
...
&lt;#nested loopvar1, loopvar2, ..., loopvarN&gt;
...
&lt;#return&gt;
...
&lt;/#macro&gt;
在上面的格式片段中,包含了如下几个部分:
name:name属性指定的是该自定义指令的名字,使用自定义指令时可以传入多个参数
paramX:该属性就是指定使用自定义指令时报参数,使用该自定义指令时,必须为这些参数传入值
nested指令:nested标签输出使用自定义指令时的中间部分
nested指令中的循环变量:这此循环变量将由macro定义部分指定,传给使用标签的模板
return指令:该指令可用于随时结束该自定义指令.

看如下的例子:
&lt;#macro book&gt; //定义一个自定义指令
j2ee
&lt;/#macro&gt;
&lt;@book /&gt; //使用刚才定义的指令
上面的代码输出结果为:j2ee

在上面的代码中,可能很难看出自定义标签的用处,因为我们定义的book指令所包含的内容非常简单,实际上,自定义标签可包含非常多的内容,从而可以实现更好的代码复用.此外,还可以在定义自定义指令时,为自定义指令指定参数,看如下代码:
&lt;#macro book booklist&gt; //定义一个自定义指令booklist是参数
&lt;#list booklist as book&gt;
\${book}
&lt;/#list&gt;
&lt;/#macro&gt;
&lt;@book booklist=[&quot;spring&quot;,&quot;j2ee&quot;] /&gt; //使用刚刚定义的指令
上面的代码为book指令传入了一个参数值,上面的代码的输出结果为:spring j2ee

不仅如此,还可以在自定义指令时使用nested指令来输出自定义指令的中间部分,看如下例子:
&lt;#macro page title&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;FreeMarker示例页面 - \${title?html}&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;\${title?html}&lt;/h1&gt;
&lt;#nested&gt; //用于引入用户自定义指令的标签体
&lt;/body&gt;
&lt;/html&gt;
&lt;/#macro&gt;
上面的代码将一个HTML页面模板定义成一个page指令,则可以在其他页面中如此page指令:
&lt;#import &quot;/common.ftl&quot; as com&gt; //假设上面的模板页面名为common.ftl,导入页面
&lt;@com.page title=&quot;book list&quot;&gt;
&lt;u1&gt;
&lt;li&gt;spring&lt;/li&gt;
&lt;li&gt;j2ee&lt;/li&gt;
&lt;/ul&gt;
&lt;/@com.page&gt;

从上面的例子可以看出,使用macro和nested指令可以非常容易地实现页面装饰效果,此外,还可以在使用nested指令时,指定一个或多个循环变量,看如下代码:
&lt;#macro book&gt;
&lt;#nested 1&gt; //使用book指令时指定了一个循环变量值
&lt;#nested 2&gt;
&lt;/#macro&gt;
&lt;@book ;x&gt; \${x} .图书&lt;/@book&gt;
当使用nested指令传入变量值时,在使用该自定义指令时,就需要使用一个占位符(如book指令后的;x).上面的代码输出文本如下:
1 .图书 2 .图书

在nested指令中使用循环变量时,可以使用多个循环变量,看如下代码:
&lt;#macro repeat count&gt;
&lt;#list 1..count as x&gt; //使用nested指令时指定了三个循环变量
&lt;#nested x, x/2, x==count&gt;
&lt;/#list&gt;
&lt;/#macro&gt;
&lt;@repeat count=4 ; c halfc last&gt;
\${c}. \${halfc}&lt;#if last&gt; Last! &lt;/#if&gt;
&lt;/@repeat&gt;
上面的输出结果为:
1. 0.5 2. 1 3. 1.5 4. 2 Last;

return指令用于结束macro指令,一旦在macro指令中执行了return指令,则FreeMarker不会继续处理macro指令里的内容,看如下代码:
&lt;#macro book&gt;
spring
&lt;#return&gt;
j2ee
&lt;/#macro&gt;
&lt;@book /&gt;
上面的代码输出:spring,而j2ee位于return指令之后,不会输出.

if, else, elseif
switch, case, default, break
list, break
include
Import
compress
escape, noescape
assign
global
setting
macro, nested, return
t, lt, rt
3一些常用方法或注意事项
表达式转换类
数字循环
对浮点取整数
给变量默认值
判断对象是不是null
常用格式化日期
添加全局共享变量数据模型
直接调用java对象的方法
字符串处理(内置方法)
在模板里对sequences和hashes初始化
注释标志
sequences内置方法
hashes内置方法
4 freemarker在web开发中注意事项
web中常用的几个对象
view中值的搜索顺序
在模板里ftl里使用标签
如何初始化共享变量
与webwork整合配置
5高级方法
自定义方法
自定义 Transforms

</code></pre></div><h3 id="freemarker取值" tabindex="-1"><a class="header-anchor" href="#freemarker取值" aria-hidden="true">#</a> Freemarker取值</h3><ol><li><code>{属性名!默认值}</code> - 使用默认值</li><li><code>\${属性名?string}</code> - 格式化输出</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>&lt;#--\${属性名}--&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\${title}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
&lt;#--\${属性名.子属性}--&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\${user.name}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
&lt;#--\${xxx!默认值}设置当xxx为空或者不存在时显示对应的默认值--&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\${user.address!&#39;未登记地址&#39;}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#--利用?string()内置函数进行格式化输出--</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\${user.salary?string(&#39;¥0.00&#39;)}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\${user.birthday?string(&#39;yyyy年MM月dd日&#39;)}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="freemarker判断与循环" tabindex="-1"><a class="header-anchor" href="#freemarker判断与循环" aria-hidden="true">#</a> Freemarker判断与循环</h3><ol><li>分支判断</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#if</span> <span class="token attr-name">条件1</span><span class="token punctuation">&gt;</span></span>
 条件1成立执行代码
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#elseif</span> <span class="token attr-name">条件2</span><span class="token punctuation">&gt;</span></span>
 条件2成立执行代码
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#elseif</span> <span class="token attr-name">条件3</span><span class="token punctuation">&gt;</span></span>
 条件3成立执行代码
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#else</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#if</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-csharp" data-ext="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span>#<span class="token keyword">if</span> user<span class="token punctuation">.</span>salary <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>#<span class="token operator">--</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>低收入人群需要政策补贴<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#elseif <span class="token punctuation">(</span>user<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> <span class="token number">1000</span> <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>salary <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>中等收入人群鼓励创业<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#<span class="token keyword">else</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>高收入人群要多做公益<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">??</span>代表属性是否存在，对象存在返回<span class="token boolean">true</span><span class="token punctuation">,</span>不存在返回<span class="token boolean">false</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#<span class="token keyword">if</span> manager<span class="token operator">??</span><span class="token operator">&gt;</span>
        manager已存在
    <span class="token operator">&lt;</span>#<span class="token keyword">else</span> <span class="token operator">&gt;</span>
        manager不存在
<span class="token operator">&lt;</span><span class="token operator">/</span>#<span class="token keyword">if</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>#<span class="token operator">--</span>freemarker三目运算符<span class="token operator">--</span><span class="token operator">&gt;</span>
$<span class="token punctuation">{</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>salary<span class="token operator">&lt;</span><span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">?</span><span class="token keyword">string</span><span class="token punctuation">(</span><span class="token string">&quot;低收入人群&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;高收入人群&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="list循环迭代" tabindex="-1"><a class="header-anchor" href="#list循环迭代" aria-hidden="true">#</a> list循环迭代</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">users</span> <span class="token attr-name">as</span> <span class="token attr-name">u</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>{u.index}-{u.name}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#--#list</span> <span class="token attr-name">数据源</span> <span class="token attr-name">as</span> <span class="token attr-name">迭代变量--</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>#list</span> <span class="token attr-name">users</span> <span class="token attr-name">as</span> <span class="token attr-name">u</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\${u_index + 1}-\${u.username}-\${u.name}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>#list</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="include子页面" tabindex="-1"><a class="header-anchor" href="#include子页面" aria-hidden="true">#</a> Include子页面</h3><p>通过Include可以把写好的页面引入到当前页面</p>`,90),e=[o];function l(c,r){return a(),s("div",null,e)}const i=n(p,[["render",l],["__file","dev3 freemarker.html.vue"]]);export{i as default};
