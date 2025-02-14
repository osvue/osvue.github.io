import{_ as e,p as t,q as a,a1 as l}from"./framework-d81ad7e5.js";const n={},s=l(`<h3 id="blank" tabindex="-1"><a class="header-anchor" href="#blank" aria-hidden="true">#</a> blank</h3><ul><li><p>isBlank()判断是否为null和length()为0，还判断是否是空格、tab键、换行符。</p></li><li><p>isWhitespace() 方法用于判断指定字符是否为空白字符，空白符包含：空格、tab 键、换行符</p></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>根据上面结果的对比，isBlank()方法和isEmpty方法的区别：
isBlank()判断制表符（\\t）和空格时，为true；
isEmpty()判断制表符（\\t）和空格时，为false；
两个判断null、&quot;&quot;、以及换行符（\\n或者\\r）时为true。
 
</code></pre></div><h3 id="empty" tabindex="-1"><a class="header-anchor" href="#empty" aria-hidden="true">#</a> empty</h3><ul><li>isEmpty()只判断是否为null和长度为0。</li></ul>`,5),i=[s];function r(c,d){return t(),a("div",null,i)}const o=e(n,[["render",r],["__file","java_strut.html.vue"]]);export{o as default};
