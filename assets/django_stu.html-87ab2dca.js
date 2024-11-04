import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h3><ul><li>注册app</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>
<span class="token comment"># news/apps.py</span>
<span class="token keyword">class</span> <span class="token class-name">NewsConfig</span><span class="token punctuation">(</span>AppConfig<span class="token punctuation">)</span><span class="token punctuation">:</span>
    default_auto_field <span class="token operator">=</span> <span class="token string">&#39;django.db.models.BigAutoField&#39;</span>
    name <span class="token operator">=</span> <span class="token string">&#39;news&#39;</span>


<span class="token comment"># djangostu/settings.py</span>
INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;django.contrib.admin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.auth&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.contenttypes&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.sessions&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.messages&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.staticfiles&#39;</span><span class="token punctuation">,</span>


    <span class="token comment">#  module new / apps.py /   NewsConfig</span>
     <span class="token string">&#39;news.apps.NewsConfig&#39;</span>
<span class="token punctuation">]</span>






</code></pre></div><ul><li>编写url 和视图函数的对应关系</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> news <span class="token keyword">import</span> views


<span class="token comment"># djangostu/urls.py</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment"># path(&#39;/a&#39;, include(&#39;news.urls&#39;)),</span>
    <span class="token comment"># www.xxo.com/abcd , url 对应的函数</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;abcd&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
<span class="token punctuation">]</span>


</code></pre></div><ul><li><strong>json HttpResponse</strong></li><li><strong>html render</strong></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>


    context <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;news_list&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;图雀写作工具推出了新的版本&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;随随便便就能写出一篇好教程，真的很神奇&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;图雀社区正式推出快速入门系列教程&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;一杯茶的功夫，让你快速上手，绝无担忧&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;lusifer&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span><span class="token number">17778179517</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">)</span>
    jd<span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    <span class="token comment"># return HttpResponse(jd,content_type=&#39;application/json&#39;)</span>

    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span><span class="token string">&#39;news/idx.html&#39;</span><span class="token punctuation">,</span>json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>jd<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h3><ul><li>root <ul><li>app <ul><li>static <ul><li>js</li><li>css</li><li>image</li><li>plugins <code>vue</code>,<code>antd</code></li></ul></li></ul></li></ul></li></ul>`,9),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","django_stu.html.vue"]]);export{k as default};
