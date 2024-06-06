import{_ as p,M as e,p as i,q as l,R as n,t as a,N as o,a1 as t}from"./framework-d81ad7e5.js";const c={},u=t('<h4 id="css-animation-属性" tabindex="-1"><a class="header-anchor" href="#css-animation-属性" aria-hidden="true">#</a> CSS animation 属性</h4><ul><li><p>定义和用法 animation 属性是一个简写属性，用于设置六个动画属性：</p><ul><li>animation-name</li><li>animation-duration</li><li>animation-timing-function</li><li>animation-delay</li><li>animation-iteration-count</li><li>animation-direction</li></ul><ul><li>注释：<strong>请始终规定 <code>animation-duration</code> 属性，否则时长为 0，就不会播放动画了 !!!!!</strong>。</li></ul></li></ul><ul><li>CSS 语法</li></ul><p><code>animation: name duration timing-function delay iteration-count direction;</code></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>animation-name</td><td>规定需要绑定到选择器的 keyframe 名称。</td></tr><tr><td>animation-duration</td><td>规定完成动画所花费的时间，以秒或毫秒计。</td></tr><tr><td>animation-timing-function</td><td>规定动画的速度曲线。</td></tr><tr><td>animation-delay</td><td>规定在动画开始之前的延迟。</td></tr><tr><td>animation-iteration-count</td><td>规定动画应该播放的次数。</td></tr><tr><td>animation-direction</td><td>规定是否应该轮流反向播放动画。</td></tr><tr><td>animation-fill-mode</td><td>规定动画在执行时间之外应用的值。</td></tr><tr><td>animation-play-state</td><td>规定动画是正在运行还是暂停。</td></tr></tbody></table><h2 id="基本了解" tabindex="-1"><a class="header-anchor" href="#基本了解" aria-hidden="true">#</a> 基本了解</h2><p>css中实现动画有两种方式：<code>transition</code>过渡动画、 <code>animation</code>自定义动画。</p>',7),r=n("code",null,"animation",-1),d=n("code",null,"transition",-1),k={href:"https://juejin.cn/post/6970885478967050254",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>简单了解下animation的一些语法和使用过程，后面会详细解说：</p><ol><li><p>通过<code>@keyframes</code>自定义关键帧动画并为动画命名，可以在其中对每一帧进行设置。</p></li><li><p>使用自定义动画的元素，需要通过</p><div class="language-text" data-ext="text"><pre class="language-text"><code>animation
</code></pre></div><p>相关属性进行配置</p><ul><li>animation-name</li><li>animation-duration</li><li>animation-timing-function</li><li>animation-delay</li><li>animation-iteration-count</li><li>animation-direction</li><li>animation-fill-mode</li><li>animation-play-state</li></ul></li></ol><p>我们还可在JavaScript中，通过驼峰式命名来访问/设置<code>animation</code>相关属性。</p><h2 id="keyframes" tabindex="-1"><a class="header-anchor" href="#keyframes" aria-hidden="true">#</a> @keyframes</h2><p>keyframes(关键帧)，在css样式表中可以通过<code>@keyframes</code>来设置关键帧动画，并指定动画名称供使用者锁定。</p><p>其语法如下：</p><p>我们可以通过百分比来设置具体帧数的样式。</p><div class="language-CSS" data-ext="CSS"><pre class="language-CSS"><code>@keyframes animateName{
    0%   { width:50px; height:50px; }	
    50%  { width:100px; height:100px; }	
    100% { width:50px; height:50px; }
}
</code></pre></div><p><code>0%</code>和<code>100%</code>代表<code>首尾帧</code>,也可分别使用<code>from</code>、<code>to</code>替代。下面代码与上述代码效果相同</p><div class="language-CSS" data-ext="CSS"><pre class="language-CSS"><code>@keyframes animateName{
    from { width:50px; height:50px; }	
    50%  { width:100px; height:100px; }	
    to	 { width:50px; height:50px; }
}
</code></pre></div><p>需要注意的是： 若自定义动画<strong>未定义首尾帧</strong>，则首尾帧将会<strong>应用使用者的原有样式</strong></p><p>现在动画定义完毕，使用者需要配置<code>animation</code>相关属性对动画进行配置。</p><h2 id="animation-name" tabindex="-1"><a class="header-anchor" href="#animation-name" aria-hidden="true">#</a> animation-name</h2><p>若某个元素想要使用对应名称的动画，需要配置<code>animation-name: animateName</code>属性进行锁定。</p><div class="language-HTML" data-ext="HTML"><pre class="language-HTML"><code> &lt;style&gt;
  .box {
    width: 50px;
    height: 50px;
    background-color: pink;
    animation-name: test;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  @keyframes test {
    50% {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: skyblue;
    }
  }
&lt;/style&gt;
&lt;body&gt;
  &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
</code></pre></div><p>这里为了让动画更加明显，使用了<code>animation-duration</code>与<code>animation-iteration-count</code>,这里简单介绍一下：</p><ul><li><code>animation-duration</code> 用于定义动画持续时间，默认<code>0s</code></li><li><code>animation-iteration-count</code> 用于定义动画迭代次数，也就是执行次数，默认为<code>1</code>。</li></ul><h2 id="animation-duration" tabindex="-1"><a class="header-anchor" href="#animation-duration" aria-hidden="true">#</a> animation-duration</h2><p><code>animation-duration</code>顾名思义，用于设置动画持续时间.</p><p>​ 需要注意的是：<strong>默认值为<code>0s</code></strong>，也就是说，若不配置<code>animation-duration</code>则默认请况下是没有动画效果的，即便使用<code>animation-name</code>锁定了动画名称，由于动画持续时间为<code>0s</code>，所以没有效果。</p><h2 id="animation-timing-function" tabindex="-1"><a class="header-anchor" href="#animation-timing-function" aria-hidden="true">#</a> animation-timing-function：</h2><p><code>animation-timing-function</code>用于定义时间函数，通过这个选项，可配置动画随时间的运动速率和轨迹。</p>`,22),m=n("thead",null,[n("tr",null,[n("th",null,"值"),n("th",null,"描述")])],-1),h=n("tr",null,[n("td",null,"linear"),n("td",null,"动画从头到尾的速度是相同的。")],-1),f=n("tr",null,[n("td",null,"ease（缓解）"),n("td",null,[n("strong",null,[n("code",null,"默认值")]),a("：动画以低速开始，然后加快，在结束前变慢。")])],-1),y=n("tr",null,[n("td",null,"ease-in"),n("td",null,"动画以低速开始。")],-1),b=n("tr",null,[n("td",null,"ease-out"),n("td",null,"动画以低速结束。")],-1),x=n("tr",null,[n("td",null,"ease-in-out"),n("td",null,"动画以低速开始和结束。")],-1),v=n("td",null,[a("cubic-bezier("),n("em",null,"n"),a(","),n("em",null,"n"),a(","),n("em",null,"n"),a(","),n("em",null,"n"),a(")")],-1),q={href:"https://link.juejin.cn?target=https%3A%2F%2Fcubic-bezier.com%2F",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-HTML" data-ext="HTML"><pre class="language-HTML"><code> &lt;style&gt;
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #34495e;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    display: flex;
  }
  ul &gt; li {
    width: 40%;
    margin: 0px 40px;
    position: relative;
  }
  ul &gt; li &gt; .fa {
    font-size: 4em;
    color: white;
    opacity: 0.8;
    animation: test 2s infinite;
  }
  @keyframes test {
    to {
      transform: translateY(86vh);
    }
  }
  ul &gt; li:nth-of-type(1) &gt; .fa {
    animation-timing-function: linear;
  }
  ul &gt; li:nth-of-type(2) &gt; .fa {
    animation-timing-function: ease;
  }
  ul &gt; li:nth-of-type(3) &gt; .fa {
    animation-timing-function: ease-in;
  }
  ul &gt; li:nth-of-type(4) &gt; .fa {
    animation-timing-function: ease-out;
  }
  ul &gt; li:nth-of-type(5) &gt; .fa {
    animation-timing-function: ease-in-out;
  }
  ul &gt; li:nth-of-type(6) &gt; .fa {
    animation-timing-function: cubic-bezier(0.29, 1.69, 0.39, -0.05);
  }
  li &gt; span {
    position: absolute;
    color: #f1c40f;
  }
  strong {
    color: #e67e22;
    margin: 10px;
  }
&lt;/style&gt;
&lt;body&gt;
  &lt;strong&gt;animatin-timing-function:&lt;/strong&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;span&gt;linear&lt;br /&gt;线性&lt;/span&gt;
      &lt;div class=&quot;fa&quot;&gt;👇&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;span&gt;ease&lt;br /&gt;默认。动画以低速开始，然后加快，在结束前变慢。&lt;/span&gt;
      &lt;div class=&quot;fa&quot;&gt;👇&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;span&gt;ease-in&lt;br /&gt;以低速开始&lt;/span&gt;
      &lt;div class=&quot;fa&quot;&gt;👇&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;span&gt;ease-out&lt;br /&gt;以低速结束&lt;/span&gt;
      &lt;div class=&quot;fa&quot;&gt;👇&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;span&gt;ease-in-out&lt;br /&gt;以低速开始和结束&lt;/span&gt;
      &lt;div class=&quot;fa&quot;&gt;👇&lt;/div&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;span&gt;cubic-bezier()&lt;br /&gt;贝塞尔曲线（自定义数值）&lt;/span&gt;
      &lt;div class=&quot;fa&quot;&gt;👇&lt;/div&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
</code></pre></div><h2 id="animation-delay" tabindex="-1"><a class="header-anchor" href="#animation-delay" aria-hidden="true">#</a> animation-delay</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>animation-delay\`用于设置动画延迟时间，单位为\`s
</code></pre></div><p>下例动画将于<code>2s</code>后执行</p><div class="language-CSS" data-ext="CSS"><pre class="language-CSS"><code> .box {
  width: 50px;
  height: 50px;
  background-color: pink;
  animation-name: test;
  animation-duration: 1s;
  animation-delay: 2s;
}
@keyframes test {
  50% {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
  }
}
</code></pre></div><p>当同时使用多个动画时，这个属性使用频率非常高，可依次定义每个动画的延迟执行时间，区分开每个动画。</p><p>当然其实也可分别设置每个动画的其它animation族属性，后面会详细介绍多动画累加。</p><h2 id="animation-iteration-count" tabindex="-1"><a class="header-anchor" href="#animation-iteration-count" aria-hidden="true">#</a> animation-iteration-count：</h2><p><code>animation-iteration-count</code>用于设置动画执行的次数，默认值为<code>1</code>只执行一次。</p><p>其值可分为两种：</p><ul><li>具体number数值</li><li><code>infinite</code>:执行无限次</li></ul><h2 id="animation-direction" tabindex="-1"><a class="header-anchor" href="#animation-direction" aria-hidden="true">#</a> animation-direction</h2><p><code>animation-direction</code>用于设置动画执行方向，具体来说可设置为以下值：</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>normal</td><td>默认值。动画按正常播放。</td></tr><tr><td>reverse</td><td>动画反向播放。</td></tr><tr><td>alternate（交替的）</td><td>动画正向交替执行（正向-&gt;反向）Loop。</td></tr><tr><td>alternate-reverse</td><td>动画反向交替执行（反向-&gt;正向）Loop。</td></tr><tr><td>inherit</td><td>从父元素继承该属性。</td></tr></tbody></table><p>效果展示：</p><div class="language-HTML" data-ext="HTML"><pre class="language-HTML"><code> &lt;style&gt;
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #34495e;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
  }
  ul &gt; li {
    margin: 0px 40px;
    /* border: 2px solid #ddd; */
    display: flex;
    flex-direction: column;
    color: #e74c3c;
    justify-content: center;
    align-items: center;
  }
  ul &gt; li &gt; .fa {
    animation: test 1.3s infinite;
    font-size: 7em;
  }
  ul li:nth-of-type(1) &gt; .fa {
    animation-direction: normal;
  }
  ul li:nth-of-type(2) &gt; .fa {
    animation-direction: reverse;
  }
  ul li:nth-of-type(3) &gt; .fa {
    animation-direction: normal;
  }
  ul li:nth-of-type(4) &gt; .fa {
    animation-direction: reverse;
  }
  @keyframes test {
    100% {
      transform: scale(1.7);
    }
  }
  h1 {
    color: white;
    opacity: 0.8;
  }
  li &gt; span {
    font-size: 24px;
    margin: auto;
    margin-top: 30px;
  }
  body ul:nth-of-type(2) li:nth-of-type(1) &gt; .fa {
    animation-direction: alternate;
  }
  body ul:nth-of-type(2) li:nth-of-type(2) &gt; .fa {
    animation-direction: alternate-reverse;
  }
  strong {
    font-size: 20px;
    color: white;
    opacity: 0.76;
  }
&lt;/style&gt;
&lt;body&gt;
  &lt;h1&gt;animation-direction:&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;div class=&quot;fa&quot;&gt;❤&lt;/div&gt;
      &lt;span&gt;normal&lt;/span&gt;
      &lt;p&gt;默认值/正向&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class=&quot;fa&quot;&gt;❤&lt;/div&gt;
      &lt;span&gt;reverse&lt;/span&gt;
      &lt;p&gt;反向进行动画&lt;/p&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;strong
    &gt;可以利用默认值normal和reverse，交叉动画的效果，&lt;br /&gt;也可以正反向反复交替如下。&lt;/strong
  &gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;div class=&quot;fa&quot;&gt;❤&lt;/div&gt;
      &lt;span&gt;alternate&lt;/span&gt;
      &lt;p&gt;反复交替（正向）&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;div class=&quot;fa&quot;&gt;❤&lt;/div&gt;
      &lt;span&gt;alternate-reverse&lt;/span&gt;
      &lt;p&gt;反复交替（反向）&lt;/p&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
</code></pre></div><h2 id="animation-fill-mode" tabindex="-1"><a class="header-anchor" href="#animation-fill-mode" aria-hidden="true">#</a> animation-fill-mode</h2><p><code>animation-fill-mode</code>用于设置动画的填充模式，主要应用的属性值为：</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>none</td><td>默认值。动画在动画执行前后，不会应用任何样式到目标元素。</td></tr><tr><td>forwards</td><td>在动画结束后（<strong>由 animation-iteration-count 决定</strong>），目标元素将保持应用<code>最后帧</code>动画。</td></tr><tr><td>backwards</td><td>在动画结束后（<strong>由 animation-iteration-count 决定</strong>），目标元素将保持应用<code>起始帧</code>动画。</td></tr></tbody></table><p>案例测试：</p><p>下例代码，在动画执行结束后，将会一直应用最后帧的样式。</p><div class="language-CSS" data-ext="CSS"><pre class="language-CSS"><code> .box {
  width: 50px;
  height: 50px;
  background-color: pink;
  animation-name: test;
  animation-delay: 2s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  /* animation-iteration-count: infinite; */
}
@keyframes test {
  100% {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
  }
}
</code></pre></div><p>注意：上述代码若添加<code>animation-iteration-count: infinite</code>，由于动画次数无限执行，不会结束，也就不会应用最后帧样式</p><h2 id="animation-play-state" tabindex="-1"><a class="header-anchor" href="#animation-play-state" aria-hidden="true">#</a> animation-play-state</h2><p>可设置动画的执行状态，通常通过JavaScript动态控制。</p><ul><li>默认值为：<code>running</code></li><li>设为<code>paused</code>(暂停)，动画将停止执行。</li></ul><p>下面动画将不会执行</p><div class="language-CSS" data-ext="CSS"><pre class="language-CSS"><code> .box {
  width: 50px;
  height: 50px;
  background-color: pink;
  animation-name: test;
  animation-delay: 2s;
  animation-duration: 1s;
  animation-play-state: paused; //值为paused将不会执行
}
@keyframes test {
  50% {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
  }
}
</code></pre></div><p>通过JavaScript动态控制：</p><div class="language-HTML" data-ext="HTML"><pre class="language-HTML"><code> &lt;style&gt;
  .box {
    width: 50px;
    height: 50px;
    background-color: pink;
    animation-name: test;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  @keyframes test {
    50% {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: skyblue;
    }
  }
&lt;/style&gt;
&lt;body&gt;
  &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
  &lt;button onclick=&quot;operation(&#39;running&#39;)&quot;&gt;开始&lt;/button&gt;
  &lt;button onclick=&quot;operation(&#39;paused&#39;)&quot;&gt;停止&lt;/button&gt;
  &lt;script&gt;
    function operation(mode) {
      document.querySelector(&quot;div&quot;).style.animationPlayState = mode;
    }
  &lt;/script&gt;
&lt;/body&gt;
</code></pre></div><h2 id="多动画累加" tabindex="-1"><a class="header-anchor" href="#多动画累加" aria-hidden="true">#</a> 多动画累加</h2><p>若元素应用多个动画，我们可以分别控制各个动画的一些属性，来达到区分各个动画的效果。</p><p>下面示例，给<code>animation</code>族属性分别设置多个值，来对不同的动画做不同的配置。</p><p><code>animation</code>族属性设置多个值时，各个值之间使用<code>,</code>隔开。</p><p>案例：</p><ol><li>首先使用<code>animation-name</code>来锁定使用的各个动画</li><li>之后使用其它的<code>animation</code>族属性，分别约束对应动画，且设置顺序与<code>animation-name</code>使用动画的顺序保持一致。</li></ol><div class="language-HTML" data-ext="HTML"><pre class="language-HTML"><code> &lt;style&gt;
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    background-color: #353b48;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #487eb0;
    animation-name: bgcolor, bodera, rotat;
    animation-duration: 2s, 2s, 3s;
    animation-iteration-count: 2, 2, 1;
    animation-direction: reverse, normal, normal;
    animation-fill-mode: forwards, forwards, forwards;
  }
  main::after {
    content: &quot;阿顺特烦恼&quot;;
    color: white;
    animation: opcity 2s;
    opacity: 0;
    font-size: 1.5em;
    animation-fill-mode: forwards;
    animation-delay: 4s;
  }
  @keyframes opcity {
    25% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.8;
    }
  }
  @keyframes bgcolor {
    25% {
      background-color: #fbc531;
    }
    50% {
      background-color: #8c7ae6;
    }
    75% {
      background-color: #f5f6fa;
    }
    100% {
      background-color: #e84118;
    }
  }
  @keyframes bodera {
    25% {
      border-radius: 10%;
    }
    50% {
      border-radius: 25%;
    }
    75% {
      border-radius: 38%;
    }
    100% {
      border-radius: 50%;
    }
  }
  @keyframes rotat {
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(60deg);
    }
    75% {
      transform: rotate(120deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
&lt;/style&gt;
&lt;body&gt;
  &lt;main&gt;&lt;/main&gt;
&lt;/body&gt;
</code></pre></div><p>关键代码解析：</p><div class="language-CSS" data-ext="CSS"><pre class="language-CSS"><code>  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #487eb0;
    animation-name: bgcolor, bodera, rotat;
    animation-duration: 2s, 2s, 3s;
    animation-iteration-count: 2, 2, 1;
    animation-direction: reverse, normal, normal;
    animation-fill-mode: forwards, forwards, forwards;
  }
  main::after {
    content: &quot;阿顺特烦恼&quot;;
    color: white;
    animation: opcity 2s;
    opacity: 0;
    font-size: 1.5em;
    animation-fill-mode: forwards;
    animation-delay: 4s;
  }
</code></pre></div><ol><li><p>这里为了让文字在其他动画都执行完毕后再显示，为文字动画设置了<code>animation-delay</code>延迟执行，但我们要确定之前动画结束的时间，怎么计算呢？</p></li><li><p>我们知道，当应用多个动画时，它们也都是并发执行的，所以我们只要知道执行时间最长的那个动画即可。</p></li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code> <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">,</span> 2s<span class="token punctuation">,</span> 3s<span class="token punctuation">;</span>
<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 2<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 1<span class="token punctuation">;</span>
</code></pre></div><ul><li>执行次数×单次执行时间=动画总时间。因此最大时间=max(2×2 ,2×2, 3×1)=4s</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.app</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #88af7c<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> lusifer<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>

        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token atrule"><span class="token rule">@keyframes</span> lusifer</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.cad</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/* 显示或关闭动画* /
        .open {
        animation: slideContentUp 0.3s linear both;
    }
 
    .close {
        animation: slideContentDown 0.3s linear both;
    }
 
    /* 动态设置高度 */</span>
    <span class="token comment">/* @keyframes slideContentUp {
        from {
            height: 0;
        }
 
        to {
            height: 80vh;
        }
    }
 
    @keyframes slideContentDown {
        from {
            height: 80vh;
        }
 
        to {
            height: 0;
        }
    }
*/</span>

    <span class="token comment">/* 显示或关闭动画*/</span>
    <span class="token selector">.open</span> <span class="token punctuation">{</span>
        <span class="token property">animation</span><span class="token punctuation">:</span> left 2s ease-in both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.close</span> <span class="token punctuation">{</span>
        <span class="token property">animation</span><span class="token punctuation">:</span> right 2s ease-in both<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> left</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token comment">/*最小的宽度，隐藏就写0，我这边图标静止需要一个宽度*/</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
            <span class="token comment">/*最大展开的宽度*/</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> right</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>




    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #cabcbc<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vapp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cad<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg}}

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>catVis()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cad<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
                &#39;open&#39;: visible,
                &#39;close&#39;: !visible
            }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                你的内容
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cad<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>cc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">


        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#vapp&#39;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">catVis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    vm<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>visible
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>visible<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">,</span> <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;init app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>


    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,43);function S(_,C){const s=e("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[r,a("动画的使用，若要了解"),d,a("过渡动画请前往"),n("a",k,[a("transition过渡动画"),o(s)]),a("。")]),g,n("table",null,[m,n("tbody",null,[h,f,y,b,x,n("tr",null,[v,n("td",null,[a("贝塞尔曲线（自定义数值），可到"),n("a",q,[a("相关网站"),o(s)]),a("可视化设置。")])])])]),w])}const T=p(c,[["render",S],["__file","css_animation.html.vue"]]);export{T as default};
