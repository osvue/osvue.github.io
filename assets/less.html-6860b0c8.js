import{_ as e,p as s,q as l,a1 as a}from"./framework-d81ad7e5.js";const i={},r=a(`<h3 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h3><pre><code>less是一种动态样式语言，属于css预处理器的范畴，它扩展了 CSS 语言，
增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展
LESS 既可以在 客户端 上运行 ，也可以借助Node.js在服务端运行。

less的中文官网：http://lesscss.cn/
bootstrap中less教程：http://www.bootcss.com/p/lesscss/
</code></pre><h3 id="less编译工具" tabindex="-1"><a class="header-anchor" href="#less编译工具" aria-hidden="true">#</a> Less编译工具</h3><pre><code>koala 官网:www.koala-app.com 
</code></pre><h3 id="less中的注释" tabindex="-1"><a class="header-anchor" href="#less中的注释" aria-hidden="true">#</a> less中的注释</h3><pre><code>以//开头的注释，不会被编译到css文件中
以/**/包裹的注释会被编译到css文件中  
</code></pre><h3 id="less中的变量" tabindex="-1"><a class="header-anchor" href="#less中的变量" aria-hidden="true">#</a> less中的变量</h3><ul><li>使用@来申明一个变量： <code>@pink：pink;</code><ol><li>作为普通属性值只来使用：直接使用@pink</li><li>作为选择器和属性名：#@{selector的值}的形式</li><li>作为URL：@{url}</li><li>变量的延迟加载</li></ol></li></ul><h3 id="less中的嵌套规则" tabindex="-1"><a class="header-anchor" href="#less中的嵌套规则" aria-hidden="true">#</a> less中的嵌套规则</h3><ol><li>基本嵌套规则</li><li>&amp;的使用</li></ol><h3 id="less中的混合" tabindex="-1"><a class="header-anchor" href="#less中的混合" aria-hidden="true">#</a> less中的混合</h3><pre><code>混合就是将一系列属性从一个规则集引入到另一个规则集的方式
</code></pre><ol><li>普通混合</li><li>不带输出的混合</li><li>带参数的混合</li><li>带参数并且有默认值的混合</li><li>带多个参数的混合</li><li>命名参数</li><li>匹配模式</li><li>arguments变量</li></ol><h3 id="less运算" tabindex="-1"><a class="header-anchor" href="#less运算" aria-hidden="true">#</a> less运算</h3><pre><code>在less中可以进行加减乘除的运算
</code></pre><h3 id="less避免编译" tabindex="-1"><a class="header-anchor" href="#less避免编译" aria-hidden="true">#</a> less避免编译</h3><h3 id="less继承" tabindex="-1"><a class="header-anchor" href="#less继承" aria-hidden="true">#</a> less继承</h3><pre><code>性能比混合高
灵活度比混合低
</code></pre>`,18),d=[r];function h(n,c){return s(),l("div",null,d)}const t=e(i,[["render",h],["__file","less.html.vue"]]);export{t as default};
