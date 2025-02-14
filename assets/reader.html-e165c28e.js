import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li><p><strong>字符流和字节流：</strong></p><ul><li><p>字节流两个基类： <code>InputStream OutputStream</code></p></li><li><p>字符流两个基类： <code>Reader Writer</code></p></li></ul></li></ul><p>既然IO流是用于操作数据的， 那么数据的最常见体现形式是：文件。</p><ul><li><strong>fileWriter</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//创建一个FileWriter对象。该对象一被初始化就必须要明确被操作的文件。</span>
		<span class="token comment">//而且该文件会被创建到指定目录下。如果该目录下已有同名文件，将被覆盖。</span>
		<span class="token comment">//其实该步就是在明确数据要存放的目的地。</span>
		<span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;demo.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//调用write方法，将字符串写入到流中。</span>
		fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;abcde&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//刷新流对象中的缓冲中的数据。</span>
		<span class="token comment">//将数据刷到目的地中。</span>
		<span class="token comment">//fw.flush();</span>


		<span class="token comment">//关闭流资源，但是关闭之前会刷新一次内部的缓冲中的数据。</span>
		<span class="token comment">//将数据刷到目的地中。</span>
		<span class="token comment">//和flush区别：flush刷新后，流可以继续使用，close刷新后，会将流关闭。</span>
		fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>



    <span class="token comment">//传递一个true参数，代表不覆盖已有的文件。并在已有文件的末尾处进行数据续写。</span>
		<span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;demo.txt&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;nihao\\r\\nxiexie&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
</code></pre></div><ul><li><strong>fileReader</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//创建一个文件读取流对象，和指定名称的文件相关联。</span>
		<span class="token comment">//要保证该文件是已经存在的，如果不存在，会发生异常FileNotFoundException</span>
		<span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;demo.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//调用读取流对象的read方法。</span>
		<span class="token comment">//read():一次读一个字符。而且会自动往下读。</span>
		
		<span class="token keyword">int</span> ch <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch<span class="token operator">=</span>fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
		<span class="token punctuation">}</span>


		<span class="token comment">/*
		while(true)
		{
			int ch = fr.read();
			if(ch==-1)
				break;
			System.out.println(&quot;ch=&quot;+(char)ch);
		}
		*/</span>



		fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","reader.html.vue"]]);export{i as default};
