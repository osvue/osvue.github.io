import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./crypto-js.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body,html</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">#app</span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #edeeed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.cms</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.ctxm</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>

     <span class="token property">table-layout</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span> <span class="token property">word-break</span><span class="token punctuation">:</span>break-all<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>

    <span class="token selector">#ipt</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cms<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chil<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        加密 ：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ipt<span class="token punctuation">&#39;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>adf<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>str<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>enc()<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>加密<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>dec()<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>解密<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctxm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;1234123412ABCDEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//十六位十六进制数作为密钥</span>
                <span class="token literal-property property">iv</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;ABCDEF1234123412&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">//十六位十六进制数作为密钥偏移量</span>
                <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">Decrypt</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> encryptedHexStr <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Hex<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> srcs <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Base64<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>encryptedHexStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> decrypt <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>srcs<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">iv</span><span class="token operator">:</span> vm<span class="token punctuation">.</span>iv<span class="token punctuation">,</span>
                    <span class="token literal-property property">mode</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">CBC</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">padding</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>Pkcs7
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> decryptedStr <span class="token operator">=</span> decrypt<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> decryptedStr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">Encrypt</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> srcs <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> encrypted <span class="token operator">=</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>srcs<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">iv</span><span class="token operator">:</span> vm<span class="token punctuation">.</span>iv<span class="token punctuation">,</span>
                    <span class="token literal-property property">mode</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>mode<span class="token punctuation">.</span><span class="token constant">CBC</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">padding</span><span class="token operator">:</span> CryptoJS<span class="token punctuation">.</span>pad<span class="token punctuation">.</span>Pkcs7
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> encrypted<span class="token punctuation">.</span>ciphertext<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">enc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">/*
                let a = new FormData();
                a.append(&#39;name&#39;,vm.str)
                a.append(&#39;size&#39;,10086)
*/</span>
                vm<span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">Encrypt</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>str<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">dec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>str<span class="token punctuation">)</span>
                vm<span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">Decrypt</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>str<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>



    <span class="token comment">/*
      //解密方法
      const key = CryptoJS.enc.Utf8.parse(&quot;1234123412ABCDEF&quot;);  //十六位十六进制数作为密钥
      const iv = CryptoJS.enc.Utf8.parse(&#39;ABCDEF1234123412&#39;);   //十六位十六进制数作为密钥偏移量
       function Decrypt(word) {
          let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
          let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
          let decrypt = CryptoJS.AES.decrypt(srcs, key, {
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
          });
          let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
          return decryptedStr.toString();
      }

      //加密方法
      function Encrypt(word) {
          let srcs = CryptoJS.enc.Utf8.parse(word);
          let encrypted = CryptoJS.AES.encrypt(srcs, key, {
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
          });
          return encrypted.ciphertext.toString().toUpperCase();
      }
      */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","js.html.vue"]]);export{i as default};
