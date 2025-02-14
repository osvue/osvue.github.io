import{_ as t,p as n,q as e,a1 as a}from"./framework-d81ad7e5.js";const s={},o=a(`<h2 id="_60util" tabindex="-1"><a class="header-anchor" href="#_60util" aria-hidden="true">#</a> 60util</h2><p>1.邮箱</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isEmail = (s) =&gt; {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
</code></pre></div><p>2.手机号码</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isMobile = (s) =&gt; {
    return /^1[0-9]{10}$/.test(s)
}
</code></pre></div><p>3.电话号码</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isPhone = (s) =&gt; {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}
</code></pre></div><p>4.是否url地址</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isURL = (s) =&gt; {
    return /^http[s]?:\\/\\/.*/.test(s)
}
</code></pre></div><p>5.是否字符串</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isString = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;String&#39;
}
</code></pre></div><p>6.是否数字</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isNumber = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;Number&#39;
}
</code></pre></div><p>7.是否boolean</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isBoolean = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;Boolean&#39;
}
</code></pre></div><p>8.是否函数</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isFunction = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;Function&#39;
}
</code></pre></div><p>9.是否为null</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isNull = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;Null&#39;
}
</code></pre></div><p>10.是否undefined</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isUndefined</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Undefined&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>11.是否对象</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isObj</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Object&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>12.是否数组</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isArray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Array&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>13.是否时间</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isDate = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;Date&#39;
}
</code></pre></div><p>14.是否正则</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isRegExp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;RegExp&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>15.是否错误对象</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isError = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;Error&#39;
}
</code></pre></div><p>16.是否Symbol函数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isSymbol</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Symbol&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>17.是否Promise对象</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">isPromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Promise&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>18.是否Set对象</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isSet = (o) =&gt; {
    return Object.prototype.toString.call(o).slice(8, -1) === &#39;Set&#39;
}
export const ua = navigator.userAgent.toLowerCase();
</code></pre></div><p>19.是否是微信浏览器</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isWeiXin = () =&gt; {
    return ua.match(/microMessenger/i) == &#39;micromessenger&#39;
}
</code></pre></div><p>20.是否是移动端</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isDeviceMobile = () =&gt; {
    return /android|webos|iphone|ipod|balckberry/i.test(ua)
}
</code></pre></div><p>21.是否是QQ浏览器</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isQQBrowser = () =&gt; {
    return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}
</code></pre></div><p>22.是否是爬虫</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isSpider = () =&gt; {
    return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}
</code></pre></div><p>23.是否ios</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isIos = () =&gt; {
    var u = navigator.userAgent;
    if (u.indexOf(&#39;Android&#39;) &gt; -1 || u.indexOf(&#39;Linux&#39;) &gt; -1) {  //安卓手机
        return false
    } else if (u.indexOf(&#39;iPhone&#39;) &gt; -1) {//苹果手机
        return true
    } else if (u.indexOf(&#39;iPad&#39;) &gt; -1) {//iPad
        return false
    } else if (u.indexOf(&#39;Windows Phone&#39;) &gt; -1) {//winphone手机
        return false
    } else {
        return false
    }
}
</code></pre></div><p>24.是否为PC端</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isPC = () =&gt; {
    var userAgentInfo = navigator.userAgent;
    var Agents = [&quot;Android&quot;, &quot;iPhone&quot;,
        &quot;SymbianOS&quot;, &quot;Windows Phone&quot;,
        &quot;iPad&quot;, &quot;iPod&quot;];
    var flag = true;
    for (var v = 0; v &lt; Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) &gt; 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
</code></pre></div><p>25.去除html标签</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const removeHtmltag = (str) =&gt; {
    return str.replace(/&lt;[^&gt;]+&gt;/g, &#39;&#39;)
}
</code></pre></div><p>26.获取url参数</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const getQueryString = (name) =&gt; {
    const reg = new RegExp(&#39;(^|&amp;)&#39; + name + &#39;=([^&amp;]*)(&amp;|$)&#39;, &#39;i&#39;);
    const search = window.location.search.split(&#39;?&#39;)[1] || &#39;&#39;;
    const r = search.match(reg) || [];
    return r[2];
}
</code></pre></div><p>27.动态引入js</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const injectScript = (src) =&gt; {
    const s = document.createElement(&#39;script&#39;);
    s.type = &#39;text/javascript&#39;;
    s.async = true;
    s.src = src;
    const t = document.getElementsByTagName(&#39;script&#39;)[0];
    t.parentNode.insertBefore(s, t);
}
</code></pre></div><p>28.根据url地址下载</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const download = (url) =&gt; {
    var isChrome = navigator.userAgent.toLowerCase().indexOf(&#39;chrome&#39;) &gt; -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf(&#39;safari&#39;) &gt; -1;
    if (isChrome || isSafari) {
        var link = document.createElement(&#39;a&#39;);
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf(&#39;/&#39;) + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent(&#39;MouseEvents&#39;);
            e.initEvent(&#39;click&#39;, true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf(&#39;?&#39;) === -1) {
        url += &#39;?download&#39;;
    }
    window.open(url, &#39;_self&#39;);
    return true;
}
</code></pre></div><p>29.el是否包含某个class</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const hasClass = (el, className) =&gt; {
    let reg = new RegExp(&#39;(^|\\\\s)&#39; + className + &#39;(\\\\s|$)&#39;)
    return reg.test(el.className)
}
</code></pre></div><p>30.el添加某个class</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const addClass = (el, className) =&gt; {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(&#39; &#39;)
    newClass.push(className)
    el.className = newClass.join(&#39; &#39;)
}
</code></pre></div><p>31.el去除某个class</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const removeClass = (el, className) =&gt; {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp(&#39;(^|\\\\s)&#39; + className + &#39;(\\\\s|$)&#39;, &#39;g&#39;)
    el.className = el.className.replace(reg, &#39; &#39;)
}
</code></pre></div><p>32.获取滚动的坐标</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const getScrollPosition = (el = window) =&gt; ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
</code></pre></div><p>33.滚动到顶部</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const scrollToTop = () =&gt; {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c &gt; 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}
</code></pre></div><p>34.el是否在视口范围内</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const elementIsVisibleInViewport = (el, partiallyVisible = false) =&gt; {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top &gt; 0 &amp;&amp; top &lt; innerHeight) || (bottom &gt; 0 &amp;&amp; bottom &lt; innerHeight)) &amp;&amp;
        ((left &gt; 0 &amp;&amp; left &lt; innerWidth) || (right &gt; 0 &amp;&amp; right &lt; innerWidth))
        : top &gt;= 0 &amp;&amp; left &gt;= 0 &amp;&amp; bottom &lt;= innerHeight &amp;&amp; right &lt;= innerWidth;
}
</code></pre></div><p>35.洗牌算法随机</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const shuffle = (arr) =&gt; {
    var result = [],
        random;
    while (arr.length &gt; 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}
</code></pre></div><p>36.拦截粘贴板</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const copyTextToClipboard = (value) =&gt; {
    var textArea = document.createElement(&quot;textarea&quot;);
    textArea.style.background = &#39;transparent&#39;;
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand(&#39;copy&#39;);
    } catch (err) {
        console.log(&#39;Oops, unable to copy&#39;);
    }
    document.body.removeChild(textArea);
}
</code></pre></div><p>37.判断类型集合</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const checkStr = (str, type) =&gt; {
    switch (type) {
        case &#39;phone&#39;:   //手机号码
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
        case &#39;tel&#39;:     //座机
            return /^(0\\d{2,3}-\\d{7,8})(-\\d{1,4})?$/.test(str);
        case &#39;card&#39;:    //身份证
            return /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/.test(str);
        case &#39;pwd&#39;:     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\\w{5,17}$/.test(str)
        case &#39;postal&#39;:  //邮政编码
            return /[1-9]\\d{5}(?!\\d)/.test(str);
        case &#39;QQ&#39;:      //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case &#39;email&#39;:   //邮箱
            return /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/.test(str);
        case &#39;money&#39;:   //金额(小数点2位)
            return /^\\d*(?:\\.\\d{0,2})?$/.test(str);
        case &#39;URL&#39;:     //网址
            return /(http|ftp|https):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?/.test(str)
        case &#39;IP&#39;:      //IP
            return /((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))/.test(str);
        case &#39;date&#39;:    //日期时间
            return /^(\\d{4})\\-(\\d{2})\\-(\\d{2}) (\\d{2})(?:\\:\\d{2}|:(\\d{2}):(\\d{2}))$/.test(str) || /^(\\d{4})\\-(\\d{2})\\-(\\d{2})$/.test(str)
        case &#39;number&#39;:  //数字
            return /^[0-9]$/.test(str);
        case &#39;english&#39;: //英文
            return /^[a-zA-Z]+$/.test(str);
        case &#39;chinese&#39;: //中文
            return /^[\\\\u4E00-\\\\u9FA5]+$/.test(str);
        case &#39;lower&#39;:   //小写
            return /^[a-z]+$/.test(str);
        case &#39;upper&#39;:   //大写
            return /^[A-Z]+$/.test(str);
        case &#39;HTML&#39;:    //HTML标记
            return /&lt;(&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*&gt;/.test(str);
        default:
            return true;
    }
}
</code></pre></div><p>38.严格的身份证校验</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isCardID = (sId) =&gt; {
    if (!/(^\\d{15}$)|(^\\d{17}(\\d|X|x)$)/.test(sId)) {
        console.log(&#39;你输入的身份证长度或格式错误&#39;)
        return false
    }
    //身份证城市
    var aCity = { 11: &quot;北京&quot;, 12: &quot;天津&quot;, 13: &quot;河北&quot;, 14: &quot;山西&quot;, 15: &quot;内蒙古&quot;, 21: &quot;辽宁&quot;, 22: &quot;吉林&quot;, 23: &quot;黑龙江&quot;, 31: &quot;上海&quot;, 32: &quot;江苏&quot;, 33: &quot;浙江&quot;, 34: &quot;安徽&quot;, 35: &quot;福建&quot;, 36: &quot;江西&quot;, 37: &quot;山东&quot;, 41: &quot;河南&quot;, 42: &quot;湖北&quot;, 43: &quot;湖南&quot;, 44: &quot;广东&quot;, 45: &quot;广西&quot;, 46: &quot;海南&quot;, 50: &quot;重庆&quot;, 51: &quot;四川&quot;, 52: &quot;贵州&quot;, 53: &quot;云南&quot;, 54: &quot;西藏&quot;, 61: &quot;陕西&quot;, 62: &quot;甘肃&quot;, 63: &quot;青海&quot;, 64: &quot;宁夏&quot;, 65: &quot;新疆&quot;, 71: &quot;台湾&quot;, 81: &quot;香港&quot;, 82: &quot;澳门&quot;, 91: &quot;国外&quot; };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
        console.log(&#39;你的身份证地区非法&#39;)
        return false
    }

    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + &quot;-&quot; + Number(sId.substr(10, 2)) + &quot;-&quot; + Number(sId.substr(12, 2))).replace(/-/g, &quot;/&quot;),
        d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + &quot;/&quot; + (d.getMonth() + 1) + &quot;/&quot; + d.getDate())) {
        console.log(&#39;身份证上的出生日期非法&#39;)
        return false
    }

    // 身份证号码校验
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = &quot;10X98765432&quot;
    for (var i = 0; i &lt; sId.length - 1; i++) {
        sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
        console.log(&#39;你输入的身份证号非法&#39;)
        return false
    }

    return true
}
</code></pre></div><p>39.随机数范围</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const random = (min, max) =&gt; {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
        return null;
    }
}
</code></pre></div><p>40.将阿拉伯数字翻译成中文的大写数字</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const numberToChinese = (num) =&gt; {
    var AA = new Array(&quot;零&quot;, &quot;一&quot;, &quot;二&quot;, &quot;三&quot;, &quot;四&quot;, &quot;五&quot;, &quot;六&quot;, &quot;七&quot;, &quot;八&quot;, &quot;九&quot;, &quot;十&quot;);
    var BB = new Array(&quot;&quot;, &quot;十&quot;, &quot;百&quot;, &quot;仟&quot;, &quot;萬&quot;, &quot;億&quot;, &quot;点&quot;, &quot;&quot;);
    var a = (&quot;&quot; + num).replace(/(^0*)/g, &quot;&quot;).split(&quot;.&quot;),
        k = 0,
        re = &quot;&quot;;
    for (var i = a[0].length - 1; i &gt;= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp(&quot;0{4}//d{&quot; + (a[0].length - i - 1) + &quot;}$&quot;)
                    .test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 == 2 &amp;&amp; a[0].charAt(i + 2) != 0 &amp;&amp; a[0].charAt(i + 1) == 0)
            re = AA[0] + re;
        if (a[0].charAt(i) != 0)
            re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }

    if (a.length &gt; 1) // 加上小数部分(如果有小数部分)
    {
        re += BB[6];
        for (var i = 0; i &lt; a[1].length; i++)
            re += AA[a[1].charAt(i)];
    }
    if (re == &#39;一十&#39;)
        re = &quot;十&quot;;
    if (re.match(/^一/) &amp;&amp; re.length == 3)
        re = re.replace(&quot;一&quot;, &quot;&quot;);
    return re;
}
</code></pre></div><p>41.将数字转换为大写金额</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const changeToChinese = (Num) =&gt; {
    //判断如果传递进来的不是字符的话转换为字符
    if (typeof Num == &quot;number&quot;) {
        Num = new String(Num);
    };
    Num = Num.replace(/,/g, &quot;&quot;) //替换tomoney()中的“,”
    Num = Num.replace(/ /g, &quot;&quot;) //替换tomoney()中的空格
    Num = Num.replace(/￥/g, &quot;&quot;) //替换掉可能出现的￥字符
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert(&quot;请检查小写金额是否正确&quot;);
        return &quot;&quot;;
    };
    //字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(Num).split(&quot;.&quot;);
    var newchar = &quot;&quot;;
    //小数点前进行转化
    for (var i = part[0].length - 1; i &gt;= 0; i--) {
        if (part[0].length &gt; 10) {
            return &quot;&quot;;
            //若数量超过拾亿单位，提示
        }
        var tmpnewchar = &quot;&quot;
        var perchar = part[0].charAt(i);
        switch (perchar) {
            case &quot;0&quot;:
                tmpnewchar = &quot;零&quot; + tmpnewchar;
                break;
            case &quot;1&quot;:
                tmpnewchar = &quot;壹&quot; + tmpnewchar;
                break;
            case &quot;2&quot;:
                tmpnewchar = &quot;贰&quot; + tmpnewchar;
                break;
            case &quot;3&quot;:
                tmpnewchar = &quot;叁&quot; + tmpnewchar;
                break;
            case &quot;4&quot;:
                tmpnewchar = &quot;肆&quot; + tmpnewchar;
                break;
            case &quot;5&quot;:
                tmpnewchar = &quot;伍&quot; + tmpnewchar;
                break;
            case &quot;6&quot;:
                tmpnewchar = &quot;陆&quot; + tmpnewchar;
                break;
            case &quot;7&quot;:
                tmpnewchar = &quot;柒&quot; + tmpnewchar;
                break;
            case &quot;8&quot;:
                tmpnewchar = &quot;捌&quot; + tmpnewchar;
                break;
            case &quot;9&quot;:
                tmpnewchar = &quot;玖&quot; + tmpnewchar;
                break;
        }
        switch (part[0].length - i - 1) {
            case 0:
                tmpnewchar = tmpnewchar + &quot;元&quot;;
                break;
            case 1:
                if (perchar != 0) tmpnewchar = tmpnewchar + &quot;拾&quot;;
                break;
            case 2:
                if (perchar != 0) tmpnewchar = tmpnewchar + &quot;佰&quot;;
                break;
            case 3:
                if (perchar != 0) tmpnewchar = tmpnewchar + &quot;仟&quot;;
                break;
            case 4:
                tmpnewchar = tmpnewchar + &quot;万&quot;;
                break;
            case 5:
                if (perchar != 0) tmpnewchar = tmpnewchar + &quot;拾&quot;;
                break;
            case 6:
                if (perchar != 0) tmpnewchar = tmpnewchar + &quot;佰&quot;;
                break;
            case 7:
                if (perchar != 0) tmpnewchar = tmpnewchar + &quot;仟&quot;;
                break;
            case 8:
                tmpnewchar = tmpnewchar + &quot;亿&quot;;
                break;
            case 9:
                tmpnewchar = tmpnewchar + &quot;拾&quot;;
                break;
        }
        var newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (Num.indexOf(&quot;.&quot;) != -1) {
        if (part[1].length &gt; 2) {
            // alert(&quot;小数点之后只能保留两位,系统将自动截断&quot;);
            part[1] = part[1].substr(0, 2)
        }
        for (i = 0; i &lt; part[1].length; i++) {
            tmpnewchar = &quot;&quot;
            perchar = part[1].charAt(i)
            switch (perchar) {
                case &quot;0&quot;:
                    tmpnewchar = &quot;零&quot; + tmpnewchar;
                    break;
                case &quot;1&quot;:
                    tmpnewchar = &quot;壹&quot; + tmpnewchar;
                    break;
                case &quot;2&quot;:
                    tmpnewchar = &quot;贰&quot; + tmpnewchar;
                    break;
                case &quot;3&quot;:
                    tmpnewchar = &quot;叁&quot; + tmpnewchar;
                    break;
                case &quot;4&quot;:
                    tmpnewchar = &quot;肆&quot; + tmpnewchar;
                    break;
                case &quot;5&quot;:
                    tmpnewchar = &quot;伍&quot; + tmpnewchar;
                    break;
                case &quot;6&quot;:
                    tmpnewchar = &quot;陆&quot; + tmpnewchar;
                    break;
                case &quot;7&quot;:
                    tmpnewchar = &quot;柒&quot; + tmpnewchar;
                    break;
                case &quot;8&quot;:
                    tmpnewchar = &quot;捌&quot; + tmpnewchar;
                    break;
                case &quot;9&quot;:
                    tmpnewchar = &quot;玖&quot; + tmpnewchar;
                    break;
            }
            if (i == 0) tmpnewchar = tmpnewchar + &quot;角&quot;;
            if (i == 1) tmpnewchar = tmpnewchar + &quot;分&quot;;
            newchar = newchar + tmpnewchar;
        }
    }
    //替换所有无用汉字
    while (newchar.search(&quot;零零&quot;) != -1)
        newchar = newchar.replace(&quot;零零&quot;, &quot;零&quot;);
    newchar = newchar.replace(&quot;零亿&quot;, &quot;亿&quot;);
    newchar = newchar.replace(&quot;亿万&quot;, &quot;亿&quot;);
    newchar = newchar.replace(&quot;零万&quot;, &quot;万&quot;);
    newchar = newchar.replace(&quot;零元&quot;, &quot;元&quot;);
    newchar = newchar.replace(&quot;零角&quot;, &quot;&quot;);
    newchar = newchar.replace(&quot;零分&quot;, &quot;&quot;);
    if (newchar.charAt(newchar.length - 1) == &quot;元&quot;) {
        newchar = newchar + &quot;整&quot;
    }
    return newchar;
}
</code></pre></div><p>42.判断一个元素是否在数组中</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const contains = (arr, val) =&gt; {
    return arr.indexOf(val) != -1 ? true : false;
}
</code></pre></div><p>43.数组排序，<code>{type} 1：从小到大 2：从大到小 3：随机</code></p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const sort = (arr, type = 1) =&gt; {
    return arr.sort((a, b) =&gt; {
        switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    })
}
</code></pre></div><p>44.去重</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const unique = (arr) =&gt; {
    if (Array.hasOwnProperty(&#39;from&#39;)) {
        return Array.from(new Set(arr));
    } else {
        var n = {}, r = [];
        for (var i = 0; i &lt; arr.length; i++) {
            if (!n[arr[i]]) {
                n[arr[i]] = true;
                r.push(arr[i]);
            }
        }
        return r;
    }
}
</code></pre></div><p>45.求两个集合的并集</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const union = (a, b) =&gt; {
    var newArr = a.concat(b);
    return this.unique(newArr);
}
</code></pre></div><p>46.求两个集合的交集</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const intersect = (a, b) =&gt; {
    var _this = this;
    a = this.unique(a);
    return this.map(a, function (o) {
        return _this.contains(b, o) ? o : null;
    });
}
</code></pre></div><p>47.删除其中一个元素</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const remove = (arr, ele) =&gt; {
    var index = arr.indexOf(ele);
    if (index &gt; -1) {
        arr.splice(index, 1);
    }
    return arr;
}
</code></pre></div><p>48.将类数组转换为数组</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const formArray = (ary) =&gt; {
    var arr = [];
    if (Array.isArray(ary)) {
        arr = ary;
    } else {
        arr = Array.prototype.slice.call(ary);
    };
    return arr;
}
</code></pre></div><p>49.最大值</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const max = (arr) =&gt; {
    return Math.max.apply(null, arr);
}
</code></pre></div><p>50.最小值</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const min = (arr) =&gt; {
    return Math.min.apply(null, arr);
}
</code></pre></div><p>51.求和</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const sum = (arr) =&gt; {
    return arr.reduce((pre, cur) =&gt; {
        return pre + cur
    })
}
</code></pre></div><p>52.平均值</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const average = (arr) =&gt; {
    return this.sum(arr) / arr.length
}
</code></pre></div><p>53.去除空格,<code>type: 1-所有空格 2-前后空格 3-前空格 4-后空格</code></p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const trim = (str, type) =&gt; {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\\s+/g, &quot;&quot;);
        case 2:
            return str.replace(/(^\\s*)|(\\s*$)/g, &quot;&quot;);
        case 3:
            return str.replace(/(^\\s*)/g, &quot;&quot;);
        case 4:
            return str.replace(/(\\s*$)/g, &quot;&quot;);
        default:
            return str;
    }
}
</code></pre></div><p>54.字符转换，<code>type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写</code></p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const changeCase = (str, type) =&gt; {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\\b\\w+\\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

            });
        case 2:
            return str.replace(/\\b\\w+\\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split(&#39;&#39;).map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase()
                }
            }).join(&#39;&#39;)
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}
</code></pre></div><p>55.检测密码强度</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const checkPwd = (str) =&gt; {
    var Lv = 0;
    if (str.length &lt; 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[\\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
}
</code></pre></div><p>56.函数节流器</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const debouncer = (fn, time, interval = 200) =&gt; {
    if (time - (window.debounceTimestamp || 0) &gt; interval) {
        fn &amp;&amp; fn();
        window.debounceTimestamp = time;
    }
}
</code></pre></div><p>57.在字符串中插入新字符串</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const insertStr = (soure, index, newStr) =&gt; {
    var str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
}
</code></pre></div><p>58.判断两个对象是否键值相同</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const isObjectEqual = (a, b) =&gt; {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (var i = 0; i &lt; aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
</code></pre></div><p>59.16进制颜色转RGBRGBA字符串</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const colorToRGB = (val, opa) =&gt; {

    var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
    var isOpa = typeof opa == &#39;number&#39;; //判断是否有设置不透明度

    if (!pattern.test(val)) { //如果值不符合规则返回空字符
        return &#39;&#39;;
    }

    var v = val.replace(/#/, &#39;&#39;); //如果有#号先去除#号
    var rgbArr = [];
    var rgbStr = &#39;&#39;;

    for (var i = 0; i &lt; 3; i++) {
        var item = v.substring(i * 2, i * 2 + 2);
        var num = parseInt(item, 16);
        rgbArr.push(num);
    }

    rgbStr = rgbArr.join();
    rgbStr = &#39;rgb&#39; + (isOpa ? &#39;a&#39; : &#39;&#39;) + &#39;(&#39; + rgbStr + (isOpa ? &#39;,&#39; + opa : &#39;&#39;) + &#39;)&#39;;
    return rgbStr;
}
</code></pre></div><p>60.追加url参数</p><div class="language-text" data-ext="text"><pre class="language-text"><code>export const appendQuery = (url, key, value) =&gt; {
    var options = key;
    if (typeof options == &#39;string&#39;) {
        options = {};
        options[key] = value;
    }
    options = $.param(options);
    if (url.includes(&#39;?&#39;)) {
        url += &#39;&amp;&#39; + options
    } else {
        url += &#39;?&#39; + options
    }
    return url;
}
</code></pre></div>`,121),r=[o];function p(c,u){return n(),e("div",null,r)}const i=t(s,[["render",p],["__file","index.html.vue"]]);export{i as default};
