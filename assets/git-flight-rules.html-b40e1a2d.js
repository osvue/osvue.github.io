import{_ as a,p as n,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},c=e(`<h3 id="_1-修改最新-commit-信息" tabindex="-1"><a class="header-anchor" href="#_1-修改最新-commit-信息" aria-hidden="true">#</a> 1. 修改最新 commit 信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre></div><h3 id="_2-修改之前-commit-信息" tabindex="-1"><a class="header-anchor" href="#_2-修改之前-commit-信息" aria-hidden="true">#</a> 2. 修改之前 commit 信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token comment"># 获取 hash</span>
<span class="token comment"># hash 值为对应元素的父元素的hash</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token builtin class-name">hash</span>
<span class="token comment"># 找到要修改的 commit（即第一行 commit）</span>
<span class="token comment"># 将 pick 修改为 r，保存退出</span>
<span class="token comment"># 自动切换至修改 commit 信息界面，修改即可</span>

<span class="token function">git</span> log <span class="token comment"># 验证</span>

</code></pre></div><h3 id="_3-合并多个-commit-信息" tabindex="-1"><a class="header-anchor" href="#_3-合并多个-commit-信息" aria-hidden="true">#</a> 3. 合并多个 commit 信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token comment"># 获取 hash</span>
<span class="token comment"># hash 值为对应元素最后一个的父元素的hash</span>
<span class="token comment"># 个人的理解是，你改变了信息后就无法证明自己是自己，需要介绍父级节点来证明自己</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token builtin class-name">hash</span>
<span class="token comment"># 找到要修改的 commit</span>
<span class="token comment"># 即保留第一行 commit，修改下面行至你期望的目标行</span>
<span class="token comment"># 将 pick 修改为 s，保存退出</span>
<span class="token comment"># 自动切换至修改 commit 信息界面，修改即可</span>

<span class="token function">git</span> log <span class="token comment"># 验证</span>
</code></pre></div><p>当然还有更简单一些的方法：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token comment"># 获取 hash</span>
<span class="token comment"># hash 值为对应元素最后一个的父元素的hash</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> 3bc965a619447a75375aba <span class="token comment"># hash 也可以更为暴力的改为 master（对应分支名,一般是以 feature/bugfix 创建分支，所以该行为简单粗暴）</span>

<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;更简单的方法&quot;</span> <span class="token comment"># -am 对已跟踪的文件提交信息，不会影响尚未 add 的文件</span>
<span class="token function">git</span> log <span class="token comment"># 验证</span>
</code></pre></div><h3 id="将本地仓库关联到远程仓库" tabindex="-1"><a class="header-anchor" href="#将本地仓库关联到远程仓库" aria-hidden="true">#</a> 将本地仓库关联到远程仓库</h3><h3 id="方式一-远程仓库没有文件" tabindex="-1"><a class="header-anchor" href="#方式一-远程仓库没有文件" aria-hidden="true">#</a> 方式一：远程仓库没有文件</h3><p>第一步： <code>git init</code>（初始化git仓库）；</p><p>第二步： <code>git remote add 地址</code>（设置remote地址）；</p><p>第三步： <code>git add .</code> （将所有变更提交到本地仓库）；</p><p>第四步： <code>git commit -m &#39;&#39;</code> （提交注释）；</p><p>第五步： <code>git push</code>（本地仓库推送到远程仓库）</p><h3 id="方式二-远程仓库有文件" tabindex="-1"><a class="header-anchor" href="#方式二-远程仓库有文件" aria-hidden="true">#</a> 方式二：远程仓库有文件</h3><p>第一步： <code>git init</code>（初始化git仓库）；</p><p>第二步： <code>git remote add origin 地址</code>（设置远程remote地址）；</p><p>第三步： <code>git pull origin master</code>（拉取远程仓库master的文件）</p><p>第四步： <code>git branch --set-upstream-to=origin/master master</code>（将本地master设置为远程master分支）</p><p>第五步： <code>git add . </code>（将所有变更提交到本地仓库）；</p><p>第六步： <code>git commit -m &#39;&#39;</code> （提交注释）；</p><p>第七步： <code>git push</code>（本地仓库推送到远程仓库）</p><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><h3 id="分支基本命令" tabindex="-1"><a class="header-anchor" href="#分支基本命令" aria-hidden="true">#</a> 分支基本命令</h3><ol><li>创建分支</li></ol><ul><li>同时创建：仓库+分支</li></ul><p><code>git init -b &lt;分支名称&gt;</code></p><ul><li>已有仓库，再创建分支</li></ul><p>仅创建分支：<code>git branch&lt;分支名称&gt;</code></p><p>创建并切换到分支：<code>git checkout -b &lt;分支名称&gt; </code></p><ol start="2"><li><p>分支查看 <code>git branch</code></p></li><li><p>切换分支 <code>git checkout &lt;分支名称&gt;</code></p></li><li><p>删除分支 <code>git branch -D &lt;分支名称&gt;</code></p></li><li><p>重命名分支 <code>git branch -m &lt;原名称&gt; &lt;新名称&gt;</code></p></li><li><p>分支合并 <code>git merge &lt;被合并分支名称&gt;</code></p></li></ol><h3 id="实操流程" tabindex="-1"><a class="header-anchor" href="#实操流程" aria-hidden="true">#</a> 实操流程</h3><ol><li>创建分支：创建版本库同时创建分支 <code>git init -b dev</code></li></ol><p><code>-b：代表 branch 分支意思</code><code>dev：代表开发分支</code> 2. 查看版本库有哪些分支 <code>git branch</code></p><ol start="3"><li><p>查看版本库状态 <code>git status</code></p></li><li><p>提交分支内容 <code>git commit -m &#39;第一次提交&#39;</code></p></li><li><p>创建分支二：在现在版本库创建新分支 <code>git branch cs</code></p></li></ol><p><code>cs：分支名称</code> 6. 分支重命名</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-m</span> cs abc

cs：旧名称
abc：新名称
</code></pre></div><ol start="7"><li>删除分支</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> abc

-d：为delete，删除，用于删除已经合并过的分支
-D：强制删除分支（不管是否合并过）
</code></pre></div><ol start="8"><li>切换分支 <code>git checkout dev</code></li></ol><p>dev：代表开发分支 9. 合并分支</p><p><code>git merge dev</code></p><ul><li><strong>此时在别的分支下</strong>，合并dev分支 dev：代表开发分支</li></ul><ul><li><strong>远程是空白仓库没有任何文件的时候</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>//初始化
<span class="token function">git</span> init
//从现有 Git 仓库中拷贝项目
<span class="token function">git</span> clone
//关联远程仓库
<span class="token function">git</span> remote <span class="token function">add</span> origin 远程地址
//提交本地文件到暂存区
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
//将暂存区内容添加到本地仓库中
<span class="token function">git</span> commit -m<span class="token string">&quot;注释&quot;</span>
//推送到远程分支
<span class="token function">git</span> push
</code></pre></div><ul><li><strong>远程仓库有文件</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>//初始化
<span class="token function">git</span> init
//关联远程仓库
<span class="token function">git</span> remote <span class="token function">add</span> origin 远程地址
//拉取远程master分支上内容
<span class="token function">git</span> fetch origin master
//设置当前分支为远程仓库的master分支
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/master master
//提交本地文件到暂存区
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
//将暂存区内容添加到本地仓库中
<span class="token function">git</span> commit -m<span class="token string">&quot;注释&quot;</span>
//推送到远程分支
<span class="token function">git</span> push
</code></pre></div>`,48),o=[c];function i(p,l){return n(),s("div",null,o)}const r=a(t,[["render",i],["__file","git-flight-rules.html.vue"]]);export{r as default};
