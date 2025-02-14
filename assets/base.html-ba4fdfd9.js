import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<p>master : 默认开发分支； origin : 默认远程版本库</p><h3 id="初始化操作" tabindex="-1"><a class="header-anchor" href="#初始化操作" aria-hidden="true">#</a> 初始化操作</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token comment">#设置提交者名字$</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token operator">&lt;</span>email<span class="token operator">&gt;</span> <span class="token comment">#设置提交者邮箱$</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.editor <span class="token operator">&lt;</span>editor<span class="token operator">&gt;</span> <span class="token comment">#设置默认文本编辑器$</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> merge.tool <span class="token operator">&lt;</span>tool<span class="token operator">&gt;</span> <span class="token comment">#设置解决合并冲突时差异分析工具</span>

<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token comment">#检查已有的配置信息</span>
</code></pre></div><h3 id="创建新版本库" tabindex="-1"><a class="header-anchor" href="#创建新版本库" aria-hidden="true">#</a> 创建新版本库</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token comment">#克隆远程版本库$</span>

<span class="token function">git</span> init <span class="token comment">#初始化本地版本库</span>
</code></pre></div><h3 id="修改和提交" tabindex="-1"><a class="header-anchor" href="#修改和提交" aria-hidden="true">#</a> 修改和提交</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment">#添加所有改动过的文件$</span>

<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment">#添加指定的文件$</span>

<span class="token function">git</span> <span class="token function">mv</span> <span class="token operator">&lt;</span>old<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new<span class="token operator">&gt;</span> <span class="token comment">#文件重命名$</span>

<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment">#删除文件$</span>

<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-cached</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment">#停止跟踪文件但不删除$</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment">#提交指定文件$</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> “commit message” <span class="token comment">#提交所有更新过的文件$</span>

<span class="token function">git</span> commit <span class="token parameter variable">-amend</span> <span class="token comment">#修改最后一次提交$</span>

<span class="token function">git</span> commit <span class="token parameter variable">-C</span> HEAD <span class="token parameter variable">-a</span> <span class="token parameter variable">-amend</span> <span class="token comment">#增补提交（不会产生新的提交历史纪录）</span>
</code></pre></div><h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token comment">#查看提交历史$</span>

<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment">#查看指定文件的提交历史$</span>

<span class="token function">git</span> blame <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment">#以列表方式查看指定文件的提交历史$</span>

gitk <span class="token comment">#查看当前分支历史纪录$</span>

gitk <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment">#查看某分支历史纪录$</span>

gitk <span class="token parameter variable">--all</span> <span class="token comment">#查看所有分支历史纪录$</span>

<span class="token function">git</span> branch <span class="token parameter variable">-v</span> <span class="token comment">#每个分支最后的提交$</span>

<span class="token function">git</span> status <span class="token comment">#查看当前状态$</span>

<span class="token function">git</span> <span class="token function">diff</span> <span class="token comment">#查看变更内容</span>
</code></pre></div><h3 id="撤消操作" tabindex="-1"><a class="header-anchor" href="#撤消操作" aria-hidden="true">#</a> 撤消操作</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">-hard</span> HEAD <span class="token comment">#撤消工作目录中所有未提交文件的修改内容$</span>

<span class="token function">git</span> checkout HEAD <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token comment">#撤消指定的未提交文件的修改内容</span>

<span class="token function">git</span> checkout HEAD. <span class="token comment">#撤消所有文件$</span>

<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span> <span class="token comment">#撤消指定的提交</span>
</code></pre></div><h3 id="分支与标签" tabindex="-1"><a class="header-anchor" href="#分支与标签" aria-hidden="true">#</a> 分支与标签</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token comment">#显示所有本地分支$</span>

<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch/tagname<span class="token operator">&gt;</span> <span class="token comment">#切换到指定分支或标签$</span>

<span class="token function">git</span> branch <span class="token operator">&lt;</span>new-branch<span class="token operator">&gt;</span> <span class="token comment">#创建新分支$</span>

<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment">#删除本地分支$</span>

<span class="token function">git</span> tag <span class="token comment">#列出所有本地标签$</span>

<span class="token function">git</span> tag <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token comment">#基于最新提交创建标签$</span>

<span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token comment">#删除标签</span>
</code></pre></div><h3 id="合并与衍合" tabindex="-1"><a class="header-anchor" href="#合并与衍合" aria-hidden="true">#</a> 合并与衍合</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment">#合并指定分支到当前分支$</span>

<span class="token function">git</span> rebase <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment">#衍合指定分支到当前分支</span>
</code></pre></div><h3 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作" aria-hidden="true">#</a> 远程操作</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment">#查看远程版本库信息$</span>

<span class="token function">git</span> remote show <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment">#查看指定远程版本库信息$</span>

<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token comment">#添加远程版本库$</span>

<span class="token function">git</span> fetch <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment">#从远程库获取代码$</span>

<span class="token function">git</span> pull <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment">#下载代码及快速合并$</span>

<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token comment">#上传代码及快速合并$</span>

<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token comment">#删除### 远程分支或标签$</span>

<span class="token function">git</span> push <span class="token parameter variable">-tags</span> <span class="token comment">#上传所有标签</span>
</code></pre></div><ul><li><p>在git上面创建了一个分支，然后本地创建了一个项目，现在要提交这个项目的代码（初始化时会产生一些代码）到远程仓库。</p></li><li><p>1.到项目目录下初始化本地仓库</p></li><li><p><code>git init </code></p></li><li><p>2.将需要的未跟踪文件添加到暂存区，这里添加了所有</p></li><li><p><code>git add .</code> <strong>注意 . 点</strong></p></li><li><p>3.提交暂存区的文件到本地仓库</p></li><li><p><code>git commit -m &#39;初始化提交&#39;</code></p></li><li><p>这个时候，使用git status进行检查会提示<code>nothing to commit, working directory clean</code></p></li><li><p>4.添加远程版本库，如果版本库不存在，则会创建版本库</p></li><li><p><code>git remote add origin &lt;https://git.oschina.net/xxx/xxx.git&gt;</code></p></li><li><p>这里在远程添加了origin。这个时候进行push操作可能会失败，你需要先更新本地代码。</p></li><li><p>5.更新本地代码(远程可能有些代码本地是没有的),origin是刚才创建的版本库</p></li><li><p><code>git pull origin master</code></p></li><li><p>6.提交本地代码</p></li><li><p><code>git push origin master</code></p></li><li><p>根据提示输入账号密码即可完成提交</p></li></ul><h3 id="git-dev分支合并到master并提交" tabindex="-1"><a class="header-anchor" href="#git-dev分支合并到master并提交" aria-hidden="true">#</a> git dev分支合并到master并提交</h3><ol><li><p>git branch //查看当前版本</p></li><li><p>git checkout dev // 如果当前在dev分支上面 则不用执行 如果不在dev 则执行</p></li><li><p>git pull // 拉取最新的代码</p></li><li><p>git checkout master //切换到master分支上面</p></li><li><p>git pull //确保最新的代码</p></li><li><p>git merge dev //将dev分支上面的代码合并到master</p></li><li><p>git push origin master // 推送到远程master仓库</p></li></ol><h2 id="清除本地的gitee用户名和密码" tabindex="-1"><a class="header-anchor" href="#清除本地的gitee用户名和密码" aria-hidden="true">#</a> 清除本地的gitee用户名和密码</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>gitee推送到远程仓库时提示错误

remote: Incorrect username or password <span class="token punctuation">(</span> access token <span class="token punctuation">)</span>

fatal: Authentication failed <span class="token keyword">for</span> <span class="token string">&#39;&lt;https://gitee.com/***/***.git/&gt;&#39;</span>

解决办法：清除本地的gitee用户名和密码

<span class="token function">git</span> config <span class="token parameter variable">--system</span> <span class="token parameter variable">--unset</span> credential.helper

再执行推送，重新输入用户名和密码。

</code></pre></div>`,22),o=[p];function c(l,r){return n(),s("div",null,o)}const k=a(e,[["render",c],["__file","base.html.vue"]]);export{k as default};
