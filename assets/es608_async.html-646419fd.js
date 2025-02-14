import{_ as s,M as i,p as c,q as r,R as t,t as e,N as o,a1 as n}from"./framework-d81ad7e5.js";const d="/assets/promise-7279e266.jpg",l={},p=n('<h2 id="async-和-await" tabindex="-1"><a class="header-anchor" href="#async-和-await" aria-hidden="true">#</a> async 和 await</h2><ol><li>await后面接一个会return new promise的函数并执行它</li><li>await只能放在async函数里</li><li>await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。</li></ol><p><img src="'+d+`" alt="alrt"></p><h2 id="async-和-await-在干什么" tabindex="-1"><a class="header-anchor" href="#async-和-await-在干什么" aria-hidden="true">#</a> async 和 await 在干什么</h2><p>任意一个名称都是有意义的，先从字面意思来理解。async 是“异步”的简写，而 await 可以认为是 async wait 的简写。所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。</p><p>另外还有一个很有意思的语法规定，await 只能出现在 async 函数中。然后细心的朋友会产生一个疑问，如果 await 只能出现在 async 函数中，那这个 async 函数应该怎么调用？</p><p>如果需要通过 await 来调用一个 async 函数，那这个调用的外面必须得再包一个 async 函数，然后……进入死循环，永无出头之日……</p><p>如果 async 函数不需要 await 来调用，那 async 到底起个啥作用？</p><h3 id="_1-1-async-起什么作用" tabindex="-1"><a class="header-anchor" href="#_1-1-async-起什么作用" aria-hidden="true">#</a> 1.1. async 起什么作用</h3><p>这个问题的关键在于，async 函数是怎么处理它的返回值的！</p><p>我们当然希望它能直接通过 <code>return</code> 语句返回我们想要的值，但是如果真是这样，似乎就没 await 什么事了。所以，写段代码来试试，看它到底会返回什么：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>async function testAsync() {
    return &quot;hello async&quot;;
}

const result = testAsync();
console.log(result);
</code></pre></div><p>看到输出就恍然大悟了——输出的是一个 Promise 对象。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>c:\\var\\test&gt; node --harmony_async_await .
Promise { &#39;hello async&#39; }
</code></pre></div>`,14),m={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank",rel:"noopener noreferrer"},u=t("code",null,"return",-1),g=t("code",null,"Promise.resolve()",-1),h=n(`<blockquote><p>补充知识点 <em>[2020-06-04]</em></p><p><code>Promise.resolve(x)</code> 可以看作是 <code>new Promise(resolve =&gt; resolve(x))</code> 的简写，可以用于快速封装字面量对象或其他对象，将其封装成 Promise 实例。</p></blockquote><p>async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，我们当然应该用原来的方式：<code>then()</code> 链来处理这个 Promise 对象，就像这样</p><div class="language-text" data-ext="text"><pre class="language-text"><code>testAsync().then(v =&gt; {
    console.log(v);    // 输出 hello async
});
</code></pre></div><p>现在回过头来想下，如果 async 函数没有返回值，又该如何？很容易想到，它会返回 <code>Promise.resolve(undefined)</code>。</p><p>联想一下 Promise 的特点——无等待，所以在没有 <code>await</code> 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，并且，绝不会阻塞后面的语句。这和普通返回 Promise 对象的函数并无二致。</p><p>那么下一个关键点就在于 await 关键字了。</p><h3 id="_1-2-await-到底在等啥" tabindex="-1"><a class="header-anchor" href="#_1-2-await-到底在等啥" aria-hidden="true">#</a> 1.2. await 到底在等啥</h3>`,7),w={href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await",target:"_blank",rel:"noopener noreferrer"},y=n(`<p>因为 async 函数返回一个 Promise 对象，所以 await 可以用于等待一个 async 函数的返回值——这也可以说是 await 在等 async 函数，但要清楚，它等的实际是一个返回值。注意到 await 不仅仅用于等 Promise 对象，它可以等任意表达式的结果，所以，await 后面实际是可以接普通函数调用或者直接量的。所以下面这个示例完全可以正确运行</p><div class="language-text" data-ext="text"><pre class="language-text"><code>function getSomething() {
    return &quot;something&quot;;
}

async function testAsync() {
    return Promise.resolve(&quot;hello async&quot;);
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();
</code></pre></div><h3 id="_1-3-await-等到了要等的-然后呢" tabindex="-1"><a class="header-anchor" href="#_1-3-await-等到了要等的-然后呢" aria-hidden="true">#</a> 1.3. await 等到了要等的，然后呢</h3><p>await 等到了它要等的东西，一个 Promise 对象，或者其它值，然后呢？我不得不先说，<code>await</code> 是个运算符，用于组成表达式，await 表达式的运算结果取决于它等的东西。</p><p>如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。</p><p>如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。</p><blockquote><p>看到上面的阻塞一词，心慌了吧……放心，这就是 await 必须用在 async 函数中的原因。async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。</p></blockquote><h2 id="_2-async-await-帮我们干了啥" tabindex="-1"><a class="header-anchor" href="#_2-async-await-帮我们干了啥" aria-hidden="true">#</a> 2. async/await 帮我们干了啥</h2><h3 id="_2-1-作个简单的比较" tabindex="-1"><a class="header-anchor" href="#_2-1-作个简单的比较" aria-hidden="true">#</a> 2.1. 作个简单的比较</h3><p>上面已经说明了 async 会将其后的函数（函数表达式或 Lambda）的返回值封装成一个 Promise 对象，而 await 会等待这个 Promise 完成，并将其 resolve 的结果返回出来。</p><p>现在举例，用 <code>setTimeout</code> 模拟耗时的异步操作，先来看看不用 async/await 会怎么写</p><div class="language-text" data-ext="text"><pre class="language-text"><code>function takeLongTime() {
    return new Promise(resolve =&gt; {
        setTimeout(() =&gt; resolve(&quot;long_time_value&quot;), 1000);
    });
}

takeLongTime().then(v =&gt; {
    console.log(&quot;got&quot;, v);
});
</code></pre></div><p>如果改用 async/await 呢，会是这样</p><div class="language-text" data-ext="text"><pre class="language-text"><code>function takeLongTime() {
    return new Promise(resolve =&gt; {
        setTimeout(() =&gt; resolve(&quot;long_time_value&quot;), 1000);
    });
}

async function test() {
    const v = await takeLongTime();
    console.log(v);
}

test();
</code></pre></div><p>眼尖的同学已经发现 <code>takeLongTime()</code> 没有申明为 <code>async</code>。实际上，<code>takeLongTime()</code> 本身就是返回的 Promise 对象，加不加 <code>async</code> 结果都一样，如果没明白，请回过头再去看看上面的“async 起什么作用”。</p><p>又一个疑问产生了，这两段代码，两种方式对异步调用的处理（实际就是对 Promise 对象的处理）差别并不明显，甚至使用 async/await 还需要多写一些代码，那它的优势到底在哪？</p><h3 id="_2-2-async-await-的优势在于处理-then-链" tabindex="-1"><a class="header-anchor" href="#_2-2-async-await-的优势在于处理-then-链" aria-hidden="true">#</a> 2.2. async/await 的优势在于处理 then 链</h3><p>单一的 Promise 链并不能发现 async/await 的优势，但是，如果需要处理由多个 Promise 组成的 then 链的时候，优势就能体现出来了（很有意思，Promise 通过 then 链来解决多层回调的问题，现在又用 async/await 来进一步优化它）。</p><p>假设一个业务，分多个步骤完成，每个步骤都是异步的，而且依赖于上一个步骤的结果。我们仍然用 <code>setTimeout</code> 来模拟异步操作：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 200，这个值将用于下一步骤
 */
function takeLongTime(n) {
    return new Promise(resolve =&gt; {
        setTimeout(() =&gt; resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(\`step1 with \${n}\`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(\`step2 with \${n}\`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(\`step3 with \${n}\`);
    return takeLongTime(n);
}
</code></pre></div><p>现在用 Promise 方式来实现这三个步骤的处理</p><div class="language-text" data-ext="text"><pre class="language-text"><code>function doIt() {
    console.time(&quot;doIt&quot;);
    const time1 = 300;
    step1(time1)
        .then(time2 =&gt; step2(time2))
        .then(time3 =&gt; step3(time3))
        .then(result =&gt; {
            console.log(\`result is \${result}\`);
            console.timeEnd(&quot;doIt&quot;);
        });
}

doIt();

// c:\\var\\test&gt;node --harmony_async_await .
// step1 with 300
// step2 with 500
// step3 with 700
// result is 900
// doIt: 1507.251ms
</code></pre></div><p>输出结果 <code>result</code> 是 <code>step3()</code> 的参数 <code>700 + 200</code> = <code>900</code>。<code>doIt()</code> 顺序执行了三个步骤，一共用了 <code>300 + 500 + 700 = 1500</code> 毫秒，和 <code>console.time()/console.timeEnd()</code> 计算的结果一致。</p><p>如果用 async/await 来实现呢，会是这样</p><div class="language-text" data-ext="text"><pre class="language-text"><code>async function doIt() {
    console.time(&quot;doIt&quot;);
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(\`result is \${result}\`);
    console.timeEnd(&quot;doIt&quot;);
}

doIt();
</code></pre></div><p>结果和之前的 Promise 实现是一样的，但是这个代码看起来是不是清晰得多，几乎跟同步代码一样</p><h3 id="_2-3-还有更酷的" tabindex="-1"><a class="header-anchor" href="#_2-3-还有更酷的" aria-hidden="true">#</a> 2.3. 还有更酷的</h3><p>现在把业务要求改一下，仍然是三个步骤，但每一个步骤都需要之前每个步骤的结果。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>function step1(n) {
    console.log(\`step1 with \${n}\`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(\`step2 with \${m} and \${n}\`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(\`step3 with \${k}, \${m} and \${n}\`);
    return takeLongTime(k + m + n);
}
</code></pre></div><p>这回先用 async/await 来写：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>async function doIt() {
    console.time(&quot;doIt&quot;);
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time1, time2);
    const result = await step3(time1, time2, time3);
    console.log(\`result is \${result}\`);
    console.timeEnd(&quot;doIt&quot;);
}

doIt();

// c:\\var\\test&gt;node --harmony_async_await .
// step1 with 300
// step2 with 800 = 300 + 500
// step3 with 1800 = 300 + 500 + 1000
// result is 2000
// doIt: 2907.387ms
</code></pre></div><p>除了觉得执行时间变长了之外，似乎和之前的示例没啥区别啊！别急，认真想想如果把它写成 Promise 方式实现会是什么样子？</p><div class="language-text" data-ext="text"><pre class="language-text"><code>function doIt() {
    console.time(&quot;doIt&quot;);
    const time1 = 300;
    step1(time1)
        .then(time2 =&gt; {
            return step2(time1, time2)
                .then(time3 =&gt; [time1, time2, time3]);
        })
        .then(times =&gt; {
            const [time1, time2, time3] = times;
            return step3(time1, time2, time3);
        })
        .then(result =&gt; {
            console.log(\`result is \${result}\`);
            console.timeEnd(&quot;doIt&quot;);
        });
}

doIt();
</code></pre></div><p>有没有感觉有点复杂的样子？那一堆参数处理，就是 Promise 方案的死穴—— 参数传递太麻烦了 ！</p>`,34);function x(v,_){const a=i("ExternalLinkIcon");return c(),r("div",null,[p,t("p",null,[e("所以，async 函数返回的是一个 Promise 对象。从"),t("a",m,[e("文档"),o(a)]),e("中也可以得到这个信息。async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象，如果在函数中 "),u,e(" 一个直接量，async 会把这个直接量通过 "),g,e(" 封装成 Promise 对象。")]),h,t("p",null,[e("一般来说，都认为 await 是在等待一个 async 函数完成。不过按"),t("a",w,[e("语法说明"),o(a)]),e("，await 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值（换句话说，就是没有特殊限定）。")]),y])}const P=s(l,[["render",x],["__file","es608_async.html.vue"]]);export{P as default};
