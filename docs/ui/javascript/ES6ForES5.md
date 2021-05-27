---
autoGroup-4: ES6
title: 兼容低版本浏览器
---

# 为了兼容低版本浏览器
## 如何将ES6转换成ES5？
一、 介绍
ECMAScript 6(ES6)的发展速度非常之快，但现代浏览器对ES6新特性支持度不高，所以要想在浏览器中直接使用ES6的新特性就得借助别的工具来实现。

* **Babel**是一个广泛使用的转码器，babel可以将ES6代码完美地转换为ES5代码，所以我们不用等到浏览器的支持就可以在项目中使用ES6的特性。

 

二、使用
1、新建工程文件夹这里起名叫做es6,然后在里面创建两个文件夹分别为src 、js
* (src为待转换es6 js存放目录，js为编译完成后的es5 js存放目录)

2、在src目录下新建一个js文件（这里起名叫做index.js），里面输入es6的代码：
```js
let b = 1;
console.log(b);
const name = '张三';
console.log(name);
let c = '成功了么';
setTimeout(() => {
    console.log(c)
}, 200)
```
3、 初始化项目

1）打开终端命令提示符 进入工程目录（这里也就是es6文件夹）输入如下命令初始化项目：（这里用的npm,国内用户建议用cnpm不懂得可以移步至淘宝镜像使用）命令执行完成后会在根目录生成package.json文件。

npm init -y //-y是指表示全部默认，不需要一个一个敲回车
2）打开我们可以看到里面的内容（可以根据自己的需要进行修改，比如我们修改name的值。）
```js
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
 
```

三、全局安装babel工具
1. 在终端中输入以下命令,

**npm install -g babel-cli**

2. 虽然已经安装了babel-cli，只是这样还不能成功进行转换，我们还需要安装转换包才能成功转换。

**npm install --save-dev babel-preset-es2015 babel-cli**
3. 安装完成后，我们可以看一下我们的package.json文件，已经多了devDependencies选项。
```js
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"babel src --out-dir js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
} 
``` 

四、新建.babelrc
在项目根目录新建(.babelrc)文件输入如图所示代码：
```js
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}

```
五、现在你可以尽情转换了
终端输入如下命令：（babel 待转换路径/ --out-dir 转换后路径/）
我们这里是从src转换到js目录下

**babel src --out-dir js**
- 现在我们js目录下面就生成了编译后的js 
- 通过修改package.json里面的别名来实现编译 修改
*  **(“dev”:“babel src --out-dir js”)**
```js
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"babel src --out-dir js"
  },
  "author": "",
  "license": "ISC"
}
```
以后只需要如下命令就可以编译了

 
**npm run dev**
 