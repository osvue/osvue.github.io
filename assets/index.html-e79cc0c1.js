import{_ as n,M as l,p as o,q as p,R as s,t as a,N as t,a1 as r}from"./framework-d81ad7e5.js";const c={},d=s("h3",{id:"dbeaver",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#dbeaver","aria-hidden":"true"},"#"),a(" dbeaver")],-1),i={href:"https://dbeaver.io/",target:"_blank",rel:"noopener noreferrer"},k=r(`<h3 id="oracle监听" tabindex="-1"><a class="header-anchor" href="#oracle监听" aria-hidden="true">#</a> oracle监听</h3><p>简单操作</p><ul><li><p><strong>lsnrctl start</strong> 启动监听</p></li><li><p><strong>lsnrctl stop</strong> 停止监听</p></li><li><p><strong>lsnrctl status</strong> 查看监听状态</p></li><li><p><strong>lsnrctl service</strong> 查看监听服务</p></li><li><p>安装plsql</p><ul><li>查询oracle 64/32 bits<code>select * from v$version;</code></li></ul></li></ul><h3 id="oracle-创建表空间分为四步" tabindex="-1"><a class="header-anchor" href="#oracle-创建表空间分为四步" aria-hidden="true">#</a> oracle 创建表空间分为四步：</h3><ul><li>第1步：创建临时表空间</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>　　<span class="token keyword">create</span> <span class="token keyword">temporary</span> <span class="token keyword">tablespace</span> user_temp

　　tempfile <span class="token string">&#39;D:\\oracle\\oradata\\Oracle9i\\user_temp.dbf&#39;</span>

　　size <span class="token number">50</span>m

　　autoextend <span class="token keyword">on</span>

　　<span class="token keyword">next</span> <span class="token number">50</span>m maxsize <span class="token number">20480</span>m

　　extent management <span class="token keyword">local</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>第2步：创建数据表空间</li></ul><p></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>　　<span class="token keyword">create</span> <span class="token keyword">tablespace</span> user_data

　　logging

　　datafile <span class="token string">&#39;D:\\oracle\\oradata\\Oracle9i\\user_data.dbf&#39;</span>

　　size <span class="token number">50</span>m

　　autoextend <span class="token keyword">on</span>

　　<span class="token keyword">next</span> <span class="token number">50</span>m maxsize <span class="token number">20480</span>m

　　extent management <span class="token keyword">local</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>第3步：创建用户并指定表空间</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>　　<span class="token keyword">create</span> <span class="token keyword">user</span> username identified <span class="token keyword">by</span> password

　　<span class="token keyword">default</span> <span class="token keyword">tablespace</span> user_data

　　<span class="token keyword">temporary</span> <span class="token keyword">tablespace</span> user_temp<span class="token punctuation">;</span>
</code></pre></div><ul><li>第4步：给用户授予权限</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>
　　<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource<span class="token punctuation">,</span>dba <span class="token keyword">to</span> username<span class="token punctuation">;</span>
</code></pre></div><h2 id="sqlplus" tabindex="-1"><a class="header-anchor" href="#sqlplus" aria-hidden="true">#</a> sqlplus</h2><ul><li><p>oracle sqlplus登录</p></li><li><p>as sysdba登录</p></li><li><p><strong>普通用户登录</strong>：</p></li></ul><p><code>sqlplus scott/1234 ## 帐号/密码</code></p><p><strong>作为管理员登录</strong>：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>sqlplus <span class="token operator">/</span> <span class="token keyword">as</span> sysdba   <span class="token comment">## 这种登录方式是不需要密码的</span>
sqlplus aaauser<span class="token operator">/</span>bbbpassword <span class="token keyword">as</span> sysdba  <span class="token comment">## 账户和密码乱写，一样能登录</span>
sqlplus sys<span class="token operator">/</span><span class="token number">1234</span> <span class="token keyword">as</span> sysoper  <span class="token comment">## 作为sysoper登录,需要sys用户的账户和密码  登录后显示为 public用户</span>
</code></pre></div><ul><li><strong>给用户授权sysoper,并登录</strong>：</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>sqlplus <span class="token operator">/</span> <span class="token keyword">as</span> sysdba<span class="token punctuation">;</span>
<span class="token keyword">grant</span> sysoper <span class="token keyword">to</span> guanyu<span class="token punctuation">;</span>
sqlplus guanyu<span class="token operator">/</span><span class="token number">1234</span> <span class="token keyword">as</span> sysoper<span class="token punctuation">;</span> <span class="token comment">-- 登录成功，显示为public</span>
</code></pre></div><h2 id="表空间" tabindex="-1"><a class="header-anchor" href="#表空间" aria-hidden="true">#</a> 表空间</h2><ol><li>oracle查看表空间当前用户</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> 
 username<span class="token punctuation">,</span>default_tablespace 
<span class="token keyword">from</span> user_users<span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>oracle 查看表所属表空间</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
 TABLE_NAME<span class="token punctuation">,</span>TABLESPACE_NAME 
<span class="token keyword">FROM</span> USER_TABLES 
<span class="token keyword">where</span> TABLE_NAME <span class="token operator">=</span> <span class="token string">&#39;test_table&#39;</span>

</code></pre></div><h3 id="临时表空间作用" tabindex="-1"><a class="header-anchor" href="#临时表空间作用" aria-hidden="true">#</a> 临时表空间作用</h3><ul><li><p>用来存放用户的临时数据，临时数据就是在需要时被覆盖，关闭数据库后自动删除，其中不能存放永久临时性数据。</p></li><li><p>查看表空间 <code>select * from v$tablespace;</code></p></li><li><p>查看表空间详细信息 <code>select * from dba_tablespaces;</code> CONTENTS字段值为TEMPORARY，即临时表空间</p></li><li><p>查看除临时表空间外 表空间对应的数据文件 <code>select * from dba_data_files;</code></p></li><li><p>查看临时表空间对应的数据文件 <code>select * from dba_temp_files;</code></p></li><li><p>查看默认的临时表空间 <code>select * from database_properties where PROPERTY_NAME=&#39;DEFAULT_TEMP_TABLESPACE&#39;;</code></p></li><li><p><strong>创建临时表空间</strong> (1) 创建不属于组的临时表空间</p></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">temporary</span> <span class="token keyword">tablespace</span> temp2 
tempfile <span class="token string">&#39;D:\\software\\oracle\\oradata\\orcl\\temp2a.dbf&#39;</span> 
size <span class="token number">10</span>m 
autoextend <span class="token keyword">on</span> <span class="token punctuation">;</span>
</code></pre></div><p>(2) 属于组的临时表空间</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">temporary</span> <span class="token keyword">tablespace</span> temp3
 tempfile <span class="token string">&#39;D:\\software\\oracle\\oradata\\orcl\\temp3a.dbf&#39;</span> 
 size <span class="token number">10</span>m autoextend <span class="token keyword">on</span>
	<span class="token keyword">tablespace</span> <span class="token keyword">group</span> 
    temp_group <span class="token punctuation">;</span>
</code></pre></div>`,30);function u(g,m){const e=l("ExternalLinkIcon");return o(),p("div",null,[d,s("p",null,[a("一个好用的数据库连接工具："),s("a",i,[a("https://dbeaver.io/"),t(e)])]),k])}const b=n(c,[["render",u],["__file","index.html.vue"]]);export{b as default};
