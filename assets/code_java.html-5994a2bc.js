import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> controller</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/content&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContentController</span> <span class="token punctuation">{</span>

	
	<span class="token annotation punctuation">@Resource</span>
	<span class="token keyword">private</span> <span class="token class-name">ContentService</span> contentService<span class="token punctuation">;</span>
	
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/query/list&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@ResponseBody</span>
	<span class="token keyword">public</span> <span class="token class-name">EUDataGridResult</span> <span class="token function">queryContentList</span><span class="token punctuation">(</span><span class="token class-name">Long</span> categoryId<span class="token punctuation">,</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue<span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token class-name">Integer</span> page<span class="token punctuation">,</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>defaultValue<span class="token operator">=</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token class-name">Integer</span> rows<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">EUDataGridResult</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> contentService<span class="token punctuation">.</span><span class="token function">getContentList</span><span class="token punctuation">(</span>categoryId<span class="token punctuation">,</span> page<span class="token punctuation">,</span> rows<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/save&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@ResponseBody</span>
	<span class="token keyword">public</span> <span class="token class-name">EgoResult</span> <span class="token function">saveContent</span><span class="token punctuation">(</span><span class="token class-name">TbContent</span> content<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			contentService<span class="token punctuation">.</span><span class="token function">saveContent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&quot;insert error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">return</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/edit&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@ResponseBody</span>
	<span class="token keyword">public</span> <span class="token class-name">EgoResult</span> <span class="token function">eidtContent</span><span class="token punctuation">(</span><span class="token class-name">TbContent</span> content<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			contentService<span class="token punctuation">.</span><span class="token function">editContent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&quot;edit error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/delete&quot;</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@ResponseBody</span>
	<span class="token keyword">public</span> <span class="token class-name">EgoResult</span> <span class="token function">removeContent</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ids<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			contentService<span class="token punctuation">.</span><span class="token function">deleteContents</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&quot;delete error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;contentService&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContentServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">ContentService</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Resource</span>
	<span class="token keyword">private</span> <span class="token class-name">TbContentMapper</span> contentMapper<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">EUDataGridResult</span> <span class="token function">getContentList</span><span class="token punctuation">(</span><span class="token keyword">long</span> catId<span class="token punctuation">,</span> <span class="token keyword">int</span> page<span class="token punctuation">,</span> <span class="token keyword">int</span> rows<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// 根据category_id查询内容列表</span>
			<span class="token class-name">TbContentExample</span> example <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TbContentExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">Criteria</span> criteria <span class="token operator">=</span> example<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			criteria<span class="token punctuation">.</span><span class="token function">andCategoryIdEqualTo</span><span class="token punctuation">(</span>catId<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 分页处理</span>
			<span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> rows<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TbContent</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> contentMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 取分页信息</span>
			<span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TbContent</span><span class="token punctuation">&gt;</span></span> pageInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">EUDataGridResult</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EUDataGridResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			result<span class="token punctuation">.</span><span class="token function">setTotal</span><span class="token punctuation">(</span>pageInfo<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			result<span class="token punctuation">.</span><span class="token function">setRows</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">throw</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveContent</span><span class="token punctuation">(</span><span class="token class-name">TbContent</span> content<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			content<span class="token punctuation">.</span><span class="token function">setCreated</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
			content<span class="token punctuation">.</span><span class="token function">setUpdated</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
			contentMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">throw</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">editContent</span><span class="token punctuation">(</span><span class="token class-name">TbContent</span> content<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			content<span class="token punctuation">.</span><span class="token function">setUpdated</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">TbContentExample</span> example <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TbContentExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">Criteria</span> criteria <span class="token operator">=</span> example<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			criteria<span class="token punctuation">.</span><span class="token function">andIdEqualTo</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			contentMapper<span class="token punctuation">.</span><span class="token function">updateByExampleSelective</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> example<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">throw</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteContents</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ids<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">long</span> id <span class="token operator">:</span> ids<span class="token punctuation">)</span><span class="token punctuation">{</span>
				contentMapper<span class="token punctuation">.</span><span class="token function">deleteByPrimaryKey</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">throw</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> response</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">JsonNode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 自定义响应结构
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EgoResult</span> <span class="token punctuation">{</span>

    <span class="token comment">// 定义jackson对象</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ObjectMapper</span> <span class="token constant">MAPPER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 响应业务状态</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> status<span class="token punctuation">;</span>

    <span class="token comment">// 响应消息</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>

    <span class="token comment">// 响应中的数据</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> data<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EgoResult</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> status<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Object</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EgoResult</span><span class="token punctuation">(</span>status<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EgoResult</span> <span class="token function">ok</span><span class="token punctuation">(</span><span class="token class-name">Object</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EgoResult</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EgoResult</span> <span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EgoResult</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">EgoResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EgoResult</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> status<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EgoResult</span><span class="token punctuation">(</span>status<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">EgoResult</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> status<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Object</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">EgoResult</span><span class="token punctuation">(</span><span class="token class-name">Object</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//    public Boolean isOK() {</span>
<span class="token comment">//        return this.status == 200;</span>
<span class="token comment">//    }</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token class-name">Object</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将json结果集转化为EgoResult对象
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">jsonData</span> json数据
     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span> EgoResult中的object类型
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EgoResult</span> <span class="token function">formatToPojo</span><span class="token punctuation">(</span><span class="token class-name">String</span> jsonData<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>clazz <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">,</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">JsonNode</span> jsonNode <span class="token operator">=</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readTree</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">JsonNode</span> data <span class="token operator">=</span> jsonNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>clazz <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    obj <span class="token operator">=</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">isTextual</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    obj <span class="token operator">=</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">asText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token function">build</span><span class="token punctuation">(</span>jsonNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> jsonNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 没有object对象的转化
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">json</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EgoResult</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">String</span> json<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> <span class="token class-name">EgoResult</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Object是集合转化
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">jsonData</span> json数据
     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span> 集合中的类型
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">EgoResult</span> <span class="token function">formatToList</span><span class="token punctuation">(</span><span class="token class-name">String</span> jsonData<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">JsonNode</span> jsonNode <span class="token operator">=</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readTree</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">JsonNode</span> data <span class="token operator">=</span> jsonNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                obj <span class="token operator">=</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">getTypeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructCollectionType</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token function">build</span><span class="token punctuation">(</span>jsonNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> jsonNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="util" tabindex="-1"><a class="header-anchor" href="#util" aria-hidden="true">#</a> util</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 各种id生成策略
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IDUtils</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 图片名生成
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">genImageName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//取当前时间的长整形值包含毫秒</span>
		<span class="token keyword">long</span> millis <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//long millis = System.nanoTime();</span>
		<span class="token comment">//加上三位随机数</span>
		<span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> end3 <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//如果不足三位前面补0</span>
		<span class="token class-name">String</span> str <span class="token operator">=</span> millis <span class="token operator">+</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%03d&quot;</span><span class="token punctuation">,</span> end3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> str<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 商品id生成
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">genItemId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//取当前时间的长整形值包含毫秒</span>
		<span class="token keyword">long</span> millis <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//long millis = System.nanoTime();</span>
		<span class="token comment">//加上两位随机数</span>
		<span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> end2 <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//如果不足两位前面补0</span>
		<span class="token class-name">String</span> str <span class="token operator">=</span> millis <span class="token operator">+</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%02d&quot;</span><span class="token punctuation">,</span> end2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Long</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> id<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">genItemId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="ftputil" tabindex="-1"><a class="header-anchor" href="#ftputil" aria-hidden="true">#</a> ftpUtil</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileNotFoundException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ftp<span class="token punctuation">.</span></span><span class="token class-name">FTP</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ftp<span class="token punctuation">.</span></span><span class="token class-name">FTPClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ftp<span class="token punctuation">.</span></span><span class="token class-name">FTPFile</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>net<span class="token punctuation">.</span>ftp<span class="token punctuation">.</span></span><span class="token class-name">FTPReply</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ftp上传下载工具类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FtpUtil</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/** 
	 * Description: 向FTP服务器上传文件 
	 * <span class="token keyword">@param</span> <span class="token parameter">host</span> FTP服务器hostname 
	 * <span class="token keyword">@param</span> <span class="token parameter">port</span> FTP服务器端口 
	 * <span class="token keyword">@param</span> <span class="token parameter">username</span> FTP登录账号 
	 * <span class="token keyword">@param</span> <span class="token parameter">password</span> FTP登录密码 
	 * <span class="token keyword">@param</span> <span class="token parameter">basePath</span> FTP服务器基础目录
	 * <span class="token keyword">@param</span> <span class="token parameter">filePath</span> FTP服务器文件存放路径。例如分日期存放：/2016/12/01。文件的路径为basePath+filePath
	 * <span class="token keyword">@param</span> <span class="token parameter">filename</span> 上传到FTP服务器上的文件名 
	 * <span class="token keyword">@param</span> <span class="token parameter">input</span> 输入流 
	 * <span class="token keyword">@return</span> 成功返回true，否则返回false 
	 */</span>  
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> host<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span> <span class="token class-name">String</span> basePath<span class="token punctuation">,</span>
			<span class="token class-name">String</span> filePath<span class="token punctuation">,</span> <span class="token class-name">String</span> filename<span class="token punctuation">,</span> <span class="token class-name">InputStream</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">boolean</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token class-name">FTPClient</span> ftp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FTPClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">int</span> reply<span class="token punctuation">;</span>
			ftp<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 连接FTP服务器</span>
			<span class="token comment">// 如果采用默认端口，可以使用ftp.connect(host)的方式直接连接FTP服务器</span>
			ftp<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 登录</span>
			reply <span class="token operator">=</span> ftp<span class="token punctuation">.</span><span class="token function">getReplyCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">FTPReply</span><span class="token punctuation">.</span><span class="token function">isPositiveCompletion</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				ftp<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> result<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">//切换到上传目录</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ftp<span class="token punctuation">.</span><span class="token function">changeWorkingDirectory</span><span class="token punctuation">(</span>basePath<span class="token operator">+</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//如果目录不存在创建目录</span>
				<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dirs <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">String</span> tempPath <span class="token operator">=</span> basePath<span class="token punctuation">;</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> dir <span class="token operator">:</span> dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> dir <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
					tempPath <span class="token operator">+=</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> dir<span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ftp<span class="token punctuation">.</span><span class="token function">changeWorkingDirectory</span><span class="token punctuation">(</span>tempPath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ftp<span class="token punctuation">.</span><span class="token function">makeDirectory</span><span class="token punctuation">(</span>tempPath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
							<span class="token keyword">return</span> result<span class="token punctuation">;</span>
						<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
							ftp<span class="token punctuation">.</span><span class="token function">changeWorkingDirectory</span><span class="token punctuation">(</span>tempPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token comment">//设置上传文件的类型为二进制类型</span>
			ftp<span class="token punctuation">.</span><span class="token function">setFileType</span><span class="token punctuation">(</span><span class="token constant">FTP</span><span class="token punctuation">.</span><span class="token constant">BINARY_FILE_TYPE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//上传文件</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ftp<span class="token punctuation">.</span><span class="token function">storeFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> input<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> result<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			input<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			ftp<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			result <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>ftp<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					ftp<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ioe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/** 
	 * Description: 从FTP服务器下载文件 
	 * <span class="token keyword">@param</span> <span class="token parameter">host</span> FTP服务器hostname 
	 * <span class="token keyword">@param</span> <span class="token parameter">port</span> FTP服务器端口 
	 * <span class="token keyword">@param</span> <span class="token parameter">username</span> FTP登录账号 
	 * <span class="token keyword">@param</span> <span class="token parameter">password</span> FTP登录密码 
	 * <span class="token keyword">@param</span> <span class="token parameter">remotePath</span> FTP服务器上的相对路径 
	 * <span class="token keyword">@param</span> <span class="token parameter">fileName</span> 要下载的文件名 
	 * <span class="token keyword">@param</span> <span class="token parameter">localPath</span> 下载后保存到本地的路径 
	 * <span class="token keyword">@return</span> 
	 */</span>  
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> host<span class="token punctuation">,</span> <span class="token keyword">int</span> port<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span> <span class="token class-name">String</span> remotePath<span class="token punctuation">,</span>
			<span class="token class-name">String</span> fileName<span class="token punctuation">,</span> <span class="token class-name">String</span> localPath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">boolean</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token class-name">FTPClient</span> ftp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FTPClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">int</span> reply<span class="token punctuation">;</span>
			ftp<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 如果采用默认端口，可以使用ftp.connect(host)的方式直接连接FTP服务器</span>
			ftp<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 登录</span>
			reply <span class="token operator">=</span> ftp<span class="token punctuation">.</span><span class="token function">getReplyCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">FTPReply</span><span class="token punctuation">.</span><span class="token function">isPositiveCompletion</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				ftp<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> result<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			ftp<span class="token punctuation">.</span><span class="token function">changeWorkingDirectory</span><span class="token punctuation">(</span>remotePath<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 转移到FTP服务器目录</span>
			<span class="token class-name">FTPFile</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fs <span class="token operator">=</span> ftp<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FTPFile</span> ff <span class="token operator">:</span> fs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>ff<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token class-name">File</span> localFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>localPath <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> ff<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

					<span class="token class-name">OutputStream</span> is <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>localFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
					ftp<span class="token punctuation">.</span><span class="token function">retrieveFile</span><span class="token punctuation">(</span>ff<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> is<span class="token punctuation">)</span><span class="token punctuation">;</span>
					is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			ftp<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			result <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>ftp<span class="token punctuation">.</span><span class="token function">isConnected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					ftp<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ioe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>  
	        <span class="token class-name">FileInputStream</span> in<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:/Users/neverComeTrue/Desktop/aaaabbbb.doc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.214.128&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&quot;ftpuser&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ftpuser&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/home/ftpuser/moral&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/2015/01/21&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test.doc&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
	        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	    <span class="token punctuation">}</span>  
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","code_java.html.vue"]]);export{i as default};
