import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="jsonutil" tabindex="-1"><a class="header-anchor" href="#jsonutil" aria-hidden="true">#</a> JsonUtil</h2><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- ObjectMapper --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.18.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="fastjson" tabindex="-1"><a class="header-anchor" href="#fastjson" aria-hidden="true">#</a> fastJson</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token comment">// 正确的传参方式如下</span>

<span class="token comment">// arr.forEach((value, index) =&gt; {</span>
<span class="token comment">//   fd.append(\`address[\${index}].name\`, value.name)</span>
<span class="token comment">//   fd.append(\`address[\${index}].age\`, value.age)</span>
<span class="token comment">// })</span>
<span class="token comment">// 如果是字符串或者数字数组</span>

<span class="token comment">// const arr = [1, 2, 3, 4, 5]</span>

<span class="token comment">// arr.forEach((value, index) =&gt; {</span>
<span class="token comment">//   fd.append(\`address[\${index}]\`, value)</span>
<span class="token comment">// })</span>



<span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>air<span class="token punctuation">.</span>app<span class="token punctuation">.</span>common<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonInclude</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">JsonProcessingException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>core<span class="token punctuation">.</span>type<span class="token punctuation">.</span></span><span class="token class-name">TypeReference</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">DeserializationFeature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">JsonNode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">SerializationFeature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span>node<span class="token punctuation">.</span></span><span class="token class-name">ArrayNode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span>node<span class="token punctuation">.</span></span><span class="token class-name">ObjectNode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>air<span class="token punctuation">.</span>app<span class="token punctuation">.</span>bsw<span class="token punctuation">.</span>controller<span class="token punctuation">.</span></span><span class="token class-name">AppBswController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> hanzq@aircas.ac.cn
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@description</span>: TODO
 * <span class="token keyword">@date</span> 2024/11/7 17:30
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastJsonUtil</span> <span class="token punctuation">{</span>

        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">AppBswController</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ObjectMapper</span> objectMapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 时间日期格式</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">STANDARD_FORMAT</span> <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">//以静态代码块初始化</span>
        <span class="token keyword">static</span> <span class="token punctuation">{</span>
            <span class="token comment">//对象的所有字段全部列入序列化</span>
            objectMapper<span class="token punctuation">.</span><span class="token function">setSerializationInclusion</span><span class="token punctuation">(</span><span class="token class-name">JsonInclude<span class="token punctuation">.</span>Include</span><span class="token punctuation">.</span><span class="token constant">ALWAYS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//取消默认转换timestamps形式</span>
            objectMapper<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">WRITE_DATES_AS_TIMESTAMPS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//忽略空Bean转json的错误</span>
            objectMapper<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_EMPTY_BEANS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//所有的日期格式都统一为以下的格式，即yyyy-MM-dd HH:mm:ss</span>
            objectMapper<span class="token punctuation">.</span><span class="token function">setDateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token constant">STANDARD_FORMAT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//忽略 在json字符串中存在，但在java对象中不存在对应属性的情况。防止错误</span>
            objectMapper<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">DeserializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_UNKNOWN_PROPERTIES</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token doc-comment comment">/**===========================以下是从JSON中获取对象====================================*/</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> jsonString<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">T</span> t <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                t <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;JsonString转为自定义对象失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> t<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">T</span> t <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                t <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;从文件中读取json字符串转为自定义对象失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> t<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//将json数组字符串转为指定对象List列表或者Map集合</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseJSONArray</span><span class="token punctuation">(</span><span class="token class-name">String</span> jsonArray<span class="token punctuation">,</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> reference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">T</span> t <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                t <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>jsonArray<span class="token punctuation">,</span> reference<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;JSONArray转为List列表或者Map集合失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> t<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token doc-comment comment">/**=================================以下是将对象转为JSON=====================================*/</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> jsonString <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                jsonString <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Object转JSONString失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> jsonString<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                bytes <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">writeValueAsBytes</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Object转ByteArray失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> bytes<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">objectToFile</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">,</span> <span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                objectMapper<span class="token punctuation">.</span><span class="token function">writeValue</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Object写入文件失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token doc-comment comment">/**=============================以下是与JsonNode相关的=======================================*/</span>
        <span class="token comment">//JsonNode和JSONObject一样，都是JSON树形模型，只不过在jackson中，存在的是JsonNode</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">JsonNode</span> <span class="token function">parseJSONObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> jsonString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">JsonNode</span> jsonNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                jsonNode <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">readTree</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;JSONString转为JsonNode失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> jsonNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">JsonNode</span> <span class="token function">parseJSONObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">JsonNode</span> jsonNode <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">valueToTree</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> jsonNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token class-name">JsonNode</span> jsonNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> jsonString <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                jsonString <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>jsonNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JsonProcessingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;JsonNode转JSONString失败：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> jsonString<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//JsonNode是一个抽象类，不能实例化，创建JSON树形模型，得用JsonNode的子类ObjectNode，用法和JSONObject大同小异</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ObjectNode</span> <span class="token function">newJSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">createObjectNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//创建JSON数组对象，就像JSONArray一样用</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ArrayNode</span> <span class="token function">newJSONArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">createArrayNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token doc-comment comment">/**===========以下是从JsonNode对象中获取key值的方法，个人觉得有点多余，直接用JsonNode自带的取值方法会好点，出于纠结症，还是补充进来了*/</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">JsonNode</span> jsonObject<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token class-name">JsonNode</span> jsonObject<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Integer</span> i <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token class-name">JsonNode</span> jsonObject<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Boolean</span> bool <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> bool<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">JsonNode</span> <span class="token function">getJSONObject</span><span class="token punctuation">(</span><span class="token class-name">JsonNode</span> jsonObject<span class="token punctuation">,</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">JsonNode</span> json <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> json<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 




<span class="token punctuation">}</span>

</code></pre></div><ul><li>其他</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code> 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonInclude</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>core<span class="token punctuation">.</span>type<span class="token punctuation">.</span></span><span class="token class-name">TypeReference</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">DeserializationFeature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">JavaType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">SerializationFeature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jdk8<span class="token punctuation">.</span></span><span class="token class-name">Jdk8Module</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span></span><span class="token class-name">JavaTimeModule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * JSON与对象互转帮助类
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">JsonUtils</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 禁止实例化工具类</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token string">&quot;Utility classes cannot be instantiated.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置为public是为了提供给redis的序列化器
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">ObjectMapper</span> <span class="token constant">MAPPER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">// 对象的所有字段全部列入，还是其他的选项，可以忽略null等</span>
        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">setSerializationInclusion</span><span class="token punctuation">(</span><span class="token class-name">JsonInclude<span class="token punctuation">.</span>Include</span><span class="token punctuation">.</span><span class="token constant">ALWAYS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 取消默认的时间转换为timeStamp格式</span>
        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">WRITE_DATES_AS_TIMESTAMPS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置Date类型的序列化及反序列化格式</span>
        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">setDateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 忽略空Bean转json的错误</span>
        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_EMPTY_BEANS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 忽略未知属性，防止json字符串中存在，java对象中不存在对应属性的情况出现错误</span>
        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">DeserializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_UNKNOWN_PROPERTIES</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加java8序列化支持和新版时间对象序列化支持</span>
        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Jdk8Module</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JavaTimeModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * json字符串转为对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">json</span>  json
     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span> T类的class文件
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>   泛型, 代表返回参数的类型
     * <span class="token keyword">@return</span> 返回T的实例
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">jsonCovertToObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> json<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>json <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> clazz <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json转换失败,原因:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * json字符串转为对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">json</span> json
     * <span class="token keyword">@param</span> <span class="token parameter">type</span> 对象在Jackson中的类型
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>  泛型, 代表返回参数的类型
     * <span class="token keyword">@return</span> 返回T的实例
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">jsonCovertToObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> json<span class="token punctuation">,</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>json <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> type <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json转换失败,原因:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将流中的数据转为java对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">inputStream</span> 输入流
     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span>       类的class
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>         泛型, 代表返回参数的类型
     * <span class="token keyword">@return</span> 返回对象 如果参数任意一个为 null则返回null
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">covertStreamToObject</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> inputStream<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inputStream <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> clazz <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json转换失败,原因:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * json字符串转为复杂类型List
     *
     * <span class="token keyword">@param</span> <span class="token parameter">json</span>            json
     * <span class="token keyword">@param</span> <span class="token parameter">collectionClazz</span> 集合的class
     * <span class="token keyword">@param</span> <span class="token parameter">elementsClazz</span>   集合中泛型的class
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>             泛型, 代表返回参数的类型
     * <span class="token keyword">@return</span> 返回T的实例
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">jsonCovertToObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> json<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> collectionClazz<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> elementsClazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>json <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> collectionClazz <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> elementsClazz <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> elementsClazz<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">JavaType</span> javaType <span class="token operator">=</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">getTypeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructParametricType</span><span class="token punctuation">(</span>collectionClazz<span class="token punctuation">,</span> elementsClazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> javaType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json转换失败,原因:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对象转为json字符串
     *
     * <span class="token keyword">@param</span> <span class="token parameter">o</span> 将要转化的对象
     * <span class="token keyword">@return</span> 返回json字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">objectCovertToJson</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> o <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> o <span class="token operator">:</span> <span class="token constant">MAPPER</span><span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json转换失败,原因:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将对象转为另一个对象
     * 切记,两个对象结构要一致
     * 多用于Object转为具体的对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">o</span>               将要转化的对象
     * <span class="token keyword">@param</span> <span class="token parameter">collectionClazz</span> 集合的class
     * <span class="token keyword">@param</span> <span class="token parameter">elementsClazz</span>   集合中泛型的class
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>             泛型, 代表返回参数的类型
     * <span class="token keyword">@return</span> 返回T的实例
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">objectCovertToObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> collectionClazz<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> elementsClazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token function">objectCovertToJson</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">jsonCovertToObject</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> collectionClazz<span class="token punctuation">,</span> elementsClazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>





<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StrUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonInclude</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>core<span class="token punctuation">.</span>type<span class="token punctuation">.</span></span><span class="token class-name">TypeReference</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">DeserializationFeature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">JsonNode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">SerializationFeature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span></span><span class="token class-name">JavaTimeModule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">SneakyThrows</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Type</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * JSON 工具类
 *
 * <span class="token keyword">@author</span> 芋道源码
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ObjectMapper</span> objectMapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_EMPTY_BEANS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">DeserializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_UNKNOWN_PROPERTIES</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setSerializationInclusion</span><span class="token punctuation">(</span><span class="token class-name">JsonInclude<span class="token punctuation">.</span>Include</span><span class="token punctuation">.</span><span class="token constant">NON_NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 忽略 null 值</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">registerModules</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JavaTimeModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 解决 LocalDateTime 的序列化</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化 objectMapper 属性
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * 通过这样的方式，使用 Spring 创建的 ObjectMapper Bean
     *
     * <span class="token keyword">@param</span> <span class="token parameter">objectMapper</span> ObjectMapper 对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper</span> objectMapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JsonUtils</span><span class="token punctuation">.</span>objectMapper <span class="token operator">=</span> objectMapper<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toJsonString</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toJsonByte</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">writeValueAsBytes</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">toJsonPrettyString</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">writerWithDefaultPrettyPrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">String</span> path<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">JsonNode</span> treeNode <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">readTree</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">JsonNode</span> pathNode <span class="token operator">=</span> treeNode<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>pathNode<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">Type</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> objectMapper<span class="token punctuation">.</span><span class="token function">getTypeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将字符串解析成指定类型的对象
     * 使用 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> 时，在@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS) 的场景下，
     * 如果 text 没有 class 属性，则会报错。此时，使用这个方法，可以解决。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">text</span> 字符串
     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span> 类型
     * <span class="token keyword">@return</span> 对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject2</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toBean</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> bytes<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> typeReference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> typeReference<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 解析 JSON 字符串成指定类型的对象，如果解析失败，则返回 null
     *
     * <span class="token keyword">@param</span> <span class="token parameter">text</span> 字符串
     * <span class="token keyword">@param</span> <span class="token parameter">typeReference</span> 类型引用
     * <span class="token keyword">@return</span> 指定类型的对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">parseObjectQuietly</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> typeReference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> typeReference<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">parseArray</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> objectMapper<span class="token punctuation">.</span><span class="token function">getTypeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructCollectionType</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">parseArray</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">String</span> path<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">JsonNode</span> treeNode <span class="token operator">=</span> objectMapper<span class="token punctuation">.</span><span class="token function">readTree</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">JsonNode</span> pathNode <span class="token operator">=</span> treeNode<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>pathNode<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> objectMapper<span class="token punctuation">.</span><span class="token function">getTypeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructCollectionType</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">JsonNode</span> <span class="token function">parseTree</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readTree</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">JsonNode</span> <span class="token function">parseTree</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> objectMapper<span class="token punctuation">.</span><span class="token function">readTree</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;json parse err,json:{}&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isJson</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">isTypeJSON</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div>`,6),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(t,[["render",e],["__file","utils.html.vue"]]);export{i as default};
