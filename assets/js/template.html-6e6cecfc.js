import{_ as t,o as a,c as s,a as e}from"./app-215c512d.js";const o={};function p(c,n){return a(),s("div",null,n[0]||(n[0]=[e(`<h2 id="参考模板" tabindex="-1"><a class="header-anchor" href="#参考模板" aria-hidden="true">#</a> 参考模板</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>
<span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> VIEWS</span>
<span class="token punctuation">---</span></span>


<span class="token comment">&lt;!-- 自动分组 --&gt;</span>
<span class="token hr punctuation">---</span>
autoGroup-1: JAVA API
<span class="token title important">title: IO
<span class="token punctuation">---</span></span>



::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

 <span class="token comment">&lt;!--图片  --&gt;</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">alert</span>](<span class="token url">img/url</span>)</span>

<span class="token comment">&lt;!-- 超链接 --&gt;</span>
<span class="token url">[<span class="token content">myBlog</span>](<span class="token url">https://osvue.github.io</span>)</span>
 

\\\`\`\`sql
CREATE VIEW product_customers AS
	SELECT
		cust_name,
		cust_contact,
		prod_id
	FROM customers c 
	JOIN orders o
		USING(cust_id)
	JOIN orderitems oi
		USING(order_num)
\\\`\`\`

 

</code></pre></div>`,2)]))}const r=t(o,[["render",p],["__file","template.html.vue"]]);export{r as default};
