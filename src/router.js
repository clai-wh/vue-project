/* 
    路由模块
*/
import VueRouter from "vue-router";
// 引入 组件
import home from "./components/home.vue"
import number from "./components/number.vue"
import shopCar from "./components/shopCar.vue"
import search from "./components/search.vue"

// 创建路由对象
let router = new VueRouter({
    // 配置路由规则
    routes: [
        { path: '/', redirect: "/home" },
        { path: "/home", component: home },
        { path: "/number", component: number },
        { path: "/shopCar", component: shopCar },
        { path: "/search", component: search }
    ],
    // 覆盖默认的路由高亮的样式类, 把 router-link-active 转变为 mui-active
    linkActiveClass: "mui-active"
})
export default router;