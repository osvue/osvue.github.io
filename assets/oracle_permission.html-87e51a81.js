import{_ as s,p as a,q as n,a1 as e}from"./framework-d81ad7e5.js";const o={},p=e(`<ul><li>ORACLE数据字典视图的种类分别为：USER,ALL 和 DBA.</li></ul><ul><li><p><code>USER_*</code>:有关用户所拥有的对象信息，即用户自己创建的对象信息</p></li><li><p><code>ALL_*</code>:有关用户可以访问的对象的信息，即用户自己创建的对象的信息加上</p></li></ul><p>其他用户创建的对象但该用户有权访问的信息</p><ul><li><code>DBA_*</code>:有关整个数据库中对象的信息</li></ul><p>(这里的*可以为TABLES,INDEXES,OBJECTS,USERS等。)</p><ol><li>查看所有用户</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_user<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> all_users<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_users<span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>查看用户系统权限</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_sys_privs<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> all_sys_privs<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_sys_privs<span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>查看用户对象权限</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_tab_privs<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> all_tab_privs<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_tab_privs<span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li>查看所有角色</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_roles<span class="token punctuation">;</span>
</code></pre></div><ol start="5"><li>查看用户所拥有的角色</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_role_privs<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_role_privs<span class="token punctuation">;</span>

</code></pre></div><ol start="6"><li>查看当前用户的缺省表空间</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> username<span class="token punctuation">,</span>default_tablespace <span class="token keyword">from</span> user_users<span class="token punctuation">;</span>

</code></pre></div><ol start="7"><li>查看某个角色的具体权限</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 如</span>
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource<span class="token punctuation">,</span>createsession<span class="token punctuation">,</span><span class="token keyword">create</span> <span class="token keyword">view</span> <span class="token keyword">to</span> TEST<span class="token punctuation">;</span>

</code></pre></div><ol start="8"><li>查看RESOURCE具有那些权限</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> DBA_SYS_PRIVS <span class="token keyword">WHERE</span> GRANTEE<span class="token operator">=</span><span class="token string">&#39;RESOURCE&#39;</span><span class="token punctuation">;</span>

</code></pre></div>`,21),l=[p];function t(c,r){return a(),n("div",null,l)}const d=s(o,[["render",t],["__file","oracle_permission.html.vue"]]);export{d as default};
