import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="前端js实现本地模糊搜索" tabindex="-1"><a class="header-anchor" href="#前端js实现本地模糊搜索" aria-hidden="true">#</a> 前端js实现本地模糊搜索</h2><h3 id="模糊查询的规则" tabindex="-1"><a class="header-anchor" href="#模糊查询的规则" aria-hidden="true">#</a> 模糊查询的规则：</h3><blockquote><p>首字母相同，并且包含搜索的所有关键字，例如输入“计科”，返回计算机科学与技术</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token doc-comment comment">/**检查一个字符串是否包含在另一个字符串里,并且首字符相同
     * i:计算机科学与技术
     * j:计科
     * 返回true
     * */</span>
    <span class="token keyword">function</span> <span class="token function">checkStrContain</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>i <span class="token operator">||</span> <span class="token operator">!</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!=</span> j<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>i<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        j <span class="token operator">=</span> j<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>j<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> a<span class="token punctuation">;</span>
        <span class="token keyword">var</span> b<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> j<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a <span class="token operator">=</span> i<span class="token punctuation">;</span>
            b <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            a <span class="token operator">=</span> j<span class="token punctuation">;</span>
            b <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> bi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> bi <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>length<span class="token punctuation">;</span> bi<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> bArr <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>bArr<span class="token punctuation">[</span>bi<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>length <span class="token operator">==</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><h3 id="根据搜索关键字返回符合条件的数组" tabindex="-1"><a class="header-anchor" href="#根据搜索关键字返回符合条件的数组" aria-hidden="true">#</a> 根据搜索关键字返回符合条件的数组：</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
     * 根据字符串模糊搜索返回符合条件的数据
     * name   搜索字符串
     * array  检索json数组
     * length 匹配结果最大长度
     */</span>
    <span class="token keyword">function</span> <span class="token function">getArrayByName</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>array<span class="token punctuation">,</span>length</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkStrContain</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length<span class="token operator">&lt;</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
</code></pre></div><h3 id="按下键盘时进行检索-查找符合条件的数据-选择下拉选项后回填输入框" tabindex="-1"><a class="header-anchor" href="#按下键盘时进行检索-查找符合条件的数据-选择下拉选项后回填输入框" aria-hidden="true">#</a> 按下键盘时进行检索，查找符合条件的数据，选择下拉选项后回填输入框：</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**按下键盘时搜索*/</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">undelegate</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;keyup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delegate</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">var</span> resultArray <span class="token operator">=</span> <span class="token function">getArrayByName</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>jsonArr<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>resultArray<span class="token punctuation">.</span>length<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                        <span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
                        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>resultArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            html <span class="token operator">+=</span> <span class="token string">&quot;&lt;li&gt;&quot;</span><span class="token operator">+</span>resultArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&quot;&lt;/li&gt;&quot;</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token doc-comment comment">/**下拉列表展开时点击li的事件,为输入框赋值*/</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.input-search&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ul li&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="完整代码-包含样式" tabindex="-1"><a class="header-anchor" href="#完整代码-包含样式" aria-hidden="true">#</a> 完整代码(包含样式)：</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.input-search</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">input</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #e5e5e5<span class="token punctuation">;</span>
            <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
            <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
            <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">ul</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 29px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #62a6da<span class="token punctuation">;</span>
            <span class="token property">max-height</span><span class="token punctuation">:</span> 340px<span class="token punctuation">;</span>
            <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">ul li</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #454545<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
            <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">ul li:hover</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #1c9dff<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input-search<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入课程名称<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jquery.js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**按下键盘时搜索*/</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">undelegate</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;keyup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delegate</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">var</span> resultArray <span class="token operator">=</span> <span class="token function">getArrayByName</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>jsonArr<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>resultArray<span class="token punctuation">.</span>length<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                        <span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
                        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>resultArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            html <span class="token operator">+=</span> <span class="token string">&quot;&lt;li&gt;&quot;</span><span class="token operator">+</span>resultArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&quot;&lt;/li&gt;&quot;</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token doc-comment comment">/**下拉列表展开时点击li的事件,为输入框赋值*/</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.input-search&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ul li&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">var</span> jsonArr <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;计算机组成原理&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;计算机网络&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;数据结构&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;网页程序设计&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;嵌入式开发&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;高等数学&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;计算机应用技术&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;计算机科学与技术&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token doc-comment comment">/**
     * 根据字符串模糊搜索返回符合条件的数据
     * name   搜索字符串
     * array  检索json数组
     * length 匹配结果最大长度
     */</span>
    <span class="token keyword">function</span> <span class="token function">getArrayByName</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>array<span class="token punctuation">,</span>length</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkStrContain</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length<span class="token operator">&lt;</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**检查一个字符串是否包含在另一个字符串里,并且首字符相同
     * i:计算机科学与技术
     * j:计科
     * 返回true
     * */</span>
    <span class="token keyword">function</span> <span class="token function">checkStrContain</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>i <span class="token operator">||</span> <span class="token operator">!</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!=</span> j<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>i<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        j <span class="token operator">=</span> j<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>j<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> a<span class="token punctuation">;</span>
        <span class="token keyword">var</span> b<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> j<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a <span class="token operator">=</span> i<span class="token punctuation">;</span>
            b <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            a <span class="token operator">=</span> j<span class="token punctuation">;</span>
            b <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> bi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> bi <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>length<span class="token punctuation">;</span> bi<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> bArr <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>bArr<span class="token punctuation">[</span>bi<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>length <span class="token operator">==</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,10),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","csssearch.html.vue"]]);export{i as default};
