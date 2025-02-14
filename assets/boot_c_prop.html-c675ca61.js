import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><ul><li>在之前的项目开发中，我们可以使用xml,properties进行相关的配置，这种配置方式比较简单，但是在应对复杂的商业需求下，多环境和编程化的配置无法得到满足，因此springboot为我们提供了YAML的配置方式丰富功能和简化开发。</li></ul><h2 id="properties配置详解" tabindex="-1"><a class="header-anchor" href="#properties配置详解" aria-hidden="true">#</a> Properties配置详解</h2><p>​ 通常情况下，我们可以使用properties文件进行相关的配置。</p><p>​ （1）在resources目录下创建application.properties</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">person.name</span><span class="token punctuation">=</span><span class="token value attr-value">zhangsan</span>
<span class="token key attr-name">person.age</span><span class="token punctuation">=</span><span class="token value attr-value">12</span>
<span class="token key attr-name">person.gender</span><span class="token punctuation">=</span><span class="token value attr-value">男</span>
<span class="token key attr-name">person.desc</span><span class="token punctuation">=</span><span class="token value attr-value">my name is \${person.name},my age is \${person.age}</span>
</code></pre></div><p>​ （2）创建对应的实体类对象</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${person.name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${person.age}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${person.desc}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> desc<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, sex=&#39;&quot;</span> <span class="token operator">+</span> sex <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, desc=&#39;&quot;</span> <span class="token operator">+</span> desc <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>​ （3）创建对应的测试类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ConfigApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">Person</span> person<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>​ 可以在properties文件中使用随机数</p><p>​ （1）在application.properties文件中添加如下属性</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">my.secret</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.value}</span>
<span class="token key attr-name">my.number</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.int}</span>
<span class="token key attr-name">my.bignumber</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.long}</span>
<span class="token key attr-name">my.uuid</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.uuid}</span>
<span class="token key attr-name">my.number.less.than.ten</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.int(10)}</span>
<span class="token key attr-name">my.number.in.range</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.int[1024,65536]}</span>
</code></pre></div><p>​ （2）创建对应的实体类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">My</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${my.secret}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> screct<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${my.number}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> number<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${my.bignumber}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> bignumber<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${my.uuid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">UUID</span> uuid<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${my.number.less.than.ten}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> lessThanTen<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${my.number.in.range}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> numberInRangel<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;My{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;screct=&quot;</span> <span class="token operator">+</span> screct <span class="token operator">+</span>
                <span class="token string">&quot;, number=&quot;</span> <span class="token operator">+</span> number <span class="token operator">+</span>
                <span class="token string">&quot;, bignumber=&quot;</span> <span class="token operator">+</span> bignumber <span class="token operator">+</span>
                <span class="token string">&quot;, uuid=&quot;</span> <span class="token operator">+</span> uuid <span class="token operator">+</span>
                <span class="token string">&quot;, lessThanTen=&quot;</span> <span class="token operator">+</span> lessThanTen <span class="token operator">+</span>
                <span class="token string">&quot;, numberInRangel=&quot;</span> <span class="token operator">+</span> numberInRangel <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>​ （3）创建对应的测试类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ConfigApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">My</span> my<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>my<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>​ 多环境配置</p><p>​ 在实际开发中，我们的一套代码可能会被同时部署到开发、测试、生产等多个服务器中，每个环境中诸如数据库密码等这些个性化配置是避免不了的，虽然我们可以通过自动化运维部署的方式使用外部参数在服务启动时临时替换属性值，但这也意味着运维成本增高。</p><p>​ 1、在resources目录下创建多个配置文件</p><p>​ application-dev.properties</p><p>​ application-test.properties</p><p>​ application-prod.properties</p><p>​ application.properties</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token value attr-value">dev/test/prod</span>
</code></pre></div><h3 id="_2、yaml" tabindex="-1"><a class="header-anchor" href="#_2、yaml" aria-hidden="true">#</a> 2、YAML</h3><p>​ YAML是“YAML Ain&#39;t Markup Language YAML不是一种标记语言”的外语缩写，但为了强调这种语言以数据做为中心，而不是以置标语言为重点，而用返璞词重新命名。它是一种直观的能够被电脑识别的数据序列化格式，是一个可读性高并且容易被人类阅读，容易和脚本语言交互，用来表达资料序列的编程语言。它是类似于标准通用标记语言的子集XML的数据描述语言，语法比XML简单很多。</p><div class="language-tex" data-ext="tex"><pre class="language-tex"><code>基本原则：
1、大小写敏感 
2、使用缩进表示层级关系 
3、禁止使用tab缩进，只能使用空格键 
4、缩进长度没有限制，只要元素对齐就表示这些元素属于一个层级。 
5、使用#表示注释 
6、字符串可以不用引号标注
</code></pre></div><p>（1）使用yaml完成多环境配置:application.yaml</p><div class="language-text" data-ext="text"><pre class="language-text"><code>spring:
  profiles:
    active: test
---
spring:
  profiles: dev
server:
  port: 8080
---
spring:
  profiles: test
server:
  port: 8081
</code></pre></div><p>（2）使用yaml进行相关参数的设置</p><div class="language-text" data-ext="text"><pre class="language-text"><code>person:
  name: zhangsan
  age: 12
  sex: 男
  desc: my name is \${person.name},my age is \${person.age}
</code></pre></div><p>对应的实体类对象</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token comment">//    @Value(&quot;\${person.name}&quot;)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token comment">//    @Value(&quot;\${person.age}&quot;)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>
<span class="token comment">//    @Value(&quot;\${person.desc}&quot;)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> desc<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, sex=&#39;&quot;</span> <span class="token operator">+</span> sex <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, desc=&#39;&quot;</span> <span class="token operator">+</span> desc <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3、-configurationproperties-与-value-对比" tabindex="-1"><a class="header-anchor" href="#_3、-configurationproperties-与-value-对比" aria-hidden="true">#</a> 3、@ConfigurationProperties 与 @Value 对比</h3><table><thead><tr><th>功能</th><th>@ConfigurationProperties</th><th>@Value</th></tr></thead><tbody><tr><td>松散绑定</td><td>是</td><td>否</td></tr><tr><td>元数据支持</td><td>是</td><td>否</td></tr><tr><td>spEL表达式</td><td>否</td><td>是</td></tr></tbody></table>`,36),o=[e];function c(l,u){return a(),s("div",null,o)}const i=n(p,[["render",c],["__file","boot_c_prop.html.vue"]]);export{i as default};
