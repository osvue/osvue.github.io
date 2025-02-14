import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li><p>H5中， 有个属性，<strong>draggable=&quot;true&quot;</strong>， 这个属性呢(默认false)，需要加在标签上，加上去该标签就可以拖动了</p></li><li><p>拖拽div的时候， 能监听到三个事件</p></li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.app</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eedded<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>

        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">p</span> <span class="token punctuation">{</span>
        <span class="token property">columns</span><span class="token punctuation">:</span> 300px 3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.t</span> <span class="token punctuation">{</span>

        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token comment">/* 为了拖拽 定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>

        <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>tt<span class="token punctuation">&#39;</span></span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> tt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;tt&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> <span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//开始拖拽事件</span>
    tt<span class="token punctuation">.</span><span class="token function-variable function">ondragstart</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">X</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span> <span class="token comment">//记录鼠标点下的位置。(因为div的定位点，是左上角 0，0)</span>
        <span class="token constant">Y</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//结束拖拽事件</span>
    <span class="token comment">/*
    配合绝对定位
    */</span>
    tt<span class="token punctuation">.</span><span class="token function-variable function">ondragend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> <span class="token constant">X1</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX <span class="token operator">-</span> <span class="token constant">X</span><span class="token punctuation">;</span> <span class="token comment">//结束的位置，减去鼠标点下的位置，那么得到的位置，就是div落下的位置。</span>
        <span class="token keyword">var</span> <span class="token constant">Y1</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY <span class="token operator">-</span> <span class="token constant">Y</span><span class="token punctuation">;</span>
         
        tt<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> tt<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> <span class="token constant">X1</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span> <span class="token comment">//这里还需要加上 div当前的位置， 累加。 </span>
        tt<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> tt<span class="token punctuation">.</span>offsetTop <span class="token operator">+</span> <span class="token constant">Y1</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    tt<span class="token punctuation">.</span><span class="token function-variable function">ondrag</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//拖拽过程中的事件</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;drag&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="配合指定容器-常用" tabindex="-1"><a class="header-anchor" href="#配合指定容器-常用" aria-hidden="true">#</a> 配合指定容器(常用)</h2><ul><li>在指定容器内，才会触发的</li><li>ondragenter, ondragover, ondragleave, ondrop, 这四个事件呢，是绑定到，你要把拖拽的东西，放到那里去。</li></ul>`,4),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","css_tf.html.vue"]]);export{i as default};
