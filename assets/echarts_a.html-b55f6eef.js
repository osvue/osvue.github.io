import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="echarts-参考资源" tabindex="-1"><a class="header-anchor" href="#echarts-参考资源" aria-hidden="true">#</a> echarts 参考资源</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>echarts 组件 ：
https://gallery.echartsjs.com/explore.html<span class="token comment">#sort=rank~timeframe=all~author=all</span>

阿里GeoJson
http://datav.aliyun.com/tools/atlas/<span class="token comment">#&amp;lat=31.80289258670676&amp;lng=104.2822265625&amp;zoom=4</span>


css 按钮

https://www.runoob.com/css3/css3-buttons.html


vue
https://www.runoob.com/vue2/vue-events.html

gallery
https://gallery.echartsjs.com/explore.html<span class="token comment">#sort=rank~timeframe=all~author=all</span>

https://www.makeapie.com/explore.html


</code></pre></div><h2 id="异步获取数据" tabindex="-1"><a class="header-anchor" href="#异步获取数据" aria-hidden="true">#</a> 异步获取数据</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>dom<span class="token punctuation">}</span></span> <span class="token parameter">_id</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span> <span class="token parameter">my_text</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>数据<span class="token punctuation">}</span></span> <span class="token parameter">_data</span>
 * <span class="token keyword">@see</span> 格式: [<span class="token punctuation">{</span>name:&#39;显示的文字&#39;,value:&#39;val&#39;<span class="token punctuation">}</span>,<span class="token punctuation">{</span>name:&#39;显示的文字&#39;,value:&#39;val&#39;<span class="token punctuation">}</span>,..] 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>自定义颜色数组<span class="token punctuation">}</span></span> <span class="token parameter">color</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">myPieColor</span><span class="token punctuation">(</span><span class="token parameter">_id<span class="token punctuation">,</span> my_text<span class="token punctuation">,</span> _data<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    option <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> my_text<span class="token punctuation">,</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{b} : {c} ({d}%)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//  自定义颜色</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> color<span class="token punctuation">,</span>

        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token string">&#39;55%&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> _data<span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.5)&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>option <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> option <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>dom<span class="token punctuation">}</span></span> <span class="token parameter">id</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span> <span class="token parameter">title</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>x data 文字 Array<span class="token punctuation">}</span></span> <span class="token parameter">xdata</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>y data Array<span class="token punctuation">}</span></span> <span class="token parameter">data</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>自定义颜色<span class="token punctuation">}</span></span> <span class="token parameter">color</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">initBar</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> xdata<span class="token punctuation">,</span> data<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> option<span class="token punctuation">;</span>
    option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 标题展示  包括是否居中等</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> title<span class="token punctuation">,</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span> <span class="token comment">// 默认为直线，可选为：&#39;line&#39; | &#39;shadow&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 通过grid 调整 生成位置</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;潮汐 简单的幸福 白月光与朱砂痣&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;四季予你＋送你一朵小红花&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;难生恨 干饭人之歌 渐冷&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;潮汐 失眠播报 醒不来的梦 烟雨成思 嘉宾&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">axisTick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">alignWithLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// 结局 x 轴太长 增加换行</span>
            <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">debugger</span>
                    <span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">//拼接加\\n返回的类目项</span>
                    <span class="token keyword">var</span> maxLength <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">//每项显示文字个数</span>
                    <span class="token keyword">var</span> valLength <span class="token operator">=</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">//X轴类目项的文字个数</span>
                    <span class="token keyword">var</span> rowN <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>valLength <span class="token operator">/</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//类目项需要换行的行数</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>rowN <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//如果类目项的文字大于3,</span>
                    <span class="token punctuation">{</span>
                        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rowN<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">var</span> temp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">//每次截取的字符串</span>
                            <span class="token keyword">var</span> start <span class="token operator">=</span> i <span class="token operator">*</span> maxLength<span class="token punctuation">;</span> <span class="token comment">//开始截取的位置</span>
                            <span class="token keyword">var</span> end <span class="token operator">=</span> start <span class="token operator">+</span> maxLength<span class="token punctuation">;</span> <span class="token comment">//结束截取的位置</span>
                            <span class="token comment">//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧</span>
                            temp <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
                            ret <span class="token operator">+=</span> temp<span class="token punctuation">;</span> <span class="token comment">//凭借最终的字符串</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>

            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                        <span class="token keyword">var</span> colorList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;rgb(88,184,239)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rgb(65,96,239)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rgb(85,214,143)&#39;</span><span class="token punctuation">,</span>
                            <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#7888df&#39;</span>
                        <span class="token punctuation">]</span>
                        <span class="token keyword">return</span> colorList<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    option <span class="token operator">&amp;&amp;</span> myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="echarts中-设置颜色" tabindex="-1"><a class="header-anchor" href="#echarts中-设置颜色" aria-hidden="true">#</a> echarts中 设置颜色</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//自定义颜色</span>
            <span class="token keyword">var</span> colorList <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;#FE8463&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span>
            <span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> colorList<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(l,r){return s(),a("div",null,e)}const u=n(t,[["render",c],["__file","echarts_a.html.vue"]]);export{u as default};
