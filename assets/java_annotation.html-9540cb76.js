import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
 
	<span class="token doc-comment comment">/**
	 * The value may indicate a suggestion for a logical component name,
	 * to be turned into a Spring bean in case of an autodetected component.
	 * <span class="token keyword">@return</span> the suggested component name, if any
	 */</span>
	<span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
</code></pre></div><h2 id="target-elementtype-type-注解" tabindex="-1"><a class="header-anchor" href="#target-elementtype-type-注解" aria-hidden="true">#</a> @Target({ElementType.TYPE}) 注解</h2><p>ElementType 这个枚举类型的常量提供了一个简单的分类：注释可能出现在Java程序中的语法位置（这些常量与元注释类型(@Target)一起指定在何处写入注释的合法位置）</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation</span><span class="token punctuation">;</span>
 
<span class="token doc-comment comment">/**
 * The constants of this enumerated type provide a simple classification of the
 * syntactic locations where annotations may appear in a Java program. These
 * constants are used in <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Target</span></span> java.lang.annotation.Target<span class="token punctuation">}</span>
 * meta-annotations to specify where it is legal to write annotations of a
 * given type.
 * <span class="token keyword">@author</span>  Joshua Bloch
 * <span class="token keyword">@since</span> 1.5
 * <span class="token keyword">@jls</span> 9.6.4.1 @Target
 * <span class="token keyword">@jls</span> 4.1 The Kinds of Types and Values
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ElementType</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 类, 接口 (包括注释类型), 或 枚举 声明 */</span>
    <span class="token constant">TYPE</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/** 字段声明（包括枚举常量） */</span>
    <span class="token constant">FIELD</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/** 方法声明(Method declaration) */</span>
    <span class="token constant">METHOD</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/** 正式的参数声明 */</span>
    <span class="token constant">PARAMETER</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/** 构造函数声明 */</span>
    <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/** 局部变量声明 */</span>
    <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/** 注释类型声明 */</span>
    <span class="token constant">ANNOTATION_TYPE</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/** 包声明 */</span>
    <span class="token constant">PACKAGE</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/**
     * 类型参数声明
     *
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_PARAMETER</span><span class="token punctuation">,</span>
 
    <span class="token doc-comment comment">/**
     * 使用的类型
     *
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_USE</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="retention-retentionpolicy-runtime-注解" tabindex="-1"><a class="header-anchor" href="#retention-retentionpolicy-runtime-注解" aria-hidden="true">#</a> @Retention({RetentionPolicy.Runtime}) 注解</h2><p>RetentionPolicy这个枚举类型的常量描述保留注释的各种策略，它们与元注释(@Retention)一起指定注释要保留多长时间</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * Annotation retention policy.  The constants of this enumerated type
 * describe the various policies for retaining annotations.  They are used
 * in conjunction with the <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Retention</span></span><span class="token punctuation">}</span> meta-annotation type to specify
 * how long annotations are to be retained.
 *
 * <span class="token keyword">@author</span>  Joshua Bloch
 * <span class="token keyword">@since</span> 1.5
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">RetentionPolicy</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 注释只在源代码级别保留，编译时被忽略
     */</span>
    <span class="token constant">SOURCE</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 注释将被编译器在类文件中记录
     * 但在运行时不需要JVM保留。这是默认的
     * 行为.
     */</span>
    <span class="token constant">CLASS</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     *注释将被编译器记录在类文件中
     *在运行时保留VM，因此可以反读。
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">AnnotatedElement</span></span>
     */</span>
    <span class="token constant">RUNTIME</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="documented注解" tabindex="-1"><a class="header-anchor" href="#documented注解" aria-hidden="true">#</a> @Documented注解</h2><p>Documented注解表明这个注释是由 javadoc记录的，在默认情况下也有类似的记录工具。 如果一个类型声明被注释了文档化，它的注释成为公共API的一部分。</p><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> <strong>@Target</strong></h3><p>用于描述注解的使用范围（即：被描述的注解可以用在什么地方），其取值有：</p><table><thead><tr><th>取值</th><th>描述</th></tr></thead><tbody><tr><td>CONSTRUCTOR</td><td>用于描述构造器（领盒饭）。</td></tr><tr><td>FIELD</td><td>用于描述域（领盒饭）。</td></tr><tr><td>LOCAL_VARIABLE</td><td>用于描述局部变量（领盒饭）。</td></tr><tr><td><strong>METHOD</strong></td><td>用于描述方法。</td></tr><tr><td>PACKAGE</td><td>用于描述包（领盒饭）。</td></tr><tr><td><strong>PARAMETER</strong></td><td>用于描述参数。</td></tr><tr><td>TYPE</td><td>用于描述类或接口（甚至 enum ）。</td></tr></tbody></table><h3 id="retention" tabindex="-1"><a class="header-anchor" href="#retention" aria-hidden="true">#</a> <strong>@Retention</strong></h3><p>用于描述注解的生命周期（即：被描述的注解在什么范围内有效），其取值有：</p><table><thead><tr><th>取值</th><th>描述</th></tr></thead><tbody><tr><td>SOURCE</td><td>在源文件中有效（即源文件保留，领盒饭）。</td></tr><tr><td>CLASS</td><td>在 class 文件中有效（即 class 保留，领盒饭）。</td></tr><tr><td><strong>RUNTIME</strong></td><td>在运行时有效（即运行时保留）。</td></tr></tbody></table><p><strong>@Documented</strong> 在默认的情况下javadoc命令不会将我们的annotation生成再doc中去的，所以使用该标记就是告诉jdk让它也将annotation生成到doc中去</p><p><strong>@Inherited</strong> 比如有一个类A，在他上面有一个标记annotation，那么A的子类B是否不用再次标记annotation就可以继承得到呢，答案是肯定的</p><h3 id="annotation属性值" tabindex="-1"><a class="header-anchor" href="#annotation属性值" aria-hidden="true">#</a> <strong>Annotation属性值</strong></h3><p><strong>Annotation属性值</strong> 有以下三种： 基本类型、数组类型、枚举类型</p><p>1：基本串类型</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UserdefinedAnnotation</span> <span class="token punctuation">{</span>  
    <span class="token function">intvalue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">String</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
使用：
<span class="token annotation punctuation">@UserdefinedAnnotation</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&quot;wangwenjun&quot;</span><span class="token punctuation">,</span>address<span class="token operator">=</span><span class="token string">&quot;火星&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre></div><p>如果一个annotation中只有一个属性名字叫value，我没在使用的时候可以给出属性名也可以省略。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UserdefinedAnnotation</span> <span class="token punctuation">{</span>  
    <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
也可以写成如下的形式 

<span class="token class-name">Java</span>代码  
<span class="token annotation punctuation">@UserdefinedAnnotation</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>  等同于<span class="token annotation punctuation">@UserdefinedAnnotation</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">)</span> 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
</code></pre></div><p>2：数组类型 我们在自定义annotation中定义一个数组类型的属性，代码如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UserdefinedAnnotation</span> <span class="token punctuation">{</span>  
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
使用：  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UseAnnotation</span> <span class="token punctuation">{</span>  
      
    <span class="token annotation punctuation">@UserdefinedAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>注意1：其中123外面的大括号是可以被省略的，因为只有一个元素，如果里面有一个以上的元素的话，花括号是不能被省略的哦。比如<code>{123，234}</code>。</p></li><li><p>注意2：其中属性名value我们在使用的时候进行了省略，那是因为他叫value，如果是其他名字我们就不可以进行省略了必须是<code>@UserdefinedAnnotation</code>（属性名=<code>{123,234}</code>）这样的格式。</p><h4 id="_3-枚举类型" tabindex="-1"><a class="header-anchor" href="#_3-枚举类型" aria-hidden="true">#</a> 3：枚举类型</h4></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DateEnum</span> <span class="token punctuation">{</span>  
    <span class="token class-name">Monday</span><span class="token punctuation">,</span><span class="token class-name">Tuesday</span><span class="token punctuation">,</span><span class="token class-name">Wednesday</span><span class="token punctuation">,</span><span class="token class-name">Thursday</span><span class="token punctuation">,</span><span class="token class-name">Friday</span><span class="token punctuation">,</span><span class="token class-name">Saturday</span><span class="token punctuation">,</span><span class="token class-name">Sunday</span>  
<span class="token punctuation">}</span>  
然后在定义一个annotation  
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wangwenjun<span class="token punctuation">.</span>annatation<span class="token punctuation">.</span>userdefined</span><span class="token punctuation">;</span>  
  
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UserdefinedAnnotation</span> <span class="token punctuation">{</span>  
    <span class="token class-name">DateEnum</span> <span class="token function">week</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
使用： 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UseAnnotation</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@UserdefinedAnnotation</span><span class="token punctuation">(</span>week<span class="token operator">=</span><span class="token class-name">DateEnum<span class="token punctuation">.</span>Sunday</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_4-默认值" tabindex="-1"><a class="header-anchor" href="#_4-默认值" aria-hidden="true">#</a> 4：默认值</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UserdefinedAnnotation</span> <span class="token punctuation">{</span>  
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
使用：  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UseAnnotation</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@UserdefinedAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-注意" tabindex="-1"><a class="header-anchor" href="#_5-注意" aria-hidden="true">#</a> 5：注意</h4><p>Annotation是不可以继承其他接口的，这一点是需要进行注意，这也是annotation的一个规定吧。 　　　　Annotation也是存在包结构的，在使用的时候直接进行导入即可。 　　　　Annotation类型的类型只支持原声数据类型，枚举类型和Class类型的一维数组，其他的类型或者用户自定义的类都是不可以作为annotation的类型，我查看过文档并且进行过测试。</p>`,31),e=[o];function c(l,u){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","java_annotation.html.vue"]]);export{k as default};
