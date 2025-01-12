import{_ as a,p as s,q as n,a1 as e}from"./framework-d81ad7e5.js";const p={},t=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keytool <span class="token parameter variable">-genkey</span> <span class="token parameter variable">-alias</span> lusifer <span class="token parameter variable">-storetype</span> PKCS12 <span class="token parameter variable">-keyalg</span> RSA <span class="token parameter variable">-keysize</span> <span class="token number">2048</span> 
 <span class="token parameter variable">-dname</span> <span class="token string">&quot;CN=c,OU=b,O=a,L=d,ST=e,C=CN&quot;</span> 
 <span class="token parameter variable">-keystore</span> osvkeystore.p12 
 <span class="token parameter variable">-storepass</span> hadoop123456 <span class="token parameter variable">-validity</span> <span class="token number">365</span>	 

</code></pre></div><ul><li><p>其中属性含义如下：</p></li><li><p>-genkey 生成秘钥</p></li><li><p>-alias 别名</p></li><li><p>-keyalg 秘钥算法</p></li><li><p>-keysize 秘钥长度</p></li><li><p>-validity 有效期（天）</p></li><li><p>-keystore 生成秘钥库的存储路径和名称</p></li><li><p>-storepass 秘钥库口令</p></li></ul><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8001</span>
  <span class="token key atrule">ssl</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#   证书位置</span>
    <span class="token key atrule">key-store</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>osvkeystore.p12
<span class="token comment">#   证书别名</span>
    <span class="token key atrule">key-alias</span><span class="token punctuation">:</span> lusifer
<span class="token comment">#   证书类型</span>
    <span class="token key atrule">key-store-type</span><span class="token punctuation">:</span> PKCS12
<span class="token comment">#   证书密码</span>
    <span class="token key atrule">key-store-password</span><span class="token punctuation">:</span> hadoop123456
</code></pre></div>`,3),l=[t];function o(c,r){return s(),n("div",null,l)}const i=a(p,[["render",o],["__file","ssluse.html.vue"]]);export{i as default};
