import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<p>一、axios的封装 在vue项目中，和后台交互获取数据这块，我们通常使用的是axios库，它是基于promise的http库，可运行在浏览器端和node.js中。他有很多优秀的特性，例如拦截请求和响应、取消请求、转换json、客户端防御XSRF等。所以我们的尤大大也是果断放弃了对其官方库vue-resource的维护，直接推荐我们使用axios库。如果还对axios不了解的，可以移步axios文档。</p><p>安装 <code>npm install axios; // 安装axios</code> 引入 一般我会在项目的src目录中，新建一个request文件夹，然后在里面新建一个http.js和一个api.js文件。http.js文件用来封装我们的axios，api.js用来统一管理我们的接口。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在http.js中引入axios</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 引入axios</span>
<span class="token keyword">import</span> <span class="token constant">QS</span> <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 引入qs模块，用来序列化post类型的数据，后面会提到</span>
<span class="token comment">// vant的toast提示框组件，大家可根据自己的ui组件更改。</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="环境的切换" tabindex="-1"><a class="header-anchor" href="#环境的切换" aria-hidden="true">#</a> 环境的切换</h3><p>我们的项目环境可能有开发环境、测试环境和生产环境。我们通过node的环境变量来匹配我们的默认的接口url前缀。axios.defaults.baseURL可以设置axios的默认请求地址就不多说了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 环境的切换</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">;</span><span class="token punctuation">}</span> 
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&#39;debug&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;https://www.ceshi.com&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;https://www.production.com&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="设置请求超时" tabindex="-1"><a class="header-anchor" href="#设置请求超时" aria-hidden="true">#</a> 设置请求超时</h3><p>通过axios.defaults.timeout设置默认的请求超时时间。例如超过了10s，就会告知用户当前请求超时，请刷新等。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
post请求头的设置
post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置，即设置post的请求头为application<span class="token operator">/</span>x<span class="token operator">-</span>www<span class="token operator">-</span>form<span class="token operator">-</span>urlencoded<span class="token punctuation">;</span>charset<span class="token operator">=</span><span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span>

axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded;charset=UTF-8&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="请求拦截" tabindex="-1"><a class="header-anchor" href="#请求拦截" aria-hidden="true">#</a> 请求拦截</h3><p>我们在发送请求前可以进行一个请求的拦截，为什么要拦截呢，我们拦截请求是用来做什么的呢？比如，有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据。这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。</p><p>请求拦截</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 先导入vuex,因为我们要使用到里面的状态对象</span>
<span class="token comment">// vuex的路径根据自己的路径去写</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store/index&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">// 请求拦截器axios.interceptors.request.use(    </span>
    <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>        
        <span class="token comment">// 每次发送请求之前判断vuex中是否存在token        </span>
        <span class="token comment">// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况</span>
        <span class="token comment">// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 </span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>token<span class="token punctuation">;</span>        
        token <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>        
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>这里说一下token，一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过。这时候或许有些小伙伴会有疑问了，就是每个请求都携带token，那么要是一个页面不需要用户登录就可以访问的怎么办呢？其实，你前端的请求可以携带token，但是后台可以选择不接收啊！</p><h3 id="响应的拦截" tabindex="-1"><a class="header-anchor" href="#响应的拦截" aria-hidden="true">#</a> 响应的拦截</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>    
    <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   
        <span class="token comment">// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     </span>
        <span class="token comment">// 否则的话抛出错误</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>            
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>            
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token comment">// 服务器状态码不是2开头的的情况</span>
    <span class="token comment">// 这里可以跟你们的后台开发人员协商好统一的错误状态码    </span>
    <span class="token comment">// 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等</span>
    <span class="token comment">// 下面列举几个常见的操作，其他需求可自行扩展</span>
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>            
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>            
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>                
                <span class="token comment">// 401: 未登录</span>
                <span class="token comment">// 未登录则跳转登录页面，并携带当前页面的路径</span>
                <span class="token comment">// 在登录成功后返回当前页面，这一步需要在登录页操作。                </span>
                <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>                    
                    router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                        
                        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>                        
                        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                            <span class="token literal-property property">redirect</span><span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath 
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
 
                <span class="token comment">// 403 token过期</span>
                <span class="token comment">// 登录过期对用户进行提示</span>
                <span class="token comment">// 清除本地token和清空vuex中token对象</span>
                <span class="token comment">// 跳转登录页面                </span>
                <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
                     <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;登录过期，请重新登录&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">forbidClick</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 清除token</span>
                    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;loginSuccess&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 </span>
                    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>                        
                        router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                            
                            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>                            
                            <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                                <span class="token literal-property property">redirect</span><span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath 
                            <span class="token punctuation">}</span>                        
                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                    <span class="token keyword">break</span><span class="token punctuation">;</span> 
 
                <span class="token comment">// 404请求不存在</span>
                <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;网络请求不存在&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">forbidClick</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token comment">// 其他错误，直接抛出错误提示</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
                        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">forbidClick</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>响应拦截器很好理解，就是服务器返回给我们的数据，我们在拿到之前可以对他进行一些处理。例如上面的思想：如果后台返回的状态码是200，则正常返回数据，否则的根据错误的状态码类型进行一些我们需要的错误，其实这里主要就是进行了错误的统一处理和没登录或登录过期后调整登录页的一个操作。</p><p>要注意的是，上面的Toast()方法，是我引入的vant库中的toast轻提示组件，你根据你的ui库，对应使用你的一个提示组件。</p><h3 id="封装get方法和post方法" tabindex="-1"><a class="header-anchor" href="#封装get方法和post方法" aria-hidden="true">#</a> 封装get方法和post方法</h3><p>我们常用的ajax请求方法有get、post、put等方法，相信小伙伴都不会陌生。axios对应的也有很多类似的方法，不清楚的可以看下文档。但是为了简化我们的代码，我们还是要对其进行一个简单的封装。下面我们主要封装两个方法：get和post。</p><p>get方法：我们通过定义一个get函数，get函数有两个参数，第一个参数表示我们要请求的url地址，第二个参数是我们要携带的请求参数。get函数返回一个promise对象，当axios其请求成功时resolve服务器返回 值，请求失败时reject错误值。最后通过export抛出get函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * get方法，对应get请求
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> [请求的url地址]
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">params</span> [请求时携带的参数]
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>        
        axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>            
            <span class="token literal-property property">params</span><span class="token operator">:</span> params        
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>data<span class="token punctuation">)</span>        
    <span class="token punctuation">}</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre></div><p>post方法：原理同get基本一样，但是要注意的是，post方法必须要使用对提交从参数对象进行序列化的操作，所以这里我们通过node的qs模块来序列化我们的参数。这个很重要，如果没有序列化操作，后台是拿不到你提交的数据的。这就是文章开头我们import QS from &#39;qs&#39;;的原因。如果不明白序列化是什么意思的，就百度一下吧，答案一大堆。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 
 * post方法，对应post请求 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> [请求的url地址] 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">params</span> [请求时携带的参数] 
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token constant">QS</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这里有个小细节说下，axios.get()方法和axios.post()在提交数据时参数的书写方式还是有区别的。区别就是，get的第二个参数是一个{}，然后这个对象的params属性值是一个参数对象的。而post的第二个参数就是一个参数对象。两者略微的区别要留意哦！</p><p>axios的封装基本就完成了，下面再简单说下api的统一管理。 整齐的api就像电路板一样，即使再复杂也能很清晰整个线路。上面说了，我们会新建一个api.js,然后在这个文件中存放我们所有的api接口。</p><p>首先我们在api.js中引入我们封装的get和post方法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**   
 * api接口统一管理
 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> get<span class="token punctuation">,</span> post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./http&#39;</span>
现在，例如我们有这样一个接口，是一个post请求：
 
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>baiodu<span class="token punctuation">.</span>com<span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span>my_address<span class="token operator">/</span>address_edit_before
</code></pre></div><p>我们可以在api.js中这样封装：</p><p><code>export const apiAddress = p =&gt; post(&#39;api/v1/users/my_address/address_edit_before&#39;, p);</code> 我们定义了一个apiAddress方法，这个方法有一个参数p，p是我们请求接口时携带的参数对象。而后调用了我们封装的post方法，post方法的第一个参数是我们的接口地址，第二个参数是apiAddress的p参数，即请求接口时携带的参数对象。最后通过export导出apiAddress。</p><p>然后在我们的页面中可以这样调用我们的api接口：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> apiAddress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/request/api&#39;</span><span class="token punctuation">;</span><span class="token comment">// 导入我们的api接口</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>        
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Address&#39;</span><span class="token punctuation">,</span>    
    <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>            
        <span class="token comment">// 获取数据            </span>
        <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 调用api接口，并且提供了两个参数                </span>
            <span class="token function">apiAddress</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                    
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>                    
                <span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token number">1</span>                
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 获取数据成功后的其他操作</span>
                ………………                
            <span class="token punctuation">}</span><span class="token punctuation">)</span>            
        <span class="token punctuation">}</span>        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>其他的api接口，就在pai.js中继续往下面扩展就可以了。友情提示，为每个接口写好注释哦！！！</p><p>api接口管理的一个好处就是，我们把api统一集中起来，如果后期需要修改接口，我们就直接在api.js中找到对应的修改就好了，而不用去每一个页面查找我们的接口然后再修改会很麻烦。关键是，万一修改的量比较大，就规格gg了。还有就是如果直接在我们的业务代码修改接口，一不小心还容易动到我们的业务代码造成不必要的麻烦。</p><p>好了，最后把完成的axios封装代码奉上。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span><span class="token keyword">import</span> <span class="token constant">QS</span> <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;../store/index&#39;</span>
 
<span class="token comment">// 环境的切换</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&#39;debug&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://api.123dailu.com/&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// 请求超时时间</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
 
<span class="token comment">// post请求头</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded;charset=UTF-8&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">// 请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>    
    <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了</span>
        <span class="token comment">// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断</span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>token<span class="token punctuation">;</span>        
        token <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>        
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token comment">// 响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>    
    <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>            
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>            
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 服务器状态码不是200的情况    </span>
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>            
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>                
                <span class="token comment">// 401: 未登录                </span>
                <span class="token comment">// 未登录则跳转登录页面，并携带当前页面的路径                </span>
                <span class="token comment">// 在登录成功后返回当前页面，这一步需要在登录页操作。                </span>
                <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>                    
                    router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                        
                        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>                        
                        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath <span class="token punctuation">}</span> 
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token comment">// 403 token过期                </span>
                <span class="token comment">// 登录过期对用户进行提示                </span>
                <span class="token comment">// 清除本地token和清空vuex中token对象                </span>
                <span class="token comment">// 跳转登录页面                </span>
                <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>                     
                    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                        
                        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;登录过期，请重新登录&#39;</span><span class="token punctuation">,</span>                        
                        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>                        
                        <span class="token literal-property property">forbidClick</span><span class="token operator">:</span> <span class="token boolean">true</span>                    
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                    <span class="token comment">// 清除token                    </span>
                    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;loginSuccess&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                    <span class="token comment">// 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面</span>
                    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>                        
                        router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                            
                            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>                            
                            <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                                <span class="token literal-property property">redirect</span><span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath 
                            <span class="token punctuation">}</span>                        
                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                    <span class="token keyword">break</span><span class="token punctuation">;</span> 
                <span class="token comment">// 404请求不存在                </span>
                <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>                    
                    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                        
                        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;网络请求不存在&#39;</span><span class="token punctuation">,</span>                        
                        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>                        
                        <span class="token literal-property property">forbidClick</span><span class="token operator">:</span> <span class="token boolean">true</span>                    
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    
                <span class="token keyword">break</span><span class="token punctuation">;</span>                
                <span class="token comment">// 其他错误，直接抛出错误提示                </span>
                <span class="token keyword">default</span><span class="token operator">:</span>                    
                    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                        
                        <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">,</span>                        
                        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>                        
                        <span class="token literal-property property">forbidClick</span><span class="token operator">:</span> <span class="token boolean">true</span>                    
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            
            <span class="token punctuation">}</span>            
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span>       
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 
 * get方法，对应get请求 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> [请求的url地址] 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">params</span> [请求时携带的参数] 
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>        
        axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>            
            <span class="token literal-property property">params</span><span class="token operator">:</span> params        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>        
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>            
            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>        
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>            
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>data<span class="token punctuation">)</span>        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/** 
 * post方法，对应post请求 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> [请求的url地址] 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">params</span> [请求时携带的参数] 
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>         
        axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token constant">QS</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>        
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>            
            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>        
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>            
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>data<span class="token punctuation">)</span>        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js

axios的封装根据需求的不同而不同。
1.优化axios封装，去掉之前的get和post
 
2.断网情况处理
 
3.更加模块化的api管理
 
4.接口域名有多个的情况
 
5.api挂载到vue.prototype上省去引入的步骤
 
http.js中axios封装的优化，先直接贴代码：
</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>js
<span class="token doc-comment comment">/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;../router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;../store/index&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span>
 
<span class="token doc-comment comment">/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">tip</span> <span class="token operator">=</span> <span class="token parameter">msg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>    
    <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>        
        <span class="token literal-property property">message</span><span class="token operator">:</span> msg<span class="token punctuation">,</span>        
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>        
        <span class="token literal-property property">forbidClick</span><span class="token operator">:</span> <span class="token boolean">true</span>    
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token doc-comment comment">/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">toLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>        
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">redirect</span><span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token doc-comment comment">/** 
 * 请求失败后的错误统一处理 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">status</span> 请求失败的状态码
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">errorHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">status<span class="token punctuation">,</span> other</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 状态码判断</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 401: 未登录状态，跳转登录页</span>
        <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
            <span class="token function">toLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token comment">// 403 token过期</span>
        <span class="token comment">// 清除token并跳转登录页</span>
        <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
            <span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">&#39;登录过期，请重新登录&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;loginSuccess&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">toLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token comment">// 404请求不存在</span>
        <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
            <span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">&#39;请求的资源不存在&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">;</span>   
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
 
<span class="token comment">// 创建axios实例</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置post请求头</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */</span> 
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>    
    <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>        
        <span class="token comment">// 登录流程控制中，根据本地是否存在token判断用户的登录情况        </span>
        <span class="token comment">// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        </span>
        <span class="token comment">// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        </span>
        <span class="token comment">// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        </span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>token<span class="token punctuation">;</span>        
        token <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> Promise<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token comment">// 响应拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>    
    <span class="token comment">// 请求成功</span>
    <span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span> <span class="token operator">?</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span>    
    <span class="token comment">// 请求失败</span>
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> response <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 请求已发出，但是不在2xx的范围 </span>
            <span class="token function">errorHandle</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">,</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 处理断网的情况</span>
            <span class="token comment">// eg:请求超时或断网时，更新state的network状态</span>
            <span class="token comment">// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏</span>
            <span class="token comment">// 关于断网组件中的刷新重新获取数据，会在断网组件中说明</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeNetwork&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> instance<span class="token punctuation">;</span>
</code></pre></div><p>这个axios和之前的大同小异，做了如下几点改变：</p><ol><li><p>去掉了之前get和post方法的封装，通过创建一个axios实例然后export default方法导出，这样使用起来更灵活一些。</p></li><li><p>去掉了通过环境变量控制baseUrl的值。考虑到接口会有多个不同域名的情况，所以准备通过js变量来控制接口域名。这点具体在api里会介绍。</p></li><li><p>增加了请求超时，即断网状态的处理。说下思路，当断网时，通过更新vuex中network的状态来控制断网提示组件的显示隐藏。断网提示一般会有重新加载数据的操作，这步会在后面对应的地方介绍。</p></li><li><p>公用函数进行抽出，简化代码，尽量保证单一职责原则。</p></li></ol><p>下面说下api这块，考虑到一下需求：</p><ol><li><p>更加模块化</p></li><li><p>更方便多人开发，有效减少解决命名冲突</p></li><li><p>处理接口域名有多个情况</p></li></ol><p>这里这里呢新建了一个api文件夹，里面有一个index.js和一个base.js，以及多个根据模块划分的接口js文件。index.js是一个api的出口，base.js管理接口域名，其他js则用来管理各个模块的接口。</p><p>先放index.js代码：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 
 * api接口的统一出口
 */</span>
<span class="token comment">// 文章模块接口</span>
<span class="token keyword">import</span> article <span class="token keyword">from</span> <span class="token string">&#39;@/api/article&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 其他模块的接口……</span>
 
<span class="token comment">// 导出接口</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>    
    article<span class="token punctuation">,</span>
    <span class="token comment">// ……</span>
<span class="token punctuation">}</span>
index<span class="token punctuation">.</span>js是一个api接口的出口，这样就可以把api接口根据功能划分为多个模块，利于多人协作开发，比如一个人只负责一个模块的开发等，还能方便每个模块中接口的命名哦。
 
base<span class="token punctuation">.</span>js<span class="token operator">:</span>
 
<span class="token doc-comment comment">/**
 * 接口域名的管理
 */</span>
<span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token punctuation">{</span>    
    <span class="token literal-property property">sq</span><span class="token operator">:</span> <span class="token string">&#39;https://xxxx111111.com/api/v1&#39;</span><span class="token punctuation">,</span>    
    <span class="token literal-property property">bd</span><span class="token operator">:</span> <span class="token string">&#39;http://xxxxx22222.com/api&#39;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> base<span class="token punctuation">;</span>
通过base<span class="token punctuation">.</span>js来管理我们的接口域名，不管有多少个都可以通过这里进行接口的定义。即使修改起来，也是很方便的。
 
最后就是接口模块的说明，例如上面的article<span class="token punctuation">.</span>js<span class="token operator">:</span>
 
<span class="token doc-comment comment">/**
 * article模块接口列表
 */</span>
 
<span class="token keyword">import</span> base <span class="token keyword">from</span> <span class="token string">&#39;./base&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 导入接口域名列表</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;@/utils/http&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 导入http中创建的axios实例</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 根据需求是否导入qs模块</span>
 
<span class="token keyword">const</span> article <span class="token operator">=</span> <span class="token punctuation">{</span>    
    <span class="token comment">// 新闻列表    </span>
    <span class="token function">articleList</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        
        <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token punctuation">.</span>sq<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/topics</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token comment">// 新闻详情,演示    </span>
    <span class="token function">articleDetail</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        
        <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token punctuation">.</span>sq<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/topic/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>            
            <span class="token literal-property property">params</span><span class="token operator">:</span> params        
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// post提交    </span>
    <span class="token function">login</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        
        <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token punctuation">.</span>sq<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/accesstoken</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>
    <span class="token comment">// 其他接口…………</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> article<span class="token punctuation">;</span>
</code></pre></div><ol><li><p>通过直接引入我们封装好的axios实例，然后定义接口、调用axios实例并返回，可以更灵活的使用axios，比如你可以对post请求时提交的数据进行一个qs序列化的处理等。</p></li><li><p>请求的配置更灵活，你可以针对某个需求进行一个不同的配置。关于配置的优先级，axios文档说的很清楚，这个顺序是：在 lib/defaults.js 找到的库的默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。后者将优先于前者。</p></li><li><p>restful风格的接口，也可以通过这种方式灵活的设置api接口地址。</p></li></ol><p>最后，为了方便api的调用，我们需要将其挂载到vue的原型上。在main.js中：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span> <span class="token comment">// 导入路由文件</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span> <span class="token comment">// 导入vuex文件</span>
<span class="token keyword">import</span> api <span class="token keyword">from</span> <span class="token string">&#39;./api&#39;</span> <span class="token comment">// 导入api接口</span>
 
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$api <span class="token operator">=</span> api<span class="token punctuation">;</span> <span class="token comment">// 将api挂载到vue的原型上</span>
</code></pre></div><p>然后我们可以在页面中这样调用接口，eg：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>    
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      
        <span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span>article<span class="token punctuation">.</span><span class="token function">articleDetail</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span>        
            <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token number">123</span>      
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 执行某些操作      </span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
再提一下断网的处理，这里只做一个简单的示例：
 
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>  
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>    
        <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;!network&quot;</span><span class="token operator">&gt;</span>      
            <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>我没网了<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>      
            <span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;onRefresh&quot;</span><span class="token operator">&gt;</span>刷新<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>      
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>    
        <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">/</span><span class="token operator">&gt;</span>      
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
 
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>  
        <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>    
            <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;network&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>    
            <span class="token comment">// 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的</span>
            <span class="token function">onRefresh</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      
                <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;/refresh&#39;</span><span class="token punctuation">)</span>    
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>这是app.vue，这里简单演示一下断网。在http.js中介绍了，我们会在断网的时候，来更新vue中network的状态，那么这里我们根据network的状态来判断是否需要加载这个断网组件。断网情况下，加载断网组件，不加载对应页面的组件。当点击刷新的时候，我们通过跳转refesh页面然后立即返回的方式来实现重新获取数据的操作。因此我们需要新建一个refresh.vue页面，并在其beforeRouteEnter钩子中再返回当前页面。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// refresh.vue</span>
<span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>            
        vm<span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>from<span class="token punctuation">.</span>fullPath<span class="token punctuation">)</span>        
    <span class="token punctuation">}</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span>
</code></pre></div>`,50),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","axios.html.vue"]]);export{r as default};
