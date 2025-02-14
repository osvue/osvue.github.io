import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 使用class关键字来定义一个类</span>
<span class="token comment">/*
*   对象中主要包含了两个部分：
*       属性
*       方法
* */</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>

    <span class="token comment">/*
    *   直接定义的属性是实例属性，需要通过对象的实例去访问：
    *       const per = new Person();
    *       per.name
    *
    *   使用static开头的属性是静态属性（类属性），可以直接通过类去访问
    *       Person.age
    *
    *   readonly开头的属性表示一个只读的属性无法修改
    * */</span>

    <span class="token comment">// 定义实例属性</span>
    <span class="token comment">// readonly name: string = &#39;孙悟空&#39;;</span>
    name <span class="token operator">=</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 在属性前使用static关键字可以定义类属性（静态属性）</span>
    <span class="token comment">// static readonly age: number = 18;</span>
    age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>


    <span class="token comment">// 定义方法</span>
    <span class="token comment">/*
    * 如果方法以static开头则方法就是类方法，可以直接通过类去调用
    * */</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello 大家好！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// console.log(per);</span>
<span class="token comment">// console.log(per.name, per.age);</span>

<span class="token comment">// console.log(Person.age);</span>

<span class="token comment">// console.log(per.name);</span>
<span class="token comment">// per.name = &#39;tom&#39;;</span>
<span class="token comment">// console.log(per.name);</span>

<span class="token comment">// per.sayHello();</span>

<span class="token comment">// Person.sayHello();</span>
per<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



</code></pre></div><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token comment">// constructor 被称为构造函数</span>
    <span class="token comment">//  构造函数会在对象创建时调用</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在实例方法中，this就表示当前当前的实例</span>
        <span class="token comment">// 在构造函数中当前对象就是当前新建的那个对象</span>
        <span class="token comment">// 可以通过this向新建的对象中添加属性</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// alert(&#39;汪汪汪！&#39;);</span>
        <span class="token comment">// 在方法中可以通过this来表示当前调用方法的对象</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;小黑&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dog2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;小白&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// console.log(dog);</span>
<span class="token comment">// console.log(dog2);</span>

dog2<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// 定义一个Animal类</span>
    <span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动物在叫~&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    * Dog extends Animal
    *   - 此时，Animal被称为父类，Dog被称为子类
    *   - 使用继承后，子类将会拥有父类所有的方法和属性
    *   - 通过继承可以将多个类中共有的代码写在一个父类中，
    *       这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
    *       如果希望在子类中添加一些父类中没有的属性或方法直接加就行
    *   - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
    *       这种子类覆盖掉父类方法的形式，我们称为方法重写
    *
    * */</span>
    <span class="token comment">// 定义一个表示狗的类</span>
    <span class="token comment">// 使Dog类继承Animal类</span>
    <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

        <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">在跑~~~</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;汪汪汪汪！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// 定义一个表示猫的类</span>
    <span class="token comment">// 使Cat类继承Animal类</span>
    <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;喵喵喵喵！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;旺财&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&#39;咪咪&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cat<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="super" tabindex="-1"><a class="header-anchor" href="#super" aria-hidden="true">#</a> super</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动物在叫~&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

        age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的构造函数</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 在类的方法中 super就表示当前类的父类</span>
            <span class="token comment">//super.sayHello();</span>

            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;汪汪汪汪！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;旺财&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> abstract</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">/*
    *   以abstract开头的类是抽象类，
    *       抽象类和其他类区别不大，只是不能用来创建对象
    *       抽象类就是专门用来被继承的类
    *
    *       抽象类中可以添加抽象方法
    * */</span>
    <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 定义一个抽象方法</span>
        <span class="token comment">// 抽象方法使用 abstract开头，没有方法体</span>
        <span class="token comment">// 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写</span>
        <span class="token keyword">abstract</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;汪汪汪汪！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;喵喵喵喵！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;旺财&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> interface</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 描述一个对象的类型</span>
    <span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    *   接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    *       同时接口也可以当成类型声明去使用
    * */</span>
    <span class="token keyword">interface</span> <span class="token class-name">myInterface</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">myInterface</span> <span class="token punctuation">{</span>
        gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// const obj: myInterface = {</span>
    <span class="token comment">//     name: &#39;sss&#39;,</span>
    <span class="token comment">//     age: 111,</span>
    <span class="token comment">//     gender: &#39;男&#39;</span>
    <span class="token comment">// };</span>

    <span class="token comment">/*
    * 接口可以在定义类的时候去限制类的结构，
    *   接口中的所有的属性都不能有实际的值
    *   接口只定义对象的结构，而不考虑实际值
    *       在接口中所有的方法都是抽象方法
    *
    * */</span>
    <span class="token keyword">interface</span> <span class="token class-name">myInter</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */</span>
    <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">implements</span> <span class="token class-name">myInter</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;大家好~~&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="get-set" tabindex="-1"><a class="header-anchor" href="#get-set" aria-hidden="true">#</a> get / set</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 定义一个表示人的类</span>
    <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
        <span class="token comment">// TS可以在属性前添加属性的修饰符</span>
        <span class="token comment">/*
        *   public 修饰的属性可以在任意位置访问（修改） 默认值
        *   private 私有属性，私有属性只能在类内部进行访问（修改）
        *       - 通过在类中添加方法使得私有属性可以被外部访问
        *   protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
        *
        * */</span>
        <span class="token keyword">private</span> _name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        <span class="token keyword">private</span> _age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
        *   getter方法用来读取属性
        *   setter方法用来设置属性
        *       - 它们被称为属性的存取器
        * */</span>
 

        <span class="token comment">// TS中设置getter方法的方式</span>
        <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// console.log(&#39;get name()执行了！！&#39;);</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    * 现在属性是在对象中设置的，属性可以任意的被修改,
    *   属性可以任意被修改将会导致对象中的数据变得非常不安全
    * */</span>

    <span class="token comment">// per.setName(&#39;猪八戒&#39;);</span>
    <span class="token comment">// per.setAge(-33);</span>

    per<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;猪八戒&#39;</span><span class="token punctuation">;</span>
    per<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">33</span><span class="token punctuation">;</span>

    <span class="token comment">// console.log(per);</span>


    <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
        <span class="token keyword">protected</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>

        <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// b.num = 33;</span>


   <span class="token comment">/* class C{

        name: string;
        age: number

        // 可以直接将属性定义在构造函数中
        constructor(name: string, age: number) {
            this.name = name;
             this.age = age;
        }

    }*/</span>

    <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">{</span>

        <span class="token comment">// 可以直接将属性定义在构造函数中</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,14),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(t,[["render",e],["__file","tsclass.html.vue"]]);export{i as default};
