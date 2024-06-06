import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li><strong>vue3封装弹窗组件，数据回显</strong></li></ul><ol><li>封装组件的流程，第一理解具体的业务需求。想好数据的交互层级，数据进数据出的具体逻辑。</li><li>vue的组件封装记住一点<strong>不要在子组件修改父组件的数据，需要修改数据emit方法抛出数据父组件修改</strong>。</li></ol><p>. 第一步构建template模板</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-modal</span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>800.0px<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@ok</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleOk<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCancel<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:maskClosable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span> {{ title }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ width: &#39;600px&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span>
        <span class="token attr-name">field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dictName<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ required: true, message: &#39;字典名称必填&#39; }]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:validate-trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;change&#39;, &#39;input&#39;]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>输入字典名称<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>字典名称<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.form.dictName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>输入字典名称<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span>
        <span class="token attr-name">field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dictType<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ required: true, message: &#39;字典类型必填&#39; }]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>字典类型<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.form.dictType<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>输入字典类型<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span>
        <span class="token attr-name">field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ required: true, message: &#39;请选择状态&#39; }]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>状态<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.form.status<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>正常<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-radio</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>停用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-radio</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-radio-group</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-textarea</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.form.remark<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入内容<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">allow-clear</span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>这就是弹窗组件的一个基本dom结构。这个模板上看的话我们需要父组件传给我们两个值， 一个是弹窗的状态，一个是form表单的值。</p><p>. 第二步定义参数属性</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Dict<span class="token punctuation">.</span>DictType<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">remark</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dictId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dictName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dictType</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>. 第三步就是子组件的赋值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> formRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormInstance<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>Dict<span class="token punctuation">.</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">remark</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dictId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dictName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dictType</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> visible<span class="token punctuation">,</span> formData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> formData<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>form <span class="token operator">=</span> value <span class="token keyword">as</span> unknown <span class="token keyword">as</span> Dict<span class="token punctuation">.</span>DictType<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>接受父组件的formData需要使用toRefs结构不然传过来的值会丢失响应式。</p><p>最后把我们验证之后的formData值传递给父组件去调用接口就完成了，在这之前需要声明emit</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;handleClose&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;handleSubmitData&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">handleCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;handleClose&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    formRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">clearValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleOk</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    formRef<span class="token operator">?.</span>value<span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">r</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">Record</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// eslint-disable-next-line no-void</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">==</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;handleSubmitData&#39;</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;handleClose&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><ul><li>通过emit的方法把子组件的数据传到父组件。</li></ul><h3 id="antv-g6" tabindex="-1"><a class="header-anchor" href="#antv-g6" aria-hidden="true">#</a> antv G6</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Tutorial Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* 提示框的样式 */</span>
    <span class="token selector">.g6-tooltip</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e2e2e2<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #545454<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px 8px<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>174<span class="token punctuation">,</span> 174<span class="token punctuation">,</span> 174<span class="token punctuation">)</span> 0px 0px 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引入 G6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.7.1/dist/g6.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 4.x and later versions --&gt;</span>
    <span class="token comment">&lt;!-- &lt;script src=&quot;https://gw.alipayobjects.com/os/lib/antv/g6/4.3.11/dist/g6.min.js&quot;&gt;&lt;/script&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/jquery@3.7.1/dist/jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mountNode<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">getNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>getNodes节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

        <span class="token constant">G6</span><span class="token punctuation">.</span><span class="token function">registerNode</span><span class="token punctuation">(</span><span class="token string">&#39;diamond&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">draw</span><span class="token punctuation">(</span><span class="token parameter">cfg<span class="token punctuation">,</span> group</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果 cfg 中定义了 style 需要同这里的属性进行融合</span>
                <span class="token keyword">const</span> keyShape <span class="token operator">=</span> group<span class="token punctuation">.</span><span class="token function">addShape</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 根据配置获取路径</span>
                        <span class="token literal-property property">stroke</span><span class="token operator">:</span> cfg<span class="token punctuation">.</span>color<span class="token punctuation">,</span> <span class="token comment">// 颜色应用到描边上，如果应用到填充，则使用 fill: cfg.color</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">// must be assigned in G6 3.3 and later versions. it can be any value you want</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;path-shape&#39;</span><span class="token punctuation">,</span>
                    <span class="token comment">// 设置 draggable 以允许响应鼠标的图拽事件</span>
                    <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cfg<span class="token punctuation">.</span>label<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果有文本</span>
                    <span class="token comment">// 如果需要复杂的文本配置项，可以通过 labeCfg 传入</span>
                    <span class="token comment">// const style = (cfg.labelCfg &amp;&amp; cfg.labelCfg.style) || {};</span>
                    <span class="token comment">// style.text = cfg.label;</span>
                    <span class="token keyword">const</span> label <span class="token operator">=</span> group<span class="token punctuation">.</span><span class="token function">addShape</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token comment">// attrs: style</span>
                        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 居中</span>
                            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">text</span><span class="token operator">:</span> cfg<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
                            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#666&#39;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token comment">// must be assigned in G6 3.3 and later versions. it can be any value you want</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;text-shape&#39;</span><span class="token punctuation">,</span>
                        <span class="token comment">// 设置 draggable 以允许响应鼠标的图拽事件</span>
                        <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> keyShape<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 返回菱形的路径</span>
            <span class="token function">getPath</span><span class="token punctuation">(</span><span class="token parameter">cfg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> size <span class="token operator">=</span> cfg<span class="token punctuation">.</span>size <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 如果没有 size 时的默认大小</span>
                <span class="token keyword">const</span> width <span class="token operator">=</span> size<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> height <span class="token operator">=</span> size<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//  / 1 \\</span>
                <span class="token comment">// 4     2</span>
                <span class="token comment">//  \\ 3 /</span>
                <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token operator">-</span> height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 上部顶点</span>
                    <span class="token punctuation">[</span><span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span> width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 右侧顶点</span>
                    <span class="token punctuation">[</span><span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 下部顶点</span>
                    <span class="token punctuation">[</span><span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 左侧顶点</span>
                    <span class="token punctuation">[</span><span class="token string">&#39;Z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 封闭</span>
                <span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> path<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">cfg<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">debugger</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cfg<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> group <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">getContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取容器</span>
                <span class="token keyword">const</span> shape <span class="token operator">=</span> group<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;children&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 按照添加的顺序</span>
                <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">stroke</span><span class="token operator">:</span> cfg<span class="token punctuation">.</span>color<span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
                shape<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新属性</span>
                <span class="token comment">// 更新文本的逻辑类似，但是需要考虑 cfg.label 是否存在的问题</span>
                <span class="token comment">// 通过 label.attr() 更新文本属性即可</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token constant">G6</span><span class="token punctuation">.</span><span class="token function">registerNode</span><span class="token punctuation">(</span><span class="token string">&#39;inner-animate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">afterDraw</span><span class="token punctuation">(</span><span class="token parameter">cfg<span class="token punctuation">,</span> group</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">debugger</span>
                <span class="token keyword">const</span> size <span class="token operator">=</span> cfg<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
                <span class="token keyword">const</span> width <span class="token operator">=</span> size<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">14</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> height <span class="token operator">=</span> size<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">14</span><span class="token punctuation">;</span>
                <span class="token comment">// 添加图片</span>
                <span class="token keyword">const</span> image <span class="token operator">=</span> group<span class="token punctuation">.</span><span class="token function">addShape</span><span class="token punctuation">(</span><span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token operator">-</span> width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span> height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> height<span class="token punctuation">,</span>
                        <span class="token literal-property property">img</span><span class="token operator">:</span> cfg<span class="token punctuation">.</span>img
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">// must be assigned in G6 3.3 and later versions. it can be any value you want</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;image-shape&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&#39;rect&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 实例化 grid 插件</span>
        <span class="token keyword">const</span> grid <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G6<span class="token punctuation">.</span>Grid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G6<span class="token punctuation">.</span>Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;mountNode&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定挂载容器</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1300</span><span class="token punctuation">,</span> <span class="token comment">// 图的宽度</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 图的高度</span>
            <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token string">&#39;svg&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">defaultNode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">defaultEdge</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">autoRotate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#000000&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">nodeStateStyles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// 各状态下的样式，平铺的配置项仅在 keyShape 上生效。需要在其他 shape 样式上响应状态变化则写法不同，参见上文提到的 配置状态样式 链接</span>
                <span class="token literal-property property">hover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">fillOpacity</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>grid<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将 grid 实例配置到图上</span>
            <span class="token comment">// fitView: true,</span>
            <span class="token comment">// fitViewPadding: [20, 40, 50, 20],</span>
            <span class="token literal-property property">modes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;drag-canvas&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;zoom-canvas&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;drag-node&#39;</span>
                    <span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tooltip&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 提示框</span>
                        <span class="token function">formatText</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token comment">// 提示框文本内容</span>
                            <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&#39;label: &#39;</span> <span class="token operator">+</span> model<span class="token punctuation">.</span>label <span class="token operator">+</span> <span class="token string">&#39;&lt;br/&gt; class: &#39;</span> <span class="token operator">+</span> model<span class="token punctuation">.</span>class<span class="token punctuation">;</span>
                            <span class="token keyword">return</span> text<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 允许拖拽画布、放缩画布、拖拽节点</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;dagre&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// 布局的方向。T：top（上）；B：bottom（下）；L：left（左）；R：right（右）。</span>
                <span class="token literal-property property">rankdir</span><span class="token operator">:</span> <span class="token string">&#39;TB&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可选，默认为图的中心</span>
                <span class="token comment">// align: &#39;DL&#39;, // 可选</span>
                <span class="token literal-property property">nodesep</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// 可选</span>
                <span class="token literal-property property">ranksep</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 可选</span>
                <span class="token literal-property property">controlPoints</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可选</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">// layout: {</span>
            <span class="token comment">//     // Object，可选，布局的方法及其配置项，默认为 random 布局。</span>
            <span class="token comment">//     type: &#39;force&#39;, // 指定为力导向布局</span>
            <span class="token comment">//     preventOverlap: true, // 防止节点重叠</span>
            <span class="token comment">//     // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。</span>
            <span class="token comment">//     linkDistance: 300, // 指定边距离为100</span>
            <span class="token comment">// },</span>


        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> <span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
                <span class="token string">&#39;https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> remoteData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">nodes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;lusifer&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                        <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;self_class&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;rectvvva&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;rect&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token comment">// 仅在 keyShape 上生效</span>
                            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;lightblue&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">linkPoints</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token comment">// ... 四个圆的样式可以在这里指定</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token comment">// labelCfg: {...} // 标签的样式可以在这里指定</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            remoteData<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// element.type = &#39;cubic-vertical&#39;;</span>
                element<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;polyline&#39;</span><span class="token punctuation">;</span>
                element<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">endArrow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">startArrow</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> datav <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">nodes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;node1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;diamond&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 最简单的</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;node2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;diamond&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 添加宽高</span>

                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;node3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;inner-animate&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./assets/img/info_1.png</span><span class="token template-punctuation string">\`</span></span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 添加颜色</span>

                    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;node4&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;菱形&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;diamond&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 附加文本</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            graph<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>remoteData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加载远程数据</span>
            graph<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 渲染</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>





        <span class="token comment">// 监听鼠标进入节点事件</span>
        graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> node <span class="token operator">=</span> evt<span class="token punctuation">.</span>item<span class="token punctuation">;</span>
            <span class="token comment">// 激活该节点的 hover 状态</span>
            graph<span class="token punctuation">.</span><span class="token function">setItemState</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token string">&#39;hover&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 监听鼠标离开节点事件</span>
        graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:mouseleave&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> node <span class="token operator">=</span> evt<span class="token punctuation">.</span>item<span class="token punctuation">;</span>
            <span class="token comment">// 关闭该节点的 hover 状态</span>
            graph<span class="token punctuation">.</span><span class="token function">setItemState</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token string">&#39;hover&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 获取所有节点
 */</span>
        <span class="token keyword">function</span> <span class="token function">getNodes</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> ns<span class="token operator">=</span>    graph<span class="token punctuation">.</span><span class="token function">getNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">debugger</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token punctuation">}</span>
        <span class="token comment">// graph.update(item, cfg)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
