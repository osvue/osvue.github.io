import{_ as t,M as p,p as o,q as c,R as n,t as s,N as e,a1 as u}from"./framework-d81ad7e5.js";const l={},k=n("h3",{id:"bootstrap-select",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bootstrap-select","aria-hidden":"true"},"#"),s(" bootstrap-select")],-1),i={href:"https://www.bootstrapselect.cn",target:"_blank",rel:"noopener noreferrer"},r=n("li",null,"demo",-1),g=u(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../bootstrap/css/bootstrap.min.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../bootstrap/dist/css/bootstrap-select.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../bootstrap/js/bootstrap.bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../bootstrap/dist/js/bootstrap-select.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button primary<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>获取选择的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- /*
multiple : 多选
data-live-search=&quot;true&quot; : 是否开启搜索功能
data-actions-box=&quot;true&quot; : 是否开启全选功能
data-max-options=&quot;5&quot; : 设置对多选中2个
data-selected-text-format=&quot;count &gt; 3&quot; ：
 &lt;! -- data-selected-text-format=&quot;count &gt; 3&quot; - -&gt;
 缩略模式，比如当选中值大于3个的时候只显示选中项的个数，注意这个属性只对多选生效
*/ --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectpicker col-6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请选择<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span> <span class="token attr-name">data-live-search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
				<span class="token attr-name">data-actions-box</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-max-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>系统管理员<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>销售<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>客户经理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>技术经理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>人事<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">function</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#sel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//如果是多选，这里得到的value变量是一个数组变量，形如 [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;]</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
			<span class="token function">initSel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">initSel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> daarr <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getDt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#sel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			daarr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#sel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;option value=&quot;</span> <span class="token operator">+</span> element <span class="token operator">+</span> <span class="token string">&quot; &gt;&quot;</span> <span class="token operator">+</span> element <span class="token operator">+</span> <span class="token string">&quot;&lt;/option&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// $(&quot;#sel&quot;).append(&quot;&lt;option value=&quot;+json[index].id+&quot; &gt;&quot;+json[index].name+&quot;&lt;/option&gt;&quot; );</span>
			<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#sel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;refresh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//刷新下才会生效</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">function</span> <span class="token function">getDt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> dataStr <span class="token operator">=</span> <span class="token string">&#39;但如果，你提交，数据时将表，单序列化，个有更多的空，有足够，的空间可以正，常完全打开，但是上面，变成了一个下&#39;</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> daarr <span class="token operator">=</span> dataStr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;，&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token function">resolve</span><span class="token punctuation">(</span>daarr<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token comment">/*
	
	$(function (){
 		//这里就使用ajax请求获取数据，拼装到&lt;select&gt;标签下
        $.ajax({
            url: &quot;test/list&quot;,
            method: &quot;get&quot;,
            success: function (data){
                $(&quot;#sel&quot;).empty();
                var json=eval(data.data);
                $.each(json,function(index,item){
                    $(&quot;#sel&quot;).append(&quot;&lt;option value=&quot;+json[index].id+&quot; &gt;&quot;+json[index].name+&quot;&lt;/option&gt;&quot; );
                });
                $(&#39;#sel&#39;).selectpicker(&#39;refresh&#39;);//刷新下才会生效
            }
        })
    })
		*/</span>



</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>         <span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;val&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 您可以通过调用元素上的val方法来设置所选值。</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.selectpicker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;val&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Mustard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.selectpicker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;val&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Mustard&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Relish&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 编辑时回填使用：</span>
    <span class="token punctuation">{</span># 回填数据，<span class="token keyword">typeof</span> Arr 为选中项value的值#<span class="token punctuation">}</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#tester&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;val&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;typeof&#39;</span> <span class="token punctuation">,</span><span class="token string">&#39;Arr&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#tester&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;refresh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;setStyle&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 修改与按钮本身或其容器关联的类。</span>

<span class="token comment">// 如果更改容器上的类：</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.selectpicker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;col-lg-12&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;setStyle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//如果更改按钮上的类（更改数据样式）：</span>

<span class="token comment">// Replace Class$(&#39;.selectpicker&#39;).selectpicker(&#39;setStyle&#39;, &#39;btn-danger&#39;);</span>
<span class="token comment">// Add Class$(&#39;.selectpicker&#39;).selectpicker(&#39;setStyle&#39;, &#39;btn-large&#39;, &#39;add&#39;);</span>
<span class="token comment">// Remove Class$(&#39;.selectpicker&#39;).selectpicker(&#39;setStyle&#39;, &#39;btn-large&#39;, &#39;remove&#39;);</span>

<span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;refresh&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//要以编程方式使用JavaScript更新选择，请先操作select，然后使用refresh方法更新UI以匹配新状态。</span>
<span class="token comment">//  在删除或添加选项时，或通过JavaScript禁用/启用选择时，这是必需的。</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.selectpicker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectpicker</span><span class="token punctuation">(</span><span class="token string">&#39;refresh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,3);function q(d,m){const a=p("ExternalLinkIcon");return o(),c("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[s("中文官网"),e(a)])]),r]),g])}const f=t(l,[["render",q],["__file","bootstrap_a.html.vue"]]);export{f as default};