---
autoGroup-1: Vue_dev
title: Slot
---

# v-slot  
## v-slot 用法: v-slot : slotname   &     #slotname                 
##  slot 用法: slot="slotname"
>v-slot 指令。目的就是想统一 slot 和 slot-scope 语法，使代码更加规范和清晰。既然有新的语法上位，很明显，slot 和 scope-slot 也将会在 vue@3.0.x 中彻底的跟我们说拜拜了。而从 vue@2.6.0 开始，官方推荐我们使用 v-slot 来替代后两者。
 
* 跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。
* 例如 v-slot:header 可以被重写为 #header：
  **老的写法**
子组件(slotOne1)
```vue
//子组件(slotOne1)
<template>
      <div class="slotOne1">
        <slot></slot>
      </div>
</template>
//在子组件中写入slot，slot所在的位置就是父组件要显示的内容
//父组件

<template>
      <div>
        <slotOne1>
          <p style="color:red">我是父组件插槽内容</p>
        </slotOne1>
      </div>
   </template>
```
**用v-slot实现(新的方法)**
```vue
//子组件(slotOne1)

<template>
      <div class="slotOne1">
        <div>我是slotOne1组件</div>
        <slot></slot>
      </div>
    </template>
//父组件

<template>
      <div>
        // 当然也可以不写v-slot:default  直接<slotOne1>
        <slotOne1 v-slot:default>
          <p style="color:red">我是父组件插槽内容</p>
        </slotOne1>
      </div>
   </template>
```
## 具名插槽
**老的写法**
* 子组件
```vue
<template>
  <div class="slottwo">
     
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
```
### 在子组件中定义了三个slot标签，其中有两个分别添加了name属性header和footer
* 父组件
```vue

<template>
      <div>
        我是父组件
        <slot-two>
          <p>啦啦啦，啦啦啦，我是卖报的小行家</p>

          <template slot="header">
              <p>我是name为header的slot</p>
          </template>

          <p slot="footer">我是name为footer的slot</p>
        </slot-two>
      </div>
    </template>
```
* 在父组件中使用template并写入对应的slot值来指定该内容在子组件中现实的位置
* 当然也不用必须写到template ，没有对应值的其他内容会被放到子组件中没有添加name属性的slot中
## 新的写法
**子组件(slotTwo)**
```vue
<template>
  <div class="slottwo">
     
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
```
### 在子组件中定义了三个slot标签，其中有两个分别添加了name属性header和footer
* 父组件
```vue
<template>
      <div>
        我是父组件
        <slot-two>

          <template #header>
              <p>我是name为header的slot</p>
          </template>

        //<p>啦啦啦，啦啦啦，我是卖报的小行家</p>  // 不用template标签也可以   会添加到默认插槽中

          <template #default>
              <p>啦啦啦，啦啦啦，我是卖报的小行家</p>
          </template>

   // 请注意， v-slot 只能添加到 <template> 或自定义组件上，这点与弃用的 slot 属性不同  
  // 这里使用了缩写#  v-slot的缩写是#
  //<p #footer>我是name为footer的slot</p>  不能这样写
           // 要这样写
           <template #footer>
              <p>我是name为footer的slot</p>
          </template>

        </slot-two>

        // 或者用以下的格式
         <slot-two>
          <template v-slot:header>
              <p>我是name为header的slot</p>
          </template>
          <template v-slot:default>
              <p>啦啦啦，啦啦啦，我是卖报的小行家</p>
          </template>
           <template  v-slot:footer>
              <p>我是name为footer的slot</p>
          </template>
        </slot-two>
      </div>
    </template>
```
* 请注意， v-slot 只能添加到 或自定义组件上，这点与弃用的 slot 属性不同 v-slot:的缩写是 **#**
* 还有就是要么都用v-slot: 要么都用缩写 # ，不要混合用，要不然只有最后面的才生效
* 在父组件中使用template并写入对应的slot值来指定该内容在子组件中现实的位置
* 当然也不用必须写到template ，没有对应值的其他内容会被放到子组件中没有添加name属性的slot中


 



