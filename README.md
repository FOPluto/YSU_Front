# YSU_Front

## 前端页面代码

主要框架：vue

## 自己用到的一些插件与依赖（后期会整理成为文档）

mammoth.js: 用于读取word文档
docx-preview: 用于预览文档
docx:
path-browserify:
jquery: 用于动态页面设计
在控制台下跑如下代码：

```
npm install mammoth docx --save
npm install path-browserify --save
```

但是在安装mammoth这个依赖插件之后，会出现一些这个包本身依赖的问题，找到的解决方案如下：

```
npm i path-browserify
```

接着在vue.config.js里module.exports中配置

```
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  },
```

这样操作之后就可以正常编译了

### 代码更新到3.16，先看看后端做的咋样了，好像之后的业务最好跟后端一起
