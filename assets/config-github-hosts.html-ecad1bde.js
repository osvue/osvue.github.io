import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},c=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>由于部分原因会导致无法访问 Github，可配置 hosts 来解决一部分的问题，若之后彻底封了这方案自然是无效了。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>找到你的 hosts 文件，然后追加以下部分。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># github</span>
<span class="token number">192.30</span>.253.112 github.com
<span class="token number">192.30</span>.253.113 github.com
<span class="token number">151.101</span>.184.133 assets-cdn.github.com
<span class="token number">151.101</span>.185.194 github.global.ssl.fastly.net
<span class="token number">151.101</span>.184.133 avatars0.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars1.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars2.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars3.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars4.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars5.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars6.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars7.githubusercontent.com
<span class="token number">151.101</span>.184.133 avatars8.githubusercontent.com
<span class="token number">151.101</span>.184.133 user-images.githubusercontent.com
<span class="token number">151.101</span>.184.133 camo.githubusercontent.com
<span class="token number">192.30</span>.255.116 api.github.com
</code></pre></div>`,5),o=[c];function r(u,p){return s(),a("div",null,o)}const i=n(e,[["render",r],["__file","config-github-hosts.html.vue"]]);export{i as default};
