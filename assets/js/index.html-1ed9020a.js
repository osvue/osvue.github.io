import{_ as d,o as n,c as e,a}from"./app-215c512d.js";const l={};function r(o,t){return n(),e("div",null,t[0]||(t[0]=[a(`<ul><li>2025-01-22</li></ul><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p><strong>作用</strong>：给一段指定的内存空间起名，方便操作这段内存 <strong>语法</strong>：<code>数据类型 变量名 = 初始值;</code><strong>示例：</strong></p><div class="language-C++" data-ext="C++"><pre class="language-C++"><code>#include&lt;iostream&gt;
using namespace std;

int main() {

 //变量的定义
 //语法：数据类型  变量名 = 初始值

 int a = 10;

 cout &lt;&lt; &quot;a = &quot; &lt;&lt; a &lt;&lt; endl;
 
 system(&quot;pause&quot;);

 return 0;
}
</code></pre></div><blockquote><p>注意：C++在创建变量时，必须给变量一个初始值，否则会报错</p></blockquote><h3 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h3><p><strong>作用</strong>：用于记录程序中不可更改的数据</p><p>C++定义常量两种方式</p><ol><li><p><strong>#define</strong> 宏常量： <code>#define 常量名 常量值</code></p><ul><li>==通常在文件上方定义==，表示一个常量</li></ul></li><li><p><strong>const</strong>修饰的变量 <code>const 数据类型 常量名 = 常量值</code></p><ul><li>==通常在变量定义前加关键字const==，修饰该变量为常量，不可修改</li></ul></li></ol><p><strong>示例：</strong></p><div class="language-C++" data-ext="C++"><pre class="language-C++"><code>//1、宏常量
#define day 7

int main() {

 cout &lt;&lt; &quot;一周里总共有 &quot; &lt;&lt; day &lt;&lt; &quot; 天&quot; &lt;&lt; endl;
 //day = 8;  //报错，宏常量不可以修改

 //2、const修饰变量
 const int month = 12;
 cout &lt;&lt; &quot;一年里总共有 &quot; &lt;&lt; month &lt;&lt; &quot; 个月份&quot; &lt;&lt; endl;
 //month = 24; //报错，常量是不可以修改的
 system(&quot;pause&quot;);

 return 0;
}
</code></pre></div><h3 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h3><p>**作用：**关键字是C++中预先保留的单词（标识符）</p><ul><li><strong>在定义变量或者常量时候，不要用关键字</strong></li></ul><p>C++关键字如下：</p><table><thead><tr><th>asm</th><th>do</th><th>if</th><th>return</th><th>typedef</th></tr></thead><tbody><tr><td>auto</td><td>double</td><td>inline</td><td>short</td><td>typeid</td></tr><tr><td>bool</td><td>dynamic_cast</td><td>int</td><td>signed</td><td>typename</td></tr><tr><td>break</td><td>else</td><td>long</td><td>sizeof</td><td>union</td></tr><tr><td>case</td><td>enum</td><td>mutable</td><td>static</td><td>unsigned</td></tr><tr><td>catch</td><td>explicit</td><td>namespace</td><td>static_cast</td><td>using</td></tr><tr><td>char</td><td>export</td><td>new</td><td>struct</td><td>virtual</td></tr><tr><td>class</td><td>extern</td><td>operator</td><td>switch</td><td>void</td></tr><tr><td>const</td><td>false</td><td>private</td><td>template</td><td>volatile</td></tr><tr><td>const_cast</td><td>float</td><td>protected</td><td>this</td><td>wchar_t</td></tr><tr><td>continue</td><td>for</td><td>public</td><td>throw</td><td>while</td></tr><tr><td>default</td><td>friend</td><td>register</td><td>true</td><td></td></tr><tr><td>delete</td><td>goto</td><td>reinterpret_cast</td><td>try</td><td></td></tr></tbody></table><p><code>提示：在给变量或者常量起名称时候，不要用C++得关键字，否则会产生歧义。</code></p><h3 id="标识符命名规则" tabindex="-1"><a class="header-anchor" href="#标识符命名规则" aria-hidden="true">#</a> 标识符命名规则</h3><p><strong>作用</strong>：C++规定给标识符（变量、常量）命名时，有一套自己的规则</p><ul><li>标识符不能是关键字</li><li>标识符只能由字母、数字、下划线组成</li><li>第一个字符必须为字母或下划线</li><li>标识符中字母区分大小写</li></ul><div class="language-c++" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

/// &lt;summary&gt;
///  定义常量
/// #define Day 7
/// &lt;/summary&gt;
/// &lt;returns&gt;&lt;/returns&gt;

#define Day 7 

const int num = 10;

int main() {

 cout &lt;&lt; num &lt;&lt; &quot;每个月&quot;&lt;&lt; Day &lt;&lt; endl;
 // sizeof 关键字
 cout &lt;&lt; &quot;sizeof int &quot; &lt;&lt; sizeof(Day) &lt;&lt; endl;

 // 数据类型  short 2 int 4 long 4 long long 8 ;  float 4  double 8 ;  char &#39;&#39; 单引号 1字节；
 int num = 5;
 long ph = 19;

 float pi = 3.14f;

 double x = 3.14159;

 char a = &#39;m&#39;;
  
 cout &lt;&lt; a &lt;&lt; x  &lt;&lt; endl;

 system(&quot;pause&quot;);
 return 0;
}
</code></pre></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3><p>**作用：**用于根据表达式的值返回真值或假值</p><p>逻辑运算符有以下符号：</p><table><thead><tr><th><strong>运算符</strong></th><th><strong>术语</strong></th><th><strong>示例</strong></th><th><strong>结果</strong></th></tr></thead><tbody><tr><td>!</td><td>非</td><td>!a</td><td>如果a为假，则!a为真； 如果a为真，则!a为假。</td></tr><tr><td>&amp;&amp;</td><td>与</td><td>a &amp;&amp; b</td><td>如果a和b都为真，则结果为真，否则为假。</td></tr><tr><td>||</td><td>或</td><td>a || b</td><td>如果a和b有一个为真，则结果为真，二者都为假时，结果为假。</td></tr></tbody></table><h2 id="程序流程结构" tabindex="-1"><a class="header-anchor" href="#程序流程结构" aria-hidden="true">#</a> 程序流程结构</h2><p>C/C++支持最基本的三种程序运行结构：==顺序结构、选择结构、循环结构==</p><ul><li>顺序结构：程序按顺序执行，不发生跳转</li><li>选择结构：依据条件是否满足，有选择的执行相应功能</li><li>循环结构：依据条件是否满足，循环多次执行某段代码</li></ul><h3 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构" aria-hidden="true">#</a> 循环结构</h3><h4 id="while循环语句" tabindex="-1"><a class="header-anchor" href="#while循环语句" aria-hidden="true">#</a> while循环语句</h4><p>**作用：**满足循环条件，执行循环语句</p><p><strong>语法：</strong><code> while(循环条件){ 循环语句 }</code></p><p><strong>解释：</strong>==只要循环条件的结果为真，就执行循环语句==</p><div class="language-c++" data-ext="c++"><pre class="language-c++"><code>// + - *  /
int va = 10;
int vb = 20;

// cout &lt;&lt; va / vb &lt;&lt; endl;
// += -= *= /= 
va += 5;
cout &lt;&lt; va   &lt;&lt; endl;

cin &gt;&gt; va;

if (va &gt; 20) {
	cout &lt;&lt; &quot;走京港澳&quot; &lt;&lt; endl;



}
else if (va &gt;= 10) {
	cout &lt;&lt; &#39;c&#39; &lt;&lt; endl;

}

while (va &lt;= 100) {
	cout &lt;&lt; va &lt;&lt; endl;
	va++;
}
</code></pre></div>`,34)]))}const s=d(l,[["render",r],["__file","index.html.vue"]]);export{s as default};
