/* 
    入口文件
*/
// console.log("ok")
// 引入 Vue
import Vue from "vue"
// 引入 App.vue 根组件
import app from "./App.vue"
// 导入 路由的包
import VueRouter from "vue-router"
// 导入 vue-resource 
import VueResource from "vue-resource"

Vue.use(VueRouter)
Vue.use(VueResource)

// 导入自己的路由模块
import router from "./router.js"

// 引入 MUI css样式
import "./lib/mui/dist/css/mui.css"
import "./lib/mui/examples/hello-mui/css/icons-extra.css"
import "./lib/mui/examples/hello-mui/css/feedback.css"

// 导入 Mint-UI 组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 按需导入 Mint-UI 组件
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)

import moment from "moment"
// 定义全局过滤器 (格式化时间)
Vue.filter("dateFormat", function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})

// Vue实例对象
let vm = new Vue({
    el: "#app",
    // 通过 render 函数, 把模板渲染到页面上
    render: h => h(app),
    // 挂在路由对象
    router
})