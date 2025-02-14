import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="也可使用google-guava" tabindex="-1"><a class="header-anchor" href="#也可使用google-guava" aria-hidden="true">#</a> 也可使用google guava</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPageInfo</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">Object</span> opage <span class="token operator">=</span> param<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">Object</span> osize <span class="token operator">=</span> param<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;rows&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			page <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>opage<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			size <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>osize<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> map<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span> <span class="token function">limitPage</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 记录总数</span>
		<span class="token class-name">Integer</span> count <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 开始索引</span>
		<span class="token keyword">int</span> fromIndex <span class="token operator">=</span> <span class="token punctuation">(</span>pageNum <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize<span class="token punctuation">;</span>
		<span class="token comment">// 结束索引</span>
		<span class="token keyword">int</span> toIndex <span class="token operator">=</span> pageNum <span class="token operator">*</span> pageSize<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>fromIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>pageNum <span class="token operator">*</span> pageSize <span class="token operator">&gt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			toIndex <span class="token operator">=</span> count<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">List</span> pageList <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">subList</span><span class="token punctuation">(</span>fromIndex<span class="token punctuation">,</span> toIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> pageList<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","Xcode_listlimit.html.vue"]]);export{i as default};
