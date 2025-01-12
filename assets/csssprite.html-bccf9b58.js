import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ol><li><p>精灵图技术产生的目的：很多大型网页在首次加载的时候都需要加载很多的小图片，而考虑到在同一时间，服务器拥堵的情况下，为了解决这一问题，采用了精灵图这一技术来缓解加载时间过长从而影响用户体验的这个问题。</p></li><li><p>精灵图技术的本质：所谓精灵图就是把很多的小图片合并到一张较大的图片里，所以在首次加载页面的时候，就不用加载过多的小图片，只需要加载出来将小图片合并起来的那一张大图片也就是精灵图即可，这样在一定程度上减少了页面的加载速度，也一定程度上缓解了服务器的压力。例如王者荣耀页面里的几个小logo:</p></li><li><p>运用到了background-position。我们通过它来改变背景图片的位置，从而显示出我们想要显示出来的部分。</p></li><li><p>其实说白了就是将精灵图设为一个大背景，然后通过background-position来移动背景图，从而显示出我们想要显示出来的部分。</p></li><li><p>精灵图虽然实现了缓解服务器压力以及用户体验等问题，但还是有一个很大的不足，那就是牵一发而动全身。这些图片的背景都是我们详细测量而得出来的，如果需要改动页面，将会是很麻烦的一项工作。。。</p></li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>精灵图的使用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
			<span class="token comment">/* 共同的样式 */</span>
			<span class="token selector">div</span><span class="token punctuation">{</span>
				<span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/images/abcd.jpg<span class="token punctuation">)</span></span> <span class="token punctuation">;</span><span class="token comment">/* 导入精灵图资源 */</span>
				<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span><span class="token comment">/* 设置向左浮动 */</span>
			<span class="token punctuation">}</span>
			<span class="token selector">.box1</span><span class="token punctuation">{</span>
				<span class="token comment">/* 盒子的高度宽度要和精灵图的大小一致 */</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 106px<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 107px<span class="token punctuation">;</span>
				<span class="token property">background-position</span><span class="token punctuation">:</span> -494px -142px<span class="token punctuation">;</span><span class="token comment">/* 分别对应x 和 y 轴 */</span>
				<span class="token comment">/* 在ps中进行定位的时候，把光标放在矩形选区的左上角，可以得到位置 */</span>
			<span class="token punctuation">}</span>
			
			<span class="token selector">.box2</span><span class="token punctuation">{</span>
				<span class="token comment">/* 盒子的高度宽度要和精灵图的大小一致 */</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 106px<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 107px<span class="token punctuation">;</span>
				<span class="token property">background-position</span><span class="token punctuation">:</span> -494px -142px<span class="token punctuation">;</span><span class="token comment">/* 分别对应x 和 y 轴 */</span>
				<span class="token comment">/* 在ps中进行定位的时候，把光标放在矩形选区的左上角，可以得到位置 */</span>
			<span class="token punctuation">}</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","csssprite.html.vue"]]);export{i as default};
