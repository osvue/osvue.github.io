import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<ul><li>dev for pro</li></ul><h3 id="浏览器全屏实现方式" tabindex="-1"><a class="header-anchor" href="#浏览器全屏实现方式" aria-hidden="true">#</a> 浏览器全屏实现方式</h3><p>1.利用h5的<code>requestFullScreen</code></p><p>2.摁F11实现全屏效果</p><h3 id="requestfullscreen全屏具体实现" tabindex="-1"><a class="header-anchor" href="#requestfullscreen全屏具体实现" aria-hidden="true">#</a> requestFullscreen全屏具体实现</h3><h5 id="_1-进入全屏" tabindex="-1"><a class="header-anchor" href="#_1-进入全屏" aria-hidden="true">#</a> 1.进入全屏</h5><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">full</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>requestFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          ele<span class="token punctuation">.</span><span class="token function">requestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>mozRequestFullScreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          ele<span class="token punctuation">.</span><span class="token function">mozRequestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>webkitRequestFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          ele<span class="token punctuation">.</span><span class="token function">webkitRequestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>msRequestFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          ele<span class="token punctuation">.</span><span class="token function">msRequestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>ele</code>：要全屏的元素，可以是<code>document.body</code>也可以是某一个div 思路： 1.判断该浏览器是否具有<code>requestFullscreen</code>方法 2.有，则直接执行<code>ele.requestFullscreen()</code>；没有则做浏览器兼容判断。</p><h5 id="_2-exitfullscreen退出全屏" tabindex="-1"><a class="header-anchor" href="#_2-exitfullscreen退出全屏" aria-hidden="true">#</a> 2.exitFullScreen退出全屏</h5><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">exitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>exitFullScreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">exitFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>mozCancelFullScreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">mozCancelFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>webkitExitFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">webkitExitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>msExitFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">msExitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>退出全屏直接使用<code>document</code>调用<code>exitFullscreen</code>方法即可。</p><h5 id="_3-获取当前全屏的节点" tabindex="-1"><a class="header-anchor" href="#_3-获取当前全屏的节点" aria-hidden="true">#</a> 3.获取当前全屏的节点</h5><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">getFullscreenElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>        
        document<span class="token punctuation">.</span>fullscreenElement <span class="token operator">||</span>
        document<span class="token punctuation">.</span>mozFullScreenElement <span class="token operator">||</span>
        document<span class="token punctuation">.</span>msFullScreenElement <span class="token operator">||</span>
        document<span class="token punctuation">.</span>webkitFullscreenElement<span class="token operator">||</span><span class="token keyword">null</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">fullscreenElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">：获取当前全屏的元素。
 假设id为div1的Element当前为全屏状态则 </span><span class="token template-punctuation string">\`</span></span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#div1&quot;</span><span class="token punctuation">)</span>
 document<span class="token punctuation">.</span>fullscreenElement
</code></pre></div><h5 id="_4-判断当前是否全屏" tabindex="-1"><a class="header-anchor" href="#_4-判断当前是否全屏" aria-hidden="true">#</a> 4.判断当前是否全屏</h5><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">isFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>  <span class="token operator">!</span><span class="token operator">!</span> <span class="token punctuation">(</span>
      document<span class="token punctuation">.</span>fullscreen <span class="token operator">||</span> 
      document<span class="token punctuation">.</span>mozFullScreen <span class="token operator">||</span>                         
      document<span class="token punctuation">.</span>webkitIsFullScreen <span class="token operator">||</span>       
      document<span class="token punctuation">.</span>webkitFullScreen <span class="token operator">||</span> 
      document<span class="token punctuation">.</span>msFullScreen 
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="_5-判断当前文档是否能切换到全屏" tabindex="-1"><a class="header-anchor" href="#_5-判断当前文档是否能切换到全屏" aria-hidden="true">#</a> 5.判断当前文档是否能切换到全屏</h5><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">isFullscreenEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>  <span class="token punctuation">(</span>
        document<span class="token punctuation">.</span>fullscreenEnabled <span class="token operator">||</span>
        document<span class="token punctuation">.</span>mozFullScreenEnabled <span class="token operator">||</span>
        document<span class="token punctuation">.</span>webkitFullscreenEnabled <span class="token operator">||</span>
        document<span class="token punctuation">.</span>msFullscreenEnabled
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项：</h3><ol><li><code>document</code>下没有<code>requestFullscreen</code></li><li><code>requestFullscreen</code>方法只能由用户触发，比如：在<code>onload</code>事件中不能触发</li><li>页面跳转需先退出全屏</li><li>进入全屏的元素，将脱离其父元素，所以可能导致之前某些css的失效 解决方案：使用 <code>:full-screen</code>伪类 为元素添加全屏时的样式（使用时为了兼容注意添加-webkit、-moz或-ms前缀）</li><li>一个元素A全屏后，其子元素要再全屏，需先让元素A退出全屏</li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">html,
    body</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50vw<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> background-color 100ms ease<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.main:fullscreen</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> DarkRed<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>元素在全屏显示模式下的CSS样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>css伪类:fullscreen应用于当前处于全屏显示模式的元素。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle-pattern<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>全屏模式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">


    <span class="token keyword">const</span> targetElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> togglePatternButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#toggle-pattern&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    togglePatternButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>document<span class="token punctuation">.</span>fullscreenElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            targetElement<span class="token operator">?.</span><span class="token function">requestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            togglePatternButton<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;退出全屏&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">exitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            togglePatternButton<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;全屏模式&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">full</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>requestFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">requestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>mozRequestFullScreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">mozRequestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>webkitRequestFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">webkitRequestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>msRequestFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">msRequestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



    <span class="token keyword">function</span> <span class="token function">exitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>exitFullScreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">exitFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>mozCancelFullScreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">mozCancelFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>webkitExitFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">webkitExitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>msExitFullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">msExitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">function</span> <span class="token function">getFullscreenElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            document<span class="token punctuation">.</span>fullscreenElement <span class="token operator">||</span>
            document<span class="token punctuation">.</span>mozFullScreenElement <span class="token operator">||</span>
            document<span class="token punctuation">.</span>msFullScreenElement <span class="token operator">||</span>
            document<span class="token punctuation">.</span>webkitFullscreenElement <span class="token operator">||</span> <span class="token keyword">null</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">isFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>
            document<span class="token punctuation">.</span>fullscreen <span class="token operator">||</span>
            document<span class="token punctuation">.</span>mozFullScreen <span class="token operator">||</span>
            document<span class="token punctuation">.</span>webkitIsFullScreen <span class="token operator">||</span>
            document<span class="token punctuation">.</span>webkitFullScreen <span class="token operator">||</span>
            document<span class="token punctuation">.</span>msFullScreen
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">isFullscreenEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            document<span class="token punctuation">.</span>fullscreenEnabled <span class="token operator">||</span>
            document<span class="token punctuation">.</span>mozFullScreenEnabled <span class="token operator">||</span>
            document<span class="token punctuation">.</span>webkitFullscreenEnabled <span class="token operator">||</span>
            document<span class="token punctuation">.</span>msFullscreenEnabled
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div>`,20),o=[e];function c(u,l){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","index.html.vue"]]);export{i as default};
