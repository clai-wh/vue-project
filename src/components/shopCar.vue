<template>
	<div class="car-container">

		<!-- 商品列表 -->
		<div class="mui-card" v-for="(item, val, i) in goodsList" :key="item.channelid">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="car-info">
						<mt-switch v-model="$store.getters.isSelected[item.channelid]" @change="modifySelected(item.channelid, $store.getters.isSelected[item.channelid])"></mt-switch>
						<img :src="item.thumb" />
						<div class="goodCarInfo">
							<h4>{{ item.name }}</h4>
							<div class="num-price">
								<span v-model="price">${{ price * $store.getters.getGoodsCount[item.channelid] }}</span>
								<shopCar :updateID="item.channelid" :initCount="$store.getters.getGoodsCount[item.channelid]"></shopCar>
								<a href="javascript:;" @click.prevent="deleteGoods(item.channelid, i)">删除</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 结算 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="bought">
						<div>
							<p>总计(不含运费)</p>
							<p>已勾选商品&nbsp;&nbsp;<span class="red">{{ $store.getters.calcAllGoodsCounts.count }}</span>件, 总价: &nbsp;<span class="red">${{ $store.getters.calcAllGoodsCounts.amount }}</span></p>
						</div>
						<mt-button type="danger" size="small">结算</mt-button>
					</div>
				</div>
			</div>
		</div>
		
		<!-- <p>{{ $store.getters.isSelected }}</p> -->
	</div>
</template>

<script>
import shopCar from './subcomponent/shopInfoCar.vue';
export default {
	data () {
		return {
			// 商品单价
			price: 990,
			// 购物车中所有商品的数据
			goodsList: []
		}
	},
	created () {
		this.getGoodsList();
	},
	methods: {
		// 获取购物车商品
		getGoodsList () {
			let arrId = [];
			// 获取添加到购物车中的数据
			let cars = this.$store.state.car.forEach(item=>{
				arrId.push(item.id)
			});
			// 先判断购物车是否有商品, 没有就直接返回, 不需要请求数据
			if(arrId.length <= 0) { return ; }
			console.log(arrId)
			// 所有商品的数据
			this.$http.get('https://api.apiopen.top/musicBroadcasting').then(res => {
				// 根据 id 找到相对应的数据对象
				if(res.body.code === 200){
					res.body.result[0].channellist.forEach(item=>{
						if(arrId.includes(item.channelid)) {
							this.goodsList.push(item);
						}
					});
				}
			})
		},
		// 删除购物车商品
		deleteGoods (id, index) {
			// 根据 id 删除本地存储的数据
			this.$store.commit("removeGoods", id);
			// 删除页面上的数据
			this.goodsList.splice(index, 1)
		},
		// 修改商品状态
		modifySelected (id, val) {
			// console.log("id: " + id + ", 选中状态: " + selected)
			this.$store.commit("modifySelect", { id, selected: val });
		},
	},
	components: {
		shopCar
	},
};
</script>

<style lang="scss" scoped>
.car-container {
	background-color: #EEEEEE;
	overflow: hidden;
	.car-info {
		display: flex;
		justify-content: space-around;
		align-items: center;
		.mui-switch {
		}
		img {
			width: 45px;
			height: 60px;
		}
		.goodCarInfo {
			text-align: center;
			h4 {
				font-size: 13px;
			}
			.num-price {
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 10px;
				span {
					color: #C40000;
					font-weight: bold;
					padding-right: 10px;
				}
				a {
					padding-left: 10px;
				}
			}
		}
	}
	.bought {
		display: flex;
		justify-content: space-between;
		align-items: center;
		p {
			margin-bottom: 0;
		}
		.red {
			color: #C40000;
			font-size: 15px;
			font-weight: bold;
		}
	}
}
</style>
