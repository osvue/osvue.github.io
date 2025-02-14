import{_ as t,p as n,q as l,a1 as e}from"./framework-d81ad7e5.js";const r={},a=e(`<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>所谓数组，就是一个集合，里面存放了相同类型的数据元素</p><p>**特点1：**数组中的每个==数据元素都是相同的数据类型==</p><p>**特点2：**数组是由==连续的内存==位置组成的</p><h3 id="一维数组" tabindex="-1"><a class="header-anchor" href="#一维数组" aria-hidden="true">#</a> 一维数组</h3><h4 id="一维数组定义方式" tabindex="-1"><a class="header-anchor" href="#一维数组定义方式" aria-hidden="true">#</a> 一维数组定义方式</h4><p>一维数组定义的三种方式：</p><ol><li><code>数据类型 数组名[ 数组长度 ];</code></li><li><code>数据类型 数组名[ 数组长度 ] = { 值1，值2 ...};</code></li><li><code>数据类型 数组名[ ] = { 值1，值2 ...};</code></li></ol><p>示例</p><div class="language-C++" data-ext="C++"><pre class="language-C++"><code>int main() {

 //定义方式1
 //数据类型 数组名[元素个数];
 int score[10];

 //利用下标赋值
 score[0] = 100;
 score[1] = 99;
 score[2] = 85;

 //利用下标输出
 cout &lt;&lt; score[0] &lt;&lt; endl;
 cout &lt;&lt; score[1] &lt;&lt; endl;
 cout &lt;&lt; score[2] &lt;&lt; endl;


 //第二种定义方式
 //数据类型 数组名[元素个数] =  {值1，值2 ，值3 ...};
 //如果{}内不足10个数据，剩余数据用0补全
 int score2[10] = { 100, 90,80,70,60,50,40,30,20,10 };
 
 //逐个输出
 //cout &lt;&lt; score2[0] &lt;&lt; endl;
 //cout &lt;&lt; score2[1] &lt;&lt; endl;

 //一个一个输出太麻烦，因此可以利用循环进行输出
 for (int i = 0; i &lt; 10; i++)
 {
  cout &lt;&lt; score2[i] &lt;&lt; endl;
 }

 //定义方式3
 //数据类型 数组名[] =  {值1，值2 ，值3 ...};
 int score3[] = { 100,90,80,70,60,50,40,30,20,10 };

 for (int i = 0; i &lt; 10; i++)
 {
  cout &lt;&lt; score3[i] &lt;&lt; endl;
 }

 system(&quot;pause&quot;);

 return 0;
}
</code></pre></div><blockquote><p>总结1：数组名的命名规范与变量名命名规范一致，不要和变量重名</p></blockquote><blockquote><p>总结2：数组中下标是从0开始索引</p></blockquote><h4 id="_5-2-2-一维数组数组名" tabindex="-1"><a class="header-anchor" href="#_5-2-2-一维数组数组名" aria-hidden="true">#</a> 5.2.2 一维数组数组名</h4><p>一维数组名称的<strong>用途</strong>：</p><ol><li>可以统计整个数组在内存中的长度</li><li>可以获取数组在内存中的首地址</li></ol><p><strong>示例：</strong></p><div class="language-C++" data-ext="C++"><pre class="language-C++"><code>int main() {

 //数组名用途
 //1、可以获取整个数组占用内存空间大小
 int arr[10] = { 1,2,3,4,5,6,7,8,9,10 };

 cout &lt;&lt; &quot;整个数组所占内存空间为： &quot; &lt;&lt; sizeof(arr) &lt;&lt; endl;
 cout &lt;&lt; &quot;每个元素所占内存空间为： &quot; &lt;&lt; sizeof(arr[0]) &lt;&lt; endl;
 cout &lt;&lt; &quot;数组的元素个数为： &quot; &lt;&lt; sizeof(arr) / sizeof(arr[0]) &lt;&lt; endl;

 //2、可以通过数组名获取到数组首地址
 cout &lt;&lt; &quot;数组首地址为： &quot; &lt;&lt; (int)arr &lt;&lt; endl;
 cout &lt;&lt; &quot;数组中第一个元素地址为： &quot; &lt;&lt; (int)&amp;arr[0] &lt;&lt; endl;
 cout &lt;&lt; &quot;数组中第二个元素地址为： &quot; &lt;&lt; (int)&amp;arr[1] &lt;&lt; endl;

 //arr = 100; 错误，数组名是常量，因此不可以赋值


 system(&quot;pause&quot;);

 return 0;
}
</code></pre></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3><div class="language-c++" data-ext="c++"><pre class="language-c++"><code>int main() {

 int varr[] = {121,2122,313,44,25,567,7856,345,3457,34,111,65,5};


 int length = sizeof(varr) / sizeof(varr[0]);


 for (int i = 0; i &lt; length; i++)
 {
   
  for (int j = i; j &lt; length;j++)
  {
   int tempa = 0;
   if (varr[i] &gt; varr[j]) {
    tempa = varr[j];
    varr[j] = varr[i];
    varr[i] = tempa;
   }
    
  }
 }
 for (int i = 0; i &lt; length; i++)
 {
  cout &lt;&lt; varr[i] &lt;&lt; endl;
 }
 return 0;
}
</code></pre></div>`,19),o=[a];function i(c,s){return n(),l("div",null,o)}const u=t(r,[["render",i],["__file","c_arr.html.vue"]]);export{u as default};
