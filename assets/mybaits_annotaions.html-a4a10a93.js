import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<table><thead><tr><th>注解</th><th>说明</th></tr></thead><tbody><tr><td>@Insert</td><td>实现新增</td></tr><tr><td>@Delete</td><td>实现删除</td></tr><tr><td>@Update</td><td>实现更新</td></tr><tr><td>@Select</td><td>实现查询</td></tr><tr><td>@Result</td><td>实现结果集封装</td></tr><tr><td>@Results</td><td>可以与@Result 一起使用，封装多个结果集</td></tr><tr><td>@ResultMap</td><td>实现引用@Results 定义的封装</td></tr><tr><td>@One</td><td>实现一对一结果集封装</td></tr><tr><td>@Many</td><td>实现一对多结果集封装</td></tr><tr><td>@SelectProvider</td><td>实现动态 SQL 映射</td></tr><tr><td>@CacheNamespace</td><td>实现注解二级缓存的使用</td></tr></tbody></table><h2 id="crud" tabindex="-1"><a class="header-anchor" href="#crud" aria-hidden="true">#</a> CRUD</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 查询所有用户信息
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot; SELECT * FROM \`user\`&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;birthday&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;birthday&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 添加用户信息
     *
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     */</span>
    <span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">&quot; INSERT INTO \`user\` (username,birthday,gender,address) VALUES (#{username},#{birthday},#{gender},#{address})&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 修改用户信息
     *
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     */</span>
    <span class="token annotation punctuation">@Update</span><span class="token punctuation">(</span><span class="token string">&quot; UPDATE \`user\` set username = #{username},gender= #{gender} ,address = #{address} WHERE id = #{id} &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 删除用户信息
     *
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     */</span>
    <span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot; DELETE FROM \`user\` WHERE id = #{id} &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="mybatis注解实现一对一关联查询" tabindex="-1"><a class="header-anchor" href="#mybatis注解实现一对一关联查询" aria-hidden="true">#</a> Mybatis注解实现一对一关联查询</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 根据id查询用户信息
     *
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM \`user\` WHERE id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Double</span> money<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 一个账户属于一个用户
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">User</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AccountMapper</span> <span class="token punctuation">{</span>


    <span class="token doc-comment comment">/**
     * 查询所有账户以及所属用户信息
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot; SELECT * FROM \`account\`&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;money&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;user_id&quot;</span><span class="token punctuation">,</span> javaType <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> one <span class="token operator">=</span> <span class="token annotation punctuation">@One</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">&quot;com.sunxiaping.mapper.UserMapper.findById&quot;</span><span class="token punctuation">,</span>fetchType <span class="token operator">=</span> <span class="token class-name">FetchType</span><span class="token punctuation">.</span><span class="token constant">LAZY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Account</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAccountWithUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre></div><h2 id="mybatis注解实现一对多关联查询" tabindex="-1"><a class="header-anchor" href="#mybatis注解实现一对多关联查询" aria-hidden="true">#</a> Mybatis注解实现一对多关联查询</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Account</span><span class="token punctuation">&gt;</span></span> accountList<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Double</span> money<span class="token punctuation">;</span>
<span class="token punctuation">}</span>




<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AccountMapper</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM \`account\`&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;money&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token class-name">Account</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot; SELECT * FROM \`user\`&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;birthday&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;birthday&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;accountList&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> many <span class="token operator">=</span> <span class="token annotation punctuation">@Many</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">&quot;com.sunxiaping.mapper.AccountMapper.findById&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>


</code></pre></div><h3 id="in-的使用" tabindex="-1"><a class="header-anchor" href="#in-的使用" aria-hidden="true">#</a> in 的使用</h3><div class="language-java" data-ext="java"><pre class="language-java"><code> 
		<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;script&gt;&quot;</span>
		            <span class="token operator">+</span> <span class="token string">&quot;SELECT REALNAME,  file_path filePath ,file_name  FROM tp_uploadfile  WHERE id  IN &quot;</span>
		            <span class="token operator">+</span> <span class="token string">&quot;&lt;foreach item=&#39;item&#39; index=&#39;index&#39; collection=&#39;strList&#39; open=&#39;(&#39; separator=&#39;,&#39; close=&#39;)&#39;&gt;&quot;</span>
		                <span class="token operator">+</span> <span class="token string">&quot;#{item}&quot;</span>
		            <span class="token operator">+</span> <span class="token string">&quot;&lt;/foreach&gt;&quot;</span>
		        <span class="token operator">+</span> <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;filePath&quot;</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;filePath&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
							<span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;REALNAME&quot;</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;fileName&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
							<span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>column <span class="token operator">=</span> <span class="token string">&quot;file_name&quot;</span><span class="token punctuation">,</span> property <span class="token operator">=</span> <span class="token string">&quot;fileEncName&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileBean</span><span class="token punctuation">&gt;</span></span> <span class="token function">getFileList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;strList&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><ul><li><p><code>#{}</code></p><ul><li>使用占位符,最终值为 &#39;&#39; 包裹</li></ul></li><li><p><code>\${}</code></p><ul><li><p>不使用占位符,故而不使用&#39;&#39; 包裹,用在 order by 排序和limit 分页</p></li><li><p>动态sql</p></li><li><p>标签</p></li></ul><p>处理数组</p></li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delMyWeibo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arrar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		delete from my_weibo where weibo_id in
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>array<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			#{item}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol><li>处理模糊查询</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reportName != null and reportName !=&#39;&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				AND a.meeting_name like concat (&#39;%&#39;,#{reportName},&#39;%&#39;)
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="mybatis-param" tabindex="-1"><a class="header-anchor" href="#mybatis-param" aria-hidden="true">#</a> mybatis <code>@param</code></h2><p><code>@Param</code>是 作为Dao层的注解，作用是用于传递参数，从而可以与SQL中的的字段名相对应，一般在<code>2=&lt; 参数 &lt;=5</code>时使用最佳。</p><ol start="2"><li>原始的方法 当只有一个参数时，没什么好说的，传进去一个值也只有一个参数可以匹配。当存在多个参数时，传进去的值就区分不开了，这时可以考虑用Map，例如接口</li></ol><p><code> public List&lt;Role&gt; findRoleByMap(Map&lt;String, Object&gt; parameter);</code></p><ul><li>xml文件</li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findRoleByMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT id,name FROM t_role
    WHERE roleName=#{roleName}
    AND note=#{note}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><p>测试文件</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">RoleMapper</span> roleMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">RoleMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> parameter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
parameter<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;roleName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;剑士&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
parameter<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;note&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;决战紫禁之巅&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Role</span><span class="token punctuation">&gt;</span></span> roles <span class="token operator">=</span> roleMapper<span class="token punctuation">.</span><span class="token function">findRolesByMap</span><span class="token punctuation">(</span>parameter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>使用<code>@Param</code> 很明显上面的缺点就在于可读性差，每次必须阅读他的键，才能明白其中的作用，并且不能限定其传递的数据类型， 下面是使用<code>@Param</code>的情况，需要将接口改为</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Role</span><span class="token punctuation">&gt;</span></span> <span class="token function">findRoleByAnnotation</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;roleName&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> roleName<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;note&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> note<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 这样我们就可以直接传入对应的值了。</span>

<span class="token comment">// 当然也可以使用Java Bean来传递多个参数，定义一个POJO</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RoleParam</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> roleName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> note<span class="token punctuation">;</span>
    <span class="token comment">/*getter和setter*/</span>
<span class="token punctuation">}</span>
<span class="token comment">// 此时接口就变为</span>

<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Role</span><span class="token punctuation">&gt;</span></span> <span class="token function">findRoleByBean</span><span class="token punctuation">(</span><span class="token class-name">RoleParam</span> role<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>这样对应的xml文件与1处的区别就在于id和parameterType发生了变化，id对应的方法和parameterType对应该类的权限定名。</p><p>而使用更多的场景可能是这样的，对应多个POJO</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Role</span><span class="token punctuation">&gt;</span></span> <span class="token function">findRoleByMix</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;roleP&quot;</span><span class="token punctuation">)</span> <span class="token class-name">RoleParam</span> role<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;permissionP&quot;</span><span class="token punctuation">)</span> <span class="token class-name">PermissionParam</span> permission<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>这样就可以进行如下映射</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>findRoleByMix<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>role<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT id,name FROM t_role
    WHERE roleName=#{roleP.roleName}
    AND note=#{rolep.note}
    AND level=#{permissionP.level}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,28),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","mybaits_annotaions.html.vue"]]);export{k as default};
