import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<p>Map 是JavaScript中的数据结构，它允许存储【键，值】对，其中任何值都可以用作键或值；Map集合中的键和值可以是任何类型，并且如果使用集合中已存在的键将值添加到Map集合中，新值将替换旧值。</p><p>map()方法 返回一个新数组，数组中的元素为原始数组调用函数处理后的值，并且按照原始数组元素调用函数处理后的值</p><p>Map.has()方法 该方法主要用来检查Map中是否存在具有制定键的元素</p><p>Map.set()方法 为Map对象添加一个指定键(key)和值(value)的新元素 Map.get(key)方法 用来获取一个Map对象指定的元素，返回的是键所对应的值，如果不存在则会返回undefined</p><ul><li>JSON.stringify()无法转化ES6中map数据问题</li></ul><h3 id="json与字符串的转换" tabindex="-1"><a class="header-anchor" href="#json与字符串的转换" aria-hidden="true">#</a> JSON与字符串的转换</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Json转换为字符串</span>
 <span class="token doc-comment comment">/**
  *
  * json转字符串
  */</span>
  <span class="token keyword">static</span> <span class="token function">stringToJson</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>



<span class="token comment">// 字符串转JSON</span>
  <span class="token doc-comment comment">/**
  *字符串转json
  */</span>
  <span class="token keyword">static</span> <span class="token function">jsonToString</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h4 id="map与json的转换" tabindex="-1"><a class="header-anchor" href="#map与json的转换" aria-hidden="true">#</a> Map与Json的转换</h4><ul><li>Map不能直接转换为Json，Map先要转换为Object，在转换为json。Json转换为Map也不能直接转换，json转为对象，在转换为Map。</li></ul><h3 id="map转换为json" tabindex="-1"><a class="header-anchor" href="#map转换为json" aria-hidden="true">#</a> Map转换为Json</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 *map转化为对象（map所有键都是字符串，可以将其转换为对象）
 */</span>
 <span class="token keyword">static</span> <span class="token function">strMapToObj</span><span class="token punctuation">(</span><span class="token parameter">strMap</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> obj<span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span><span class="token punctuation">[</span>k<span class="token punctuation">,</span>v<span class="token punctuation">]</span> <span class="token keyword">of</span> strMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
  *map转换为json
  */</span>
  <span class="token keyword">static</span> <span class="token function">mapToJson</span><span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>JsonUitl<span class="token punctuation">.</span><span class="token function">strMapToObj</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

 Json转换为Map
<span class="token doc-comment comment">/**
*对象转换为Map
*/</span>
<span class="token keyword">static</span>   <span class="token function">objToStrMap</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> strMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    strMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> strMap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 <span class="token doc-comment comment">/**
  *json转换为map
  */</span>
  <span class="token keyword">static</span> <span class="token function">jsonToMap</span><span class="token punctuation">(</span><span class="token parameter">jsonStr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>  JsonUitl<span class="token punctuation">.</span><span class="token function">objToStrMap</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
<span class="token operator">&gt;</span> <span class="token keyword">let</span> myMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;yes&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;no&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;</span> <span class="token function">mapToJson</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>
<span class="token string">&#39;{&quot;yes&quot;:true,&quot;no&quot;:false}&#39;</span>
<span class="token operator">&gt;</span> <span class="token function">jsonToMap</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;yes&quot;:true,&quot;no&quot;:false}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Map <span class="token punctuation">{</span><span class="token string">&#39;yes&#39;</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;no&#39;</span> <span class="token operator">=&gt;</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="map与数组的转换" tabindex="-1"><a class="header-anchor" href="#map与数组的转换" aria-hidden="true">#</a> Map与数组的转换</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Map转为数组</span>
<span class="token keyword">let</span> myMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">...</span>myMap<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Object <span class="token punctuation">{</span> foo<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment">// 数组转为Map</span>
<span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
Map <span class="token punctuation">{</span><span class="token parameter"><span class="token boolean">true</span></span> <span class="token operator">=&gt;</span> <span class="token number">7</span><span class="token punctuation">,</span> Object <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre></div>`,13),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(t,[["render",e],["__file","js_map.html.vue"]]);export{i as default};
