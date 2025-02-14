import{_ as t,M as p,p as o,q as e,R as n,t as s,N as c,a1 as l}from"./framework-d81ad7e5.js";const u={},k={id:"fuse-js",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#fuse-js","aria-hidden":"true"},"#",-1),r={href:"https://fusejs.io/demo.html",target:"_blank",rel:"noopener noreferrer"},d=l(`<ul><li><code>Bootstrap3：Typeahead.js或者magicsuggest.js</code></li><li><code>JQuery autocomplete和Select2</code></li></ul><h3 id="模糊匹配选项" tabindex="-1"><a class="header-anchor" href="#模糊匹配选项" aria-hidden="true">#</a> 模糊匹配选项</h3><h4 id="includematches" tabindex="-1"><a class="header-anchor" href="#includematches" aria-hidden="true">#</a> includeMatches</h4><ul><li>类型:boolean</li><li>默认值:false 是否应该将匹配包含在结果集中。当为true时，结果集中的每条记录都将包含匹配字符的索引。因此，这些可以用于突出显示的目的。</li></ul><h4 id="minmatchcharlength" tabindex="-1"><a class="header-anchor" href="#minmatchcharlength" aria-hidden="true">#</a> minMatchCharLength</h4><ul><li>类型:number</li><li>默认值:1只有长度超过该值的匹配才会返回。(例如，如果您想忽略结果中的单个字符匹配，请将其设置为2)</li></ul><h4 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h4><ul><li>类型:数字</li><li>默认值:0确定文本中期望找到的模式的大约位置。</li></ul><h4 id="threshold" tabindex="-1"><a class="header-anchor" href="#threshold" aria-hidden="true">#</a> <code>threshold</code></h4><ul><li>个人实验为 精确度</li><li>Type: <code>number</code></li><li>Default: <code>0.6</code></li><li>匹配算法在什么点放弃。阈值为0.0需要完全匹配(字母和位置)，阈值为1.0可以匹配任何东西。 <ul><li>字母和位置: 是否需要模糊匹配， <ul><li>0.5：中人 --》 中农过人 or 中国人民 都会匹配</li><li>0.1：中人 --》 中人bai or 中人大学 精确到位置完全的精度</li></ul></li></ul></li></ul><h4 id="distance" tabindex="-1"><a class="header-anchor" href="#distance" aria-hidden="true">#</a> <code>distance</code></h4><ul><li>字符的长度 个人实验为 threshold * distance</li><li>Type: <code>number</code></li><li>Default: <code>100</code></li><li>确定匹配必须与模糊位置有多近(由 <strong>location</strong> 指定)。一个精确的字母匹配，即字符与模糊位置的距离，将得分为完全不匹配。0的距离要求匹配在指定的精确位置。1000的距离需要完美匹配，使用0.8的阈值在800个字符内找到位置。</li></ul><h4 id="ignorelocation" tabindex="-1"><a class="header-anchor" href="#ignorelocation" aria-hidden="true">#</a> <code>ignoreLocation</code></h4><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>当为true时，搜索将忽略位置和距离，因此模式出现在字符串中的哪个位置并不重要。</li><li>提示默认选项只搜索前60个字符。如果合理地预期匹配在这个范围内，这就足够了。要修改此行为，请设置适当的 <code>location</code>, <code>threshold</code>, <code>distance</code> (or <code>ignoreLocation</code>)</li></ul><p><code>100 * 0.6</code> Determines how close the match must be to the fuzzy location (specified by <code>location</code>). An exact letter match which is <code>distance</code> characters away from the fuzzy location would score as a complete mismatch. A <code>distance</code> of <code>0</code> requires the match be at the exact <code>location</code> specified. A distance of <code>1000</code> would require a perfect match to be within <code>800</code> characters of the <code>location</code> to be found using a <code>threshold</code> of <code>0.8</code>.</p><ul><li><code>https://fusejs.io/api/options.html#threshold</code></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">shouldSort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// 是否按分数对结果列表排序</span>
        <span class="token literal-property property">includeScore</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 是否应将分数包含在结果集中。0分表示完全匹配，1分表示完全不匹配。</span>
        <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>     <span class="token comment">// 匹配算法阈值。阈值为0.0需要完全匹配（字母和位置），阈值为1.0将匹配任何内容。</span>
        <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>        <span class="token comment">// 确定文本中预期找到的模式的大致位置。</span>
        <span class="token literal-property property">distance</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxPatternLength</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>  <span class="token comment">// 模式的最大长度</span>
        <span class="token literal-property property">minMatchCharLength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">// 模式的最小字符长度</span>
        <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 搜索标题与路径</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token comment">// 初始化</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">shouldSort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否按分数对结果列表排序</span>
        <span class="token literal-property property">includeScore</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//  是否应将分数包含在结果集中。0分表示完全匹配，1分表示完全不匹配。</span>
        <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token comment">// 匹配算法阈值。阈值为0.0需要完全匹配（字母和位置），阈值为1.0将匹配任何内容。</span>
        <span class="token doc-comment comment">/**
         * 确定匹配与模糊位置（由位置指定）的距离。
         *      一个精确的字母匹配，即距离模糊位置很远的字符将被视为完全不匹配。
         *  距离 (字符的长度) 为0要求匹配位于指定的准确位置， 
         *  距离 (字符的长度) 为1000则要求  
         *  完全匹配  位于使用阈值0.8 找到 的 位置的800个字符以内
         */</span>
        <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 确定文本中预期找到的模式的大致位置。</span>
        <span class="token literal-property property">distance</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxPatternLength</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token comment">// 模式的最大长度</span>
        <span class="token literal-property property">minMatchCharLength</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 模式的最小字符长度</span>
        <span class="token comment">// 搜索标题与作者名</span>
        <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;author.firstName&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token comment">// 设置数据与参数</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fuse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>books<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>配置项</th><th>描述</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>isCaseSensitive</td><td>大小写敏感</td><td>FALSE</td><td></td></tr><tr><td>includeScore</td><td>结果包含匹配度</td><td>FALSE</td><td>结果值：0表示完全匹配，1表示完全不匹配</td></tr><tr><td>includeMatches</td><td>结果包含匹配字符的索引值</td><td>FALSE</td><td>可用于高亮显示搜索字符的场景</td></tr><tr><td>minMatchCharLength</td><td>最小匹配长度</td><td>1</td><td>可用于需要至少几个字符才执行搜索的场景</td></tr><tr><td>shouldSort</td><td>结果集排序</td><td>TRUE</td><td>结果集按照匹配度排序</td></tr><tr><td>findAllMatches</td><td>查找所有项目</td><td>FALSE</td><td>即使找到了完全匹配项目也继续查找完其他所有项目</td></tr><tr><td>keys</td><td>查找字段配置</td><td></td><td>被查字段的路径(支持嵌套查找)，权重(默认权重值为1)，例如：[‘name.first’,{name:‘name.last’,weight:0.5}]</td></tr><tr><td>location</td><td>匹配的字符预期的位置</td><td>0</td><td>匹配到的字符距离指定位置越近分数越高</td></tr><tr><td>threshold</td><td>匹配度阈值</td><td>0.6</td><td>0.0表示完全匹配(字符和位置)；1.0将会匹配所有值</td></tr><tr><td>distance</td><td>l匹配的字符在location指定位置的范围</td><td>100</td><td>0表示必须正好在location指定的位置</td></tr><tr><td>ignoreLocation</td><td>忽略location配置参数</td><td>FALSE</td><td>location和distance都会被忽略</td></tr></tbody></table><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h4><div class="language-html" data-ext="html"><pre class="language-html"><code> 
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../bootstrap/css/bootstrap.min.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../bootstrap/js/bootstrap.bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/search/fuse.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.aa</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #edeede<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token selector">.sear</span> <span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.st</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>113<span class="token punctuation">,</span> 182<span class="token punctuation">,</span> 171<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.dropdown-menu</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.pmu</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>

            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token selector">.uili</span> <span class="token punctuation">{</span>
            <span class="token comment">/* border: 1px solid black; */</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token selector">.uili:hover</span> <span class="token punctuation">{</span>
            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.99<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #ededed<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.searchipt</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>140<span class="token punctuation">,</span> 222<span class="token punctuation">,</span> 216<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>


        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vapp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container-fluid aa<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-md-12 st<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row sear<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span>#ededed <span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-md-2 st<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-md-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFocus($event)<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuName<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-control col-md-4 searchipt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dropdown-menu pmu col-md-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uili<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in uls<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>casUrl(item)<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                        {{ item.name}}
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-md-2 st<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>22
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#vapp&#39;</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">menuName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">uls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ccc&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">onFocus</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>menuName<span class="token punctuation">)</span><span class="token punctuation">)</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">casUrl</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span>
                    id<span class="token punctuation">,</span>
                    name
                <span class="token punctuation">}</span> <span class="token operator">=</span> item
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;menuName&#39;</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span> <span class="token string">&#39;&lt;===原来 to 新===&gt;&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.dropdown-menu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;申天暗室逢灯&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scalzi&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;提哈德发大发天&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scalzi&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;三个月后单位&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scalzi&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;他说的感动&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scalzi&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;赵agag大幅度发给的天&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hamilton&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;申庄人&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Remy&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sharp&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李白白&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;P.D&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Woodhouse&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;白天和黑夜&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;P.D&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Woodhouse&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;韩申&quot;</span><span class="token punctuation">,</span>
                            <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;P.D&quot;</span><span class="token punctuation">,</span>
                                <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Woodhouse&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                    <span class="token keyword">const</span> fuse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token comment">// isCaseSensitive: false,</span>
                        <span class="token comment">// includeScore: false,</span>
                        <span class="token literal-property property">shouldSort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token comment">// includeMatches: false,</span>
                        <span class="token comment">// findAllMatches: false,</span>
                        <span class="token comment">// minMatchCharLength: 1,</span>
                        <span class="token comment">// location: 0,</span>
                        <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
                        <span class="token comment">// distance: 100,</span>
                        <span class="token comment">// useExtendedSearch: false,</span>
                        <span class="token comment">// ignoreLocation: false,</span>
                        <span class="token comment">// ignoreFieldNorm: false,</span>
                        <span class="token comment">// fieldNormWeight: 1,</span>
                        <span class="token literal-property property">keys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;search    /// / &#39;</span><span class="token punctuation">,</span> fuse<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">)</span>

                    <span class="token keyword">let</span> rls <span class="token operator">=</span> fuse<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
                    <span class="token keyword">let</span> varr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">{</span>
                            item<span class="token punctuation">,</span>
                            refIndex
                        <span class="token punctuation">}</span> <span class="token keyword">of</span> rls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
                        varr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> refIndex<span class="token punctuation">,</span>
                            <span class="token literal-property property">name</span><span class="token operator">:</span> item<span class="token punctuation">.</span>title
                        <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>uls <span class="token operator">=</span> varr
                    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.dropdown-menu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.dropdown-menu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;init app&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="输入框自动补全" tabindex="-1"><a class="header-anchor" href="#输入框自动补全" aria-hidden="true">#</a> 输入框自动补全</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>jQuery UI Autocomplete - Default functionality<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/resources/demos/style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://code.jquery.com/jquery-3.6.0.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://code.jquery.com/ui/1.13.2/jquery-ui.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> availableTags <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;ActionScript&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;AppleScript&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Asp&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;BASIC&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;C++&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Clojure&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;COBOL&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ColdFusion&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Erlang&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Fortran&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Groovy&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Haskell&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Perl&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;PHP&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Ruby&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Scala&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Scheme&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#tags&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">autocomplete</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> availableTags
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ui-widget<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tags<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tags: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tags<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,22);function g(q,m){const a=p("ExternalLinkIcon");return o(),e("div",null,[n("h3",k,[i,s(),n("a",r,[s("fuse.js"),c(a)])]),d])}const y=t(u,[["render",g],["__file","searchth.html.vue"]]);export{y as default};
