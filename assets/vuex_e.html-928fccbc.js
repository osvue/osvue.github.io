import{_ as n,p as s,q as t,a1 as e}from"./framework-d81ad7e5.js";const o={},a=e(`<p>项目结构</p><p>Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：</p><ol><li>应用层级的状态应该集中到单个 store 对象中。</li><li>提交 <strong>mutation</strong> 是更改状态的唯一方法，并且这个过程是同步的。</li><li>异步逻辑都应该封装到 <strong>action</strong> 里面。</li></ol><p>只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。</p><p>对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>├── index.html
├── main.js
├── api
│   └── <span class="token punctuation">..</span>. <span class="token comment"># 抽取出API请求</span>
├── components
│   ├── App.vue
│   └── <span class="token punctuation">..</span>.
└── store
    ├── index.js          <span class="token comment"># 我们组装模块并导出 store 的地方</span>
    ├── actions.js        <span class="token comment"># 根级别的 action</span>
    ├── mutations.js      <span class="token comment"># 根级别的 mutation</span>
    └── modules
        ├── cart.js       <span class="token comment"># 购物车模块</span>
        └── products.js   <span class="token comment"># 产品模块</span>
</code></pre></div><h3 id="usestore" tabindex="-1"><a class="header-anchor" href="#usestore" aria-hidden="true">#</a> useStore</h3><ul><li><strong>在组件中可以直接使用过import {useStore} from &#39;vuex&#39; 或者使用import store from &#39;@/store&#39;</strong></li></ul>`,8),c=[a];function r(p,i){return s(),t("div",null,c)}const m=n(o,[["render",r],["__file","vuex_e.html.vue"]]);export{m as default};
