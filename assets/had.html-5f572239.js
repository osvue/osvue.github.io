import{_ as s,p as a,q as n,a1 as e}from"./framework-d81ad7e5.js";const t={},p=e(`<h3 id="shell-编程" tabindex="-1"><a class="header-anchor" href="#shell-编程" aria-hidden="true">#</a> shell 编程</h3><h4 id="单引号、双引号、反引号、无引号" tabindex="-1"><a class="header-anchor" href="#单引号、双引号、反引号、无引号" aria-hidden="true">#</a> 单引号、双引号、反引号、无引号</h4><p>单引号：单引号被识别为普通字符串，就是不识别引号里面的特殊字符，属于强引用。</p><p>双引号：双引号里面的特殊字符是可以被识别的，是弱引用。</p><p>反引号：在linux中，反引号中的内容一般是一行或多行命令，当这些命令被反引号引着，命令执行结果就会以字符串的形式被保留下来。</p><p>无引号：如何是连续的符号可以不加引号，但是如果有空格就有歧义，最好使用双引号。</p><p>在unix系统中，程序会分析#!字符后面的内容，作为解释器的指令，比如： 以<code>#！/bin/sh</code> 开头的文件，程序在执行的时候会调用<code>/bin/sh</code>，也就是bash解释器 以<code>#！/usr/bin/python</code> 开头的文件，就代表指定python解释器去执行。 如果没有指定shebang,脚本执行的时候就默认用shell去解释脚本。</p><h3 id="yum-install-psmisc-y-pstree" tabindex="-1"><a class="header-anchor" href="#yum-install-psmisc-y-pstree" aria-hidden="true">#</a> <code>yum install psmisc -y</code> pstree</h3><p>文本处理</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span>
<span class="token function">sort</span>
<span class="token function">wc</span>
<span class="token function">sed</span>  <span class="token operator">&gt;</span>  <span class="token function">vi</span>
<span class="token function">awk</span>
</code></pre></div><p>cut：显示切割的行数据 f：选择显示的列 s：不显示没有分隔符的行 d：自定义分隔符 sort：排序文件的行 n：按数值排序 r：倒序 t：自定义分隔符 k：选择排序列 u：合并相同行 f：忽略大小写</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>type：命令类型
外部命令  <span class="token operator">&amp;</span>  内部命令
help：内部命令帮助
help：内部命令清单，附带语法格式，描述
<span class="token builtin class-name">help</span> 具体内部命令
man：帮助手册manual
yum <span class="token function">install</span> <span class="token function">man</span> man-pages <span class="token parameter variable">-y</span>
<span class="token function">whereis</span> <span class="token builtin class-name">:</span> 定位命令位置
file：文件类型
echo：打印到标准输出
<span class="token environment constant">$PATH</span>： 环境变量：路径
<span class="token environment constant">$LANG</span>
/etc/profile  》  bash启动（交互方式）


</code></pre></div><h4 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量：</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1,2</span>,3<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$b</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$b</span>
<span class="token builtin class-name">echo</span> hello<span class="token variable">$agod</span>
<span class="token builtin class-name">echo</span> hello<span class="token variable">\${a}</span>god
<span class="token builtin class-name">echo</span> <span class="token variable">\${b<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>


</code></pre></div><ul><li>Filesystem Hierarchy Standard（文件系统层次化标准） <ul><li><code>/boot</code>: 系统启动相关的文件，如内核、initrd，以及grub(bootloader)</li><li><code>/dev</code>: 设备文件</li><li><code>/etc</code>：配置文件</li><li><code>/home</code>：用户的家目录，每一个用户的家目录通常默认为/home/USERNAME</li><li><code>/root</code>：管理员的家目录；</li><li><code>/lib</code>：库文件</li><li><code>/media</code>：挂载点目录，移动设备</li><li><code>/mnt</code>：挂载点目录，额外的临时文件系统</li><li><code>/opt</code>：可选目录，第三方程序的安装目录</li><li><code>/proc</code>：伪文件系统，内核映射文件</li><li><code>/sys</code>：伪文件系统，跟硬件设备相关的属性映射文件</li><li><code>/tmp</code>：临时文件, <code>/var/tmp</code></li><li><code>/var</code>：可变化的文件</li><li><code>/bin</code>: 可执行文件, 用户命令</li><li><code>/sbin</code>：管理命令 df：显示磁盘使用情况 du：显示文件系统使用情况 ls：显示目录 cd：切换工作目录 pwd：显示当前工作目录 mkdir：创建目录 rm：删除 cp：拷贝 mv：移动 ln：链接 stat：元数据 touch</li></ul></li></ul><p>groupadd groupdel useradd userdel usermod id passwd sudo<br> su r w x 1 0 1</p><p>useradd sxt01 passwd sxt01 useradd sxt02 passwd sxt02</p><p><code>mkdir /var/swapdata</code> 1,权限修正： chmod 770 swapdata | chmod o-rwx g+rwx swapdata 2,修正属组 groupadd sxtswap usermod -a -G sxtswap sxt01 usermod -a -G sxtswap sxt02 chown root:sxtswap swapdata chown :sxtswap ooxx.file chmod 770 ooxx.file id username</p><p>打开文件 vim /path/to/somefile vim +# :打开文件，并定位于第#行 vim +：打开文件，定位至最后一行 vim +/PATTERN : 打开文件，定位至第一次被PATTERN匹配到的行的行首 关闭文件 末行模式： :q 退出 没有动过文件 :wq 保存并退出 动过了，不后悔 :q! 不保存并退出 动过了，后悔了 :w 保存 :w! 强行保存 <code>:wq --&gt; :x</code></p><p>ZZ: 保存并退出 不需要冒号，编辑模式</p><h4 id="sed-行编辑器" tabindex="-1"><a class="header-anchor" href="#sed-行编辑器" aria-hidden="true">#</a> sed：行编辑器</h4><p><code>sed [options] &#39;AddressCommand&#39; file ...</code> -n: 静默模式，不再默认显示模式空间中的内容 -i: 直接修改原文件 -e SCRIPT -e SCRIPT:可以同时执行多个脚本 -f /PATH/TO/SED_SCRIPT -r: 表示使用扩展正则表达式</p><p>sed：行编辑器Command d: 删除符合条件的行； p: 显示符合条件的行； a \\string: 在指定的行后面追加新行，内容为string \\n：可以用于换行 i \\string: 在指定的行前面添加新行，内容为string r FILE: 将指定的文件的内容添加至符合条件的行处 w FILE: 将地址指定的范围内的行另存至指定的文件中; s/pattern/string/修饰符: 查找并替换，默认只替换每行中第一次被模式匹配到的字符串 g: 行内全局替换 i: 忽略字符大小写</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>s///: s<span class="token comment">###, s@@@	</span>
	<span class="token punctuation">\\</span><span class="token punctuation">(</span><span class="token punctuation">\\</span><span class="token punctuation">)</span>, <span class="token punctuation">\\</span><span class="token number">1</span>, <span class="token punctuation">\\</span><span class="token number">2</span>

</code></pre></div><p>sed：行编辑器Address 可以没有 给定范围 查找指定行/str/</p><h3 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>$0
当前数据
$1

$2

</code></pre></div><p>awk是一个强大的文本分析工具。 相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。 简单来说awk就是把文件逐行的读入，（空格，制表符）为默认分隔符将每行切片，切开的部分再进行各种分析处理。</p><p><code>awk -F &#39;{pattern + action}&#39; {filenames}</code></p><ul><li>awk -F &#39;自定义分隔符&#39; ‘BEGIN{} 匿名{ fun } END{}’ 支持自定义分隔符 支持正则表达式匹配 支持自定义变量，数组 a[1] a[tom] map(key) 支持内置变量</li></ul><table><thead><tr><th>变量</th><th>描述</th></tr></thead><tbody><tr><td>ARGC</td><td>命令行参数个数</td></tr><tr><td>ARGV</td><td>命令行参数排列</td></tr><tr><td>ENVIRON</td><td>支持队列中系统环境变量的使用</td></tr><tr><td>FILENAME</td><td>awk浏览的文件名</td></tr><tr><td>FNR</td><td>浏览文件的记录数</td></tr><tr><td>FS</td><td>设置输入域分隔符，等价于命令行 <code>-F选项</code></td></tr><tr><td>NF</td><td>浏览记录的域的个数</td></tr><tr><td>NR</td><td>已读的记录数</td></tr><tr><td>OFS</td><td>输出域分隔符</td></tr><tr><td>ORS</td><td>输出记录分隔符</td></tr><tr><td>RS</td><td>控制记录分隔符</td></tr></tbody></table><h4 id="支持函数" tabindex="-1"><a class="header-anchor" href="#支持函数" aria-hidden="true">#</a> 支持函数</h4><ul><li><code>print、split、substr、sub、gsub</code></li></ul><h4 id="支持流程控制语句-类c语言" tabindex="-1"><a class="header-anchor" href="#支持流程控制语句-类c语言" aria-hidden="true">#</a> 支持流程控制语句，类C语言</h4><p><code>if、while、do/while、for、break、continue</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> -F<span class="token string">&#39;:&#39;</span> <span class="token string">&#39;BEGIN{print &quot;name,shell&quot;} {print $1 &quot;,&quot; $7} END{print &quot;blue,/bin/nosh&quot;}&#39;</span> <span class="token function">passwd</span>

<span class="token comment">#!/bin/bash</span>

<span class="token assign-left variable">dict</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token builtin class-name">echo</span> <span class="token function">find</span> path is  <span class="token variable">\${dict}</span>
<span class="token assign-left variable">oldIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>

<span class="token assign-left variable">res</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token function">du</span> <span class="token parameter variable">-a</span> $1 <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token variable">)</span></span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$res</span><span class="token punctuation">;</span> <span class="token keyword">do</span>

<span class="token comment">#filename=\`awk &#39;{print $1}</span><span class="token string">&#39;  $i\`
echo $i;
#	echo $filename;
#	if [ ]

done



 ./findMax.sh  /home | awk &#39;</span><span class="token punctuation">{</span>print <span class="token variable">$2</span><span class="token punctuation">}</span>&#39;

</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>统计报表：合计每人1月工资，0：manager，1：worker
Tom	 0   2012-12-11      car     3000
John	 1   2013-01-13      bike    1000
vivi	 1   2013-01-18      car     2800
Tom	 0   2013-01-20      car     2500
John	 1   2013-01-28      bike    3500

</code></pre></div><p><code>awk &#39;{split($3,date,&quot;-&quot;);if(date[2]==&quot;01&quot;){name[$1]+=$5;if($2==&quot;0&quot;){role[$1]=&quot;M&quot;}else{role[$1]=&quot;W&quot;}}} END{for(i in name){print i &quot;\\t&quot; name[i]&quot;\\t&quot; role[i]}}&#39; awk.txt </code></p><h2 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h2><p>shell bash 解释器，启动器 解释器： 用户交互输入 文本文件输入 脚本本质：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token comment">#! /usr/bin/python</span>
</code></pre></div><p>读取方式： 当前shell：source/. 新建子shell：/bin/bash file / ./file.sh 《chmod +x file.sh》 函数 命令概念总结</p><p>脚本是一个文本文件！</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
./testFile
    <span class="token comment">#!  /bin/bash （/usr/bin/python）</span>
    先启动/bin/bash <span class="token parameter variable">-f</span> testFile
    ~~  新开启一个shell ：然后执行source testFile
</code></pre></div><ul><li>文本流&amp;重定向</li><li>变量</li><li>引用&amp;命令替换</li><li>退出状态&amp;逻辑判断</li><li>表达式</li><li>流程控制</li></ul><h3 id="文本流-重定向" tabindex="-1"><a class="header-anchor" href="#文本流-重定向" aria-hidden="true">#</a> 文本流&amp;重定向</h3><p>重定向：不是命令 程序自身都有I/O 0：标准输入 1：标准输出 2：错误输出 控制程序I/O位置 一切皆文件 /proc/$$/fd 程序是否处理I/O？ 绑定顺序：从左到右</p><p>输出重定向： 修改程序的1或2</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 覆盖源
<span class="token operator">&gt;&gt;</span> 追加
<span class="token operator">&amp;&gt;</span> , <span class="token operator">&gt;&amp;</span>   
</code></pre></div><p>输入重定向：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>  一个脚本 .sh .py

<span class="token operator">&lt;&lt;</span> 后缀匹配结束
<span class="token builtin class-name">read</span> bb <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span><span class="token operator">&lt;</span><span class="token string">ooxx
adfjadlfj
asdjf;lasjdf
asdfjdlasfkj
jdsf;
ooxx</span>

<span class="token operator">&lt;&lt;&lt;</span>   
<span class="token builtin class-name">read</span> aa <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span><span class="token operator">&lt;&lt;</span><span class="token string">&quot;public void&quot;</span>
</code></pre></div><ul><li><strong>exec</strong><ul><li>替换当前shell</li></ul></li></ul><h3 id="变量-1" tabindex="-1"><a class="header-anchor" href="#变量-1" aria-hidden="true">#</a> <strong>变量</strong></h3><p>变量</p><ul><li>本地 本地： 当前shell拥有 生命周期随shell name=god 局部： 只能local用于函数 val=100</li><li>位置： <ul><li><strong><code>\${}</code></strong></li><li><code>$1,$2</code>, <strong><code>\${11}</code></strong></li></ul></li></ul><h4 id="环境变量导出" tabindex="-1"><a class="header-anchor" href="#环境变量导出" aria-hidden="true">#</a> 环境变量导出</h4><p>环境变量：env,printenv,export export定义变量 导出到子shell</p><h3 id="fork-copy-on-write-o-1" tabindex="-1"><a class="header-anchor" href="#fork-copy-on-write-o-1" aria-hidden="true">#</a> fork() Copy On Write O(1)</h3><ul><li><p><code>parent 3g ==&gt; child 3g 环境变量</code></p><ul><li>进程 子进程 引用传递 环境变量</li><li>指针地址的引用</li><li><strong>Copy On Write</strong> 写时复制</li><li>物理计算机= 内存条 = 线性地址空间 <ul><li>物理地址 虚拟地址 映射关系</li><li>CPU MMU 内存管理单元</li></ul></li><li>写时复制，并无复制那么高的成本，是更改的指针引用 <ol><li>父进程启动，增加变量a = 2 ,在<strong>内存</strong>中开辟一个空间 <code>2</code> ，父进程指针指向此地址的，</li><li>在使用 <code>/bin/bash</code> 开辟子进程后，子进程的a 同样指向<strong>内存</strong>中地址，当子进程中修改a的值后，在<strong>内存</strong>中，开辟一个新值的空间，将子进程指针指向此地址</li></ol></li><li>父进程，子进程。。 均为<strong>系统进程</strong> 维护虚拟地址</li><li>java</li></ul></li><li><p>适用于函数 unset：取消变量 set：查看shell的变量</p></li></ul><h3 id="命令替换" tabindex="-1"><a class="header-anchor" href="#命令替换" aria-hidden="true">#</a> <strong>命令替换：</strong></h3><ul><li>接收变量等 <ul><li>反引号：<code>ls -l /</code></li><li><strong><code>&quot; lineq=</code>ls -l|wc -l<code> &quot;</code></strong></li><li><code>$(ls -l /)</code></li><li><strong>可以嵌套</strong></li></ul></li></ul><p>算术表达式</p><div class="language-tex" data-ext="tex"><pre class="language-tex"><code>let  算术运算表达式
let  C=<span class="token equation string">$A+$</span>B
<span class="token equation string">$[算术表达式]
C =$</span><span class="token punctuation">[</span><span class="token equation string">$A+$</span>B<span class="token punctuation">]</span>
<span class="token equation string">$((算术表达式))
C=$</span>((<span class="token equation string">$A+$</span>B))
expr  算术表达式  
注意：表达式中各操作数及运算符之间要有空格。而且要使用命令引用
C=\`expr <span class="token equation string">$A + $</span>B\`
</code></pre></div><p><code>help let</code></p><p>条件表达式</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">help</span> <span class="token builtin class-name">test</span>

<span class="token builtin class-name">test</span> <span class="token number">15</span> <span class="token parameter variable">-gt</span> <span class="token number">8</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;is true&#39;</span>

<span class="token punctuation">[</span>test <span class="token number">15</span> <span class="token parameter variable">-gt</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;is true&#39;</span>

<span class="token punctuation">[</span>  expression  <span class="token punctuation">]</span>
<span class="token builtin class-name">test</span> expression
<span class="token punctuation">[</span><span class="token punctuation">[</span> expression <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre></div><p><code>help test</code></p><p>脚本 函数</p><p>特殊：</p><h2 id="位置shell" tabindex="-1"><a class="header-anchor" href="#位置shell" aria-hidden="true">#</a> 位置shell</h2><ul><li><code>$#</code>：位置参数个数</li><li><code>$*</code>：参数列表，双引号引用为一个字符串</li><li><code>$@</code>：参数列表，双引号引用为单独的字符串</li><li><code>$$</code>：当前shell的PID：接收者 $BASHPID：真实 管道 <code>echo $?：</code>上一个命令退出状态 0：成功 other：失败</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@dock01 app<span class="token punctuation">]</span><span class="token comment"># cat param.sh </span>
<span class="token comment">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$$</span> 

<span class="token builtin class-name">echo</span> <span class="token variable">$#</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$*</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$@</span> 

<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;end&#39;</span>

<span class="token punctuation">[</span>root@dock01 app<span class="token punctuation">]</span><span class="token comment"># ./param.sh  1 2 3 4 5 6 7 8 9 </span>
<span class="token number">9307</span>
<span class="token number">9</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span>
<span class="token number">1</span>
end
<span class="token punctuation">[</span>root@dock01 app<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre></div><ul><li>add User Shell</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">userName</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;add $userName&#39;</span>
<span class="token comment"># 添加用户</span>
<span class="token comment"># useradd </span>
<span class="token comment"># 用户密码同用户名</span>
<span class="token comment"># 静默运行脚本</span>
<span class="token comment"># 避免捕获用户接口</span>
<span class="token comment"># 程序自定义输出</span>

<span class="token comment">#!/bin/bash</span>

<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span>  <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">echo</span> <span class="token string">&quot;args error&quot;</span>  <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">exit</span> <span class="token number">2</span>

 <span class="token function">id</span> <span class="token variable">$1</span> <span class="token operator">&gt;&amp;</span> /dev/null  <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">echo</span> <span class="token string">&quot;user:<span class="token variable">$1</span>  exist~!&quot;</span> <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">exit</span> <span class="token number">3</span>

 <span class="token operator">!</span>  <span class="token function">useradd</span> <span class="token variable">$1</span>  <span class="token operator">&gt;&amp;</span>  /dev/null   <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">echo</span> <span class="token string">&quot;add user error!&quot;</span> <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">exit</span>  <span class="token number">7</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>  <span class="token operator">|</span>  <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$1</span> <span class="token operator">&gt;&amp;</span> /dev/null


<span class="token builtin class-name">echo</span> <span class="token string">&quot;user:<span class="token variable">$1</span> add ok ~!&quot;</span>


</code></pre></div><h3 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h3><h3 id="shell-if" tabindex="-1"><a class="header-anchor" href="#shell-if" aria-hidden="true">#</a> shell if</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span>  express  <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span> xxx <span class="token punctuation">;</span> <span class="token keyword">else</span> xxx <span class="token punctuation">;</span> <span class="token keyword">fi</span>
<span class="token punctuation">[</span>root@dock01 app<span class="token punctuation">]</span><span class="token comment"># if [ 3 -eq 6] ; then echo okk; else echo no ok; fi</span>
bash: <span class="token punctuation">[</span>: missing \`<span class="token punctuation">]</span>&#39;
no ok
<span class="token punctuation">[</span>root@dock01 app<span class="token punctuation">]</span><span class="token comment"># if [ 3 -eq 6 ] ; then echo okk; else echo no ok; fi</span>

</code></pre></div><p>while for</p><ul><li><code> for (( exp1; exp2; exp3 )); do COMMANDS; done</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dock01 app<span class="token punctuation">]</span><span class="token comment"># for ((i=1;i &lt;11 ; i++  )) ; do echo \${i} ;     done</span>

</code></pre></div><ul><li><code>for NAME [in WORDS ... ] ; do COMMANDS; done</code> case</li></ul><p>循环遍历文件每一行:流程控制语句 定义一个计数器num 打印num正好是文件行数</p><p>管道 重定向 命令替换</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">oldIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> file.txt<span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
	<span class="token variable"><span class="token punctuation">((</span>num<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;num:<span class="token variable">$num</span>&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token variable">$oldIFS</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;--------------&quot;</span>

<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">lines</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> file.txt <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token variable">\`</span></span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>lines<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token assign-left variable">line</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">head</span> -$i file.txt <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-1</span><span class="token variable">\`</span></span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$line</span>
	<span class="token variable"><span class="token punctuation">((</span>num<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;num:<span class="token variable">$num</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;--------------&quot;</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line    <span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$line</span>
	<span class="token variable"><span class="token punctuation">((</span>num<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> file.txt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;num:<span class="token variable">$num</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;--------------&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token function">cat</span> file.txt <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line  <span class="token punctuation">;</span><span class="token keyword">do</span> 
	<span class="token builtin class-name">echo</span> <span class="token variable">$line</span>
	<span class="token variable"><span class="token punctuation">((</span>num<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;num:<span class="token variable">$num</span>&quot;</span>




<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">oldIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>
<span class="token assign-left variable">flg</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span> <span class="token function">du</span> <span class="token parameter variable">-a</span> $1 <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token assign-left variable">fileName</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $i <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$fileName</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$fileName</span>
		<span class="token assign-left variable">flg</span><span class="token operator">=</span><span class="token number">1</span>
		<span class="token builtin class-name">break</span>
	<span class="token keyword">fi</span>

<span class="token keyword">done</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token variable">$oldIFS</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$flg</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;not find&quot;</span>  <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>








</code></pre></div><p>1，花括号 mkdir -p sdfsdf/{a,b,c}sdfsdf 2，波浪线 cd ~god 3，变量&amp;参数 $ $$ \${}(.....) 4，命令替换 ls -l <code>echo $path</code> 5，算术扩展 num=((3+4)) 6，word拆分，IFS 7，路径 *（零到多个任意字符）？ 8，引用删除 echo &quot;hello&quot; *，重定向 &gt;</p>`,85),o=[p];function l(c,i){return a(),n("div",null,o)}const k=s(t,[["render",l],["__file","had.html.vue"]]);export{k as default};
