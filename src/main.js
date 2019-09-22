/* 
    入口文件
*/
// console.log("ok")
// 引入 Vue
import Vue from "vue"
// 引入 App.vue 根组件
import app from "./App.vue"

// 引入 app 样式
import "./css/app.css"
// 引入 MUI 样式
import "./lib/mui/dist/css/mui.css"

// 按需导入 Mint-UI 组件
// 头部区域
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// Vue实例对象
let vm = new Vue({
    el: "#app",
    // 通过 render 函数, 把模板渲染到页面上
    render: h => h(app)
})
