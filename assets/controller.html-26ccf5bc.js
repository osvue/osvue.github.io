import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="获取当前项目全部controller接口" tabindex="-1"><a class="header-anchor" href="#获取当前项目全部controller接口" aria-hidden="true">#</a> 获取当前项目全部Controller接口</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">WebApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/getParam&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">RequestMappingHandlerMapping</span> mapping <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">RequestMappingHandlerMapping</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 拿到Handler适配器中的全部方法</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RequestMappingInfo</span><span class="token punctuation">,</span> <span class="token class-name">HandlerMethod</span><span class="token punctuation">&gt;</span></span> methodMap <span class="token operator">=</span> mapping<span class="token punctuation">.</span><span class="token function">getHandlerMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> urlList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">RequestMappingInfo</span> info <span class="token operator">:</span> methodMap<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           
            <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> urlSet <span class="token operator">=</span> info<span class="token punctuation">.</span><span class="token function">getPatternsCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPatterns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取全部请求方式</span>
            <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RequestMethod</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Methods</span> <span class="token operator">=</span> info<span class="token punctuation">.</span><span class="token function">getMethodsCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Methods</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> url <span class="token operator">:</span> urlSet<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 加上自己的域名和端口号，就可以直接调用</span>
                urlList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:XXXX&quot;</span><span class="token operator">+</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> urlList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre></div>`,2),c=[o];function e(l,u){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","controller.html.vue"]]);export{k as default};