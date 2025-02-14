import{_ as n,M as s,p as l,q as r,R as t,t as a,N as c,a1 as p}from"./framework-d81ad7e5.js";const i={},d=t("h2",{id:"介绍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),a(" 介绍")],-1),o=t("p",null,"归档（打包）和压缩是两步（曾经以为是一步操作），先执行归档，再执行压缩。",-1),h=t("p",null,"归档，指的是一个或多个文件或目录的合集，被存储在一个文件中。因此，该文件所占用的空间是其中所有文件和目录的总和。",-1),g={href:"https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%8E%8B%E7%BC%A9",target:"_blank",rel:"noopener noreferrer"},u=p(`<h2 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h2><p><code> tar xf xxx.tar.gz 减少io</code></p><p>最常用的归档（打包）命令就是 tar，该命令可以将多个文件保存到一个文件中。该命令还可以从归档文件中还原所需文件，也就是解包。</p><h3 id="_1-命令格式" tabindex="-1"><a class="header-anchor" href="#_1-命令格式" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>tar [选项...] [FILE]...</p></div><h3 id="_2-常用选项" tabindex="-1"><a class="header-anchor" href="#_2-常用选项" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-c</td><td style="text-align:center;">将多个文件或目录进行打包。</td></tr><tr><td style="text-align:center;">-x</td><td style="text-align:center;">对 tar 包进行解包操作。</td></tr><tr><td style="text-align:center;">-A</td><td style="text-align:center;">追加 tar 文件到归档文件。</td></tr><tr><td style="text-align:center;">-f 包名</td><td style="text-align:center;">指定包的文件名。包的扩展名是用来给管理员识别格式的，所以一定要正确指定扩展名。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">显示打包/解包文件过程。</td></tr><tr><td style="text-align:center;">-t</td><td style="text-align:center;">只查看 tar 包中有哪些文件，不对 tar 包做解包操作。</td></tr><tr><td style="text-align:center;">-C</td><td style="text-align:center;">指定解包位置。</td></tr></tbody></table><p>z:代表的是压缩 c:代表的是打包 x:代表的是解压 v:代表的是过程 f:代表的是指定文件名</p><ul><li>因此zcvf : 打包压缩</li></ul><p>例如:<br> (tar -zcvf xxx.tar.gz aaa.txt bbb.txt ccc.txt)<br> 把aaa.txt bbb.txt ccc.txt 打包压缩为一个名叫xxx.tar.gz 压缩包</p><ul><li>xvf: 解压缩</li></ul><p>例如 (tar -xvf xxx.tar.gz -C/usr)<br> -C代表解压的位置<br> 把xxx.tar.gz解压缩到根目录下的usr目录</p><h3 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>打包文件和目录：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> test.md.tar test.md
<span class="token function">ls</span> <span class="token comment"># 验证</span>
<span class="token comment"># 目录</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token function">touch</span> test/test<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">}</span>.txt
tree <span class="token builtin class-name">test</span> <span class="token comment"># 验证</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> testfile.tar test/
<span class="token function">ls</span> <span class="token comment"># 验证</span>
</code></pre></div></li><li><p>解包文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前目录</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> testfile.tar
tree <span class="token builtin class-name">test</span> <span class="token comment"># 验证</span>
<span class="token comment"># 指定目录</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> testfile.tar <span class="token parameter variable">-C</span> <span class="token builtin class-name">test</span>
tree <span class="token builtin class-name">test</span> <span class="token comment"># 验证</span>
<span class="token comment"># 仅查看压缩包中有哪些文件，不解包</span>
<span class="token function">tar</span> <span class="token parameter variable">-tvf</span> testfile.tar
</code></pre></div></li></ul><h3 id="_4-加强" tabindex="-1"><a class="header-anchor" href="#_4-加强" aria-hidden="true">#</a> 4. 加强</h3><p>其实 tar 也可以同时打包压缩。常用的选项有两个：</p><ul><li>-z：压缩和解压 <code>.tar.gz</code> 格式；</li><li>-j：压缩和解压 <code>.tar.bz2</code> 格式。</li></ul><p>添加上压缩、解压的操作为：</p><ul><li><p>打包压缩</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> testfile.tar.gz <span class="token builtin class-name">test</span>
<span class="token function">tar</span> <span class="token parameter variable">-tvf</span> testfile.tar.gz <span class="token comment"># 验证</span>

<span class="token comment"># bz2 格式</span>
<span class="token function">tar</span> <span class="token parameter variable">-jcvf</span> testfile.tar.bz2 <span class="token builtin class-name">test</span>
</code></pre></div></li><li><p>解压解包</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> testfile.tar.gz
tree <span class="token builtin class-name">test</span> <span class="token comment"># 验证</span>

<span class="token comment"># bz2 格式</span>
<span class="token function">tar</span> <span class="token parameter variable">-jxvf</span> testfile.tar.bz2
</code></pre></div></li></ul><h2 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> zip</h2><p>zip 是几种主流的压缩格式之一。与之对应的是 unzip。</p><h3 id="_1-命令格式-1" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-1" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>zip [选项...] 压缩包名 源文件或源目录</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>unzip [选项] 压缩包名</p></div><h3 id="_2-常用选项-1" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-1" aria-hidden="true">#</a> 2. 常用选项</h3><p>zip 常用选项：</p><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-r</td><td style="text-align:center;">递归压缩目录，及将制定目录下的所有文件以及子目录全部压缩。</td></tr><tr><td style="text-align:center;">-m</td><td style="text-align:center;">将文件压缩之后，删除原始文件，相当于把文件移到压缩文件中。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">显示详细的压缩过程信息。</td></tr><tr><td style="text-align:center;">-q</td><td style="text-align:center;">在压缩的时候不显示命令的执行过程。</td></tr><tr><td style="text-align:center;">-压缩级别</td><td style="text-align:center;">压缩级别是从 1~9 的数字，-1 代表压缩速度更快，-9 代表压缩效果更好。</td></tr><tr><td style="text-align:center;">-u</td><td style="text-align:center;">更新压缩文件，即往压缩文件中添加新文件。</td></tr></tbody></table><p>unzip 常用选项：</p><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-d</td><td style="text-align:center;">将压缩文件解压到指定目录下。</td></tr><tr><td style="text-align:center;">-n</td><td style="text-align:center;">解压时并不覆盖已经存在的文件。</td></tr><tr><td style="text-align:center;">-o</td><td style="text-align:center;">解压时覆盖已经存在的文件，并且无需用户确认。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">查看压缩文件的详细信息，但并不做解压操作。</td></tr><tr><td style="text-align:center;">-t</td><td style="text-align:center;">测试压缩文件有无损坏，但并不解压。</td></tr><tr><td style="text-align:center;">-x 文件列表</td><td style="text-align:center;">解压文件，但不包含文件列表中指定的文件。</td></tr></tbody></table><h3 id="_3-示例-1" tabindex="-1"><a class="header-anchor" href="#_3-示例-1" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>打包压缩文件和目录：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件（多个文件不需要 -r）</span>
<span class="token function">zip</span> testfile.zip test.txt
<span class="token function">ls</span> <span class="token parameter variable">-l</span> testfile.zip <span class="token comment"># 验证</span>
<span class="token comment"># 目录</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> testfile.zip <span class="token builtin class-name">test</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> testfile.zip <span class="token comment"># 验证</span>
</code></pre></div></li><li><p>解压解包：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前目录</span>
<span class="token function">unzip</span> testfile.zip
tree <span class="token builtin class-name">test</span> <span class="token comment"># 验证</span>
<span class="token comment"># 指定目录</span>
<span class="token function">unzip</span> testfile.zip <span class="token parameter variable">-d</span> test/test
tree <span class="token builtin class-name">test</span> <span class="token comment"># 验证</span>
</code></pre></div></li></ul><h2 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h2><p>gzip 是用来对文件进行压缩和解压的命令，其扩展为 <code>.gz</code>，gzip 一般需要配合 tar 使用（归档为文件），因为其只能压缩文件，即使指定了目录也只能压缩目录内的文件。与之对应的是 gunzip。</p><h3 id="_1-命令格式-2" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-2" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>gzip [选项] 源文件</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>gunzip [选项] 源文件</p></div><h3 id="_2-常用选项-2" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-2" aria-hidden="true">#</a> 2. 常用选项</h3><p>gzip 常用选项：</p><table><thead><tr><th>选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td>-c</td><td style="text-align:center;">将压缩数据输出到标准输出中，并保留源文件。</td></tr><tr><td>-r</td><td style="text-align:center;">递归压缩指定目录下以及子目录下的所有文件。</td></tr><tr><td>-v</td><td style="text-align:center;">对于每个压缩和解压缩的文件，显示相应的文件名和压缩比。</td></tr><tr><td>-l</td><td style="text-align:center;">显示以下字段： 压缩文件的大小；未压缩文件的大小；压缩比；未压缩文件的名称。</td></tr><tr><td>-数字</td><td style="text-align:center;">用于指定压缩等级，-1 压缩等级最低；-9 压缩比最高。默认压缩比是 -6。</td></tr><tr><td>-d</td><td style="text-align:center;">对压缩文件进行解压缩。</td></tr></tbody></table><p>gunzip 常用选项：</p><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-r</td><td style="text-align:center;">递归处理，解压缩指定目录下以及子目录下的所有文件。</td></tr><tr><td style="text-align:center;">-c</td><td style="text-align:center;">把解压缩后的文件输出到标准输出设备。</td></tr><tr><td style="text-align:center;">-f</td><td style="text-align:center;">强制解压缩文件，不理会文件是否已存在等情况。</td></tr><tr><td style="text-align:center;">-l</td><td style="text-align:center;">列出压缩文件内容。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">显示命令执行过程。</td></tr><tr><td style="text-align:center;">-t</td><td style="text-align:center;">测试压缩文件是否正常，但不对其做解压缩操作。</td></tr></tbody></table><h3 id="_3-示例-2" tabindex="-1"><a class="header-anchor" href="#_3-示例-2" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>压缩文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移除源文件</span>
<span class="token function">gzip</span>  test.txt
<span class="token function">ls</span> <span class="token parameter variable">-l</span> test.txt.gz <span class="token comment"># 验证</span>
<span class="token comment"># 保留源文件</span>
<span class="token function">gzip</span> <span class="token parameter variable">-c</span> test.txt <span class="token operator">&gt;</span>test.txt.gz
<span class="token function">ls</span> <span class="token parameter variable">-l</span> test.txt test.txt.gz <span class="token comment"># 验证</span>
</code></pre></div></li><li><p>压缩目录：</p><p>并不能压缩目录，只能分别压缩目录内的文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-r</span> <span class="token builtin class-name">test</span> <span class="token comment"># 切记，会递归压缩其中所有文件，小心</span>
tree <span class="token builtin class-name">test</span> <span class="token comment"># 验证</span>
<span class="token function">gzip</span> <span class="token parameter variable">-rd</span> <span class="token builtin class-name">test</span> <span class="token comment"># 撤销打包</span>
</code></pre></div></li><li><p>解压：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>gunzip test.txt.gz
gunzip <span class="token parameter variable">-r</span> <span class="token builtin class-name">test</span> 
</code></pre></div></li></ul><h2 id="bzip2" tabindex="-1"><a class="header-anchor" href="#bzip2" aria-hidden="true">#</a> bzip2</h2><p>bzip2 命令与 gzip 目录类似，只能对文件进行压缩，其扩展为 <code>.bz2</code>。从理论上来说， <code>.bz2</code> 算法更先进，压缩比更好，而 <code>.gz</code> 相对而言压缩耗时更短。</p><h3 id="_1-命令格式-3" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-3" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>bzip2 [选项] 源文件</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>bunzip2 [选项] 源文件</p></div><h3 id="_2-常用选项-3" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-3" aria-hidden="true">#</a> 2. 常用选项</h3><p>bzip2 常用选项：</p><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-d</td><td style="text-align:center;">执行解压缩，此时该选项后的源文件应为标记有 .bz2 后缀的压缩包文件。</td></tr><tr><td style="text-align:center;">-k</td><td style="text-align:center;">bzip2 在压缩或解压缩任务完成后，会删除原始文件，若要保留原始文件，可使用此选项。</td></tr><tr><td style="text-align:center;">-f</td><td style="text-align:center;">bzip2 在压缩或解压缩时，若输出文件与现有文件同名，默认不会覆盖现有文件，若使用此选项，则会强制覆盖现有文件。</td></tr><tr><td style="text-align:center;">-t</td><td style="text-align:center;">测试压缩包文件的完整性。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">压缩或解压缩文件时，显示详细信息。</td></tr><tr><td style="text-align:center;">-数字</td><td style="text-align:center;">这个参数和 gzip 命令的作用一样，用于指定压缩等级，-1 压缩等级最低，压缩比最差；-9 压缩比最高</td></tr></tbody></table><p>bunzip2 常用选项：</p><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-k</td><td style="text-align:center;">解压缩后，默认会删除原来的压缩文件。若要保留压缩文件，需使用此参数。</td></tr><tr><td style="text-align:center;">-f</td><td style="text-align:center;">解压缩时，若输出的文件与现有文件同名时，默认不会覆盖现有的文件。若要覆盖，可使用此选项。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">显示命令执行过程。</td></tr><tr><td style="text-align:center;">-L</td><td style="text-align:center;">列出压缩文件内容。</td></tr></tbody></table><h3 id="_3-示例-3" tabindex="-1"><a class="header-anchor" href="#_3-示例-3" aria-hidden="true">#</a> 3. 示例</h3><p>参考 gzip 示例即可。</p><h2 id="zip-压缩" tabindex="-1"><a class="header-anchor" href="#zip-压缩" aria-hidden="true">#</a> zip 压缩</h2><ul><li>安装 <ol><li>命令：<code> yum list | grep zip/unzip</code> #获取安装列</li><li>安装命令： <code>yum install zip </code> #提示输入时，请输入y；</li><li>安装命令：<code>yum install unzip</code> #提示输入时，请输入y；</li></ol></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 压缩文件</span>
<span class="token function">zip</span> a.zip hello.txt
<span class="token comment"># 将当前目录下的所有文件和文件夹全部压缩成test.zip文件,-r表示递归压缩子目录下所有文件</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> test.zip ./*

<span class="token comment"># 删除压缩文件aa.zip中hello.txt文件</span>
<span class="token function">zip</span> <span class="token parameter variable">-d</span> aa.zip  hello.txt

<span class="token comment"># 向压缩文件中 test1.zip中添加a.txt 文件</span>
 <span class="token function">zip</span> <span class="token parameter variable">-m</span> test1.zip test. MYI

</code></pre></div><h2 id="unzip-解压缩" tabindex="-1"><a class="header-anchor" href="#unzip-解压缩" aria-hidden="true">#</a> unzip 解压缩</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>

<span class="token comment">#  -l   显 示压缩文件内所包含的文件。</span>
<span class="token comment">#  -v   执 行是时显示详细的信息。或查看压缩文件目录，但不解压。</span>
<span class="token comment">#  -n   解 压缩时不要覆盖原有的文件。</span>
<span class="token comment">#  -o   不 必先询问用户，unzip执 行后覆盖原有文件。</span>
<span class="token comment">#  -d&lt;目录&gt;   指 定文件解压缩后所要存储的目录。</span>
<span class="token comment">#  -x&lt;文件&gt;   指 定不要处理.zip压 缩文件中的哪些文件。</span>


<span class="token comment"># 将压缩文件text.zip在当前目录下解压缩</span>
<span class="token function">unzip</span> aa.zip
<span class="token comment"># 将压缩文件text.zip在指定目录/tmp下解压缩，如果已有相同的文件存在，要求unzip命令不覆盖原先的文件。</span>

<span class="token punctuation">[</span>root@JYITTC247 zidv<span class="token punctuation">]</span><span class="token comment"># mkdir tmp</span>
<span class="token punctuation">[</span>root@JYITTC247 zidv<span class="token punctuation">]</span><span class="token comment"># unzip -n aa.zip -d tmp</span>

<span class="token comment"># 查看压缩文件目录，但不解压</span>
<span class="token function">unzip</span> <span class="token parameter variable">-v</span> a.zip

<span class="token comment"># 将压缩文件test.zip在指定目录tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件。</span>
<span class="token function">unzip</span> <span class="token parameter variable">-o</span> aa.zip <span class="token parameter variable">-d</span>  tmp

</code></pre></div><h2 id="tar-1" tabindex="-1"><a class="header-anchor" href="#tar-1" aria-hidden="true">#</a> tar</h2><div class="language-s" data-ext="s"><pre class="language-s"><code>-c  #：建立一个压缩档案的参数指令(create 的意思)；
-x  #：解开一个压缩档案的参数指令！
-t  #：查看 tarfile 里面的档案！
# 特别注意，在参数的下达中， c/x/t 仅能存在一个！不可同时存在！
#    因为不可能同时压缩与解压缩。

-z  #：是否同时具有 gzip 的属性？亦即是否需要用 gzip 压缩？
-j  #：是否同时具有 bzip2 的属性？亦即是否需要用 bzip2 压缩？
-v  #：压缩的过程中显示档案！这个常用，但不建议用在背景执行过程！
-f  #：使用档名，
  #请留意，在 f 之后要立即接文件名！不要再加参数！

# 将整个 /etc 目录下的档案全部打包成为 /tmp/etc.tar

tar cvf  zi.tar zidv

#仅打包，不压缩！
tar -cvf /tmp/etc.tar  /etc  

#打包后，以 gzip 压缩
tar -zcvf /tmp/etc.tar.gz /etc  

#打包后，以 bzip2 压缩
tar -jcvf /tmp/etc.tar.bz2 /etc  

# 特别注意，在参数 f 之后的档案档名是自己取的，我们习惯上都用 .tar 来作为辨识。
# 如果加 z 参数，则以 .tar.gz 或 .tgz 来代表 gzip 压缩过的 tar file 
# 如果加 j 参数，则以 .tar.bz2 来作为附档名

#查阅上述 /tmp/etc.tar.gz 档案内有哪些档案？
tar -tvf zi.tar 
tar -ztvf /tmp/etc.tar.gz

</code></pre></div>`,62);function x(m,b){const e=s("ExternalLinkIcon");return l(),r("div",null,[d,o,h,t("p",null,[t("a",g,[a("压缩"),c(e)]),a("，是利用算法字典对归档的文件进行处理，实现保留最大的文件信息，缩小文件体积。基本原理为，查找文件内的重复字节、连续字节（这也是首先需要归档的原因），从而建立字典文件，压缩时进行替换，当然压缩算法一直在在进步的，详情可查阅相关资料。压缩分为有损压缩和无损压缩，有损压缩常用于音视频图像文件。")]),u])}const z=n(i,[["render",x],["__file","tar_zip.html.vue"]]);export{z as default};
