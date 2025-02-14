import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="calendar" tabindex="-1"><a class="header-anchor" href="#calendar" aria-hidden="true">#</a> Calendar</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> hzqq
 * <span class="token keyword">@descrption</span> 日期时间
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Caler</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">/*
        // 获取年
        int year = calendar.get(Calendar.YEAR);

        // 获取月，这里需要需要月份的范围为0~11，因此获取月份的时候需要+1才是当前月份值
        int month = calendar.get(Calendar.MONTH) + 1;

        // 获取日
        int day = calendar.get(Calendar.DAY_OF_MONTH);

        // 获取时
        int hour = calendar.get(Calendar.HOUR);
        // int hour = calendar.get(Calendar.HOUR_OF_DAY); // 24小时表示

        // 获取分
        int minute = calendar.get(Calendar.MINUTE);

        // 获取秒
        int second = calendar.get(Calendar.SECOND);

        // 星期，英语国家星期从星期日开始计算
        int weekday = calendar.get(Calendar.DAY_OF_WEEK);

        System.out.println(&quot;现在是&quot; + year + &quot;年&quot; + month + &quot;月&quot; + day + &quot;日&quot; + hour
                + &quot;时&quot; + minute + &quot;分&quot; + second + &quot;秒&quot; + &quot;星期&quot; + weekday);

*/</span>


<span class="token comment">// 设置日期</span>
        calendar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;现在是&quot;</span> <span class="token operator">+</span> calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;年&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        calendar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2008</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取年</span>
        <span class="token keyword">int</span> year <span class="token operator">=</span> calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取月</span>
        <span class="token keyword">int</span> month <span class="token operator">=</span> calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取日</span>
        <span class="token keyword">int</span> day <span class="token operator">=</span> calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;现在是&quot;</span> <span class="token operator">+</span> year <span class="token operator">+</span> <span class="token string">&quot;年&quot;</span> <span class="token operator">+</span> month <span class="token operator">+</span> <span class="token string">&quot;月&quot;</span> <span class="token operator">+</span> day <span class="token operator">+</span> <span class="token string">&quot;日&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),e=[o];function c(l,u){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","java_time.html.vue"]]);export{r as default};
