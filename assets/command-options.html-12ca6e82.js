import{_ as e,M as l,p as c,q as p,R as n,t as a,N as r,a1 as s}from"./framework-d81ad7e5.js";const o={},d=s(`<h2 id="命令行快捷键" tabindex="-1"><a class="header-anchor" href="#命令行快捷键" aria-hidden="true">#</a> 命令行快捷键</h2><table><thead><tr><th style="text-align:left;">快捷键</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">tab</td><td style="text-align:left;">命令或路径补全</td></tr><tr><td style="text-align:left;">ctrl + a</td><td style="text-align:left;">光标回到命令行首</td></tr><tr><td style="text-align:left;">ctrl + e</td><td style="text-align:left;">光标回到命令行尾</td></tr><tr><td style="text-align:left;">ctrl + ←</td><td style="text-align:left;">光标向左移动一个单词</td></tr><tr><td style="text-align:left;">ctrl + →</td><td style="text-align:left;">光标向右移动一个单词</td></tr><tr><td style="text-align:left;">ctrl + insert</td><td style="text-align:left;">复制命令行内容</td></tr><tr><td style="text-align:left;">shift + insert</td><td style="text-align:left;">粘贴命令行内容</td></tr><tr><td style="text-align:left;">ctrl + k</td><td style="text-align:left;">剪切（删除）光标处到行尾的字符</td></tr><tr><td style="text-align:left;">ctrl + u</td><td style="text-align:left;">剪切（删除）光标处到行首的字符</td></tr><tr><td style="text-align:left;">ctrl + w</td><td style="text-align:left;">剪切（删除）光标前的一个单词</td></tr><tr><td style="text-align:left;">ctrl + y</td><td style="text-align:left;">粘贴 ctrl + u，ctrl + k， ctrl + w 删除的文本</td></tr><tr><td style="text-align:left;">ctrl + c</td><td style="text-align:left;">中断终端正在执行的任务或者删除整行</td></tr><tr><td style="text-align:left;">ctrl + d</td><td style="text-align:left;">退出当前 shell 命令行</td></tr><tr><td style="text-align:left;">ctrl + r</td><td style="text-align:left;">搜索命令行历史命令</td></tr><tr><td style="text-align:left;">ctrl + g</td><td style="text-align:left;">从执行 ctrl + r 的搜索历史命令模式退出</td></tr><tr><td style="text-align:left;">Esc + .</td><td style="text-align:left;">获取上一条命令的最后部分（空格分隔），常用来获取 cat、ls 后的路径</td></tr><tr><td style="text-align:left;">ctrl + l</td><td style="text-align:left;">等同于 clear</td></tr><tr><td style="text-align:left;">ctrl + s</td><td style="text-align:left;">锁定终端，使之无法输入内容</td></tr><tr><td style="text-align:left;">ctrl + q</td><td style="text-align:left;">解锁执行 ctrl + s 的锁定状态</td></tr><tr><td style="text-align:left;">ctrl + z</td><td style="text-align:left;">暂停执行在终端运行的任务</td></tr><tr><td style="text-align:left;">!!</td><td style="text-align:left;">执行上一条命令</td></tr><tr><td style="text-align:left;">!pw</td><td style="text-align:left;">执行最近以 pw 开头的命令</td></tr><tr><td style="text-align:left;">!pw:p</td><td style="text-align:left;">仅打印最近 pw 开头的命令，不执行</td></tr></tbody></table><p>Linux 中命令繁多，记住所有的命令实在是太过困难，使用 <code>man</code> 命令或 <code>--help</code> 查看详细的使用说明来得更为快捷。以 <code>ls</code> 示例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">man</span> <span class="token function">ls</span> <span class="token comment"># ls - list directory contents</span>
<span class="token function">ls</span> <span class="token parameter variable">--help</span>
</code></pre></div><p>命令大部分有各自的含义，而命令选项基本上都是互相参考，具有类似的含义。</p>`,5),i={href:"https://www.zhihu.com/question/267095526/answers/updated",target:"_blank",rel:"noopener noreferrer"},x=s(`<h6 id="查看进程内加载的环境变量" tabindex="-1"><a class="header-anchor" href="#查看进程内加载的环境变量" aria-hidden="true">#</a> 查看进程内加载的环境变量</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 也可以去 cd /proc 目录下, 查看进程内存中加载的东西</span>
<span class="token function">ps</span> eww <span class="token parameter variable">-p</span>  XXXXX<span class="token punctuation">(</span>进程号<span class="token punctuation">)</span>
</code></pre></div><h6 id="查看进程树找到服务器进程" tabindex="-1"><a class="header-anchor" href="#查看进程树找到服务器进程" aria-hidden="true">#</a> 查看进程树找到服务器进程</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> auwxf
</code></pre></div><h6 id="查看进程启动路径" tabindex="-1"><a class="header-anchor" href="#查看进程启动路径" aria-hidden="true">#</a> 查看进程启动路径</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /proc/xxx<span class="token punctuation">(</span>进程号<span class="token punctuation">)</span>
<span class="token function">ls</span> <span class="token parameter variable">-all</span>
<span class="token comment"># cwd对应的是启动路径</span>
</code></pre></div><h2 id="磁盘-文件-目录相关操作" tabindex="-1"><a class="header-anchor" href="#磁盘-文件-目录相关操作" aria-hidden="true">#</a> 磁盘,文件,目录相关操作</h2><h6 id="vim操作" tabindex="-1"><a class="header-anchor" href="#vim操作" aria-hidden="true">#</a> vim操作</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#normal模式下 g表示全局, x表示查找的内容, y表示替换后的内容</span>
:%s/x/y/g

<span class="token comment">#normal模式下</span>
<span class="token number">0</span>  <span class="token comment"># 光标移到行首(数字0)</span>
$  <span class="token comment"># 光标移至行尾</span>
<span class="token builtin class-name">shift</span> + g <span class="token comment"># 跳到文件最后</span>
gg <span class="token comment"># 跳到文件头</span>

<span class="token comment"># 显示行号</span>
:set nu

<span class="token comment"># 去除行号</span>
:set nonu

<span class="token comment"># 检索</span>
/xxx<span class="token punctuation">(</span>检索内容<span class="token punctuation">)</span>  <span class="token comment"># 从头检索, 按n查找下一个</span>
?xxx<span class="token punctuation">(</span>检索内容<span class="token punctuation">)</span>  <span class="token comment"># 从尾部检索</span>
</code></pre></div><h6 id="打开只读文件-修改后需要保存时-不用切换用户即可保存的方式" tabindex="-1"><a class="header-anchor" href="#打开只读文件-修改后需要保存时-不用切换用户即可保存的方式" aria-hidden="true">#</a> 打开只读文件,修改后需要保存时(不用切换用户即可保存的方式)</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在normal模式下</span>
:w <span class="token operator">!</span>sudo <span class="token function">tee</span> %
</code></pre></div><h6 id="查看磁盘-文件目录基本信息" tabindex="-1"><a class="header-anchor" href="#查看磁盘-文件目录基本信息" aria-hidden="true">#</a> 查看磁盘, 文件目录基本信息</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看磁盘挂载情况</span>
<span class="token function">mount</span>

<span class="token comment"># 查看磁盘分区信息</span>
<span class="token function">df</span>

<span class="token comment"># 查看目录及子目录大小</span>
<span class="token function">du</span> <span class="token parameter variable">-H</span> <span class="token parameter variable">-h</span>

<span class="token comment"># 查看当前目录下各个文件, 文件夹占了多少空间, 不会递归</span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> *
</code></pre></div><h6 id="压缩命令" tabindex="-1"><a class="header-anchor" href="#压缩命令" aria-hidden="true">#</a> 压缩命令</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> czvf xxx.tar 压缩目录

<span class="token function">zip</span> <span class="token parameter variable">-r</span> xxx.zip 压缩目录
</code></pre></div><h6 id="解压缩命令" tabindex="-1"><a class="header-anchor" href="#解压缩命令" aria-hidden="true">#</a> 解压缩命令</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> zxvf xxx.tar

<span class="token comment"># 解压到指定文件夹</span>
<span class="token function">tar</span> zxvf xxx.tar <span class="token parameter variable">-C</span> /xxx/yyy/

<span class="token function">unzip</span> xxx.zip
</code></pre></div><h2 id="变更文件所属用户-用户组" tabindex="-1"><a class="header-anchor" href="#变更文件所属用户-用户组" aria-hidden="true">#</a> 变更文件所属用户, 用户组</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> eagleye.eagleye xxx.log
</code></pre></div><h2 id="cp-scp-mkdir" tabindex="-1"><a class="header-anchor" href="#cp-scp-mkdir" aria-hidden="true">#</a> cp, scp, mkdir</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#复制</span>
<span class="token function">cp</span> xxx.log

<span class="token comment"># 复制并强制覆盖同名文件</span>
<span class="token function">cp</span> <span class="token parameter variable">-f</span> xxx.log

<span class="token comment"># 复制文件夹</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> xxx<span class="token punctuation">(</span>源文件夹<span class="token punctuation">)</span> yyy<span class="token punctuation">(</span>目标文件夹<span class="token punctuation">)</span>

<span class="token comment"># 远程复制</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> ssh端口 username@10.10.10.101:/home/username/xxx /home/xxx

<span class="token comment"># 级联创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /xxx/yyy/zzz

<span class="token comment"># 批量创建文件夹, 会在test,main下都创建java, resources文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> src/<span class="token punctuation">{</span>test,main<span class="token punctuation">}</span>/<span class="token punctuation">{</span>java,resources<span class="token punctuation">}</span>
</code></pre></div><h6 id="比较两个文件" tabindex="-1"><a class="header-anchor" href="#比较两个文件" aria-hidden="true">#</a> 比较两个文件</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">diff</span> <span class="token parameter variable">-u</span> <span class="token number">1</span>.txt <span class="token number">2</span>.txt
</code></pre></div><h2 id="检索相关" tabindex="-1"><a class="header-anchor" href="#检索相关" aria-hidden="true">#</a> 检索相关</h2><h6 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h6><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 反向匹配, 查找不包含xxx的内容</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> xxx

<span class="token comment"># 排除所有空行</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;^/pre&gt;

# 返回结果 2,则说明第二行是空行
grep -n “^$” 111.txt    

# 查询以abc开头的行
grep -n “^abc” 111.txt 

# 同时列出该词语出现在文章的第几行
grep &#39;</span>xxx<span class="token string">&#39; -n xxx.log

# 计算一下该字串出现的次数
grep &#39;</span>xxx<span class="token string">&#39; -c xxx.log

# 比对的时候，不计较大小写的不同
grep &#39;</span>xxx&#39; <span class="token parameter variable">-i</span> xxx.log
</code></pre></div><h2 id="find检索命令" tabindex="-1"><a class="header-anchor" href="#find检索命令" aria-hidden="true">#</a> find检索命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在目录下找后缀是.mysql的文件</span>
<span class="token function">find</span> /home/eagleye <span class="token parameter variable">-name</span> <span class="token string">&#39;*.mysql&#39;</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 会从 /usr 目录开始往下找，找最近3天之内存取过的文件。</span>
<span class="token function">find</span> /usr <span class="token parameter variable">-atime</span> <span class="token number">3</span> –print

<span class="token comment"># 会从 /usr 目录开始往下找，找最近5天之内修改过的文件。</span>
<span class="token function">find</span> /usr <span class="token parameter variable">-ctime</span> <span class="token number">5</span> –print

<span class="token comment"># 会从 /doc 目录开始往下找，找jacky 的、文件名开头是 j的文件。  </span>
<span class="token function">find</span> /doc <span class="token parameter variable">-user</span> jacky <span class="token parameter variable">-name</span> <span class="token string">&#39;j*&#39;</span> –print

<span class="token comment"># 会从 /doc 目录开始往下找，找寻文件名是 ja 开头或者 ma开头的文件。</span>
<span class="token function">find</span> /doc <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;ja*&#39;</span> -o- <span class="token parameter variable">-name</span> <span class="token string">&#39;ma*&#39;</span> <span class="token punctuation">\\</span><span class="token punctuation">)</span> –print

<span class="token comment">#  会从 /doc 目录开始往下找，找到凡是文件名结尾为 bak的文件，把它删除掉。-exec 选项是执行的意思，rm 是删除命令，{ } 表示文件名，“\\;”是规定的命令结尾。 </span>
<span class="token function">find</span> /doc <span class="token parameter variable">-name</span> <span class="token string">&#39;*bak&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre></div>`,28);function h(u,k){const t=l("ExternalLinkIcon");return c(),p("div",null,[d,n("p",null,[a("关于命令行参数 「-」和「--」有一个"),n("a",i,[a("讨论"),r(t)]),a("。")]),x])}const g=e(o,[["render",h],["__file","command-options.html.vue"]]);export{g as default};
