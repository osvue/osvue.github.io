import{_ as s,p as n,q as a,a1 as p}from"./framework-d81ad7e5.js";const e={},t=p(`<h3 id="存储过程-存储函数" tabindex="-1"><a class="header-anchor" href="#存储过程-存储函数" aria-hidden="true">#</a> 存储过程&amp;存储函数</h3><p>MySQL从5.0版本开始支持存储过程和函数。存储过程和函数能够将复杂的SQL逻辑封装在一起，应用程序无须关注存储过程和函数内部复杂的SQL逻辑，而只需要简单地调用存储过程和函数即可。</p><h4 id="存储过程概述" tabindex="-1"><a class="header-anchor" href="#存储过程概述" aria-hidden="true">#</a> 存储过程概述</h4><h5 id="理解" tabindex="-1"><a class="header-anchor" href="#理解" aria-hidden="true">#</a> 理解</h5><p><strong>含义</strong>：存储过程的英文是 <code>Stored Procedure</code> 。它的思想很简单，就是一组经过 <code>预先编译</code>的SQL语句的封装。</p><p>执行过程：存储过程预先存储在 MySQL 服务器上，需要执行的时候，客户端只需要向服务器端发出调用存储过程的命令，服务器端就可以把预先存储好的这一系列 SQL 语句全部执行。</p><h5 id="好处" tabindex="-1"><a class="header-anchor" href="#好处" aria-hidden="true">#</a> 好处：</h5><ol><li>简化操作，提高了sql语句的重用性，减少了开发程序员的压力</li><li>减少操作过程中的失误，提高效率</li><li>减少网络传输量（客户端不需要把所有的 SQL 语句通过网络发给服务器）</li><li>减少了 SQL 语句暴露在网上的风险，也提高了数据查询的安全性</li></ol><h5 id="和视图、函数的对比" tabindex="-1"><a class="header-anchor" href="#和视图、函数的对比" aria-hidden="true">#</a> 和视图、函数的对比：</h5><p>它和视图有着同样的优点，清晰、安全，还可以减少网络传输量。不过它和视图不同，视图是<code>虚拟表</code>，通常不对底层数据表直接操作，而存储过程是程序化的 SQL，可以<code>直接操作底层数据表</code>，相比于面向集合的操作方式，能够实现一些更复杂的数据处理。</p><p>一旦存储过程被创建出来，使用它就像使用函数一样简单，我们直接通过调用存储过程名即可。相较于函数，存储过程是<code>没有返回值</code>的。</p><h5 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h5><p>存储过程的参数类型可以是IN、OUT和INOUT。根据这点分类如下：</p><ol><li>没有参数（无参数无返回）</li><li>仅仅带 IN 类型（有参数无返回）</li><li>仅仅带 OUT 类型（无参数有返回）</li><li>既带 IN 又带 OUT（有参数有返回）</li><li>带 INOUT（有参数有返回）</li></ol><p>注意：IN、OUT、INOUT 都可以在一个存储过程中带多个。</p><h4 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程</h4><h5 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h5><p>语法：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> 存储过程名<span class="token punctuation">(</span><span class="token operator">IN</span><span class="token operator">|</span><span class="token keyword">OUT</span><span class="token operator">|</span><span class="token keyword">INOUT</span> 参数名 参数类型<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>characteristics <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token keyword">BEGIN</span>
	存储过程体

<span class="token keyword">END</span>
</code></pre></div><p>类似于Java中的方法：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>修饰符 返回类型 方法名<span class="token punctuation">(</span>参数类型 参数名<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>{

	方法体<span class="token punctuation">;</span>
}
</code></pre></div><p>说明：</p><ol><li>参数前面的符号的意思</li></ol><ul><li><p><strong>IN</strong>：当前参数为输入参数，也就表示入参；</p><p>存储过程只是读取这个参数的值。如果没有定义参数种类，<code>默认就是 IN</code>，表示输入参数。</p></li><li><p><code>OUT</code>：当前参数为输出参数，也就是表示出参；</p></li></ul><p>执行完成之后，调用这个存储过程的客户端或者应用程序就可以读取这个参数返回的值了。</p><ul><li><code>INOUT</code>：当前参数既可以为输入参数，也可以为输出参数。</li></ul><ol start="2"><li><p>形参类型可以是 MySQL数据库中的任意类型。</p></li><li><p><code>characteristics</code> 表示创建存储过程时指定的对存储过程的约束条件，其取值信息如下：</p></li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">LANGUAGE</span> <span class="token keyword">SQL</span>
<span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">NOT</span><span class="token punctuation">]</span> <span class="token keyword">DETERMINISTIC</span>
<span class="token operator">|</span> { <span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">NO</span> <span class="token keyword">SQL</span> <span class="token operator">|</span> <span class="token keyword">READS</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> <span class="token operator">|</span> <span class="token keyword">MODIFIES</span> <span class="token keyword">SQL</span> <span class="token keyword">DATA</span> }
<span class="token operator">|</span> <span class="token keyword">SQL</span> SECURITY { <span class="token keyword">DEFINER</span> <span class="token operator">|</span> <span class="token keyword">INVOKER</span> }
<span class="token operator">|</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;string&#39;</span>

</code></pre></div><ul><li><p><code>LANGUAGE SQL</code>：说明存储过程执行体是由SQL语句组成的，当前系统支持的语言为SQL。</p></li><li><p>[NOT] DETERMINISTIC：指明存储过程执行的结果是否确定。DETERMINISTIC表示结果是确定的。每次执行存储过程时，相同的输入会得到相同的输出。NOT DETERMINISTIC表示结果是不确定的，相同的输入可能得到不同的输出。如果没有指定任意一个值，默认为NOT DETERMINISTIC。</p></li><li><p><code>{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }</code>：指明子程序使用SQL语句的限制.</p><ol><li>CONTAINS SQL表示当前存储过程的子程序包含SQL语句，但是并不包含读写数据的SQL语句；</li><li>NO SQL表示当前存储过程的子程序中不包含任何SQL语句；</li><li>READS SQL DATA表示当前存储过程的子程序中包含读数据的SQL语句；</li><li>MODIFIES SQL DATA表示当前存储过程的子程序中包含写数据的SQL语句。</li><li>默认情况下，系统会指定为CONTAINS SQL。</li></ol></li><li><p><code>SQL SECURITY { DEFINER | INVOKER }</code>：执行当前存储过程的权限，即指明哪些用户能够执行当前存储过程</p><ol><li><code>DEFINER</code>表示只有当前存储过程的创建者或者定义者才能执行当前存储过程；</li><li><code>INVOKER</code>表示拥有当前存储过程的访问权限的用户能够执行当前存储过程。</li><li>如果没有设置相关的值，则MySQL默认指定值为DEFINER。</li></ol></li><li><p><code>COMMENT &#39;string&#39;</code>：注释信息，可以用来描述存储过程。</p></li></ul><ol start="4"><li>存储过程体中可以有多条 SQL 语句，如果仅仅一条SQL 语句，则可以省略 BEGIN 和 END</li></ol><p>编写存储过程并不是一件简单的事情，可能存储过程中需要复杂的 SQL 语句。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span> <span class="token keyword">BEGIN</span>…<span class="token keyword">END</span>：<span class="token keyword">BEGIN</span>…<span class="token keyword">END</span> 中间包含了多个语句，每个语句都以（<span class="token punctuation">;</span>）号为结束符。
<span class="token number">2.</span> <span class="token keyword">DECLARE</span>：<span class="token keyword">DECLARE</span> 用来声明变量，使用的位置在于 <span class="token keyword">BEGIN</span>…<span class="token keyword">END</span> 语句中间，而且需要在其他语句使用之前进行变量的声明。
<span class="token number">3.</span> <span class="token keyword">SET</span>：赋值语句，用于对变量进行赋值。
<span class="token number">4.</span> <span class="token keyword">SELECT</span>… <span class="token keyword">INTO</span>：把从数据表中查询的结果存放到变量中，也就是为变量赋值。
</code></pre></div><ol start="5"><li>需要设置新的结束标记</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> 新的结束标记
</code></pre></div><p>因为MySQL默认的语句结束符号为分号‘;’。为了避免与存储过程中SQL语句结束符相冲突，需要使用DELIMITER改变存储过程的结束符。</p><p>比如：“DELIMITER //”语句的作用是将MySQL的结束符设置为//，并以“END //”结束存储过程。存储过程定义完毕之后再使用“DELIMITER ;”恢复默认结束符。DELIMITER也可以指定其他符号作为结束符。</p><p>当使用DELIMITER命令时，应该避免使用反斜杠（‘\\’）字符，因为反斜线是MySQL的转义字符。</p><p>示例：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> 存储过程名<span class="token punctuation">(</span><span class="token operator">IN</span><span class="token operator">|</span><span class="token keyword">OUT</span><span class="token operator">|</span><span class="token keyword">INOUT</span> 参数名  参数类型<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>characteristics <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">sql</span>语句<span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">sql</span>语句<span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">END</span> $
</code></pre></div><h5 id="代码举例" tabindex="-1"><a class="header-anchor" href="#代码举例" aria-hidden="true">#</a> 代码举例</h5><p>举例1：创建存储过程select_all_data()，查看 emps 表的所有数据</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> select_all_data<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
	
<span class="token keyword">END</span> $

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

</code></pre></div><p>举例2：创建存储过程avg_employee_salary()，返回所有员工的平均工资</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> avg_employee_salary <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_salary <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

</code></pre></div><p>举例3：创建存储过程show_max_salary()，用来查看“emps”表的最高薪资值。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_max_salary<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">LANGUAGE</span> <span class="token keyword">SQL</span>
	<span class="token operator">NOT</span> <span class="token keyword">DETERMINISTIC</span>
	<span class="token keyword">CONTAINS</span> <span class="token keyword">SQL</span>
	<span class="token keyword">SQL</span> SECURITY <span class="token keyword">DEFINER</span>
	<span class="token keyword">COMMENT</span> <span class="token string">&#39;查看最高薪资&#39;</span>
	<span class="token keyword">BEGIN</span>
		<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

</code></pre></div><p>举例4：创建存储过程show_min_salary()，查看“emps”表的最低薪资值。并将最低薪资通过OUT参数“ms”输出</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_min_salary<span class="token punctuation">(</span><span class="token keyword">OUT</span> ms <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
	<span class="token keyword">BEGIN</span>
		<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">INTO</span> ms <span class="token keyword">FROM</span> emps<span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

</code></pre></div><p>举例5：创建存储过程show_someone_salary()，查看“emps”表的某个员工的薪资，并用IN参数empname输入员工姓名。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_someone_salary<span class="token punctuation">(</span><span class="token operator">IN</span> empname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">BEGIN</span>
		<span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> emps <span class="token keyword">WHERE</span> ename <span class="token operator">=</span> empname<span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

</code></pre></div><p>举例6：创建存储过程show_someone_salary2()，查看“emps”表的某个员工的薪资，并用IN参数empname输入员工姓名，用OUT参数empsalary输出员工薪资。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> show_someone_salary2<span class="token punctuation">(</span><span class="token operator">IN</span> empname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">OUT</span> empsalary <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
	<span class="token keyword">BEGIN</span>
		<span class="token keyword">SELECT</span> salary <span class="token keyword">INTO</span> empsalary <span class="token keyword">FROM</span> emps <span class="token keyword">WHERE</span> ename <span class="token operator">=</span> empname<span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

</code></pre></div><p>举例7：创建存储过程show_mgr_name()，查询某个员工领导的姓名，并用INOUT参数“empname”输入员工姓名，输出领导的姓名。</p><h3 id="调用存储过程" tabindex="-1"><a class="header-anchor" href="#调用存储过程" aria-hidden="true">#</a> 调用存储过程</h3><h5 id="调用格式" tabindex="-1"><a class="header-anchor" href="#调用格式" aria-hidden="true">#</a> 调用格式</h5><p>存储过程有多重调用方法。存储过程必须使用CALL语句调用，并且存储过程和数据库相关，如果要执行其他数据库中的存储过程，需要指定数据库名，例如CALL dbname.procname。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> 存储过程名<span class="token punctuation">(</span>实参列表<span class="token punctuation">)</span>
</code></pre></div><p>格式：</p><p>1、调用in模式的参数：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> sp1<span class="token punctuation">(</span><span class="token string">&#39;值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>2、调用out模式的参数：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token variable">@name</span><span class="token punctuation">;</span>
<span class="token keyword">CALL</span> sp1<span class="token punctuation">(</span><span class="token variable">@name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@name</span><span class="token punctuation">;</span>

</code></pre></div><p>3、调用inout模式的参数</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token variable">@name</span><span class="token operator">=</span>值<span class="token punctuation">;</span>
<span class="token keyword">CALL</span> sp1<span class="token punctuation">(</span><span class="token variable">@name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@name</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><ul><li>声明语句分隔符 使用DELIMITER关键字将分隔符设置为<code>“$$”或“//”</code></li><li>过程体的标识</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>
<span class="token comment">//如果没有声明分隔符，编译器会将其视为普通SQL语句进行处理，编译过程会报错</span>
<span class="token comment">//正确用法：首先用DELIMITER关键字声明当前段的分隔符，最后要将分隔符还原为默认字符</span>

<span class="token keyword">BEGIN</span>
    <span class="token comment"># … </span>
<span class="token keyword">END</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span> 
<span class="token comment">#END后，必须使用DELIMITER语句中设置的分隔符为结束</span>
</code></pre></div><ul><li>demo</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#如果存在则删除</span>
<span class="token keyword">drop</span> <span class="token keyword">procedure</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> proc_patient_countPatient<span class="token punctuation">;</span> 
<span class="token keyword">delimiter</span><span class="token comment">//      #声明分隔符</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> proc_patient_countPatient<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span> <span class="token comment">#过程体开始 </span>
    <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">as</span> totalCount <span class="token keyword">from</span> patient<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token comment">// #过程体结束 </span>
<span class="token keyword">delimiter</span><span class="token punctuation">;</span>       <span class="token comment">#恢复默认分割符</span>
​
<span class="token comment">#调用</span>
<span class="token keyword">call</span> proc_patient_countPatient<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>存储过程参数设置</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span><span class="token operator">IN</span> <span class="token operator">|</span> <span class="token keyword">OUT</span> <span class="token operator">|</span> <span class="token keyword">INOUT</span><span class="token punctuation">]</span> 参数名 数据类型
<span class="token keyword">DELIMITER</span> <span class="token comment">//      #声明分隔符</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc_patient_countPatient2<span class="token punctuation">(</span><span class="token keyword">OUT</span> patientNum <span class="token keyword">INT</span><span class="token punctuation">)</span>
    <span class="token comment">#省略...</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>      <span class="token comment">#恢复默认分隔符</span>
</code></pre></div><ul><li>存储过程中的变量</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> 变量名<span class="token punctuation">[</span><span class="token punctuation">,</span>变量名<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> 数据类型 <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span> 值<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">-- 给变量进行赋值</span>

<span class="token keyword">SET</span> 变量名 <span class="token operator">=</span> 表达式值<span class="token punctuation">[</span><span class="token punctuation">,</span>变量名<span class="token operator">=</span>表达式<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>
<span class="token comment">-- 声明交易时间变量trade_time，并设置默认值为2020-07-10</span>

<span class="token keyword">DECLARE</span> trade_time <span class="token keyword">date</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;2020-07-10&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 设置变量total的值为100</span>

<span class="token keyword">SET</span> total<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
</code></pre></div><p>注意事项：</p><ul><li><strong>定义存储过程时，所有局部变量的声明一定要放在存储过程体的开始；否则，会提示语法错误</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建、调用存储过程示例</span>
<span class="token comment">-- 使用存储过程查询获取并输出病人总人数</span>
<span class="token keyword">delimiter</span> <span class="token comment">//</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> proc_patient_countPatient2<span class="token punctuation">(</span><span class="token keyword">out</span> patientCount <span class="token keyword">int</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
	<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">into</span> patientCount <span class="token keyword">from</span> patient<span class="token punctuation">;</span>
<span class="token keyword">end</span> <span class="token comment">//</span>
<span class="token keyword">delimiter</span> <span class="token punctuation">;</span>

<span class="token comment">#调用并输出病人总数</span>
<span class="token keyword">call</span> proc_patient_countPatient2<span class="token punctuation">(</span><span class="token variable">@patientCount</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token variable">@patientCount</span> <span class="token keyword">as</span> <span class="token string">&#39;病人总数&#39;</span><span class="token punctuation">;</span> 





<span class="token keyword">delimiter</span> <span class="token comment">//</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> proc_exam_GetLastExamDateByPatientNameAndDepID
<span class="token punctuation">(</span><span class="token operator">in</span> patient_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">in</span> dep_id <span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">out</span> last_exam_date <span class="token keyword">datetime</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
  <span class="token keyword">declare</span> patient_id <span class="token keyword">int</span><span class="token punctuation">;</span>  <span class="token comment">#声明局部变量</span>
	
  <span class="token keyword">select</span> patientid <span class="token keyword">into</span> patient_id <span class="token keyword">from</span> patient 
  <span class="token keyword">where</span> patientname<span class="token operator">=</span> patient_name<span class="token punctuation">;</span>
	
  <span class="token keyword">select</span> patient_id<span class="token punctuation">;</span> <span class="token comment">#输出病人的id</span>
  
  <span class="token comment">#使用SELECT INTO语句可以一次给多个变量赋值</span>
  <span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>examdate<span class="token punctuation">)</span> <span class="token keyword">into</span> last_exam_date 
  <span class="token keyword">from</span> prescription 
  <span class="token keyword">where</span> patientid <span class="token operator">=</span> patient_id <span class="token operator">and</span> depid <span class="token operator">=</span> dep_id<span class="token punctuation">;</span>
<span class="token keyword">end</span> <span class="token comment">//</span>
<span class="token keyword">delimiter</span> <span class="token punctuation">;</span>



<span class="token comment">-- 调用</span>

<span class="token comment">#设置用户变量@patientName为&#39;夏颖&#39;</span>
<span class="token keyword">set</span> <span class="token variable">@patientName</span><span class="token operator">=</span><span class="token string">&#39;夏颖&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#设置用户变量@dep_id为1 </span>
<span class="token keyword">set</span> <span class="token variable">@dep_id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">#调用存储过程</span>
<span class="token keyword">call</span> proc_exam_GetLastExamDateByPatientNameAndDepID
<span class="token punctuation">(</span><span class="token variable">@patientName</span><span class="token punctuation">,</span><span class="token variable">@dep_id</span><span class="token punctuation">,</span><span class="token variable">@last_exam_date</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#输出病人在某科室最后一次检查时间</span>
<span class="token keyword">select</span> <span class="token variable">@last_exam_date</span><span class="token punctuation">;</span>

</code></pre></div><h4 id="设置用户执行存储过程的权限" tabindex="-1"><a class="header-anchor" href="#设置用户执行存储过程的权限" aria-hidden="true">#</a> 设置用户执行存储过程的权限</h4><p>通过<code>DEFINER和SQL SECURITY</code>特性控制存储过程的执行权限</p><p>语法：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span>
    <span class="token punctuation">[</span><span class="token keyword">DEFINER</span> <span class="token operator">=</span> { <span class="token keyword">user</span> <span class="token operator">|</span> <span class="token keyword">CURRENT_USER</span> }<span class="token punctuation">]</span>  <span class="token comment">#定义DEFINER,默认为当前用户</span>
<span class="token keyword">PROCEDURE</span> 存储过程名
    <span class="token punctuation">[</span><span class="token keyword">SQL</span> SECURITY { <span class="token keyword">DEFINER</span> <span class="token operator">|</span> <span class="token keyword">INVOKER</span> } <span class="token operator">|</span> …<span class="token punctuation">]</span><span class="token comment">#指定DEFINER或INVOKER权限</span>
<span class="token keyword">BEGIN</span>
    …
<span class="token keyword">END</span>
</code></pre></div><ul><li>DEFINER</li></ul><p>默认<code>DEFINER = CURRENT_USER</code></p><p>检查 <code>‘user_name’@‘host_name’</code> 的权限</p><ul><li>INVOKER</li></ul><p>执行存储过程时，会检查调用者的权限</p><p>注意事项：</p><ol><li><p>如果省略sql security特性，则使用definer属性指定调用者，且调用者必须具有EXECUTE权限，必须在mysql.user表中</p></li><li><p>如果将sql security特性指定为invoker，则definer属性无效</p></li></ol><h3 id="存储过程的控制语句" tabindex="-1"><a class="header-anchor" href="#存储过程的控制语句" aria-hidden="true">#</a> 存储过程的控制语句</h3><ol><li>条件语句 <ul><li>IF-ELSEIF-ELSE条件语句</li></ul></li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">IF</span> 条件 <span class="token keyword">THEN</span> 语句列表
   <span class="token punctuation">[</span><span class="token keyword">ELSEIF</span> 条件 <span class="token keyword">THEN</span> 语句列表<span class="token punctuation">]</span>
   <span class="token punctuation">[</span><span class="token keyword">ELSE</span> 语句列表<span class="token punctuation">]</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>CASE条件语句</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">CASE</span>
   <span class="token keyword">WHEN</span> 条件 <span class="token keyword">THEN</span> 语句列表
   <span class="token punctuation">[</span><span class="token keyword">WHEN</span> 条件 <span class="token keyword">THEN</span> 语句列表<span class="token punctuation">]</span>
   <span class="token punctuation">[</span><span class="token keyword">ELSE</span> 语句列表<span class="token punctuation">]</span>
<span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>
<span class="token comment">-- 语法2：</span>

<span class="token keyword">CASE</span> 列名
   <span class="token keyword">WHEN</span> 条件值 <span class="token keyword">THEN</span> 语句列表
   <span class="token punctuation">[</span><span class="token keyword">WHEN</span> 条件值 <span class="token keyword">THEN</span> 语句列表<span class="token punctuation">]</span>
   <span class="token punctuation">[</span><span class="token keyword">ELSE</span> 语句列表<span class="token punctuation">]</span>
<span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span> 
</code></pre></div><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#示例11：使用CASE实现计算病人获得的返还医疗费用</span>
<span class="token keyword">create</span> <span class="token keyword">definer</span><span class="token operator">=</span><span class="token identifier"><span class="token punctuation">\`</span>root<span class="token punctuation">\`</span></span><span class="token variable">@\`localhost\`</span> <span class="token keyword">procedure</span> <span class="token identifier"><span class="token punctuation">\`</span>proc_income_calsubsidy<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span><span class="token operator">in</span> i_patientid <span class="token keyword">int</span> <span class="token punctuation">,</span><span class="token operator">in</span> i_year <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">out</span> o_subsidy <span class="token keyword">float</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
	<span class="token keyword">declare</span> t_totalcost <span class="token keyword">float</span><span class="token punctuation">;</span>
	<span class="token keyword">declare</span> t_income <span class="token keyword">float</span> <span class="token keyword">default</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>checkitemcost<span class="token punctuation">)</span> <span class="token keyword">into</span> t_totalcost <span class="token keyword">from</span> prescription p1 
	<span class="token keyword">inner</span> <span class="token keyword">join</span> checkitem <span class="token keyword">on</span> p1<span class="token punctuation">.</span>checkitemid <span class="token operator">=</span> checkitem<span class="token punctuation">.</span>checkitemid 
	<span class="token keyword">where</span> patientid <span class="token operator">=</span> i_patientid 
	<span class="token operator">and</span> examdate <span class="token operator">&gt;=</span> concat<span class="token punctuation">(</span>i_year<span class="token punctuation">,</span><span class="token string">&#39;-01-01&#39;</span><span class="token punctuation">)</span> 
	<span class="token operator">and</span> examdate <span class="token operator">&lt;=</span> concat<span class="token punctuation">(</span>i_year<span class="token punctuation">,</span><span class="token string">&#39;-12-31&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">select</span> income <span class="token keyword">into</span> t_income <span class="token keyword">from</span> subsidy 
	<span class="token keyword">where</span> patientid <span class="token operator">=</span> i_patientid<span class="token punctuation">;</span>
<span class="token comment">#根据规则计算返还金额</span>
	<span class="token keyword">case</span> 
		<span class="token keyword">when</span> t_income <span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">and</span> t_income <span class="token operator">&lt;</span> <span class="token number">5000</span> <span class="token keyword">then</span> <span class="token keyword">set</span> o_subsidy <span class="token operator">=</span> t_totalcost <span class="token operator">*</span> <span class="token number">0.2</span><span class="token punctuation">;</span>
		<span class="token keyword">when</span> t_income <span class="token operator">&lt;</span> <span class="token number">1000</span> <span class="token keyword">then</span> <span class="token keyword">set</span> o_subsidy <span class="token operator">=</span> t_totalcost <span class="token operator">*</span> <span class="token number">0.15</span><span class="token punctuation">;</span>
		<span class="token keyword">when</span> t_income <span class="token operator">&lt;</span> <span class="token number">30000</span> <span class="token keyword">then</span> <span class="token keyword">set</span> o_subsidy <span class="token operator">=</span> t_totalcost <span class="token operator">*</span> <span class="token number">0.05</span><span class="token punctuation">;</span>
		<span class="token keyword">when</span> t_income <span class="token operator">&gt;=</span> <span class="token number">30000</span> <span class="token operator">or</span> t_income <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token keyword">set</span> o_subsidy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">end</span> <span class="token keyword">case</span><span class="token punctuation">;</span>
<span class="token keyword">end</span>


</code></pre></div><ol start="2"><li>循环语句 <ul><li>WHILE循环</li></ul></li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>label:<span class="token punctuation">]</span> <span class="token keyword">WHILE</span> 条件 <span class="token keyword">DO</span>
   语句列表
<span class="token keyword">END</span> <span class="token keyword">WHILE</span> <span class="token punctuation">[</span>label<span class="token punctuation">]</span>

<span class="token comment">-- label为标号，用于区分不同的循环，可省略  用在begin、repeat、while 或者loop 语句前</span>
</code></pre></div><ul><li>LOOP循环 不需判断初始条件，直接执行循环体</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>label:<span class="token punctuation">]</span> <span class="token keyword">LOOP</span>
   语句列表
<span class="token keyword">END</span> <span class="token keyword">LOOP</span> <span class="token punctuation">[</span>label<span class="token punctuation">]</span> <span class="token punctuation">;</span>
</code></pre></div><ul><li>REPEAT循环</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#与Java的do-while循环语句类似</span>
<span class="token punctuation">[</span>label:<span class="token punctuation">]</span> <span class="token keyword">REPEAT</span> 
   语句列表
UNTIL 条件
<span class="token keyword">END</span> <span class="token keyword">REPEAT</span> <span class="token punctuation">[</span>label<span class="token punctuation">]</span>
</code></pre></div><p>与LOOP循环语句相比较</p><p>相同点：不需要初始条件直接进入循环体</p><p>不同点：REPEAT语句可以设置退出条件</p><p>使用REPEAT循环语句编码实现</p><p>根据输入的行数要求，向测试表test中批量插入测试数据 迭代语句</p><h3 id="查看数据库中已创建的存储过程" tabindex="-1"><a class="header-anchor" href="#查看数据库中已创建的存储过程" aria-hidden="true">#</a> 查看数据库中已创建的存储过程</h3><p>语法：</p><p><code>show procedure status;</code></p><h3 id="修改存储过程" tabindex="-1"><a class="header-anchor" href="#修改存储过程" aria-hidden="true">#</a> 修改存储过程</h3><p>使用ALTER PROCEDURE语句修改创建存储过程时定义的特性</p><p><code>ALTER PROCEDURE 存储过程名 [特性……] ;</code></p><p>将存储过程<code>proc_patient_countPatient</code>的<code>SQL SECURITY</code>特性修改为INVOKER</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">procedure</span> proc_patient_countPatient
<span class="token keyword">sql</span> security <span class="token keyword">invoker</span><span class="token punctuation">;</span>
</code></pre></div><p>使用ALTER 关键字只能修改存储过程的特性，<strong>如果想修改存储过程中过程体的内容，需先删除该存储过程，再进行重新创建</strong> 在Navicat中，修改存储过程的内容后，可以直接保存</p><h3 id="删除存储过程" tabindex="-1"><a class="header-anchor" href="#删除存储过程" aria-hidden="true">#</a> 删除存储过程</h3><p>使用DROP PROCEDURE语句删除已创建的存储过程</p><p><code>DROP PROCEDURE 存储过程名;</code></p>`,116),o=[t];function c(l,k){return n(),a("div",null,o)}const d=s(e,[["render",c],["__file","store.html.vue"]]);export{d as default};
