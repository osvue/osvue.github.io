import{_ as l,p as e,q as t,a1 as i}from"./framework-d81ad7e5.js";const o={},a=i('<h3 id="volatite" tabindex="-1"><a class="header-anchor" href="#volatite" aria-hidden="true">#</a> volatite</h3><ol><li>保证可见性 <ol><li><p><strong>jvm java虚拟机</strong></p></li><li><p><strong>jmm java内存模型</strong></p></li></ol></li></ol><ul><li><p>硬盘 ==== 内存8g <code>===缓存===</code> CPU</p></li><li><p>各个线程对主内存中共享变量的操作都是各个线程<strong>各自拷贝</strong>到自己的工作内存进行操作后再写回主内存中的。</p></li><li><p>这就可能存在一个线程A修改了共享变量X的值但还未写回主内存时，另一个线程B又对准内存中同一个共享变量X进行操作</p></li><li><p>但此时A线程工作内存中共享变量X对线程B来说并不是可见，这种工作内存与主内存同步存在延迟现象就造成了可见性问题。</p></li></ul><ol><li><p>不保证原子性</p></li><li><p>禁止指令重排</p></li></ol>',4),s=[a];function r(c,n){return e(),t("div",null,s)}const _=l(o,[["render",r],["__file","1_juc_base.html.vue"]]);export{_ as default};