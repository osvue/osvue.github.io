import{_ as a,p as n,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},p=e(`<h2 id="npm-国内镜像与国外镜像" tabindex="-1"><a class="header-anchor" href="#npm-国内镜像与国外镜像" aria-hidden="true">#</a> npm 国内镜像与国外镜像</h2><ol><li>修改 下载仓库为淘宝镜像</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org <span class="token parameter variable">--global</span>

  <span class="token function">npm</span> config <span class="token builtin class-name">set</span> disturl https://npm.taobao.org/dist <span class="token parameter variable">--global</span>
</code></pre></div><ol start="2"><li>如果要发布自己的镜像需要修改回来</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre></div><ol start="3"><li>安装cnpm</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre></div><ol start="4"><li>查看当前地址</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> config list
</code></pre></div><ol start="5"><li>npm的命令</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  - <span class="token function">npm</span> <span class="token parameter variable">-v</span> 查看npm的版本
  - <span class="token function">npm</span> version 查看所有模块的版本
  - <span class="token function">npm</span> search 包名 搜索包
  - <span class="token function">npm</span> <span class="token function">install</span> / i 包名 安装包
  - <span class="token function">npm</span> remove / r 包名 删除包
  - <span class="token function">npm</span> <span class="token function">install</span> 包名 <span class="token parameter variable">--save</span> 安装包并添加到依赖中 *****
  - <span class="token function">npm</span> <span class="token function">install</span> 下载当前项目所依赖的包
  - <span class="token function">npm</span> <span class="token function">install</span> 包名 <span class="token parameter variable">-g</span> 全局安装包（全局安装的包一般都是一些工具）
</code></pre></div><h3 id="安装nrm" tabindex="-1"><a class="header-anchor" href="#安装nrm" aria-hidden="true">#</a> 安装nrm</h3><ul><li><code>nrm(npm registry manager )</code>是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换 在控制台按下面输入命令：</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> nrm    
nrm <span class="token function">ls</span>  
nrm use taobao 
</code></pre></div><p>其中执行命令nrm ls查看可选的源带*的是当前使用的源，use命令可以切换源。</p>`,15),l=[p];function o(c,i){return n(),s("div",null,l)}const m=a(t,[["render",o],["__file","npm.html.vue"]]);export{m as default};
