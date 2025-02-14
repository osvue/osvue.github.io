import{_ as e,p as t,q as n,a1 as d}from"./framework-d81ad7e5.js";const p={},s=d('<p><code>list名[首：尾：步长]</code> numpy数组切片操作：</p><p><code>数组名[首：尾，首：尾：步长]（逗号用于区分维度，注意：逗号前面不能限定步长）</code></p><p>切片可以获取序列<code>（列表，字符串......）</code>的子序列，通俗来讲就是 复制，将指定元素复制放入新生成的子序列中，它是创建而非关联。</p><p>切片包括三个参数<code>(start_index、end_index、step)</code>，即（起始下标，结束下标，步长）。</p><p>此处需要提醒的是，切片的范围是左闭右开，例如<code>num[3:9]</code>是从下标3开始复制元素，直至下标8（9-1）</p><h4 id="操作方法" tabindex="-1"><a class="header-anchor" href="#操作方法" aria-hidden="true">#</a> 操作方法</h4><ul><li>切片的完整形式是：<strong>num[x:y:z]</strong>,其中在，z为步长，x为起始下标，y为终止下标。</li></ul><p>python会自动为缺省参数赋以默认值。</p><ul><li>z缺省默认为1。当<code>z&gt;0</code>，x缺省默认为0，包括最左端的元素，y缺省为len（num），包括最右端的元素，最右端的下标为len（num）-1。</li><li>当<code>z&lt;0</code>时，切片的方向从右向左，起始下标x应为最右端的元素，故x缺省值为len（num）-1：终止下标则默认为-1.</li></ul><p>总结： （一）start_index、end_index、step三者可同为正、同为负，或正负混合。但必须遵循一个原则，否则无法正确切取到数据，即：当start_index的位置在end_index的左边时，表示从左往右取值，此时step必须是正数（同样表示从左往右）；当start_index的位置在end_index的右边时，表示从右往左取值，此时step必须是负数（同样表示从右往左），即两者的取值顺序必须是相同的。对于特殊情况，当start_index或end_index省略时，起始索引和终止索引由step的正负来决定，这种情况不会有取值方向矛盾（即不会返回空列表[]），但正和负取到的结果顺序是相反的，因为一个向左一个向右。</p><p>（二）在利用切片时，step的正负是必须要考虑的，尤其是当step省略时。比如a[-1:]，很容易就误认为是从“终点”开始一直取到“起点”，即a[-1:]= [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]，但实际上a[-1:]=[9]（注意不是9），原因在于step=1表示从左往右取值，而起始索引start_index=-1本身就是对象的最右边元素了，再往右已经没数据了。</p><p>（三）需要注意：“取单个元素（不带“:”）”时，返回的是对象的某个元素，其类型由元素本身的类型决定，而与母对象无关，如上面的a[0]=0、a[-4]=6，元素0和6都是“数值型”，而母对象a却是“list”型；“取连续切片（带“:”）”时，返回结果的类型与母对象相同，哪怕切取的连续切片只包含一个元素，如上面的a[-1:]=[9]，返回的是一个只包含元素“9”的list，而非数值型“9”。</p>',12),a=[s];function o(c,i){return t(),n("div",null,a)}const _=e(p,[["render",o],["__file","numpy.html.vue"]]);export{_ as default};
