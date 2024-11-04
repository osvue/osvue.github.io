import{_ as e,p as n,q as a,a1 as t}from"./framework-d81ad7e5.js";const l={},o=t(`<div class="language-text" data-ext="text"><pre class="language-text"><code>File类常见方法：
1，创建。
    boolean createNewFile():在指定位置创建文件，如果该文件已经存在，则不创建，返回false。
                        和输出流不一样，输出流对象一建立创建文件。而且文件已经存在，会覆盖。
    boolean mkdir():创建文件夹。
    boolean mkdirs():创建多级文件夹。
2，删除。
    boolean delete()：删除失败返回false。如果文件正在被使用，则删除不了返回falsel。
    void deleteOnExit();在程序退出时删除指定文件。
3，判断。
    boolean exists() :文件是否存在.
    isFile():
    isDirectory();
    isHidden();
    isAbsolute();
4，获取信息。
    getName():
    getPath():
    getParent():
    getAbsolutePath()
    long lastModified()
    long length()

</code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token comment">//  递归创建</span>
</code></pre></div>`,3),s=[o];function i(c,d){return n(),a("div",null,s)}const _=e(l,[["render",i],["__file","ioc_file.html.vue"]]);export{_ as default};
