import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h2><ul><li>在action 中执行异步操作,向后台请求数据 并存放到state 中</li><li>调用: dispatch</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        username<span class="token punctuation">,</span>
        token<span class="token punctuation">,</span>
        accpng
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setUserInfo</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span>
                username<span class="token punctuation">,</span>
                token
            <span class="token punctuation">}</span> <span class="token operator">=</span> payload
            state<span class="token punctuation">.</span>username <span class="token operator">=</span> username
            state<span class="token punctuation">.</span>token <span class="token operator">=</span> token
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">asyncLogin</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;url/login&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 登录成功  调用 mutations 存储state  </span>
                ctx<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setUserInfo&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// 解构 {commit}</span>
        <span class="token function">asyncLogina</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">&#39;url/login&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 登录成功  调用 mutations 存储state  </span>
               <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setUserInfo&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token comment">// 在需要的地方调用</span>
   <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> payload <span class="token operator">=</span><span class="token punctuation">{</span>
      key<span class="token punctuation">,</span>password<span class="token punctuation">,</span>username<span class="token punctuation">,</span>token
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;asyncApi&#39;</span><span class="token punctuation">,</span>payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","vuex_bc.html.vue"]]);export{k as default};
