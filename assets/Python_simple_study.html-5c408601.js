import{_ as o,M as e,p as c,q as l,R as n,t as s,N as t,a1 as p}from"./framework-d81ad7e5.js";const u={},i=p('<h2 id="_1-1-python是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-python是什么" aria-hidden="true">#</a> 1.1 python是什么</h2><p>Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。</p><ul><li>Python的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。</li><li>Python是一种解释型语言： 这意味着开发过程中没有了编译这个环节。类似于PHP和Perl语言。</li><li>Python是交互式语言： 这意味着，我们可以在一个Python提示符后面直接互动执行写自己的程序。</li><li>Python是面向对象语言: 这意味着Python支持面向对象的风格或代码封装在对象的编程技术。</li><li>Python是初学者的语言：Python简单易学，对初级程序员而言，是一种伟大的语言，它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏。</li></ul><h2 id="_1-2-python的发展" tabindex="-1"><a class="header-anchor" href="#_1-2-python的发展" aria-hidden="true">#</a> 1.2 python的发展</h2><ul><li>Python 是由 Guido van Rossum（龟叔） 在八十年代末和九十年代初，在荷兰国家数学和计算机科学研究所设计出来的。</li></ul><ul><li>Python 本身也是由诸多其他语言发展而来的,这包括 ABC、Modula-3、C、C++、Algol-68、SmallTalk、Unix shell 和其他的脚本语言等等。</li><li>像 Perl 语言一样，Python 源代码同样遵循 GPL(GNU General Public License)协议。</li><li>现在 Python 是由一个核心开发团队在维护，Guido van Rossum 仍然占据着至关重要的作用，指导其进展。</li></ul><h2 id="_1-3-python的特点" tabindex="-1"><a class="header-anchor" href="#_1-3-python的特点" aria-hidden="true">#</a> 1.3 python的特点</h2><ul><li>易于学习：Python有相对较少的关键字，结构简单，和一个明确定义的语法，学习起来更加简单。</li><li>易于阅读：Python代码定义的更清晰。</li><li>易于维护：Python的成功在于它的源代码是相当容易维护的。</li><li>一个广泛的标准库：Python的最大的优势之一是丰富的库，跨平台的，在UNIX，Windows和Macintosh兼容很好。</li><li>互动模式：互动模式的支持，您可以从终端输入执行代码并获得结果的语言，互动的测试和调试代码片断。</li><li>可移植：基于其开放源代码的特性，Python已经被移植（也就是使其工作）到许多平台。</li><li>可扩展：如果你需要一段运行很快的关键代码，或者是想要编写一些不愿开放的算法，你可以使用C或C++完成那部分程序，然后从你的Python程序中调用。</li><li>数据库：Python提供所有主要的商业数据库的接口。</li><li>GUI编程：Python支持GUI可以创建和移植到许多系统调用。</li><li>可嵌入: 你可以将Python嵌入到C/C++程序，让你的程序的用户获得&quot;脚本化&quot;的能力。</li></ul><h1 id="python3安装" tabindex="-1"><a class="header-anchor" href="#python3安装" aria-hidden="true">#</a> Python3安装</h1><h2 id="_2-python3环境的安装-以windows为例" tabindex="-1"><a class="header-anchor" href="#_2-python3环境的安装-以windows为例" aria-hidden="true">#</a> 2 python3环境的安装（以windows为例）</h2><p>第一步，下载python环境安装包</p>',11),k={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},r=n("h2",{id:"_2-anaconda-安装-可选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-anaconda-安装-可选","aria-hidden":"true"},"#"),s(" 2 Anaconda 安装（可选）")],-1),d=n("p",null,"如果是在windows系统中安装，为了更简单地使用python中丰富的库资源，可以直接安装一个python“全家桶”——Anaconda。",-1),h=n("p",null,"Anaconda 是一个python的发行版，包括了python和很多常见的软件库, 和一个包管理器conda。常见的科学计算类的库都包含在里面，使得安装比常规python安装要容易。注意，装了Anaconda就不需要再装python了。",-1),b=n("p",null,"Anaconda不仅可以方便地安装、更新、卸载工具包，而且安装时能自动安装相应的依赖包，同时还能使用不同的虚拟环境隔离不同要求的项目；从而大大简化了工作流程。",-1),m={href:"https://www.anaconda.com/distribution/",target:"_blank",rel:"noopener noreferrer"},y=p(`<p>下载需要的对应版本，安装非常简单，只要跟着引导一步步做就可以了。</p><h1 id="python基本语法" tabindex="-1"><a class="header-anchor" href="#python基本语法" aria-hidden="true">#</a> Python基本语法</h1><h2 id="_3-1-编码" tabindex="-1"><a class="header-anchor" href="#_3-1-编码" aria-hidden="true">#</a> 3.1 编码</h2><ul><li>默认情况下，python3源文件以UTF-8编码，所有字符串都是unicode字符串。同时可以指定源文件的不同编码</li></ul><p>文件开头加上</p><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token comment"># -*- coding: UTF-8 -*-</span>

		<span class="token comment"># coding=utf-8(等号两边不能有空格)</span>
</code></pre></div><ul><li>允许在源文件中使用utf-8字符集中的字符编码，对应的适合语言为中文等。</li></ul><h2 id="_3-2-标识符" tabindex="-1"><a class="header-anchor" href="#_3-2-标识符" aria-hidden="true">#</a> 3.2 标识符</h2><ul><li>第一个字符必须是字母表中的字母或下划线_</li><li>标识符中的其他部分由字母、数字和下划线组成</li><li>标识符对大小写敏感</li><li>在python3中，非ASCII标识符 (如中文字符) 也是允许的</li></ul><h2 id="_3-3-注释" tabindex="-1"><a class="header-anchor" href="#_3-3-注释" aria-hidden="true">#</a> 3.3 注释</h2><p>单行注释：井号 #</p><p>多行注释：三个单引号&#39;&#39;&#39;，或者三个双引号__&quot;&quot;&quot;__</p><h2 id="_3-4-关键子和保留字" tabindex="-1"><a class="header-anchor" href="#_3-4-关键子和保留字" aria-hidden="true">#</a> 3.4 关键子和保留字</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>	<span class="token keyword">import</span> keyword

	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>keyword<span class="token punctuation">.</span>kwlist<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">#33</span>

	<span class="token keyword">print</span><span class="token punctuation">(</span>keyword<span class="token punctuation">.</span>kwlist<span class="token punctuation">)</span>		   <span class="token comment">#打印关键字</span>

	<span class="token punctuation">[</span><span class="token string">&#39;False&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;True&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;as&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;assert&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;break&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;continue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;del&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;elif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;else&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;except&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;finally&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;for&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;from&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;global&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;if&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lambda&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;nonlocal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;not&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;or&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;raise&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;try&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;while&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;with&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yield&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>简介：</p><ol><li><p>and：表示逻辑‘与’</p></li><li><p>del：用于list列表操作，删除一个或者连续几个元素。</p></li><li><p>from：导入相应的模块，用import或者from...import</p></li><li><p>not：表示逻辑‘非’</p></li><li><p>while：while循环，允许重复执行一块语句，一般无限循环的情况下用它</p></li><li><p>as：as单独没有意思，是这样使用：with....as用来代替传统的try...finally语法的。</p></li><li><p>elif:和if配合使用的，if语句中的一个分支用elif表示。</p></li><li><p>global :定义全局变量</p></li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>
		name <span class="token operator">=</span> <span class="token number">10</span>

		age <span class="token operator">=</span> <span class="token number">20</span>

		<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

			<span class="token keyword">global</span> name

			age <span class="token operator">=</span> <span class="token number">30</span>

			name <span class="token operator">=</span> <span class="token string">&#39;aa&#39;</span>

			<span class="token comment">#print(name)</span>

		test<span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>		<span class="token comment"># &#39;aa&#39;</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>		<span class="token comment"># 20</span>
</code></pre></div><ol start="9"><li><p>or：表示逻辑“或”</p></li><li><p>with：和as一起用，使用的方法请看as，见with</p></li><li><p>assert：表示断言（断言一个条件就是真的，如果断言出错则抛出异常）用于声明某个条件为真，如果该条件不是真的，则抛出异常：AssertionError</p></li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>	v1 <span class="token operator">=</span> <span class="token number">10</span>

	v2 <span class="token operator">=</span> <span class="token number">20</span>

	<span class="token keyword">assert</span><span class="token punctuation">(</span>v1 <span class="token operator">&gt;</span> v2<span class="token punctuation">)</span>
</code></pre></div><ol start="12"><li><p>else：参考下面if的解释</p></li><li><p>if：if语句用于选择分支，依据条件选择执行那个语句块。(if语句中最好不要嵌套if语句，建议把嵌套的if语句写在另一个函数中)</p></li><li><p>pass：pass的意思就是什么都不做</p></li><li><p>yield：用起来和return很像，但它返回的是一个生成器</p></li><li><p>break：作用是终止循环，程序走到break的地方就是循环结束的时候。</p></li><li><p>except：和try一起使用，用来捕获异常。</p></li><li><p>import：用来导入模块，有时这样用from....import</p></li><li><p>class：定义类</p></li><li><p>in：查找列表中是否包含某个元素，或者字符串a是否包含字符串b。</p></li><li><p>raise：raise可以显示地引发异常。一旦执行raise语句，后面的代码就不执行了</p></li><li><p>continue：跳过continue后面循环块中的语句，继续进行下一轮循环。</p></li><li><p>finally:看到finally语句，必然执行finally语句的代码块。</p></li><li><p>is：Python中的对象包含三要素：id、type、value,用来判断对象是否相等</p></li><li><p>return：用于跳出函数，也可以在跳出的同时返回一个值。</p></li><li><p>def：用于定义方法</p></li><li><p>for：for....in 一起使用：它在一序列的对象上递归，就是遍历队列中的每个项目</p></li><li><p>lambda:即匿名函数</p></li><li><p>try：出现在异常处理中，使用格式为：try...except，try中放想要执行的语句，except捕获异常</p></li><li><p>nonlocal：nonlocal关键字用来在函数或其他作用域中使用外层(非全局)变量</p></li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>
		<span class="token keyword">def</span> <span class="token function">make_counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 

	    	count <span class="token operator">=</span> <span class="token number">0</span> 

			<span class="token keyword">def</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 

				<span class="token keyword">nonlocal</span> count 

				count <span class="token operator">+=</span> <span class="token number">1</span> 

				<span class="token keyword">return</span> count 

	    	<span class="token keyword">return</span> counter 

		       

		<span class="token keyword">def</span> <span class="token function">make_counter_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 

			mc <span class="token operator">=</span> make_counter<span class="token punctuation">(</span><span class="token punctuation">)</span> 

			<span class="token keyword">print</span><span class="token punctuation">(</span>mc<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span>mc<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span>mc<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

		make_counter_test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_3-5-行和缩进" tabindex="-1"><a class="header-anchor" href="#_3-5-行和缩进" aria-hidden="true">#</a> 3.5 行和缩进</h2><p>学习 Python 与其他语言最大的区别就是，Python的代码块不使用大括号{}来控制类，函数以及其他逻辑判断。python 最具特色的就是用缩进来写模块。</p><p>缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行。</p><pre><code>例如：
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">if</span> <span class="token boolean">True</span><span class="token punctuation">:</span>

			<span class="token keyword">print</span> <span class="token string">&quot;True&quot;</span>

		<span class="token keyword">else</span><span class="token punctuation">:</span>

			<span class="token keyword">print</span> <span class="token string">&quot;False&quot;</span>
</code></pre></div><h2 id="_3-6-多行语句" tabindex="-1"><a class="header-anchor" href="#_3-6-多行语句" aria-hidden="true">#</a> 3.6 多行语句</h2><ul><li>Python语句中一般以新行作为语句的结束符。但是我们可以使用斜杠（ ）将一行的语句分为多行显示，如下所示：</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>		total <span class="token operator">=</span> item_one <span class="token operator">+</span> 

		        item_two <span class="token operator">+</span> 

		        item_three

		<span class="token keyword">print</span><span class="token punctuation">(</span>&#39;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

				aaaaaaaaaaaaaaaaaaaa&#39;<span class="token punctuation">)</span>

		语句中包含 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 或 <span class="token punctuation">(</span><span class="token punctuation">)</span> 括号就不需要使用多行连接符。如下实例：

		days <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Monday&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tuesday&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wednesday&#39;</span><span class="token punctuation">,</span>

				<span class="token string">&#39;Thursday&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Friday&#39;</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="_3-7-python的引号" tabindex="-1"><a class="header-anchor" href="#_3-7-python的引号" aria-hidden="true">#</a> 3.7 python的引号</h2><p>Python 可以使用引号( &#39; )、双引号( &quot; )、三引号( &#39;&#39;&#39; 或 &quot;&quot;&quot; )表示字符串，引号的开始与结束必须的相同类型的。</p><p>其中三引号可以由多行组成，编写多行文本的快捷语法，常用于文档字符串，在文件的特定地点，被当做注释。</p><p>word = &#39;word&#39;</p><p>sentence = &quot;这是一个句子。&quot;</p><p>paragraph = &quot;&quot;&quot;这是一个段落。</p><p>包含了多个语句&quot;&quot;&quot;</p><h2 id="_3-8-python空行" tabindex="-1"><a class="header-anchor" href="#_3-8-python空行" aria-hidden="true">#</a> 3.8 Python空行</h2><ul><li>函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。</li><li>空行与代码缩进不同，空行并不是Python语法的一部分。书写时不插入空行，Python解释器运行也不会出错。</li><li>但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。</li></ul><p>记住：空行也是程序代码的一部分。</p><h2 id="_3-9-等待用户输入" tabindex="-1"><a class="header-anchor" href="#_3-9-等待用户输入" aria-hidden="true">#</a> 3.9 等待用户输入</h2><ul><li>执行下面的程序在按回车键后就会等待用户输入：</li></ul><p><code>input(&quot;nn按下 enter 键后退出。&quot;)</code></p><h2 id="_3-10-同一行显示多条语句" tabindex="-1"><a class="header-anchor" href="#_3-10-同一行显示多条语句" aria-hidden="true">#</a> 3.10 同一行显示多条语句</h2><ul><li>Python可以在同一行中使用多条语句，语句之间使用分号(;)分割，以下是一个简单的实例：</li></ul><p><code>x = &#39;runoob&#39;;print(x + &#39;n&#39;)</code></p><h2 id="_3-11-多个语句构成代码组" tabindex="-1"><a class="header-anchor" href="#_3-11-多个语句构成代码组" aria-hidden="true">#</a> 3.11 多个语句构成代码组</h2><ul><li>缩进相同的一组语句构成一个代码块，我们称之代码组。像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。</li></ul><p>我们将首行及后面的代码组称为一个子句(clause)。</p><p>例如：</p><div class="language-python" data-ext="py"><pre class="language-python"><code>	<span class="token keyword">if</span> expression <span class="token punctuation">:</span> 

		suite

	<span class="token keyword">elif</span> expression <span class="token punctuation">:</span> 

		suite 

	<span class="token keyword">else</span> <span class="token punctuation">:</span> 

		suite
</code></pre></div><h2 id="_3-12-print-输出" tabindex="-1"><a class="header-anchor" href="#_3-12-print-输出" aria-hidden="true">#</a> 3.12 Print 输出</h2><ul><li><p>同类型才可以相加</p></li><li><p><strong>print</strong> 默认输出是换行的，如果要实现不换行需要在变量末尾加上 <strong>end=&quot;&quot;</strong>：</p></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>		x<span class="token operator">=</span><span class="token string">&quot;a&quot;</span>

		y<span class="token operator">=</span><span class="token string">&quot;b&quot;</span>

		<span class="token comment"># 换行输出</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span> x <span class="token punctuation">)</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span> y <span class="token punctuation">)</span>

		 

		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---------&#39;</span><span class="token punctuation">)</span>

		<span class="token comment"># 不换行输出</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span> x<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span> <span class="token punctuation">)</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span> y<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span> <span class="token punctuation">)</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_3-13-import-与-from-import" tabindex="-1"><a class="header-anchor" href="#_3-13-import-与-from-import" aria-hidden="true">#</a> 3.13 import 与 from...import</h2><p>在 python 用 import 或者 <code>from...import</code> 来导入相应的模块。</p><ul><li><p>将整个模块(somemodule)导入，格式为： import somemodule</p></li><li><p>从某个模块中导入某个函数,格式为： from somemodule import somefunction</p></li><li><p>从某个模块中导入多个函数,格式为： from somemodule import firstfunc, secondfunc, thirdfunc</p></li><li><p>将某个模块中的全部函数导入，格式为： from somemodule import *</p></li></ul><ol><li>导入 sys 模块</li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">import</span> sys

		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;================Python  import  mode==================&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&#39;命令行参数为:&#39;</span><span class="token punctuation">)</span>

		<span class="token keyword">for</span> i <span class="token keyword">in</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">:</span>

		    <span class="token keyword">print</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span>

		<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&#39;n python 路径为&#39;</span><span class="token punctuation">,</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span>

</code></pre></div><ol><li><strong>导入 sys 模块的 argv,path 成员</strong></li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sys <span class="token keyword">import</span> argv<span class="token punctuation">,</span>path  <span class="token comment">#  导入特定的成员	 </span>

	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;================python  from  import=====================&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;path:&#39;</span><span class="token punctuation">,</span>path<span class="token punctuation">)</span>  <span class="token comment"># 因为已经导入path成员，所以引用不需要加sys.path</span>
</code></pre></div><h2 id="_3-14-命令行参数" tabindex="-1"><a class="header-anchor" href="#_3-14-命令行参数" aria-hidden="true">#</a> 3.14 命令行参数</h2><ul><li>很多程序可以执行一些操作来查看一些基本信息，Python可以使用-h参数查看各参数帮助信息：</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>	$ python <span class="token operator">-</span>h		

usage<span class="token punctuation">:</span> python <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token operator">-</span>c cmd <span class="token operator">|</span> <span class="token operator">-</span>m mod <span class="token operator">|</span> <span class="token builtin">file</span> <span class="token operator">|</span> <span class="token operator">-</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>arg<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

	Options <span class="token keyword">and</span> arguments <span class="token punctuation">(</span><span class="token keyword">and</span> corresponding environment variables<span class="token punctuation">)</span><span class="token punctuation">:</span>

	<span class="token operator">-</span>c cmd <span class="token punctuation">:</span> program passed <span class="token keyword">in</span> <span class="token keyword">as</span> string <span class="token punctuation">(</span>terminates option <span class="token builtin">list</span><span class="token punctuation">)</span>

	<span class="token operator">-</span>d     <span class="token punctuation">:</span> debug output <span class="token keyword">from</span> parser <span class="token punctuation">(</span>also PYTHONDEBUG<span class="token operator">=</span>x<span class="token punctuation">)</span>

	<span class="token operator">-</span>E     <span class="token punctuation">:</span> ignore environment variables <span class="token punctuation">(</span>such <span class="token keyword">as</span> PYTHONPATH<span class="token punctuation">)</span>

	<span class="token operator">-</span>h     <span class="token punctuation">:</span> <span class="token keyword">print</span> this <span class="token builtin">help</span> message <span class="token keyword">and</span> exit
</code></pre></div><h1 id="_4-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_4-基本数据类型" aria-hidden="true">#</a> 4. 基本数据类型</h1><h2 id="_4-1-变量赋值" tabindex="-1"><a class="header-anchor" href="#_4-1-变量赋值" aria-hidden="true">#</a> 4.1 变量赋值</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		counter <span class="token operator">=</span> <span class="token number">100</span>		<span class="token comment"># 整型变量</span>

		miles <span class="token operator">=</span> <span class="token number">1000.0</span>		<span class="token comment"># 浮点型变量</span>

		name <span class="token operator">=</span> <span class="token string">&quot;runoob&quot;</span>		<span class="token comment"># 字符串</span>

 

		<span class="token keyword">print</span> <span class="token punctuation">(</span>counter<span class="token punctuation">)</span>

		<span class="token keyword">print</span> <span class="token punctuation">(</span>miles<span class="token punctuation">)</span>

		<span class="token keyword">print</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre></div><h2 id="_4-2-多变量赋值" tabindex="-1"><a class="header-anchor" href="#_4-2-多变量赋值" aria-hidden="true">#</a> 4.2 多变量赋值</h2><p>Python允许你同时为多个变量赋值。例如：</p><div class="language-python" data-ext="py"><pre class="language-python"><code>	a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>

以上实例，创建一个整型对象，值为 <span class="token number">1</span>，从后向前赋值，三个变量被赋予相同的数值。

可以为多个对象指定多个变量。例如：

	a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;runoob&quot;</span>

	a<span class="token punctuation">,</span>b <span class="token operator">=</span> b<span class="token punctuation">,</span>a  			<span class="token comment"># 变量的交换</span>

以上实例，两个整型对象 <span class="token number">1</span> 和 <span class="token number">2</span> 的分配给变量 a 和 b，字符串对象 <span class="token string">&quot;runoob&quot;</span> 分配给变量 c。

注意：

	a <span class="token operator">=</span> <span class="token number">10</span>

	b <span class="token operator">=</span> <span class="token number">20</span>

	a<span class="token punctuation">,</span>b <span class="token operator">=</span> b<span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">5</span>

	<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>

结果：a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">15</span>
</code></pre></div><h2 id="_4-3-标准数据类型" tabindex="-1"><a class="header-anchor" href="#_4-3-标准数据类型" aria-hidden="true">#</a> 4.3 标准数据类型</h2><p>Number（数字）、String（字符串）、List（列表）、Tuple（元组）、Set（集合）、Dictionary（字典）</p><ul><li>不可变数据（3 个）：Number（数字）、String（字符串）、Tuple（元组）</li></ul><ul><li>可变数据（3 个）：List（列表）、Dictionary（字典）、Set（集合）</li></ul><h2 id="_4-4-number" tabindex="-1"><a class="header-anchor" href="#_4-4-number" aria-hidden="true">#</a> 4.4 Number</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>	<span class="token builtin">int</span>、<span class="token builtin">float</span>、<span class="token builtin">bool</span>、<span class="token builtin">complex</span><span class="token punctuation">(</span>复数<span class="token punctuation">)</span>

	例如：

		a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">5.5</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token operator">+</span><span class="token number">4j</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_4-1-1-函数" tabindex="-1"><a class="header-anchor" href="#_4-1-1-函数" aria-hidden="true">#</a> 4.1.1 函数</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>				<span class="token comment"># 判断数据类型</span>

		<span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">)</span>	   <span class="token comment"># 判断数据是否属于某类型</span>

		<span class="token keyword">del</span> var1<span class="token punctuation">,</span>var2		<span class="token comment"># 手动GC</span>

	

区别<span class="token punctuation">:</span>

		<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>不会认为子类是一种父类类型

		<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>会认为子类是一种父类类型

		例如：

			<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>

				<span class="token keyword">pass</span>

			<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">:</span>

				<span class="token keyword">pass</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>A<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> A<span class="token punctuation">)</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>B<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> A<span class="token punctuation">)</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>B<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>B<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_4-1-2-进制" tabindex="-1"><a class="header-anchor" href="#_4-1-2-进制" aria-hidden="true">#</a> 4.1.2 进制</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>二进制：使用0b开头	例如：0b1010

八进制：使用0o开头	例如：0o555

十六进制：0x开头		例如：0x52A74（大小写都OK）
</code></pre></div><p>python中没有数字的大小限制，可以使用任意大的数字；python可以保证整数运算的精确，但是浮点数运算时可能会得到一个不精确的结果。</p><h3 id="_4-1-3-数学函数" tabindex="-1"><a class="header-anchor" href="#_4-1-3-数学函数" aria-hidden="true">#</a> 4.1.3 数学函数</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>	<span class="token keyword">import</span> math

	<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 基本数学函数

		__函数					返回值 <span class="token punctuation">(</span> 描述 <span class="token punctuation">)</span>__

		<span class="token builtin">abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回数字的绝对值，如<span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span> 返回 <span class="token number">10</span>

		ceil<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回数字的上入整数，如math<span class="token punctuation">.</span>ceil<span class="token punctuation">(</span><span class="token number">4.1</span><span class="token punctuation">)</span> 返回 <span class="token number">5</span>

		<span class="token punctuation">(</span>x<span class="token operator">&gt;</span>y<span class="token punctuation">)</span><span class="token operator">-</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span>y<span class="token punctuation">)</span> 		   如果 x <span class="token operator">&lt;</span> y 返回 <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> 如果 x <span class="token operator">==</span> y 返回 <span class="token number">0</span><span class="token punctuation">,</span> 

如果 x <span class="token operator">&gt;</span> y 返回 <span class="token number">1</span>

		exp<span class="token punctuation">(</span>x<span class="token punctuation">)</span>			   返回e的x次幂<span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">,</span>

如math<span class="token punctuation">.</span>exp<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 返回<span class="token number">2.718281828459045</span>

		fabs<span class="token punctuation">(</span>x<span class="token punctuation">)</span>			   返回数字的绝对值，如math<span class="token punctuation">.</span>fabs<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span> 返回<span class="token number">10.0</span>

		floor<span class="token punctuation">(</span>x<span class="token punctuation">)</span>			   返回数字的下舍整数，如math<span class="token punctuation">.</span>floor<span class="token punctuation">(</span><span class="token number">4.9</span><span class="token punctuation">)</span>返回 <span class="token number">4</span>

		log<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				如math<span class="token punctuation">.</span>log<span class="token punctuation">(</span>math<span class="token punctuation">.</span>e<span class="token punctuation">)</span>返回<span class="token number">1.0</span><span class="token punctuation">,</span>math<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>返回<span class="token number">2.0</span>

		log10<span class="token punctuation">(</span>x<span class="token punctuation">)</span>			   返回以<span class="token number">10</span>为基数的x的对数，

如math<span class="token punctuation">.</span>log10<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>返回 <span class="token number">2.0</span>

		<span class="token builtin">max</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>		返回给定参数的最大值，参数可以为序列。

		<span class="token builtin">min</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>		返回给定参数的最小值，参数可以为序列。

		modf<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回x的整数部分与小数部分，

两部分的数值符号与x相同，

整数部分以浮点型表示。

		<span class="token builtin">pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>			x<span class="token operator">**</span>y 运算后的值。

		<span class="token builtin">round</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">,</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>		   返回浮点数x的四舍五入值，如给出n值，

则代表舍入到小数点后的位数。

		sqrt<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回数字x的平方根。

	<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 随机数函数

		随机数可以用于数学，游戏，安全等领域中，还经常被嵌入到算法中，用以提高算法效率，并提高程序的安全性。

	__函数					    描述__

	choice<span class="token punctuation">(</span>seq<span class="token punctuation">)</span>			       从序列的元素中随机挑选一个元素，

比如random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>，

从<span class="token number">0</span>到<span class="token number">9</span>中随机挑选一个整数。

	randrange <span class="token punctuation">(</span><span class="token punctuation">[</span>start<span class="token punctuation">,</span><span class="token punctuation">]</span> stop <span class="token punctuation">[</span><span class="token punctuation">,</span>step<span class="token punctuation">]</span><span class="token punctuation">)</span>	从指定范围内，按指定基数递增的集合

中获取一个随机数，基数缺省值为<span class="token number">1</span>

	random<span class="token punctuation">(</span><span class="token punctuation">)</span>			       随机生成下一个实数，它在<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>范围内。

	seed<span class="token punctuation">(</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>			       改变随机数生成器的种子seed。

如果你不了解其原理，你不必特别去设定seed，

Python会帮你选择seed。

	shuffle<span class="token punctuation">(</span>lst<span class="token punctuation">)</span>		          将序列的所有元素随机排序

	uniform<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>		          随机生成下一个实数，它在<span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">]</span>范围内。

	<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 三角函数

	__函数					描述__

acos<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回x的反余弦弧度值。

	asin<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回x的反正弦弧度值。

	atan<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回x的反正切弧度值。

	atan2<span class="token punctuation">(</span>y<span class="token punctuation">,</span> x<span class="token punctuation">)</span>			返回给定的 X 及 Y 坐标值的反正切值。

	cos<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回x的弧度的余弦值。

	hypot<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>			返回欧几里德范数 sqrt<span class="token punctuation">(</span>x<span class="token operator">*</span>x <span class="token operator">+</span> y<span class="token operator">*</span>y<span class="token punctuation">)</span>。

	sin<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回的x弧度的正弦值。

	tan<span class="token punctuation">(</span>x<span class="token punctuation">)</span>				返回x弧度的正切值。

	degrees<span class="token punctuation">(</span>x<span class="token punctuation">)</span>			将弧度转换为角度<span class="token punctuation">,</span>如degrees<span class="token punctuation">(</span>math<span class="token punctuation">.</span>pi<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span> ， 返回<span class="token number">90.0</span>

	radians<span class="token punctuation">(</span>x<span class="token punctuation">)</span>			将角度转换为弧度

	<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 数学常量

	__常量					描述__

	pi					数学常量 pi（圆周率，一般以π来表示）

	e					数学常量 e，e即自然常数（自然常数）。
</code></pre></div><h2 id="_4-5-string" tabindex="-1"><a class="header-anchor" href="#_4-5-string" aria-hidden="true">#</a> 4.5 String</h2><ul><li><p>Python中的字符串用单引号 &#39; 或双引号 &quot; 括起来，同时使用反斜杠 转义特殊字符。下标从0开始。</p></li><li><p>加号 + 是字符串的连接符， 星号 * 表示复制当前字符串，紧跟的数字为复制的次数。</p></li></ul><ol><li>字符串截取</li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>		变量<span class="token punctuation">[</span>头下标<span class="token punctuation">:</span>尾下标<span class="token punctuation">:</span>步长<span class="token punctuation">)</span>

			<span class="token operator">-</span><span class="token number">6</span>  <span class="token operator">-</span><span class="token number">5</span>  <span class="token operator">-</span><span class="token number">4</span>  <span class="token operator">-</span><span class="token number">3</span>  <span class="token operator">-</span><span class="token number">2</span>  <span class="token operator">-</span><span class="token number">1</span>

			 <span class="token number">0</span>  <span class="token number">1</span>   <span class="token number">2</span>  <span class="token number">3</span>   <span class="token number">4</span>   <span class="token number">5</span>

			<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>

			<span class="token operator">|</span> a <span class="token operator">|</span> b <span class="token operator">|</span> c <span class="token operator">|</span> d <span class="token operator">|</span> e <span class="token operator">|</span> f <span class="token operator">|</span>

			<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>

			例如：

				<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>

				l <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span>

				<span class="token keyword">print</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
</code></pre></div><ol><li><p>字符串打印</p><p>Python 使用反斜杠()转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 r，表示原始字符串：</p><pre><code> print(&#39;Runoob&#39;)

 Ru

 oob

 print(r&#39;Runoob&#39;)

 Runoob
</code></pre></li><li><p>字符串获取</p><pre><code> print(str[0])
</code></pre><p>注意：</p><pre><code> 1、反斜杠可以用来转义，使用r可以让反斜杠不发生转义。

 2、字符串可以用+运算符连接在一起，用*运算符重复。

 3、Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。

 4、Python中的字符串不能改变。

 	str = &#39;abcdef&#39;

 	str[0] = &#39;s&#39;	# 报错

 5、Python 没有单独的字符类型，一个字符就是长度为1的字符串。
</code></pre></li></ol><h2 id="_4-6-list" tabindex="-1"><a class="header-anchor" href="#_4-6-list" aria-hidden="true">#</a> 4.6 List</h2><pre><code>List（列表）是Python 中使用最频繁的数据类型。列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表(所谓嵌套)。列表是写在方括号[]之间、用逗号分隔开的元素列表。和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>	定义：

		<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>

		<span class="token builtin">list</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>			<span class="token comment"># 0</span>

		<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>		<span class="token comment"># 长度5</span>

		<span class="token builtin">list</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>		<span class="token comment"># [0,1,2]</span>

	注意：

		<span class="token number">1</span>、List写在方括号之间，元素用逗号隔开。

		<span class="token number">2</span>、和字符串一样，<span class="token builtin">list</span>可以被索引和切片。

		<span class="token number">3</span>、List可以使用<span class="token operator">+</span>操作符进行拼接。

		<span class="token number">4</span>、List中的元素是可以改变的。

		<span class="token number">5</span>、不支持与或非运算
</code></pre></div><h2 id="_4-7-tuple" tabindex="-1"><a class="header-anchor" href="#_4-7-tuple" aria-hidden="true">#</a> 4.7 Tuple</h2><pre><code>元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 () 里，元素之间用逗号隔开。
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>	定义：

		t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>

		t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>			<span class="token comment"># 0</span>

		<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>		<span class="token comment"># 长度5</span>

		t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>			<span class="token comment"># (0,1,2)</span>

		t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>		<span class="token comment"># 报错</span>

	注意：

		<span class="token number">1</span>、与字符串一样，元组的元素不能修改。虽然<span class="token builtin">tuple</span>的元素不可改变，但它可以包含可变的对象，比如<span class="token builtin">list</span>列表。

	    	<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>

			t <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token builtin">list</span><span class="token punctuation">)</span>

			t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>			<span class="token comment"># 报错</span>

			t<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>			<span class="token comment"># ok</span>

		<span class="token number">2</span>、元组也可以被索引和切片，方法一样。

		<span class="token number">3</span>、注意构造包含<span class="token number">0</span>或<span class="token number">1</span>个元素的元组的特殊语法规则。

			tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>			<span class="token comment"># 空元组</span>

			tup2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token punctuation">)</span>		<span class="token comment"># 一个元素，需要在元素后添加逗号</span>

		<span class="token number">4</span>、元组也可以使用 <span class="token operator">+</span> 或 <span class="token operator">*</span> 操作符进行拼接。
</code></pre></div><h2 id="_4-8-set" tabindex="-1"><a class="header-anchor" href="#_4-8-set" aria-hidden="true">#</a> 4.8 Set</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>	集合（<span class="token builtin">set</span>）是由一个。合的事物或对象称作元素或是成员。基本功能是进行成员关系测试和删除重复元素。

	可以使用大括号 <span class="token punctuation">{</span> <span class="token punctuation">}</span> 或者 <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 函数创建集合，注意：创建一个空集合必须用 <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 而不是 <span class="token punctuation">{</span> <span class="token punctuation">}</span>，因为 <span class="token punctuation">{</span> <span class="token punctuation">}</span> 是用来创建一个空字典。

	创建格式：

		parame <span class="token operator">=</span> <span class="token punctuation">{</span>value01<span class="token punctuation">,</span>value02<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span> 或者 <span class="token builtin">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

		s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jim&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Mary&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">}</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>					<span class="token comment"># {&#39;Mary&#39;, &#39;Jack&#39;, &#39;Rose&#39;, &#39;Tom&#39;, &#39;Jim&#39;}</span>

		s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;1b1b2b3b2b&#39;</span><span class="token punctuation">)</span>		<span class="token comment"># {&#39;2&#39;, &#39;3&#39;, &#39;1&#39;, &#39;b&#39;}</span>

		<span class="token builtin">set</span>操作：

			<span class="token comment"># set可以进行集合运算</span>

			a <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">)</span>

			b <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;alacazam&#39;</span><span class="token punctuation">)</span>

			 

			<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

			<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">}</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span>     <span class="token comment"># a和b的差集</span>

			<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">}</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">|</span> b<span class="token punctuation">)</span>     <span class="token comment"># a和b的并集</span>

			<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">}</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span>     <span class="token comment"># a和b的交集</span>

			<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">^</span> b<span class="token punctuation">)</span>     <span class="token comment"># a和b中不同时存在的元素</span>

			<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="_4-9-dictionary-字典" tabindex="-1"><a class="header-anchor" href="#_4-9-dictionary-字典" aria-hidden="true">#</a> 4.9 Dictionary（字典）</h2><pre><code>	字典（dictionary）是Python中另一个非常有用的内置数据类型。

	列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。

	字典是一种映射类型，字典用&quot;{ }&quot;标识，它是一个无序的键(key) : 值(value)对集合。

	键(key)必须使用不可变类型。

	在同一个字典中，键(key)必须是唯一的。

	字典创建：
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>			<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">}</span>

			<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> d <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Taobao&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

			<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> d <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token punctuation">:</span>x<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

			<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> d <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>Runoob<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> Google<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> Taobao<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>

		字典操作：

			tinydict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;guigu&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;site&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;www.atguigu.com&#39;</span><span class="token punctuation">}</span>

 

			<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>			<span class="token comment"># 输出键为 &#39;name&#39; 的值</span>

			<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>			<span class="token comment"># 输出键为 &#39;code&#39; 的值</span>

			<span class="token keyword">print</span> <span class="token punctuation">(</span>tinydict<span class="token punctuation">)</span>				<span class="token comment"># 输出完整的字典</span>

			<span class="token keyword">print</span> <span class="token punctuation">(</span>tinydict<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>			<span class="token comment"># 输出所有键	dict_keys([&#39;name&#39;, &#39;code&#39;, &#39;site&#39;])</span>

			<span class="token keyword">print</span> <span class="token punctuation">(</span>tinydict<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>		<span class="token comment"># 输出所有值 dict_values([&#39;guigu&#39;, 1, &#39;www.atguigu.com&#39;])</span>
</code></pre></div><h2 id="_4-10-python类型转换" tabindex="-1"><a class="header-anchor" href="#_4-10-python类型转换" aria-hidden="true">#</a> 4.10 python类型转换</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		函数                      	描述

		<span class="token builtin">int</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">,</span>base<span class="token punctuation">]</span><span class="token punctuation">)</span>				将x转换为一个整数

		<span class="token builtin">float</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>					将x转换到一个浮点数

		<span class="token builtin">complex</span><span class="token punctuation">(</span>real <span class="token punctuation">[</span><span class="token punctuation">,</span>imag<span class="token punctuation">]</span><span class="token punctuation">)</span>		创建一个复数

		<span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>					将对象 x 转换为字符串

		<span class="token builtin">repr</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>					将对象 x 转换为表达式字符串

		<span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>					用来计算在字符串中的有效Python表达式<span class="token punctuation">,</span>

并返回一个对象

		<span class="token builtin">tuple</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>					将序列 s 转换为一个元组

		<span class="token builtin">list</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>					将序列 s 转换为一个列表

		<span class="token builtin">set</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>					转换为可变集合

		<span class="token builtin">dict</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>					创建一个字典，

d 必须是一个序列 <span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span>元组。

		<span class="token builtin">frozenset</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>				转换为不可变集合

		<span class="token builtin">chr</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>					将一个整数转换为一个字符（ASCII码）

		<span class="token builtin">ord</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>					将一个字符转换为它的ASCII码值

		<span class="token builtin">hex</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>					将一个整数转换为一个十六进制字符串

		<span class="token builtin">oct</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>					将一个整数转换为一个八进制字符串
</code></pre></div><h1 id="_5-python解释器" tabindex="-1"><a class="header-anchor" href="#_5-python解释器" aria-hidden="true">#</a> 5. python解释器</h1><pre><code>Linux/Unix的系统上，一般默认的 python 版本为 2.x，我们可以将 python3.x 安装在 /usr/local/python3 目录中。

安装完成后，我们可以将路径 /usr/local/python3/bin 添加到您的 Linux/Unix 操作系统的环境变量中，这样您就可以通过 shell 终端输入下面的命令来启动 Python3 。

$ PATH=$PATH:/usr/local/python3/bin/python3    # 设置环境变量

$ python3 --version

Python 3.4.0
</code></pre><h2 id="_5-1-环境变量设置" tabindex="-1"><a class="header-anchor" href="#_5-1-环境变量设置" aria-hidden="true">#</a> 5.1 环境变量设置</h2><p>在Window系统下你可以通过以下命令来设置Python的环境变量，假设你的Python安装在 C:Python34 下:</p><pre><code>	set path=%path%;C:python34
</code></pre><h2 id="_5-2-交互式编程" tabindex="-1"><a class="header-anchor" href="#_5-2-交互式编程" aria-hidden="true">#</a> 5.2 交互式编程</h2><pre><code>我们可以在命令提示符中输入&quot;python&quot;（或者&quot;python3&quot;，具体视安装时的命令名称而定）命令来启动Python解释器：

	$ python3
</code></pre><ol><li>执行以上命令后，出现如下窗口信息：</li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>		$ python3

		Python <span class="token number">3.4</span><span class="token number">.0</span> <span class="token punctuation">(</span>default<span class="token punctuation">,</span> Apr <span class="token number">11</span> <span class="token number">2014</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">:</span><span class="token number">05</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">)</span> 

		<span class="token punctuation">[</span>GCC <span class="token number">4.8</span><span class="token number">.2</span><span class="token punctuation">]</span> on linux

		Type <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;copyright&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;credits&quot;</span> <span class="token keyword">or</span> <span class="token string">&quot;license&quot;</span> <span class="token keyword">for</span> more information<span class="token punctuation">.</span>

		<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 
</code></pre></div><ol><li><p>在 python 提示符中输入以下语句，然后按回车键查看运行效果：</p><pre><code> print (&quot;Hello, Python!&quot;);
</code></pre></li><li><p>以上命令执行结果如下：</p><pre><code> Hello, Python!
</code></pre></li><li><p>当键入一个多行结构时，续行是必须的。我们可以看下如下 if 语句：</p></li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> flag <span class="token operator">=</span> <span class="token boolean">True</span>

		<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">if</span> flag <span class="token punctuation">:</span>

		<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;flag 条件为 True!&quot;</span><span class="token punctuation">)</span>

		<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 

		flag 条件为 <span class="token boolean">True</span>!
</code></pre></div><h2 id="_5-3-脚本式编程" tabindex="-1"><a class="header-anchor" href="#_5-3-脚本式编程" aria-hidden="true">#</a> 5.3 脚本式编程</h2><pre><code>(1) 将如下代码拷贝至 hello.py文件中：

	print (&quot;Hello, Python!&quot;);
</code></pre><ol><li><p>通过以下命令执行该脚本：</p><pre><code> python3 hello.py
</code></pre></li><li><p>输出结果为：</p><pre><code> Hello, Python!
</code></pre></li><li><p>在Linux/Unix系统中，你可以在脚本顶部添加以下命令让Python脚本可以像SHELL脚本一样可直接执行：</p><pre><code> #! /usr/bin/env python3
</code></pre></li><li><p>然后修改脚本权限，使其有执行权限，命令如下：</p><pre><code> $ chmod +x hello.py
</code></pre></li><li><p>执行以下命令：</p><pre><code> ./hello.py
</code></pre></li><li><p>输出结果为：</p><pre><code> Hello, Python!
</code></pre></li></ol><h1 id="_6-运算符" tabindex="-1"><a class="header-anchor" href="#_6-运算符" aria-hidden="true">#</a> 6. 运算符</h1><h2 id="_6-1-算术运算符" tabindex="-1"><a class="header-anchor" href="#_6-1-算术运算符" aria-hidden="true">#</a> 6.1 算术运算符</h2><pre><code>	a = 10	b = 21

	运算符			描述				实例

	+				加				两个对象相加；
</code></pre><p>a + b 输出结果 31</p><pre><code>	-				减				得到负数或是一个数减去另一个数；
</code></pre><p>a - b 输出结果 -11</p><pre><code>	*				乘				两个数相乘或是返回一个被重复若干次
</code></pre><p>的字符串；</p><p>a * b 输出结果 210</p><pre><code>	/				除				x 除以 y；
</code></pre><p>b / a 输出结果 2.1</p><pre><code>	%				取模			返回除法的余数；
</code></pre><p>b % a 输出结果 1</p><pre><code>	**				幂				返回x的y次幂	；
</code></pre><p>a**b 为10的21次方</p><pre><code>	//				取整除			向下取接近除数的整数	；
</code></pre><p>9//2 # 4</p><pre><code>									-9//2	#-5
</code></pre><h2 id="_6-2-比较运算符" tabindex="-1"><a class="header-anchor" href="#_6-2-比较运算符" aria-hidden="true">#</a> 6.2 比较运算符</h2><pre><code>	a = 10	b = 20

	运算符			描述				实例

	==				等于				比较对象是否相等			
</code></pre><p>(a == b) 返回 False</p><pre><code>	!=				不等于				比较两个对象是否不相等	
</code></pre><p>(a != b) 返回 True</p><pre><code>	&gt;				大于				返回x是否大于y			
</code></pre><p>(a &gt; b) 返回 False</p><pre><code>	&lt;				小于				返回x是否小于y			
</code></pre><p>(a &lt; b) 返回 True</p><pre><code>	&gt;=				大于等于			返回x是否大于等于y		
</code></pre><p>(a &gt;= b) 返回 False</p><pre><code>	&lt;=				小于等于			返回x是否小于等于y		
</code></pre><p>(a &lt;= b) 返回 True</p><pre><code>	注意：所有比较运算符返回1表示真，返回0表示假。这分别与特殊的变量True和False等价。注意，这些变量名的大写。
</code></pre><h2 id="_6-3-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_6-3-赋值运算符" aria-hidden="true">#</a> 6.3 赋值运算符</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>	运算符			描述				实例

	<span class="token operator">=</span>				简单的赋值运算符	c <span class="token operator">=</span> a <span class="token operator">+</span> b将a <span class="token operator">+</span> b的运算结果赋值为 c	<span class="token operator">+=</span>				加法赋值运算符	c <span class="token operator">+=</span> a 等效于 	c <span class="token operator">=</span> c <span class="token operator">+</span> a

	<span class="token operator">-=</span>				减法赋值运算符	c <span class="token operator">-=</span> a 等效于 	c <span class="token operator">=</span> c <span class="token operator">-</span> a

	<span class="token operator">*=</span>				乘法赋值运算符	c <span class="token operator">*=</span> a 等效于 	c <span class="token operator">=</span> c <span class="token operator">*</span> a

	<span class="token operator">/=</span>				除法赋值运算符	c <span class="token operator">/=</span> a 等效于 	c <span class="token operator">=</span> c <span class="token operator">/</span> a

	<span class="token operator">%=</span>				取模赋值运算符	c <span class="token operator">%=</span> a 等效于 	c <span class="token operator">=</span> c <span class="token operator">%</span> a

	<span class="token operator">**=</span>				幂赋值运算符		c <span class="token operator">**=</span> a 等效于 	c <span class="token operator">=</span> c <span class="token operator">**</span> a

	<span class="token operator">//=</span>				取整除赋值运算符	c <span class="token operator">//=</span> a 等效于 	c <span class="token operator">=</span> c <span class="token operator">//</span> a
</code></pre></div><h2 id="_6-4-位运算符" tabindex="-1"><a class="header-anchor" href="#_6-4-位运算符" aria-hidden="true">#</a> 6.4 位运算符</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>	a <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">,</span>  b <span class="token operator">=</span> <span class="token number">13</span>

   二进制形式：a <span class="token operator">=</span> <span class="token number">0011</span> <span class="token number">1100</span><span class="token punctuation">,</span>  b <span class="token operator">=</span> <span class="token number">0000</span> <span class="token number">1101</span>

运算符			描述				实例

		<span class="token operator">&amp;</span>				按位与运算符		<span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> 输出结果 <span class="token number">12</span> ，

二进制解释： <span class="token number">0000</span> <span class="token number">1100</span>

		<span class="token operator">|</span>				按位或运算符		<span class="token punctuation">(</span>a <span class="token operator">|</span> b<span class="token punctuation">)</span> 输出结果 <span class="token number">61</span> ，

二进制解释： <span class="token number">0011</span> <span class="token number">1101</span>

		<span class="token operator">^</span>				按位异或运算符	<span class="token punctuation">(</span>a <span class="token operator">^</span> b<span class="token punctuation">)</span> 输出结果 <span class="token number">49</span> ，

二进制解释： <span class="token number">0011</span> <span class="token number">0001</span>

		<span class="token operator">~</span>				按位取反运算符	<span class="token punctuation">(</span><span class="token operator">~</span>a <span class="token punctuation">)</span> 输出结果 <span class="token operator">-</span><span class="token number">61</span> ，

二进制解释： <span class="token number">1100</span> <span class="token number">0011</span>

		<span class="token operator">&lt;&lt;</span>				左移动运算符		a <span class="token operator">&lt;&lt;</span> <span class="token number">2</span> 输出结果 <span class="token number">240</span> ，

二进制解释： <span class="token number">1111</span> <span class="token number">0000</span>

		<span class="token operator">&gt;&gt;</span>				右移动运算符		a <span class="token operator">&gt;&gt;</span> <span class="token number">2</span> 输出结果 <span class="token number">15</span> ，

二进制解释：<span class="token number">0000</span> <span class="token number">1111</span>
</code></pre></div><h2 id="_6-5-逻辑运算符-bool" tabindex="-1"><a class="header-anchor" href="#_6-5-逻辑运算符-bool" aria-hidden="true">#</a> 6.5 逻辑运算符(bool)</h2><pre><code>	a = 10, b = 20

	运算符			逻辑表达式	描述		实例

	and	x and y		布尔&quot;与&quot;			如果x为 False，x and y 返回False，
</code></pre><p>否则它返回y的计算值</p><p>(a and b) 返回 20</p><pre><code>	or	x or y		布尔&quot;或&quot;			如果x是 True，它返回x的值，
</code></pre><p>否则它返回y的计算值 (a or b) 返回 10</p><pre><code>	not	not x		布尔&quot;非&quot;			如果x为 True，返回False 。
</code></pre><p>如果x为False，它返回True not(a and b) 返回 False</p><h2 id="_6-6-成员运算符" tabindex="-1"><a class="header-anchor" href="#_6-6-成员运算符" aria-hidden="true">#</a> 6.6 成员运算符</h2><pre><code>除了以上的一些运算符之外，Python还支持成员运算符，测试实例中包含了一系列的成员，包括字符串，列表或元组。

	运算符		描述					实例

	in			如果在指定的序列中找到值返回 True，否则返回 False
</code></pre><p>x在y序列中,如果x在y序列中返回True</p><pre><code>	not in		如果在指定的序列中没有找到值返回 True，否则返回 False
</code></pre><p>x不在y序列中,如果x不在y序列中返回True</p><h2 id="_6-7-身份运算符" tabindex="-1"><a class="header-anchor" href="#_6-7-身份运算符" aria-hidden="true">#</a> 6.7 身份运算符</h2><pre><code>	身份运算符用于比较两个对象的存储单元
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>		运算符			描述			实例

		<span class="token keyword">is</span>				<span class="token keyword">is</span>是判断两个标识符是不是引用自一个对象	

						x <span class="token keyword">is</span> y<span class="token punctuation">,</span> 类似 <span class="token builtin">id</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">id</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">,</span> 如果引用的是同一个对象则返回 <span class="token boolean">True</span>，否则返回 <span class="token boolean">False</span>

		<span class="token keyword">is</span> <span class="token keyword">not</span>			<span class="token keyword">is</span> <span class="token keyword">not</span>是判断两个标识符是不是引用自不同对象

						x <span class="token keyword">is</span> <span class="token keyword">not</span> y ， 类似<span class="token builtin">id</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">!=</span><span class="token builtin">id</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>。如果引用的不是同一个对象则返回结果<span class="token boolean">True</span>，否则返回<span class="token boolean">False</span>。
</code></pre></div><h2 id="_6-8-python运算符优先级" tabindex="-1"><a class="header-anchor" href="#_6-8-python运算符优先级" aria-hidden="true">#</a> 6.8 Python运算符优先级</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>	以下表格列出了从最高到最低优先级的所有运算符：

		运算符						描述

		<span class="token operator">**</span>							指数 <span class="token punctuation">(</span>最高优先级<span class="token punctuation">)</span>

		<span class="token operator">~</span> <span class="token operator">+</span> <span class="token operator">-</span>						按位翻转<span class="token punctuation">,</span> 一元加号和减号 <span class="token punctuation">(</span>最后两个的方法名为 <span class="token operator">+</span>@ 和 <span class="token operator">-</span>@<span class="token punctuation">)</span>

		<span class="token operator">*</span> <span class="token operator">/</span> <span class="token operator">%</span> <span class="token operator">//</span>					乘，除，取模和取整除

		<span class="token operator">+</span> <span class="token operator">-</span>							加法减法

		<span class="token operator">&gt;&gt;</span> <span class="token operator">&lt;&lt;</span>						右移，左移运算符

		<span class="token operator">&amp;</span>							位 <span class="token string">&#39;AND&#39;</span>

		<span class="token operator">^</span> <span class="token operator">|</span>							位运算符

		<span class="token operator">&lt;=</span> <span class="token operator">&lt;</span> <span class="token operator">&gt;</span> <span class="token operator">&gt;=</span>					比较运算符

		<span class="token operator">&lt;&gt;</span> <span class="token operator">==</span> <span class="token operator">!=</span>					等于运算符

		<span class="token operator">=</span> <span class="token operator">%=</span> <span class="token operator">/=</span> <span class="token operator">//=</span> <span class="token operator">-=</span> <span class="token operator">+=</span> <span class="token operator">*=</span> <span class="token operator">**=</span>	赋值运算符

		<span class="token keyword">is</span> <span class="token keyword">is</span> <span class="token keyword">not</span>					身份运算符

		<span class="token keyword">in</span> <span class="token keyword">not</span> <span class="token keyword">in</span>					成员运算符

		<span class="token keyword">and</span> <span class="token keyword">or</span> <span class="token keyword">not</span>					逻辑运算符
</code></pre></div><h1 id="_7-字符串-string" tabindex="-1"><a class="header-anchor" href="#_7-字符串-string" aria-hidden="true">#</a> 7. 字符串（String）</h1><h2 id="_7-1-字符串创建" tabindex="-1"><a class="header-anchor" href="#_7-1-字符串创建" aria-hidden="true">#</a> 7.1 字符串创建</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		s <span class="token operator">=</span> <span class="token string">&#39;abcd&#39;</span>

		s <span class="token operator">=</span> <span class="token string">&quot;abcd&quot;</span>

		s <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;

			abcdefg

			&quot;&quot;&quot;</span>
</code></pre></div><h2 id="_7-2-字符串访问" tabindex="-1"><a class="header-anchor" href="#_7-2-字符串访问" aria-hidden="true">#</a> 7.2 字符串访问</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		a <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>		<span class="token comment"># 访问弟0个元素</span>

		l <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>		<span class="token comment"># 字符串的长度</span>
</code></pre></div><h2 id="_7-3-字符串运算" tabindex="-1"><a class="header-anchor" href="#_7-3-字符串运算" aria-hidden="true">#</a> 7.3 字符串运算</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> “Hello”<span class="token punctuation">,</span> b <span class="token operator">=</span> “Python”

		操作符			描述							实例

		<span class="token operator">+</span>				字符串连接				a <span class="token operator">+</span> b 输出结果： HelloPython

		<span class="token operator">*</span>				重复输出字符串			a<span class="token operator">*</span><span class="token number">2</span> 输出结果：HelloHello

		<span class="token punctuation">[</span><span class="token punctuation">]</span>				通过索引获取字符串中字符			a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> 输出结果 e

		<span class="token punctuation">[</span> <span class="token punctuation">:</span> <span class="token punctuation">]</span>			截取字符串中的一部分，遵循左闭右开原则		<span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span> 是不包含第 <span class="token number">3</span> 个字符的

		<span class="token keyword">in</span>				成员运算符					<span class="token string">&#39;H&#39;</span> <span class="token keyword">in</span> a 输出结果 <span class="token boolean">True</span>

		<span class="token keyword">not</span> <span class="token keyword">in</span>			成员运算符					<span class="token string">&#39;M&#39;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> a 输出结果 <span class="token boolean">True</span>

		r<span class="token operator">/</span>R				原始字符串					<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">r&#39;anb&#39;</span><span class="token punctuation">)</span>		<span class="token comment"># anb</span>

		<span class="token operator">%</span>				格式字符串				   a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;今年我%s岁&quot;</span><span class="token operator">%</span>a<span class="token punctuation">)</span>
</code></pre></div><h1 id="今年我10岁" tabindex="-1"><a class="header-anchor" href="#今年我10岁" aria-hidden="true">#</a> 今年我10岁</h1><h2 id="_7-4-python字符串格式化" tabindex="-1"><a class="header-anchor" href="#_7-4-python字符串格式化" aria-hidden="true">#</a> 7.4 Python字符串格式化</h2><p>Python 支持格式化字符串的输出 。尽管这样可能会用到非常复杂的表达式，但最基本的用法是将一个值插入到一个有字符串格式符 %s 的字符串中。</p><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;我叫%s今年%d岁!&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>			<span class="token comment"># 我叫小明今年10岁!</span>

		符号				描述

      	<span class="token operator">%</span>c	 			格式化字符及其ASCII码

      	<span class="token operator">%</span>s	 			格式化字符串

      	<span class="token operator">%</span>d	 			格式化整数

		<span class="token operator">%</span>u	 			格式化无符号整型

		<span class="token operator">%</span>o	 			格式化无符号八进制数

		<span class="token operator">%</span>x	 			格式化无符号十六进制数

		<span class="token operator">%</span>X	 			格式化无符号十六进制数（大写）

		<span class="token operator">%</span>f	 			格式化浮点数字，可指定小数点后的精度

		<span class="token operator">%</span>e	 			用科学计数法格式化浮点数

		<span class="token operator">%</span>E	 			作用同<span class="token operator">%</span>e，用科学计数法格式化浮点数

		<span class="token operator">%</span>g	 			<span class="token operator">%</span>f和<span class="token operator">%</span>e的简写

		<span class="token operator">%</span>G	 			<span class="token operator">%</span>f 和 <span class="token operator">%</span>E 的简写

		<span class="token operator">%</span>p	 			用十六进制数格式化变量的地址
</code></pre></div><h2 id="_7-5-内建函数" tabindex="-1"><a class="header-anchor" href="#_7-5-内建函数" aria-hidden="true">#</a> 7.5 内建函数</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>方法									描述	

capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span>						将字符串的第一个字符转换为大写	

endswith<span class="token punctuation">(</span>suffix<span class="token punctuation">,</span>beg<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>检查字符串是否以 obj 结束

expandtabs<span class="token punctuation">(</span>tabsize<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>				把字符串 string 中的 tab 符号转为空格，tab 符号默认的空格数是 <span class="token number">8</span> 。

find<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> beg<span class="token operator">=</span><span class="token number">0</span> end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>	检测 <span class="token builtin">str</span> 是否包含在字符串中<span class="token punctuation">,</span>如果包含返回开始的索引值，否则返回<span class="token operator">-</span><span class="token number">1</span>

index<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> beg<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>	跟find<span class="token punctuation">(</span><span class="token punctuation">)</span>方法一样，只不过如果<span class="token builtin">str</span>不在字符串中会报一个异常<span class="token punctuation">.</span>		

isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>							如果字符串至少有一个字符并且所有字符都是字母或数字则返 回 <span class="token boolean">True</span><span class="token punctuation">,</span>否则返回 <span class="token boolean">False</span>

isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>							如果字符串只包含数字则返回 <span class="token boolean">True</span> 否则返回 <span class="token boolean">False</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span>							如果字符串中只包含数字字符，则返回 <span class="token boolean">True</span>，否则返回 <span class="token boolean">False</span>

isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>							如果字符串中只包含空白，则返回 <span class="token boolean">True</span>，否则返回 <span class="token boolean">False</span><span class="token punctuation">.</span>	

join<span class="token punctuation">(</span>seq<span class="token punctuation">)</span>							以指定字符串作为分隔符，将 seq 中所有的元素<span class="token punctuation">(</span>的字符串表示<span class="token punctuation">)</span>合并为一个新的字符串

<span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>							返回字符串长度

lower<span class="token punctuation">(</span><span class="token punctuation">)</span>								转换字符串中所有大写字符为小写<span class="token punctuation">.</span>

lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>							截掉字符串左边的空格或指定字符。	

<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>							返回字符串 <span class="token builtin">str</span> 中最大的字母。	

<span class="token builtin">min</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>							返回字符串 <span class="token builtin">str</span> 中最小的字母。

replace<span class="token punctuation">(</span>old<span class="token punctuation">,</span> new <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token punctuation">]</span><span class="token punctuation">)</span>			把 将字符串中的 str1 替换成 str2<span class="token punctuation">,</span>如果 <span class="token builtin">max</span> 指定，则替换不超过 <span class="token builtin">max</span> 次。

rfind<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> beg<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>	类似于 find<span class="token punctuation">(</span><span class="token punctuation">)</span>函数，不过是从右边开始查找<span class="token punctuation">.</span>

rindex<span class="token punctuation">(</span> <span class="token builtin">str</span><span class="token punctuation">,</span> beg<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>类似于 index<span class="token punctuation">(</span><span class="token punctuation">)</span>，不过是从右边开始<span class="token punctuation">.</span>

rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>							删除字符串字符串末尾的空格	

split<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>num<span class="token operator">=</span>string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	num<span class="token operator">=</span>string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span>以<span class="token builtin">str</span>为分隔符截取字符串，如果num有指定值，则仅截取 num个子字符串

splitlines<span class="token punctuation">(</span><span class="token punctuation">[</span>keepends<span class="token punctuation">]</span><span class="token punctuation">)</span>				按照行<span class="token punctuation">(</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rn&#39;</span><span class="token punctuation">,</span> n&#39;<span class="token punctuation">)</span>分隔

startswith<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span>beg<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>检查字符串是否是以 obj 开头

strip<span class="token punctuation">(</span><span class="token punctuation">[</span>chars<span class="token punctuation">]</span><span class="token punctuation">)</span>						在字符串上执行 lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>和 rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

upper<span class="token punctuation">(</span><span class="token punctuation">)</span>								转换字符串中的小写字母为大写
</code></pre></div><h1 id="_8-列表" tabindex="-1"><a class="header-anchor" href="#_8-列表" aria-hidden="true">#</a> 8. 列表</h1><h2 id="_8-1-列表创建" tabindex="-1"><a class="header-anchor" href="#_8-1-列表创建" aria-hidden="true">#</a> 8.1 列表创建</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span>x<span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>	或 		<span class="token punctuation">[</span>x<span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="_8-2-列表值获取" tabindex="-1"><a class="header-anchor" href="#_8-2-列表值获取" aria-hidden="true">#</a> 8.2 列表值获取</h2><p><code>l = list[0]</code></p><p><code>l1 = list2[1:5]</code></p><p><code>len(list)</code> #长度查看</p><h2 id="_8-3-列表更新" tabindex="-1"><a class="header-anchor" href="#_8-3-列表更新" aria-hidden="true">#</a> 8.3 列表更新</h2><p><code>list[0] = &#39;agg&#39;</code></p><h2 id="_8-4-删除列表元素" tabindex="-1"><a class="header-anchor" href="#_8-4-删除列表元素" aria-hidden="true">#</a> 8.4 删除列表元素</h2><p><code>del list[0]</code></p><h2 id="_8-5-其它列表操作" tabindex="-1"><a class="header-anchor" href="#_8-5-其它列表操作" aria-hidden="true">#</a> 8.5 其它列表操作</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		表达式						结果						描述

		<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>					<span class="token number">3</span>							长度

		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>			<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>				组合

		<span class="token punctuation">[</span><span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">4</span>						<span class="token punctuation">[</span><span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">]</span>			重复

		<span class="token number">3</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>					<span class="token boolean">True</span>				元素是否存在于列表中

		<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>	<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>					迭代
</code></pre></div><h2 id="_8-6-列表嵌套" tabindex="-1"><a class="header-anchor" href="#_8-6-列表嵌套" aria-hidden="true">#</a> 8.6 列表嵌套</h2><pre><code>使用嵌套列表即在列表里创建其它列表，例如：
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>		a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>

		n <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

		x <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> n<span class="token punctuation">]</span>

		<span class="token comment"># x = [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [1, 2, 3]]</span>

		<span class="token comment"># x[0] = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>

		<span class="token comment"># x[0][1] = &#39;b&#39;</span>
</code></pre></div><h2 id="_8-7-python列表函数-方法" tabindex="-1"><a class="header-anchor" href="#_8-7-python列表函数-方法" aria-hidden="true">#</a> 8.7 Python列表函数&amp;方法</h2><table><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td>len(list)</td><td>列表元素个数</td></tr><tr><td>max(list)</td><td>返回列表元素最大值</td></tr><tr><td>min(list)</td><td>返回列表元素最小值</td></tr><tr><td>list(seq)</td><td>将元组转换为列表</td></tr><tr><td>list.append(obj)</td><td>在列表末尾添加新的对象</td></tr><tr><td>list.count(obj)</td><td>统计某个元素在列表中出现的次数</td></tr><tr><td>list.extend(seq)</td><td>在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）</td></tr><tr><td>list.index(obj)</td><td>从列表中找出某个值第一个匹配项的索引位置</td></tr><tr><td>list.insert(index, obj)</td><td>将对象插入列表</td></tr><tr><td>list.pop([index=-1])</td><td>移除列表中的一个元素（默认最后一个元素），并且返回该元素的值</td></tr><tr><td>list.remove(obj)</td><td>移除列表中某个值的第一个匹配项</td></tr><tr><td>list.reverse()</td><td>反向列表中元素</td></tr><tr><td>list.sort(cmp=None, key=None, reverse=False)</td><td>对原列表进行排序</td></tr><tr><td>list.clear()</td><td>清空列表</td></tr><tr><td>list.copy()</td><td>复制列表</td></tr></tbody></table><h1 id="_9-元组" tabindex="-1"><a class="header-anchor" href="#_9-元组" aria-hidden="true">#</a> 9. 元组</h1><h2 id="_9-1-元组创建" tabindex="-1"><a class="header-anchor" href="#_9-1-元组创建" aria-hidden="true">#</a> 9.1 元组创建</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">,</span> <span class="token number">1997</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

tup2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

tup3 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">;</span>   <span class="token comment"># 不需要括号也可以</span>
</code></pre></div><h2 id="_9-2-元组值获取" tabindex="-1"><a class="header-anchor" href="#_9-2-元组值获取" aria-hidden="true">#</a> 9.2 元组值获取</h2><pre><code>	tup1[1]

	tup1[1:5]
</code></pre><h2 id="_9-3-元组更新" tabindex="-1"><a class="header-anchor" href="#_9-3-元组更新" aria-hidden="true">#</a> 9.3 元组更新</h2><pre><code>元组不允许更新
</code></pre><h2 id="_9-4-删除元组元素" tabindex="-1"><a class="header-anchor" href="#_9-4-删除元组元素" aria-hidden="true">#</a> 9.4 删除元组元素</h2><p><code>del tup[0]</code></p><h2 id="_9-5-元组运算符" tabindex="-1"><a class="header-anchor" href="#_9-5-元组运算符" aria-hidden="true">#</a> 9.5 元组运算符</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>表达式					  		<span class="token operator">|</span>  结果				 				 描述

<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>					<span class="token operator">|</span> <span class="token number">3</span>					 				计算元素个数

<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>			<span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>		  			连接

<span class="token punctuation">(</span><span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span>					<span class="token operator">|</span> <span class="token punctuation">(</span><span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi!&#39;</span><span class="token punctuation">)</span>	  	复制

<span class="token number">3</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>					<span class="token operator">|</span> <span class="token boolean">True</span>				  				元素是否存在

<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">print</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token punctuation">)</span>	<span class="token operator">|</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>								迭代<span class="token punctuation">(</span>生成器<span class="token punctuation">)</span>
</code></pre></div><h2 id="_9-6元组内置函数" tabindex="-1"><a class="header-anchor" href="#_9-6元组内置函数" aria-hidden="true">#</a> 9.6元组内置函数</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		方法					描述						实例

		<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">tuple</span><span class="token punctuation">)</span>			计算元组元素个数			<span class="token builtin">len</span><span class="token punctuation">(</span>tuple1<span class="token punctuation">)</span>

		<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token builtin">tuple</span><span class="token punctuation">)</span>			返回元组中元素最大值		<span class="token builtin">max</span><span class="token punctuation">(</span>tuple2<span class="token punctuation">)</span>

		<span class="token builtin">min</span><span class="token punctuation">(</span><span class="token builtin">tuple</span><span class="token punctuation">)</span>			返回元组中元素最小值		<span class="token builtin">min</span><span class="token punctuation">(</span>tuple2<span class="token punctuation">)</span>

		<span class="token builtin">tuple</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span>			将列表转换为元组			list1<span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Taobao&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Baidu&#39;</span><span class="token punctuation">]</span>

													tuple1<span class="token operator">=</span><span class="token builtin">tuple</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>

													tuple1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Taobao&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Baidu&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="_10-字典" tabindex="-1"><a class="header-anchor" href="#_10-字典" aria-hidden="true">#</a> 10. 字典</h1><ul><li>在字典中，键必须不可变，所以可以用数字，字符串或元组充当，而用列表就不行。</li></ul><h2 id="_10-1-字典创建" tabindex="-1"><a class="header-anchor" href="#_10-1-字典创建" aria-hidden="true">#</a> 10.1 字典创建</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2341&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Beth&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;9102&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Cecil&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3258&#39;</span><span class="token punctuation">}</span>

<span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token punctuation">:</span>x<span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="_10-2-字典值获取" tabindex="-1"><a class="header-anchor" href="#_10-2-字典值获取" aria-hidden="true">#</a> 10.2 字典值获取</h2><p><code>dict[&#39;Alice&#39;]</code></p><h2 id="_10-3-更新字典" tabindex="-1"><a class="header-anchor" href="#_10-3-更新字典" aria-hidden="true">#</a> 10.3 更新字典</h2><p><code>dict[&#39;Alice&#39;] = 10</code></p><h2 id="_10-4-删除字典元素" tabindex="-1"><a class="header-anchor" href="#_10-4-删除字典元素" aria-hidden="true">#</a> 10.4 删除字典元素</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">del</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">]</span>

		<span class="token keyword">del</span> <span class="token builtin">dict</span>
</code></pre></div><h2 id="_10-5-字典内置函数-方法" tabindex="-1"><a class="header-anchor" href="#_10-5-字典内置函数-方法" aria-hidden="true">#</a> 10.5 字典内置函数&amp;方法</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>函数					描述								实例

<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span>			计算字典元素个数，即键的总数。		<span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Age&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;Class&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;First&#39;</span><span class="token punctuation">}</span>
													<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span>

<span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span>			输出字典，以可打印的字符串表示。	<span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Age&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;Class&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;First&#39;</span><span class="token punctuation">}</span>
													<span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span>
													<span class="token string">&quot;{&#39;Name&#39;: &#39;Runoob&#39;, &#39;Class&#39;: &#39;First&#39;, &#39;Age&#39;: 7}&quot;</span>

<span class="token builtin">type</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span>		返回输入的变量类型				 <span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Age&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;Class&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;First&#39;</span><span class="token punctuation">}</span>
													<span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span>
													<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;dict&#39;</span><span class="token operator">&gt;</span>
		radiansdict<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>							删除字典内所有元素
		radiansdict<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>							返回一个字典的浅复制
		radiansdict<span class="token punctuation">.</span>fromkeys<span class="token punctuation">(</span><span class="token punctuation">)</span>						创建一个新字典，以序列seq中元素做字典的键，val为字典所有键对应的初始值
		radiansdict<span class="token punctuation">.</span>get<span class="token punctuation">(</span>key<span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>			返回指定键的值，如果值不在字典中返回default值
		key <span class="token keyword">in</span> <span class="token builtin">dict</span> 								如果键在字典<span class="token builtin">dict</span>里返回true，否则返回false
		radiansdict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span>							以列表返回可遍历的<span class="token punctuation">(</span>键<span class="token punctuation">,</span> 值<span class="token punctuation">)</span> 元组数组
		radiansdict<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>							返回一个迭代器，可以使用 <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 来转换为列表
		radiansdict<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span>key<span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>	和get<span class="token punctuation">(</span><span class="token punctuation">)</span>类似<span class="token punctuation">,</span> 但如果键不存在于字典中，将会添加键并将值设为default
		radiansdict<span class="token punctuation">.</span>update<span class="token punctuation">(</span>dict2<span class="token punctuation">)</span>					把字典dict2的键<span class="token operator">/</span>值对更新到<span class="token builtin">dict</span>里
		radiansdict<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>						返回一个迭代器，可以使用 <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 来转换为列表
		pop<span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token punctuation">,</span>default<span class="token punctuation">]</span><span class="token punctuation">)</span>							删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值。
		popitem<span class="token punctuation">(</span><span class="token punctuation">)</span>									随机返回并删除字典中的一对键和值<span class="token punctuation">(</span>一般删除末尾对<span class="token punctuation">)</span>。

	

	扩展：

		<span class="token number">1.</span> 浅拷贝：

		只拷贝引用地址，未拷贝内容：

			a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span> 

			b <span class="token operator">=</span> a

		<span class="token number">2.</span> 深拷贝：

		拷贝引用地址和内容：

			a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span> 

			<span class="token keyword">import</span> copy 

			b <span class="token operator">=</span> copy<span class="token punctuation">.</span>deepcopy<span class="token punctuation">(</span>a<span class="token punctuation">)</span> 
</code></pre></div><pre><code>	可以递归拷贝；一拷到底

	注意：
</code></pre><ol><li><p>对于不可变类型 Number String Tuple,浅复制仅仅是地址指向，不会开辟新空间。</p></li><li><p>对于可变类型 List、Dictionary、Set，浅复制会开辟新的空间地址(仅仅是最顶层开辟了新的空间，里层的元素地址还是一样的)，进行浅拷贝</p></li><li><p>浅拷贝后，改变原始对象中为可变类型的元素的值，会同时影响拷贝对象的；改变原始对象中为不可变类型的元素的值，只有原始类型受影响。</p></li></ol><h1 id="_11-set集合" tabindex="-1"><a class="header-anchor" href="#_11-set集合" aria-hidden="true">#</a> 11. Set集合</h1><p>集合不支持切片操作。</p><h2 id="_11-1-set集合创建" tabindex="-1"><a class="header-anchor" href="#_11-1-set集合创建" aria-hidden="true">#</a> 11.1 Set集合创建</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">}</span>

		s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>序列<span class="token punctuation">)</span>		<span class="token comment"># dict序列，值添加key</span>

 		s <span class="token operator">=</span> <span class="token punctuation">{</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">if</span> x <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="_11-2-set集合添加元素" tabindex="-1"><a class="header-anchor" href="#_11-2-set集合添加元素" aria-hidden="true">#</a> 11.2 Set集合添加元素</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		s<span class="token punctuation">.</span>add<span class="token punctuation">(</span>x<span class="token punctuation">)</span>		<span class="token comment"># 添加单个元素</span>

		s<span class="token punctuation">.</span>update<span class="token punctuation">(</span>x<span class="token punctuation">)</span>		<span class="token comment"># 添加序列元素</span>
</code></pre></div><h2 id="_11-3-移除元素" tabindex="-1"><a class="header-anchor" href="#_11-3-移除元素" aria-hidden="true">#</a> 11.3 移除元素</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>x<span class="token punctuation">)</span>		<span class="token comment"># 移除单个元素</span>

		s<span class="token punctuation">.</span>discard<span class="token punctuation">(</span>x<span class="token punctuation">)</span>	<span class="token comment"># 移除集合(不存在不报错)</span>

		s<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>			<span class="token comment"># 随机删除集合中的一个元素</span>
</code></pre></div><h2 id="_11-4-集合操作方法" tabindex="-1"><a class="header-anchor" href="#_11-4-集合操作方法" aria-hidden="true">#</a> 11.4 集合操作方法</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>len(s</td><td>) 查看集合的长度</td></tr><tr><td>s.clear</td><td>() 清空集合</td></tr><tr><td>x in</td><td>s 判断元素是否在集合中</td></tr><tr><td>add()</td><td>为集合添加元素</td></tr><tr><td>clear()</td><td>移除集合中的所有元素</td></tr><tr><td>copy()</td><td>拷贝一个集合</td></tr><tr><td>difference()</td><td>返回多个集合的差集</td></tr><tr><td>difference_update()</td><td>移除集合中的元素，该元素在指定的集合也存在。</td></tr><tr><td>discard()</td><td>删除集合中指定的元素</td></tr><tr><td>intersection()</td><td>返回集合的交集</td></tr><tr><td>intersection_update()</td><td>删除集合中的元素，该元素在指定的集合中不存在。</td></tr><tr><td>isdisjoint()</td><td>判断两个集合是否包含相同的元素，如果没有返回 True，否则返回 False。</td></tr><tr><td>issubset()</td><td>判断指定集合是否为该方法参数集合的子集。</td></tr><tr><td>issuperset()</td><td>判断该方法的参数集合是否为指定集合的子集</td></tr><tr><td>pop()</td><td>随机移除元素</td></tr><tr><td>remove()</td><td>移除指定元素</td></tr><tr><td>symmetric_difference()</td><td>返回两个集合中不重复的元素集合。</td></tr><tr><td>symmetric_difference_update()</td><td>移除当前集合中在另外一个指定集合相同的元素，并将另外一个指定集合中不同的元素插入到当前集合中。</td></tr><tr><td>union()</td><td>返回两个集合的并集</td></tr><tr><td>update()</td><td>给集合添加元 素</td></tr></tbody></table><h1 id="_12-条件判断" tabindex="-1"><a class="header-anchor" href="#_12-条件判断" aria-hidden="true">#</a> 12. 条件判断</h1><h2 id="_12-1-基本语法" tabindex="-1"><a class="header-anchor" href="#_12-1-基本语法" aria-hidden="true">#</a> 12.1 基本语法</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">if</span> condition_1<span class="token punctuation">:</span>

		    statement_block_1

		<span class="token keyword">elif</span> condition_2<span class="token punctuation">:</span>

		    statement_block_2

		<span class="token keyword">else</span><span class="token punctuation">:</span>

		    statement_block_3
</code></pre></div><h2 id="_12-2-注意要点" tabindex="-1"><a class="header-anchor" href="#_12-2-注意要点" aria-hidden="true">#</a> 12.2 注意要点</h2><ol><li><p>每个条件后面要使用冒号 :，表示接下来是满足条件后要执行的语句块。</p></li><li><p>使用缩进来划分语句块，相同缩进数的语句在一起组成一个语句块。</p></li><li><p>在Python中没有switch – case语句。</p></li></ol><h1 id="_13-循环语句" tabindex="-1"><a class="header-anchor" href="#_13-循环语句" aria-hidden="true">#</a> 13. 循环语句</h1><h2 id="_13-1-while循环" tabindex="-1"><a class="header-anchor" href="#_13-1-while循环" aria-hidden="true">#</a> 13.1 while循环</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">while</span> <span class="token builtin">bool</span>：

    		<span class="token keyword">pass</span>

    	<span class="token keyword">else</span><span class="token punctuation">:</span>

    		<span class="token keyword">pass</span>
</code></pre></div><h2 id="_13-2-for循环" tabindex="-1"><a class="header-anchor" href="#_13-2-for循环" aria-hidden="true">#</a> 13.2 for循环</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>    	<span class="token keyword">for</span> <span class="token operator">&lt;</span>variable<span class="token operator">&gt;</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>sequence<span class="token operator">&gt;</span><span class="token punctuation">:</span>

		    <span class="token operator">&lt;</span>statements<span class="token operator">&gt;</span>
</code></pre></div><h2 id="_13-3-range-函数" tabindex="-1"><a class="header-anchor" href="#_13-3-range-函数" aria-hidden="true">#</a> 13.3 range()函数</h2><pre><code>如果你需要遍历数字序列，可以使用内置range()函数。它会生成数列：

	range(start,end,step)
</code></pre><h2 id="_13-4-break和continue语句及循环中的else子句" tabindex="-1"><a class="header-anchor" href="#_13-4-break和continue语句及循环中的else子句" aria-hidden="true">#</a> 13.4 break和continue语句及循环中的else子句</h2><p>(1) break 语句可以跳出 for 和 while 的循环体。</p><p>如果你从 for 或 while 循环中终止，任何对应的循环 else 块将不执行。</p><p>(2) continue语句被用来告诉Python跳过当前循环块中的剩余语句，然后继续进行下一轮循环。</p><h2 id="_13-5-pass-语句" tabindex="-1"><a class="header-anchor" href="#_13-5-pass-语句" aria-hidden="true">#</a> 13.5 pass 语句</h2><ul><li>Python pass是空语句，是为了保持程序结构的完整性。pass 不做任何事情，一般用做占位语句。</li></ul><h1 id="_14-迭代器和生成器" tabindex="-1"><a class="header-anchor" href="#_14-迭代器和生成器" aria-hidden="true">#</a> 14. 迭代器和生成器</h1><ul><li><p>迭代是Python最强大的功能之一，是访问集合元素的一种方式。迭代器是一个可以记住遍历的位置的对象。</p></li><li><p>迭代器对象从集合的第一个元素开始访问，直到所有的元素被访问完结束。迭代器只能往前不会后退。</p></li><li><p>迭代器有两个基本的方法：iter() 和 next()。</p></li></ul><h2 id="_14-1-迭代器生成" tabindex="-1"><a class="header-anchor" href="#_14-1-迭代器生成" aria-hidden="true">#</a> 14.1 迭代器生成</h2><p>字符串，列表或元组对象都可用于创建迭代器</p><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token builtin">list</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>

		it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>		<span class="token comment"># 创建迭代器对象</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span>		<span class="token comment"># 输出迭代器的下一个元素</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_14-2-迭代器遍历" tabindex="-1"><a class="header-anchor" href="#_14-2-迭代器遍历" aria-hidden="true">#</a> 14.2 迭代器遍历</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>			<span class="token builtin">list</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>

			it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>

<span class="token number">1.</span> <span class="token keyword">for</span>循环

			<span class="token keyword">for</span> i <span class="token keyword">in</span> it<span class="token punctuation">:</span>

				<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token number">1.</span> <span class="token keyword">while</span>循环

			<span class="token keyword">import</span> sys

			<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>

				<span class="token keyword">try</span><span class="token punctuation">:</span>

					<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>its<span class="token punctuation">)</span><span class="token punctuation">)</span>

				<span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>

					sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_14-3-创建一个迭代器" tabindex="-1"><a class="header-anchor" href="#_14-3-创建一个迭代器" aria-hidden="true">#</a> 14.3 创建一个迭代器</h2><ul><li>把一个类作为一个迭代器使用需要在类中实现两个方法 <code>__iter__() 与 __next__()</code> 。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">class</span> <span class="token class-name">MyNumbers</span><span class="token punctuation">:</span>

			<span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

				self<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>

				<span class="token keyword">return</span> self 

			<span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>

				<span class="token keyword">if</span> self<span class="token punctuation">.</span>a <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">:</span>

					x <span class="token operator">=</span> self<span class="token punctuation">.</span>a

					self<span class="token punctuation">.</span>a <span class="token operator">+=</span> <span class="token number">1</span>

					<span class="token keyword">return</span> x

				<span class="token keyword">else</span><span class="token punctuation">:</span>

					<span class="token keyword">raise</span> StopIteration

			myclass <span class="token operator">=</span> MyNumbers<span class="token punctuation">(</span><span class="token punctuation">)</span>

			myiter <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>myclass<span class="token punctuation">)</span> 

			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>myiter<span class="token punctuation">)</span><span class="token punctuation">)</span>

			<span class="token keyword">for</span> x <span class="token keyword">in</span> myiter<span class="token punctuation">:</span>

  				<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre></div><h2 id="_14-4-生成器" tabindex="-1"><a class="header-anchor" href="#_14-4-生成器" aria-hidden="true">#</a> 14.4 生成器</h2><p>在Python中，使用了yield的函数被称为生成器(generator)。跟普通函数不同的是，生成器是一个返回迭代器的函数，只能用于迭代操作，更简单点理解生成器就是一个迭代器。</p><p>在调用生成器运行的过程中，每次遇到 yield 时函数会暂停并保存当前所有的运行信息，返回yield的值, 并在下一次执行next()方法时从当前位置继续运行。</p><p>调用一个生成器函数，返回的是一个迭代器对象。</p><div class="language-python" data-ext="py"><pre class="language-python"><code>		<span class="token keyword">import</span> sys

 		<span class="token keyword">def</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span> 				<span class="token comment"># 生成器函数 - 斐波那契</span>

			a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span>

			<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>

				<span class="token keyword">if</span> <span class="token punctuation">(</span>counter <span class="token operator">&gt;</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span> 

                  <span class="token keyword">return</span>

				<span class="token keyword">yield</span> a

				a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b

				counter <span class="token operator">+=</span> <span class="token number">1</span>

		f <span class="token operator">=</span> fibonacci<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> 				<span class="token comment"># f是一个迭代器，由生成器返回生成</span>

		<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>

		    <span class="token keyword">try</span><span class="token punctuation">:</span>

				<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>

			<span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>

				sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="_15-函数" tabindex="-1"><a class="header-anchor" href="#_15-函数" aria-hidden="true">#</a> 15. 函数</h1><h2 id="_15-1-基本语法" tabindex="-1"><a class="header-anchor" href="#_15-1-基本语法" aria-hidden="true">#</a> 15.1 基本语法</h2><p>def 函数名(参数列表):</p><pre><code>函数体
</code></pre><h2 id="_15-2-函数分类" tabindex="-1"><a class="header-anchor" href="#_15-2-函数分类" aria-hidden="true">#</a> 15.2 函数分类</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>	<span class="token number">1.</span> 有参数

		<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 有几个参数，就得传入几个参数

		<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 在函数调用中输入参数时，参数名称必须对应

				<span class="token keyword">def</span> <span class="token function">aa</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>

					<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

				aa<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>

		<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 当调用函数时，必须全部定义名称<span class="token punctuation">,</span>且名称对应，顺序可以不同

				<span class="token keyword">def</span> <span class="token function">aa</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>

					<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

				aa<span class="token punctuation">(</span>y<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>x<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>

		<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> 函数中可以定义默认值

				<span class="token keyword">def</span> <span class="token function">aa</span><span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>

					<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

				aa<span class="token punctuation">(</span>y<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>x<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>

		<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> 不定长度参数

				<span class="token keyword">def</span> <span class="token function">aa</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>

					<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

					<span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>					<span class="token comment"># 元组</span>

					<span class="token keyword">print</span><span class="token punctuation">(</span>kwargs<span class="token punctuation">)</span>				<span class="token comment"># 字典</span>

				aa<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span>a <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">)</span>

	<span class="token number">2.</span> 有返回值

		<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 单个返回值

				<span class="token keyword">def</span> <span class="token function">aa</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>

					<span class="token keyword">return</span> x

				a <span class="token operator">=</span> aa<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

		<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 多个返回值

				<span class="token keyword">def</span> <span class="token function">aa</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>

					<span class="token keyword">return</span> x<span class="token punctuation">,</span><span class="token number">10</span>

				a <span class="token operator">=</span> aa<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>		<span class="token comment"># a是一个元组</span>

				a<span class="token punctuation">,</span>b <span class="token operator">=</span> aa<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>	<span class="token comment"># 多个参数接收</span>
</code></pre></div><h2 id="_15-3-匿名函数" tabindex="-1"><a class="header-anchor" href="#_15-3-匿名函数" aria-hidden="true">#</a> 15.3 匿名函数</h2><pre><code>基本语法：
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>			<span class="token keyword">lambda</span> <span class="token punctuation">[</span>arg1 <span class="token punctuation">[</span><span class="token punctuation">,</span>arg2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>argn<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>expression

			<span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token keyword">lambda</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">:</span> arg1 <span class="token operator">+</span> arg2

			<span class="token comment"># 调用sum函数</span>

			<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;相加后的值为 : &quot;</span><span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>

			<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;相加后的值为 : &quot;</span><span class="token punctuation">,</span> <span class="token builtin">sum</span><span class="token punctuation">(</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_15-4-变量作用域" tabindex="-1"><a class="header-anchor" href="#_15-4-变量作用域" aria-hidden="true">#</a> 15.4 变量作用域</h2><div class="language-python" data-ext="py"><pre class="language-python"><code>		L （Local） 局部作用域

		E （Enclosing） 闭包函数外的函数中

		G （Global） 全局作用域

		B （Built<span class="token operator">-</span><span class="token keyword">in</span>） 内建作用域

		L –<span class="token operator">&gt;</span> E –<span class="token operator">&gt;</span> G –<span class="token operator">&gt;</span>B<span class="token punctuation">(</span>在局部找不到，便会去局部外的局部找（例如闭包），再找不到就会去全局找，再者去内建中找<span class="token punctuation">)</span>

		x <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">2.9</span><span class="token punctuation">)</span>  				<span class="token comment"># 内建作用域</span>

		g_count <span class="token operator">=</span> <span class="token number">0</span>  				<span class="token comment"># 全局作用域</span>

		<span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

		    o_count <span class="token operator">=</span> <span class="token number">1</span>  			<span class="token comment"># 闭包函数外的函数中</span>

		    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

		        i_count <span class="token operator">=</span> <span class="token number">2</span>  		<span class="token comment"># 局部作用域</span>

		        o_count <span class="token operator">+=</span> <span class="token number">1</span>

			inner<span class="token punctuation">(</span><span class="token punctuation">)</span>

		outer<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_15-5-全局变量和局部变量" tabindex="-1"><a class="header-anchor" href="#_15-5-全局变量和局部变量" aria-hidden="true">#</a> 15.5 全局变量和局部变量</h2><pre><code>定义在函数内部的变量拥有一个局部作用域，定义在函数外的拥有全局作用域。

局部变量只能在其被声明的函数内部访问，而全局变量可以在整个程序范围内访问。调用函数时，所有在函数内声明的变量名称都将被加入到作用域中。
</code></pre><div class="language-python" data-ext="py"><pre class="language-python"><code>		total <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment"># 这是一个全局变量</span>

		<span class="token comment"># 可写函数说明</span>

		<span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span> arg1<span class="token punctuation">,</span> arg2 <span class="token punctuation">)</span><span class="token punctuation">:</span>

			<span class="token comment">#返回2个参数的和.&quot;</span>

			total <span class="token operator">=</span> arg1 <span class="token operator">+</span> arg2 				<span class="token comment"># total在这里是局部变量.</span>

			<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;函数内是局部变量 : &quot;</span><span class="token punctuation">,</span> total<span class="token punctuation">)</span>

			<span class="token keyword">return</span> total

		<span class="token comment">#调用sum函数</span>

		<span class="token builtin">sum</span><span class="token punctuation">(</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span> <span class="token punctuation">)</span>

		<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;函数外是全局变量 : &quot;</span><span class="token punctuation">,</span> total<span class="token punctuation">)</span>

</code></pre></div>`,283);function g(x,_){const a=e("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[s("官方地址："),n("a",k,[s("https://www.python.org/"),t(a)])]),r,d,h,b,n("p",null,[s("下载地址："),n("a",m,[s("https://www.anaconda.com/distribution/"),t(a)])]),y])}const w=o(u,[["render",g],["__file","Python_simple_study.html.vue"]]);export{w as default};
