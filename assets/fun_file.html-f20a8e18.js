import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="文件基本操作" tabindex="-1"><a class="header-anchor" href="#文件基本操作" aria-hidden="true">#</a> 文件基本操作：</h3><ul><li>创建文件： 在Python中利用<code>open(file_name,code)</code>方法来创建（打开）文件 （如果该文件已存在就直接打开，如果该文件不存在，就创建新文件）。语法格式如下： <code>open(file_name,code)</code></li><li>参数说明： <ul><li>name:创建文件的名称；</li><li>code：创建文件的模式。</li></ul></li></ul><table><thead><tr><th>code</th><th>含义</th></tr></thead><tbody><tr><td>‘w’</td><td>打开一个文件，只写</td></tr><tr><td>‘wb’</td><td>以二进制格式打开一个文件，只写</td></tr><tr><td>‘w+’</td><td>打开一个文件，读写</td></tr><tr><td>‘wb+‘</td><td>以二进制格式打开一个文件，读写</td></tr><tr><td>‘r’</td><td>以只读的方式打开文件。文件指针位于文件开头</td></tr><tr><td>‘r+’</td><td>打开一个文件用于读写。文件指针位于文件开头</td></tr><tr><td>‘rb’</td><td>以二进制格式打开一个文件进行读写。文件指针位于文件开头，一般用于非文本文件（如，图片）</td></tr><tr><td>‘a’</td><td>打开一个文件用于追加。若该文件已存在，则文件指针位于文件末尾，新的内容将被被写入到原有内容之后；若该文件不存在，则创建新文件进行写入。</td></tr><tr><td>‘ab’</td><td>以二进制格式打开一个文件，用于追加。若该文件已存在，则文件指针位于文件末尾，新的内容将被被写入到原有内容之后；若该文件不存在，则创建新文件进行写入。</td></tr><tr><td>‘a+’</td><td>打开一个文件用于读写.文件指针位于文件末尾</td></tr><tr><td>‘ab+’</td><td>以二进制格式打开一个文件用于读写。文件指针位于文件末尾</td></tr></tbody></table><p><strong>数据的读取与写入方式</strong>： 在文本模式下，文件中的内容被视为字符串 <strong>（在 Python 3 中为 Unicode 字符串）</strong>，并且会自动处理平台特定的行结束符。</p><ul><li>在 Windows 上，行结束符为<code> \\r\\n</code>，在 <code>Unix/Linux</code> 上为 <code>\\n</code>。</li><li>当你从文件读取或写入文本时，Python 会自动处理这些行结束符。但是，在二进制模式下，数据则被视为原始字节流，不会对行结束符做任何处理。</li></ul><p><strong>编码问题</strong>： 在文本模式下，可以通过 <code>encoding</code> 参数指定一个字符编码方式，比如 <code>UTF-8，ASCII</code>等。</p><ul><li>当你从文件读取或写入文本时，Python 会自动根据指定的编码方式对文本进行编码或解码。</li><li>但是，在二进制模式下，由于数据被视为原始字节流，不涉及任何编码和解码的操作，所以不需要（也不能）指定字符编码方式。</li></ul><p><strong>文件类型</strong>： 有些文件（比如<strong>图片，音频，视频</strong>等）是以二进制格式存储的，这些文件必须以二进制模式打开。</p><ul><li>如果尝试以文本模式打开这些文件，可能会导致数据的损坏。</li><li>因此，在处理文件时，应根据文件的类型和需要处理的数据类型选择适当的文件打开模式。</li><li>如果你需要处理的是文本数据，那么通常应使用文本模式。</li><li>如果你需要处理的是<strong>二进制数据</strong>（比如图片或音频文件），或者需要进行低级的文件操作（比如读写固定数量的字节），那么应使用二进制模式。</li></ul><h3 id="写入文件内容" tabindex="-1"><a class="header-anchor" href="#写入文件内容" aria-hidden="true">#</a> 写入文件内容：</h3><p>文件创建成功后，就利用<code>write（string）</code>可以向文件中写入内容。语法格式如下： <code>write(string)</code> 参数及注意事项说明： string:要写入文件中的字符串。但需要注意的是，</p><ul><li>Python字符串可以是二进制字符串。特别是当，文件以二进制模式创建时，string要利用 encode（）转换为bytes形式，否则会报错</li><li>注意事项： write()方法的返回值为写入的字符长度；</li><li>write（）方法不会在字符串的末尾添加换行符；</li><li>在文件关闭或缓冲区刷新前，字符串内容还存储在缓冲区中，在文件中是看不到写入的内容的。利用close（）方法来关闭文件。</li></ul><p>在python，使用open函数，可以打开一个已经存在的文件，或者创建一个新文件 open(文件名，访问模式)</p><table><thead><tr><th>访问模式</th><th>说明</th></tr></thead><tbody><tr><td>r</td><td>以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。</td></tr><tr><td>w</td><td>打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</td></tr><tr><td>a</td><td>打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。</td></tr><tr><td>rb</td><td>以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。</td></tr><tr><td>wb</td><td>以二进制格式打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</td></tr><tr><td>ab</td><td>以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。</td></tr><tr><td>r+</td><td>打开一个文件用于读写。文件指针将会放在文件的开头。</td></tr><tr><td>w+</td><td>打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</td></tr><tr><td>a+</td><td>打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。</td></tr><tr><td>rb+</td><td>以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。</td></tr><tr><td>wb+</td><td>以二进制格式打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</td></tr><tr><td>ab+</td><td>以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。</td></tr></tbody></table><h4 id="关闭文件" tabindex="-1"><a class="header-anchor" href="#关闭文件" aria-hidden="true">#</a> 关闭文件</h4><p>close( )</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 新建一个文件，文件名为:</span>
test<span class="token punctuation">.</span>txt f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 关闭这个文件 </span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="文件的读写" tabindex="-1"><a class="header-anchor" href="#文件的读写" aria-hidden="true">#</a> 文件的读写</h4><ul><li>写数据(write) 使用write()可以完成向文件写入数据</li></ul><p><code>f = open(&#39;test.txt&#39;, &#39;w&#39;) f.write(&#39;hello world, i am here!&#39;) f.close() </code> 注意：如果文件不存在那么创建，如果存在那么就先清空，然后写入数据</p><h4 id="读数据-read" tabindex="-1"><a class="header-anchor" href="#读数据-read" aria-hidden="true">#</a> 读数据(read)</h4><p>使用read(num)可以从文件中读取数据，num表示要从文件中读取的数据的长度（单位是字节），如果没有传入num，那么就表示读取文件中所有的数据</p><div class="language-python" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> 
content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token operator">*</span><span class="token number">30</span><span class="token punctuation">)</span> 
content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span> 
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div><p>注意：如果open是打开一个文件，那么可以不用谢打开的模式，即只写 open(&#39;test.txt&#39;)，如果使用读了多次，那么后面读取的数据是从上次读完后的位置开始的</p><h5 id="读数据-readlines" tabindex="-1"><a class="header-anchor" href="#读数据-readlines" aria-hidden="true">#</a> 读数据（readlines）</h5><p>就像read没有参数时一样，readlines可以按照行的方式把整个文件中的内容进行一次性读取，并且返回的是一个列表，其中每一行的数据为一个元素</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8 </span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> 
content <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span> 
i<span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> temp <span class="token keyword">in</span> content<span class="token punctuation">:</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%d:%s&quot;</span><span class="token operator">%</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">)</span> 
i<span class="token operator">+=</span><span class="token number">1</span> 
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div><h5 id="读数据-readline" tabindex="-1"><a class="header-anchor" href="#读数据-readline" aria-hidden="true">#</a> 读数据（readline）</h5><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding=utf-8 </span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> 
content <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;1:%s&quot;</span><span class="token operator">%</span>content<span class="token punctuation">)</span> 
content <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;2:%s&quot;</span><span class="token operator">%</span>content<span class="token punctuation">)</span> 
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div><h3 id="文件的定位读写" tabindex="-1"><a class="header-anchor" href="#文件的定位读写" aria-hidden="true">#</a> 文件的定位读写</h3><h5 id="获取当前读写的位置tell" tabindex="-1"><a class="header-anchor" href="#获取当前读写的位置tell" aria-hidden="true">#</a> 获取当前读写的位置tell</h5><p>在读写文件的过程中，如果想知道当前的位置，可以使用tell()来获取</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 打开一个已经存在的文件 </span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> 
<span class="token builtin">str</span> <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;读取的数据是 : &quot;</span><span class="token punctuation">,</span> <span class="token builtin">str</span> 
<span class="token comment"># 查找当前位置 </span>
position <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;当前文件位置 : &quot;</span><span class="token punctuation">,</span> position 
<span class="token builtin">str</span> <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;读取的数据是 : &quot;</span><span class="token punctuation">,</span> <span class="token builtin">str</span> 
<span class="token comment"># 查找当前位置 </span>
position <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;当前文件位置 : &quot;</span><span class="token punctuation">,</span> position 
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div><h5 id="定位到某个位置" tabindex="-1"><a class="header-anchor" href="#定位到某个位置" aria-hidden="true">#</a> 定位到某个位置</h5><p>如果在读写文件的过程中，需要从另外一个位置进行操作的话，可以使用seek()</p><ul><li>seek(offset, from)有2个参数</li><li>offset:偏移量</li><li>from:方向 <ul><li>0:表示文件开头</li><li>1:表示当前位置</li><li>2:表示文件末尾</li><li>demo:把位置设置为：从文件开头，偏移5个字节</li></ul></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 打开一个已经存在的文件 </span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> 
<span class="token builtin">str</span> <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;读取的数据是 : &quot;</span><span class="token punctuation">,</span> <span class="token builtin">str</span> 
<span class="token comment"># 查找当前位置 </span>
position <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;当前文件位置 : &quot;</span><span class="token punctuation">,</span> position 
<span class="token comment"># 重新设置位置 </span>
f<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> 
<span class="token comment"># 查找当前位置 </span>
position <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;当前文件位置 : &quot;</span><span class="token punctuation">,</span> position 
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> 
demo<span class="token punctuation">:</span>把位置设置为：离文件末尾，<span class="token number">3</span>字节处
<span class="token comment"># 打开一个已经存在的文件 </span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> 
<span class="token comment"># 查找当前位置 </span>
position <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;当前文件位置 : &quot;</span><span class="token punctuation">,</span> position 
<span class="token comment"># 重新设置位置 </span>
f<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> 
<span class="token comment"># 读取到的数据为：文件最后3个字节数据 </span>
<span class="token builtin">str</span> <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token string">&quot;读取的数据是 : &quot;</span><span class="token punctuation">,</span> 
<span class="token builtin">str</span> f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="文件的相关操作" tabindex="-1"><a class="header-anchor" href="#文件的相关操作" aria-hidden="true">#</a> 文件的相关操作</h5><ul><li>有些时候，需要对文件进行重命名、删除等操作，python的os模块中都有这么功能</li></ul><h3 id="import-os" tabindex="-1"><a class="header-anchor" href="#import-os" aria-hidden="true">#</a> <code>import os</code></h3><p>python编程时，经常和文件、目录打交道，这是就离不了os模块。os模块包含普遍的操作系统功能，与具体的平台无关。以下列举常用的命令</p><ol><li>os.name()——判断现在正在实用的平台，<strong>Windows 返回 ‘nt&#39;; Linux 返回’posix&#39;</strong></li></ol><ul><li>rename(需要修改的文件名, 新的文件名) 也可以做剪切。</li></ul><ol><li>os.getcwd()——得到当前工作的目录。</li><li>os.listdir()——指定所有目录下所有的文件和目录名。以列表的形式全部列举出来，其中没有区分目录和文件。</li><li>os.remove()——删除指定文件</li><li>os.rmdir()——删除指定目录 ：该目录不能为空</li><li>os.mkdir()——创建目录 <ul><li>注意：这样只能建立一层，要想递归建立可用：<strong>os.makedirs(x/y/z)</strong></li></ul></li><li>os.path.isfile()——判断指定对象是否为文件。是返回True,否则False</li><li>os.path.isdir()——判断指定对象是否为目录。是True,否则False。</li><li>os.path.exists()——检验指定的对象是否存在。是True,否则False.</li><li>os.path.split()——返回路径的目录和文件名。</li></ol><p>此处只是把前后两部分分开而已。就是找最后一个&#39;/&#39;。看例子：</p><ol start="11"><li>os.getcwd()——获得当前工作的目录<code>（get current work dir)</code></li><li>os.system()——执行shell命令。</li></ol><p>注意：此处运行shell命令时，如果要调用python之前的变量，可以用如下方式： <code>var=123</code><code>os.environ[&#39;var&#39;]=str(var) //注意此处[]内得是 “字符串”</code><code>os.system(&#39;echo $var&#39;)</code></p><ol start="13"><li><p>os.chdir()——改变目录到指定目录</p></li><li><p>os.path.getsize()——获得文件的大小，如果为目录，返回0</p></li><li><p>os.path.abspath()——获得绝对路径。</p></li><li><p>os.path.join(path, name)——连接目录和文件名。</p></li><li><p>os.path.basename(path)——返回文件名</p></li><li><p>os.path.dirname(path)——返回文件所在目录</p></li></ol><h3 id="文件夹的基本操作" tabindex="-1"><a class="header-anchor" href="#文件夹的基本操作" aria-hidden="true">#</a> 文件夹的基本操作</h3><ul><li>文件夹的创建：</li></ul><p>掌握一个方法：<code>os.mkdir (path)</code>。 在Python中常用该方法来创建文件夹。</p><p><code>os.mkdir (path)</code> 参数说明： path是创建文件夹的路径。该方法没有返回值</p><ol><li>绝对路径： 从磁盘的根目录开始定位，直到对应的位置为止。</li><li>相对路径： 从当前所在路径开始定位，直到对应的位置为止。用 “.” 表示当前目录；用“. .”表示上一级目录</li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token comment">#------在相对路径下创建文件夹----------------</span>
<span class="token comment">#在当前目录下创建一个文件夹</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;mydir1&quot;</span><span class="token punctuation">)</span> 

<span class="token comment">#在当前目录的mydir1文件夹中创建一个子文件夹</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;./mydir1/sub_mydir1&quot;</span><span class="token punctuation">)</span>

<span class="token comment">#在当目录的上一级目录下创建一个文件夹</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;../up_mydir1&quot;</span><span class="token punctuation">)</span>
 
<span class="token comment">#-------在绝对路径下创建文件夹---------------</span>
<span class="token comment">#在C盘根目录下创建一个文件夹</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;C:/mydir&quot;</span><span class="token punctuation">)</span>

<span class="token comment">#在C盘的mydir文件夹中创建一个子文件夹</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;C:/mydir/sub_mydir&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;创建成功!&quot;</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="判断文件夹是否存在" tabindex="-1"><a class="header-anchor" href="#判断文件夹是否存在" aria-hidden="true">#</a> 判断文件夹是否存在</h3><p>掌握一个方法：os.path.exists(path) 在Python中，利用该方法来判断文件夹的路径。该方法返回值为Trueor False。</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os 
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;mydir1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;该文件夹已存在！&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;该文件夹不存在，可以新建。&quot;</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="文件夹重命名" tabindex="-1"><a class="header-anchor" href="#文件夹重命名" aria-hidden="true">#</a> 文件夹重命名</h3><p><code>os.rename(src,dst)</code> 在Python中，利用该方法对文件夹进行重命名。 参数说明： src:文件夹原名； dst:文件夹新名；</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;mydir1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;该文件夹存在，可以重命名。&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;new_mydir1&quot;</span><span class="token punctuation">)</span>
       <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;sorry，new_mydir 文件夹已存在&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">else</span><span class="token punctuation">:</span>
       <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;new_mydir1文件夹不存在可以重命名。&quot;</span><span class="token punctuation">)</span>
   	  os<span class="token punctuation">.</span>rename<span class="token punctuation">(</span><span class="token string">&quot;mydir1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;new_mydir1&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;重命名成功。&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;该文件夹不存在，无法进行重命名操作！&quot;</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="文件夹的删除" tabindex="-1"><a class="header-anchor" href="#文件夹的删除" aria-hidden="true">#</a> 文件夹的删除</h3><p><code>os.rmdir(path)</code> 在Python中，利用该方法来删除文件夹。path为该文件夹的路径，该方法没有返回值.</p><ol><li>在进行删除操作前，应先判断，要删除的文件夹是否已经存在（即删除操作有无操作对象）</li><li><code>os.rmdir(path)</code>方法只能<strong>删除空的文件夹</strong>，即文件夹中不能有文件夹或文件。否则操作无法执行。</li><li>可以利用<code>os.listdir(path)</code>方法来查看文件夹中的文件夹或文件。该方法返回一个列表，其中包含由路径指定的目录中条目的名称。</li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> os
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;C:/mydir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;该文件夹存在，可以删除。&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span><span class="token string">&quot;C:/mydir/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
       os<span class="token punctuation">.</span>rmdir<span class="token punctuation">(</span><span class="token string">&quot;C:/mydir/&quot;</span><span class="token punctuation">)</span>
       <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">else</span><span class="token punctuation">:</span>
       <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;删除操作无效，mydir 非空。&quot;</span><span class="token punctuation">)</span>
       
<span class="token keyword">else</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;该文件夹不存在，无法删除！&quot;</span><span class="token punctuation">)</span>


</code></pre></div><h2 id="与文件夹和文件有关的其他操作" tabindex="-1"><a class="header-anchor" href="#与文件夹和文件有关的其他操作" aria-hidden="true">#</a> 与文件夹和文件有关的其他操作</h2><ul><li>获取和修改当前文件夹的位置 在Python中，利用<code>os.getcwd()</code>方法可以获取当前文件夹的位置，注意该方法没有参数。 使用<code>os.chdir(path)</code>可以修改当前文件夹的位置。</li></ul><h3 id="连接目录和文件名" tabindex="-1"><a class="header-anchor" href="#连接目录和文件名" aria-hidden="true">#</a> 连接目录和文件名</h3><p>Python中，利用<code>os.path.join(dir, filename)</code>方法可以连接目录和文件名</p><p>参数说明： dir:文件的目录 filename:目录中的文件名</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
str1 <span class="token operator">=</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
list_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;显示当前文件夹中包含的所有文件绝对路径&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">:</span>
	filepath <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span><span class="token builtin">file</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>filepath<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>

</code></pre></div><h3 id="文件的复制与删除" tabindex="-1"><a class="header-anchor" href="#文件的复制与删除" aria-hidden="true">#</a> 文件的复制与删除</h3><ul><li>在Python中，利用<code>shutil.copy(oldfile,newfile)</code>方法可以复制文件，其中，oldfile为原来的文件名，newfile副本的文件名。</li><li>删除文件可以使用 os.remove(file),其中参数file为要删除的文件名</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os 
<span class="token keyword">import</span> shutil 

<span class="token comment">#复制文件</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;2.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w+&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;2.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    shutil<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token string">&quot;2.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;new_2.txt&quot;</span><span class="token punctuation">)</span>
    str_copy <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;new_2.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>str_copy<span class="token punctuation">)</span>
    
<span class="token comment">#删除文件</span>
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;new_1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;new_1.txt&quot;</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="判断文件-文件夹" tabindex="-1"><a class="header-anchor" href="#判断文件-文件夹" aria-hidden="true">#</a> 判断文件/文件夹</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
 
path <span class="token operator">=</span> <span class="token string">&#39;/path/to/file_or_directory&#39;</span>
 
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string"> 是一个文件&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string"> 是一个文件夹&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string"> 不存在或不是文件或文件夹&#39;</span></span><span class="token punctuation">)</span>
</code></pre></div>`,75),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","fun_file.html.vue"]]);export{r as default};