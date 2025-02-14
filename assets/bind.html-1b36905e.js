import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>Http请求传递的数据都是字符串String类型的，上面这个方法在Controller中定义</li><li>如果该方法对应的地址接收到到浏览器的请求的话，并且请求中含有num和birth参数，</li><li>那么num会被自动转换成Integer对象；birth会被自动转为Date对象(Date转换需要配置属性编辑器)。</li></ul><h3 id="propertyeditor是属性编辑器的接口" tabindex="-1"><a class="header-anchor" href="#propertyeditor是属性编辑器的接口" aria-hidden="true">#</a> PropertyEditor是属性编辑器的接口</h3><ul><li>有个方法setAsText很重要。 比如String对象&quot;1&quot;要使用属性编辑器转换成Integer对象，通过setAsText里Integer.parseInt(text)得到Integer对象，然后将Integer对象保存到属性中。</li><li>它的基本实现类是<strong>PropertyEditorSupport</strong>，一般我们要编写自定义的属性编辑器只需要继承这个类即可。</li><li>Spring中有很多自定义的属性编辑器，都在<strong>spring-beans jar</strong>包下的<strong>org.springframework.beans.propertyeditors</strong>包里。</li></ul><h2 id="springmvc是如何实现参数的自动收集的" tabindex="-1"><a class="header-anchor" href="#springmvc是如何实现参数的自动收集的" aria-hidden="true">#</a> springmvc是如何实现参数的自动收集的</h2><blockquote><p>对于String，number（int double float..）以及boolean类型，springmvc会自动将它们与我们的po bean进行绑定</p></blockquote><blockquote><p><strong>ServletRequestDataBinder</strong></p></blockquote><ol><li>PropertyEditorRegistry接口 <ol><li>封装方法来给JavaBean注册对应的属性编辑器。</li><li><strong>PropertyEditorRegistrySupport：PropertyEditorRegistry接口的基础实现类</strong><ol><li>PropertyEditorRegistrySupport类有个createDefaultEditors方法，会创建默认的属性编辑器。</li></ol></li><li><strong>TypeConverter接口</strong> 类型转换接口。 通过该接口，可以将value转换为requiredType类型的对象。</li></ol></li><li>TypeConverterSupport：TypeConverter基础实现类，并继承了PropertyEditorRegistrySupport</li></ol><p>有个属性typeConverterDelegate，类型为TypeConverterDelegate，TypeConverterSupport将类型转换委托给typeConverterDelegate操作。</p><ol start="5"><li>TypeConverterDelegate</li></ol><p>类型转换委托类。具体的类型转换操作由此类完成。</p><ol start="6"><li>SimpleTypeConverter</li></ol><p>TypeConverterSupport的子类，使用了PropertyEditorRegistrySupport(父类TypeConverterSupport的父类PropertyEditorRegistrySupport)中定义的默认属性编辑器。</p><ol start="7"><li>PropertyAccessor接口</li></ol><p>对类中属性操作的接口。</p><ol start="8"><li>BeanWrapper接口</li></ol><p>继承ConfigurablePropertyAccessor(继承PropertyAccessor、PropertyEditorRegistry、TypeConverter接口)接口的操作Spring中JavaBean的核心接口。</p><ol start="9"><li>BeanWrapperImpl类</li></ol><p>BeanWrapper接口的默认实现类，TypeConverterSupport是它的父类，可以进行类型转换，可以进行属性设置。</p><ol start="10"><li>DataBinder类</li></ol><p>实现PropertyEditorRegistry、TypeConverter的类。支持类型转换，参数验证，数据绑定等功能。</p><p>有个属性SimpleTypeConverter，用来进行类型转换操作。</p><ol start="11"><li>WebDataBinder</li></ol><p>DataBinder的子类，主要是针对Web请求的数据绑定。</p><ul><li>在程序内部，DataBinder实例内部使用一个BeanWrapperImpl实例，负责设置命令对象的值。</li><li>通过getPropertyType方法，获取属性类型。</li><li>对于request请求，spring将会调用</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">BeanWrapperImpl</span> beanWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BeanWrapperImpl</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token class-name">Clazz</span> requiredType <span class="token operator">=</span> beanWrapper<span class="token punctuation">.</span><span class="token function">getPropertyType</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>接下来完成类型的转换 <code>beanWrapper.convertIfNecessary(&quot;Tom&quot;, requiredType, methodParam)</code></p><h2 id="springmvc自定义类型转换" tabindex="-1"><a class="header-anchor" href="#springmvc自定义类型转换" aria-hidden="true">#</a> springmvc自定义类型转换</h2><ul><li>如果springmvc遇到了其内部不能进行转换的request parameter呢？那么就需要注册PropertyEditor</li><li>举例来说，<strong>java.util.Date</strong> 不知道 <code>13/09/2010</code> 代表什么，</li><li>所有要由我们程告诉spring（因为Date的格式有多种，所以spring不好来进行直接转换，需要我们自己定义格式来转换）</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>binder<span class="token punctuation">.</span><span class="token function">registerCustomEditor</span><span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">PropertyEditorSupport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAsText</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;dd/MM/yyyy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
<span class="token doc-comment comment">/**
  * 这个方法似乎没什么用
  */</span>
 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAsText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;dd/MM/yyyy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>        
 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>当调用convertIfNecessary方法时，spring会寻找所有注册了的PropertyEditor来处理数据的绑定。</li><li>为了注册我们的PropertyEditor，在spring3.0中，使用</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@InitBinder</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">binder</span><span class="token punctuation">(</span><span class="token class-name">WebDataBinder</span> binder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// as shown above 上面的代码</span>
<span class="token punctuation">}</span> 
</code></pre></div><ul><li>controller有两种写法 <ul><li>写法二是原始写法，直接new PropertyEditorSupport类，</li><li>写法一使用spring提供的CustomDateEditor实现类，其实际上继承了PropertyEditorSupport类</li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserAction</span> <span class="token punctuation">{</span>
    <span class="token comment">//自定义类型转换器 如果springmvc遇到不能进行转换的Date类型</span>
	<span class="token comment">//通过名称来对应调用这个方法</span>
 
    <span class="token comment">//写法1 使用spring提供的CustomDateEditor实现类，其实际上继承了PropertyEditorSupport类</span>
    <span class="token annotation punctuation">@InitBinder</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initBinder</span><span class="token punctuation">(</span><span class="token class-name">ServletRequestDataBinder</span> binder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        binder<span class="token punctuation">.</span><span class="token function">registerCustomEditor</span><span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CustomDateEditor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//写法2 直接使用PropertyEditorSupport类</span>
    <span class="token annotation punctuation">@InitBinder</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">binder</span><span class="token punctuation">(</span><span class="token class-name">WebDataBinder</span> binder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        binder<span class="token punctuation">.</span><span class="token function">registerCustomEditor</span><span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">PropertyEditorSupport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAsText</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalArgumentException</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd hh:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/register&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">,</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getHiredate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;员工注册成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,33),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","bind.html.vue"]]);export{r as default};
