import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">background-repeat</span><span class="token punctuation">:</span>repeat-x<span class="token punctuation">;</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> 0 -600px<span class="token punctuation">;</span>

<span class="token selector">.caption</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.5em 1em<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/**磨砂玻璃效果 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 加载背景图 */</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>images/bg.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token comment">/* 背景图垂直、水平均居中 */</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
    <span class="token comment">/* 背景图不平铺 */</span>
    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
    <span class="token comment">/* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */</span>
    <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token comment">/* 让背景图基于容器大小伸缩 */</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token comment">/* 设置背景颜色，背景图加载过程中会显示背景色 */</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #464646<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre></div><h2 id="background-repeat" tabindex="-1"><a class="header-anchor" href="#background-repeat" aria-hidden="true">#</a> background-repeat</h2><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>repeat</td><td>默认。背景图像将在垂直方向和水平方向重复。</td></tr><tr><td>repeat-x</td><td>背景图像将在水平方向重复。</td></tr><tr><td>repeat-y</td><td>背景图像将在垂直方向重复。</td></tr><tr><td>no-repeat</td><td>背景图像将仅显示一次。</td></tr><tr><td>inherit</td><td>规定应该从父元素继承 background-repeat 属性的设置。</td></tr></tbody></table><h3 id="背景案例" tabindex="-1"><a class="header-anchor" href="#背景案例" aria-hidden="true">#</a> 背景案例</h3><div class="language-html" data-ext="html"><pre class="language-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.shell</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.img</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./img.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
            <span class="token property">background-repeat</span><span class="token punctuation">:</span>repeat-x<span class="token punctuation">;</span>
            <span class="token property">background-position</span><span class="token punctuation">:</span> 0 -600px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.img&#39;</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">=</span>e<span class="token punctuation">.</span>clientX
            <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">=</span>e<span class="token punctuation">.</span>clientY
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_x<span class="token operator">=</span>e<span class="token punctuation">.</span>clientX
            <span class="token keyword">this</span><span class="token punctuation">.</span>_y<span class="token operator">=</span>e<span class="token punctuation">.</span>clientY
            <span class="token keyword">const</span> disx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_x<span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>x
            <span class="token keyword">const</span> disy <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_y<span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>y
            <span class="token keyword">const</span> movex <span class="token operator">=</span> disx<span class="token operator">*</span><span class="token number">2</span>
            <span class="token keyword">const</span> movey <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">600</span><span class="token operator">+</span>disy<span class="token operator">/</span><span class="token number">1.6</span>
            img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundPosition<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>movex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>movey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position" aria-hidden="true">#</a> background-position</h2><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>left top</td><td>如果仅指定一个关键字，其他值将会是&quot;center&quot;</td></tr><tr><td>left center</td><td></td></tr><tr><td>left bottom</td><td></td></tr><tr><td>right top</td><td></td></tr><tr><td>right center</td><td></td></tr><tr><td>right bottom</td><td></td></tr><tr><td>center top</td><td></td></tr><tr><td>center center</td><td></td></tr><tr><td>center bottom</td><td></td></tr><tr><td>x% y%</td><td>第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％</td></tr><tr><td>xpos ypos</td><td>第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions</td></tr><tr><td>inherit</td><td>指定background-position属性设置应该从父元素继承</td></tr></tbody></table><ol><li>background-position:left top;</li></ol><p>背景图片的左上角和容器(container)的左上角对齐，超出的部分隐藏。</p><p>等同于 background-position:0,0;</p><p>也等同于background-position:0%,0%;</p><ol start="2"><li>background-position:right bottom;</li></ol><p>背景图片的右下角和容器(container)的右下角对齐，超出的部分隐藏。</p><p>等同于background-positon:100%,100%;</p><p>也等同于background-positon:容器(container)的宽度-背景图片的宽度,容器(container)的高度-背景图片的高度</p><ol start="3"><li>background-position:500px 15px；</li></ol><p>背景图片从容器(container)左上角的地方向右移500px,向下移15px，超出的部分隐藏。</p><ol start="4"><li>background-position:-500px -15px;</li></ol><p>背景图片从容器(container)左上角的地方向左移500px，向上移15px，超出的部分隐藏。</p><ol start="5"><li>background-position:50% 50%;这句经常让新手出错！</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>等同于 left：{ 容器(container)的宽度 — 背景图片的宽度 }*left  百分比，超出的部分隐藏。

等同于 right：{容器(container)的高度—背景图片的高度}*right百分比，超出的部分隐藏。
 
例如：background-position:50% 50%;就是background-position:(1000-2000)*50%px,(500-30)*50%px;即background- position:-500px,235px;也就是背景图片从容器(container)的左上角向左移500px，向下移235px；
</code></pre></div><ol start="6"><li>（这种情况背景图片应该用bg2.jpg才能看出效果,bg.jpg的高度太小效果不明显）</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">background-position</span><span class="token punctuation">:</span>-50% -50%<span class="token punctuation">;</span>

<span class="token selector">等同于left：-</span><span class="token punctuation">{</span>   <span class="token punctuation">{</span>容器<span class="token punctuation">(</span>container<span class="token punctuation">)</span>的宽度—背景图片的宽度<span class="token punctuation">}</span>*left百分比（百分比都取正值）<span class="token punctuation">}</span><span class="token selector">，超出的部分隐藏。

等同于right：-</span><span class="token punctuation">{</span>   <span class="token punctuation">{</span>容器<span class="token punctuation">(</span>container<span class="token punctuation">)</span>的高度—背景图片的高度<span class="token punctuation">}</span>*right百分比（百分比都取正值）<span class="token punctuation">}</span>，超出的部分隐藏。

例如：

<span class="token property">background-position</span><span class="token punctuation">:</span>-50% -50%<span class="token punctuation">;</span>
</code></pre></div><p>就是</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">background-position:-</span><span class="token punctuation">{</span><span class="token punctuation">(</span>1000-500<span class="token punctuation">)</span>*50%<span class="token punctuation">}</span><span class="token selector">px,-</span><span class="token punctuation">{</span><span class="token punctuation">(</span>500-360<span class="token punctuation">)</span>*50%<span class="token punctuation">}</span>px<span class="token punctuation">;</span>

<span class="token comment">/* 即 */</span>
 background- <span class="token property">position</span><span class="token punctuation">:</span>-250px<span class="token punctuation">,</span>-70px<span class="token punctuation">;</span>
</code></pre></div><p>也就是背景图片从容器(container)的左上角向左移250px，向上移70px；</p><h2 id="background-attachment" tabindex="-1"><a class="header-anchor" href="#background-attachment" aria-hidden="true">#</a> background-attachment</h2><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>scroll</td><td>背景图片随着页面的滚动而滚动，这是默认的。</td></tr><tr><td>fixed</td><td>背景图片不会随着页面的滚动而滚动。</td></tr><tr><td>local</td><td>背景图片会随着元素内容的滚动而滚动。</td></tr><tr><td>initial</td><td>设置该属性的默认值。</td></tr><tr><td>inherit</td><td>指定 background-attachment 的设置应该从父元素继承。</td></tr></tbody></table>`,28),c=[o];function e(l,u){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","cssbgc.html.vue"]]);export{k as default};
