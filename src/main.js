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

// 按需导入 Mint-UI 组件 (移除严格模式时, 报引用错误, 所以换成全部 Mint-UI 安装注册组件)
// import { Header, Swipe, SwipeItem, Search, Navbar, TabItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Search.name, Search)
// Vue.component(Navbar.name, Navbar)
// Vue.component(TabItem.name, TabItem)
// Vue.component(Button.name, Button)

import MintUI from "mint-ui"
// 引入 Mint UI 样式
import "mint-ui/lib/style.css"
// 手动安装 Mint-ui
Vue.use(MintUI)

// 缩略图 vue-preview 插件
import VuePreview from "vue-preview"
Vue.use(VuePreview)



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
