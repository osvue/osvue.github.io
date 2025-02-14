import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const o={},t=e(`<ul><li></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看最大连接数</span>
<span class="token keyword">show</span> variables <span class="token operator">like</span> max_connections 
<span class="token comment">-- 修改最大连接数：</span>
<span class="token keyword">set</span> <span class="token keyword">GLOBAL</span> max_connections<span class="token operator">=</span><span class="token number">1000</span>
<span class="token comment">-- 配置好之后再次查看最大连接数的量。</span>


<span class="token comment">-- 保活机制，就是最大睡眠时间。</span>
<span class="token keyword">show</span> <span class="token keyword">global</span> variables <span class="token operator">like</span> <span class="token string">&#39;wait_timeout&#39;</span> 
<span class="token comment">-- 修改一下　 自动杀死线程。</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> wait_timeout<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">;</span> 
<span class="token keyword">show</span> <span class="token keyword">status</span> <span class="token operator">like</span> <span class="token string">&#39;Threads%&#39;</span>

</code></pre></div><ul><li>mysql查看当前实时连接数</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%max_connection%&#39;</span><span class="token punctuation">;</span> <span class="token comment">-- 查看最大连接数</span>

<span class="token keyword">set</span> <span class="token keyword">global</span> max_connections<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">;</span>        <span class="token comment">-- 重新设置最大连接数</span>

    <span class="token keyword">SHOW</span> PROCESSLIST<span class="token punctuation">;</span>  
    <span class="token keyword">SHOW</span> <span class="token keyword">FULL</span> PROCESSLIST<span class="token punctuation">;</span>  
    <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;%max_connections%&#39;</span><span class="token punctuation">;</span>  
    <span class="token keyword">SHOW</span> <span class="token keyword">STATUS</span> <span class="token operator">LIKE</span> <span class="token string">&#39;%Connection%&#39;</span><span class="token punctuation">;</span>  
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> 
    mysql<span class="token operator">&gt;</span> show status like <span class="token string">&#39;Threads%&#39;</span><span class="token punctuation">;</span>  
    +-------------------+-------+  
    <span class="token operator">|</span> Variable_name     <span class="token operator">|</span> Value <span class="token operator">|</span>  
    +-------------------+-------+  
    <span class="token operator">|</span> Threads_cached    <span class="token operator">|</span> <span class="token number">58</span>    <span class="token operator">|</span>  
    <span class="token operator">|</span> Threads_connected <span class="token operator">|</span> <span class="token number">57</span>    <span class="token operator">|</span>   <span class="token comment">###这个数值指的是打开的连接数  </span>
    <span class="token operator">|</span> Threads_created   <span class="token operator">|</span> <span class="token number">3676</span>  <span class="token operator">|</span>   <span class="token comment">###threads_created表示创建过的线程数，如果发现threads_created值过大的话，表明mysql服务器一直在创建线程，这也是比较耗资源</span>
    <span class="token operator">|</span> Threads_running   <span class="token operator">|</span> <span class="token number">4</span>     <span class="token operator">|</span>   <span class="token comment">###这个数值指的是激活的连接数，这个数值一般远低于connected数值  </span>
    +-------------------+-------+  
       
    Threads_connected 跟show processlist结果相同，表示当前连接数。准确的来说，Threads_running是代表当前并发数  
       
    这是是查询数据库当前设置的最大连接数  
    mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;%max_connections%&#39;</span><span class="token punctuation">;</span>  
    +-----------------+-------+  
    <span class="token operator">|</span> Variable_name   <span class="token operator">|</span> Value <span class="token operator">|</span>  
    +-----------------+-------+  
    <span class="token operator">|</span> max_connections <span class="token operator">|</span> <span class="token number">100</span>  <span class="token operator">|</span>  
    +-----------------+-------+  
       
    可以在/etc/my.cnf里面设置数据库的最大连接数  
    max_connections <span class="token operator">=</span> <span class="token number">1000</span>  
</code></pre></div><ul><li><strong>Threads_connected</strong> ：这个数值指的是打开的连接数.</li><li><strong>Threads_running</strong> ：这个数值指的是激活的连接数，这个数值一般远低于connected数值.</li><li><strong>Threads_connected</strong> 跟show processlist结果相同，表示当前连接数。</li><li>准确的来说，Threads_running是代表当前并发数查询数据库当前设置的最大连接数</li></ul><p><code>在/etc/my.cnf里面设置数据库的最大连接数</code></p><div class="language-cnf" data-ext="cnf"><pre class="language-cnf"><code>[mysqld]

max_connections = 1000
</code></pre></div><ul><li><strong>Threads_created</strong>表示创建过的线程数，通过查看<strong>Threads_created</strong>就可以查看MySQL服务器的进程状态</li><li>如果发现<strong>Threads_created</strong>值过大的话，表明MySQL服务器一直在创建线程</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;thread_cache_size&#39;</span><span class="token punctuation">;</span>

+-------------------+-------+

<span class="token operator">|</span> Variable_name     <span class="token operator">|</span> Value <span class="token operator">|</span>

+-------------------+-------+

<span class="token operator">|</span> thread_cache_size <span class="token operator">|</span> <span class="token number">100</span>   <span class="token operator">|</span>

+-------------------+-------+

<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token comment"># 命令：show processlist; </span>
<span class="token comment"># 如果是root帐号，你能看到所有用户的当前连接。如果是其它普通帐号，只能看到自己占用的连接。 </span>
<span class="token comment"># show processlist命令只列出前100条，如果想全列出请使用show full processlist; </span>
<span class="token comment"># mysql&gt; show processlist;</span>
<span class="token comment"># </span>
<span class="token comment"># 命令：show status;</span>
<span class="token comment"># </span>
<span class="token comment"># mysql&gt;show status like &#39;%变量名%&#39;;</span>
<span class="token comment"># </span>
<span class="token comment"># 变量名如下：</span>
<span class="token comment"># Aborted_clients 由于客户没有正确关闭连接已经死掉，已经放弃的连接数量。 </span>
<span class="token comment"># Aborted_connects 尝试已经失败的MySQL服务器的连接的次数。 </span>
<span class="token comment"># Connections 试图连接MySQL服务器的次数。 </span>
<span class="token comment"># Created_tmp_tables 当执行语句时，已经被创造了的隐含临时表的数量。 </span>
<span class="token comment"># Delayed_insert_threads 正在使用的延迟插入处理器线程的数量。 </span>
<span class="token comment"># Delayed_writes 用INSERT DELAYED写入的行数。 </span>
<span class="token comment"># Delayed_errors 用INSERT DELAYED写入的发生某些错误(可能重复键值)的行数。 </span>
<span class="token comment"># Flush_commands 执行FLUSH命令的次数。 </span>
<span class="token comment"># Handler_delete 请求从一张表中删除行的次数。 </span>
<span class="token comment"># Handler_read_first 请求读入表中第一行的次数。 </span>
<span class="token comment"># Handler_read_key 请求数字基于键读行。 </span>
<span class="token comment"># Handler_read_next 请求读入基于一个键的一行的次数。 </span>
<span class="token comment"># Handler_read_rnd 请求读入基于一个固定位置的一行的次数。 </span>
<span class="token comment"># Handler_update 请求更新表中一行的次数。 </span>
<span class="token comment"># Handler_write 请求向表中插入一行的次数。 </span>
<span class="token comment"># Key_blocks_used 用于关键字缓存的块的数量。 </span>
<span class="token comment"># Key_read_requests 请求从缓存读入一个键值的次数。 </span>
<span class="token comment"># Key_reads 从磁盘物理读入一个键值的次数。 </span>
<span class="token comment"># Key_write_requests 请求将一个关键字块写入缓存次数。 </span>
<span class="token comment"># Key_writes 将一个键值块物理写入磁盘的次数。 </span>
<span class="token comment"># Max_used_connections 同时使用的连接的最大数目。 </span>
<span class="token comment"># Not_flushed_key_blocks 在键缓存中已经改变但是还没被清空到磁盘上的键块。 </span>
<span class="token comment"># Not_flushed_delayed_rows 在INSERT DELAY队列中等待写入的行的数量。 </span>
<span class="token comment"># Open_tables 打开表的数量。 </span>
<span class="token comment"># Open_files 打开文件的数量。 </span>
<span class="token comment"># Open_streams 打开流的数量(主要用于日志记载） </span>
<span class="token comment"># Opened_tables 已经打开的表的数量。 </span>
<span class="token comment"># Questions 发往服务器的查询的数量。 </span>
<span class="token comment"># Slow_queries 要花超过long_query_time时间的查询数量。 </span>
<span class="token comment"># Threads_connected 当前打开的连接的数量。 </span>
<span class="token comment"># Threads_running 不在睡眠的线程数量。 </span>
<span class="token comment"># Uptime 服务器工作了多长时间，单位秒。　</span>
</code></pre></div>`,10),p=[t];function c(l,r){return s(),a("div",null,p)}const m=n(o,[["render",c],["__file","conn.html.vue"]]);export{m as default};
