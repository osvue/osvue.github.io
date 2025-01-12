import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><h4 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h4><ol><li>JDK1.6之前的switch语句只支持int,char,enum类型，使用枚举，能让我们的代码可读性更强。</li></ol><p>Java代码</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Signal</span> <span class="token punctuation">{</span>  
    <span class="token constant">GREEN</span><span class="token punctuation">,</span> <span class="token constant">YELLOW</span><span class="token punctuation">,</span> <span class="token constant">RED</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TrafficLight</span> <span class="token punctuation">{</span>  
    <span class="token class-name">Signal</span> color <span class="token operator">=</span> <span class="token class-name">Signal</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">;</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">case</span> <span class="token constant">RED</span><span class="token operator">:</span>  
            color <span class="token operator">=</span> <span class="token class-name">Signal</span><span class="token punctuation">.</span><span class="token constant">GREEN</span><span class="token punctuation">;</span>  
            <span class="token keyword">break</span><span class="token punctuation">;</span>  
        <span class="token keyword">case</span> <span class="token constant">YELLOW</span><span class="token operator">:</span>  
            color <span class="token operator">=</span> <span class="token class-name">Signal</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">;</span>  
            <span class="token keyword">break</span><span class="token punctuation">;</span>  
        <span class="token keyword">case</span> <span class="token constant">GREEN</span><span class="token operator">:</span>  
            color <span class="token operator">=</span> <span class="token class-name">Signal</span><span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">;</span>  
            <span class="token keyword">break</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre></div><h3 id="向枚举中添加新方法" tabindex="-1"><a class="header-anchor" href="#向枚举中添加新方法" aria-hidden="true">#</a> 向枚举中添加新方法</h3><ul><li>如果打算自定义自己的方法，那么必须在enum实例序列的<strong>最后添加一个分号</strong>。而且 Java 要求必须<strong>先</strong>定义 enum 实例。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>  
    <span class="token function">RED</span><span class="token punctuation">(</span><span class="token string">&quot;红色&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">GREEN</span><span class="token punctuation">(</span><span class="token string">&quot;绿色&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">BLANK</span><span class="token punctuation">(</span><span class="token string">&quot;白色&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">YELLO</span><span class="token punctuation">(</span><span class="token string">&quot;黄色&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 成员变量  </span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token keyword">int</span> index<span class="token punctuation">;</span>  
    <span class="token comment">// 构造方法  </span>
    <span class="token keyword">private</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> index<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token comment">// 普通方法  </span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Color</span> c <span class="token operator">:</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">return</span> c<span class="token punctuation">.</span>name<span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token comment">// get set 方法  </span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> index<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> index<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre></div><p><code>== 和使用equals方法的执行结果是一样的</code></p><h5 id="因为枚举的赋值根本不是-new-出来的-都是直接使用了地址-而枚举元素本身的构造函数又被私有化了-不允许public-如果-public-会报错-所以在外面根本就不允许-new-一个枚举元素出来" tabindex="-1"><a class="header-anchor" href="#因为枚举的赋值根本不是-new-出来的-都是直接使用了地址-而枚举元素本身的构造函数又被私有化了-不允许public-如果-public-会报错-所以在外面根本就不允许-new-一个枚举元素出来" aria-hidden="true">#</a> 因为枚举的赋值根本不是 new 出来的. 都是直接使用了地址, 而枚举元素本身的构造函数又被私有化了(不允许public, 如果 public 会报错). 所以在外面根本就不允许 new 一个枚举元素出来</h5><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> use</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Method</span> <span class="token punctuation">{</span>

	<span class="token function">SELECT</span><span class="token punctuation">(</span><span class="token string">&quot;查询&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">INSERT</span><span class="token punctuation">(</span><span class="token string">&quot;新增&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">DELETE</span><span class="token punctuation">(</span><span class="token string">&quot;删除&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">UPDATE</span><span class="token punctuation">(</span><span class="token string">&quot;更新&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">IMPORT</span><span class="token punctuation">(</span><span class="token string">&quot;导入&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">EXPORT</span><span class="token punctuation">(</span><span class="token string">&quot;导出&quot;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> desc<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>

	<span class="token keyword">private</span> <span class="token class-name">Method</span><span class="token punctuation">(</span><span class="token class-name">String</span> desc<span class="token punctuation">,</span> <span class="token class-name">Integer</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>desc <span class="token operator">=</span> desc<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> desc<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> code<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	 
<span class="token punctuation">}</span>




<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AsLogger</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 模块名称
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token class-name">String</span> <span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	 * 操作类型
	 * <span class="token keyword">@see</span> [查询，新增，修改，删除，导出，导入]
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token class-name">Method</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Method</span><span class="token punctuation">.</span><span class="token constant">SELECT</span><span class="token punctuation">;</span>
	
	<span class="token doc-comment comment">/**
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
	 *  - 日志类型
	 * 		1. 系统日志
	 * 		2. 业务日志
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token class-name">String</span> <span class="token function">logType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;业务日志&quot;</span><span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	 * 是否写入日志
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">outDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	
	<span class="token doc-comment comment">/**
	 * 具体详情
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
	
	
	
<span class="token punctuation">}</span>

<span class="token comment">// 在 controller  方法 中 使用</span>
<span class="token annotation punctuation">@AsLogger</span><span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;系统运行情况&quot;</span><span class="token punctuation">,</span>type<span class="token operator">=</span><span class="token class-name">Method</span><span class="token punctuation">.</span><span class="token constant">SELECT</span><span class="token punctuation">,</span>logType<span class="token operator">=</span><span class="token string">&quot;业务日志&quot;</span> <span class="token punctuation">)</span>

</code></pre></div>`,12),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","java_enum.html.vue"]]);export{i as default};
