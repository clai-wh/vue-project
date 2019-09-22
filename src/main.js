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

// 安装路由


// 引入 app 样式
import "./css/app.css"
// 引入 MUI 样式
import "./lib/mui/dist/css/mui.css"
import "./lib/mui/examples/hello-mui/css/icons-extra.css"


// 按需导入 Mint-UI 组件
// 引入 Header 组件 (顶部导航栏)
// 引入 Swipe 和 SwipeItem 组件 (首页轮播图)
// 引入 search 组件 (搜索)
import { Header,Swipe, SwipeItem, Search } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Search.name, Search)


// Vue实例对象
let vm = new Vue({
    el: "#app",
    // 通过 render 函数, 把模板渲染到页面上
    render: h => h(app),
    // 挂在路由对象
    router
})
