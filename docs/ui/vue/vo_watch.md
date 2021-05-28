---
autoGroup-1: Vue_dev
title: watch&computed
---

## watch&computed
###  init
```html
  <div id="app">
    <!-- 
      分析：如果使firstName和lastName被修改时，同步修改fullName？
     -->
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="text" v-model="fullName">

  </div>
```
### 01  监听器watch
```html
<script>
  var vue = new Vue({
    el: '#app',
    data: {
      firstName: '',
      lastName: '',
      fullName: ''
    },
    methods: {
      // 第一种方式：给前两个表单加上键盘抬起事件。当触发事件时，拼接两个name，为fullName赋值。
      handlerFullName() {
        this.fullName = this.firstName + this.lastName
      }
    },
    watch: { // 监听器，可以监听某个属性
        'firstName': function(newVal, oldVal) { // 格式：要监听的属性:function(newVal, oldVal)
          this.fullName = newVal + this.lastName
        },
        // 使用监听器，可以直接对属性进行监听，不需要去监听用户的操作。使开发者只关注Model，不关注View
        'lastName': function(newVal, oldVal) {
          this.fullName = this.firstName + newVal
        }
    }
  })

</script>
```
### 02 computed 计算属性 
按照method写 `this.name()`，按照data去用。`this.name`，
```html

  <script>
    var vue = new Vue({
      el: '#app',
      data: {
        firstName: '',
        lastName: '',
        fullName: ''
      },
      methods: {
        handlerSumName() {
          console.log(this.sumName)
        }
      },
      computed: {
        // 计算属性。在computed中，可以定义一些 属性 ，这些属性叫做计算属性、
		//计算属性的本质就是一个方法，但是，当我们使用的时候，是将其视为属性去用的。
        // 简单说就是一句话，按照method写，按照data去用。this.name，this.name()

        // 注意：计算属性调用的时候，一定不要加()，它就是个属性，用法和data一模一样。
        // 注意：只要计算属性中使用到的所有data中的属性发生了变化，就会立即去重新计算属性的值。
		
        // 注意：计算属性的结果会被缓存起来，方便下次直接调用，
		// 如果计算属性中用到的所有的data都没有发生变化，就不会对计算属性重新求值。
        sumName() {
          console.log('计算属性执行了')
          return this.firstName + this.lastName
        }
      }
    })

  </script>

```

* * *


##### computed 细分 get(). set() 
```html

  <script>
    var vue = new Vue({
      el: '#app',
      data: {
        num1: 0,
        num2: 0,
      },
      methods: {
      },
      computed: {
        // 计算属性的get和set方法
        sumNumber: {
          get() { // 用于获取计算属性值的时候调用get方法
            return parseInt(this.num1) * 0.8 + parseInt(this.num2) * 0.2
          },
          set(val) { // 当修改了计算属性值的时候调用set方法
            this.num1 = parseInt(val) * 0.8
            this.num2 = parseInt(val) * 0.2
          }
        }
      }
    })

  </script>


```
### 监听路由
```js
  var vue = new Vue({
      el: '#app',
      data: {
      },
      router: routerObj,
      watch: {
        '$route.fullPath': function(newVal, oldVal) {
          // 监听路由去执行对应的逻辑
          // 应用场景:监听路由的url是否为登录url.如果不是,校验用户是否登录,未登录的情况下跳转到登录页
          console.log('用户路由跳转，url为：',  newVal)
        }
      }
    })
```
### 编程路由导航
```js
  var vue = new Vue({
      el: '#app',
      data: {
      },
      methods: {
        toLogin() {
          // 编程式导航：通过代码去操作路由
          // this.$router.push('/login')
          // 编程式路由如何传递参数
          
          this.$router.push({
            path: '/login', 
            params: {id: '2121', name: '呵呵'}
          })
        }
      } 
```
* 通过 路由配置的`Name` 属性, 
`this.$router.push({ name: 'User', params: { id: 56 } })`
* 通过 **path** 路径的方式传递使用 `query`

* * *

**-----------------------------------------------------------------------** 

* * *

* 1 直接在路由中传参

`this.$router.push({ path: `/childPage/${id}`, })`

需要对应路由配置如下：

```
{
 path: '/childPage/:id',
 name: 'childPage',
 component: childPage
}
```
获取参数：`this.$route.parames.id`

 * 2) 通过路由属性中的name来确定匹配的路由，通过params来传递参数

　　` this.$router.push({ name: 'childPage', params: { id: id } })`

　　  需要对应路由配置如下：
```
　　　　{

      path: '/childPage',

      name: 'childPage',

      component: childPage

     }
```
* 3) 使用path来匹配路由，然后通过query来传递参数

　　`　　this.$router.push({ path: '/childPage', query: { id: id } })`

　　　　 需要对应路由配置如下：
```
　　　　　　 {

         path: '/childPage',

         name: 'childPage',

         component: childPage

       }
```
　　获取参数：`this.$route.query.id`

