import{_ as s,p as a,q as n,a1 as e}from"./framework-d81ad7e5.js";const p={},o=e(`<blockquote><p>经常会混淆<code>$(( ))</code>、<code>\${}</code>、<code>$()</code>这些语法的使用，刚好最近有空，就来做一下相关的总结，方便后面查询。</p></blockquote><h4 id="一、和-相关的语法" tabindex="-1"><a class="header-anchor" href="#一、和-相关的语法" aria-hidden="true">#</a> 一、和<code>$</code>相关的语法</h4><h5 id="一-单纯的-变量名" tabindex="-1"><a class="header-anchor" href="#一-单纯的-变量名" aria-hidden="true">#</a> （一） 单纯的<code>$变量名</code></h5><p>当我们定义完一个变量后（或者是已知环境变量中存在的变量名），那我们就可以通过在变量名前面加<code>$</code>的方式来引用这些变量 下面我们用一个小案例来演示一下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">field1</span><span class="token operator">=</span>Hello
<span class="token assign-left variable">field2</span><span class="token operator">=</span>World

<span class="token builtin class-name">echo</span> <span class="token variable">$field1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$field2</span>
</code></pre></div><p>执行结果为：</p><div class="language-undefined" data-ext="undefined"><pre class="language-undefined"><code>Hello
World
</code></pre></div><p>我们可以看到，我们定义的变量是可以正常打印到控制台的</p><h6 id="使用-变量需要注意的细节" tabindex="-1"><a class="header-anchor" href="#使用-变量需要注意的细节" aria-hidden="true">#</a> 使用<code>$变量</code>需要注意的细节</h6><ul><li>变量名后面不要直接加其他字符串，防止识别错误。我们可以看看下面这个例子： 我们定义了变量<code>field1</code>的值为<code>Hello</code>，希望输出<code>HelloWorld</code>。我们尝试直接在<code>$field1</code>后面加上<code>World</code>字符串，看一下输出的结果</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">field1</span><span class="token operator">=</span>Hello

<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$field1World</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
</code></pre></div><p>可以发现，打印出来的结果是空。这是因为字符串和变量名中间没有空格的话，脚本在执行的过程中会把<code>field1World</code>看成是一整个的变量名，而这个变量名我们没有定义，所以自然是找不到结果的。</p><div class="language-undefined" data-ext="undefined"><pre class="language-undefined"><code>------------

------------
</code></pre></div><h5 id="二-变量名" tabindex="-1"><a class="header-anchor" href="#二-变量名" aria-hidden="true">#</a> （二）<code>\${变量名}</code></h5><p><code>\${变量名}</code>和<code>$变量名</code>的效果差不多，作用是引用我们定义的变量（包括环境变量），但<code>\${变量名}</code>可以显式地标识我们希望引用的具体的变量，我们可以通过上文的案例来进行演示：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">field1</span><span class="token operator">=</span>Hello

<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${field1}</span>World
<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
</code></pre></div><p>执行结果为：</p><div class="language-undefined" data-ext="undefined"><pre class="language-undefined"><code>------------
HelloWorld
------------
</code></pre></div><p>我们可以发现，即使字符串<code>World</code>和变量之间不需要空格，脚本执行的时候也可以正常引用变量。</p><h5 id="三-脚本" tabindex="-1"><a class="header-anchor" href="#三-脚本" aria-hidden="true">#</a> （三）<code>$( 脚本 )</code></h5><p>在执行一条命令时，shell会将<code>$()</code>中的语句当做命令执行一遍，再将结果加入到原命令中重新执行。简单概括的话，<code>$( 脚本 )</code>可以让我们获取到命令执行的结果值。 下面我们来用一个小案例来演示一下，结合<code>echo</code>命令来输出当前日期</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;current date is <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
</code></pre></div><p>执行结果如下：</p><div class="language-csharp" data-ext="cs"><pre class="language-csharp"><code><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
current date <span class="token keyword">is</span> <span class="token number">2023</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">15</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
</code></pre></div><p>我们可以看到，脚本在执行的过程中，确实是先把<code>$()</code>的内容执行后，再加入到了最终的文本中。需要注意的是，输出echo的内容的时候，不可以使用<code>&#39;&#39;</code>，单引号里面的内容会被当做普通文本来处理。</p><p>PS：这里稍微拓展一下，<code>脚本</code> 和<code>$(脚本)</code> 这两个语法实现的效果是一致的，所以有时候我们会看到有些人是用<code>脚本</code>的方式来获取脚本的执行结果的。</p><h5 id="四-运算式-和-运算式" tabindex="-1"><a class="header-anchor" href="#四-运算式-和-运算式" aria-hidden="true">#</a> （四）<code>$(( 运算式 ))</code> 和 <code>$[]运算式</code></h5><p>这两个语法主要是用来帮助我们做一些计算的。我们知道在shell脚本中，我们定义的数字默认都会被识别为字符串。所以涉及到数值运算的话，我们可以借助<code>$(( 运算式 ))</code> 来帮助我们完成一些计算。 下面我们用一个案例来简单演示一下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">result1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">3</span><span class="token variable">))</span></span>
<span class="token assign-left variable">result2</span><span class="token operator">=</span><span class="token number">1</span>+2+3
<span class="token assign-left variable">result3</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token number">1</span>+2+3<span class="token punctuation">]</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1+2+3=<span class="token variable">\${result1}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1+2+3=<span class="token variable">\${result2}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1+2+3=<span class="token variable">\${result3}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;------------&#39;</span>
</code></pre></div><p>从结果中我们可以看到，使用直接用<code>1+2+3</code>是得不到计算结果的，使用<code>$(())</code>或者<code>$[]</code>就可以正常拿到计算结果了。</p><div class="language-undefined" data-ext="undefined"><pre class="language-undefined"><code>------------
1+2+3=6
1+2+3=1+2+3
1+2+3=6
------------
</code></pre></div><h5 id="五-和-有关的特殊变量" tabindex="-1"><a class="header-anchor" href="#五-和-有关的特殊变量" aria-hidden="true">#</a> （五）和<code>$</code>有关的特殊变量</h5><p>在shell脚本中，除了我们自定义的变量以及环境变量外，shell中还存在着一些自带的特殊变量来供我们使用。这些特殊变量在我们跑一些比较复杂的脚本的时候，给予很大的帮助。</p><table><thead><tr><th>变量</th><th>含义</th></tr></thead><tbody><tr><td>$0</td><td>当前脚本的文件名</td></tr><tr><td>$n (n&gt;1)</td><td>传递给脚本或函数的参数。n是一个数字，表示第几个参数。例如，第一个参数是<img src="https://math.jianshu.com/math?formula=1%2C第二个参数是" alt="1,第二个参数是">2。若n大于10，则语法为<code>\${n}</code></td></tr><tr><td>$#</td><td>传递给脚本或函数的参数个数</td></tr><tr><td>$*</td><td>传递给脚本或者函数的所有参数</td></tr><tr><td>$@</td><td>传递给脚本或函数的所有参数。当被双引号<code>&quot;&quot;</code>包含时，<code>$@</code>和<code>@*</code>稍有不同</td></tr><tr><td>$?</td><td>上个命令的退出状态，或函数的返回值</td></tr><tr><td>$$</td><td>当前Shell进程ID。对于Shell脚本，就是这些脚本所在进程ID</td></tr></tbody></table><p>下面我们用一个简单的案例来演示一下，脚本内容如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;当前脚本文件名<span class="token variable">$0</span>= <span class="token variable">$0</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第一个参数<span class="token variable">$1</span>= <span class="token variable">$1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第二个参数<span class="token variable">$2</span>= <span class="token variable">$2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;所有参数个数<span class="token variable">$#</span>= <span class="token variable">$#</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;所有参数<span class="token variable">$*</span>= <span class="token variable">$*</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;所有参数<span class="token variable">$@</span>= <span class="token variable">$@</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;当前进程ID<span class="token variable">$$</span>= <span class="token variable">$$</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================&quot;</span>
</code></pre></div><p>脚本执行结果如下，我们可以看到基本上相关的数据都正确打印出来了。</p><div class="language-csharp" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span>root@<span class="token number">10</span><span class="token operator">-</span><span class="token number">60</span><span class="token operator">-</span><span class="token number">159</span><span class="token operator">-</span><span class="token number">92</span> testssh<span class="token punctuation">]</span># sh test<span class="token punctuation">.</span>sh aa <span class="token class-name">bb</span> cc
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
当前脚本文件名test<span class="token punctuation">.</span>sh<span class="token operator">=</span> test<span class="token punctuation">.</span>sh
第一个参数aa<span class="token operator">=</span> aa
第二个参数bb<span class="token operator">=</span> bb
所有参数个数<span class="token number">3</span><span class="token operator">=</span> <span class="token number">3</span>
所有参数aa <span class="token class-name">bb</span> cc<span class="token operator">=</span> aa bb cc
所有参数aa <span class="token class-name">bb</span> cc<span class="token operator">=</span> aa bb cc
当前进程ID1432997<span class="token operator">=</span> <span class="token number">1432997</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
</code></pre></div><h6 id="关于-和-的区别" tabindex="-1"><a class="header-anchor" href="#关于-和-的区别" aria-hidden="true">#</a> 关于<code>$*</code> 和<code>$@</code>的区别</h6><p>在上一个案例中，我们会发现<code>$*</code>和<code>$@</code>打印出来的结果是一样的，那实际上这两个特殊变量有存在什么区别吗？如果这两个特殊变量没有被<code>&quot;&quot;</code>包含的时候，其实是没有区分的。但当他们被<code>&quot;&quot;</code>包含时，区别就显示出来了：<strong><code>$\\*</code>把所有的参数看做一个整体，而<code>$@</code>把每个参数区分对待</strong>。具体的区别我们可以用一个案例来演示一下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;print all params by <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;print all params by <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$@</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================&quot;</span>
</code></pre></div><p>执行结果如下，我们可以发现，对于<code>$@</code>而言，它会自动将所有的变量当做一个个元素单独去处理。</p><div class="language-csharp" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span>root@<span class="token number">10</span><span class="token operator">-</span><span class="token number">60</span><span class="token operator">-</span><span class="token number">159</span><span class="token operator">-</span><span class="token number">92</span> testssh<span class="token punctuation">]</span># sh test<span class="token punctuation">.</span>sh aa <span class="token class-name">bb</span> cc
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
print all <span class="token keyword">params</span> <span class="token keyword">by</span> <span class="token string">&quot;$*&quot;</span>
aa <span class="token class-name">bb</span> cc
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
print all <span class="token keyword">params</span> <span class="token keyword">by</span> <span class="token string">&quot;$@&quot;</span>
aa
<span class="token class-name">bb</span>
cc
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
</code></pre></div><p>对于特殊变量的使用，需要注意我们反而不能使用例如：<code>\${0}</code>或者<code>\${$0}</code>来获取当前脚本的文件名，因为<code>0</code>或者<code>$0</code>并不是我们定义的变量名，使用<code>\${}</code>反而会识别不出来。所以对于特殊变量，我们正常使用就行。同时，平时我们写脚本的时候，相关的变量名也尽量不要和这些特殊变量重复，避免脚本执行错误。</p><h3 id="java-sh" tabindex="-1"><a class="header-anchor" href="#java-sh" aria-hidden="true">#</a> java sh</h3><ul><li><p>可以使用命令<code>sh xxx.sh</code>执行，也可以使用<code>./xxx.sh</code>执行。</p></li><li><p><code>sh xxx.sh</code>与<code>./xxx.sh</code>区别</p></li><li><p><code>sh xxx.sh</code> 是<strong>不需要有执行权限</strong></p></li><li><p><code>./xxx.sh</code> 是需要有执行权限的，可以通过 <code>chmod +x xxx.sh</code> 赋予权限。</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#!/bin/bash</span>
<span class="token comment">#这里可替换为你自己的执行程序，其他代码无需更改</span>
<span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span>springboot.jar

<span class="token assign-left variable">APP_DIR</span><span class="token operator">=</span>/usr/local/app
<span class="token comment">#APP_DIR=\`pwd\`</span>
 
<span class="token comment">#使用说明，用来提示输入参数</span>
<span class="token function-name function">usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: sh sms.sh [start|stop|restart|status]&quot;</span>
 <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
 
<span class="token comment">#检查程序是否在运行</span>
<span class="token function-name function">is_exist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> $APP_NAME<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token variable">\`</span></span>

 <span class="token builtin class-name">echo</span> <span class="token string">&quot;ps number is: <span class="token variable">\${pid}</span>&quot;</span>
 <span class="token comment">#如果不存在返回1，存在返回0  help test 查看 -t 的含义</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${pid}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">return</span> <span class="token number">1</span>
 <span class="token keyword">else</span>
 <span class="token builtin class-name">return</span> <span class="token number">0</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
 
<span class="token comment">#启动方法</span>
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 is_exist
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${APP_NAME}</span> is already running. pid=<span class="token variable">\${pid}</span> .&quot;</span>
 <span class="token keyword">else</span>
 <span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token variable">$APP_DIR</span>/<span class="token variable">$APP_NAME</span> <span class="token operator">&gt;</span> <span class="token variable">$APP_DIR</span>/log.out <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
 <span class="token comment">#nohup java -jar $APP_DIR/$APP_NAME</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${APP_NAME}</span> start success&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
 
<span class="token comment">#停止方法</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 is_exist
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
 <span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${APP_NAME}</span> is not running&quot;</span>
 <span class="token keyword">fi</span> 
<span class="token punctuation">}</span>
 
<span class="token comment">#输出运行状态</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 is_exist
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${APP_NAME}</span> is running. Pid is <span class="token variable">\${pid}</span>&quot;</span>
 <span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${APP_NAME}</span> is NOT running.&quot;</span>
 <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
 
<span class="token comment">#重启</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 stop
 start
<span class="token punctuation">}</span>
 
<span class="token comment">#根据输入参数，选择执行对应方法，不输入则执行使用说明</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
 <span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
 start
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 <span class="token string">&quot;stop&quot;</span><span class="token punctuation">)</span>
 stop
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 <span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span>
 status
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 <span class="token string">&quot;restart&quot;</span><span class="token punctuation">)</span>
 restart
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
 *<span class="token punctuation">)</span>
 usage
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>


</code></pre></div>`,47),t=[o];function c(l,r){return a(),n("div",null,t)}const k=s(p,[["render",c],["__file","shell.html.vue"]]);export{k as default};
