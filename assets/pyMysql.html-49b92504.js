import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-python" data-ext="py"><pre class="language-python"><code> 
<span class="token comment">#!/usr/bin/python3</span>
<span class="token comment">#coding=utf-8</span>
 
<span class="token keyword">import</span> pymysql
 
<span class="token comment"># Open database connection</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span> <span class="token punctuation">)</span>
 
<span class="token comment"># prepare a cursor object using cursor() method</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># execute SQL query using execute() method.</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT VERSION()&quot;</span><span class="token punctuation">)</span>
 
<span class="token comment"># Fetch a single row using fetchone() method.</span>
data <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;Database version : %s &quot;</span> <span class="token operator">%</span> data<span class="token punctuation">)</span>
 
<span class="token comment"># disconnect from server</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> INSERT</h3><div class="language-python" data-ext="py"><pre class="language-python"><code> 
<span class="token comment">#!/usr/bin/python3</span>
<span class="token comment">#coding=utf-8</span>
 
<span class="token keyword">import</span> pymysql
 
<span class="token comment"># Open database connection</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span> <span class="token punctuation">)</span>
 
<span class="token comment"># prepare a cursor object using cursor() method</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># Prepare SQL query to INSERT a record into the database.</span>
sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;INSERT INTO EMPLOYEE(FIRST_NAME,
   LAST_NAME, AGE, SEX, INCOME)
   VALUES (&#39;Mac&#39;, &#39;Su&#39;, 20, &#39;M&#39;, 5000)&quot;&quot;&quot;</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   <span class="token comment"># Execute the SQL command</span>
   cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
   <span class="token comment"># Commit your changes in the database</span>
   db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
   <span class="token comment"># Rollback in case there is any error</span>
   db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment">## 再次插入一条记录</span>
<span class="token comment"># Prepare SQL query to INSERT a record into the database.</span>
sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;INSERT INTO EMPLOYEE(FIRST_NAME,
   LAST_NAME, AGE, SEX, INCOME)
   VALUES (&#39;Kobe&#39;, &#39;Bryant&#39;, 40, &#39;M&#39;, 8000)&quot;&quot;&quot;</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   <span class="token comment"># Execute the SQL command</span>
   cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
   <span class="token comment"># Commit your changes in the database</span>
   db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
   <span class="token comment"># Rollback in case there is any error</span>
   db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># disconnect from server</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


 
<span class="token comment"># 传递参数 - ..................................</span>
user_id <span class="token operator">=</span> <span class="token string">&quot;test123&quot;</span>
password <span class="token operator">=</span> <span class="token string">&quot;password&quot;</span>
 
con<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;insert into Login values(&quot;%s&quot;, &quot;%s&quot;)&#39;</span> <span class="token operator">%</span> \\
             <span class="token punctuation">(</span>user_id<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">)</span>
 

</code></pre></div><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3><ul><li>fetchone() - 它获取查询结果集的下一行。 结果集是当使用游标对象来查询表时返回的对象。</li><li>fetchall() - 它获取结果集中的所有行。 如果已经从结果集中提取了一些行，则从结果集中检索剩余的行。</li><li>rowcount - 这是一个只读属性，并返回受execute()方法影响的行数。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code> 
<span class="token comment">#!/usr/bin/python3</span>
<span class="token comment">#coding=utf-8</span>
 
<span class="token keyword">import</span> pymysql
 
<span class="token comment"># Open database connection</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span> <span class="token punctuation">)</span>
 
<span class="token comment"># prepare a cursor object using cursor() method</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 按字典返回 </span>
<span class="token comment"># cursor = db.cursor(pymysql.cursors.DictCursor)</span>
 
<span class="token comment"># Prepare SQL query to select a record from the table.</span>
sql <span class="token operator">=</span> &quot;SELECT <span class="token operator">*</span> FROM EMPLOYEE \\
       WHERE INCOME <span class="token operator">&gt;</span> <span class="token operator">%</span>d&quot; <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token comment">#print (sql)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   <span class="token comment"># Execute the SQL command</span>
   cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
   <span class="token comment"># Fetch all the rows in a list of lists.</span>
   results <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">for</span> row <span class="token keyword">in</span> results<span class="token punctuation">:</span>
      <span class="token comment">#print (row)</span>
      fname <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      lname <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
      age <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
      sex <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
      income <span class="token operator">=</span> row<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>
      <span class="token comment"># Now print fetched result</span>
      <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;name = %s %s,age = %s,sex = %s,income = %s&quot;</span> <span class="token operator">%</span> \\
             <span class="token punctuation">(</span>fname<span class="token punctuation">,</span> lname<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> income <span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
   <span class="token keyword">import</span> traceback
   traceback<span class="token punctuation">.</span>print_exc<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
   <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;Error: unable to fetch data&quot;</span><span class="token punctuation">)</span>
 
<span class="token comment"># disconnect from server</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> UPDATE</h3><div class="language-python" data-ext="py"><pre class="language-python"><code> 
<span class="token comment">#!/usr/bin/python3</span>
<span class="token comment">#coding=utf-8</span>
 
<span class="token keyword">import</span> pymysql
 
<span class="token comment"># Open database connection</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span> <span class="token punctuation">)</span>
 
<span class="token comment"># prepare a cursor object using cursor() method</span>
<span class="token comment">#cursor = db.cursor()</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span>pymysql<span class="token punctuation">.</span>cursors<span class="token punctuation">.</span>DictCursor<span class="token punctuation">)</span>
<span class="token comment"># prepare a cursor object using cursor() method</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># Prepare SQL query to UPDATE required records</span>
sql <span class="token operator">=</span> &quot;UPDATE EMPLOYEE SET AGE <span class="token operator">=</span> AGE <span class="token operator">+</span> <span class="token number">1</span> \\
                          WHERE SEX <span class="token operator">=</span> <span class="token string">&#39;%c&#39;</span>&quot; <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   <span class="token comment"># Execute the SQL command</span>
   cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
   <span class="token comment"># Commit your changes in the database</span>
   db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
   <span class="token comment"># Rollback in case there is any error</span>
   db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># disconnect from server</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h3><div class="language-python" data-ext="py"><pre class="language-python"><code> 
<span class="token comment">#!/usr/bin/python3</span>
<span class="token comment">#coding=utf-8</span>
 
<span class="token keyword">import</span> pymysql
 
<span class="token comment"># Open database connection</span>
db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span> <span class="token punctuation">)</span>
 
<span class="token comment"># prepare a cursor object using cursor() method</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># Prepare SQL query to DELETE required records</span>
sql <span class="token operator">=</span> <span class="token string">&quot;DELETE FROM EMPLOYEE WHERE AGE &gt; &#39;%d&#39;&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   <span class="token comment"># Execute the SQL command</span>
   cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
   <span class="token comment"># Commit your changes in the database</span>
   db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
   <span class="token comment"># Rollback in case there is any error</span>
   db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># disconnect from server</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3><div class="language-PY" data-ext="PY"><pre class="language-PY"><code># Prepare SQL query to DELETE required records
sql = &quot;DELETE FROM EMPLOYEE WHERE AGE &gt; &#39;%d&#39;&quot; % (20)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()
</code></pre></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><p>python使用pymysql查询结果返回json pymysql转json关键参数 <strong>cursorclass=cursors.DictCursor</strong></p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql
<span class="token keyword">from</span> pymysql <span class="token keyword">import</span> cursors


<span class="token keyword">def</span> <span class="token function">sql_json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    con <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>host<span class="token operator">=</span>‘<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>’<span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">&#39;oo&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>db<span class="token operator">=</span><span class="token string">&#39;myuser&#39;</span><span class="token punctuation">,</span>cursorclass<span class="token operator">=</span>cursors<span class="token punctuation">.</span>DictCursor<span class="token punctuation">)</span>
    cur <span class="token operator">=</span> con<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sql <span class="token operator">=</span> <span class="token string">&quot;select id,username from user_info &quot;</span>
    cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    all_obj <span class="token operator">=</span> cur<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>all_obj<span class="token punctuation">,</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>all_obj<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    cur<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    con<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    sql_json<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre></div><div class="language-python" data-ext="py"><pre class="language-python"><code>
</code></pre></div><div class="language-python" data-ext="py"><pre class="language-python"><code>
</code></pre></div><div class="language-python" data-ext="py"><pre class="language-python"><code>
</code></pre></div>`,18),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","pyMysql.html.vue"]]);export{k as default};
