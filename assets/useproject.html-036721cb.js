import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="socket客户端" tabindex="-1"><a class="header-anchor" href="#socket客户端" aria-hidden="true">#</a> socket客户端</h3><ul><li>pinia 封装全局监听</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useSocketStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
    <span class="token string">&#39;socket&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">glMessage</span><span class="token punctuation">(</span><span class="token parameter">nws</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39; set msg global &#39;</span><span class="token punctuation">,</span> nws<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>ws <span class="token operator">=</span> nws
                <span class="token punctuation">}</span>
                <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;catch eeeee=&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><ul><li>其他页面使用</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSocketStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/socketGlobal&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> socketStore <span class="token operator">=</span> <span class="token function">useSocketStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

socketStore<span class="token punctuation">.</span><span class="token function">$subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mutation<span class="token punctuation">,</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">let</span> <span class="token punctuation">{</span> msgCtx<span class="token punctuation">,</span> msgType<span class="token punctuation">,</span> ext<span class="token punctuation">,</span> msgTitle <span class="token punctuation">}</span> <span class="token operator">=</span> state<span class="token punctuation">.</span>ws<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>msgType <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;系统消息&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> msgCtx<span class="token punctuation">,</span> <span class="token literal-property property">okText</span><span class="token operator">:</span> <span class="token string">&#39;知道了&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>首页初始化</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>global_skt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        global_skt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">var</span> globalCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> global_skt<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">initWebSocket</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//初始化weosocket</span>
    <span class="token keyword">const</span> wsuri <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ws://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>glIp<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>glPort<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>glPrefix<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/netsock/</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> userStore<span class="token punctuation">.</span>employeeId<span class="token punctuation">;</span>
    global_skt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span>wsuri<span class="token punctuation">)</span><span class="token punctuation">;</span>
    global_skt<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> websocketonmessage<span class="token punctuation">;</span>
    global_skt<span class="token punctuation">.</span>onopen <span class="token operator">=</span> websocketonopen<span class="token punctuation">;</span>
    global_skt<span class="token punctuation">.</span>onerror <span class="token operator">=</span> websocketonerror<span class="token punctuation">;</span>
    global_skt<span class="token punctuation">.</span>onclose <span class="token operator">=</span> websocketclose<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">websocketonopen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    globalCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    heartCheck<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//拿到任何消息都说明当前连接是正常的</span>
    fstate<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;#1afa29&#39;</span>
    <span class="token keyword">let</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">room</span><span class="token operator">:</span> <span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">info</span><span class="token operator">:</span> userStore<span class="token punctuation">.</span>employeeId <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">websocketsend</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>actions<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">websocketonerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fstate<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;#ec0c0c&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;websocketonerror 断开: &#39;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>code <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>reason <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>wasClean<span class="token punctuation">)</span>
    <span class="token comment">// 超过三次</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>globalCount <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">showNotification</span><span class="token punctuation">(</span><span class="token string">&#39;失去和服务器通信，请联系管理员！&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            globalCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// initWebSocket();</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">websocketonmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">messages</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>

        heartCheck<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//拿到任何消息都说明当前连接是正常的</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>messages<span class="token punctuation">.</span>data <span class="token operator">!=</span> <span class="token string">&#39;SUCCESS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> msg <span class="token operator">=</span> messages<span class="token punctuation">.</span>data
            <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;{&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                msg <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            socketStore<span class="token punctuation">.</span><span class="token function">glMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        fstate<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;#ec0c0c&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">websocketsend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    global_skt<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>Data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">websocketclose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    fstate<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;#ec0c0c&#39;</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;已断开与服务器的连接&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>employeeId <span class="token operator">&amp;&amp;</span> userStore<span class="token punctuation">.</span>employeeId <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>globalCount <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// showNotification(&#39;失去和服务器通信，请联系管理员！&#39;)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                globalCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">//心跳检测</span>
<span class="token keyword">var</span> heartCheck <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">58000</span><span class="token punctuation">,</span>        <span class="token comment">//1分钟发一次心跳</span>
    <span class="token literal-property property">timeoutObj</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">serverTimeoutObj</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeoutObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>serverTimeoutObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timeoutObj <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//这里发送一个心跳，后端收到后，返回一个心跳消息，</span>
            <span class="token comment">//onmessage拿到返回的心跳就说明连接正常</span>
            global_skt<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            self<span class="token punctuation">.</span>serverTimeoutObj <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//如果超过一定时间还没重置，说明后端主动断开了</span>
                global_skt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">showNotification</span><span class="token punctuation">(</span>msg <span class="token operator">=</span> <span class="token string">&#39;你好世界！！&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
    
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>实现WebSocket的“ACK + 超时重传 + 去重”机制，可以有效解决在大量用户在线时的消息丢失问题。以下是每个步骤的实现思路：</li></ul><h3 id="_1-ack-确认机制" tabindex="-1"><a class="header-anchor" href="#_1-ack-确认机制" aria-hidden="true">#</a> 1. ACK（确认机制）</h3><p>ACK机制可以确保消息已经被客户端接收。</p><ul><li><strong>客户端发送 ACK</strong>：当客户端接收到消息后，会立刻发送一个带有消息ID的ACK（确认）响应给服务器，告知消息已被成功接收。</li><li><strong>服务器等待 ACK</strong>：服务器在发送消息后，进入等待状态，等待客户端的ACK。如果在超时时间内收到了ACK，则认为消息已送达，可以将其标记为已送达。</li><li><strong>ACK 标记消息状态</strong>：在服务器端为每条消息设置一个“已送达”或“未送达”的状态标识。收到ACK则更新状态为“已送达”。</li></ul><h3 id="_2-超时重传" tabindex="-1"><a class="header-anchor" href="#_2-超时重传" aria-hidden="true">#</a> 2. 超时重传</h3><p>超时重传机制可以解决客户端没有收到消息的情况。</p><ul><li><strong>设置超时时间</strong>：为每条消息设置一个特定的超时时间（例如3秒或5秒），服务器在发送消息后，开始一个超时计时。</li><li><strong>超时检测和重发</strong>：如果超时时间到了，但仍未收到ACK，服务器会再次发送消息给客户端。可以设置重发的最大次数（如3次），超过最大次数仍未收到ACK则认为消息发送失败。</li><li><strong>退出重传机制</strong>：在每次重传后，如果收到了ACK，立刻结束重传过程。</li></ul><h3 id="_3-去重机制" tabindex="-1"><a class="header-anchor" href="#_3-去重机制" aria-hidden="true">#</a> 3. 去重机制</h3><p>去重机制用于防止由于重传或网络抖动造成的消息重复。</p><ul><li><strong>消息唯一ID</strong>：为每条消息生成一个唯一的ID（可以用UUID或时间戳结合其他唯一标识生成），确保每条消息都有独特的标识。</li><li><strong>客户端去重检测</strong>：客户端在收到消息后，将消息ID存入一个去重集合中（例如本地内存或缓存）。当再次接收到同一消息ID的消息时，直接忽略，不进行处理。</li><li><strong>去重集合过期策略</strong>：为避免去重集合过大，可以设置消息ID的过期时间（例如在30秒后删除该ID），保持去重集合中的数据量合理。</li></ul><h3 id="实现流程图" tabindex="-1"><a class="header-anchor" href="#实现流程图" aria-hidden="true">#</a> 实现流程图</h3><ol><li>服务器向客户端发送消息（附带唯一ID）。</li><li>客户端收到消息后，先检查ID是否已处理过： <ul><li>如果未处理过，处理消息并返回ACK；</li><li>如果已处理过，直接忽略消息。</li></ul></li><li>服务器接收到ACK后，将该消息标记为已送达。</li><li>如果超时未收到ACK，服务器则重新发送消息，重复此过程直到达到重发上限或收到ACK。</li></ol><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ul><li><strong>消息存储策略</strong>：可以考虑使用数据库或内存数据库（如Redis）存储消息的状态，以支持大规模的消息管理。</li><li><strong>网络波动与重传间隔</strong>：在不稳定网络环境中，合理的重传间隔可以提高消息的传输成功率。</li><li><strong>ACK发送的可靠性</strong>：客户端发送ACK应保证可靠性，如果客户端因网络问题未能发送ACK，可能会导致服务器继续重传。</li></ul>`,21),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","useproject.html.vue"]]);export{i as default};
