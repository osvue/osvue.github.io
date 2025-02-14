import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="字符流和字节流" tabindex="-1"><a class="header-anchor" href="#字符流和字节流" aria-hidden="true">#</a> 字符流和字节流</h2><div class="language-text" data-ext="text"><pre class="language-text"><code> 字符流：
FileReader
FileWriter。
    char[]
BufferedReader
BufferedWriter

字节流：
InputStream  OutputStream
    byte[]

</code></pre></div><h2 id="通过字节流的缓冲区完成复制" tabindex="-1"><a class="header-anchor" href="#通过字节流的缓冲区完成复制" aria-hidden="true">#</a> 通过字节流的缓冲区完成复制</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*


需求，想要操作图片数据。这时就要用到字节流。
复制一个图片.


*/</span>
  <span class="token comment">// 通过字节流的缓冲区完成复制。</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">copy_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">BufferedInputStream</span> bufis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;c:\\\\0.mp3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BufferedOutputStream</span> bufos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;c:\\\\1.mp3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> by <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>by <span class="token operator">=</span> bufis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bufos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>by<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    bufos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bufis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">/*
1,
源：键盘录入。
目的：控制台。
2，需求：想把键盘录入的数据存储到一个文件中。
源：键盘。
目的：文件。
3，需求：想要将一个文件的数据打印在控制台上。
源：文件。
目的：控制台。
流操作的基本规律：
最痛苦的就是流对象有很多，不知道该用哪一个。
通过三个明确来完成。
1，明确源和目的。
    源：输入流。InputStream  Reader
    目的：输出流。OutputStream  Writer。
2，操作的数据是否是纯文本。
    是：字符流。
    不是：字节流。
3，当体系明确后，在明确要使用哪个具体的对象。
    通过设备来进行区分：
    源设备：内存，硬盘。键盘
    目的设备：内存，硬盘，控制台。
   
1，将一个文本文件中数据存储到另一个文件中。复制文件。
    源：因为是源，所以使用读取流。InputStream Reader
    是不是操作文本文件。
    是！这时就可以选择Reader
    这样体系就明确了。
    接下来明确要使用该体系中的哪个对象。
    明确设备：硬盘。上一个文件。
    Reader体系中可以操作文件的对象是 FileReader
    是否需要提高效率：是！。加入Reader体系中缓冲区 BufferedReader.
    FileReader fr = new FileReader(&quot;a.txt&quot;);
    BufferedReader bufr = new BufferedReader(fr);
    目的：OutputStream Writer
    是否是纯文本。
    是！Writer。
    设备：硬盘，一个文件。
    Writer体系中可以操作文件的对象FileWriter。
    是否需要提高效率：是！。加入Writer体系中缓冲区 BufferedWriter
   
    FileWriter fw = new FileWriter(&quot;b.txt&quot;);
    BufferedWriter bufw = new BufferedWriter(fw);
练习：将一个图片文件中数据存储到另一个文件中。复制文件。要按照以上格式自己完成三个明确。
---------------------------------------
2，需求：将键盘录入的数据保存到一个文件中。
    这个需求中有源和目的都存在。
    那么分别分析
    源：InputStream Reader
    是不是纯文本？是！Reader
   
    设备：键盘。对应的对象是System.in.
    不是选择Reader吗？System.in对应的不是字节流吗？
    为了操作键盘的文本数据方便。转成字符流按照字符串操作是最方便的。
    所以既然明确了Reader，那么就将System.in转换成Reader。
    用了Reader体系中转换流,InputStreamReader
    InputStreamReader isr = new InputStreamReader(System.in);
    需要提高效率吗？需要！BufferedReader
    BufferedReader bufr = new BufferedReader(isr);
    目的：OutputStream  Writer
    是否是存文本？是！Writer。
    设备：硬盘。一个文件。使用 FileWriter。
    FileWriter fw = new FileWriter(&quot;c.txt&quot;);
    需要提高效率吗？需要。
    BufferedWriter bufw = new BufferedWriter(fw);
    **************
    扩展一下，想要把录入的数据按照指定的编码表（utf-8），将数据存到文件中。
   
    目的：OutputStream  Writer
    是否是存文本？是！Writer。
    设备：硬盘。一个文件。使用 FileWriter。
    但是FileWriter是使用的默认编码表。GBK.
   
    但是存储时，需要加入指定编码表utf-8。而指定的编码表只有转换流可以指定。
    所以要使用的对象是OutputStreamWriter。
    而该转换流对象要接收一个字节输出流。而且还可以操作的文件的字节输出流。FileOutputStream
    OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(&quot;d.txt&quot;),&quot;UTF-8&quot;);
    需要高效吗？需要。
    BufferedWriter bufw = new BufferedWriter(osw);
    所以，记住。转换流什么使用。字符和字节之间的桥梁，通常，涉及到字符编码转换时，
    需要用到转换流。

*/</span>  <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TransStreamDemo2</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setIn</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;PersonDemo.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setOut</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PrintStream</span><span class="token punctuation">(</span><span class="token string">&quot;zzz.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 键盘的最常见写法。</span>
    <span class="token class-name">BufferedReader</span> bufr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BufferedWriter</span> bufw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> line <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> bufr<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;over&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      bufw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      bufw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      bufw<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    bufr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="字符流写入缓冲区" tabindex="-1"><a class="header-anchor" href="#字符流写入缓冲区" aria-hidden="true">#</a> 字符流写入缓冲区</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 缓冲区的出现是为了提高流的操作效率而出现的。
 *
 * 所以在创建缓冲区之前，必须要先有流对象。
 *
 * 该缓冲区中提供了一个跨平台的换行符。 newLine();
 *
 */</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">BufferedWriterDemo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个字符写入流对象。</span>
    <span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;buf.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 为了提高字符写入流效率。加入了缓冲技术。</span>
    <span class="token comment">// 只要将需要被提高效率的流对象作为参数传递给缓冲区的构造函数即可。</span>
    <span class="token class-name">BufferedWriter</span> bufw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span>fw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bufw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      bufw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      bufw<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 记住，只要用到缓冲区，就要记得刷新。</span>
    <span class="token comment">// bufw.flush();</span>
    <span class="token comment">// 其实关闭缓冲区，就是在关闭缓冲区中的流对象。</span>
    bufw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">CopyTextByBuf</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">BufferedReader</span> bufr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">BufferedWriter</span> bufw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      bufr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;BufferedWriterDemo.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      bufw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;bufWriter_Copy.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">String</span> line <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> bufr<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bufw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
        bufw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bufw<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;读写失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bufr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          bufr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;读取关闭失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bufw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          bufw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;写入关闭失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="字符流读入缓冲区" tabindex="-1"><a class="header-anchor" href="#字符流读入缓冲区" aria-hidden="true">#</a> 字符流读入缓冲区</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 字符读取流缓冲区： 该缓冲区提供了一个一次读一行的方法 readLine，方便于对文本数据的获取。 当返回null时，表示读到文件末尾。
 *
 * readLine方法返回的时候只返回回车符之前的数据内容。并不返回回车符。
 */</span>
<span class="token keyword">class</span> <span class="token class-name">BufferedReaderDemo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个读取流对象和文件相关联。</span>
    <span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;buf.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 为了提高效率。加入缓冲技术。将字符读取流对象作为参数传递给缓冲对象的构造函数。</span>
    <span class="token class-name">BufferedReader</span> bufr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> line <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> bufr<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    bufr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 读取一个.java文件，并打印在控制台上。</span>
<span class="token keyword">class</span> <span class="token class-name">FileReaderTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;DateDemo.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="字符流复制文件" tabindex="-1"><a class="header-anchor" href="#字符流复制文件" aria-hidden="true">#</a> 字符流复制文件</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>

<span class="token comment">//将C盘一个文本文件复制到D盘。</span>
<span class="token comment">/*
复制的原理：
其实就是将C盘下的文件数据存储到D盘的一个文件中。
步骤：
1，在D盘创建一个文件。用于存储C盘文件中的数据。
2，定义读取流和C盘文件关联。
3，通过不断的读写完成数据存储。
4，关闭资源。
*/</span>
<span class="token function">copy_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 使用缓冲区
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">copy_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;SystemDemo_copy.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;SystemDemo.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;读写失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>fr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>fw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 从C盘读一个字符，就往D盘写一个字符。</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">copy_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
<span class="token comment">// 创建目的地。</span>
<span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;RuntimeDemo_copy.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 与已有文件关联。</span>
<span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;RuntimeDemo.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> ch <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="字节流缓冲" tabindex="-1"><a class="header-anchor" href="#字节流缓冲" aria-hidden="true">#</a> 字节流缓冲</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileByte</span> <span class="token punctuation">{</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 复制文件的起始时间</span>
          <span class="token keyword">long</span> s <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 定义输入\\输出流为mull</span>
          <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token comment">// 手动抛出异常</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
              <span class="token comment">// 读取文件</span>
              fis <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;d:\\\\digui.mp4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token comment">// 读取完毕复制的文件</span>
              fos <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;d:\\\\dd.mp4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token comment">// 定义一个字节数组  存到数组b中</span>
              <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
              <span class="token comment">// 起始长度为0</span>
              <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
              <span class="token comment">// while(){} 循环   一边读取 ，一边写入（复制）文件</span>
              <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                  fos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  文件刷新</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;文件复制失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 手动抛除异常</span>
              <span class="token comment">// 最终执行语句</span>
          <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
              <span class="token comment">// 复制的文件不为空时  关闭释放资源</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>fos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">try</span> <span class="token punctuation">{</span>
                      fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                      <span class="token keyword">if</span> <span class="token punctuation">(</span>fis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          <span class="token keyword">try</span> <span class="token punctuation">{</span>
                              fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                              <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                              <span class="token keyword">throw</span> <span class="token keyword">new</span>  <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;文件复制失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                          <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 复制文件的结束时间   单位：ms 毫秒</span>
          <span class="token keyword">long</span> e <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token operator">-</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,12),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","iod_bufer.html.vue"]]);export{i as default};
