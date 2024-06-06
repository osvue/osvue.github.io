import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const o={},p=t(`<ul><li><code>pip install pyMysql</code></li></ul><ul><li>Python操作数据库的过程：<code>创建连接-&gt;获取游标-&gt;执行命令-&gt;关闭游标-&gt;关闭连接</code></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> pymysql <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">def</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

   <span class="token keyword">return</span> connect<span class="token punctuation">(</span>
        user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> 
        password<span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        database<span class="token operator">=</span><span class="token string">&#39;ssm&#39;</span><span class="token punctuation">,</span>
         port<span class="token operator">=</span><span class="token number">3306</span>

    <span class="token punctuation">)</span>


 <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> con<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
            <span class="token comment">#一、查询</span>
            sql <span class="token operator">=</span> <span class="token string">&quot;select * from act_user;&quot;</span>
            <span class="token comment">#执行SQL语句</span>
            <span class="token comment">#执行后的结果都保存在cursor中</span>
            cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
 
            <span class="token comment">#1-从cursor中获取全部数据用fetchall</span>
            <span class="token comment"># datas = cursor.fetchall()</span>
            <span class="token comment"># print(&quot;获取的数据：\\n&quot;,datas)</span>
 
            <span class="token comment">#2-从cursor中获取一条数据用fetchone</span>
            <span class="token comment"># data = cursor.fetchone()</span>
            <span class="token comment"># print(&quot;获取的数据：\\n&quot;,data)</span>
 
            <span class="token comment">#3-想要从cursor中获取几条数据用fetchmany</span>
            datas <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchmany<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;获取的数据：\\n&quot;</span><span class="token punctuation">,</span>datas<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数据库异常：\\n&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span>
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        <span class="token comment">#不管成功还是失败，都要关闭数据库连接</span>
        con<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span> 




</code></pre></div><ul><li>fetchall：获取当前SQL语句能查出来的全部数据，元组套元组；</li><li>fetchone：每次获取一条数据。但是获取到这条数据后，指针会往后移一行数据，返回一个元组；</li><li>fetchmany：直接告诉它想要多少条数据。</li></ul><h3 id="插入一条数据" tabindex="-1"><a class="header-anchor" href="#插入一条数据" aria-hidden="true">#</a> 插入一条数据</h3><p>说明：除了查询，其他操作都需要<strong>commit；commit</strong>对应<strong>rollback</strong>，回滚到上次提交的地方。​​​​​​​</p>`,6),e=[p];function c(l,u){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","database.html.vue"]]);export{k as default};
