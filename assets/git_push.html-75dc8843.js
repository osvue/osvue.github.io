import{_ as e,p as t,q as i,a1 as o}from"./framework-d81ad7e5.js";const c={},d=o('<h3 id="git-忽略文件-gitignore-不起作用" tabindex="-1"><a class="header-anchor" href="#git-忽略文件-gitignore-不起作用" aria-hidden="true">#</a> Git 忽略文件“.gitignore“不起作用</h3><p>清除不需要跟踪的文件(不想要再远程仓库出现的文件)</p><ol><li><p><code>git rm -r --cached 不需要跟踪的文件名</code></p></li><li><p><code>git add .</code></p></li><li><p><code>git commit -m &quot;update .gitignore&quot;</code></p></li><li><p><code>git push</code></p></li></ol><p>举个例子：</p><ol><li>删除db文件下的<code>jdbc.properties</code>缓存 <code>git rm --cached db/jdbc.properties</code></li></ol><ul><li><strong>注意: git rm --cached 删除的是追踪状态，而不是物理文件；如果你真的是彻底不想要了，你也可以直接 rm --&gt; 忽略 --&gt; 提交+推送。</strong></li></ul>',6),r=[d];function l(a,p){return t(),i("div",null,r)}const g=e(c,[["render",l],["__file","git_push.html.vue"]]);export{g as default};