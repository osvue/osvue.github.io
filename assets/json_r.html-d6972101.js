import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding" aria-hidden="true">#</a> encoding</h3><p>将字典中的中文正确的输出，可以将d转换成json字符串，转换时使用</p><ul><li><code>json.dumps(d, ensure_ascii=False, encoding=&#39;utf-8&#39;)</code></li></ul><h3 id="python-json" tabindex="-1"><a class="header-anchor" href="#python-json" aria-hidden="true">#</a> python Json</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pymysql <span class="token keyword">import</span>  <span class="token operator">*</span>
<span class="token keyword">from</span> pymysql <span class="token keyword">import</span> cursors
<span class="token keyword">import</span> json

<span class="token keyword">def</span> <span class="token function">getConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> connect<span class="token punctuation">(</span>user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>password<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>database<span class="token operator">=</span><span class="token string">&#39;ssm&#39;</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span> cursorclass<span class="token operator">=</span>cursors<span class="token punctuation">.</span>DictCursor<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">queryBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resultArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    conn <span class="token operator">=</span> getConn<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> conn<span class="token punctuation">:</span>
        cursor<span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
        sql<span class="token operator">=</span><span class="token string">&#39;select   id ,title ,author, summary from book &#39;</span>
        cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
        results <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> item <span class="token keyword">in</span> results<span class="token punctuation">:</span>
            <span class="token comment">#  将字典转化为 JSON 转 JSON 对象</span>
            jdata <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>item<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span> <span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>jdata<span class="token punctuation">)</span>
            resultArr<span class="token punctuation">.</span>append<span class="token punctuation">(</span>jdata<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;not found conn&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>  resultArr

rarr <span class="token operator">=</span> queryBook<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> sampleJson <span class="token keyword">in</span> rarr<span class="token punctuation">:</span>
    <span class="token comment"># 加载</span>
    item <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>sampleJson <span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;sampleJson.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> write_file<span class="token punctuation">:</span>
        json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>sampleJson<span class="token punctuation">,</span> write_file<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> sort_keys<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="json-dumps-和-json-loads" tabindex="-1"><a class="header-anchor" href="#json-dumps-和-json-loads" aria-hidden="true">#</a> json.dumps() 和 json.loads()</h3><ul><li>在Python中，可以使用 <strong>json.dumps() 和 json.loads()</strong> 这两个函数来实现JSON的序列化和反序列化。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 字典转换为JSON</span>
data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;city&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">}</span>
json_data <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>json_data<span class="token punctuation">)</span>

<span class="token comment"># JSON转换为字典</span>
parsed_data <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>json_data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>parsed_data<span class="token punctuation">)</span>

</code></pre></div><p>美化输出 json.dumps() 函数有一些参数可以用于美化输出，使JSON数据更易读。</p><p>示例代码：</p><h3 id="美化输出" tabindex="-1"><a class="header-anchor" href="#美化输出" aria-hidden="true">#</a> 美化输出</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;city&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">}</span>
json_data <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> sort_keys<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>json_data<span class="token punctuation">)</span>
 
<span class="token comment"># 使用 indent 参数可以添加缩进，使JSON数据更加易读。sort_keys 参数可以按键对字典进行排序。</span>
</code></pre></div><h3 id="处理文件" tabindex="-1"><a class="header-anchor" href="#处理文件" aria-hidden="true">#</a> 处理文件</h3><p><strong>json.dump() 和 json.load()</strong> 函数允许在读写文件时直接处理JSON数据。</p><ul><li>Python 使用 <code>json.dump()</code> 保存文件时中文会变成 Unicode。</li><li>在打开写出文件时加入 <code>encoding=&quot;utf8&quot;，在dump时加入 ensure_ascii=False</code> 即可解决。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 写入JSON文件</span>
data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;city&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span>

<span class="token comment"># 读取JSON文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    loaded_data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>loaded_data<span class="token punctuation">)</span>

</code></pre></div><h3 id="访问-json-的嵌套对象-并输出-salary的值" tabindex="-1"><a class="header-anchor" href="#访问-json-的嵌套对象-并输出-salary的值" aria-hidden="true">#</a> 访问 Json 的嵌套对象，并输出 salary的值</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>sampleJson <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;{
   &quot;company&quot;:{
      &quot;employee&quot;:{
         &quot;name&quot;:&quot;emma&quot;,
         &quot;payble&quot;:{
            &quot;salary&quot;:7000,
            &quot;bonus&quot;:800
         }
      }
   }
}&quot;&quot;&quot;</span>
 
<span class="token keyword">import</span> json

sampleJson <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;{
   &quot;company&quot;:{
      &quot;employee&quot;:{
         &quot;name&quot;:&quot;emma&quot;,
         &quot;payble&quot;:{
            &quot;salary&quot;:7000,
            &quot;bonus&quot;:800
         }
      }
   }
}&quot;&quot;&quot;</span>

data <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>sampleJson<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">&#39;company&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;employee&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;payble&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;salary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="将类对象转化为-json" tabindex="-1"><a class="header-anchor" href="#将类对象转化为-json" aria-hidden="true">#</a> 将类对象转化为 Json</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">from</span> json <span class="token keyword">import</span> JSONEncoder

<span class="token keyword">class</span> <span class="token class-name">Vehicle</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> engine<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>engine <span class="token operator">=</span> engine
        self<span class="token punctuation">.</span>price <span class="token operator">=</span> price

<span class="token keyword">class</span> <span class="token class-name">VehicleEncoder</span><span class="token punctuation">(</span>JSONEncoder<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">default</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> o<span class="token punctuation">.</span>__dict__



vehicle <span class="token operator">=</span> Vehicle<span class="token punctuation">(</span><span class="token string">&quot;Toyota Rav4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2.5L&quot;</span><span class="token punctuation">,</span> <span class="token number">32000</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Encode Vehicle Object into JSON&quot;</span><span class="token punctuation">)</span>
vehicleJson <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>vehicle<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> cls<span class="token operator">=</span>VehicleEncoder<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>vehicleJson<span class="token punctuation">)</span>
</code></pre></div><h3 id="将-json-转化为类对象" tabindex="-1"><a class="header-anchor" href="#将-json-转化为类对象" aria-hidden="true">#</a> 将 Json 转化为类对象</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json

<span class="token keyword">class</span> <span class="token class-name">Vehicle</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> engine<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>engine <span class="token operator">=</span> engine
        self<span class="token punctuation">.</span>price <span class="token operator">=</span> price

<span class="token keyword">def</span> <span class="token function">vehicleDecoder</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Vehicle<span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span><span class="token string">&#39;engine&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span><span class="token string">&#39;price&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

vehicleObj <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span><span class="token string">&#39;{ &quot;name&quot;: &quot;Toyota Rav4&quot;, &quot;engine&quot;: &quot;2.5L&quot;, &quot;price&quot;: 32000 }&#39;</span><span class="token punctuation">,</span>
           object_hook<span class="token operator">=</span>vehicleDecoder<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Type of decoded object from JSON Data&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>vehicleObj<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Vehicle Details&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>vehicleObj<span class="token punctuation">.</span>name<span class="token punctuation">,</span> vehicleObj<span class="token punctuation">.</span>engine<span class="token punctuation">,</span> vehicleObj<span class="token punctuation">.</span>price<span class="token punctuation">)</span>
</code></pre></div><h3 id="判断-json-格式是否正确" tabindex="-1"><a class="header-anchor" href="#判断-json-格式是否正确" aria-hidden="true">#</a> 判断 Json 格式是否正确</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json

<span class="token keyword">def</span> <span class="token function">validateJSON</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span>
    <span class="token keyword">except</span> ValueError <span class="token keyword">as</span> err<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

InvalidJsonData <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;{ &quot;company&quot;:{ &quot;employee&quot;:{ &quot;name&quot;:&quot;emma&quot;, &quot;payble&quot;:{ &quot;salary&quot;:7000 &quot;bonus&quot;:800} } } }&quot;&quot;&quot;</span>
isValid <span class="token operator">=</span> validateJSON<span class="token punctuation">(</span>InvalidJsonData<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Given JSON string is Valid&quot;</span><span class="token punctuation">,</span> isValid<span class="token punctuation">)</span>
</code></pre></div><h3 id="获取-json-中key为name的所有值" tabindex="-1"><a class="header-anchor" href="#获取-json-中key为name的所有值" aria-hidden="true">#</a> 获取 JSON 中key为name的所有值</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json

sampleJson <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;[
   {
      &quot;id&quot;:1,
      &quot;name&quot;:&quot;name1&quot;,
      &quot;color&quot;:[
         &quot;red&quot;,
         &quot;green&quot;
      ]
   },
   {
      &quot;id&quot;:2,
      &quot;name&quot;:&quot;name2&quot;,
      &quot;color&quot;:[
         &quot;pink&quot;,
         &quot;yellow&quot;
      ]
   }
]&quot;&quot;&quot;</span>

data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>sampleJson<span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

dataList <span class="token operator">=</span> <span class="token punctuation">[</span>item<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> data<span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dataList<span class="token punctuation">)</span>
</code></pre></div><h3 id="django-json" tabindex="-1"><a class="header-anchor" href="#django-json" aria-hidden="true">#</a> django Json</h3><h4 id="python-django中-要返回json" tabindex="-1"><a class="header-anchor" href="#python-django中-要返回json" aria-hidden="true">#</a> Python Django中，要返回JSON</h4><p>使用HttpResponse对象的json方法：可以在视图函数中使用HttpResponse对象的json方法将数据转换为JSON格式，然后将其作为响应返回给客户端。示例代码如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse
<span class="token keyword">import</span> json

<span class="token keyword">def</span> <span class="token function">my_view</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> content_type<span class="token operator">=</span><span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>

</code></pre></div><p>使用JsonResponse对象：Django提供了JsonResponse对象，可直接将Python数据结构转换为JSON并返回给客户端。示例代码如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> JsonResponse

<span class="token keyword">def</span> <span class="token function">my_view</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

</code></pre></div><p>使用APIView类：如果你使用Django REST framework来构建API，可以在视图类中继承APIView类，并使用其内置的Response对象返回JSON数据。示例代码如下：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
 
<span class="token keyword">class</span> <span class="token class-name">MyView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">30</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>data<span class="token punctuation">)</span> 

 
</code></pre></div>`,34),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","json_r.html.vue"]]);export{i as default};
