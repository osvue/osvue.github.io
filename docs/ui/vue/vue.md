# VUE INIT
## vue
**001 - 简单demo**

```js
  //2.我们导入了vue的包之后，在浏览器的内存中，我们就多了一个Vue的构造函数。
  var vue = new Vue({
    el: '#app', // 表示我们new的这个vue实例，控制页面上的哪个区域
    data: { // data是MVVM中的m，专门存放每个页面的数据。
      msg: 'hello vue',
      name: '稽哥'
    }
  })
```

**002 - 语法,函数**
```js
// v-text,  v-html， v-clock 指令
// v-bind v-on @click   
//v-model   双向数据绑定
// v-for  遍历
```
**003  -----    v-for code**
```html

  <div id="app">
    <!-- v-for是vue中的遍历（循环）指令。(item index) in data，item是遍历的每一项名称，index是每一项的索引值 -->
    <!-- <p v-for="(item, index) in simpleList">索引值：{{index}}---数据：{{item}}</p> -->
    <!-- <p v-for="(obj, i) in objectList">索引值：{{i}}--id：{{obj.id}}--name：{{obj.name}}</p> -->
    <!-- <p v-for="(count, index) in 10">这是第{{count}}次循环，索引为{{index}}</p> -->

    <div>
      <input type="text" v-model="id">
      <input type="text" v-model="name">
      <button @click="add">添加</button>
    </div>

    <!-- key是在v-for中表示唯一标识，在任何的v-for中建议都加上key。key一定要保证唯一性 -->
    <p v-for="item in objectList" :key="item.id">
      <input type="checkbox" name="" id=""> {{item.id}} --- {{item.name}}
    </p>
  </div>

  <script>

    var vue = new Vue({
      el: '#app',
      data: {
        simpleList: [1, 2, 3, 4, 5, 6],
        objectList: [
          { id: 1, name: '张三' },
          { id: 2, name: '李四' },
          { id: 3, name: '王五' },
          { id: 4, name: '赵六' }
        ],
        id: '',
        name: '',
      },
      methods: {
        add() {
          const obj = {id: this.id, name: this.name}
          this.objectList.unshift(obj)
        }
      }
    })
</script>
```
**004  ------v-show v-if**
```html
 <div id="app">
    <!-- 
      结论：v-show和v-if都可以去动态的控制元素显示与隐藏
      v-if：每次都会重新删除或者创建元素
      v-show：每次不会进行DOM的删除和创建，但是会给元素加上display:none样式
      v-if有较高的切换性能消耗
      v-show有较高的渲染性能消耗

      如果涉及到元素的频繁切换，最好不要使用v-if
      如果元素可能永远也不会显示出来给用户看到，最好用v-if

     -->
    <div v-show="content1">我是内容1</div>
    <button @click="handlerContent1">控制内容1</button>
    <div v-if="content2">我是内容2</div>
    <button @click="handlerContent2">控制内容2</button>
  </div>
```
**总结;  使用ES6语法**
```js
 deleteById(id) {
        // es6语法新增了强大的数组操作函数
        let index = this.userList.findIndex(item => {
          if(item.id === id) {
            return true
          }
        })
        this.userList.splice(index, 1)
      }
```
