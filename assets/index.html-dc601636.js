import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/ch-45161de9.png",o={},e=t('<h2 id="底层-l3-缓存" tabindex="-1"><a class="header-anchor" href="#底层-l3-缓存" aria-hidden="true">#</a> 底层 L3 缓存</h2><p><img src="'+p+`" alt="alt"></p><h3 id="缓存行" tabindex="-1"><a class="header-anchor" href="#缓存行" aria-hidden="true">#</a> 缓存行</h3><div class="language-java" data-ext="java"><pre class="language-java"><code> 
<span class="token doc-comment comment">/**
 * 缓存行 64 bytes  (64*8 bit)
 * 8        4       2           1
 * long     int     short       byte
 * CPU
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CacheLineTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token constant">COUNT</span> <span class="token operator">=</span> <span class="token number">10_0000_0000l</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token class-name">CountDownLatch</span> latch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> ta <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">COUNT</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            latch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> tb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">COUNT</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            latch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">final</span> <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ta<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tb<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        latch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100_0000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        无 P1~P7 System.nanoTime() - startTime = 769740600

        * */</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">T</span> <span class="token punctuation">{</span>

         <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">,</span> p4<span class="token punctuation">,</span> p5<span class="token punctuation">,</span> p6<span class="token punctuation">,</span> p7<span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> x <span class="token operator">=</span> <span class="token number">0l</span><span class="token punctuation">;</span>

         <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> p1a<span class="token punctuation">,</span> p2a<span class="token punctuation">,</span> p3a<span class="token punctuation">,</span> p4a<span class="token punctuation">,</span> p5a<span class="token punctuation">,</span> p6a<span class="token punctuation">,</span> p7a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="telnet" tabindex="-1"><a class="header-anchor" href="#telnet" aria-hidden="true">#</a> telnet</h3><p>开启telnet服务操作方法:</p><h5 id="依次点击-开始-→-控制面板-→-程序-在程序和功能-找到并点击-打开或关闭windows功能-进入windows系统功能设置对话框。找到并勾选-telnet客户端-和-telnet服务器-最后-确定-按钮-稍等片刻即可完成安装" tabindex="-1"><a class="header-anchor" href="#依次点击-开始-→-控制面板-→-程序-在程序和功能-找到并点击-打开或关闭windows功能-进入windows系统功能设置对话框。找到并勾选-telnet客户端-和-telnet服务器-最后-确定-按钮-稍等片刻即可完成安装" aria-hidden="true">#</a> 依次点击“开始”→“控制面板”→“程序”，“在程序和功能”找到并点击“打开或关闭Windows功能”进入Windows系统功能设置对话框。找到并勾选“Telnet客户端”和“Telnet服务器”，最后“确定”按钮，稍等片刻即可完成安装;</h5><h3 id="时间片" tabindex="-1"><a class="header-anchor" href="#时间片" aria-hidden="true">#</a> 时间片</h3><ul><li>时间片即CPU分配给各个程序的时间，每个线程被分配一个时间段，称作它的时间片</li><li>即该进程允许运行的时间，使各个程序从表面上看是同时进行的。</li><li>如果在时间片结束时进程还在运行，则CPU将被剥夺并分配给另一个进程。</li><li>如果进程在时间片结束前阻塞或结束，则CPU当即进行切换。而不会造成CPU资源浪费。</li><li>在宏观上：我们可以同时打开多个应用程序，每个程序并行不悖，同时运行。</li><li>但在微观上：由于只有一个CPU，一次只能处理程序要求的一部分，如何处理公平，一种方法就是引入时间片，每个程序轮流执行。</li></ul>`,9),c=[e];function l(u,k){return s(),a("div",null,c)}const r=n(o,[["render",l],["__file","index.html.vue"]]);export{r as default};
