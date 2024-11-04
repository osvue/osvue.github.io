import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="ajax请求头参数" tabindex="-1"><a class="header-anchor" href="#ajax请求头参数" aria-hidden="true">#</a> AJAX请求头参数</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span>url<span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">dateType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// beforeSend: function (xhr) {</span>
                <span class="token comment">//     xhr.setRequestHeader(&quot;organId:&#39;1333333333&#39;&quot;);</span>
                <span class="token comment">// },</span>
                <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>   <span class="token string-property property">&#39;appid&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1333333333&#39;</span><span class="token punctuation">,</span><span class="token string-property property">&#39;nonce&#39;</span><span class="token operator">:</span><span class="token string">&#39;sdaf&#39;</span> <span class="token punctuation">,</span><span class="token string-property property">&#39;timestamp&#39;</span><span class="token operator">:</span><span class="token string">&#39;new Date(100000) &#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// data: JSON.stringify(org),</span>
                <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;sucess&quot;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="ajax的beforesend" tabindex="-1"><a class="header-anchor" href="#ajax的beforesend" aria-hidden="true">#</a> Ajax的beforeSend</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// &lt;!-- 执行前 --&gt;</span>

    <span class="token function-variable function">beforeSend</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">// Handle the beforeSend event</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// &lt;!-- 执行后 --&gt;</span>

    <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">// Handle the complete event</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="防止重复数据" tabindex="-1"><a class="header-anchor" href="#防止重复数据" aria-hidden="true">#</a> 防止重复数据</h3><ul><li>在实际项目开发中，提交表单时常常由于网络或者其原因，用户点击提交按钮误认为自己没有操作成功，进而会重复提交按钮操作次数，</li><li>如果页面前端代码没有做一些相应的处理，通常会导致多条同样的数据插入数据库，导致脏数据的增加。</li><li>要避免这种现象，在$.ajax请求中的beforeSend方法中把提交按钮禁用掉，等到Ajax请求执行完毕，在恢复按钮的可用状态。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 提交表单数据到后台处理</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> studentInfo<span class="token punctuation">,</span>
    <span class="token literal-property property">contentType</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/Home/Submit&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeSend</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 禁用按钮防止重复提交</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#submit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token string">&quot;disabled&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">==</span> <span class="token string">&quot;Success&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//清空输入框</span>
            <span class="token function">clearBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 放开</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#submit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;error: &quot;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>




<span class="token comment">// ajax请求服务器加载数据列表时提示loading(“加载中，请稍后...”),</span>

$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contentType</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/Home/GetList&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeSend</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;loading&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">==</span> <span class="token string">&quot;Success&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;loading&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;error: &quot;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre></div><p>###　表单按钮</p><ul><li>form表单中存在button按钮，此时该如何写这个button呢？</li></ul><ol><li>错误写法，点击时相当于直接提交表单；</li></ol><p><code>&lt;button onclick=&quot;xx()&quot;&gt;增加路程&lt;/button&gt;</code></p><ol start="2"><li>正确写法一</li></ol><p><code>&lt;button type=&quot;button&quot; onclick=&quot;xx()&quot;&gt;增加路程&lt;/button&gt;</code></p><ol start="3"><li>正确写法二</li></ol><p><code>&lt;input type=&quot;button&quot; value=&quot;增加路程&quot; onclick=&quot;xx()&quot;/&gt;　</code></p>`,15),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","ajax_1.html.vue"]]);export{k as default};
