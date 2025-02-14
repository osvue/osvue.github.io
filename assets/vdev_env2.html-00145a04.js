import{_ as t,M as p,p as o,q as c,R as s,t as n,N as r,a1 as a}from"./framework-d81ad7e5.js";const l={},i=a('<h2 id="vue-build-多环境" tabindex="-1"><a class="header-anchor" href="#vue-build-多环境" aria-hidden="true">#</a> vue_build_多环境</h2><p>使用vue-cli3打包项目，通过配置不同的指令给项目设置不一样的配置。</p><p>npm run serve时会把p<wbr>rocess.env.NODE_ENV设置为‘development’；</p><p>npm run build 时会把p<wbr>rocess.env.NODE_ENV设置为‘production’；</p><p>此时只要根据p<wbr>rocess.env.NODE_ENV设置不同请求url就可以很简单的区分出本地和线上环境。</p><p>头疼的是打包时线上环境可能分多种，比如测试环境和生产环境等等。</p><p>在vue-cli2中打包时可以修改 “build” 和 “config”中的文件来区分不同的线上环境</p><p>而vue-cli3号称0配置，无法直接修改打包文件，那么怎么区分不同的线上环境分别传入不一样的配置呢？</p>',8),u={href:"https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>如下提供一种解决方案：</p><p>首先在package.json文件内添加测试环境和生产环境的打包指令：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;build-test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --mode alpha&quot;</span><span class="token punctuation">,</span>

<span class="token string-property property">&quot;build-prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --mode prod&quot;</span><span class="token punctuation">,</span>
</code></pre></div><p>在项目根目录添加两个文件</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>env<span class="token punctuation">.</span>alpha

<span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;alpha&#39;</span>

<span class="token constant">VUE_APP_BASE_URL</span> <span class="token operator">=</span> <span class="token string">&#39;[http://test.linbenjian.work](http://test.linbenjian.work/)&#39;</span>

<span class="token punctuation">.</span>env<span class="token punctuation">.</span>prod

<span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>

<span class="token constant">VUE_APP_BASE_URL</span> <span class="token operator">=</span> <span class="token string">&#39;[http://www.linbenjian.work](http://www.linbenjian.work/)&#39;</span>
</code></pre></div><p>在项目中使用参数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">let</span> baseurl <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_URL</span> <span class="token operator">||</span> <span class="token string">&#39;[http://localhost:9001](http://localhost:9001/)&#39;</span>
</code></pre></div><p>注：</p><p>—mode后面添加test、production 等预留参数无效</p><p>配置文件内，参数添加VUE_APP 可通过调试</p>`,10);function k(v,_){const e=p("ExternalLinkIcon");return o(),c("div",null,[i,s("p",null,[n("官网给我们做了简单介绍（"),s("a",u,[n("vue-cli-service-build"),r(e)]),n("）,但只解释了现有几个指令所匹配的模式,对于上面的需求显然无法满足。")]),d])}const h=t(l,[["render",k],["__file","vdev_env2.html.vue"]]);export{h as default};
