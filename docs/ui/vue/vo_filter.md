---
autoGroup-1: Vue_dev
title: 过滤器
---


## Vue Filter
## vue进阶 过滤器
```html
 <!-- 过滤器用法：值 | 过滤器 -->
 <td>{{item.sex | handlerSex}}</td>
 <td>{{item.comment | handlerComment}}</td>
       
<script>
  var vue = new Vue({
    el: '#app',
    data: {     },
    methods: {    },
    filters: {
      // 过滤器的参数就是调用方，谁调用过滤器，参数就是谁
      handlerSex(sex) {
        if (sex === '1') 
          // 过滤器直接return，就作为过滤后的值
          return '男'
      },
      handlerComment(comment) {
        return comment.replace(/帅/g,  '最帅')
      }
    }
  })
</script>   
```
#### element UI table 属性编辑
```html
 <el-table-column prop="sex" label="性别">
      <template slot-scope="scope">{{ scope.row.sex | handlerSex }}</template>
    </el-table-column>

    <el-table-column prop="createBy" label="创建者"></el-table-column>
    
    <el-table-column prop="createTime" label="创建时间" width="180">
            <template slot-scope="scope">{{ scope.row.createTime | formatDate }}</template>
    </el-table-column>
    
    <script>
    filters: {
    handlerSex(sex) {
      if (sex === "1")
        // 过滤器直接return，就作为过滤后的值
        return "男";
      else return "女";
    },
    formatDate(dataStr) {
				var dt = new Date(dataStr);
				// yyyy-mm-dd
				var y = dt.getFullYear();
				var m = dt.getMonth() + 1;
				var d = dt.getDate();
				var hh = dt.getHours();
				var mm = dt.getMinutes();
				var ss = dt.getSeconds();

                return y + "年" + m + "月" + d +'号'
                /*  " + hh + ":" + mm + ":" + ss */
			}
  }
    
    </script>    


```
