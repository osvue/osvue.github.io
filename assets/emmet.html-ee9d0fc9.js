import{_ as o,M as g,p as n,q as i,R as t,t as l,N as u,a1 as e}from"./framework-d81ad7e5.js";const s={},d=e(`<h1 id="vscode中使用emmet神器快速编写html代码" tabindex="-1"><a class="header-anchor" href="#vscode中使用emmet神器快速编写html代码" aria-hidden="true">#</a> VsCode中使用Emmet神器快速编写HTML代码</h1><h2 id="一、emmet简述" tabindex="-1"><a class="header-anchor" href="#一、emmet简述" aria-hidden="true">#</a> 一、Emmet简述</h2><p>Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具. 在前端开发的过程中，一大部分的工作是写 HTML、CSS 代码。特别是手动编写 HTML 代码的时候，效率会特别低下，因为需要敲打很多尖括号，而且很多标签都需要闭合标签等。于是，就有了 Emmet，它可以极大的提高代码编写的效率，它提供了一种非常简练的语法规则，然后立刻生成对应的 HTML 结构或者 CSS 代码，同时还有多种实用的功能帮助进行前端开发。 VsCode内置了Emmet语法,在后缀为.html/.css中输入缩写后按Tab键即会自动生成相应代码</p><blockquote><p>请注意在VsCode新版本中按Tab不再默认启用Emmet展开缩写!需要在首选项配置中将emmet.triggerExpansionOnTab设置为true值!</p></blockquote><p>语法基本规则如下:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>CopyE 代表HTML标签。
E#id 代表id属性。
E.class 代表class属性。
E[attr=foo] 代表某一个特定属性。
E{foo} 代表标签包含的内容是foo。
E&gt;N 代表N是E的子元素。
E+N 代表N是E的同级元素。
E^N 代表N是E的上级元素。
</code></pre></div>`,6),c={href:"https://docs.emmet.io/css-abbreviations/",target:"_blank",rel:"noopener noreferrer"},r=e(`<hr><h2 id="二、基础用法" tabindex="-1"><a class="header-anchor" href="#二、基础用法" aria-hidden="true">#</a> 二、基础用法</h2><ul><li><strong>元素(Elements)</strong> 您可以使用元素的名称，如div或p来生成HTML标签。Emmet没有一组可用的标签名称，可以写任何单词并将其转换为标签。也就是只要知道元素的缩写,Emmet会自动转换成对应标签. 形如:</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv =&gt; &lt;div&gt; &lt;/div&gt;
foo =&gt; &lt;foo&gt; &lt;/foo&gt;
html:5 =&gt; 将生成html5标准的包含body为空基本dom
html:xt =&gt; 生成XHTML过渡文档类型,DOCTYPE为XHTML
html:4s =&gt; 生成HTML4严格文档类型,DOCTYPE为HTML 4.01
a:mail          =&gt; &lt;a href=&quot;mailto:&quot;&gt;&lt;/a&gt;
a:link          =&gt; &lt;a href=&quot;http://&quot;&gt;&lt;/a&gt;
base            =&gt; &lt;base href=&quot;&quot;&gt;
br              =&gt; &lt;br&gt;
link            =&gt; &lt;link rel=&quot;stylesheet&quot; href=&quot;&quot;&gt;
script:src      =&gt; &lt;script src=&quot;&quot;&gt;&lt;/script&gt;
form:get        =&gt; &lt;form action=&quot;&quot; method=&quot;get&quot;&gt;&lt;/form&gt;
label           =&gt; &lt;label for=&quot;&quot;&gt;&lt;/label&gt;
input           =&gt; &lt;input type=&quot;text&quot;&gt;
inp             =&gt; &lt;input type=&quot;text&quot; name=&quot;&quot; id=&quot;&quot;&gt;
input:hidden    =&gt; &lt;input type=&quot;hidden&quot; name=&quot;&quot;&gt; input:h亦可
input:email     =&gt; &lt;input type=&quot;email&quot; name=&quot;&quot; id=&quot;&quot;&gt;
input:password  =&gt; &lt;input type=&quot;password&quot; name=&quot;&quot; id=&quot;&quot;&gt;
input:checkbox  =&gt; &lt;input type=&quot;checkbox&quot; name=&quot;&quot; id=&quot;&quot;&gt;
input:radio     =&gt; &lt;input type=&quot;radio&quot; name=&quot;&quot; id=&quot;&quot;&gt;
select          =&gt; &lt;select name=&quot;&quot; id=&quot;&quot;&gt;&lt;/select&gt;
option          =&gt; &lt;option value=&quot;&quot;&gt;&lt;/option&gt;
bq              =&gt; &lt;blockquote&gt;&lt;/blockquote&gt;
btn             =&gt; &lt;button&gt;&lt;/button&gt;
btn:s           =&gt; &lt;button type=&quot;submit&quot;&gt;&lt;/button&gt;
btn:r           =&gt; &lt;button type=&quot;reset&quot;&gt;&lt;/button&gt;
</code></pre></div><ul><li><strong>文本操作符(Text)</strong> 如果想在生成元素的同时添加文本内容可以使用{}</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv{这是一段文本}
&lt;div&gt;这是一段文本&lt;/div&gt;
a{点我点我}
&lt;a href=&quot;&quot;&gt;点我点我&lt;/a&gt;  
</code></pre></div><ul><li><p><strong>属性操作符(Attribute operators)</strong> 属性运算符用于修改输出元素的属性.</p><ul><li>Id和Class (elem#id and elem.class )</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv.test  =&gt; &lt;div class=&quot;test&quot;&gt;&lt;/div&gt;
div#pageId =&gt; &lt;div id=&quot;pageId&quot;&gt;&lt;/div&gt;
</code></pre></div><p>隐式标签则会自动联想生成对应元素,根据配置规则不同生成的结果也是不同的.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copy.class
=&gt;
&lt;div class&gt;&lt;/div&gt;
em&gt;.class
=&gt;
&lt;em&gt;&lt;span class&gt;&lt;/span&gt;&lt;/em&gt;
table&gt;.row&gt;.col
=&gt;
&lt;table&gt;
    &lt;tr class=&quot;row&quot;&gt;
        &lt;td class=&quot;col&quot;&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre></div><p>绑定多个类名用.符号连续起来即可</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv.test1.test2.test3
=&gt;
&lt;div class=&quot;test1 test2 test3&quot;&gt;&lt;/div&gt;
</code></pre></div><ul><li>自定义属性使用 [attr1=&#39;&#39; attr2=&#39;&#39;]</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>Copya[href=&#39;#&#39; data-title=&#39;customer&#39; target=&#39;_blank&#39;]
=&gt;
&lt;a href=&quot;#&quot; data-title=&quot;customer&quot; target=&quot;_blank&quot;&gt;&lt;/a&gt;
</code></pre></div></li><li><p><strong>嵌套操作符(Nesting operators)</strong> 嵌套操作符用于将缩写元素放置在生成的树中,是否应放置在上下文元素的内部或附近.</p><ul><li><p>子级:&gt;</p><p>通过&gt;标识元素可以生成嵌套子级元素,可以配合元素属性进行连写</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv#pageId&gt;ul&gt;li 
=&gt; 
&lt;div id=&quot;pageId&quot;&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</code></pre></div></li><li><p>同级:+</p><p>+字符表示生成兄弟级元素.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv#pageId+div.child
=&gt;
&lt;div id=&quot;pageId&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;child&quot;&gt;&lt;/div&gt;
</code></pre></div></li><li><p>父级:^</p><p>用于生成父级元素的同级元素,从这个</p><p>字符所在位置开始,查找左侧最近的元素的父级元素并生成其兄弟级元素.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv&gt;p.parent&gt;span.child^ul.brother&gt;li
=&gt;
&lt;div&gt;
    &lt;p class=&quot;parent&quot;&gt;&lt;span class=&quot;child&quot;&gt;&lt;/span&gt;&lt;/p&gt;
    &lt;ul class=&quot;brother&quot;&gt;
        &lt;li&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</code></pre></div></li></ul></li><li><p><strong>分组操作符(Grouping)</strong> 分组使用()来实现缩写的分离.比如这个例子,如果不加括号那么a将作为span的子级元素生成.加上括号a将于()内的元素同级.</p></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>Copydiv&gt;(ul&gt;li+span)&gt;a
=&gt;
&lt;div&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;span&gt;&lt;/span&gt;
    &lt;/ul&gt;
    &lt;a href=&quot;&quot;&gt;&lt;/a&gt;
&lt;/div&gt;
</code></pre></div><ul><li><strong>乘法(Multiplication)</strong> 使用<em>N即可自动生成重复项.N是一个正整数.在使用时请注意</em>N所在位置,位置不同生成的结果不同.</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>Copyul&gt;li*3
=&gt;
&lt;ul&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre></div><ul><li><strong>自动计数(numbering)</strong> 这个功能挺方便的对于生成重复项时增加一个序号,只需要加上$符号即可.</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>Copyul&gt;li.item\${item number:$}*3
&lt;ul&gt;
    &lt;li class=&quot;item1&quot;&gt;item number:1&lt;/li&gt;
    &lt;li class=&quot;item2&quot;&gt;item number:2&lt;/li&gt;
    &lt;li class=&quot;item3&quot;&gt;item number:3&lt;/li&gt;
&lt;/ul&gt;
</code></pre></div><p>如果生成两位数则使用两个连续的$$,更多位数以此类推... 使用@修饰符，可以更改编号方向（升序或降序）和基数（例如起始值）.注意这个操作符在$之后添加 @-表示降序,@+表示升序,默认使用升序. @N可以改变起始值.需要注意的是如果配合升降序使用的话N是放到+-符后.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copyul&gt;li.item$@-*3
=&gt;
&lt;ul&gt;
    &lt;li class=&quot;item3&quot;&gt;&lt;/li&gt;
    &lt;li class=&quot;item2&quot;&gt;&lt;/li&gt;
    &lt;li class=&quot;item1&quot;&gt;&lt;/li&gt;
&lt;/ul&gt;
---------------------------
ul&gt;li.item$@-10*3
=&gt;
&lt;ul&gt;
    &lt;li class=&quot;item12&quot;&gt;&lt;/li&gt;
    &lt;li class=&quot;item11&quot;&gt;&lt;/li&gt;
    &lt;li class=&quot;item10&quot;&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre></div><p>上述的操作是可以搭配使用进而得出酷炫的效果,使用时请注意空格的问题,缩写代码不要有空格否则是不会进行转换的. 另外如果你的编辑器中已经有了一些html智能提示代码段,比如我的VsCode还装了HTML Snippets插件,这个与Emmet语法有部分冲突,使用Tab键时会优先使用插件的代码提示,建议禁用. 组合起来看看效果:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copytable.table-row[role=&#39;table&#39;]&gt;(thead&gt;tr&gt;td{item $@120}*5)+(tbody&gt;tr&gt;(td.item$$@-)lorem10*5)
</code></pre></div><p>这段目的在于生成一个类名为table-row,且自定义了属性role的table标签,内部包含了thead与tbody,分别生成5个td. thead中td的内容是item加上自增序号,自增序号基数从120开始. tbody中td拥有一个名为item加降序自增符号类名,且每个td内容随机填充10个单词.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Copy&lt;table class=&quot;table-row&quot; role=&quot;table&quot;&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;td&gt;item 120&lt;/td&gt;
            &lt;td&gt;item 121&lt;/td&gt;
            &lt;td&gt;item 122&lt;/td&gt;
            &lt;td&gt;item 123&lt;/td&gt;
            &lt;td&gt;item 124&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;
                &lt;td class=&quot;item05&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, assumenda.&lt;/td&gt;
            &lt;/td&gt;
            &lt;td&gt;
                &lt;td class=&quot;item04&quot;&gt;Magnam possimus molestias ipsum animi rem placeat, ut obcaecati laudantium.&lt;/td&gt;
            &lt;/td&gt;
            &lt;td&gt;
                &lt;td class=&quot;item03&quot;&gt;Consequuntur, labore ad optio cupiditate iusto dolores fugit quidem officiis.&lt;/td&gt;
            &lt;/td&gt;
            &lt;td&gt;
                &lt;td class=&quot;item02&quot;&gt;Veniam, explicabo consequuntur blanditiis at dicta fuga ratione eos beatae.&lt;/td&gt;
            &lt;/td&gt;
            &lt;td&gt;
                &lt;td class=&quot;item01&quot;&gt;Fuga voluptatum illo quis ducimus ad eveniet non. Saepe, eveniet.&lt;/td&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
</code></pre></div>`,18);function p(q,m){const a=g("ExternalLinkIcon");return n(),i("div",null,[d,t("blockquote",null,[t("p",null,[l("本文仅介绍了在Html使用Emmet, 如果想Css缩写的语法请参考这里"),t("a",c,[l("https://docs.emmet.io/css-abbreviations/"),u(a)])])]),r])}const v=o(s,[["render",p],["__file","emmet.html.vue"]]);export{v as default};
