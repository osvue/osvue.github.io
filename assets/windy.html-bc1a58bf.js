import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<h2 id="leaflet-wind-风场" tabindex="-1"><a class="header-anchor" href="#leaflet-wind-风场" aria-hidden="true">#</a> Leaflet-wind 风场</h2><ul><li>https://github.com/sakitam-fdd/wind-layer</li><li>https://blog.sakitam.com/wind-layer/guide/getting-started</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 动态风场</span>
输入命令 npm install leaflet<span class="token operator">-</span>velocity 进行安装
页面引入
<span class="token keyword">import</span> <span class="token string">&#39;leaflet-velocity/dist/leaflet-velocity.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;leaflet-velocity/dist/leaflet-velocity&#39;</span>
 
绘制风场
<span class="token comment">//加载风场</span>
<span class="token function-variable function">initWind</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> velocityLayer <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">velocityLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">displayValues</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token comment">//鼠标位置风场信息。也可以自定义html来进行显示</span>
			<span class="token literal-property property">displayOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">velocityType</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">//鼠标所在位置的风场提示信息说明，会在地图上显示</span>
				<span class="token literal-property property">displayPosition</span><span class="token operator">:</span> <span class="token string">&#39;bottomleft&#39;</span><span class="token punctuation">,</span><span class="token comment">//风场提示信息位置</span>
				<span class="token literal-property property">displayEmptyString</span><span class="token operator">:</span> <span class="token string">&#39;No wind data&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span> windData<span class="token punctuation">,</span><span class="token comment">//风场数据,需要从外部引入</span>
			<span class="token literal-property property">minVelocity</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//速率</span>
			<span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//粒子的粗细</span>
			<span class="token literal-property property">frameRate</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token comment">//定义每秒执行的次数</span>
			<span class="token literal-property property">colorScale</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#2b5783&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//风场颜色</span>
			<span class="token literal-property property">velocityScale</span><span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token comment">//线条速度</span>
			<span class="token literal-property property">particleMultiplier</span><span class="token operator">:</span> <span class="token string">&quot;0.001&quot;</span><span class="token punctuation">,</span> <span class="token comment">//线条密度</span>
			<span class="token literal-property property">maxVelocity</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">//颜色配比</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 风场实例添加到地图上</span>
		velocityLayer<span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre></div><h3 id="风场数据介绍" tabindex="-1"><a class="header-anchor" href="#风场数据介绍" aria-hidden="true">#</a> 风场数据介绍</h3><p>header参数介绍：</p><p>parameterCategory 配置了数据记录内容，风力数据默认为2 parameterCategoryName 风向数据默认：Momentum parameterNumber 记录了数据方向：U向为2，V向为3 parameterNumberName U-component_of_wind/V-component_of_wind numberPoints 数据点数量 nx 横向划分栅格数量 ny 纵向划分栅格数量 dx 横向步长 dy 纵向步长 lo1 横向起点，全球默认为0 la1 纵向起点，全球默认为-90 lo2 横向终点，全球默认359.5，根据步长有所不同 la2 纵向终点，全球默认-90</p><p>风场数据的含义、来源、分辨率、时间等属性。让我们逐个解释一下这些字段的含义：</p><p>discipline、disciplineName: 数据学科类别，这里为气象产品（Meteorological products）。 gribEdition: GRIB（GRIdded Binary）编码的版本，这里是第2版。 gribLength: 数据长度，以字节为单位。 center、centerName: 数据生成中心的标识和名称，这里为美国国家气象局（US National Weather Service - NCEP(WMC)）。 subcenter: 子中心标识，可能用于指定具体的数据生成单位。 refTime: 数据的参考时间，即预报或分析的基准时间。 significanceOfRT、significanceOfRTName: 参考时间的重要性，这里表示预报开始。 productStatus、productStatusName: 产品状态，这里是运营产品（Operational products）。 productType、productTypeName: 产品类型，这里是预报产品（Forecast products）。 productDefinitionTemplate、productDefinitionTemplateName: 产品定义模板，这里是在水平层/时间点上的分析/预报。 parameterCategory、parameterCategoryName: 参数类别，这里是动量（Momentum）。 parameterNumber、parameterNumberName: 参数编号和名称，这里是U分量的风（U-component_of_wind）。 parameterUnit: 参数单位，这里是米每秒（m/s）。 genProcessType、genProcessTypeName: 生成过程类型，这里是预报（Forecast）。 forecastTime: 预报时间，这里是从参考时间开始的预报时间（小时）。 surface1Type、surface1TypeName: 表面1类型，这里是指定高度层以上的地面。 surface1Value: 表面1值，这里是高度为10.0米。 surface2Type、surface2TypeName: 表面2类型，这里是缺失。 gridDefinitionTemplate、gridDefinitionTemplateName: 网格定义模板，这里是经纬度网格。 numberPoints: 网格点数量。 shape、shapeName: 地球的形状和半径。 gridUnits: 网格单位，这里是度。 resolution: 网格分辨率。 winds: 是否包含风速数据，这里是true。 scanMode: 扫描模式，0表示正常扫描。 nx、ny: 网格点数，分别表示经度方向和纬度方向的网格点数。 lo1、la1、lo2、la2: 经纬度范围，分别表示西经、北纬、东经、南纬的范围。 dx、dy: 网格点之间的间隔。</p><h3 id="数据详解" tabindex="-1"><a class="header-anchor" href="#数据详解" aria-hidden="true">#</a> 数据详解</h3><p>返回 json 数据为一个数组类型，两个元素分别为 U和V对应数据，数据中应该至少包含以下字段：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>json
dx: Increment in X direction, cannot be negative(x方向增量)
dy: Increment in Y direction, cannot be negative（Y方向增量）
nx: cols 数据行数
ny: rows 数据列数
# 以下四个为数据矩形范围
lo1: xmin 
lo2: xmax
la1: ymin
la2: ymax
# u/v 主要由以下参数区分
parameterCategory: data type
parameterNumber: data type
</code></pre></div><p>一般情况下由 grib2json 转出的数据parameterCategory参数为1，当parameterNumber 为 2 时为u 分量， 当parameterNumber 为 3 时为v 分量。</p><p>并且还需要注意的是 dy（纬度）增量 (默认我们采用的数据和格点原始数据方向保持一致，数据从左上到右下) 但是需要注意的是此时 dy 为 -(ymax - ymin) / ny 有些情况下我们格点数据组织形式可能 Y 轴是上下翻转的，此时我们可以配置 options.fieldOptions.flipY = true，来主动翻转数据（默认情况下我们检测到数据配置中的 deltaY &gt; 0 时并且未配置flipY参数项默认去翻转数据）。</p>`,13),o=[p];function r(c,l){return a(),s("div",null,o)}const u=n(e,[["render",r],["__file","windy.html.vue"]]);export{u as default};
