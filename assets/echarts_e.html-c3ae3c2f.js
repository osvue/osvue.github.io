import{_ as t,M as o,p as e,q as c,R as n,t as s,N as p,a1 as l}from"./framework-d81ad7e5.js";const r="/assets/ecmap-6bc364e9.png",u="/assets/ecmapa-7f6c64c2.png",k={},i=n("h2",{id:"echarts-自定义修改geojson地图文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#echarts-自定义修改geojson地图文件","aria-hidden":"true"},"#"),s(" echarts 自定义修改geojson地图文件")],-1),y=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"DANGER"),n("p",null,"注意：echarts 不支持自定义point!")],-1),m={href:"http://datav.aliyun.com/tools/atlas/index.html#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5",target:"_blank",rel:"noopener noreferrer"},g={href:"http://geojson.io/",target:"_blank",rel:"noopener noreferrer"},b=l('<ol><li>载入地图 <img src="'+r+'" alt="alt"></li><li>删除区域</li></ol><ul><li>在你想要删除的区域上单击鼠标左键，点击delete feature即可删除区域</li></ul><ol start="3"><li>添加或修改区域</li></ol><ul><li>如果该区域已经存在，需要先删除该区域再进行添加，使用多边形工具圈出你添加的区域</li></ul><ol start="4"><li>修改该区域的名称等基础信息 <img src="'+u+`" alt="at"></li></ol><h3 id="使用自定义json" tabindex="-1"><a class="header-anchor" href="#使用自定义json" aria-hidden="true">#</a> 使用自定义json</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/echarts/5.1.2/echarts.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body,html</span><span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.app</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
     
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>

        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>144<span class="token punctuation">,</span> 77<span class="token punctuation">,</span> 150<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aa<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//写在vueData中的地图数据</span>
    <span class="token keyword">const</span> mapDataArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">342</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">132</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">322</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bb&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;cc&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">74</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

    <span class="token comment">//以下为数据处理和地名自定义移动与地名字体大小 </span>
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> mapDataArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//修改地图名称大小（有需要也可在地图上显示自定义文字在formatter中添加即可）</span>
      mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>label <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{b}&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">//通过修改offset更改地图名称的位置避免遮挡</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&quot;aa&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapDataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>label<span class="token punctuation">.</span>offset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//以下为echartsmap相关代码</span>

    $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;tq.geojson&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">handan</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//  我的geojson文件是放在public下的</span>
        echarts<span class="token punctuation">.</span><span class="token function">registerMap</span><span class="token punctuation">(</span><span class="token string">&#39;handan&#39;</span><span class="token punctuation">,</span> handan<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 背景颜色渐变</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;linear&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">x2</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">y2</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">colorStops</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#f6f6f6&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 0% 处的颜色</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ccffcc&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 100% 处的颜色</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">globalCoord</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 缺省为 false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>


            <span class="token literal-property property">geo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 边框线 </span>
                <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&#39;handan&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">/*
                itemStyle: {
                    normal: {
                        areaColor: &#39;#00091a&#39;,
                        borderColor: &#39;#00091a&#39;, //线
                        shadowColor: &#39;#00091a&#39;, //外发光
                        shadowBlur: 20,
                    },
                    emphasis: {
                        areaColor: &#39;#00091a&#39;, //悬浮区背景
                    },
                },
                */</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{b}:{c}户&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;rgb(0,0,0,0.5)&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token string">&#39;scale&#39;</span><span class="token punctuation">,</span> <span class="token comment">//仅支持缩放不能平移</span>
            <span class="token literal-property property">scaleLimit</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//缩放限制</span>
                <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>


            <span class="token literal-property property">dataRange</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">splitList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;客户数大于300&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgb(148, 57, 57)&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">101</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;客户数100 ~ 200&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgb(25, 104, 124)&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;客户数1 ~ 100&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgb(55, 122, 70)&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;客户数为0&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgb(144, 77, 150)&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;rgb(144, 77, 150)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rgb(55, 122, 70)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rgb(25, 104, 124)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rgb(148, 57, 57)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>


            <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;虚拟城市&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&#39;handan&#39;</span><span class="token punctuation">,</span>

                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 鼠标滑动  字体和浮动</span>
                    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token comment">// aspectScale: 0.75,</span>

                <span class="token literal-property property">nameMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>

                    <span class="token string-property property">&#39;上五村&#39;</span><span class="token operator">:</span> <span class="token string">&#39;南王庄map&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>

                    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#F4F4F4&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">//区域边框宽度</span>
                        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#080E1F&#39;</span><span class="token punctuation">,</span> <span class="token comment">//区域边框颜色</span>
                        <span class="token literal-property property">areaColor</span><span class="token operator">:</span> <span class="token string">&quot;#5389EB&quot;</span><span class="token punctuation">,</span> <span class="token comment">//区域颜色</span>
                        <span class="token comment">// areaColor: &#39;#243fa1&#39;, //区域颜色</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">/* emphasis: {
                         // 鼠标滑动后的颜色 ：hover
                         label: {
                             show: true
                         },
                         borderWidth: 0.5,
                         borderColor: &#39;#4b0082&#39;,
                         areaColor: &#39;#ffdead&#39;,
                     },*/</span>

                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                 <span class="token literal-property property">data</span><span class="token operator">:</span> mapDataArr<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,7);function d(h,f){const a=o("ExternalLinkIcon");return e(),c("div",null,[i,y,n("p",null,[n("a",m,[s("地图下载网站"),p(a)])]),n("p",null,[n("a",g,[s("自定义修改地图网站"),p(a)])]),b])}const v=t(k,[["render",d],["__file","echarts_e.html.vue"]]);export{v as default};
