import{_ as a,p as n,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},l=e(`<h3 id="建立链接文件-ln-link" tabindex="-1"><a class="header-anchor" href="#建立链接文件-ln-link" aria-hidden="true">#</a> 建立链接文件：<code>ln =link</code></h3><ul><li>Linux链接文件类似于Windows下的快捷方式。</li><li>链接文件分为软链接和硬链接。</li><li>软链接：软链接不占用磁盘空间，源文件删除则软链接失效。</li><li>硬链接：硬链接只能链接普通文件，不能链接目录，会同步更新。</li></ul><ul><li>使用格式： <ul><li><code>ln</code> 源文件 链接文件</li><li><code>ln -s</code> 源文件 链接文件</li><li>如果没有<code>-s</code>选项代表建立一个硬链接文件，两个文件占用相同大小的硬盘空间，即使删除了源文件，链接文件还是存在，所以<code>-s</code>选项是更常见的形式。</li></ul></li></ul><ul><li>注意：如果软链接文件和源文件不在同一个目录，源文件要使用绝对路径，不能使用相对路径。</li></ul><ul><li>语法说明 <ul><li>命令名称：<code>ln</code></li><li>命令英文原意：<code>link</code></li><li>命令所在路径：<code>/bin/ln</code></li><li>执行权限：所有用户</li><li>语法：<code>ln -s [源文件] [目标文件]</code></li><li><code>-s</code> 创建软链接</li><li>功能描述：产生链接文件</li></ul></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    
        <span class="token function">ln</span> /etc/issue  /root/etc/issue.bak.hard  硬链接
                <span class="token operator">|</span>--如果删除了issue文件 issue.bak.hard可以使用
        可以使用命令echo <span class="token string">&#39;www.sscst.com&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/issue去修改issue文件
            看看issue.bak.hard里面内容是否更新了
        <span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/issue /root/etc/issue.soft  软链接
                <span class="token operator">|</span>--如果删除了etc/issue文件，那么issue.soft就失效了
        <span class="token function">ls</span> -ilh可以查看文件的硬盘地址，可以看到硬链接的地址的原文件的地址一样
        这也就是为什么能同步更新的原因了

    <span class="token comment"># 链接NGinx</span>

    <span class="token comment">#    -s 软连接   源文件所在路径    目标文件名称自定义，会自动创建</span>
    <span class="token function">ln</span> <span class="token parameter variable">-s</span>   /usr/local/nginx/sbin/nginx   nginxln
</code></pre></div><h3 id="输出重定向命令" tabindex="-1"><a class="header-anchor" href="#输出重定向命令" aria-hidden="true">#</a> 输出重定向命令</h3><p>Linux允许将命令执行结果重定向到一个文件，本应显示在终端上的内容保存到指定文件中。 如：ls &gt; test.txt ( test.txt 如果不存在，则创建，存在则覆盖其内容 )</p><h3 id="查看文件前几行-head" tabindex="-1"><a class="header-anchor" href="#查看文件前几行-head" aria-hidden="true">#</a> 查看文件前几行：head</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>指令名称：head
指令所在路径：/bin/head
执行权限：所有用户
语法：head  <span class="token parameter variable">-num</span>  <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>
	 <span class="token parameter variable">-num</span>  显示文件的前num行
功能描述：查看文件的前几行
范例：$ <span class="token function">head</span>  <span class="token parameter variable">-20</span>  /etc/services  查看services文件的前20行，一般用于看代码的注释
</code></pre></div><h3 id="查看文件后几行-tail" tabindex="-1"><a class="header-anchor" href="#查看文件后几行-tail" aria-hidden="true">#</a> 查看文件后几行：tail</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>指令名称：tail
指令所在路径：/bin/tail
执行权限：所有用户
语法：tail  <span class="token parameter variable">-num</span>  <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>
	 <span class="token parameter variable">-num</span>  显示文件的后num行
功能描述：查看文件的前几行
范例：$ <span class="token function">tail</span>  <span class="token parameter variable">-20</span>  /etc/services  查看services文件的后20行
</code></pre></div><h3 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>命令名称：tar
命令所在路径：/bin/tar
执行权限：所有用户
语法：tar  选项<span class="token punctuation">[</span>cvf<span class="token punctuation">]</span>  <span class="token punctuation">[</span>目录<span class="token punctuation">]</span>
		<span class="token parameter variable">-c</span>    产生.tar打包文件
		<span class="token parameter variable">-v</span>    显示详细信息
		<span class="token parameter variable">-f</span>    指定压缩后的文件名
		<span class="token parameter variable">-z</span>    	打包同时压缩
功能描述：打包目录
压缩后文件格式：.tar.gz
    案例
        <span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> test.tar.gz <span class="token builtin class-name">test</span>  把test文件或文件夹压缩成test.tar.gz
        <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> test.tar.gz 解压test.tar.gz
        <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> xxx.tar.gz <span class="token parameter variable">-C</span> ./dir1 <span class="token comment">#解压到指定目录</span>
</code></pre></div>`,14),i=[l];function c(r,o){return n(),s("div",null,i)}const d=a(t,[["render",c],["__file","link.html.vue"]]);export{d as default};
