import{_ as p,M as t,p as o,q as e,R as n,t as s,N as c,a1 as l}from"./framework-d81ad7e5.js";const u={},k=n("h3",{id:"微软技术文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#微软技术文档","aria-hidden":"true"},"#"),s(" 微软技术文档")],-1),i={href:"https://learn.microsoft.com/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"},r=l(`<ul><li><strong>关键字</strong></li></ul><div class="language-csharp" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Dynamic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Linq</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>
<span class="token comment">// using  import java.util.List;</span>

<span class="token comment">// 命名空间</span>
<span class="token comment">// JAVA package org.osuve.app;</span>
<span class="token keyword">namespace</span> <span class="token namespace">ConsoleApp1</span>
<span class="token punctuation">{</span>
   <span class="token comment">// 类型</span>
   <span class="token keyword">internal</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>
   <span class="token punctuation">{</span>

       <span class="token class-name"><span class="token keyword">bool</span></span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
       <span class="token class-name"><span class="token keyword">string</span></span> id <span class="token operator">=</span> <span class="token string">&quot;1qaz2wsx&quot;</span><span class="token punctuation">;</span>
       <span class="token class-name"><span class="token keyword">int</span></span> age <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>

       <span class="token comment">// 函数  方法</span>
       <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
       <span class="token punctuation">{</span>
           Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;你好世界 \\r \\n 输入数字 计算 10 倍结果 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">try</span>
           <span class="token punctuation">{</span>
               <span class="token class-name">String</span> v <span class="token operator">=</span> Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token class-name"><span class="token keyword">int</span></span> result <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
               <span class="token function">wt</span><span class="token punctuation">(</span><span class="token string">&quot;result is &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
               Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
           <span class="token punctuation">{</span>
               <span class="token function">wt</span><span class="token punctuation">(</span><span class="token string">&quot;发生了程序异常 \\r\\n 堆栈信息：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token function">wt</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;---------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

           <span class="token punctuation">}</span>
           <span class="token comment">/*
           
           for (; bool ;)
           {
               // do something

           bool = false; break;
           }
           */</span>




           <span class="token function">wt</span><span class="token punctuation">(</span><span class="token string">&quot;  chengfabiao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token class-name"><span class="token keyword">int</span></span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
           <span class="token class-name"><span class="token keyword">string</span></span> name <span class="token operator">=</span> <span class="token string">&quot;lusifer&quot;</span><span class="token punctuation">;</span>

           <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
           <span class="token punctuation">{</span>
               <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">global</span><span class="token punctuation">::</span><span class="token class-name">System<span class="token punctuation">.</span>Int32</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
               <span class="token punctuation">{</span>
                   System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">&quot; X&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;   &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

               <span class="token punctuation">}</span>
               System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>

           <span class="token class-name">UserLoginBody</span> ulb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserLoginBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token function">wt</span><span class="token punctuation">(</span><span class="token string">&quot;login page  登录页面 \\r\\n ---------- 请输入用户名：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

           ulb<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           ulb<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

           <span class="token function">wt</span><span class="token punctuation">(</span><span class="token string">&quot;your input text is {}&quot;</span> <span class="token operator">+</span> ulb<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

           Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>








       <span class="token punctuation">}</span>

       <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">wt</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> param<span class="token punctuation">)</span>
       <span class="token punctuation">{</span>
           Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">class</span> <span class="token class-name">User</span>
   <span class="token punctuation">{</span>
       <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> id<span class="token punctuation">;</span>
       <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">;</span>
       <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> age<span class="token punctuation">;</span>
         
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="dll-文件" tabindex="-1"><a class="header-anchor" href="#dll-文件" aria-hidden="true">#</a> <code>dll 文件</code></h3><ul><li>public 对外访问</li><li><code>.Net Core</code></li><li><code>.Net Framework 使用和被使用，即使想通 。Net Framework 也有版本要求</code></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>严重性	代码	说明	项目	文件	行	禁止显示状态
错误		项目“..\\domain\\domain.csproj”指向“net8.0”。它不能被指向“.NETFramework,Version=v4.7.2”的项目引用。	ConsoleApp1			
</code></pre></div><div class="language-csharp" data-ext="cs"><pre class="language-csharp"><code>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Linq</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">ConsoleApp1</span>
<span class="token punctuation">{</span>
   <span class="token keyword">internal</span> <span class="token keyword">class</span> <span class="token class-name">DataBaseImpl</span>
   <span class="token punctuation">{</span>
       
   <span class="token punctuation">}</span>

   <span class="token keyword">class</span> <span class="token class-name">UserLoginBody</span> <span class="token punctuation">{</span>

       <span class="token keyword">private</span>  <span class="token class-name"><span class="token keyword">string</span></span> password<span class="token punctuation">;</span>
       <span class="token keyword">private</span>  <span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">;</span>

       <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token punctuation">{</span>
           <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
           <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>

       <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
       <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

       <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> password<span class="token punctuation">)</span>
       <span class="token punctuation">{</span>
           <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,6);function d(m,y){const a=t("ExternalLinkIcon");return o(),e("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[s("https://learn.microsoft.com/zh-cn/docs/"),c(a)])])]),r])}const g=p(u,[["render",d],["__file","index.html.vue"]]);export{g as default};
