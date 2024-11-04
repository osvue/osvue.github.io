import{_ as s,p as n,q as a,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h3 id="python模块导入与导出" tabindex="-1"><a class="header-anchor" href="#python模块导入与导出" aria-hidden="true">#</a> python模块导入与导出</h3><ul><li><code>其中，&lt;应用程序名称&gt;是模型所属的应用程序的名称，&lt;模型名称&gt;是要导入的模型的名称。</code></li></ul><ul><li>两个应用程序：blog和users。blog应用程序用于管理博客文章，其中有一个名为Article的模型。 <ul><li>users应用程序用于管理用户信息，其中有一个名为User的模型。我们想在blog应用程序中使用User模型</li></ul></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># from &lt;应用程序名称&gt;.models import &lt;模型名称&gt;</span>

<span class="token keyword">from</span> users<span class="token punctuation">.</span>models <span class="token keyword">import</span> User

<span class="token keyword">def</span> <span class="token function">user_list</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    users <span class="token operator">=</span> User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;blog/user_list.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">:</span> users<span class="token punctuation">}</span><span class="token punctuation">)</span>




</code></pre></div><ul><li>在<code>blog/templates/blog/user_list.html</code>模板中，我们可以通过使用<code>{{ users }}</code>来访问该列表，并渲染到页面上。</li></ul><h3 id="导入整个应用程序" tabindex="-1"><a class="header-anchor" href="#导入整个应用程序" aria-hidden="true">#</a> 导入整个应用程序</h3><p>除了导入单个模型，我们还可以导入整个应用程序，以便可以通过应用程序的名称直接访问其模型。导入应用程序的方法如下所示：</p><ul><li><code>from &lt;应用程序名称&gt; import models</code></li></ul><p>然后，我们可以通过<code>models.&lt;模型名称&gt;</code>来访问该模型。例如，要导入blog应用程序，可以使用以下语句：</p><p><code>from blog import models</code></p><p>然后，我们可以在视图函数中使用<code>models.Article</code>来访问<code>Article</code>模型。</p>`,11),p=[o];function l(c,u){return n(),a("div",null,p)}const i=s(t,[["render",l],["__file","impexp.html.vue"]]);export{i as default};
