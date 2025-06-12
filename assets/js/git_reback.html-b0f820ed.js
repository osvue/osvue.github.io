import{_ as a,o as s,c as e,a as t}from"./app-215c512d.js";const c={};function o(p,n){return s(),e("div",null,n[0]||(n[0]=[t(`<h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h2><ol><li>全局代理</li></ol><p>该项可参考 <a href="/os/linux/hadoo">alias</a> 部分内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 添加 多余文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> 
<span class="token comment"># （空格+ 点） 表示当前目录所有文件，不小心就会提交其他文件</span>

<span class="token function">git</span> <span class="token function">add</span>
<span class="token comment">#  如果添加了错误的文件的话</span>
<span class="token comment"># 撤销操作</span>

<span class="token function">git</span> status                     <span class="token comment">#先看一下add 中的文件</span>
<span class="token function">git</span> reset HEAD                 <span class="token comment">#如果后面什么都不跟的话 就是上一次add 里面的全部撤销了</span>
<span class="token function">git</span> reset HEAD XXX/XXX/XXX.c   <span class="token comment">#就是对某个文件进行撤销了</span>
 
<span class="token function">git</span> reflog命令查看所有的本地自己的历史版本
<span class="token comment"># 获取某个历史版本的id，假设查到历史版本的id是139dcfaa558e3276b30b6b2e5cbbb9c00bbdca96。</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 139dcfaa558e3276b30b6b2e5cbbb9c00bbdca96
</code></pre></div>`,4)]))}const i=a(c,[["render",o],["__file","git_reback.html.vue"]]);export{i as default};
