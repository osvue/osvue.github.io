import{_ as p,p as e,q as r,a1 as o}from"./framework-d81ad7e5.js";const t={},n=o('<h2 id="_1-断句-阅读理解-审题" tabindex="-1"><a class="header-anchor" href="#_1-断句-阅读理解-审题" aria-hidden="true">#</a> 1.断句 阅读理解 审题</h2><p>1.1 将命题中的有效信息提取出来</p><p>1.2 将</p><p>​ <strong>查询条件</strong></p><p>​ <strong>查询内容</strong></p><p>​ <strong>分组条件</strong></p><p>​ <strong>（having 过滤条件）</strong></p><p>​ <strong>排序条件</strong></p><p>​ <strong>分别获取出来</strong></p><p>1.3 找到他们对应的表和对应的字段</p><h2 id="_2-拼接sql语句-按照sql格式进行拼接" tabindex="-1"><a class="header-anchor" href="#_2-拼接sql语句-按照sql格式进行拼接" aria-hidden="true">#</a> 2.拼接sql语句 按照sql格式进行拼接</h2><p>2.1 select 后</p><p>​ 拼接返回的查询内容 比如 员工姓名 和 部门名称 count(id) 对应2.5</p><p>​ 到from 前</p><p>2.2 拼接 from 后</p><p>​ 对应的表名 和 关联关系 （首先 要看返回的字段 以及 查询条件 是否在一张表中 然后 如果不在一张表中 需要多表联查</p><p>​ 用left join （inner join）连接 最后用 on 关键字 拼接 多表的关联关系）</p><p>​ 比如 employee e left join part p on e.partid = p.id</p><p>​ 到 where条件前的内容</p><p>2.3 拼接 where 后</p><p>​ 查询条件 根据题目定义的查询条件要求来</p><p>​ 比如 e.age &gt;30</p><p>​ 到group by 前</p><p>2.4 拼接 group by 后</p><p>​ 分组字段 比如 sex 比如 age</p><p>​ 到order by 前</p><p>2.5 一般group by和聚合函数连用 此处应该放在2.1的位置处</p><p>2.6 拼接 order by后内容</p><p>​ 按字段进行排序 比如id /rownum等</p>',29),s=[n];function a(d,i){return e(),r("div",null,s)}const c=p(t,[["render",a],["__file","devsql.html.vue"]]);export{c as default};
