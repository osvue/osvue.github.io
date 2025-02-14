import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="js前台计算两个日期的间隔时间-时间差" tabindex="-1"><a class="header-anchor" href="#js前台计算两个日期的间隔时间-时间差" aria-hidden="true">#</a> js前台计算两个日期的间隔时间（时间差）</h2><ul><li>在后台传来两个时间字段，从中解析出两个字符串类型的日期格式 需要在前台解析出两个时间的间隔</li><li>这里采用获取两个日期的时间戳进行计算</li><li>时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数。</li><li>所以要求两个时间的间隔只需要将两个时间戳相减 就能得到两个时间相差的毫秒数 通过除以3600*1000得到小时数 以此类推</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">DateDifference</span><span class="token punctuation">(</span><span class="token parameter">faultDate<span class="token punctuation">,</span>completeTime</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// let d1 = new Date(faultDate);</span>
      <span class="token comment">// let d2 = new Date(completeTime);</span>
      <span class="token keyword">var</span> stime <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>faultDate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> etime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>completeTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> usedTime <span class="token operator">=</span> etime <span class="token operator">-</span> stime<span class="token punctuation">;</span>  <span class="token comment">//两个时间戳相差的毫秒数</span>
      <span class="token keyword">var</span> days<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>usedTime<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">3600</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//计算出小时数</span>
      <span class="token keyword">var</span> leave1<span class="token operator">=</span>usedTime<span class="token operator">%</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">3600</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//计算天数后剩余的毫秒数</span>
      <span class="token keyword">var</span> hours<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>leave1<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//计算相差分钟数</span>
      <span class="token keyword">var</span> leave2<span class="token operator">=</span>leave1<span class="token operator">%</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//计算小时数后剩余的毫秒数</span>
      <span class="token keyword">var</span> minutes<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>leave2<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// var time = days + &quot;天&quot;+hours+&quot;时&quot;+minutes+&quot;分&quot;;</span>
      <span class="token keyword">var</span> time <span class="token operator">=</span> days<span class="token punctuation">;</span>
      <span class="token keyword">return</span> time<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// JavaScript 获取当前时间戳：</span>

<span class="token comment">// 第一种方法：</span>

<span class="token keyword">var</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 结果：1280977330000</span>
<span class="token comment">// 第二种方法：</span>

<span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 结果：1280977330748</span>

<span class="token comment">// 第三种方法：</span>

<span class="token keyword">var</span> timestamp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>；
<span class="token comment">// 结果：1280977330748</span>

<span class="token comment">// 第一种：获取的时间戳是把毫秒改成000显示，</span>
<span class="token comment">// 第二种和第三种是获取了当前毫秒的时间戳</span>

<span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//把差的毫秒数转换为天数</span>

</code></pre></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","jquery_3.html.vue"]]);export{r as default};
