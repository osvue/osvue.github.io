import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<p>在使用JdbcTemplate的时候，如果要使用参数，那么需要通过在SQL中使用?做占位符。</p><p>NamedParameterJdbcTemplate提供了一个更加直观的方式来定义SQL中的占位符，即通过:变量名的形式。</p><p>可以通过Map或者BeanPropertySqlParameterSource传递参数值：</p><p>Map直接设置参数值； 例如：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select count(*) from tb_user where username = :username and age = :age&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Michael&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> count <span class="token operator">=</span> namedParameterJdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForObject</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><ul><li><code>BeanPropertySqlParameterSource</code>可以将实体对象转换成参数值，注意参数变量名要和实体对象中的属性名对应</li></ul><p>示例:</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select count(*) from tb_user where username = :username and age = :age&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">User</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;Michael&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlParameterSource</span> param <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanPropertySqlParameterSource</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> count <span class="token operator">=</span> namedParameterJdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForObject</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> param<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>查询多条数据，每条数据都以Map形式返回，整个结果是<code>List&lt;Map&lt;String, Object&gt;&gt;</code></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select user_id, username, age from tb_user where age = :age&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonMap</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> resultMapList <span class="token operator">=</span> namedParameterJdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="插入、更新、删除" tabindex="-1"><a class="header-anchor" href="#插入、更新、删除" aria-hidden="true">#</a> 插入、更新、删除</h2><p>在<code>JdbcTemplate</code>中，数据的插入、更新、删除操作都是通过<code>update(...)</code>来完成的。</p><h3 id="插入单条数据" tabindex="-1"><a class="header-anchor" href="#插入单条数据" aria-hidden="true">#</a> 插入单条数据</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into tb_user(user_id, username, mobile, age, create_time) values (:userId, :username, :mobile, :age, :createTime)&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">User</span> query <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">userId</span><span class="token punctuation">(</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token string">&quot;新用户A&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">mobile</span><span class="token punctuation">(</span><span class="token string">&quot;1234567&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">createTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlParameterSource</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanPropertySqlParameterSource</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> successCount <span class="token operator">=</span> namedParameterJdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="更新单条数据" tabindex="-1"><a class="header-anchor" href="#更新单条数据" aria-hidden="true">#</a> 更新单条数据</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update tb_user set username = :username where user_id = :userId&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">userId</span><span class="token punctuation">(</span><span class="token string">&quot;46a8247fbffc46c3a591961351fa3277&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token string">&quot;更新用户名&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlParameterSource</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanPropertySqlParameterSource</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> successCount <span class="token operator">=</span> namedParameterJdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="删除单条数据" tabindex="-1"><a class="header-anchor" href="#删除单条数据" aria-hidden="true">#</a> 删除单条数据</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;delete from tb_user where user_id = :userId&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">userId</span><span class="token punctuation">(</span><span class="token string">&quot;ad6aaa9e4f654ab683d455fa31437b88&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlParameterSource</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanPropertySqlParameterSource</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> successCount <span class="token operator">=</span> namedParameterJdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>`,18),o=[e];function c(u,l){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","NamedJdbcTemplate.html.vue"]]);export{r as default};