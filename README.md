# vue-food 搭建指南

## 使用vue-cli创建项目

```bash
# 全局安装 vue-cli
$ npm install --global vue-cli

# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project

# 安装依赖
$ cd my-project
$ npm install
```

## Build Setup

> 各种命令命令

``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 创建项目UI库

> 本项目使用element UI
```bash
# 安装，适配于webpack打包工具
npm i element-ui -S

# 在项目中引用
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css' //样式文件单独引用
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

```