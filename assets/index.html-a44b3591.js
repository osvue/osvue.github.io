import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h3><ul><li><code>$xxx 定义变量</code></li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code>SCSS Syntax
$<span class="token property">font-stack</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
$<span class="token property">primary-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% $font-stack<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $primary-color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>父选择器 &amp;</code> &amp; 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器，例如</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#main</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">&amp;-sidebar</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 

<span class="token selector">#main</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">#main-sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="运算-operations" tabindex="-1"><a class="header-anchor" href="#运算-operations" aria-hidden="true">#</a> 运算 (Operations)</h3><ul><li>所有数据类型均支持相等运算 <code>== 或 !=</code>，此外，每种数据类型也有其各自支持的运算方式。</li></ul><ul><li>数字运算 (Number Operations) SassScript 支持数字的加减乘除、取整等运算 <code>(+, -, *, /, %)</code>，如果必要会在不同单位间转换值。</li></ul>`,8),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
