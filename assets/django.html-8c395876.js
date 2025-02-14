import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li><strong><code>python manage.py runserver</code></strong></li></ul><h3 id="django-mtv-框架的精髓" tabindex="-1"><a class="header-anchor" href="#django-mtv-框架的精髓" aria-hidden="true">#</a> Django MTV 框架的精髓：</h3><p>M（Model）：创建数据模型，并执行数据库迁移 T（Template）：写出基本的 Django 模板，并从视图中传入数据 V（View）：在视图中访问数据库，实现业务逻辑，渲染模板，并接入路由表</p><p>Django 后，我们用 Django 自带的脚手架工具 django-admin 创建项目：</p><p>django-admin startproject django_news cd django_news</p><p>生成的项目骨架及每个文件的作用如下所示：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>django_news
├── django_news              // 项目全局文件目录
│   ├── __init__.py
│   ├── settings.py          // 全局配置
│   ├── urls.py              // 全局路由
│   └── wsgi.py              // WSGI服务接口（暂时不用纠结这个是神马）
└── manage.py                // 项目管理脚本
</code></pre></div><p>我们使用 manage.py 来运行开发服务器（Development Server）：</p><p><code>python manage.py runserver</code></p><ul><li>Django 是一个高度模块化的框架。具体而言，一个 Django 应用由多个子应用组成，我们一般称之为 App</li></ul><h3 id="django-app" tabindex="-1"><a class="header-anchor" href="#django-app" aria-hidden="true">#</a> <code>Django App</code></h3><p><code>Django App</code> 一般分为三大类（根据来源）：</p><ul><li>内置：即 <code>Django</code> 框架自带的应用，包括 **admin（后台管理）、auth（身份鉴权）、sessions（会话管理）**等等</li><li>自定义：即用来实现我们自身业务逻辑的应用，这里我们将创建一个新闻展示应用</li><li>第三方：即社区提供的应用，数量极其丰富，功能涵盖几乎所有方面，能够大大减少开发成本</li><li>所有的 <code>Django</code> 应用都在 <code>django_news/settings.py</code> 的 <code>INSTALLED_APPS</code> 列表中定义：</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>INSTALLED_APPS = [
    &#39;django.contrib.admin&#39;,
    &#39;django.contrib.auth&#39;,
    &#39;django.contrib.contenttypes&#39;,
    &#39;django.contrib.sessions&#39;,
    &#39;django.contrib.messages&#39;,
    &#39;django.contrib.staticfiles&#39;,
]
</code></pre></div><h3 id="实现自定义-app" tabindex="-1"><a class="header-anchor" href="#实现自定义-app" aria-hidden="true">#</a> 实现自定义 App</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
python manage<span class="token punctuation">.</span>py startapp news
# 生成的 news 应用文件夹结构如下所示：

news                     <span class="token comment">// news 应用目录</span>
├── __init__<span class="token punctuation">.</span>py          <span class="token comment">// 初始化模块</span>
├── admin<span class="token punctuation">.</span>py             <span class="token comment">// 后台管理配置</span>
├── apps<span class="token punctuation">.</span>py              <span class="token comment">// 应用配置</span>
├── migrations           <span class="token comment">// 数据库迁移文件目录</span>
│   └── __init__<span class="token punctuation">.</span>py      <span class="token comment">// 数据库迁移初始化模块</span>
├── models<span class="token punctuation">.</span>py            <span class="token comment">// 数据模型</span>
├── tests<span class="token punctuation">.</span>py             <span class="token comment">// 单元测试</span>
└── views<span class="token punctuation">.</span>py             <span class="token comment">// 视图</span>

</code></pre></div><h3 id="model-模型-template-模板-view-视图" tabindex="-1"><a class="header-anchor" href="#model-模型-template-模板-view-视图" aria-hidden="true">#</a> Model（模型）+ Template（模板）+ View（视图）</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 将自定义 App 添加到全局配置</span>
<span class="token comment"># 最后，我们在 settings.py 中将 news 应用加入 INSTALLED_APPS 中：</span>

<span class="token comment"># ...</span>

INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;django.contrib.admin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.auth&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.contenttypes&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.sessions&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.messages&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.staticfiles&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="理解视图-业务逻辑的编写" tabindex="-1"><a class="header-anchor" href="#理解视图-业务逻辑的编写" aria-hidden="true">#</a> 理解视图：业务逻辑的编写</h3><ol><li>在视图（View）中写一点业务逻辑</li><li>接入路由，使其能够被访问</li></ol><h3 id="django-的路由系统" tabindex="-1"><a class="header-anchor" href="#django-的路由系统" aria-hidden="true">#</a> Django 的路由系统</h3><ul><li>Django 的路由系统是由全局路由和子应用路由组成。 <ul><li>简单来说，根据用户输入的 URL，全局路由表进行匹配并选择正确的子应用路由</li><li>再由所选择的子应用路由匹配并选择正确的视图（View）。</li></ul></li></ul><ol><li>用户访问 <code>http://example.com/apple/buy</code>， <ol><li>然后全局路由根据 <code>/apple/buy</code> 先选择 <strong>apple</strong> 的路由表</li><li>再从 <strong>apple</strong> 路由表中根据 <code>/buy</code> 选择 <strong>/buy</strong> 路由</li><li>然后执行 <strong>/buy</strong> 对应的 <code>BuyView</code> 视图，返回给用户结果。</li></ol></li></ol><h3 id="编写视图" tabindex="-1"><a class="header-anchor" href="#编写视图" aria-hidden="true">#</a> 编写视图</h3><ul><li>对视图访问的流程大致了解之后，我们就可以开始动手了。</li><li>首先打开 news/views.py，写一个简单的视图函数，返回一串 Hello World!：</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse


<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>Django 同时支持基于函数的视图 **（FBV，Function-based View）**和基于类的视图 <strong>（CBV，Class-based View）</strong></li><li>这里显然是 FBV，接收一个 request 请求对象作为参数，返回了一个 HttpResponse 对象。</li></ul><h3 id="视图接入路由" tabindex="-1"><a class="header-anchor" href="#视图接入路由" aria-hidden="true">#</a> 视图接入路由</h3><ul><li>要让路由系统能够访问到刚才写好的视图函数。因此先实现子应用 news 的路由表，创建 <code>news/urls.py</code> 文件如下：</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path

<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>index<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

</code></pre></div><ul><li>每一个 Django 路由表模块（<strong>urls.py</strong>）中都约定必须包含一个 <strong><code>urlpatterns</code></strong></li><li>列表用来存放路由映射表。列表中每个元素是一个用 <code>django.urls.path</code> 函数封装好的路由映射</li></ul><h4 id="通常接收以下三个参数" tabindex="-1"><a class="header-anchor" href="#通常接收以下三个参数" aria-hidden="true">#</a> 通常接收以下三个参数：</h4><ul><li>route：必须，即实际的访问路由，空字符串等于 /，即空路由</li><li>view：必须，该路由将要访问的视图</li><li>name：可选，该路由的名称，方便后续在模板中使用</li></ul><h3 id="接入全局路由表" tabindex="-1"><a class="header-anchor" href="#接入全局路由表" aria-hidden="true">#</a> 接入全局路由表</h3><ul><li>将刚刚写好的 news 路由表接入全局路由表。由于我们希望新闻能够展示在首页<code>（即通过 / 就能访问，无需 /news）</code></li><li>因此 news 应用路由在全局路由中的 URL 是一个空字符串。在 <code>django_news/urls.py</code> 中修改如下：</li></ul><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ul><li><strong>添加路由规则时顺序是很重要的，因为在尝试匹配时会按照从上到下的顺序进行，因此应该把最模糊的路由（即空路由）放在最下面。</strong></li></ul><h2 id="网页前端的实现" tabindex="-1"><a class="header-anchor" href="#网页前端的实现" aria-hidden="true">#</a> 网页前端的实现</h2><h3 id="表达式插值" tabindex="-1"><a class="header-anchor" href="#表达式插值" aria-hidden="true">#</a> 表达式插值</h3><ol><li>最常用的语法，没有之一。通过在一对花括号 <code>{{}}</code> 放入一个表达式，就能够在视图中传入表达式中变量的内容</li><li>并最终渲染成包含变量具体内容的 HTML 代码。</li><li>需要注意的是，所支持的表达式仅支持以下形式（可以自由组合）：</li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 单个变量 --&gt;</span>
{{ variable }}

<span class="token comment">&lt;!-- 获取字典的键或对象的属性 --&gt;</span>
{{ dict.key }}
{{ object.attribute }}

<span class="token comment">&lt;!-- 获取列表中的某个元素 --&gt;</span>
{{ list.0 }}
例如，模板这样写：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ news.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ news.visitors.0 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
如果我们在视图中传入以下上下文字典（Context Dictionary）：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token punctuation">{</span>
    <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Tuture&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;news&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;visitors&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Marc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
那么最终渲染成的 HTML 代码就是：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Tuture<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Tom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">if</span> is_true <span class="token operator">%</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>It is <span class="token boolean">true</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">else</span> <span class="token operator">%</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>It is <span class="token boolean">false</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> endif <span class="token operator">%</span><span class="token punctuation">}</span>

如果变量 is_true 为真，那么最终渲染出来的就是 <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>It is <span class="token boolean">true</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>，
否则就是 <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>It is <span class="token boolean">false</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>。
注意：整个条件语句必须以 <span class="token punctuation">{</span><span class="token operator">%</span> endif <span class="token operator">%</span><span class="token punctuation">}</span> 结束，
并且 <span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">else</span> <span class="token operator">%</span><span class="token punctuation">}</span> 是可选的。
</code></pre></div><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">for</span> elem <span class="token keyword">in</span> some_list <span class="token operator">%</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> elem <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> endfor <span class="token operator">%</span><span class="token punctuation">}</span>
<span class="token comment">// 如果传入的 some_list 为 [&#39;Apple&#39;, &#39;Banana&#39;, &#39;Orange&#39;]，那么渲染出的 HTML 代码就是：</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Apple<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Banana<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Orange<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre></div><h2 id="实现第一个-django-模板" tabindex="-1"><a class="header-anchor" href="#实现第一个-django-模板" aria-hidden="true">#</a> 实现第一个 Django 模板</h2><ul><li>在 news 目录中创建一个 templates 目录 <ul><li>再在 templates 目录中创建一个 news 目录</li><li>并在内层的 news 目录中创建 <code>index.html</code> 文件</li></ul></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> news/templates/news
<span class="token function">touch</span> news/templates/news/index.html

</code></pre></div><ul><li>只创建 <strong>news/templates</strong>，然后把模板放里面不就好了，为什么还要再创建一个 news 目录？</li><li>这是由于 <strong>Django 的模板查找机制</strong>会将所有<strong>应用里面的模板全部收集到一起</strong></li><li>如果两个模板的名字冲突，就会导致其中一个模板不能被正确访问。</li><li>如果放在 news 子文件夹里面，就能够通过 <strong>news/index.html</strong> 访问，通过命名空间的机制避免了冲突。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">if</span> news_list <span class="token operator">%</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">for</span> elem <span class="token keyword">in</span> news_list <span class="token operator">%</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> elem<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> elem<span class="token punctuation">.</span>content <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token operator">%</span> endfor <span class="token operator">%</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">else</span> <span class="token operator">%</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>暂无新闻<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> endif <span class="token operator">%</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="视图中对其进行渲染" tabindex="-1"><a class="header-anchor" href="#视图中对其进行渲染" aria-hidden="true">#</a> 视图中对其进行渲染</h3><ul><li>打开 <code>news/views.py</code> 文件</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    context <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;news_list&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;图雀写作工具推出了新的版本&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;随随便便就能写出一篇好教程，真的很神奇&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;图雀社区正式推出快速入门系列教程&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;一杯茶的功夫，让你快速上手，绝无担忧&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;news/index.html&#39;</span><span class="token punctuation">,</span> context<span class="token operator">=</span>context<span class="token punctuation">)</span>
</code></pre></div><ul><li><p>调用 <strong>django.shortcuts.render</strong> 函数来渲染模板，这个函数通常接受三个参数（有其他参数，但是这里我们不关心）：</p><ul><li>request：请求对象，直接把视图的参数 <code>request</code> 传进来就可以</li><li>template_name：模板名称，这里就是我们刚刚创建的 <code>news/index.html</code></li><li>context：传入模板的上下文对象，<strong>必须是一个字典</strong>，字典中的每个键对应模板中的变量。这里我们弄了些假数据，假装是从数据库里面取来的。</li></ul></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse
<span class="token keyword">import</span> json

<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>


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
</code></pre></div><h4 id="取值" tabindex="-1"><a class="header-anchor" href="#取值" aria-hidden="true">#</a> 取值</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
{{ news_list}}
{{ name}}
{{ age}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {% for item in news_list %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span> {{item.title  }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    {% endfor %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h3><p>Django 在数据模型方面的设计堪称典范，列举一些闪光点：</p><ul><li>由于高度解耦的设计，可轻松切换各种关系型数据库（默认的 SQLite，可选 MySQL、PostgreSQL、Oracle 等等）</li><li>强大的 ORM（Object Relation Mapping，对象关系映射）模块，使得用 Python 操作数据库非常轻松，免去了使用 SQL 的麻烦</li><li>优秀的数据库迁移机制（Migration），修改数据模式（Schema）比较方便，能够适应不断变化的功能需求</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 查询所有模型</span>
<span class="token comment"># 等价于 SELECT * FROM Blog</span>
Blog<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 查询单个模型</span>
<span class="token comment"># 等价于 SELECT * FROM Blog WHERE ID=1</span>
Blog<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 添加单个模型</span>
<span class="token comment"># 等价于 INSERT INTO Blog (title, content) VALUES (&#39;hello&#39;, &#39;world&#39;)</span>
blog <span class="token operator">=</span> Blog<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> content<span class="token operator">=</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
blog<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ol><li>用 Django 定义了一个新的数据模型</li><li>用 makemigrations 命令创建迁移文件（存储在子应用的 migrations 目录里面）</li><li>用 migrate 命令执行迁移</li><li>在开发中发现第 1 步中定义的模型不完善，更新数据模型</li><li>跳转到第 2 步，反复循环</li></ol><div class="language-python" data-ext="py"><pre class="language-python"><code>
</code></pre></div><h3 id="model设计时的总结" tabindex="-1"><a class="header-anchor" href="#model设计时的总结" aria-hidden="true">#</a> model设计时的总结</h3><ol><li>设计Model的时候，可以继承自Models.model或者AbstractUser</li><li>AbstractUser是内置的用户类，当要继承内置的用户模型并进行扩展时，就使用它</li><li>Models则是通用的模型类，自定义模型都需要继承这个.</li></ol><ul><li>AbstractUser要记得在setting.py里面加上<code>AUTH_USER_MODEL = ‘users.UserProfile’</code><ul><li>设计表的时候，首先要分析需要哪些表，关键是分析关系：<strong>实体1 &lt;对于关系&gt; 实体2，表关系是一对多，还是多对一</strong>等等，要自行分析定义外键</li><li>设计表的第二步是设计具体的字段，<strong>每个字段的类型是否是必填</strong>。</li></ul></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">class</span> <span class="token class-name">BaseModel</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
	add_time <span class="token operator">=</span> models<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>default<span class="token operator">=</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">,</span>verbose_name<span class="token operator">=</span><span class="token string">&quot;添加时间&quot;</span>
	<span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
		<span class="token comment"># 设置成抽象基类，不然Django会帮我们创建这个表</span>
		abstract <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">class</span> <span class="token class-name">Course</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token triple-quoted-string string">&#39;&#39;&#39;这里继续写属性，已继承&#39;&#39;&#39;</span>
	 	<span class="token triple-quoted-string string">&#39;&#39;&#39;外键的设置&#39;&#39;&#39;</span>
	<span class="token keyword">class</span> <span class="token class-name">Lesson</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
		course <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span>Course<span class="token punctuation">,</span>on_delete<span class="token operator">=</span>models<span class="token punctuation">.</span>CASCADE<span class="token punctuation">)</span>
		<span class="token string">&#39;&#39;</span>&#39;这里必须注意第一个参数是要关联的外键，
		第二个参数是一定要写的，用来设置当Course被删除的时候，
		外键怎么处理，CASCADE表示如果对应的课程被删除，那么外键的
		记录也会级联的删除，而一种SET_NULL属性是指课程被删除后
		这个外键这一列被置空，它必须和\`\`\`null <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">,</span>blank <span class="token operator">=</span> <span class="token boolean">True</span>\`\`\`
		连用，否则都不能为空怎么置空呢

</code></pre></div><h3 id="model创建语法" tabindex="-1"><a class="header-anchor" href="#model创建语法" aria-hidden="true">#</a> model创建语法</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>form django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models

<span class="token keyword">class</span> <span class="token class-name">Modelname</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># 创建模型类并继承models.Model</span>
	<span class="token comment"># 一个类就是数据库的一张表</span>
	field1 <span class="token operator">=</span> models<span class="token punctuation">.</span>XXXfield<span class="token punctuation">(</span>max_lenge<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>verbose_name<span class="token operator">=</span><span class="token string">&#39;haha&#39;</span>
	field <span class="token operator">=</span> models<span class="token punctuation">.</span>XXXfield<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># 为这个类定义一个说明</span>
		verbose_name <span class="token operator">=</span> XXX
		<span class="token comment"># 不加这个的话在我们的verbose_name在admin里面会被自动加上s</span>
		verbose_name_plural <span class="token operator">=</span> XXX		 

</code></pre></div><h2 id="models的属性与字段-field" tabindex="-1"><a class="header-anchor" href="#models的属性与字段-field" aria-hidden="true">#</a> models的属性与字段（field）</h2><h3 id="field类型" tabindex="-1"><a class="header-anchor" href="#field类型" aria-hidden="true">#</a> field类型</h3><ul><li>AutoField:一个自动递增的整形字段，通常用于主键</li><li>CharField：字符串字段，用于输入较短的字符，对应与HTML里面<code>&lt;input type=&#39;text&#39;&gt;</code></li><li>TextField：文本字段，用于输入较多的字符，对应html标签 <code>&lt;input type = &quot;textarea&quot;&gt;</code>；</li><li>EmailField：邮箱字段，用于输入带有Email格式的字符</li><li>DateFiled</li><li>TimeFiled</li><li>DateTimeField：日期字段，支持时间输入</li><li>ImageField：用于上传图片并验证图片合法性，需定义upload_to参数，使用本字段需安装python pillow等图片库</li><li>IntegerField：整数字段，用于保持整数信息</li></ul><h3 id="field属性" tabindex="-1"><a class="header-anchor" href="#field属性" aria-hidden="true">#</a> field属性</h3><p>primary_key：设置True or False，定义此字段是否为主键 default：设置默认值，可以设置默认的文本、时间、图片、时间等 null：设置True or False，是否允许数据库字段为Null，默认为False blank：设置True or False，定义是否运行用户不输入，默认为False；若为True，则用户可以不输入此字段 max_length：设置默认长度，一般在CharField、TextField、EmailField等文本字段设置 verbose_name：设置该字段的名称，所有字段都可以设置，在Web页面会显示出来（例如将英文显示为中文） choices：设置该字段的可选值，本字段的值是一个二维元素的元祖；元素的第1个值为实际存储的值，第2个值为HTML页面显示的值 upload_to：设置上传路径，ImageField和FileField字段需要设置此参数,如果路径不存在，会自动创建</p><h3 id="meta类属性" tabindex="-1"><a class="header-anchor" href="#meta类属性" aria-hidden="true">#</a> Meta类属性</h3><p>verbose_name：设置对象名称（例如usecms），若没有设置，则默认为该类名的小写分词形式，例如类名为CamelCase会被转换为camel case； verbose_name_plural：设置对象名称复数（例如usercms），一般设置跟verbose_name一样，verbose_name_plural=verbose_name否则会默认加s； db_table：设置映射的数据表名，默认为“应用名_模型名”，即用该模型所在app的名称加本模型类的名称 proxy：设置True or False，设置本模型及所有继承本模型的子模型是否为代理模型； abstract：设置True or False，设置本模型类是否为抽象基类；如果是抽象基类，那么是不会创建这张表的，这张表用来作为基类被其他的表继承</p><h3 id="model层的命令详解" tabindex="-1"><a class="header-anchor" href="#model层的命令详解" aria-hidden="true">#</a> model层的命令详解</h3><p>python manage.py makemigrations+名字:# 生成数据库表的初始化文件initial.py文件 python manage.py migrate# # 基于数据库表初始化文件initial.py文件，正式生成数据表 python manage.py sqlmigrate polls 0001查看数据库的生成语句，因为initial.0001是数据库表的初始化文件</p><h2 id="数据库的操作" tabindex="-1"><a class="header-anchor" href="#数据库的操作" aria-hidden="true">#</a> 数据库的操作</h2><h3 id="_1-查询操作" tabindex="-1"><a class="header-anchor" href="#_1-查询操作" aria-hidden="true">#</a> 1.查询操作：</h3><p>modelname.object.all()取出所有的数据 modelname.object.get(pk=id)查询出符合筛选条件数据（一条），如果查到多条或者没有查到会报错 modelname.object.filter(....)查询出符合筛选条件的数据集（一条或者多条），如果对象不存在会返回一个空的列表，而不会报错。 ModelName.Objects.exclude( )返会不符合筛选条件的数据集</p>`,81),e=[o];function l(c,i){return a(),s("div",null,e)}const u=n(p,[["render",l],["__file","django.html.vue"]]);export{u as default};
