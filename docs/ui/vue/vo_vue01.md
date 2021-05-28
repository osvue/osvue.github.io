---
autoGroup-1: Vue_dev
title: VUEX
---

## VUEX
```javascript

/**
 * Vuex 是一个专门为vue应用程序开发的状态管理（数据管理）模式。它采用了集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
 * 说人话：Vuex是Vue配套的公共数据管理工具。它可以把一些共享的数据，保存到vuex中，方便整个程序中的任何组件直接获取或者修改我们的公共数据
 * 
 * Vuex是为了保存组件之间共享数据而诞生的。如果组件之间有要共享的数据，可以挂载到vuex中，而不必父子组件之间传值了。
 * 如果组件的数据不需要共享，此时应该放到每个组件的data中，不要放到vuex中
 * 
 * 只有需要共享的数据，才有权利放到vuex中。组件中私有的数据，只需要放到data中即可。
 * 
 * data：存放组件私有数据
 * props：存放父子组件的数据
 * vuex：存放共享数据
 * 
 * 使用场景：存放全局变量、存放登录信息、存放三方接口的一些固定参数等等
 * 页面刷新你vuex的数据会丢失
 * 解决方案：使用vuex-persistedstate
 */
import Vuex from 'vuex'
Vue.use(Vuex)

// state中的数据使用this.$store.state.xx去访问，但是我们不建议这样去访问
// 如果想修改vuex中的数据，。直接this.$store.state.xx = 新值，但是我们不建议这样去操作
const store = new Vuex.Store({
  state: { // 相当于data
    // 使用方式：this.$store.state.count
    count: 0
  },
  mutations: { // 相当于methods
    // 推荐使用mutations操作vuex中的数据。
    // mutations中的方法，第一个参数始终是state。第二个开始才是用户传递的参数
    // 使用方式：this.$store.commit('方法名', 参数1, 参数2....)
    setCount(state, val) {
      state.count = val
    }
  },
  getters: {
    // 推荐使用getters去获取vuex中的数据。在getters中，可以像过滤器一样，去对state中的数据进行一些处理
    // 用法：this.$store.getters.getCount
    getCount() {
      return store.state.count
    }
  }
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})
```

* state :存放值得地方, 类似于data
* mutations :  通过此对象下的方法操作 state 中的值
* getters : 对state 值得包装,过滤等
* action  : 单纯的数据业务逻辑

## mapState的使用（常用）
```js

 
//1.在.vue组件中引入,在js块中引入

import { mapState } from 'vuex'
//2.在.vue组件中定义一个对象

computed：{
...mapState([        //mapState本是一个函数，在里面写一个数组，记得加...
‘num’ ， //存的数据
‘id’
])
}
//3.然后就可以不用$store.state.num引用了,直接插值

{{num}}{{id}}   //引用多个
 
 
//4. 解构赋值实例
let mapState = {num:0,id:111}
let computed = {...mapState}
console.log(computed )

```
