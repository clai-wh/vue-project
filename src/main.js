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
// 导入 vuex 
import Vuex from 'vuex';

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

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

// 取消 Vue 所有的日志与警告。
Vue.config.silent = true

// 获取本地存储的 car 数据, 
let car = JSON.parse(localStorage.getItem('car') || "[]");

// vuex.store 实例对象
let store = new Vuex.Store({
	// this.$store.state.***
	state:{
		// 将 购物车中的商品的数据, 同一个数据存储起来, 在 car 数据中, 存储一些商品的对象
		// 例如: { id: 该商品的ID, count: 要购买商品的数量, price: 该商品的价格, selected: false(是否被选中) }
		car: car
	},
	// this.$store.commit("方法名称", ("按需传递唯一的参数"))
	mutations: {
		// 点击加入购物车, 把商品信息, 保存到 store 中的 car 数组中
		// 分析: 1. 如果购物车中已存在想要添加的商品, 只需修改商品数量即可
		// 			 2. 购物车中没有想要的商品, 就新添加该商品到 car 中
		addToCar (state, goodObjInfo) {
			// 默认购物车中没有找到需要的商品
			let findGood = false;
			// 找到了, some: 找到符合条件的数据后, 立即返回
			state.car.some(item=>{
				if(item.id == goodObjInfo.id){
					item.count += parseInt(goodObjInfo.count);
					findGood = true;
					return true;
				}
			})
			// 如果循环完毕后, 得到的 findGood  还是为 false, 则直接把商品 添加到 car 中
			if (!findGood) {
				state.car.push(goodObjInfo);
			}
			// 实行本地永久存储
			// 将最新数据 存储到 本地存储 localStorage
			localStorage.setItem("car", JSON.stringify(state.car));
		},
		// 更新购物车中的数据
		updateShopCar (state, goodObjInfo) {
			state.car.some(item=>{
				if(item.id == goodObjInfo.id) {
					item.count = parseInt(goodObjInfo.count)
					// console.log(item)
					return true;
				}
			});
			// 更新完 商品的数量, 把最新的购物车数据保存到 本地存储 localStorage 中
			localStorage.setItem("car", JSON.stringify(state.car));
		},
		// 删除购物车中的商品数据
		removeGoods (state, id) {
			state.car.some((item, i)=>{
				if(item.id == id) {
					state.car.splice(i, 1)
					return true;
				}
			});
			// 删除完后, 再把最新的数据保存到 本地存储 localStorage 中
			localStorage.setItem("car", JSON.stringify(state.car));
		},
		// 修改购物车中的商品的状态
		modifySelect (state, selectedInfo) {
			state.car.some(item=>{
				if(item.id == selectedInfo.id) {
					item.selected = selectedInfo.selected;
					return true;
				}
			});
			localStorage.setItem("car", JSON.stringify(state.car));
		}
	},
	// this.$store.getters.***
	getters:{
		// 相当于 计算属性 / filters
		getAllCount (state) {
			let c = 0;
			state.car.forEach(item=>{
				c += item.count;
			})
			return c;
		},
		// 设置 在购物车中商品的数量
		getGoodsCount (state) {
			let goodsCounts = {};
			state.car.forEach(item=>{
				goodsCounts[item.id] = item.count
			});
			return goodsCounts;
		},
		// 设置购物车中商品 默认被选中
		isSelected (state) {
			let flag = {};
			state.car.forEach(item=>{
				flag[item.id] = item.selected
			});
			return flag;
		},
		// 计算商品数量和价格
		calcAllGoodsCounts (state) {
			// 定义一个对象, 来接收商品数据
			// 默认所有商品均为选中状态
			let obj = {
				// 商品的数量
				count: 0,
				// 商品的总价
				amount: 0
			};
			state.car.forEach(item=>{
				// 判断商品是否被选中
				if(item.selected) {
					obj.count += item.count;
					obj.amount += parseFloat(item.price * item.count);
				}
			});
			return obj;
		}
	}
})

// Vue实例对象
let vm = new Vue({
    el: "#app",
    // 通过 render 函数, 把模板渲染到页面上
    render: h => h(app),
    // 挂载路由对象 到 vm 实例对象上
    router,
		// 挂载 store 状态管理对象 
		store
})
