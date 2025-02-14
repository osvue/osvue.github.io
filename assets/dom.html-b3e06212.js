import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="两种绑定方式" tabindex="-1"><a class="header-anchor" href="#两种绑定方式" aria-hidden="true">#</a> 两种绑定方式</h3><pre><code>(DOM0)1.obj.onclick = fn;	
	
(DOM2)2.
  ie:obj.attachEvent(事件名称，事件函数);
	1.没有捕获(非标准的ie 标准的ie底下有  ie6到10)
	2.事件名称有on
	3.事件函数执行的顺序：标准ie-》正序   非标准ie-》倒序
	4.this指向window
      标准:obj.addEventListener(事件名称，事件函数，是否捕获);
	1.有捕获
	2.事件名称没有on
	3.事件执行的顺序是正序
	4.this触发该事件的对象
</code></pre><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>		document<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onclick&#39;</span><span class="token punctuation">,</span> fn2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		document<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onclick&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 是否捕获 : 默认是false    false:冒泡 true：捕获</span>
		
		document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> fn1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> fn2<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><pre><code>注意
	ie代表了:非标准ie 和 标准ie
	标准代表了:标准ie 和 chrome Firefox等....
</code></pre><h3 id="同步this" tabindex="-1"><a class="header-anchor" href="#同步this" aria-hidden="true">#</a> 同步this</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>	<span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> evname<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//除ie低版本外都可以进入</span>
			obj<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>evname<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			obj<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;on&#39;</span> <span class="token operator">+</span> evname<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">bind</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="两种绑定方式的区别" tabindex="-1"><a class="header-anchor" href="#两种绑定方式的区别" aria-hidden="true">#</a> 两种绑定方式的区别</h3><pre><code>取消冒泡的手段:event.cancelBubble = true;
	   	    event.stopPropagation();

第一种:默认冒泡,
第一种:一个元素上只能绑定一个同类事件,如果继续绑定的话,第二个事件函数会覆盖第一个


第二种: 
	  attachEvent
	  			       默认冒泡
	  addEventListener    
				      是否捕获 : 默认是false    
				      第三个参数: false:冒泡
						    true：捕获
第二种:一个元素上可以绑定多个同类事件,它们都会被执行
</code></pre><h3 id="事件解绑" tabindex="-1"><a class="header-anchor" href="#事件解绑" aria-hidden="true">#</a> 事件解绑</h3><pre><code>DOM0:想解除事件就相当简单了，只需要再注册一次事件，把值设成null
		原理就是最后注册的事件要覆盖之前的，最后一次注册事件设置成null，
			也就解除了事件绑定。
			
DOM0事件模型还涉及到直接写在html中的事件:
		因此不会传入event对象，同时，this指向的是window，不再是触发事件的dom对象。
		
DOM2:removeEventListener
	 	解除事件语法：btn.removeEventListener(&quot;事件名称&quot;, &quot;事件回调&quot;, &quot;捕获/冒泡&quot;);
	 detachEvent(ie)
</code></pre><h3 id="事件流" tabindex="-1"><a class="header-anchor" href="#事件流" aria-hidden="true">#</a> 事件流</h3><pre><code>单击蓝色框后，开始事件捕获阶段：
	从最外层的document对象（浏览器其实是从window对象开始的）向内捕获事件，路过红色框时，查看到红色框有事件，
	但是红色框说：“我是在冒泡阶段执行，现在是捕获阶段，等你回来再说吧。”
	接下来是黄色框：“我在捕获阶段执行，就是现在执行！在控制台输“黄色框”吧~~”
接下来到达目标阶段：
	“DOM2级事件”规范要求捕获阶段不会涉及事件目标即我们点击的那个最具体的元素，
	但IE9、Chrome等浏览器都会在捕获阶段触发事件对象上的事件。执行目标对象的事件函数，控制台输出“蓝色框”。
最后是冒泡阶段：
	由目标对象向外传递，到达黄色框，黄色框说：“我在捕获阶段执行过了，你走吧...”
	然后到达红色框，红色框说：“你终于回来了，现在就执行我的事件！”控制台输出“红色框”。
	然后继续向外传播，直到到达document对象后停止。
其他：更改了元素绑定事件代码的顺序，执行顺序也和上面表现的一致。
</code></pre><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><pre><code>onclick形式:冒泡
attachEvent:冒泡
addEventListener:第三个参数(false:冒泡;true:捕获)
</code></pre><h3 id="span的赋值与取值" tabindex="-1"><a class="header-anchor" href="#span的赋值与取值" aria-hidden="true">#</a> span的赋值与取值</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span_id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>span的文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>的取值。
<span class="token comment">&lt;!--  
js取&lt;span&gt;的值并不是用
    document.getElementById(&#39;span_noticesg&#39;).value，
    而是
    document.getElementById(&#39;span_id&#39;).innerText。
jquery取&lt;span&gt;的值，是
    $(&quot;#span_noticesg&quot;).html();
     --&gt;</span>
\`\`\` 
- <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span_id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>的赋值。
\`\`\`js
$(&#39;#span_id&#39;).html(&quot;span的文本&quot;);
document.getElementById(&#39;span_id&#39;).innerText=&quot;span的文本&quot;; 
</code></pre></div><h5 id="jquery给p标签赋值的方法-bq-html-内容" tabindex="-1"><a class="header-anchor" href="#jquery给p标签赋值的方法-bq-html-内容" aria-hidden="true">#</a> jquery给p标签赋值的方法：<code>$(&quot;#bq&quot;).html(&quot;内容&quot;)；</code></h5><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 下载 for ajax</span>
  <span class="token keyword">function</span> <span class="token function">downloadMB</span><span class="token punctuation">(</span><span class="token parameter">href</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  
         <span class="token keyword">var</span> $form <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;form method=&quot;post&quot;&gt;&lt;/form&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         $form<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
         $form<span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         $form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         $form<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

</code></pre></div><h3 id="判断复选框是否选中状态" tabindex="-1"><a class="header-anchor" href="#判断复选框是否选中状态" aria-hidden="true">#</a> 判断复选框是否选中状态</h3><p>第一种是prop(‘checked’);</p><p>示例代码</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checks<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">//获取文本框</span>
	<span class="token keyword">let</span> c1 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#checks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//得到c1为true或者false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>第二种方法是is(“checked”)</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checks<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">//获取文本框</span>
	<span class="token keyword">let</span> c1 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#checks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//得到c1为true或者false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>如果复选框不确定数量或者多个的话，需要使用each相同名字或者类型的复选框。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;input[type=&#39;</span>checkbox<span class="token string">&#39;]:checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	 <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,26),c=[o];function e(u,l){return a(),s("div",null,c)}const k=n(p,[["render",e],["__file","dom.html.vue"]]);export{k as default};
