import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="md5-message-digest-algorithm-加密算法" tabindex="-1"><a class="header-anchor" href="#md5-message-digest-algorithm-加密算法" aria-hidden="true">#</a> MD5(Message Digest Algorithm)加密算法</h2><p><code>是一种单向加密算法，只能加密不能解密</code></p><h2 id="base64进行加密-解密" tabindex="-1"><a class="header-anchor" href="#base64进行加密-解密" aria-hidden="true">#</a> BASE64进行加密/解密</h2><p><code>通常用作对二进制数据进行加密</code></p><h2 id="des-data-encryption-standard-对称加密-解密" tabindex="-1"><a class="header-anchor" href="#des-data-encryption-standard-对称加密-解密" aria-hidden="true">#</a> DES(Data Encryption Standard)对称加密/解密</h2><p><code>数据加密标准算法,和BASE64最明显的区别就是有一个工作密钥，该密钥既用于加密、也用于解密，并且要求密钥是一个长度至少大于8位的字符串</code></p><h2 id="rsa非对称加密-解密" tabindex="-1"><a class="header-anchor" href="#rsa非对称加密-解密" aria-hidden="true">#</a> RSA非对称加密/解密</h2><p><code>非对称加密算法的典型代表，既能加密、又能解密。和对称加密算法比如DES的明显区别在于用于加密、解密的密钥是不同的。使用RSA算法，只要密钥足够长(一般要求1024bit)，加密的信息是不能被破解的。</code></p><h2 id="sha-secure-hash-algorithm-安全散列算法" tabindex="-1"><a class="header-anchor" href="#sha-secure-hash-algorithm-安全散列算法" aria-hidden="true">#</a> SHA(Secure Hash Algorithm，安全散列算法)</h2><p><code>数字签名等密码学应用中重要的工具，被广泛地应用于电子商务等信息安全领域</code></p><h2 id="hmac-hash-message-authentication-code-散列消息鉴别码" tabindex="-1"><a class="header-anchor" href="#hmac-hash-message-authentication-code-散列消息鉴别码" aria-hidden="true">#</a> HMAC(Hash Message Authentication Code，散列消息鉴别码)</h2><p><code>散列消息鉴别码，基于密钥的Hash算法的认证协议。消息鉴别码实现鉴别的原理是，用公开函数和密钥产生一个固定长度的值作为认证标识，用这个标识鉴别消息的完整性。使用一个密钥生成一个固定大小的小数据块，即MAC，并将其加入到消息中，然后传输。接收方利用与发送方共享的密钥进行鉴别认证</code></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">Cipher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">Mac</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">SecretKey</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">SecretKeyFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>spec<span class="token punctuation">.</span></span><span class="token class-name">DESKeySpec</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>spec<span class="token punctuation">.</span></span><span class="token class-name">SecretKeySpec</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigInteger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Base64</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> hzqq
 * 加密解密
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnDecoderUtil</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ALGORITHM_MD5</span> <span class="token operator">=</span> <span class="token string">&quot;md5&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ALGORITHM_DES</span> <span class="token operator">=</span> <span class="token string">&quot;des&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ALGORITHM_RSA</span> <span class="token operator">=</span> <span class="token string">&quot;rsa&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ALGORITHM_MD5_RSA</span> <span class="token operator">=</span> <span class="token string">&quot;MD5withRSA&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ALGORITHM_SHA</span> <span class="token operator">=</span> <span class="token string">&quot;sha&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">ALGORITHM_MAC</span> <span class="token operator">=</span> <span class="token string">&quot;HmacMD5&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SecureRandom</span> secureRandom<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">KeyPair</span> keyPair<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        secureRandom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecureRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//创建密钥对KeyPair</span>
            <span class="token class-name">KeyPairGenerator</span> keyPairGenerator <span class="token operator">=</span> <span class="token class-name">KeyPairGenerator</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token constant">ALGORITHM_RSA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//密钥长度推荐为1024位</span>
            keyPairGenerator<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            keyPair <span class="token operator">=</span> keyPairGenerator<span class="token punctuation">.</span><span class="token function">generateKeyPair</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchAlgorithmException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * MD5简单加密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 加密内容
     * <span class="token keyword">@return</span> String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">md5Encrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">MessageDigest</span> md5 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            md5 <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token constant">ALGORITHM_MD5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchAlgorithmException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">//        md5.update(text.getBytes());</span>
        <span class="token comment">//digest()最后返回md5 hash值，返回值为8位字符串。因为md5 hash值是16位的hex值，实际上就是8位的字符</span>
        <span class="token comment">//BigInteger函数则将8位的字符串转换成16位hex值，用字符串来表示；得到字符串形式的hash值</span>
        <span class="token class-name">BigInteger</span> digest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span><span class="token punctuation">(</span>md5<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//32位</span>
        <span class="token keyword">return</span> digest<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * base64加密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 待加密内容
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">base64Encrypt</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span><span class="token keyword">boolean</span> flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token function">base64Encrypt</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * base64加密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 待加密内容
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">base64Encrypt</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * base64解密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">encoderContent</span> 已加密内容
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">base64Decrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encoderContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>encoderContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据key生成秘钥
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 给定key,要求key至少长度为8个字符
     * <span class="token keyword">@return</span> SecretKey
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SecretKey</span> <span class="token function">getSecretKey</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">DESKeySpec</span> desKeySpec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DESKeySpec</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">SecretKeyFactory</span> instance <span class="token operator">=</span> <span class="token class-name">SecretKeyFactory</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token constant">ALGORITHM_DES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">SecretKey</span> secretKey <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">generateSecret</span><span class="token punctuation">(</span>desKeySpec<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> secretKey<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * DES加密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>     秘钥key
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 待加密内容
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">DESEncrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">processCipher</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getSecretKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token constant">ENCRYPT_MODE</span><span class="token punctuation">,</span> <span class="token constant">ALGORITHM_DES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * DES解密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>            秘钥key
     * <span class="token keyword">@param</span> <span class="token parameter">encoderContent</span> 已加密内容
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">DESDecrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encoderContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">processCipher</span><span class="token punctuation">(</span>encoderContent<span class="token punctuation">,</span> <span class="token function">getSecretKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token constant">DECRYPT_MODE</span><span class="token punctuation">,</span> <span class="token constant">ALGORITHM_DES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 加密/解密处理
     *
     * <span class="token keyword">@param</span> <span class="token parameter">processData</span> 待处理的数据
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>         提供的密钥
     * <span class="token keyword">@param</span> <span class="token parameter">opsMode</span>     工作模式
     * <span class="token keyword">@param</span> <span class="token parameter">algorithm</span>   使用的算法
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">processCipher</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> processData<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Key</span> key<span class="token punctuation">,</span>
                                        <span class="token keyword">final</span> <span class="token keyword">int</span> opsMode<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> algorithm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Cipher</span> cipher <span class="token operator">=</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>algorithm<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//初始化</span>
            cipher<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>opsMode<span class="token punctuation">,</span> key<span class="token punctuation">,</span> secureRandom<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> cipher<span class="token punctuation">.</span><span class="token function">doFinal</span><span class="token punctuation">(</span>processData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取私钥，用于RSA非对称加密.
     *
     * <span class="token keyword">@return</span> PrivateKey
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PrivateKey</span> <span class="token function">getPrivateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> keyPair<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取公钥，用于RSA非对称加密.
     *
     * <span class="token keyword">@return</span> PublicKey
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PublicKey</span> <span class="token function">getPublicKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> keyPair<span class="token punctuation">.</span><span class="token function">getPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取数字签名，用于RSA非对称加密.
     *
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encoderContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Signature</span> signature <span class="token operator">=</span> <span class="token class-name">Signature</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token constant">ALGORITHM_MD5_RSA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            signature<span class="token punctuation">.</span><span class="token function">initSign</span><span class="token punctuation">(</span>keyPair<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            signature<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>encoderContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> signature<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 验证数字签名，用于RSA非对称加密.
     *
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">verifySignature</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encoderContent<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> signContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Signature</span> signature <span class="token operator">=</span> <span class="token class-name">Signature</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token constant">ALGORITHM_MD5_RSA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            signature<span class="token punctuation">.</span><span class="token function">initVerify</span><span class="token punctuation">(</span>keyPair<span class="token punctuation">.</span><span class="token function">getPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            signature<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>encoderContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> signature<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>signContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">FALSE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * RSA加密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 待加密内容
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">RSAEncrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">processCipher</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> keyPair<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token constant">ENCRYPT_MODE</span><span class="token punctuation">,</span> <span class="token constant">ALGORITHM_RSA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * RSA解密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">encoderContent</span> 已加密内容
     * <span class="token keyword">@return</span> byte[]
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">RSADecrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encoderContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">processCipher</span><span class="token punctuation">(</span>encoderContent<span class="token punctuation">,</span> keyPair<span class="token punctuation">.</span><span class="token function">getPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token constant">DECRYPT_MODE</span><span class="token punctuation">,</span> <span class="token constant">ALGORITHM_RSA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * SHA加密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 待加密内容
     * <span class="token keyword">@return</span> String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token class-name">SHAEncrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">MessageDigest</span> sha <span class="token operator">=</span> <span class="token class-name">MessageDigest</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token constant">ALGORITHM_SHA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sha_byte <span class="token operator">=</span> sha<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">StringBuffer</span> hexValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">byte</span> b <span class="token operator">:</span> sha_byte<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//将其中的每个字节转成十六进制字符串：byte类型的数据最高位是符号位，通过和0xff进行与操作，转换为int类型的正整数。</span>
                <span class="token class-name">String</span> toHexString <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                hexValue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>toHexString<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> toHexString <span class="token operator">:</span> toHexString<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> hexValue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//            StringBuffer hexValue2 = new StringBuffer();</span>
<span class="token comment">//            for (int i = 0; i &lt; sha_byte.length; i++) {</span>
<span class="token comment">//                int val = ((int) sha_byte[i]) &amp; 0xff;</span>
<span class="token comment">//                if (val &lt; 16) {</span>
<span class="token comment">//                    hexValue2.append(&quot;0&quot;);</span>
<span class="token comment">//                }</span>
<span class="token comment">//                hexValue2.append(Integer.toHexString(val));</span>
<span class="token comment">//            }</span>
<span class="token comment">//            return hexValue2.toString();</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * HMAC加密
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>     给定秘钥key
     * <span class="token keyword">@param</span> <span class="token parameter">content</span> 待加密内容
     * <span class="token keyword">@return</span> String
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">HMACEncrypt</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">SecretKey</span> secretKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecretKeySpec</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">ALGORITHM_MAC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Mac</span> mac <span class="token operator">=</span> <span class="token class-name">Mac</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>secretKey<span class="token punctuation">.</span><span class="token function">getAlgorithm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//初始化mac</span>
            mac<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>secretKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> mac<span class="token punctuation">.</span><span class="token function">doFinal</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre></div><h2 id="cbc" tabindex="-1"><a class="header-anchor" href="#cbc" aria-hidden="true">#</a> CBC</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
	<span class="token doc-comment comment">/**
	 * 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
            <span class="token code-section"><span class="token line"><span class="token code language-java">wearebest 获取真实数据    </span></span>
            <span class="token line"><span class="token code language-java">youaregood 做完整性校验</span></span>
            <span class="token line"><span class="token code language-java">hh1qazzqqqq  获取<span class="token constant">SM4</span> key <span class="token constant">IV</span></span></span>
            <span class="token line"><span class="token code language-java"><span class="token number">1</span>qazsw2 获取 <span class="token constant">SM4</span> 密文 <span class="token constant">SM2</span> 密文</span></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
	 * <span class="token keyword">@title</span> getDecryptStrForResponseCBC
	 * <span class="token keyword">@author</span> hzq
	 * <span class="token keyword">@description</span> (do something)
	 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">content</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">request</span>
	 * <span class="token keyword">@return</span>
	 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">UnsupportedEncodingException</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getDecryptStrForResponseCBC</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> content<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span>
			<span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span> <span class="token punctuation">{</span>

		<span class="token class-name">SM3Util</span> sm3Util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM3Util</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">SM4Extend</span> sm4Util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM4Extend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">SM2Util</span> sm2Util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM2Util</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">SecurityKey</span> secu <span class="token operator">=</span> <span class="token class-name">SpringContext</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">SecurityKey</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		sm2 pub key</span>
		<span class="token class-name">String</span> pubKey <span class="token operator">=</span> secu<span class="token punctuation">.</span><span class="token function">getSmRespPuba</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>secu<span class="token punctuation">.</span><span class="token function">getSmRespPubb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		sm3 时间戳</span>
		<span class="token class-name">String</span> timestamp <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> 
		str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">String</span> ciphertext <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> key <span class="token operator">=</span> sm4Util<span class="token punctuation">.</span><span class="token function">generateKeyOrIV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> iv <span class="token operator">=</span> sm4Util<span class="token punctuation">.</span><span class="token function">generateKeyOrIV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">String</span> encryptBySM3 <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">sm3Util<span class="token punctuation">.</span></span>SM3Digest</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&quot;wearebest&quot;</span> <span class="token operator">+</span> timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ciphertext <span class="token operator">=</span> sm4Util<span class="token punctuation">.</span><span class="token function">encryptBySM4CBC</span><span class="token punctuation">(</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&quot;wearebest&quot;</span> <span class="token operator">+</span> timestamp <span class="token operator">+</span> <span class="token string">&quot;youaregood&quot;</span> <span class="token operator">+</span> encryptBySM3<span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> iv<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> encryptBySM2 <span class="token operator">=</span> sm2Util<span class="token punctuation">.</span><span class="token function">encryptBySM2</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;hh1qazzqqqq&quot;</span> <span class="token operator">+</span> iv<span class="token punctuation">,</span> pubKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
		ciphertext <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;{\\&quot;hasencrypted\\&quot;:\\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>ciphertext <span class="token operator">+</span> <span class="token string">&quot;1qazsw2&quot;</span> <span class="token operator">+</span> encryptBySM2<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> ciphertext<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div>`,15),e=[o];function c(l,k){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","java_enc.html.vue"]]);export{i as default};
