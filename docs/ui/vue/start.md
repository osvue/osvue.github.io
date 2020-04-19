# VUE 组件

## 创建VUE组件
```html
  <div id="app">
    <my-component></my-component>
    <my-component2></my-component2>
    <my-component3></my-component3>
    <my-component4></my-component4>
  </div>

  <template id="temp1">
    <div>
      <div>哈哈哈哈</div>
      <p>我是p标签</p>
      <h1>我是个大大的h1</h1>
    </div>
  </template>

  <script>
    var num = 3
    // 1 使用Vue.extend来组件组件
    // 按照java的开发思想，变量名往往是驼峰规则。
    // vue定义组件时可以使用驼峰规则，但是，使用组件时如果存在驼峰，应当全部改为小写，并将每个单词用 - 连接
    Vue.component('myComponent', Vue.extend({
      template: '<h3>这是用extend组件的组件</h3>' // template就是组件要展示的内容，可以是html标签
    }))

    // 不使用extend去组件组件
    Vue.component('myComponent2', {
      template: '<h4>不使用extend去组件组件</h4>'
    })

    // 不论用哪种方式去组件组件，组件template属性只能有一个。并且有且只能有一个根节点
    // ES6语法：反引号 ` ES6中用来解决字符串拼接烦恼的新引号。在两个反引号之间可以写任何内容，不需要使用 + 拼接
    // 如果在`中需要使用到变量，直接使用模板语法${}
    Vue.component('myComponent3', {
      template: `
            <div><h4>不使用extend去组件组件</h4>
                  <div>${num}</div></div>
              `
    })
    // 3.使用template
    Vue.component('myComponent4', {
      template: '#temp1'
    })

    var vue = new Vue({
      el: '#app',
      data: {
      }
    })
  </script>

```
## 组建中的 data 和 Methods
```js
 // 3.使用template
    Vue.component('myComponent', {
      template: '#temp1',
      // Vue 组件中的data必须是一个方法，并且返回一个对象
      // 组件的存在是为了复用性，定义了一个组件后，可能会有多个地方使用到该组件。
      // 如果按照data: {}的写法，多个组件会复用同一个data，降低组件的复用性，而定义为function则不会。
      data() {
        return {
          count: 0
        }
      },
      methods: {
        add() {
          this.count++
        }
      }
    })
```
## 父组件向子组件传值
```html
  <div id="app">
    <!-- 父组件向子组件传值。属性名称，也需要使用- -->
    <my-component :parent-msg="msg"></my-component>
  </div>

  <template id="temp1">
    <div>
      <div>{{title}}</div>
      <!-- 经过测试，子组件无法直接使用到父组件中的data -->
      <!-- <div>{{msg}}</div> -->
      <div>{{parentMsg}}</div>
      <button @click="changeMsg">修改</button>
    </div>
  </template>

  <script>
    var vue = new Vue({
      el: '#app',
      data: {
        msg: '我是父组件中的msg'
      },
      components: {
        'my-component': {
          template: '#temp1',
          data() {
            return {
              title: '我是标题'
            }
          },
          methods: {
            changeMsg() {
              this.parentMsg = '我被修改了'
            }
          },
          // props中的数据，都是通过父组件传递给子组件的。
          // props中的数据都是只读的，无法去赋值
          props: {
            parentMsg: { // props使用数组是非常不标准的写法。建议使用对象，并给每一个prop声明类型和默认值
              type: String,
              default: null
            }
          }
        }
      }
    })
  </script>
```
## 父组件向子组件传递方法
```html
  <div id="app">
    {{msg}}<br/>
    {{title}}
    <!-- 
      父组件向子组件传递方法，需要使用v-on。 
      v-on属性表示子组件调用方法的名称。值表示父组件传递的方法。
      这里也不能使用驼峰规则。建议也不要使用 - ，这里的名称就使用单个单词
    -->
    <my-component @change="changeMsg"></my-component>
  </div>

  <template id="temp1">
    <div>
      <!-- 通过点击修改按钮，修改父组件中的msg -->
      <button @click="changeMsg">修改</button>
    </div>
  </template>

  <script>
    var vue = new Vue({
      el: '#app',
      data: {
        msg: '我是父组件中的msg',
        title: '我是父组件的标题'
      },
      methods: {
        changeMsg(msg, title) {
          this.msg = msg
          this.title = title
        }
      },
      components: {
        'my-component': {
          template: '#temp1',
          methods: {
            changeMsg() {
              // emit 第一个参数是要调用的方法名称。第二个参数以后都表示这个方法需要传递的参数
              this.$emit('change', '修改了父组件中的msg', '修改了父组件的title')
            }
          }
        }
      }
    })
  </script>
```
## 父组件调用子组件方法
```html
  <div id="app">
    <button @click="getElement">获取元素</button>
    <button @click="handlerChildFunction">调用子组件方法</button>
    <div ref="div1">我是内容</div>
    <my-component ref='com1'></my-component>
  </div>

  <template id="temp1">
    <div>
    </div>
  </template>

  <script>
    var vue = new Vue({
      el: '#app',
      methods: {
        getElement() {
          // 1. 获取dom元素。就用传统的js去获取。但是vue不推荐这种用法
          // let text = document.getElementById('div1').innerText
          // 2. 获取dom元素，使用ref （reference）。这个是vue提供的写法。建议使用这个。
          let text = this.$refs.div1.innerText
          console.log(text)
        },
        handlerChildFunction() {
          // 父组件调用子组件方法。，直接使用ref去调用方法。方法的用法和子组件中一模一样
          this.$refs.com1.childFunction()
        }
      },
      components: {
        'my-component': {
          template: '#temp1',
          methods: {
            childFunction() {
              console.log('子组件方法被调用了')
            }
          }
        }
      }
    })
  </script>
```

```js
/*
父组件给子组件传值

    1.父组件调用子组件的时候 绑定动态属性
        <v-header :title="title"></v-header>

    2、在子组件里面通过 props接收父组件传过来的数据
        props:['title']

        props:{

            'title':String      
        }

    3.直接在子组件里面使用

父组件主动获取子组件的数据和方法：

    1.调用子组件的时候定义一个ref

        <v-header ref="header"></v-header>

    2.在父组件里面通过

        this.$refs.header.属性

        this.$refs.header.方法

子组件主动获取父组件的数据和方法：  

        this.$parent.数据

        this.$parent.方法
*/
```

```html
<script>
    export default{
        data(){
            return {               
               msg:'我是一个home组件',
               title:'首页111'
            }
        },
        components:{

            'v-header':Header
        },
        methods:{

            run(){

                alert('我是Home组件的run方法');
            },
            getChildData(){

                //父组件主动获取子组件的数据和方法：
                // alert(this.$refs.header.msg);

                this.$refs.header.run();
            }
        }


    }

</script>

<style lang="scss" scoped>

    /*css  局部作用域  scoped*/

    h2{

        color:red
    }

  </style>
 ```
