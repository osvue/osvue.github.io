import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="第二种滚动条scrollbar" tabindex="-1"><a class="header-anchor" href="#第二种滚动条scrollbar" aria-hidden="true">#</a> 第二种滚动条scrollbar</h2><h3 id="页面引入html界面" tabindex="-1"><a class="header-anchor" href="#页面引入html界面" aria-hidden="true">#</a> 页面引入html界面</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./index.html<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>800px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="自定义滚动条图片" tabindex="-1"><a class="header-anchor" href="#自定义滚动条图片" aria-hidden="true">#</a> 自定义滚动条图片</h3><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>CSS3自定义滚动条图片版 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">*</span><span class="token punctuation">{</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
		<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">#container</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
		<span class="token property">line-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
		<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*定义滚动条的高宽*/</span>
	<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
	    <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*CSS的坐标系，左上角为(0,0),往右往下为增加，往上往左为减少*/</span>
	<span class="token comment">/*显示滚动条上方的渐增按钮*/</span>
	<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token property">-webkit-scrollbar-button</span><span class="token punctuation">:</span><span class="token property">start</span><span class="token punctuation">:</span>decrement<span class="token punctuation">,</span>
	<span class="token comment">/*显示滚动条上方的渐减按钮*/</span>
	<span class="token selector">::-webkit-scrollbar-button:end:increment</span> <span class="token punctuation">{</span>
	    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*隐藏滚动条上方的渐增按钮*/</span>
	<span class="token selector">::-webkit-scrollbar-button:vertical:start:increment,
	::-webkit-scrollbar-button:vertical:end:decrement</span> <span class="token punctuation">{</span>
	    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* 定义滚动条渐增按扭的样式 */</span>
	<span class="token selector">::-webkit-scrollbar-button:end:increment</span> <span class="token punctuation">{</span>
	    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/scroll_cntrl_dwn.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* 定义滚动条渐减按扭的样式 */</span>
	<span class="token selector">::-webkit-scrollbar-button:start:decrement</span> <span class="token punctuation">{</span>
	    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/scroll_cntrl_up.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* 垂直滚动条的第三层轨道的上段 */</span>
	<span class="token selector">::-webkit-scrollbar-track-piece:vertical:start</span> <span class="token punctuation">{</span>
	    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/scroll_gutter_top.png<span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/scroll_gutter_mid.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">,</span> repeat-y<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* 垂直滚动条的第三层轨道的下段 */</span>
	<span class="token selector">::-webkit-scrollbar-track-piece:vertical:end</span> <span class="token punctuation">{</span>
	    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/scroll_gutter_btm.png<span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/scroll_gutter_mid.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">,</span> repeat-y<span class="token punctuation">;</span>
	    <span class="token property">background-position</span><span class="token punctuation">:</span> bottom left<span class="token punctuation">,</span> 0 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* 垂直滚动条的滑动块 */</span>
	<span class="token selector">::-webkit-scrollbar-thumb:vertical</span> <span class="token punctuation">{</span>
	    <span class="token property">height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
	    <span class="token property">-webkit-border-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/scroll_thumb.png<span class="token punctuation">)</span></span> 8 0 8 0 stretch stretch<span class="token punctuation">;</span>
	    <span class="token property">border-width</span><span class="token punctuation">:</span> 8 0 8 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CSS3自定义滚动条图片版<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>请在chrome下看右侧滚动条，其他浏览器没有效果哦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","cssscroll2.html.vue"]]);export{i as default};
