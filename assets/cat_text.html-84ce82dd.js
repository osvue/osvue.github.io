import{_ as e,p as t,q as a,a1 as n}from"./framework-d81ad7e5.js";const s={},d=n(`<h2 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h2><p>cat 命令常用于查看内容较少的文本，还可以用于拼接文件。</p><h3 id="_1-命令格式" tabindex="-1"><a class="header-anchor" href="#_1-命令格式" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>cat [选项] 文件名</p></div><h3 id="_2-常用选项" tabindex="-1"><a class="header-anchor" href="#_2-常用选项" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-n</td><td style="text-align:center;">对输出内容进行编号。</td></tr><tr><td style="text-align:center;">-b</td><td style="text-align:center;">只对非空进行编号。</td></tr><tr><td style="text-align:center;">-V</td><td style="text-align:center;">列出特殊字符。</td></tr></tbody></table><h3 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>查看内容</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-n</span> test.txt
</code></pre></div></li><li><p>合并文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> test1.txt test2.txt <span class="token operator">&gt;</span> test3.txt 
<span class="token function">more</span> test3.txt <span class="token comment"># 验证 </span>
</code></pre></div></li><li><p>倒叙显示</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tac</span> test.txt
</code></pre></div></li></ul><h2 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> more</h2><p>如果要查看内容较多的文本，用 cat 就难以阅读了，这时候就可以使用 more 了。</p><h3 id="_1-命令格式-1" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-1" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>more [选项] 文件名</p></div><h3 id="_2-常用选项-1" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-1" aria-hidden="true">#</a> 2. 常用选项</h3><p>一般不使用选项，而是要了解交互指令。</p><table><thead><tr><th style="text-align:center;">交互指令（部分）</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">h 或 ?</td><td style="text-align:center;">显示 more 命令的帮助提示。</td></tr><tr><td style="text-align:center;">q 或 Q</td><td style="text-align:center;">退出 more。</td></tr><tr><td style="text-align:center;">v</td><td style="text-align:center;">在当前行启动一个编辑器。</td></tr><tr><td style="text-align:center;">回车键</td><td style="text-align:center;">向下移动一行。</td></tr><tr><td style="text-align:center;">空格键</td><td style="text-align:center;">向下一动一页。</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">向下移动半页。</td></tr><tr><td style="text-align:center;">b</td><td style="text-align:center;">向上移动一页。</td></tr></tbody></table><h3 id="_3-示例-1" tabindex="-1"><a class="header-anchor" href="#_3-示例-1" aria-hidden="true">#</a> 3. 示例</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">more</span> long-test.txt
</code></pre></div><h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h2><p>less 是作为 more 的加强版（看到一水的文章说 more 不可以向前翻看，但是 b 明明可以向上翻滚，不知道是我理解错了还是什么 🐱）：</p><ul><li>使用光标键可以在文本文件中前后左右滚屏；</li><li>用行号或百分比作为书签浏览文件；</li><li>提供更加友好的检索、高亮显示操作；</li><li>兼容常用的字处理程序（Vim、Emacs）的键盘操作……</li></ul><h3 id="_1-命令格式-2" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-2" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>less [选项] 文件名</p></div><h3 id="_2-常用选项-2" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-2" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-N</td><td style="text-align:center;">显示行号。</td></tr><tr><td style="text-align:center;">-m</td><td style="text-align:center;">显示百分比。</td></tr></tbody></table><p>与 more 一致，重要的是交互指令。</p><table><thead><tr><th style="text-align:center;">交互命令</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">h 或 H</td><td style="text-align:center;">查看帮助。</td></tr><tr><td style="text-align:center;">q 或 Q</td><td style="text-align:center;">退出 less。</td></tr><tr><td style="text-align:center;">zz</td><td style="text-align:center;">退出 less 命令。</td></tr><tr><td style="text-align:center;">回车键</td><td style="text-align:center;">向下移动一行。</td></tr><tr><td style="text-align:center;">空格键</td><td style="text-align:center;">向下移动一页。</td></tr><tr><td style="text-align:center;">g / G</td><td style="text-align:center;">移动至第一行/最后一行。</td></tr></tbody></table><h3 id="_3-示例-2" tabindex="-1"><a class="header-anchor" href="#_3-示例-2" aria-hidden="true">#</a> 3. 示例</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">less</span> <span class="token parameter variable">-N</span> long-test.txt
</code></pre></div><h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><p>head 命令常用于查看文本的前 n 行。</p><h3 id="_1-命令格式-3" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-3" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>head [选项] 文件名</p></div><h3 id="_2-常用选项-3" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-3" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-n</td><td style="text-align:center;">显示文件前 n 行内容，n 默认为 10。</td></tr></tbody></table><h3 id="_3-示例-3" tabindex="-1"><a class="header-anchor" href="#_3-示例-3" aria-hidden="true">#</a> 3. 示例</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看文件前 20 行内容</span>
<span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">20</span> package-lock.json
<span class="token function">head</span> <span class="token parameter variable">-20</span> package-lock.json <span class="token comment"># 简写</span>
</code></pre></div><h2 id="tail" tabindex="-1"><a class="header-anchor" href="#tail" aria-hidden="true">#</a> tail</h2><p>tail 命令常用于查看纯文本文件的后 n 行，与 head 相反。</p><h3 id="_1-命令格式-4" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-4" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>tail [选项] 文件名</p></div><h3 id="_2-常用选项-4" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-4" aria-hidden="true">#</a> 2. 常用选项</h3><p>与 head 基本一致。</p><h3 id="_3-示例-4" tabindex="-1"><a class="header-anchor" href="#_3-示例-4" aria-hidden="true">#</a> 3. 示例</h3><p>与 head 基本一致。</p><h2 id="wc" tabindex="-1"><a class="header-anchor" href="#wc" aria-hidden="true">#</a> wc</h2><p>wc 命令常用于统计指定文本的行数、字数、字节数。</p><h3 id="_1-命令格式-5" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-5" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>wc [选项] 文件名</p></div><h3 id="_2-常用选项-5" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-5" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-l</td><td style="text-align:center;">统计行数。</td></tr><tr><td style="text-align:center;">-w</td><td style="text-align:center;">统计单词。</td></tr><tr><td style="text-align:center;">-c</td><td style="text-align:center;">统计字节数。</td></tr></tbody></table><h3 id="_3-示例-5" tabindex="-1"><a class="header-anchor" href="#_3-示例-5" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>默认显示三项数据</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> package-lock.json
</code></pre></div></li><li><p>只统计行数</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">wc</span> <span class="token parameter variable">-l</span> package-lock.json
</code></pre></div></li></ul><h3 id="more-2022" tabindex="-1"><a class="header-anchor" href="#more-2022" aria-hidden="true">#</a> more-2022+</h3><ul><li><p>常用按键：</p><ul><li>空格键：查看下一屏；</li><li>回车键：往下滚动一行；</li><li>b 键：往前查看一屏；</li><li>q 键：退出。</li></ul></li></ul><h3 id="cat-1" tabindex="-1"><a class="header-anchor" href="#cat-1" aria-hidden="true">#</a> cat</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示行号</span>
 <span class="token function">cat</span> /proc/version <span class="token parameter variable">-n</span>      
</code></pre></div><h2 id="vi的使用" tabindex="-1"><a class="header-anchor" href="#vi的使用" aria-hidden="true">#</a> vi的使用</h2><ul><li>基本上vi可以分为三种状态 <ul><li>一般模式</li><li>编辑模式和</li><li>命令行模式</li></ul></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>### 一般模式：
- 以vi打开一个文件就直接进入一般模式了(这是默认的模式)。在这个模式中， 你可以使用上下左右按键来移动光标，你可以使用删除字符或删除整行来处理文件内容， 也可以使用复制、粘贴来处理你的文件数据。

### 编辑模式：
- 在一般模式中可以进行删除、复制、粘贴等的操作，但是却无法编辑文件的内容，只有当到你按下 **【i, I, o, O, a, A, r, R】** 等任何一个字母之后才会进入编辑模式。这时候屏幕的左下方会出现【INSERT或 REPLACE】的字样，此时才可以进行编辑。而如果要回到一般模式时， 则必须要按下【Esc】即可退出编辑模式。

### 命令行模式：
- 输入 **【 : / ? 】** 三个中的任何一个，就可以将光标移动到最底下那一行。在这个模式中， 可以提供 **查找、读取、存盘、替换字符、离开vi、显示行号** 等的动作则是在此模式中完成的！
</code></pre></div><h2 id="一般模式" tabindex="-1"><a class="header-anchor" href="#一般模式" aria-hidden="true">#</a> 一般模式</h2><ul><li>移动光标 <ul><li><strong>【h、j、k、l】</strong> ，分别控制光标左、下、上、右移一格</li><li>按 <strong>【ctrl+b】</strong> 屏幕往&quot;后&quot;移动一页</li><li>按 <strong>【ctrl+f】</strong> 屏幕往&quot;前&quot;移动一页</li></ul></li></ul><h3 id="vi" tabindex="-1"><a class="header-anchor" href="#vi" aria-hidden="true">#</a> vi</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#打开或新建文件 并在第一行</span>
<span class="token function">vi</span> filename
<span class="token comment"># 最后一行  vi + filename</span>
<span class="token function">vi</span> + filename

</code></pre></div><h3 id="移动光标" tabindex="-1"><a class="header-anchor" href="#移动光标" aria-hidden="true">#</a> 移动光标</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>* 【w】光标跳到下个字的开头
* 【e】光标跳到下个字的字尾
* 【H】 光标移动到这个屏幕的最上方那一行的第一个字符
* 【M】 光标移动到这个屏幕的中间那一行的第一个字符
* 【L】光标移动到这个屏幕的最下方那一行的第一个字符

* 【G】 移动到这个文件的最后一行
* 【nG】移动到这个文件的第n行(可配合:set nu)
* 【gg】 移动到这个文件的第一行，相当于1G
* 【 **n&lt;Enter&gt;** 】光标向下移动n行
* 【 0 数字0】移动到当前行首
* 【 **$** 】移动到当前行尾
* 【 **S** 】清空光标所在行文字
</code></pre></div><h3 id="查找与替换" tabindex="-1"><a class="header-anchor" href="#查找与替换" aria-hidden="true">#</a> 查找与替换</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>* **【/word】** 向光标向下寻找一个名称为word的字符串
* **【?word】** 向光标向上寻找一个名称为word的字符串
* **【n】** 代表重复前一个查找的动作
* **【N】** 与n刚好相反，为【反向】进行行前一个查找动作
</code></pre></div><h3 id="删除、复制与粘贴" tabindex="-1"><a class="header-anchor" href="#删除、复制与粘贴" aria-hidden="true">#</a> 删除、复制与粘贴</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>【x】 为向后删除一个字符 (相当于【del】键)
【X】 为向前删除一个字符(相当于【backspace】键)
【nx】 连续向后删除n个字符

【dd】 删除光标所在行
【ndd】 删除光标所在的向下n行
【d1G】 删除光标所在行到第一行的所有数据
【dG】 删除光标所在到最后一行的所有数据

【d$】 删除光标所在处，到该行的最后一个字符
【d0】 删除光标所在处，到该行的最前一个字符

【yy】 复制光标所在的那一行
【nyy】 复制光标所在的向下n列

【y1G】 复制光标所在行到第一行的所有数据
【yG】 复制光标所在行到最后一行的所有数据

【y0】 复制光标所在的那个字符到该行行首的所有数据
【y$】 复制光标所在的那个字符到该行行尾的所有数据

【p】将已复制的数据在光标下一行粘贴上
【P】 则为贴在光标的上一行

【u】 恢复前一个操作
【Ctrl+r】重做上一个操作

【.】 是重复前一个操作
</code></pre></div><h3 id="一般模式切换到编辑模式" tabindex="-1"><a class="header-anchor" href="#一般模式切换到编辑模式" aria-hidden="true">#</a> 一般模式切换到编辑模式</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>【i, I】 进入编辑模式：
i 为【从目前光标所在处插入】
I 为【在目前所在行的第一个非空格符处开始插入】
 
【a, A】 进入编辑模式(Insert mode)：
a 为【从目前光标所在的下一个字符处开始插入】
A 为【从光标所在行的最后一个字符处开始插入】

【o, O】 进入编辑模式：
o 为【在目前光标所在的下一行处插入新的一行】
O 为在目前光标所在处的上一行插入新的一行

【r, R】 进入取代模式：
r 只会取代光标所在的那一个字符一次
R会一直取代光标所在的文字，直到按下 ESC 为止；

【Esc】 退出编辑模式，回到一般模式
</code></pre></div><h3 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>* 【:w】 保存编辑的内容
* 【:w!】强制写入该文件，但跟你对该文件的权限有关
* 【:q】 离开vi
* 【:q!】 不想保存修改强制离开
* 【:wq】 保存后离开
* 【:x】 保存后离开
* 【ZZ】 若文件没有更动，则不保存离开，若文件已经被更改过，则保存后离开
* 【:w filename】 将编辑的数据保存成另一个文件（类似另存）
* 【:r filename】 在编辑的数据中，读入另一个文件的数据。即将【filename】 这个文件的* 内容加到光标所在行后面。
* 【:n1,n2 w filename】 将n1到n2的内容保存成filename这个文件。
* \`【:! command】暂时离开vi 到命令行模式下执行command的显示结果！例如 【:! ls /* home】即可在 vi 当中察看/home底下以ls输出的文件信息！\`
* 【:set nu】 显示行号
* 【:set nonu】 与 set nu 相反，为取消行
</code></pre></div>`,73),r=[d];function l(i,c){return t(),a("div",null,r)}const o=e(s,[["render",l],["__file","cat_text.html.vue"]]);export{o as default};
