# Vue Router

## 路由
```html
  <div id="app">
    <!-- router-link控制组件的切换。router-link默认会被渲染成a标签 -->
    <!-- 如果不想被渲染成a标签，可以使用tag属性，指定router-link被渲染成哪种标签 -->
    <router-link to="/login" tag="button">登录</router-link>
    <router-link to="/register">注册</router-link>

    <transition name="component" mode="out-in">
      <!-- 这是个坑，专门作为一个占位符。当路由进行切换的时候，在路由中匹配到对应的组件，就会展示在这个坑里  -->
      <router-view></router-view>
    </transition>

  </div>

  <script>
    var login = {
      template: '<p>我是登录组件</p>'
    }
    var register = {
      template: '<p>我是注册组件</p>'
    }

    // 当引入了vue-router之后，在window全局对象中，就有了一个VueRouter构造函数
    let routerObj = new VueRouter({
      routes: [ // routes中定义了路由的规则
        {path: '/', redirect: '/login'}, // redirect就是重定向，访问path时，会被重定向到redirect指定的路由。这里是指路由的重定向，而非请求重定向，和后端的redirect是两码事
        {path: '/login', component: login}, // 对象中有两个属性：path：表示路由的url，component：表示路由跳转到的组件
        {path: '/register', component: register}
      ]
    })

    var vue = new Vue({
      el: '#app',
      data: {
      },
      router: routerObj
    })
  </script>
```






## 番外篇 MyRoute
**src/route/index.js**
```js
import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter)
import Head from "../components/Head"
import NewsHeader from "../components/news/NewsHeader";
import Content from "../components/news/Content";
export default new VueRouter({
  routes:  [
    {path: '/home', component: Head},
    {path: '/news', component: NewsHeader},
    {path: '/content/:srcs', component: Content},
    {path: '*', redirect: '/home'} /*默认跳转路由*/]
})
```
## 路由传递参数
```html
<body>
  <!-- 
    以往的非前后端分离项目，如果需要根据id获取某条数据，在另一个页面去展示？
      页面A点击，传递id给后端，后端查出，转发到页面B，页面B展示。
    前后端分离项目？
      页面A点击，传递id给页面B，页面B 在created中根据id将数据查出，接着，在页面B展示。
   -->
  <div id="app">
    <!-- 只需要在url后面用?去传参即可，不需要对路由进行任何修改 -->
    <router-link to="/login?id=123&name=张三" tag="button">登录</router-link>
    <router-link to="/register/12312/李四">注册</router-link>

    <transition name="component" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>

  <script>
    var login = {
      template: '<p>我是登录组件 --- {{$route.query.id}} --- {{$route.query.name}}</p>',
      created() {
        // this.$route获取路由对象
        // route.query只适用于 ？ 后面拼接的参数
        console.log(this.$route.query.id, this.$route.query.name)
      }
    }
    var register = {
      template: '<p>我是注册组件 --- {{$route.params.id}} --- {{$route.params.name}}</p>',
      created() {
        // this.$route获取路由对象
        console.log(this.$route.params.id, this.$route.params.name)
      }
    }

    let routerObj = new VueRouter({
      routes: [
        {path: '/login', component: login},
        {path: '/register/:id/:name', component: register}
      ]
    })

    var vue = new Vue({
      el: '#app',
      data: {
      },
      router: routerObj
    })

  </script>

```
### 路由嵌套
```html
 <template id="login">
    <div>
      <p>我是登录组件</p>
      <router-link to="/login/loginByPassword" tag="button">账密登录</router-link>
      <!-- 不建议这么写，建议像上面，把父级路由也加上 -->
      <router-link to="loginBySms">验证码登录</router-link>
      <router-view></router-view>
    </div>
  </template>
  

  <script>
   // 当引入了vue-router之后，在window全局对象中，就有了一个VueRouter构造函数
    let routerObj = new VueRouter({
      routes: [ // routes中定义了路由的规则
        { path: '/', redirect: '/login' }, // redirect就是重定向，访问path时，会被重定向到redirect指定的路由。这里是指路由的重定向，而非请求重定向，和后端的redirect是两码事
        {
          path: '/login',
          component: login,
          children: [ // children属性用于指定子路由，通过子路由可以实现路由的嵌套
            // children里的属性和路由是一毛一样的，path和component
            { path: 'loginByPassword', component: passwordLogin },
            { path: 'loginBySms', component: smsLogin }
          ]
        },
        { path: '/register', component: register } // 对象中有两个属性：path：表示路由的url，component：表示路由跳转到的组件
      ]
    })
  </script>
```
