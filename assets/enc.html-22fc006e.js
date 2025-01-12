import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="接口加解密" tabindex="-1"><a class="header-anchor" href="#接口加解密" aria-hidden="true">#</a> 接口加解密</h2><h2 id="防重放" tabindex="-1"><a class="header-anchor" href="#防重放" aria-hidden="true">#</a> 防重放</h2><ul><li>封装统一的发送方法</li><li>过滤器校验</li><li><code>ES6=&gt;axios</code></li><li><code>AJAX=&gt;headers</code></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">Token</span><span class="token operator">:</span> <span class="token string">&quot;XXXX&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rnd</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;你好 世界&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">contentType</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
		<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

  String token <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   String rnd <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;rnd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//    通过去重的思路来做 Redis or  map  Queue</span>
</code></pre></div>`,4),e=[o];function c(l,r){return a(),s("div",null,e)}const i=n(p,[["render",c],["__file","enc.html.vue"]]);export{i as default};
