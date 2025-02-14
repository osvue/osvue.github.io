import{_ as n,M as l,p as o,q as s,R as t,N as a,t as e,a1 as r}from"./framework-d81ad7e5.js";const i={},c=r(`<ul><li>https://blog.csdn.net/weixin_45906632/article/details/128560735</li></ul><ul><li>https://www.tsingsee.com/easyplayer/</li><li>https://www.npmjs.com/package/@easydarwin/easyplayer</li><li>https://blog.csdn.net/weixin_45906632/article/details/115031633</li><li>https://blog.csdn.net/weixin_45906632/article/details/128560735</li><li>https://blog.csdn.net/weixin_53791978/article/details/135323209</li></ul><h2 id="html-集成示例" tabindex="-1"><a class="header-anchor" href="#html-集成示例" aria-hidden="true">#</a> HTML 集成示例</h2><ul><li>使用方式</li><li>[x] 普通集成</li></ul><p>copy dist/element/EasyPlayer-element.min.js 到 www 根目录</p><p>在 html 中引用 dist/element/EasyPlayer-element.min.js</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;easyplayer&lt;/title&gt;
  &lt;meta charset=&quot;utf-8&quot;/&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot;/&gt;
  &lt;meta
    content=&quot;width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no&quot;
    name=&quot;viewport&quot;
  /&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;EasyPlayer-element.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;easy-player
  video-url=&quot;rtmp://live.hkstv.hk.lxdns.com/live/hks2&quot;
  live=&quot;true&quot;
  stretch=&quot;true&quot;
&gt;&lt;/easy-player&gt;
&lt;easy-player
  video-url=&quot;http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8&quot;
  live=&quot;false&quot;
  stretch=&quot;true&quot;
&gt;&lt;/easy-player&gt;
&lt;easy-player
  video-url=&quot;http://live.hkstv.hk.lxdns.com/flv/hks.flv&quot;
  live=&quot;true&quot;
  stretch=&quot;true&quot;
&gt;&lt;/easy-player&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre></div><ul><li>[x] vue集成</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>  npm install @easydarwin/easyplayer --save
</code></pre></div><ul><li>Vue 集成调用</li></ul><p>copy node_modules/@easydarwin/easyplayer/dist/component/crossdomain.xml 到 静态文件 根目录</p><p>copy node_modules/@easydarwin/easyplayer/dist/component/EasyPlayer-lib.min.js 到 静态文件 根目录</p><p><strong>注意：</strong> 没有调用会出现无法加载对应插件的报错</p><p>在 html 中引用 dist/component/EasyPlayer-lib.min.js</p><h3 id="h-265" tabindex="-1"><a class="header-anchor" href="#h-265" aria-hidden="true">#</a> H.265</h3><p>copy node_modules/@easydarwin/easyplayer/dist/component/EasyPlayer.wasm 到 静态文件 根目录</p><h4 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;/&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;/&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0&quot;/&gt;
  &lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;/&gt;
  &lt;title&gt;EasyPlayer-demo&lt;/title&gt;
  &lt;script src=&quot;https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;./EasyPlayer-lib.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;noscript&gt;
  &lt;strong
  &gt;We&#39;re sorry but easynvr-token doesn&#39;t work properly without JavaScript
    enabled. Please enable it to continue.&lt;/strong
  &gt;
&lt;/noscript&gt;
&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
&lt;!-- built files will be auto injected --&gt;
&lt;/body&gt;
&lt;/html&gt;

更多使用demo 详情见 node_modules/@easydarwin/easyplayer/dist/element/index.html
</code></pre></div><h2 id="效果演示" tabindex="-1"><a class="header-anchor" href="#效果演示" aria-hidden="true">#</a> 效果演示</h2>`,19),h={href:"https://camo.githubusercontent.com/7805e4d063a7d7bedaa0ef40408c8bc406bcdcc46b9e63e78b83330e8c87d77f/687474703a2f2f7777772e6561737964617277696e2e6f72672f6769746875622f696d616765732f65617379706c617965722f65617379706c617965722e6a732f65617379706c617965722e6a732e32303139303932332e706e67",target:"_blank",rel:"noopener noreferrer"},u=t("img",{src:"https://camo.githubusercontent.com/7805e4d063a7d7bedaa0ef40408c8bc406bcdcc46b9e63e78b83330e8c87d77f/687474703a2f2f7777772e6561737964617277696e2e6f72672f6769746875622f696d616765732f65617379706c617965722f65617379706c617965722e6a732f65617379706c617965722e6a732e32303139303932332e706e67",alt:"img"},null,-1),p=r(`<ul><li>[x] npm集成</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>......

&lt;easy-player
  live
  muted
  autoplay
  :video-url=&quot;camera.videoSrc&quot;
  style=&quot;width: 100%;height: 200px&quot;
  @error=&quot;restartPlayer&quot;
/&gt;

...... ...... import EasyPlayer from &#39;@easydarwin/easyplayer&#39;; ......
components: { EasyPlayer }
</code></pre></div><h2 id="配置属性" tabindex="-1"><a class="header-anchor" href="#配置属性" aria-hidden="true">#</a> 配置属性</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>alt</td><td>视频流地址没有指定情况下, 视频所在区域显示的文字</td><td>String</td><td>无信号</td></tr><tr><td>aspect</td><td>视频显示区域的宽高比</td><td>String</td><td>16:9</td></tr><tr><td>autoplay</td><td>自动播放</td><td>Boolean</td><td>true</td></tr><tr><td>currentTime</td><td>设置当前播放时间</td><td>Number</td><td>0</td></tr><tr><td>decode-type</td><td>解码类型 仅支持flv (soft: 强制使用wasm模式）</td><td>String</td><td>auto</td></tr><tr><td>easyStretch</td><td>是否不同分辨率强制铺满窗口</td><td>Boolean</td><td>false</td></tr><tr><td>live</td><td>是否直播, 标识要不要显示进度条</td><td>Boolean</td><td>true</td></tr><tr><td>loop</td><td>是否轮播。</td><td>Boolean</td><td>false</td></tr><tr><td>muted</td><td>是否静音</td><td>Boolean</td><td>true</td></tr><tr><td>poster</td><td>视频封面图片</td><td>String</td><td>-</td></tr><tr><td>reconnection</td><td>视频出错时自动重连</td><td>Boolean</td><td>false</td></tr><tr><td>resolution</td><td>仅支持hls流; 供选择的清晰度 fhd:超清，hd:高清，sd:标清</td><td>String</td><td>&quot;yh,fhd,hd,sd&quot;</td></tr><tr><td>resolutionDefault</td><td>仅支持hls流</td><td>String</td><td>&quot;hd&quot;</td></tr><tr><td>video-url</td><td>视频地址</td><td>String</td><td>-</td></tr><tr><td>has-audio</td><td>是否渲染音频（音频有问题,请设置成false）仅支持flv</td><td>Boolean</td><td>true</td></tr><tr><td>video-title</td><td>视频右上角显示的标题</td><td>String</td><td>-</td></tr><tr><td>recordMaxFileSize</td><td>录像文件大小(MB)</td><td>Number</td><td>200</td></tr></tbody></table><h2 id="事件回调" tabindex="-1"><a class="header-anchor" href="#事件回调" aria-hidden="true">#</a> 事件回调</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>play</td><td>播放事件</td><td></td></tr><tr><td>pause</td><td>暂时事件</td><td></td></tr><tr><td>error</td><td>播放异常</td><td></td></tr><tr><td>ended</td><td>播放结束或直播断流</td><td></td></tr><tr><td>timeupdate</td><td>当前播放时间回调</td><td>currentTime</td></tr></tbody></table><h2 id="vue方法" tabindex="-1"><a class="header-anchor" href="#vue方法" aria-hidden="true">#</a> Vue方法</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>initPlayer</td><td>初始化播放器</td><td></td></tr><tr><td>destroyPlayer</td><td>销毁播放器</td><td></td></tr><tr><td>switchVideo</td><td>播放开关</td><td></td></tr><tr><td>switchAudio</td><td>静音开关</td><td></td></tr><tr><td>fullscreen</td><td>全屏</td><td></td></tr><tr><td>exitFullscreen</td><td>退出全屏</td><td></td></tr><tr><td>changeStretch</td><td>视频拉伸模式</td><td></td></tr><tr><td>snapshot</td><td>保存快照</td><td></td></tr><tr><td>switchRecording</td><td>录像开关</td><td></td></tr></tbody></table><h2 id="更多流媒体音视频资源" tabindex="-1"><a class="header-anchor" href="#更多流媒体音视频资源" aria-hidden="true">#</a> 更多流媒体音视频资源</h2>`,9),y={href:"http://www.easydarwin.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://www.easydss.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.easynvr.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://www.easynvs.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.easynts.com/",target:"_blank",rel:"noopener noreferrer"},q={href:"http://www.easygbs.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.easyrts.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://open.tsingsee.com/",target:"_blank",rel:"noopener noreferrer"};function v(x,E){const d=l("ExternalLinkIcon");return o(),s("div",null,[c,t("p",null,[t("a",h,[u,a(d)])]),p,t("p",null,[e("EasyDarwin开源流媒体服务器："),t("a",y,[e("www.EasyDarwin.org"),a(d)])]),t("p",null,[e("EasyDSS高性能互联网直播服务："),t("a",g,[e("www.EasyDSS.com"),a(d)])]),t("p",null,[e("EasyNVR安防视频可视化服务："),t("a",m,[e("www.EasyNVR.com"),a(d)])]),t("p",null,[e("EasyNVS视频综合管理平台："),t("a",w,[e("www.EasyNVS.com"),a(d)])]),t("p",null,[e("EasyNTS云组网："),t("a",f,[e("www.EasyNTS.com"),a(d)])]),t("p",null,[e("EasyGBS国标GB/T28181服务器："),t("a",q,[e("www.EasyGBS.com< /a>"),a(d)])]),t("p",null,[e("EasyRTS应急指挥平台："),t("a",b,[e("www.EasyRTS.com"),a(d)])]),t("p",null,[e("TSINGSEE青犀开放平台："),t("a",_,[e("open.TSINGSEE.com"),a(d)])])])}const k=n(i,[["render",v],["__file","easyplayer.html.vue"]]);export{k as default};
