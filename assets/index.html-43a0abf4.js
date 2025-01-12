import{_ as a,p as s,q as n,a1 as t}from"./framework-d81ad7e5.js";const e={},l=t(`<div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code> <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">www.ckplayer.com</span><span class="token regex-delimiter">/</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            //定义一个变量：videoObject，用来做为视频初始化配置
            var videoObject = {
        	container: &#39;.video&#39;, //“#”代表容器的ID，“.”或“”代表容器的class
        	video: &#39;temp.mp4&#39;//视频地址
            };
            var player=new ckplayer();//初始化播放器
            player.into(videoObject);
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>首先，rtsp不能使用于网页环境（包含PC端和移动端）。</li></ul><ul><li><strong>那么直播只能选择rtmp或http</strong></li></ul><ol><li>rtmp协议只支持flashplayer，也就是只能在PC端（或安卓环境中安装了flashplayer组件，这种环境比较少）安装了flashplayer的情况下使用。</li><li>按现在的趋势，flashplayer是要逐渐被淘汰掉的。当然，在中国还会存在相对长时间。</li><li>http协议的直播分两种格式，m3u8和flv。flv是一种即将被淘汰的直播格式。用来做直播已显的力不从心了。</li><li>所以综合考虑，m3u8相对的比较好点，优点是支持移动端，并且支持PC端上安装了flashplayer的环境。</li><li>缺点就如同rtmp一样。flashplayer并不是未来的发展趋势。</li><li>另外一个缺点就是m3u8是有延迟的。并不能实时，实时传输方面不如rtmp协议。 <ol><li>因为m3u8的直播原理是将直播源不停的压缩成指定时长的ts文件（比如9秒，10秒一个ts文件）并同时实时更新m3u8文件里的列表以达到直播的效果。</li><li>这样就会有一个至少9,10秒的时间延迟。如果压缩的过小，可能导致客户端网络原因致视频变卡。</li></ol></li></ol>`,4),p=[l];function o(c,r){return s(),n("div",null,p)}const u=a(e,[["render",o],["__file","index.html.vue"]]);export{u as default};
