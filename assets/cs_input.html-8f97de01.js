import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="input-placeholder-属性来修改placeholder的默认颜色" tabindex="-1"><a class="header-anchor" href="#input-placeholder-属性来修改placeholder的默认颜色" aria-hidden="true">#</a> input-placeholder 属性来修改placeholder的默认颜色：</h3><ol><li><p>说明：placeholder是input框中的提示文字，默认是灰色的，而color是修改input中用户输入文本的颜色，通过color属性是不能修改placeholder颜色的，我们要想修改placeholder的默认颜色可以使用CSS提供的<strong>input-placeholder</strong>属性。</p></li><li><p>修改页面所有input中placeholder颜色的语法：（直接写在<code>&lt;style&gt;&lt;/style&gt;</code>标签下）</p></li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code>

<span class="token selector">input::input-placeholder</span><span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token selector">选中元素::input-placeholder</span><span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token selector">input::input-placeholder</span><span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-webkit-input-placeholder</span><span class="token punctuation">{</span>	//兼容WebKit browsers（Chrome的内核）
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-moz-placeholder</span><span class="token punctuation">{</span>			//Mozilla Firefox 4 to 18
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-moz-placeholder</span><span class="token punctuation">{</span>			//Mozilla Firefox 19+
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-ms-input-placeholder</span><span class="token punctuation">{</span>		//Internet Explorer 10+
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/* 当设置样式时，要实现input框点击前无边框，点击后边框颜色为蓝色，且placeholder字体放大。*/</span>

 

         <span class="token selector">input</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 390px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>//设置高亮边框正常情况下不显示
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">outline-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 153<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>//设置点击后边框为蓝色
          <span class="token punctuation">}</span>
          <span class="token selector">input:focus::-webkit-input-placeholder</span> <span class="token punctuation">{</span>//设置点击后placeholder的样式变化
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> 
</code></pre></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","cs_input.html.vue"]]);export{i as default};
