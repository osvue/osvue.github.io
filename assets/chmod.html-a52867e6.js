import{_ as s,p as a,q as n,a1 as t}from"./framework-d81ad7e5.js";const e="/assets/chown-7dc6132b.png",r={},l=t('<h3 id="查看文件和目录的权限" tabindex="-1"><a class="header-anchor" href="#查看文件和目录的权限" aria-hidden="true">#</a> 查看文件和目录的权限</h3><p>随便进入一个文件夹，执行ls -l。 <img src="'+e+`" alt="alt"></p><ul><li>第1列：代表文件的类型。我们常见的是d和-。d代表是目录文件。-代表是普通文件。其他不常见的有。l代表链接文件，b代表块设备。c代表字符设备文件。</li><li>第2-10列：代表该文件的权限。三个为一组。第一组代表文件所有者的权限，第二组代表同用户组的权限，第三组代表其他用户非本用户组的权限。 每组权限中的rwx，分别代表读，写，可执行的意思。</li><li>第11列数字，图中的1，5，3，2这列，代表有多少文件名连接到此节点。 每个文件都会将它的权限与属性记录到文件系统的i-node中，不过我们使用的目录树却是使用文件名来记录，因此每个文件名就会连接到一个i-node，这个属性记录的就是有多少不同的文件名连接到相同的一个i-node号码。</li><li>第12列的root：所属者用户名</li><li>第13列的root：所属用户组</li><li>第14列：容量大小，默认为B</li><li>后面为创建或修改日期，最后为文件名。</li></ul><p>ls –al使用 ls 不带参数只显示文件名称，通过ls –al\` 可以显示文件或者目录的权限信息。</p><p>ls -l 文件名 显示信息包括： 文件类型 (d 目录，- 普通文件，l 链接文件)，文件权限，文件的用户，文件的所属组，文件的大小，文件的创建时间，文件的名称</p><p><code>-rw-r--r-- 1 lusifer lusifer 675 Oct 26 17:20 .profile</code></p><ul><li>-：普通文件</li><li>rw-：说明用户 lusifer 有读写权限，没有运行权限</li><li>r--：表示用户组 lusifer 只有读权限，没有写和运行的权限</li><li>r--：其他用户只有读权限，没有写权限和运行的权限</li></ul><table><thead><tr><th>-rw-r--r--</th><th>1</th><th>lusifer</th><th>lusifer</th><th>675</th><th>Oct 26 17:20</th><th>.profile</th></tr></thead><tbody><tr><td>文档类型及权限</td><td>连接数</td><td>文档所属用户</td><td>文档所属组</td><td>文档大小</td><td>文档最后被修改日期</td><td>文档名称</td></tr></tbody></table><table><thead><tr><th>-</th><th>rw-</th><th>r--</th><th>r--</th></tr></thead><tbody><tr><td>文档类型</td><td>文档所有者权限（user）</td><td>文档所属用户组权限（group）</td><td>其他用户权限（other）</td></tr></tbody></table><h3 id="文档类型" tabindex="-1"><a class="header-anchor" href="#文档类型" aria-hidden="true">#</a> 文档类型</h3><ul><li>d 表示目录</li><li>l 表示软连接</li><li>– 表示文件</li><li>c 表示串行端口字符设备文件</li><li>b 表示可供存储的块设备文件</li><li>余下的字符 3 个字符为一组。r 只读，w 可写，x 可执行，- 表示无此权限</li></ul><h3 id="连接数" tabindex="-1"><a class="header-anchor" href="#连接数" aria-hidden="true">#</a> 连接数</h3><p>指有多少个文件指向同一个索引节点。</p><h3 id="文档所属用户和所属组" tabindex="-1"><a class="header-anchor" href="#文档所属用户和所属组" aria-hidden="true">#</a> 文档所属用户和所属组</h3><p>就是文档属于哪个用户和用户组。文件所属用户和组是可以更改的</p><h3 id="文档大小" tabindex="-1"><a class="header-anchor" href="#文档大小" aria-hidden="true">#</a> 文档大小</h3><p>默认是 bytes</p><h2 id="更改操作权限" tabindex="-1"><a class="header-anchor" href="#更改操作权限" aria-hidden="true">#</a> 更改操作权限</h2><h3 id="chown" tabindex="-1"><a class="header-anchor" href="#chown" aria-hidden="true">#</a> chown</h3><p>是 <strong>change owner</strong> 的意思，主要作用就是改变文件或者目录所有者，所有者包含用户和用户组</p><p>chown [-R] 用户名称 文件或者目录</p><p>chown [-R] 用户名称 用户组名称 文件或目录</p><p>-R：进行递归式的权限更改，将目录下的所有文件、子目录更新为指定用户组权限</p><h3 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod" aria-hidden="true">#</a> chmod</h3><p>改变访问权限</p><p><strong><code>chmod [who] [+ | - | =] [mode] 文件名</code></strong></p><h4 id="who" tabindex="-1"><a class="header-anchor" href="#who" aria-hidden="true">#</a> who</h4><p>表示操作对象可以是以下字母的一个或者组合</p><ul><li>u：用户 user</li><li>g：用户组 group</li><li>o：表示其他用户</li><li>a：表示所有用户是系统默认的</li></ul><h4 id="操作符号" tabindex="-1"><a class="header-anchor" href="#操作符号" aria-hidden="true">#</a> 操作符号</h4><ul><li>+：表示添加某个权限</li><li>-：表示取消某个权限</li><li>=：赋予给定的权限，取消文档以前的所有权限</li></ul><h4 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h4><p>表示可执行的权限，可以是 r、w、x</p><h4 id="文件名" tabindex="-1"><a class="header-anchor" href="#文件名" aria-hidden="true">#</a> 文件名</h4><p>文件名可以使空格分开的文件列表</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lusifer@UbuntuBase:~$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> test.txt
-rw-rw-r-- <span class="token number">1</span> lusifer lusifer <span class="token number">6</span> Nov <span class="token number">2</span> <span class="token number">21</span>:47 test.txt
lusifer@UbuntuBase:~$ <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g+r,o+r test.txt
lusifer@UbuntuBase:~$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> test.txt
-rwxrw-r-- <span class="token number">1</span> lusifer lusifer <span class="token number">6</span> Nov <span class="token number">2</span> <span class="token number">21</span>:47 test.txt
lusifer@UbuntuBase:~$
</code></pre></div><h2 id="数字设定法" tabindex="-1"><a class="header-anchor" href="#数字设定法" aria-hidden="true">#</a> 数字设定法</h2><p>数字设定法中数字表示的含义</p><ul><li>0 表示没有任何权限</li><li>1 表示有可执行权限 = x</li><li>2 表示有可写权限 = w</li><li>4 表示有可读权限 = r</li></ul><p>也可以用数字来表示权限如 chmod 755 file_name</p><table><thead><tr><th>r w x</th><th>r – x</th><th>r - x</th></tr></thead><tbody><tr><td>4 2 1</td><td>4 - 1</td><td>4 - 1</td></tr><tr><td>user</td><td>group</td><td>others</td></tr></tbody></table><p>若要 rwx 属性则 4+2+1=7</p><p>若要 rw- 属性则 4+2=6</p><p>若要 r-x 属性则 4+1=5</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lusifer@UbuntuBase:~$ <span class="token function">chmod</span> <span class="token number">777</span> test.txt
lusifer@UbuntuBase:~$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> test.txt
<span class="token parameter variable">-rwxrwxrwx</span> <span class="token number">1</span> lusifer lusifer <span class="token number">6</span> Nov <span class="token number">2</span> <span class="token number">21</span>:47 test.txt

lusifer@UbuntuBase:~$ <span class="token function">chmod</span> <span class="token number">770</span> test.txt
lusifer@UbuntuBase:~$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> test.txt
-rwxrwx--- <span class="token number">1</span> lusifer lusifer <span class="token number">6</span> Nov <span class="token number">2</span> <span class="token number">21</span>:47 test.txt
</code></pre></div><h3 id="chgrp命令" tabindex="-1"><a class="header-anchor" href="#chgrp命令" aria-hidden="true">#</a> chgrp命令</h3><h5 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述" aria-hidden="true">#</a> 1、概述</h5><p>改变文件或目录所属的组</p><h5 id="_2、命令" tabindex="-1"><a class="header-anchor" href="#_2、命令" aria-hidden="true">#</a> 2、命令</h5><p><code>chgrp ［选项］ group filename</code></p><p><code>\\- R </code>递归式地改变指定目录及其下的所有子目录和文件的属组。 group为用户组id或者为<code>/etc/group</code>中用户的用户组名。如果用户不是文件的属主或者超级用户，则不能改变。</p><h5 id="_3、例子" tabindex="-1"><a class="header-anchor" href="#_3、例子" aria-hidden="true">#</a> 3、例子</h5><p><code>chgrp - R weblogic /etc</code> 将etc及etc下所有文件和目录的属组都改为weblogic。</p><h3 id="chown命令使用举例" tabindex="-1"><a class="header-anchor" href="#chown命令使用举例" aria-hidden="true">#</a> chown命令使用举例：</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># chown [-R] [用户名称] [文件或目录]</span>
<span class="token comment"># chown [-R] [用户名称:组名称] [文件或目录]</span>


<span class="token comment"># 范例1：将test3.txt文件的属主改为test用户。</span>

 <span class="token function">ls</span> <span class="token parameter variable">-l</span> test3.txt
<span class="token comment">#-rw-r–r– 1 test root 0 2009-10-23 9:59 test3.txt</span>

 <span class="token function">chown</span> test:root test3.txt

<span class="token function">ls</span> <span class="token parameter variable">-l</span> test3.txt
<span class="token comment"># -rw-r–r– 1 test root 0 2009-10-23 9:59</span>

<span class="token comment"># 范例2：chown所接的新的属主和新的属组之间可以使用:连接，属主和属组之一可以为空。如果属主为空，应该是“:属组”；如果属组为空，“:”可以不用带上。</span>


 <span class="token function">ls</span> <span class="token parameter variable">-l</span> test3.txt
<span class="token comment">#-rw-r–r– 1 test root 0 2009-10-23 9:59 test3.txt</span>


 <span class="token function">chown</span> :test test3.txt <span class="token comment">#把文件test3.txt的属组改为test</span>

 <span class="token function">ls</span> <span class="token parameter variable">-l</span> test3.txt
<span class="token comment">#-rw-r–r– 1 test test 0 2009-10-23 9:59 test3.txt</span>


<span class="token comment"># 范例3：chown也提供了-R参数，这个参数对目录改变属主和属组极为有用，可以通过加 -R参数来改变某个目录下的所有文件到新的属主或属组。</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span> testdir <span class="token comment"># 查看testdir目录属性</span>

<span class="token comment">#drwxr-xr-x 2 usr root 0 2009-10-56 10:38 testdir/ #文件属主是usr用户，属组是 root用户</span>

 <span class="token function">ls</span> <span class="token parameter variable">-lr</span> testdir <span class="token comment">#查看testdir目录下所有文件及其属性</span>

total <span class="token number">0</span>
-rw-r–r– <span class="token number">1</span> usr root <span class="token number">0</span> <span class="token number">2009</span>-10-23 <span class="token number">10</span>:38 test1.txt
-rw-r–r– <span class="token number">1</span> usr root <span class="token number">0</span> <span class="token number">2009</span>-10-23 <span class="token number">10</span>:38 test2.txt
-rw-r–r– <span class="token number">1</span> usr root <span class="token number">0</span> <span class="token number">2009</span>-10-23 <span class="token number">10</span>:38 test3.txt

<span class="token function">chown</span> <span class="token parameter variable">-R</span> test:test testdir/ <span class="token comment">#修改testdir及它的下级目录和所有文件到新的用户和用户组</span>

 <span class="token function">ls</span> <span class="token parameter variable">-l</span> testdir
<span class="token comment">#drwxr-xr-x 2 test test 0 2009-10-23 10:38 testdir/</span>
 <span class="token function">ls</span> <span class="token parameter variable">-lr</span> testdir

total <span class="token number">0</span>
-rw-r–r– <span class="token number">1</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">test</span> <span class="token number">0</span> <span class="token number">2009</span>-10-23 <span class="token number">10</span>:38 test1.txt
-rw-r–r– <span class="token number">1</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">test</span> <span class="token number">0</span> <span class="token number">2009</span>-10-23 <span class="token number">10</span>:38 test2.txt
-rw-r–r– <span class="token number">1</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">test</span> <span class="token number">0</span> <span class="token number">2009</span>-10-23 <span class="token number">10</span>:38 test3.txt

</code></pre></div>`,56),p=[l];function o(c,i){return a(),n("div",null,p)}const h=s(r,[["render",o],["__file","chmod.html.vue"]]);export{h as default};
