import{_ as o,r as p,o as e,c as r,b as s,d as a,e as u,a as c}from"./app-215c512d.js";const l={},i={href:"https://code.visualstudio.com/docs/languages/javascript#_javascript-projects-jsconfigjson",target:"_blank",rel:"noopener noreferrer"};function k(d,n){const t=p("ExternalLinkIcon");return e(),r("div",null,[n[3]||(n[3]=s("h2",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),a(" 介绍")],-1)),n[4]||(n[4]=s("p",null,[a("很多时候为了避免复杂的层级关系，常常使用 webpack 的 "),s("code",null,"alias"),a(" 功能来简化路径，但这也产生了新的问题，无法实时解析文件中的内容，导致缺乏提示。")],-1)),s("p",null,[n[1]||(n[1]=a("在 VSCode 官网也提供了该项的")),s("a",i,[n[0]||(n[0]=a("说明")),u(t)]),n[2]||(n[2]=a("。"))]),n[5]||(n[5]=c(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-json" data-ext="json"><pre class="language-json"><code># jsconfig.json
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/**/*.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/**/*.js&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2))])}const g=o(l,[["render",k],["__file","identify-alias.html.vue"]]);export{g as default};
