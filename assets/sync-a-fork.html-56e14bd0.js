import{_ as a,p as e,q as s,a1 as n}from"./framework-d81ad7e5.js";const t={},c=n(`<h2 id="配置-upstream" tabindex="-1"><a class="header-anchor" href="#配置-upstream" aria-hidden="true">#</a> 配置 upstream</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment"># 以 \`ant-design-vue\` 示例</span>
<span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/vueComponent/ant-design-vue.git
<span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 验证</span>
</code></pre></div><h2 id="同步-upstream" tabindex="-1"><a class="header-anchor" href="#同步-upstream" aria-hidden="true">#</a> 同步 upstream</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch upstream <span class="token comment"># fetch</span>
<span class="token function">git</span> merge upstream/master <span class="token comment"># merge</span>
</code></pre></div><h2 id="推送" tabindex="-1"><a class="header-anchor" href="#推送" aria-hidden="true">#</a> 推送</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push
</code></pre></div><p>最后前往 github 验证即可。</p>`,7),o=[c];function r(p,i){return e(),s("div",null,o)}const l=a(t,[["render",r],["__file","sync-a-fork.html.vue"]]);export{l as default};
