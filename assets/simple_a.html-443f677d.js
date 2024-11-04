import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>将save()设置为全局的</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function-variable function">save</span><span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">body,ul</span><span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token selector">ul li</span><span class="token punctuation">{</span>
	<span class="token property">list-style</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token selector">#list1</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #CCCCCC<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 15px auto<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span>5px 5px 5px 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
						
<span class="token selector">#add1</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
		
<span class="token selector">#listul1</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#listul1 li</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
	<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 12pt<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #F54343<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#add2</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>800px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>248px<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>	

<span class="token selector">#listul2</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#listul2 li</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
		 <span class="token keyword">var</span> listul1<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;listul1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token keyword">var</span> ul1li<span class="token operator">=</span>listul1<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token keyword">var</span> listul2<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;listul2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token keyword">var</span> ul2li<span class="token operator">=</span>listul2<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>ul1li<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
		      <span class="token punctuation">{</span>    
			   ul1li<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>index<span class="token operator">=</span>i<span class="token punctuation">;</span>
			   ul1li<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">&#39;#DA3C3C&#39;</span><span class="token punctuation">;</span>
			   ul1li<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>color<span class="token operator">=</span><span class="token string">&#39;#fff&#39;</span><span class="token punctuation">;</span>
			   ul2li<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
			   ul1li<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			         <span class="token punctuation">{</span>
					   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>ul1li<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
					       <span class="token punctuation">{</span>
							 ul1li<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
							 ul1li<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>color<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
							 ul2li<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
					        <span class="token punctuation">}</span>
						<span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor<span class="token operator">=</span><span class="token string">&#39;pointer&#39;</span><span class="token punctuation">;</span>
						<span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">&#39;#DA3C3C&#39;</span><span class="token punctuation">;</span>
						<span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>color<span class="token operator">=</span><span class="token string">&#39;#fff&#39;</span><span class="token punctuation">;</span>
						ul2li<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
			          <span class="token punctuation">}</span>
			   <span class="token punctuation">}</span>  
	      <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>



	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listul1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>教育新闻<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>学校新闻<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>教师新闻<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>学生新闻<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
			  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
			  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listul2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>教育新闻内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                      
                      
                      
				      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                        
                          学校新闻内容2
                    
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                      
                      
				      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>教师新闻内容3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                      
                      
				      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>学生新闻内容4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
			  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,3),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","simple_a.html.vue"]]);export{i as default};
