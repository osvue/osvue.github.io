import{_ as o,M as e,p as c,q as l,R as n,t as s,N as p,a1 as t}from"./framework-d81ad7e5.js";const u={},r=t(`<p>​ 应对现在数据可视化的趋势，越来越多企业需要在很多场景(营销数据，生产数据，用户数据)下使用，可视化图表来展示体现数据，让数据更加直观，数据特点更加突出。</p><h3 id="_01-使用技术" tabindex="-1"><a class="header-anchor" href="#_01-使用技术" aria-hidden="true">#</a> 01-使用技术</h3><p>完成该项目需要具备以下知识：</p><ul><li>div + css 布局</li><li>flex 布局</li><li>Less</li><li>原生js + jquery 使用</li><li>rem适配</li><li><strong>echarts基础</strong></li></ul><h2 id="rem适配" tabindex="-1"><a class="header-anchor" href="#rem适配" aria-hidden="true">#</a> rem适配</h2><ol><li><code>px</code> 转 <code>rem</code>。</li></ol><ul><li><code>CSS</code>中规定 <code>1rem</code> 的大小就是根元素<code>&lt;html&gt;</code>的<code>font-size</code>的值。</li><li>当使用了其他组件，其内部设置的都是<code>px</code>。需要在添加一个根据<code>font-size</code>的值计算当前比例下设置的长度转换为对应的<code>px</code>值。</li><li>监听<code>onresize</code>方法，实时计算当前分辨率下<code>font-size</code>的值。开发时全程使用<code>rem</code>布局。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 计算 fontSize</span>
<span class="token keyword">function</span> <span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> designWidth <span class="token operator">=</span> <span class="token number">1920</span> 
  <span class="token keyword">let</span> designHeight <span class="token operator">=</span> <span class="token number">1080</span> 
  <span class="token keyword">var</span> fontSize <span class="token operator">=</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight 
    designWidth <span class="token operator">/</span> designHeight
      <span class="token operator">?</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> designWidth<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
      <span class="token operator">:</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">/</span> designHeight<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> fontSize <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 防抖 在一定时间内 只执行最后一次</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code> <span class="token selector">.App</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-x</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>使用。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cancalDebounce <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>setFontSize<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> cancalDebounce<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 移除</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> cancalDebounce<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_02-案例适配方案" tabindex="-1"><a class="header-anchor" href="#_02-案例适配方案" aria-hidden="true">#</a> 02- 案例适配方案</h3><ul><li><p>设计稿是1920px</p><ol><li><p>flexible.js 把屏幕分为 24 等份</p></li><li><p>cssrem 插件的基准值是 80px</p><p>插件-配置按钮---配置扩展设置--Root Font Size 里面 设置。</p><p>但是别忘记重启vscode软件保证生效</p></li></ol></li></ul><h3 id="_03-基础设置" tabindex="-1"><a class="header-anchor" href="#_03-基础设置" aria-hidden="true">#</a> 03-基础设置</h3><ul><li>body 设置背景图 ，缩放为 100% ， 行高1.15</li><li>css初始化</li></ul><h3 id="_04-header-布局" tabindex="-1"><a class="header-anchor" href="#_04-header-布局" aria-hidden="true">#</a> 04-header 布局</h3><ul><li>高度为100px</li><li>背景图，在容器内显示</li><li>缩放比例为 100%</li><li>h1 标题部分 白色 38像素 居中显示 行高为 80像素</li><li>时间模块 showTime 定位右侧 right 为 30px 行高为 75px 文字颜色为：rgba(255, 255, 255, 0.7) 而文字大小为 20像素</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 格式： 当前时间：2020年3月17-0时54分14秒</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
            <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            t <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//開始运行</span>
            <span class="token keyword">function</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//清除定时器</span>
                dt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> y <span class="token operator">=</span> dt<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> mt <span class="token operator">=</span> dt<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> day <span class="token operator">=</span> dt<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> h <span class="token operator">=</span> dt<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取时</span>
                <span class="token keyword">var</span> m <span class="token operator">=</span> dt<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取分</span>
                <span class="token keyword">var</span> s <span class="token operator">=</span> dt<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取秒</span>
                document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.showTime&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;当前时间：&#39;</span> <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">&quot;年&quot;</span> <span class="token operator">+</span> mt <span class="token operator">+</span> <span class="token string">&quot;月&quot;</span> <span class="token operator">+</span> day <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> h <span class="token operator">+</span> <span class="token string">&quot;时&quot;</span> <span class="token operator">+</span> m <span class="token operator">+</span> <span class="token string">&quot;分&quot;</span> <span class="token operator">+</span> s <span class="token operator">+</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">;</span>
                t <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设定定时器，循环运行     </span>
            <span class="token punctuation">}</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><ul><li>header部分css样式</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1.25rem<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/head_bg.png<span class="token punctuation">)</span></span> no-repeat top center<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
  <span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.475rem<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.showTime</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0.375rem<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 0.9375rem<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_05-mainbox-主体模块" tabindex="-1"><a class="header-anchor" href="#_05-mainbox-主体模块" aria-hidden="true">#</a> 05-mainbox 主体模块</h3><ul><li><p>需要一个上左右的10px 的内边距</p></li><li><p>column 列容器，分三列，占比 3：5：3</p></li></ul><p>css样式：</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.mainbox</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.125rem 0.125rem 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token selector">.column</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;:nth-child(2)</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_06-公共面板模块-panel" tabindex="-1"><a class="header-anchor" href="#_06-公共面板模块-panel" aria-hidden="true">#</a> 06-公共面板模块 panel</h3><ul><li>高度为 310px</li><li>1像素的 1px solid rgba(25, 186, 139, 0.17) 边框</li><li>有line.jpg 背景图片</li><li>padding为 上为 0 左右 15px 下为 40px</li><li>下外边距是 15px</li><li>利用panel 盒子 before 和after 制作上面两个角 大小为 10px 线条为 2px solid #02a6b5</li><li>新加一个盒子before 和after 制作下侧两个角 宽度高度为 10px</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.panel</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3.875rem<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>25<span class="token punctuation">,</span> 186<span class="token punctuation">,</span> 139<span class="token punctuation">,</span> 0.17<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/line\\(1\\).png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 0.1875rem 0.5rem<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.1875rem<span class="token punctuation">;</span>
  <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.panel-footer</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
      <span class="token property">border-left</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
      <span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_07-柱形图-bar-模块-布局" tabindex="-1"><a class="header-anchor" href="#_07-柱形图-bar-模块-布局" aria-hidden="true">#</a> 07-柱形图 bar 模块(布局)</h3><ul><li><p>标题模块 h2 高度为 48px 文字颜色为白色 文字大小为 20px</p></li><li><p>图标内容模块 chart 高度 240px</p></li><li><p>以上可以作为panel公共样式部分</p></li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code>  <span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0.6rem<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 0.6rem<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.chart</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="_08-中间布局" tabindex="-1"><a class="header-anchor" href="#_08-中间布局" aria-hidden="true">#</a> 08-中间布局</h3><ul><li>上面是no 数字模块</li><li>下面是map 地图模块</li></ul><ol><li>数字模块 no 有个背景颜色 rgba(101, 132, 226, 0.1); 有个15像素的内边距</li><li>注意中间列 column 有个 左右 10px 下 15px 的外边距</li><li>no 模块里面上下划分 上面是数字（no-hd) 下面 是 相关文字说明(no-bd)</li><li>no-hd 数字模块 有一个边框 1px solid rgba(25, 186, 139, 0.17)</li><li>no-hd 数字模块 里面分为两个小li 每个小li高度为 80px 文字大小为 70px 颜色为 #ffeb7b 字体是图标字体 electronicFont</li><li>no-hd 利用 after 和 before制作2个小角， 边框 2px solid #02a6b5 宽度为 30px 高度为 10px</li><li>小竖线 给 第一个小li after 就可以 1px宽 背景颜色为 rgba(255, 255, 255, 0.2); 高度 50% top 25% 即可</li><li>no-bd 里面也有两个小li 高度为 40px 文字颜色为 rgba(255, 255, 255, 0.7) 文字大小为 18px 上内边距为 10px</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 声明字体*/</span>
<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> electronicFont<span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../font/DS-DIGIT.TTF<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>地图模块制作：</p><ol><li>地图模块高度为 810px 里面包含4个盒子 chart 放图表模块 球体盒子 旋转1 旋转2</li><li>球体图片模块 map1 大小为 518px 要加背景图片 因为要缩放100% 定位到最中央 透明度 .3</li><li>旋转1 map 2 大小为 643px 要加背景图片 因为要缩放100% 定位到中央 透明度 .6 做旋转动画 利用z-index压住球体</li><li>旋转2 map3 大小为 566px 要加背景图片 因为要缩放100% 定位到中央 旋转动画 注意是逆时针</li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-hd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>125811<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>104563<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-bd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>前端需求人数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>市场供应人数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>中间样式</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 声明字体*/</span>
<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> electronicFont<span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../font/DS-DIGIT.TTF<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.no</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>101<span class="token punctuation">,</span> 132<span class="token punctuation">,</span> 226<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.1875rem<span class="token punctuation">;</span>
  <span class="token selector">.no-hd</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>25<span class="token punctuation">,</span> 186<span class="token punctuation">,</span> 139<span class="token punctuation">,</span> 0.17<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
      <span class="token property">border-left</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
      <span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid #02a6b5<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">ul</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token selector">li</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 0.875rem<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #ffeb7b<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0.05rem 0<span class="token punctuation">;</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> electronicFont<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
        <span class="token selector">&amp;:first-child::after</span> <span class="token punctuation">{</span>
          <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
          <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
          <span class="token property">top</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.no-bd ul</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token selector">li</span> <span class="token punctuation">{</span>
      <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 0.225rem<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> 0.125rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.map</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10.125rem<span class="token punctuation">;</span>
  <span class="token selector">.chart</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10.125rem<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.map1,
  .map2,
  .map3</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 6.475rem<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 6.475rem<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/map.png<span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.map2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 8.0375rem<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 8.0375rem<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/lbx.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> rotate 15s linear infinite<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.map3</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 7.075rem<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 7.075rem<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/jt.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> rotate1 10s linear infinite<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> rotate1</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_09-echarts-介绍" tabindex="-1"><a class="header-anchor" href="#_09-echarts-介绍" aria-hidden="true">#</a> 09-Echarts-介绍</h3><p>常见的数据可视化库：</p><ul><li>D3.js 目前 Web 端评价最高的 Javascript 可视化工具库(入手难)</li><li>ECharts.js 百度出品的一个开源 Javascript 数据可视化库</li><li>Highcharts.js 国外的前端数据可视化库，非商用免费，被许多国外大公司所使用</li><li>AntV 蚂蚁金服全新一代数据可视化解决方案 等等</li><li>Highcharts 和 Echarts 就像是 Office 和 WPS 的关系</li></ul>`,42),k={href:"https://github.com/ecomfe/zrender",target:"_blank",rel:"noopener noreferrer"},i=n("p",null,"大白话：",-1),y=n("li",null,"是一个JS插件",-1),m=n("li",null,"性能好可流畅运行PC与移动设备",-1),d=n("li",null,"兼容主流浏览器",-1),g=n("strong",null,"定制",-1),b={href:"https://www.echartsjs.com/zh/option.html#series-line",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.echartsjs.com/zh/option.html#series-bar",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.echartsjs.com/zh/option.html#series-scatter",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.echartsjs.com/zh/option.html#series-pie",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.echartsjs.com/zh/option.html#series-candlestick",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.echartsjs.com/zh/index.html",target:"_blank",rel:"noopener noreferrer"},j=t(`<h3 id="_10-echarts-体验" tabindex="-1"><a class="header-anchor" href="#_10-echarts-体验" aria-hidden="true">#</a> 10-Echarts-体验</h3><p>官方教程：[五分钟上手ECharts](https://www.echartsjs.com/zh/tutorial.html#5 分钟上手 ECharts)</p><ul><li>下载echarts https://github.com/apache/incubator-echarts/tree/4.5.0</li></ul><p>使用步骤：</p><ol><li>引入echarts 插件文件到html页面中</li><li>准备一个具备大小的DOM容器</li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="3"><li>初始化echarts实例对象</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li>指定配置项和数据(option)</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ol start="5"><li>将配置项设置给echarts实例对象</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_11-echarts-基础配置" tabindex="-1"><a class="header-anchor" href="#_11-echarts-基础配置" aria-hidden="true">#</a> 11-Echarts-基础配置</h3><p>这是要求同学们知道以下配置每个模块的主要作用干什么的就可以了</p><blockquote><p>需要了解的主要配置：<code>series</code> <code>xAxis</code> <code>yAxis</code> <code>grid</code> <code>tooltip</code> <code>title</code> <code>legend</code> <code>color</code></p></blockquote><ul><li><p>series</p><ul><li>系列列表。每个系列通过 <code>type</code> 决定自己的图表类型</li><li>大白话：图标数据，指定什么类型的图标，可以多个图表重叠。</li></ul></li><li><p>xAxis：直角坐标系 grid 中的 x 轴</p><ul><li>boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。</li></ul></li><li><p>yAxis：直角坐标系 grid 中的 y 轴</p></li><li><p>grid：直角坐标系内绘图网格。</p></li><li><p>title：标题组件</p></li><li><p>tooltip：提示框组件</p></li><li><p>legend：图例组件</p></li><li><p>color：调色盘颜色列表</p><p>数据堆叠，同个类目轴上系列配置相同的<code>stack</code>值后 后一个系列的值会在前一个系列的值上相加。</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// color设置我们线条的颜色 注意后面是个数组</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;skyblue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置图表的标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;折线图堆叠123&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 图表的提示框组件 </span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 触发方式</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 图例组件</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">// series里面有了 name值则 legend里面的data可以删掉</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 网格配置  grid可以控制线形图 柱状图 图表大小</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否显示刻度标签 如果是true 就显示 否则反之</span>
        <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 工具箱组件  可以另存为图片等功能</span>
    <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">saveAsImage</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置x轴的相关配置</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否让我们的线条和坐标轴有缝隙</span>
        <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;星期一&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;周二&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;周三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;周四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;周五&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;周六&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;周日&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token comment">// 设置y轴的相关配置</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 系列图表配置 它决定着显示那种类型的图表</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;邮件营销&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
           
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">132</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;联盟广告&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>

            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">182</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">234</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;视频广告&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
          
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">232</span><span class="token punctuation">,</span> <span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token number">190</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">410</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;直接访问&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
          
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">332</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">334</span><span class="token punctuation">,</span> <span class="token number">390</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="_12-柱状图图表-两大步骤" tabindex="-1"><a class="header-anchor" href="#_12-柱状图图表-两大步骤" aria-hidden="true">#</a> 12- 柱状图图表（两大步骤）</h3><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><ol><li>引入到html页面中</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 柱状图1模块</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例化对象</span>
  <span class="token keyword">let</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.bar .chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 指定配置和数据</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#3398DB&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;shadow&quot;</span> <span class="token comment">// 默认为直线，可选为：&#39;line&#39; | &#39;shadow&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;3%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;4%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;3%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">alignWithLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;直接访问&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token string">&quot;60%&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">334</span><span class="token punctuation">,</span> <span class="token number">390</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 把配置给实例对象</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li><p>根据需求定制</p><ul><li><p>修改图表柱形颜色 #2f89cf</p></li><li><p>修改图表大小 top 为 10px bottom 为 4% grid决定我们的柱状图的大小</p></li></ul><div class="language-JavaScript" data-ext="JavaScript"><pre class="language-JavaScript"><code>color: [&quot;#2f89cf&quot;],
grid: {
  left: &quot;0%&quot;,
  top: &quot;10px&quot;,
  right: &quot;0%&quot;,
  bottom: &quot;4%&quot;,
  containLabel: true
},
</code></pre></div><ul><li>X轴相关设置 xAxis <ul><li>文本颜色设置为 rgba(255,255,255,.6) 字体大小为 12px</li><li>X轴线的样式 不显示</li></ul></li></ul><div class="language-JavaScript" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 设置x轴标签文字样式
</code></pre></div></li></ol><p>// x轴的文字颜色和大小 axisLabel: { color: &quot;rgba(255,255,255,.6)&quot;, fontSize: &quot;12&quot; }, // x轴样式不显示 axisLine: { show: false // 如果想要设置单独的线条样式 // lineStyle: { // color: &quot;rgba(255,255,255,.1)&quot;, // width: 1, // type: &quot;solid&quot; } }</p><div class="language-text" data-ext="text"><pre class="language-text"><code>
- Y 轴相关定制
  - 文本颜色设置为   rgba(255,255,255,.6)   字体大小为 12px
  - Y 轴线条样式 更改为  1像素的  rgba(255,255,255,.1) 边框
  - 分隔线的颜色修饰为  1像素的  rgba(255,255,255,.1)   

~~~JavaScript
// y 轴文字标签样式
axisLabel: {
      color: &quot;rgba(255,255,255,.6)&quot;,
       fontSize: &quot;12&quot;
},
 // y轴线条样式
 axisLine: {
      lineStyle: {
         color: &quot;rgba(255,255,255,.1)&quot;,
         // width: 1,
         // type: &quot;solid&quot;
      }
5232},
 // y 轴分隔线样式
splitLine: {
    lineStyle: {
       color: &quot;rgba(255,255,255,.1)&quot;
     }
}
</code></pre></div><ul><li>修改柱形为圆角以及柱子宽度 series 里面设置</li></ul><div class="language-JavaScript" data-ext="JavaScript"><pre class="language-JavaScript"><code>series: [
      {
        name: &quot;直接访问&quot;,
        type: &quot;bar&quot;,
        // 修改柱子宽度
        barWidth: &quot;35%&quot;,
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
</code></pre></div><ul><li>更换对应数据</li></ul><div class="language-JavaScript" data-ext="JavaScript"><pre class="language-JavaScript"><code>// x轴中更换data数据
 data: [ &quot;旅游行业&quot;,&quot;教育培训&quot;, &quot;游戏行业&quot;, &quot;医疗行业&quot;, &quot;电商行业&quot;, &quot;社交行业&quot;, &quot;金融行业&quot; ],
// series 更换数据
 data: [200, 300, 300, 900, 1500, 1200, 600]
</code></pre></div><ul><li>让图表跟随屏幕自适应</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_13-柱状图2定制" tabindex="-1"><a class="header-anchor" href="#_13-柱状图2定制" aria-hidden="true">#</a> 13-柱状图2定制</h3><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>需求1： 修改图形大小 grid</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 图标位置</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;22%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求2： 不显示x轴</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>   <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求3： y轴相关定制</p><ul><li>不显示y轴线和相关刻度</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//不显示y轴线条</span>
<span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 不显示刻度</span>
<span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><ul><li>y轴文字的颜色设置为白色</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>   <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求4： 修改第一组柱子相关样式（条状）</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;条&quot;</span><span class="token punctuation">,</span>
<span class="token comment">// 柱子之间的距离</span>
<span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
<span class="token comment">//柱子的宽度</span>
<span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token comment">// 柱子设为圆角</span>
<span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>       
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><ul><li>设置第一组柱子内百分比显示数据</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图形上的文本标签</span>
<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token comment">// 图形内显示</span>
         <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;inside&quot;</span><span class="token punctuation">,</span>
         <span class="token comment">// 文字的显示格式</span>
         <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{c}%&quot;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><ul><li>设置第一组柱子不同颜色</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明颜色数组</span>
<span class="token keyword">var</span> myColor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;#1089E7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F57474&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#56D0E3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F8B448&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#8B78F6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 2. 给 itemStyle  里面的color 属性设置一个 返回值函数</span>
  <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>  
            <span class="token comment">// params 传进来的是柱子对象</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// dataIndex 是当前柱子的索引号</span>
            <span class="token keyword">return</span> myColor<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
         
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求5： 修改第二组柱子的相关配置（框状）</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  	    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;框&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;#00c1de&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">15</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">19325</span><span class="token punctuation">,</span> <span class="token number">23438</span><span class="token punctuation">,</span> <span class="token number">31000</span><span class="token punctuation">,</span> <span class="token number">121594</span><span class="token punctuation">,</span> <span class="token number">134141</span><span class="token punctuation">,</span> <span class="token number">681807</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
</code></pre></div><p>需求6： 给y轴添加第二组数据</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;印尼&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;美国&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;印度&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;世界人口(万)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 不显示y轴的线</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 不显示刻度</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 把刻度标签里面的文字颜色设置为白色</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">702</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">793</span><span class="token punctuation">,</span> <span class="token number">664</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
           <span class="token comment">// 不显示y轴的线</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 不显示刻度</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><p>需求7： 设置两组柱子层叠以及更换数据</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给series  第一个对象里面的 添加 </span>
<span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token comment">// 给series  第二个对象里面的 添加 </span>
<span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token comment">// series 第一个对象里面的data</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series 第二个对象里面的data</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// y轴更换第一个对象更换data数据</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HTML5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CSS3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;VUE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;NODE&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// y轴更换第二个对象更换data数据</span>
<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">702</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">793</span><span class="token punctuation">,</span> <span class="token number">664</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><p>完整代码：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 柱状图2</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myColor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;#1089E7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F57474&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#56D0E3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#F8B448&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#8B78F6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 1. 实例化对象</span>
  <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.bar2 .chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2. 指定配置和数据</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;22%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span>
      <span class="token comment">// containLabel: true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 不显示x轴的相关信息</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inverse</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HTML5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CSS3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;VUE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;NODE&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示y轴的线</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示刻度</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 把刻度标签里面的文字颜色设置为白色</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">702</span><span class="token punctuation">,</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">610</span><span class="token punctuation">,</span> <span class="token number">793</span><span class="token punctuation">,</span> <span class="token number">664</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inverse</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示y轴的线</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示刻度</span>
        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 把刻度标签里面的文字颜色设置为白色</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;条&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// 修改第一组柱子的圆角</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token comment">// 此时的color 可以修改柱子的颜色</span>
          <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// params 传进来的是柱子对象</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// dataIndex 是当前柱子的索引号</span>
            <span class="token keyword">return</span> myColor<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 柱子之间的距离</span>
        <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token comment">//柱子的宽度</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token comment">// 显示柱子内的文字</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;inside&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// {c} 会自动的解析为 数据  data里面的数据</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{c}%&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;框&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barCategoryGap</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;#00c1de&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">barBorderRadius</span><span class="token operator">:</span> <span class="token number">15</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. 把配置给实例对象</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="_14-折线图1-人员变化模块制作" tabindex="-1"><a class="header-anchor" href="#_14-折线图1-人员变化模块制作" aria-hidden="true">#</a> 14-折线图1 人员变化模块制作</h3><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>需求1： 修改折线图大小，显示边框设置颜色：#012f4a，并且显示刻度标签。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 设置网格样式</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;20%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 显示边框</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#012f4a&#39;</span><span class="token punctuation">,</span><span class="token comment">// 边框颜色</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 包含刻度文字在内</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求2： 修改图例组件中的文字颜色 #4c9bfd， 距离右侧 right 为 10%</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 图例组件</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span> <span class="token comment">// 图例文字颜色</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;10%&#39;</span> <span class="token comment">// 距离右边10%</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求3： x轴相关配置</p><ul><li>刻度去除</li><li>x轴刻度标签字体颜色：#4c9bfd</li><li>剔除x坐标轴线颜色（将来使用Y轴分割线)</li><li>轴两端是不需要内间距 boundaryGap</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;周一&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;周二&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	  <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 去除刻度线</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span> <span class="token comment">// 文本颜色</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 去除轴线</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">// 去除轴内间距</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求4： y轴的定制</p><ul><li>刻度去除</li><li>字体颜色：#4c9bfd</li><li>分割线颜色：#012f4a</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">// 去除刻度</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4c9bfd&#39;</span> <span class="token comment">// 文字颜色</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#012f4a&#39;</span> <span class="token comment">// 分割线颜色</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求5： 两条线形图定制</p><ul><li>颜色分别：#00f2f1 #ed3f35</li><li>把折线修饰为圆滑 series 数据中添加 smooth 为 true</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#00f2f1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ed3f35&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;新增粉丝&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 折线修饰为圆滑</span>
      <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;新增游客&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">331</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">233</span><span class="token punctuation">,</span> <span class="token number">543</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>需求6： 配置数据</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// x轴的文字</span>
<span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;11月&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12月&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图标数据</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;新增粉丝&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;新增游客&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">324</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">213</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">]</span><span class="token punctuation">,</span>     
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>需求7： 新增需求 点击 2020年 2021年 数据发生变化</p><p>以下是后台送过来数据（ajax请求过来的）</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> yearData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;2020&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 年份</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">// 两个数组是因为有两条线</span>
             <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">324</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">213</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;2021&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 年份</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">// 两个数组是因为有两条线</span>
             <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">197</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
     		<span class="token punctuation">[</span><span class="token number">143</span><span class="token punctuation">,</span> <span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">178</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
     <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>tab栏切换事件</li><li>点击2020按钮 需要把 series 第一个对象里面的data 换成 2020年对象里面data[0]</li><li>点击2020按钮 需要把 series 第二个对象里面的data 换成 2020年对象里面data[1]</li><li>2021 按钮同样道理</li></ul><p>完整代码：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 折线图1模块制作</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> yearData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&quot;2020&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 年份</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 两个数组是因为有两条线</span>
        <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">134</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">191</span><span class="token punctuation">,</span> <span class="token number">324</span><span class="token punctuation">,</span> <span class="token number">290</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">,</span> <span class="token number">310</span><span class="token punctuation">,</span> <span class="token number">213</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">]</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&quot;2021&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 年份</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 两个数组是因为有两条线</span>
        <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">197</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">143</span><span class="token punctuation">,</span> <span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">165</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">178</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">]</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 1. 实例化对象</span>
  <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.line .chart&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2.指定配置</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过这个color修改两条线的颜色</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#00f2f1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#ed3f35&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果series 对象有name 值，则 legend可以不用写data</span>
      <span class="token comment">// 修改图例组件 文字颜色</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#4c9bfd&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 这个10% 必须加引号</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;20%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;3%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;4%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;3%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示边框</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;#012f4a&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 边框颜色</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 包含刻度文字在内</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;1月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;3月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;4月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;5月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;6月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;7月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;8月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;9月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;10月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;11月&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;12月&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 去除刻度线</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#4c9bfd&quot;</span> <span class="token comment">// 文本颜色</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 去除轴线</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 去除刻度线</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#4c9bfd&quot;</span> <span class="token comment">// 文本颜色</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 去除轴线</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#012f4a&quot;</span> <span class="token comment">// 分割线颜色</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;新增粉丝&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// true 可以让我们的折线显示带有弧度</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> yearData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;新增游客&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> yearData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. 把配置给实例对象</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4. 让图表跟随屏幕自动的去适应</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 5.点击切换效果</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.line h2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// alert(1);</span>
    <span class="token comment">// console.log($(this).index());</span>
    <span class="token comment">// 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象</span>
    <span class="token comment">// console.log(yearData[$(this).index()]);</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> yearData<span class="token punctuation">[</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    option<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> obj<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    option<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> obj<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 需要重新渲染</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_15-折线图2-播放量模块制作" tabindex="-1"><a class="header-anchor" href="#_15-折线图2-播放量模块制作" aria-hidden="true">#</a> 15-折线图2 播放量模块制作</h3><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>需求1： 更换图例组件文字颜色 rgba(255,255,255,.5) 文字大小为12</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.5)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求2： 修改图表大小</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求3： 修改x轴相关配置</p><ul><li>修改文本颜色为rgba(255,255,255,.6) 文字大小为 12</li><li>x轴线的颜色为 rgba(255,255,255,.2)</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>     <span class="token comment">// 文本颜色为rgba(255,255,255,.6)  文字大小为 12</span>
     <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// x轴线的颜色为   rgba(255,255,255,.2)</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.2)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>需求4： 修改y轴的相关配置</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>        <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.6)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
	   <span class="token comment">// 修改分割线的颜色</span>
        <span class="token literal-property property">splitLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      
</code></pre></div><p>需求5： 修改两个线模块配置(注意在series 里面定制)</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>       <span class="token comment">//第一条 线是圆滑</span>
       <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 单独修改线的样式</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// 填充区域</span>
        <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 渐变色，只需要复制即可</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.4)&quot;</span>   <span class="token comment">// 渐变色的起始颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(1, 132, 213, 0.1)&quot;</span>   <span class="token comment">// 渐变线的结束颜色</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点 小圆点</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 拐点大小</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点颜色以及边框</span>
       <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#0184d5&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 开始不显示拐点， 鼠标经过显示</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;转发量&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.4)&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 216, 135, 0.1)&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.1)&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点 小圆点</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 拐点大小</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置拐点颜色以及边框</span>
         <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#00d887&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(221, 220, 107, .1)&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">12</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 开始不显示拐点， 鼠标经过显示</span>
        <span class="token literal-property property">showSymbol</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre></div><p>需求6： 更换数据</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// x轴更换数据</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;01&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;02&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;03&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;04&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;05&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;06&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;07&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;08&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;09&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;14&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;19&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;21&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;22&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;23&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;24&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;26&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;28&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;29&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series  第一个对象data数据</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// series  第二个对象data数据</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">140</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre></div><h3 id="_16-饼形图-1年龄分布模块制作" tabindex="-1"><a class="header-anchor" href="#_16-饼形图-1年龄分布模块制作" aria-hidden="true">#</a> 16-饼形图 1年龄分布模块制作</h3><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>定制图表需求1：</p><ul><li>修改图例组件在底部并且居中显示。</li><li>每个小图标的宽度和高度修改为 10px</li><li>文字大小为12 颜色 rgba(255,255,255,.5)</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 距离底部为0%</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 小图标的宽度和高度</span>
      <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;直接访问&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;邮件营销&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;联盟广告&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;视频广告&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;搜索引擎&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 修改图例组件的文字为 12px</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,.5)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span>
      <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>定制需求2：</p><ul><li>修改水平居中 垂直居中</li><li>修改内圆半径和外圆半径为 [&quot;40%&quot;, &quot;60%&quot;] pink老师友情提示，带有直角坐标系的比如折线图柱状图是 grid修改图形大小，而我们饼形图是通过 radius 修改大小</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;年龄分布&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置饼形图在容器中的位置</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;40%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;60%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示标签文字</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示连接线</span>
        <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre></div><p>定制需求3：更换数据</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// legend 中的data  可省略</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0岁以下&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;20-29岁&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;30-39岁&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;40-49岁&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50岁以上&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">//  series 中的数据</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;0岁以下&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;20-29岁&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;30-39岁&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;40-49岁&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;50岁以上&quot;</span> <span class="token punctuation">}</span>
 <span class="token punctuation">]</span> <span class="token punctuation">,</span>
</code></pre></div><p>定制需求4： 更换颜色</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;#065aab&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;#066eab&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;#0682ab&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;#0696ab&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;#06a0ab&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 4. 让图表跟随屏幕自动的去适应</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_17-饼形图2-地区分布模块制作-南丁格尔玫瑰图" tabindex="-1"><a class="header-anchor" href="#_17-饼形图2-地区分布模块制作-南丁格尔玫瑰图" aria-hidden="true">#</a> 17-饼形图2 地区分布模块制作（南丁格尔玫瑰图）</h3><ul><li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li><li>根据需求定制图表</li></ul><p>第二步：按照需求定制</p><ul><li>需求1：颜色设置</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#006cff&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#60cda0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ed8884&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#ff9f7f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#0096ff&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#9fe6b8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#32c5e9&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#1d9dff&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><ul><li>需求2：修改饼形图大小 ( series对象)</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><ul><li>需求3： 把饼形图的显示模式改为 半径模式</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token string">&quot;radius&quot;</span><span class="token punctuation">,</span>
</code></pre></div><ul><li>需求4：数据使用更换（series对象 里面 data对象）</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;云南&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;北京&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;山东&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;河北&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;江苏&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;浙江&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;四川&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;湖北&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><ul><li><p>需求5：字体略小些 10 px ( series对象里面设置 )</p><p>饼图图形上的文本标签可以控制饼形图的文字的一些样式。 label 对象设置</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;面积模式&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token string">&quot;radius&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 文本标签控制饼形图文字的相关样式， 注意它是一个对象</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>需求6：防止缩放的时候，引导线过长。引导线略短些 (series对象里面的 labelLine 对象设置 ) <ul><li>连接图表 6 px</li><li>连接文字 8 px</li></ul></li></ul><div class="language-diff" data-ext="diff"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">        // 文字调整
</span><span class="token prefix inserted">+</span><span class="token line">        label:{
</span><span class="token prefix inserted">+</span><span class="token line">          fontSize: 10
</span><span class="token prefix inserted">+</span><span class="token line">        },
</span><span class="token prefix inserted">+</span><span class="token line">        // 引导线调整
</span><span class="token prefix inserted">+</span><span class="token line">        labelLine: {
</span><span class="token prefix inserted">+</span><span class="token line">          // 连接扇形图线长
</span><span class="token prefix inserted">+</span><span class="token line">          length: 6,
</span><span class="token prefix inserted">+</span><span class="token line">          // 连接文字线长
</span><span class="token prefix inserted">+</span><span class="token line">          length2: 8
</span><span class="token prefix inserted">+</span><span class="token line">        } 
</span><span class="token prefix inserted">+</span><span class="token line">      }
</span><span class="token prefix inserted">+</span><span class="token line">    ],
</span></span>
</code></pre></div><ul><li>需求6：浏览器缩放的时候，图表跟着自动适配。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 监听浏览器缩放，图表对象调用缩放resize函数</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_19-echarts-map使用-扩展" tabindex="-1"><a class="header-anchor" href="#_19-echarts-map使用-扩展" aria-hidden="true">#</a> 19-Echarts-map使用（扩展）</h3><p>参考社区的例子：https://gallery.echartsjs.com/editor.html?c=x0-ExSkZDM (模拟飞机航线)</p><p>实现步骤：</p><ul><li>第一需要下载china.js提供中国地图的js文件</li><li>第二个因为里面代码比较多，我们新建一个新的js文件 myMap.js 引入</li><li>使用社区提供的配置即可。</li></ul><p>需要修改：</p><ul><li>去掉标题组件</li><li>去掉背景颜色</li><li>修改地图省份背景 #142957 areaColor 里面做修改</li><li>地图放大通过 zoom 设置为1.2即可</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token literal-property property">geo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&#39;china&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">areaColor</span><span class="token operator">:</span> <span class="token string">&#39;#142957&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#0692a4&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">areaColor</span><span class="token operator">:</span> <span class="token string">&#39;#0b1c2d&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>总结：这例子是扩展案例，大家以后可以多看看社区里面的案例。</p><h3 id="_20-最后约束缩放" tabindex="-1"><a class="header-anchor" href="#_20-最后约束缩放" aria-hidden="true">#</a> 20- 最后约束缩放</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 约束屏幕尺寸 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 42px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1920px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 80px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,135);function w(_,S){const a=e("ExternalLinkIcon");return c(),l("div",null,[r,n("blockquote",null,[n("p",null,[s("ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 "),n("a",k,[s("ZRender"),p(a)]),s("，提供直观，交互丰富，可高度个性化定制的数据可视化图表。")])]),i,n("ul",null,[y,m,d,n("li",null,[s("提供很多常用图表，且可"),g,s("。 "),n("ul",null,[n("li",null,[n("a",b,[s("折线图"),p(a)]),s("、"),n("a",q,[s("柱状图"),p(a)]),s("、"),n("a",h,[s("散点图"),p(a)]),s("、"),n("a",f,[s("饼图"),p(a)]),s("、"),n("a",v,[s("K线图"),p(a)])])])])]),n("p",null,[s("官网地址："),n("a",x,[s("https://www.echartsjs.com/zh/index.html"),p(a)])]),j])}const z=o(u,[["render",w],["__file","ksh.html.vue"]]);export{z as default};
