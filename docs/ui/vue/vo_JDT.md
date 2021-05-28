---
autoGroup-1: Vue_dev
title: 页面加载进度条
---


## nprogress页面加载进度条

##### 1、安装$ npm install --save nprogress 或者$ yarn add nprogress
**用法NProgress.start();NProgress.done();**
##### 2、使用router.js

```javascript
//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) =>  { 
 NProgress.start()  
 next()
})

router.afterEach(() => {  NProgress.done()})
```
**main.js**
```javascript
import App from './App'
import VueRouter from 'vue-router'
import router from './router' //你的路由文件
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

Vue.use(VueRouter)

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)})
```
