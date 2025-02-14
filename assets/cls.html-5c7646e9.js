import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="类和方法的概念和实例" tabindex="-1"><a class="header-anchor" href="#类和方法的概念和实例" aria-hidden="true">#</a> 类和方法的概念和实例</h2><h3 id="python类-class" tabindex="-1"><a class="header-anchor" href="#python类-class" aria-hidden="true">#</a> python类：<code>class</code></h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment">#Myclass家族，但是这个家族只有一个人f</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>   
  <span class="token triple-quoted-string string">&quot;&quot;&quot;一个简单的类实例&quot;&quot;&quot;</span>    
  i <span class="token operator">=</span> <span class="token number">12345</span>    
  <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>        
    <span class="token keyword">return</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token comment"># 实例化类</span>
x <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token comment"># 访问类的属性和方法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;MyClass 类的属性 i 为：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">.</span>i<span class="token punctuation">)</span> <span class="token comment">#家族x + 物品名i</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;MyClass 类的方法 f 输出为：&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">.</span>f<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#家族x + 人名f</span>
</code></pre></div><h3 id="类的构造方法-init" tabindex="-1"><a class="header-anchor" href="#类的构造方法-init" aria-hidden="true">#</a> 类的构造方法<code>__init__()</code></h3><ul><li>init()就会被先执行</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Complex</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> realpart<span class="token punctuation">,</span> imagpart<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#必须要有一个self参数，</span>
        self<span class="token punctuation">.</span>r <span class="token operator">=</span> realpart
        self<span class="token punctuation">.</span>i <span class="token operator">=</span> imagpart
x <span class="token operator">=</span> Complex<span class="token punctuation">(</span><span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4.5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>r<span class="token punctuation">,</span> x<span class="token punctuation">.</span>i<span class="token punctuation">)</span>   <span class="token comment"># 输出结果：3.0 -4.5</span>
</code></pre></div><h3 id="类中方法的参数self" tabindex="-1"><a class="header-anchor" href="#类中方法的参数self" aria-hidden="true">#</a> 类中方法的参数<code>self</code></h3><ul><li>在类的内部，使用 <strong>def</strong> 关键字来定义一个方法，与一般函数定义不同，类方法必须包含参数<strong>self</strong>, 且为第一个参数，self代表的是类的实例。</li></ul><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>
<span class="token comment"># 多继承，即可以继承多个父类。继承方式和单继承方式一样，方式如下：</span>

<span class="token comment"># class [子类]([父类]1, [父类]2, [父类]3):</span>


<span class="token keyword">class</span> <span class="token class-name">Parent</span><span class="token punctuation">:</span>        <span class="token comment"># 定义父类</span>
   <span class="token keyword">def</span> <span class="token function">myMethod</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用父类方法&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span><span class="token punctuation">(</span>Parent<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 定义子类</span>
   <span class="token keyword">def</span> <span class="token function">myMethod</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;调用子类方法&#39;</span><span class="token punctuation">)</span>

c <span class="token operator">=</span> Child<span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment"># 子类实例</span>
c<span class="token punctuation">.</span>myMethod<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 子类调用重写方法</span>
<span class="token builtin">super</span><span class="token punctuation">(</span>Child<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span>myMethod<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#用子类对象调用父类已被覆盖的方法</span>
</code></pre></div><h3 id="方法重写" tabindex="-1"><a class="header-anchor" href="#方法重写" aria-hidden="true">#</a> 方法重写</h3><h2 id="类的特殊属性与方法" tabindex="-1"><a class="header-anchor" href="#类的特殊属性与方法" aria-hidden="true">#</a> 类的特殊属性与方法</h2><h3 id="类的私有属性" tabindex="-1"><a class="header-anchor" href="#类的私有属性" aria-hidden="true">#</a> 类的私有属性</h3><ul><li><code>_private_attrs</code>：两个下划线开头，声明该属性为私有，不能在类的外部被使用或直接访问。在类内部的方法中使用时 <code>self.__private_attrs</code>。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">JustCounter</span><span class="token punctuation">:</span>
    __secretCount <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 私有变量</span>
    publicCount <span class="token operator">=</span> <span class="token number">0</span>    <span class="token comment"># 公开变量</span>

    <span class="token keyword">def</span> <span class="token function">count</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__secretCount <span class="token operator">+=</span> <span class="token number">1</span>
        self<span class="token punctuation">.</span>publicCount <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>__secretCount<span class="token punctuation">)</span>

counter <span class="token operator">=</span> JustCounter<span class="token punctuation">(</span><span class="token punctuation">)</span>
counter<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span>
counter<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>publicCount<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>__secretCount<span class="token punctuation">)</span>  <span class="token comment"># 报错，实例不能访问私有变量</span>
</code></pre></div><h3 id="类的私有方法" tabindex="-1"><a class="header-anchor" href="#类的私有方法" aria-hidden="true">#</a> 类的私有方法</h3><ul><li><code>__private_method</code>：两个下划线开头，声明该方法为私有方法，只能在类的内部调用 ，不能在类的外部调用。<code>self.__private_methods</code>。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Site</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name       <span class="token comment"># public</span>
        self<span class="token punctuation">.</span>__url <span class="token operator">=</span> url   <span class="token comment"># private</span>

    <span class="token keyword">def</span> <span class="token function">who</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;name  : &#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;url : &#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>__url<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__foo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>          <span class="token comment"># 私有方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;这是私有方法&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>            <span class="token comment"># 公共方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;这是公共方法&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>__foo<span class="token punctuation">(</span><span class="token punctuation">)</span>

x <span class="token operator">=</span> Site<span class="token punctuation">(</span><span class="token string">&#39;Python&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;www.irvingao.com&#39;</span><span class="token punctuation">)</span>
x<span class="token punctuation">.</span>who<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 正常输出</span>
x<span class="token punctuation">.</span>foo<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 正常输出</span>
x<span class="token punctuation">.</span>__foo<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 报错</span>
</code></pre></div>`,18),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","cls.html.vue"]]);export{k as default};
