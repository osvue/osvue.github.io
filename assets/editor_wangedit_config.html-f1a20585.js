import{_ as o,M as p,p as c,q as r,R as n,t,N as a,a1 as s}from"./framework-d81ad7e5.js";const i={},l=n("h1",{id:"编辑器-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编辑器-api","aria-hidden":"true"},"#"),t(" 编辑器 API")],-1),d={id:"config-相关",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#config-相关","aria-hidden":"true"},"#",-1),u={href:"https://www.wangeditor.com/v5/API.html#config-%E7%9B%B8%E5%85%B3",target:"_blank",rel:"noopener noreferrer"},g={id:"getconfig",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#getconfig","aria-hidden":"true"},"#",-1),k={href:"https://www.wangeditor.com/v5/API.html#getconfig",target:"_blank",rel:"noopener noreferrer"},f=s(`<p>获取编辑器所有配置</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>editor<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,2),m={id:"getmenuconfig",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#getmenuconfig","aria-hidden":"true"},"#",-1),x={href:"https://www.wangeditor.com/v5/API.html#getmenuconfig",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.wangeditor.com/v5/menu-config.html",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>editor<span class="token punctuation">.</span><span class="token function">getMenuConfig</span><span class="token punctuation">(</span>menuKey<span class="token punctuation">)</span>
</code></pre></div>`,1),y={id:"getallmenukeys",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#getallmenukeys","aria-hidden":"true"},"#",-1),I={href:"https://www.wangeditor.com/v5/API.html#getallmenukeys",target:"_blank",rel:"noopener noreferrer"},P=s(`<p>获取编辑器所有 menu 的 key</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>editor<span class="token punctuation">.</span><span class="token function">getAllMenuKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,2),T={id:"alert",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#alert","aria-hidden":"true"},"#",-1),H={href:"https://www.wangeditor.com/v5/API.html#alert",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.wangeditor.com/v5/editor-config.html#customalert",target:"_blank",rel:"noopener noreferrer"},B=s(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>editor<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;错误信息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,1),L={id:"内容处理",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#内容处理","aria-hidden":"true"},"#",-1),N={href:"https://www.wangeditor.com/v5/API.html#%E5%86%85%E5%AE%B9%E5%A4%84%E7%90%86",target:"_blank",rel:"noopener noreferrer"},V={id:"handletab",tabindex:"-1"},K=n("a",{class:"header-anchor",href:"#handletab","aria-hidden":"true"},"#",-1),S={href:"https://www.wangeditor.com/v5/API.html#handletab",target:"_blank",rel:"noopener noreferrer"},j=s(`<p>控制编辑器按 tab 键时，输入什么。默认如下</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>editor<span class="token punctuation">.</span><span class="token function-variable function">handleTab</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token string">&#39;    &#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,2),q={id:"gethtml",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#gethtml","aria-hidden":"true"},"#",-1),z={href:"https://www.wangeditor.com/v5/API.html#gethtml",target:"_blank",rel:"noopener noreferrer"},D=s(`<p><code>editor.getHtml()</code> 获取<strong>非格式化</strong>的 html</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>head<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>hello <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>word<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),F={href:"https://www.npmjs.com/package/xml-formatter",target:"_blank",rel:"noopener noreferrer"},G={id:"gettext",tabindex:"-1"},J=n("a",{class:"header-anchor",href:"#gettext","aria-hidden":"true"},"#",-1),O={href:"https://www.wangeditor.com/v5/API.html#gettext",target:"_blank",rel:"noopener noreferrer"},Q=s(`<p>获取当前编辑器的纯文本内容</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> text <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,2),U={id:"sethtml",tabindex:"-1"},W=n("a",{class:"header-anchor",href:"#sethtml","aria-hidden":"true"},"#",-1),X={href:"https://www.wangeditor.com/v5/API.html#sethtml",target:"_blank",rel:"noopener noreferrer"},Y=s(`<p>重置编辑器的 HTML 内容。【注意】只能解析 <code>editor.getHtml()</code> 返回的 HTML 格式，不支持自定义 HTML 格式。</p><div class="language-rust" data-ext="rs"><pre class="language-rust"><code>editor<span class="token punctuation">.</span><span class="token function">setHtml</span><span class="token punctuation">(</span>&#39;<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>&#39;<span class="token punctuation">)</span>
</code></pre></div>`,2),Z={href:"https://www.wangeditor.com/v5/API.html#dangerouslyinserthtml",target:"_blank",rel:"noopener noreferrer"},$={id:"isempty",tabindex:"-1"},tt=n("a",{class:"header-anchor",href:"#isempty","aria-hidden":"true"},"#",-1),nt={href:"https://www.wangeditor.com/v5/API.html#isempty",target:"_blank",rel:"noopener noreferrer"},et=s(`<p>判断当前编辑器内容是否为空（只有一个空段落）</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>editor<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>该方法只能识别<strong>只有一个空段落</strong>情况，其他情况（如有一个空标题、空表格）请使用 <code>editor.getText()</code> 来判断。</p>`,3),at={id:"getselectiontext",tabindex:"-1"},st=n("a",{class:"header-anchor",href:"#getselectiontext","aria-hidden":"true"},"#",-1),ot={href:"https://www.wangeditor.com/v5/API.html#getselectiontext",target:"_blank",rel:"noopener noreferrer"},pt=s(`<p>获取选中的文本</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>editor<span class="token punctuation">.</span><span class="token function">getSelectionText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,2);function ct(rt,it){const e=p("ExternalLinkIcon");return c(),r("div",null,[l,n("h3",d,[h,t(),n("a",u,[t("#"),a(e)]),t("config 相关")]),n("h4",g,[_,t(),n("a",k,[t("#"),a(e)]),t("getConfig")]),f,n("h3",m,[w,t(),n("a",x,[t("#"),a(e)]),t("getMenuConfig")]),n("p",null,[t("获取单个 menu 的配置。menu 配置相关的可参考"),n("a",v,[t("这里"),a(e)]),t("。")]),b,n("h3",y,[A,t(),n("a",I,[t("#"),a(e)]),t("getAllMenuKeys")]),P,n("h3",T,[E,t(),n("a",H,[t("#"),a(e)]),t("alert")]),n("p",null,[t("编辑器 alert ，可通过 "),n("a",M,[t("customAlert"),a(e)]),t(" 配置。")]),B,n("h2",L,[C,t(),n("a",N,[t("#"),a(e)]),t("内容处理")]),n("h3",V,[K,t(),n("a",S,[t("#"),a(e)]),t("handleTab")]),j,n("h3",q,[R,t(),n("a",z,[t("#"),a(e)]),t("getHtml")]),D,n("p",null,[t("你可以自行格式化 html ，如使用 "),n("a",F,[t("xml-formatteropen in new window"),a(e)])]),n("h3",G,[J,t(),n("a",O,[t("#"),a(e)]),t("getText")]),Q,n("h3",U,[W,t(),n("a",X,[t("#"),a(e)]),t("setHtml")]),Y,n("p",null,[t("如果想插入一段 HTML ，请使用 "),n("a",Z,[t("dangerouslyInsertHtml"),a(e)])]),n("h3",$,[tt,t(),n("a",nt,[t("#"),a(e)]),t("isEmpty")]),et,n("h3",at,[st,t(),n("a",ot,[t("#"),a(e)]),t("getSelectionText")]),pt])}const dt=o(i,[["render",ct],["__file","editor_wangedit_config.html.vue"]]);export{dt as default};
