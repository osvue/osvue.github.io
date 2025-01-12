import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="sidebar-for-python" tabindex="-1"><a class="header-anchor" href="#sidebar-for-python" aria-hidden="true">#</a> sidebar For Python</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> os
<span class="token keyword">import</span> json
<span class="token comment"># print (os.getcwd())</span>

basePath <span class="token operator">=</span> <span class="token string">r&#39;D:\\study\\blog\\blog\\docs&#39;</span>
outFilePath <span class="token operator">=</span> <span class="token string">r&#39;D:\\study\\blog\\blog\\docs\\.vuepress\\config&#39;</span>
prefixStr <span class="token operator">=</span> <span class="token string">&#39;export default &#39;</span>
fzname <span class="token operator">=</span> <span class="token string">&#39;sidebarConf.ts&#39;</span>

charBase<span class="token operator">=</span><span class="token string">r&#39;/&#39;</span>



<span class="token keyword">def</span> <span class="token function">cwdDir</span><span class="token punctuation">(</span>basePath<span class="token punctuation">)</span><span class="token punctuation">:</span>
    parentNode <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    pdir <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>basePath<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> pdir<span class="token punctuation">:</span>
        fullPath<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>basePath<span class="token punctuation">,</span>i<span class="token punctuation">)</span>

        <span class="token keyword">if</span> i<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token comment">#     第一级文件夹</span>

            apath<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>basePath<span class="token punctuation">,</span>i<span class="token punctuation">)</span>

            <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span>apath<span class="token punctuation">)</span><span class="token punctuation">:</span>

                jpathA <span class="token operator">=</span> charBase<span class="token operator">+</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
                twoPath <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>apath<span class="token punctuation">)</span>

                <span class="token keyword">if</span> jpathA<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;hhh&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
                    <span class="token keyword">continue</span>

                <span class="token keyword">for</span> tp <span class="token keyword">in</span> twoPath<span class="token punctuation">:</span>
                    jpathB <span class="token operator">=</span> jpathA<span class="token operator">+</span>charBase<span class="token operator">+</span>tp
                    fpath <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>apath<span class="token punctuation">,</span>tp<span class="token punctuation">)</span>
                    parentValue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                    pvNode <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span>tp<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">:</span>tp<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;collapsable&#39;</span><span class="token punctuation">:</span><span class="token boolean">False</span><span class="token punctuation">,</span><span class="token string">&#39;sidebarDepth&#39;</span><span class="token punctuation">:</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
                    <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span>fpath<span class="token punctuation">)</span><span class="token punctuation">:</span>
                        childArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                        <span class="token keyword">for</span> fs <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>fpath<span class="token punctuation">)</span><span class="token punctuation">:</span>
                            <span class="token keyword">if</span> fs<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;image&#39;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>

                                childArr<span class="token punctuation">.</span>append<span class="token punctuation">(</span>fs<span class="token punctuation">)</span>

                        pvNode<span class="token punctuation">[</span><span class="token string">&#39;children&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> childArr
                        parentValue<span class="token punctuation">.</span>append<span class="token punctuation">(</span>pvNode<span class="token punctuation">)</span>
                        parentNode<span class="token punctuation">[</span>jpathB<span class="token punctuation">]</span><span class="token operator">=</span>parentValue

    <span class="token keyword">return</span> parentNode




pd <span class="token operator">=</span> cwdDir<span class="token punctuation">(</span>basePath<span class="token punctuation">)</span>



targetFile <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>outFilePath<span class="token punctuation">,</span>fzname<span class="token punctuation">)</span>
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span>targetFile<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>targetFile<span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> tf<span class="token punctuation">:</span>
        ast <span class="token operator">=</span>prefixStr <span class="token operator">+</span>  json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>pd<span class="token punctuation">,</span>indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
        tf<span class="token punctuation">.</span>write<span class="token punctuation">(</span>ast<span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;SUCCESS !!&quot;</span><span class="token punctuation">)</span>


</code></pre></div><h3 id="sidebar-for-java" tabindex="-1"><a class="header-anchor" href="#sidebar-for-java" aria-hidden="true">#</a> sidebar For Java</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/json&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span>  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">BlogTree</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span>  <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> directoryPath <span class="token operator">=</span> <span class="token string">&quot;D:\\\\1907\\\\0418blog\\\\osvue\\\\docs&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">File</span> directory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>directoryPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">BlogTree</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> pmp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">listFiles</span><span class="token punctuation">(</span>directory<span class="token punctuation">,</span> pmp<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 
		<span class="token keyword">return</span> pmp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token class-name">File</span> directory<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">BlogTree</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> pmp<span class="token punctuation">,</span> <span class="token class-name">String</span> baseUrl<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">String</span> fname <span class="token operator">=</span> directory<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>fname<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> fname<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;assets&quot;</span><span class="token punctuation">)</span><span class="token operator">||</span>  fname<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;hhh&quot;</span><span class="token punctuation">)</span><span class="token operator">||</span>fname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>directory<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> directory<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				baseUrl <span class="token operator">=</span> baseUrl <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> fname<span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>files <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token function">listFiles</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> pmp<span class="token punctuation">,</span> baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BlogTree</span><span class="token punctuation">&gt;</span></span> rList <span class="token operator">=</span> pmp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>rList <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>rList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token class-name">BlogTree</span> blogTree <span class="token operator">=</span> rList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						blogTree<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fname<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BlogTree</span><span class="token punctuation">&gt;</span></span> als <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">BlogTree</span> blogTree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlogTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					blogTree<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token function">generText</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					blogTree<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token function">generText</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> urls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					urls<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fname<span class="token punctuation">)</span><span class="token punctuation">;</span>
					blogTree<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span><span class="token punctuation">;</span>
					als<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>blogTree<span class="token punctuation">)</span><span class="token punctuation">;</span>

					pmp<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> als<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">generText</span><span class="token punctuation">(</span><span class="token class-name">String</span> fname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fname <span class="token operator">=</span> fname<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>fname<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> fname<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>bpmn<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlogTree</span> <span class="token punctuation">{</span>

	
	<span class="token class-name">String</span> text<span class="token punctuation">;</span> 
	<span class="token class-name">String</span> title<span class="token punctuation">;</span> 
	<span class="token keyword">boolean</span> collapsable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> sidebarDepth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	 
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> children<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> text<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setText</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> title<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isCollapsable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> collapsable<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCollapsable</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> collapsable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>collapsable <span class="token operator">=</span> collapsable<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSidebarDepth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> sidebarDepth<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSidebarDepth</span><span class="token punctuation">(</span><span class="token keyword">int</span> sidebarDepth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sidebarDepth <span class="token operator">=</span> sidebarDepth<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> children<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setChildren</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;BlogTree [text=&quot;</span> <span class="token operator">+</span> text <span class="token operator">+</span> <span class="token string">&quot;, title=&quot;</span> <span class="token operator">+</span> title <span class="token operator">+</span> <span class="token string">&quot;, collapsable=&quot;</span> <span class="token operator">+</span> collapsable <span class="token operator">+</span> <span class="token string">&quot;, sidebarDepth=&quot;</span>
				<span class="token operator">+</span> sidebarDepth <span class="token operator">+</span> <span class="token string">&quot;, children=&quot;</span> <span class="token operator">+</span> children <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">BlogTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// TODO Auto-generated constructor stub</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">BlogTree</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token keyword">boolean</span> collapsable<span class="token punctuation">,</span> <span class="token keyword">int</span> sidebarDepth<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>collapsable <span class="token operator">=</span> collapsable<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sidebarDepth <span class="token operator">=</span> sidebarDepth<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	
	
<span class="token punctuation">}</span>

</code></pre></div>`,4),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","aotu_sidebar.html.vue"]]);export{i as default};
