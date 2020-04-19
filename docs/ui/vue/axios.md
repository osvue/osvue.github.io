# axios
## axios request.js
```js
// 这个是Node中向外暴露成员的方式
// module.exports = {}

// 在ES6中，也通过规范的形式，规定了ES6如何导入和导出模块
// ES6中，使用 import 模块名称 from '模块标识符' import '模块路径'两种方式导入模块
// ES6中,使用export default 和export向外暴露成员.

var info = {
  name: '张三',
  age: 23
}

export default info
// 注意：export default 向外暴露的成员，可以用任意的变量接收
// 注意：在一个模块中，export default只允许向外暴露一次
// 注意: 在一个模块中, 可以同时使用export default和export

export var title = '标题'
export var content = '哈哈哈哈'

// 注意：使用export向外暴露成员，只能使用{ }的形式去接收，叫做【按需引入】，按需引入是开发中非常常用的方式
// 注意：export可以向外暴露多个成员，同时，如果某些成员，我们在import的时候，不需要，则可以不在 { } 中定义
// 注意：使用export导出的成员，必须严格按照export导出时候的名称，来使用 { }接收
// 注意：使用export导出的成员，如果就想换个名字接收，可以使用as 起个别名

// Node中，引入使用的是var 名称 = require('模块标识符')
```
## 封装的axios to request.js
```javascript

import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: '/',
  timeout: 5000 // 默认请求超时时间
})
/**
 * request 拦截器
 * 可以在请求发送前对请求进行一些处理
 * 如：统一在请求头上加上token
 * 对请求参数进行统一加密
 * 等等
 */
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 请求异常了
    Message({
      type: 'error',
      message: '系统异常，请及时联系管理员'
    })
    return Promise.reject(error)
  }
)
/**
 * response 拦截器
 * 可以在接口响应之后，页面获取到响应结果之前
 * 对响应结果统一进行处理
 * 如：对返回结果进行解密 
 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      // code是200的情况，表示接口是通的，直接返回res
      return res
    } else {
      // else：非200的情况，表示接口异常
      Message({
        type: 'error',
        message: res.msg
      })
    }
  },
  error => {
    // 请求报错的情况下（http请求报错）
    Message({
      type: 'error',
      message: res.msg
    })
  }
)
export default service
```
## 在api中的使用
```js
import request from '../utils/request'
const group_name = 'user'
export default {
  userList(page) {
    return request({
      url: `/${group_name}/page`,
      method: 'post',
      data: page
    })
  },
  update(user) {
    return request({
      url: `/${group_name}/update`,
      method: 'put',
      data: user
    })
  },
  deleteById(id) {
    return request({
      url: `/${group_name}/delete//${id}`,
      method: 'delete'
    })
  },
  save(user) {
    return request({
      url: `/${group_name}/save`,
      method: 'post',
      data: user
    })
  },
  getById(id) {
    return request({
      url: `/${group_name}/get//${id}`,
      method: 'get'
    })
  },
}

```
