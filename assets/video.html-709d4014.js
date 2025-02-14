import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> video.js <span class="token parameter variable">--save</span>  
<span class="token function">npm</span> <span class="token function">install</span> videojs-flash <span class="token parameter variable">--save</span> //rtmp格式
//flv格式
<span class="token function">npm</span> <span class="token function">install</span> flv.js <span class="token parameter variable">--save</span>
<span class="token function">npm</span> <span class="token function">install</span> videojs-flvjs-es6 <span class="token parameter variable">--save</span>
//hls格式  video.js7.0以后版本默认支持hls（m3u8）格式  可以不安装，装了也可以使用
<span class="token function">npm</span> <span class="token function">install</span> videojs-contrib-hls <span class="token parameter variable">--save</span>



页面引入
	<span class="token function">import</span> Videojs from <span class="token string">&#39;video.js&#39;</span>
   <span class="token function">import</span> <span class="token string">&#39;video.js/dist/video-js.css&#39;</span>
   <span class="token function">import</span> <span class="token string">&quot;videojs-flvjs-es6&quot;</span><span class="token punctuation">;</span>
   <span class="token function">import</span> <span class="token string">&quot;videojs-flash&quot;</span><span class="token punctuation">;</span>



</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code>// 标签容器
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>
   <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mmiid<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video-js vjs-big-play-centered vjs-fluid<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">controls</span>
    <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>





</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// hls</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>videoPlayer <span class="token operator">=</span> <span class="token function">Videojs</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#mmiid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
          <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token string">&#39;muted&#39;</span><span class="token punctuation">,</span><span class="token comment">//自动播放</span>
          <span class="token literal-property property">controls</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//用户可以与之交互的控件</span>
          <span class="token literal-property property">loop</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//视频一结束就重新开始</span>
          <span class="token literal-property property">muted</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//默认情况下将使所有音频静音</span>
          <span class="token literal-property property">aspectRatio</span><span class="token operator">:</span><span class="token string">&quot;16:9&quot;</span><span class="token punctuation">,</span><span class="token comment">//显示比率</span>
          <span class="token literal-property property">fullscreen</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">navigationUI</span><span class="token operator">:</span> <span class="token string">&#39;hide&#39;</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">techOrder</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;html5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;flvjs&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 兼容顺序</span>
          <span class="token literal-property property">html5</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">hls</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;application/x-mpegURL&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//flv</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>videoPlayer <span class="token operator">=</span> <span class="token function">Videojs</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#mmiid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
       <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token string">&#39;muted&#39;</span><span class="token punctuation">,</span><span class="token comment">//自动播放</span>
        <span class="token literal-property property">controls</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//用户可以与之交互的控件</span>
        <span class="token literal-property property">loop</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//视频一结束就重新开始</span>
        <span class="token literal-property property">muted</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//默认情况下将使所有音频静音</span>
        <span class="token literal-property property">aspectRatio</span><span class="token operator">:</span><span class="token string">&quot;16:9&quot;</span><span class="token punctuation">,</span><span class="token comment">//显示比率</span>
        <span class="token literal-property property">fullscreen</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">navigationUI</span><span class="token operator">:</span> <span class="token string">&#39;hide&#39;</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">techOrder</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;html5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;flvjs&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 兼容顺序</span>
        <span class="token literal-property property">flvjs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">mediaDataSource</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">isLive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> urlList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;video/x-flv&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 其他</span>
<span class="token comment">//rtmp</span>
<span class="token literal-property property">techOrder</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;html5&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;flash&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">// 兼容顺序</span>
<span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>videoUrl<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;rtmp/flv&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token comment">// mp4</span>
<span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>videoUrl<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;video/mp4&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>





</code></pre></div><h3 id="一些补充说明" tabindex="-1"><a class="header-anchor" href="#一些补充说明" aria-hidden="true">#</a> 一些补充说明</h3><p>1.对于Video.js 5.x及更低版本，Flash技术是Video.js核心存储库的一部分。对于Video.js 6.x及更高版本，Flash技术位于单独的存储库中。videojs-flash.js插件只与Video.js&gt; = 6.0.0一起使用，因为之前的flash技术已构建到版本中！ video.js不能直接播放rtmp流，需要videojs-flash.js 这个插件。</p><p>2.对于播放HLS视频，在videojs7版本之前要引用videojs-contrib-hls.js插件才能播放。videojs7版本之后的，Video.js默认捆绑VHS（VHS是videojs-contrib-hls的继承者。它是一个源自videojs-contrib-hls存储库的源处理程序。虽然videojs-contrib-hls最初设计用于在所有浏览器上添加HLS播放，但我们意识到引擎也可以播放其他格式，所以videojs-contrib-hls这个项目已经被弃用，被videojs-http-streaming继承）。默认情况下，在Video.js 7及以上版本中已经集成Videojs HTTP Streaming（昵称为VHS），不必使用videojs-http-streaming插件就可以播放HLS，DASH和未来的HTTP流媒体协议视频。</p><p>注意：</p><p>1.对于Video.js 7之前的版本（明确说是6版本的），必须使用videojs-http-streaming.js插件才可以播放HLS，DASH和未来的HTTP流媒体协议视频，即使它们不是本机支持的。</p><p>2.VHS支持HLS和DASH和未来的HTTP流媒体协议。</p><ul><li>介绍 https://www.cnblogs.com/stoneniqiu/p/5807568.html</li></ul><p>插件内部可以直接调用播放器的api。 有一款playlist的插件可以研究下，如过你需要播放列表。https://github.com/brightcove/videojs-playlist 以及 http://videojs.com/advanced/ 有这样的效果：</p><h3 id="rtmp" tabindex="-1"><a class="header-anchor" href="#rtmp" aria-hidden="true">#</a> rtmp</h3><p>html5环境不支持rtmp； rtmp需要flash环境；</p><p>首先，rtsp不能使用于网页环境（包含PC端和移动端）。 那么直播只能选择rtmp或http</p><p>rtmp协议只支持flashplayer，也就是只能在PC端（或安卓环境中安装了flashplayer组件，这种环境比较少）安装了flashplayer的情况下使用。按现在的趋势，flashplayer是要逐渐被淘汰掉的。当然，在中国还会存在相对长时间。</p><p>http协议的直播分两种格式，m3u8和flv。flv是一种即将被淘汰的直播格式。用来做直播已显的力不从心了。所以综合考虑，m3u8相对的比较好点，优点是支持移动端， 并且支持PC端上安装了flashplayer的环境。缺点就如同rtmp一样。flashplayer并不是未来的发展趋势。</p><p>另外一个缺点就是m3u8是有延迟的。并不能实时，实时传输方面不如rtmp协议。因为m3u8的直播原理是将直播源不停的压缩成指定时长的ts文件（比如9秒，10秒一个ts文件） 并同时实时更新m3u8文件里的列表以达到直播的效果。这样就会有一个至少9,10秒的时间延迟。如果压缩的过小，可能导致客户端网络原因致视频变卡。</p><p>最近要做摄像头视频的展示，不想使用硬件方的专用插件，所以计划视频推送到SRS服务器，浏览器再通过rtmp协议显示，类似于直播。</p><p>经查询，了解到可以用ckplayer(有许可条款)和video.js在html页面中。尝试了video.js_5.x可以正常播放，而6.x版本不能播放，可目前video.js已经更新到了7.x！</p><p>几经折腾，发现6.x版本后需要单独的flash插件，早期版本包含了flash，官方说明如下：</p><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> websocket</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">websock</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//离开路由之后断开websocket连接</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//初始化weosocket</span>
        <span class="token keyword">const</span> wsuri <span class="token operator">=</span> <span class="token string">&quot;ws://127.0.0.1:8080&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>websock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span>wsuri<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonmessage<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span>onopen <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonopen<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketonerror<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span>onclose <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocketclose<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">websocketonopen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//连接建立之后执行send方法发送数据</span>
        <span class="token keyword">let</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;12345&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">websocketsend</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>actions<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">websocketonerror</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//连接建立失败重连</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">websocketonmessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//数据接收</span>
        <span class="token keyword">const</span> redata <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">websocketsend</span><span class="token punctuation">(</span><span class="token parameter">Data</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//数据发送</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>websock<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>Data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">websocketclose</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//关闭</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;断开连接&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>less<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="videojs的一些监听事件汇总" tabindex="-1"><a class="header-anchor" href="#videojs的一些监听事件汇总" aria-hidden="true">#</a> videojs的一些监听事件汇总</h3><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><p>常见options成员（写在option这个对象中） <code>autoplay : true/false</code> 播放器准备好之后，是否自动播放，默认false</p><p><code>controls : true/false</code> 是否拥有控制条 ，默认true 如果设为false ,界面上不会出现任何控制按钮，那么只能通过api进行控制了</p><p>height: 字符串或数字（字符串带单位） 视频容器的高度，比如： <code>height:300 or height:‘300px’</code></p><p>width: 字符串或数字 视频容器的宽度, 单位像素</p><p><code>loop : true/false</code> 视频播放结束后，是否循环播放</p><p><code>muted : true/false</code> 是否静音</p><p><code>poster: 通常传入一个URL</code> 播放前显示的视频画面，播放开始之后自动移除。</p><p><code>preload: ‘auto’/ ‘metadata’ / ‘none’</code> 预加载</p><p>auto-自动 metadata-元数据信息 ，比如视频长度，尺寸等 none-不预加载任何数据，直到用户开始播放才开始下载</p><p><code>children: Array | Object</code> 可选子组件 从基础的Component组件继承而来的子组件 数组中的顺序将影响组件的创建顺序 整后会生成的dom少一些，加载也快一些 播放器在html中的常见的组件元素 <code>children: Array | Object</code> 可选子组件 从基础的Component组件继承而来的子组件 数组中的顺序将影响组件的创建顺序 整后会生成的dom少一些，加载也快一些 播放器在html中的常见的组件元素</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">sources</span><span class="token operator">:</span>Array
<span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> ‘…mp4’<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> ‘video<span class="token operator">/</span>mp4’<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> ‘…webm’<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> ‘video<span class="token operator">/</span>webm’<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>资源文件 等价于html中的</p><p>techOrder: [‘html5’] 默认为<code>[‘html5’]，&#39;flash’可以有，比如 [‘html5’, ‘flash’]</code> 在v6.0.0 及以上的版本中，默认不包含flash的使用代码。如果要使用flash播放的，需要手动引入flash相关逻辑的代码。且需要指定swf文件的路径。 plugins:自动初始化要加载的插件</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> player <span class="token operator">=</span> <span class="token function">videojs</span><span class="token punctuation">(</span>‘example_video_1‘<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">onPlayerReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  videojs<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>‘播放器已经准备好了<span class="token operator">!</span>‘<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">// In this context, \`this\` is the player that was created by Video.js.&lt;br&gt;  // 注意，这个地方的上下文， \`this\` 指向的是Video.js的实例对像player</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">// How about an event listener?&lt;br&gt;  // 如何使用事件监听？</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>‘ended‘<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    videojs<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>‘播放结束了<span class="token operator">!</span>‘<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token keyword">var</span> playerVideo <span class="token operator">=</span> <span class="token function">videojs</span><span class="token punctuation">(</span><span class="token string">&quot;my-player&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">onPlayerReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    videojs<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Your player is ready!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;loadstart&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;开始请求数据 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;progress&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;正在请求数据 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;loadedmetadata&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取资源长度完成 &quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;canplaythrough&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视频源数据加载完成&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;waiting&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;等待数据&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;play&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视频开始播放&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;playing&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视频播放中&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视频暂停播放&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;ended&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视频播放结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;加载错误&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;seeking&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视频跳转中&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;seeked&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;视频跳转结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;ratechange&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;播放速率改变&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;timeupdate&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;播放时长改变&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;volumechange&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;音量改变&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;stalled&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;网速异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
   
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.6 手动控制播放条的显示和隐藏</span>
video<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>‘tap’<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">userActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
player<span class="token punctuation">.</span><span class="token function">userActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
player<span class="token punctuation">.</span><span class="token function">userActive</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="video-属性与方法" tabindex="-1"><a class="header-anchor" href="#video-属性与方法" aria-hidden="true">#</a> video 属性与方法</h3><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
//错误状态  
   Media.error; //null:正常  
   Media.error.code; //1.用户终止 2.网络错误 3.解码错误 4.URL无效  
  
//网络状态  
   Media.currentSrc; //返回当前资源的URL  
   Media.src = value; //返回或设置当前资源的URL  
   Media.canPlayType(type); //是否能播放某种格式的资源  
   Media.networkState; //0.此元素未初始化  1.正常但没有使用网络  2.正在下载数据  3.没有找到资源  
   Media.load(); //重新加载src指定的资源  
   Media.buffered; //返回已缓冲区域，TimeRanges  
   Media.preload; //none:不预载 metadata:预载资源信息 auto:  
  
//准备状态  
   Media.readyState;    //1:HAVE_NOTHING 2:HAVE_METADATA 3.HAVE_CURRENT_DATA 4.HAVE_FUTURE_DATA 5.HAVE_ENOUGH_DATA  
   Media.seeking; //是否正在seeking  
  
//回放状态  
   Media.currentTime = value; //当前播放的位置，赋值可改变位置  
   Media.startTime; //一般为0，如果为流媒体或者不从0开始的资源，则不为0  
   Media.duration; //当前资源长度 流返回无限  
   Media.paused; //是否暂停  
   Media.defaultPlaybackRate = value;//默认的回放速度，可以设置  
   Media.playbackRate = value;//当前播放速度，设置后马上改变  
   Media.played; //返回已经播放的区域，TimeRanges，关于此对象见下文  
   Media.seekable; //返回可以seek的区域 TimeRanges  
   Media.ended; //是否结束  
Media.autoPlay; //是否自动播放  
Media.loop; //是否循环播放  
   Media.play();    //播放  
   Media.pause();   //暂停  
  
//控制  
Media.controls;//是否有默认控制条  
   Media.volume = value; //音量  
   Media.muted = value; //静音  
  
   //TimeRanges(区域)对象  
TimeRanges.length; //区域段数  
TimeRanges.start(index) //第index段区域的开始位置  
TimeRanges.end(index) //第index段区域的结束位置

</code></pre></div><h3 id="修改h5-中video默认-的样式" tabindex="-1"><a class="header-anchor" href="#修改h5-中video默认-的样式" aria-hidden="true">#</a> 修改H5 中video默认 的样式</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">//全屏按钮
video::-webkit-media-controls-fullscreen-button</span> <span class="token punctuation">{</span>
   <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//播放按钮
video::-webkit-media-controls-play-button</span> <span class="token punctuation">{</span>
  //<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//进度条
video::-webkit-media-controls-timeline</span> <span class="token punctuation">{</span>
   //<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//观看的当前时间
video::-webkit-media-controls-current-time-display</span><span class="token punctuation">{</span>
   <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//剩余时间
video::-webkit-media-controls-time-remaining-display</span> <span class="token punctuation">{</span>
   <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//音量按钮
video::-webkit-media-controls-mute-button</span> <span class="token punctuation">{</span>
   //<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">video::-webkit-media-controls-toggle-closed-captions-button</span> <span class="token punctuation">{</span>
  // <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//音量的控制条
video::-webkit-media-controls-volume-slider</span> <span class="token punctuation">{</span>
  // <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//所有控件
video::-webkit-media-controls-enclosure</span><span class="token punctuation">{</span>
  // <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">video::-webkit-media-controls-overlay-enclosure</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">video::-internal-media-controls-loading-panel</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span><span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px crimson solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="video-js" tabindex="-1"><a class="header-anchor" href="#video-js" aria-hidden="true">#</a> video js</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save video<span class="token punctuation">.</span>js
npm install <span class="token operator">--</span>save videojs<span class="token operator">-</span>contrib<span class="token operator">-</span>hls

</code></pre></div><h3 id="引入videojs的css文件-例如在main-js中引入" tabindex="-1"><a class="header-anchor" href="#引入videojs的css文件-例如在main-js中引入" aria-hidden="true">#</a> 引入videojs的css文件，例如在main.js中引入</h3><p><code>import &#39;video.js/dist/video-js.css&#39;</code></p><h3 id="需要播放视频的页面引入js对象" tabindex="-1"><a class="header-anchor" href="#需要播放视频的页面引入js对象" aria-hidden="true">#</a> 需要播放视频的页面引入js对象</h3><p>import videojs from &quot;video.js&quot;; import &quot;videojs-contrib-hls&quot;;</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> videojs <span class="token keyword">from</span> <span class="token string">&#39;video.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;videojs-contrib-hls&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;video.js/dist/video-js.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VideojsZhcnLanguage <span class="token keyword">from</span> <span class="token string">&#39;video.js/dist/lang/zh-CN.json&#39;</span><span class="token punctuation">;</span>

videojs<span class="token punctuation">.</span><span class="token function">addLanguage</span><span class="token punctuation">(</span><span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>VideojsZhcnLanguage<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myPlayer <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mountedFlag <span class="token operator">=</span> ref<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 初始化视频组件</span>
<span class="token keyword">const</span> <span class="token function-variable function">initVideo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>myPlayer<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myPlayer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myPlayer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 向Dom中写入视频组件</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;video-box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;video id=&quot;fire-video&quot; class=&quot;video-js vjs-default-skin vjs-big-play-centered&quot; controls preload=&quot;auto&quot; style=&quot;width: 100%;height:100%&quot;&gt;
        &lt;source id=&quot;source&quot; src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; type=&quot;application/x-mpegURL&quot;&gt;
    &lt;/video&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;video-box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> html<span class="token punctuation">;</span>
  <span class="token comment">// 初始化声明</span>
  myPlayer<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">videojs</span><span class="token punctuation">(</span><span class="token string">&#39;fire-video&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token string">&#39;muted&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bigPlayButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textTrackDisplay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">posterImage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">errorDisplay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">controlBar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  videojs<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;beforeerror&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">player<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Video.js 在切换/指定 source 后立即会触发一个 err=null 的错误，这里过滤一下</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      myPlayer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 清除错误，避免 error 事件在控制台抛出错误</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  myPlayer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 监听，需要视频url由其他方法赋值且组件挂载完成后，才能进行初始化</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>cameraURL<span class="token punctuation">,</span>mountedFlag<span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>url<span class="token punctuation">,</span>flag<span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>url <span class="token operator">&amp;&amp;</span> flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initVideo</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    mountedFlag<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 组件销毁</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>myPlayer<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mountedFlag<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>操作 上面通过videojs创建了一个Player对像，我们就可以通过这个对象的各种函数来操作播放器。 同样这里只说说常用的函数，其他的大家参考官网docs.videojs.com/player</p><p>src(string | SourceObject | SourceObject[])：设置视频源 src():string：获取当前视频源 play()：播放 pause()：暂停 paused():boolean：是否暂停 currentTime(number)：设置播放位置，就是seek currentTime():number：获取当前播放位置 muted():boolean：是否静音 muted(boolean)：设置静音 duration():number：获取时长 controls(boolean)：设置控制栏显示隐藏 controls():boolean：控制栏是否显示 requestFullscreen()：全屏播放 exitFullscreen()：退出全屏播放 isFullscreen():boolean：是否全屏播放 dispose()：销毁播放器 error(MediaError)：设置一个错误 error():MediaError：获取当前错误。配合error事件</p><p>事件 通过Player.on(string, EventListener)函数可以设置播放器的监听事件，第一个参数是事件名称，第二个参数是回调。 同样这里说说常用的事件，所有事件大家可以查阅官网docs.videojs.com/player</p><p>canplay：视频可以播放 playing：播放 pause：暂停 timeupdate：播放进度更新 ended：播放完成 fullscreenchange：全屏状态改变 error：视频播放错误。可以配合player的error函数来获取处理错误。代码如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>   player<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> error <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;video error:&quot;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>code <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>






    <span class="token function">checkVideo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> myPlayer <span class="token operator">=</span> <span class="token function">videojs</span><span class="token punctuation">(</span><span class="token string">&quot;my-video&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myPlayer<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;application/x-mpegURL&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8&quot;</span> <span class="token comment">//CCTV3频道</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myPlayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div>`,54),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","video.html.vue"]]);export{k as default};
