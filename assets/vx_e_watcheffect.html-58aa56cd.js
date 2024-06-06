import{_ as o,M as e,p as c,q as l,R as n,t as s,N as t,a1 as p}from"./framework-d81ad7e5.js";const u={},r=n("ul",null,[n("li",null,[n("strong",null,"watchEffect 响应式的追踪所有依赖的值"),n("ul",null,[n("li",null,[n("code",null,"count.value")]),n("li",null,[n("code",null,"watchEffect(() => watch all data )")]),n("li",null,"在依赖改变的时候")])])],-1),i={id:"watcheffect",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#watcheffect","aria-hidden":"true"},"#",-1),d={href:"https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"watchEffect",-1),f=p(`<p>立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// -&gt; logs 0</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token comment">// -&gt; logs 1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre></div><ul><li><strong>立即执行</strong></li></ul><p>立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。</p>`,4),_={id:"停止侦听",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#停止侦听","aria-hidden":"true"},"#",-1),v={href:"https://vue3js.cn/vue-composition-api/#%E5%81%9C%E6%AD%A2%E4%BE%A6%E5%90%AC",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>当 <code>watchEffect</code> 在组件的 <code>setup()</code> 函数或生命周期钩子被调用时， 侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。</p><p>在一些情况下，也可以显式调用返回值以停止侦听：</p><ul><li><strong>watchEffect 会返回一个stop 函数，当函数执行的时候，会立即停止watchEffect 监听</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* watchEffect 会返回一个stop 函数，当函数执行的时候，会立即停止*/</span>
<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 之后</span>
<span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>



<span class="token comment">/* */</span>
 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10086</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">20026</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">onInvalidate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;wathc&#39;</span><span class="token punctuation">)</span>
      <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;on in validate&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


        <span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;on be fore update ...&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">onInvalidate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;wathc&#39;</span><span class="token punctuation">)</span>

      <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;on in validate&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
<span class="token comment">// 执行时机  组件更新前，后， 同步</span>
      <span class="token comment">// flush?: &#39;pre&#39; | &#39;post&#39; | &#39;sync&#39;</span>
<span class="token literal-property property">flush</span><span class="token operator">:</span><span class="token string">&#39;post&#39;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>类型声明：</strong></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span>
  <span class="token function-variable function">effect</span><span class="token operator">:</span> <span class="token punctuation">(</span>onInvalidate<span class="token operator">:</span> InvalidateCbRegistrator<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> WatchEffectOptions
<span class="token punctuation">)</span><span class="token operator">:</span> StopHandle

<span class="token keyword">interface</span> <span class="token class-name">WatchEffectOptions</span> <span class="token punctuation">{</span>
  flush<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;post&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sync&#39;</span> <span class="token comment">// 默认：&#39;pre&#39;</span>
  onTrack<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DebuggerEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  onTrigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DebuggerEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DebuggerEvent</span> <span class="token punctuation">{</span>
  effect<span class="token operator">:</span> ReactiveEffect
  target<span class="token operator">:</span> <span class="token builtin">any</span>
  type<span class="token operator">:</span> OperationTypes
  key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">InvalidateCbRegistrator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function-variable function">invalidate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

<span class="token keyword">type</span> <span class="token class-name">StopHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre></div>`,6),w={id:"watch",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#watch","aria-hidden":"true"},"#",-1),b={href:"https://v3.cn.vuejs.org/api/computed-watch-api.html#watch",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"watch",-1),A=n("code",null,"watch",-1),j={href:"https://v3.cn.vuejs.org/api/instance-methods.html#watch",target:"_blank",rel:"noopener noreferrer"},B={href:"https://v3.cn.vuejs.org/api/options-data.html#watch",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"watch",-1),C={href:"https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"watch",-1),D=n("ul",null,[n("li",null,"惰性地执行副作用；"),n("li",null,"更具体地说明应触发侦听器重新运行的状态；"),n("li",null,"访问被侦听状态的先前值和当前值。")],-1),V={id:"侦听单一源",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#侦听单一源","aria-hidden":"true"},"#",-1),T={href:"https://v3.cn.vuejs.org/api/computed-watch-api.html#%E4%BE%A6%E5%90%AC%E5%8D%95%E4%B8%80%E6%BA%90",target:"_blank",rel:"noopener noreferrer"},q={href:"https://v3.cn.vuejs.org/api/refs-api.html#ref",target:"_blank",rel:"noopener noreferrer"},N=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * param1  函数返回要监听的参数
 * param2  函数参数为 变化的newValue
 */</span>
  <span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> props<span class="token punctuation">.</span>btnm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">,</span>
     <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldvalue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  
<span class="token comment">// 侦听一个 getter</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> prevCount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 直接侦听一个 ref</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> prevCount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,1),F={id:"侦听多个源",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#侦听多个源","aria-hidden":"true"},"#",-1),S={href:"https://v3.cn.vuejs.org/api/computed-watch-api.html#%E4%BE%A6%E5%90%AC%E5%A4%9A%E4%B8%AA%E6%BA%90",target:"_blank",rel:"noopener noreferrer"},H=p(`<p>侦听器还可以使用数组以同时侦听多个源：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>fooRef<span class="token punctuation">,</span> barRef<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>prevFoo<span class="token punctuation">,</span> prevBar<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,2),L={id:"与-watcheffect-相同的行为",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#与-watcheffect-相同的行为","aria-hidden":"true"},"#",-1),W={href:"https://v3.cn.vuejs.org/api/computed-watch-api.html#%E4%B8%8E-watcheffect-%E7%9B%B8%E5%90%8C%E7%9A%84%E8%A1%8C%E4%B8%BA",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"watchEffect",-1),U=n("code",null,"watch",-1),$={href:"https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"watchEffect",-1),G={href:"https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%81%9C%E6%AD%A2%E4%BE%A6%E5%90%AC",target:"_blank",rel:"noopener noreferrer"},J={href:"https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E6%B8%85%E9%99%A4%E5%89%AF%E4%BD%9C%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,"onInvalidate",-1),Q={href:"https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA",target:"_blank",rel:"noopener noreferrer"},X={href:"https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E4%BE%A6%E5%90%AC%E5%99%A8%E8%B0%83%E8%AF%95",target:"_blank",rel:"noopener noreferrer"};function Y(Z,nn){const a=e("ExternalLinkIcon");return c(),l("div",null,[r,n("h2",i,[k,s(),n("a",d,[s("#"),t(a)]),h]),f,n("h4",_,[g,s(),n("a",v,[s("#"),t(a)]),s("停止侦听")]),m,n("h2",w,[E,s(),n("a",b,[s("#"),t(a)]),y]),n("p",null,[A,s(" API 与选项式 API "),n("a",j,[s("this.$watch"),t(a)]),s(" (以及相应的 "),n("a",B,[s("watch"),t(a)]),s(" 选项) 完全等效。"),x,s(" 需要侦听特定的数据源，并在单独的回调函数中执行副作用。默认情况下，它也是惰性的——即回调仅在侦听源发生变化时被调用。")]),n("ul",null,[n("li",null,[s("与 "),n("a",C,[s("watchEffect"),t(a)]),s(" 相比，"),I,s(" 允许我们： "),D])]),n("h3",V,[R,s(),n("a",T,[s("#"),t(a)]),s("侦听单一源")]),n("p",null,[s("侦听器数据源可以是一个具有返回值的 getter 函数，也可以直接是一个 "),n("a",q,[s("ref"),t(a)]),s("：")]),N,n("h3",F,[O,s(),n("a",S,[s("#"),t(a)]),s("侦听多个源")]),H,n("h3",L,[P,s(),n("a",W,[s("#"),t(a)]),s("与 "),M,s(" 相同的行为")]),n("p",null,[U,s(" 与 "),n("a",$,[z,t(a)]),s(" 在"),n("a",G,[s("手动停止侦听"),t(a)]),s("、"),n("a",J,[s("清除副作用"),t(a)]),s(" (将 "),K,s(" 作为第三个参数传递给回调)、"),n("a",Q,[s("刷新时机"),t(a)]),s("和"),n("a",X,[s("调试"),t(a)]),s("方面有相同的行为。")])])}const an=o(u,[["render",Y],["__file","vx_e_watcheffect.html.vue"]]);export{an as default};
