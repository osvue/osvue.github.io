# ES6
## Object.assign()
**Object.assign()** 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
* demo  
```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

```
* 语法
`Object.assign(target, ...sources)`
* 参数
**target**  目标对象。**sources**    源对象。
* 返回值
    目标对象
