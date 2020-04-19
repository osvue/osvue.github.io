# 生命周期

```js
var vue = new Vue({
    el: '#app',
    data: {
      msg: '页面渲染完毕'
    },
    methods: {
    },
    filters: {
    },
    beforeCreate() {
      // 这是我们第一个遇到的生命周期函数，实例被创建出来，还没有data、methods等时，会执行它
      let content = document.getElementById('divId')
      console.log('beforeCreate：', content.innerText)
      // 在js中，null和undefined是不同的含义。null表示有这个对象，但是这个对象的值是null。undefined表示压根就没有这个对象
      console.log('beforeCreate', this.msg)
    },
    created() {
      // Vue实例创建完毕，methods、data、filters等已经挂载到vue实例上。如果需要调用methods，使用data，最早只能在这里操作
      let content = document.getElementById('divId')
      console.log('created', content.innerText)
      console.log('created', this.msg)
    },
    beforeMount() {
      // Vue实例创建完毕，页面尚未重新渲染
      let content = document.getElementById('divId')
      console.log('beforeMounte', content.innerText)
      console.log('beforeMounte', this.msg)
    },
    mounted() {
      // 页面渲染完毕
      let content = document.getElementById('divId')
      console.log('mounted', content.innerText)
      console.log('mounted', this.msg)
    }
  })
```
