<template>
	<div class="good-info-container">
		
		<!-- 小球 -->
		<transition
		 @before-enter="beforeEnter"
		 @enter="enter"
		 @after-enter="afterEnter">
			<div ref="ball" class="ball" v-show="flag"></div>
		</transition>
		
		<!-- 商品轮播 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<my-swipe :carousel="carousel" :isFull="true"></my-swipe>
				</div>
			</div>
		</div>

		<!-- 商品购买 -->
		<div class="mui-card">
			<div class="mui-card-header">{{ goodsInfo.source }}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="shop-car">
						<div class="price">
							<span>
								市场价:
								<del>${{ goodPrice * 1.5 }}</del>
							</span>
							<span>
								&nbsp;&nbsp; 销售价:
								<b class="new-price">${{ goodPrice }}</b>
							</span>
						</div>
						<div class="count">
							<span>购买数量: &nbsp;</span>
							<numbox :max="goodsInfo.tcount" @getCount="getSelectCount"></numbox>
						</div>
						<div>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 商品信息参数 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>
						<span>商品货号:</span>
						<span>SD123****123</span>
					</p>
					<p>
						<span>库存情况:</span>
						<span>{{ goodsInfo.tcount }}件</span>
					</p>
					<p>
						<span>上架时间:</span>
						<span>2015-04-04 12:00:00</span>
					</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button @click="toGoodsDetails(id)" type="primary" size="large" plain>图文介绍</mt-button>
				<mt-button @click="toGoodsComment" type="danger" size="large" plain>商品评价</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
import swipe from '../subcomponent/swipe.vue';
import numbox from "../subcomponent/numbox.vue"

export default {
	data() {
		return {
			id: this.$route.params.id,
			carousel: [],
			goodsInfo: {},
			goodPrice: 990,
			counts: 1,
			flag: false
		};
	},
	created() {
		this.getCarousel();
		this.getGoodsInfo();
	},
	methods: {
		// 获取轮播图
		getCarousel() {
			this.$http.get('https://www.apiopen.top/journalismApi').then(res => {
				if (res.status == 200) {
					res.body.data.auto.forEach(item => {
						// console.log(item)
						item.url = item.picInfo[0].url;
					});
					this.carousel = res.body.data.auto;
				}
			});
		},
		// 获取商品数据
		getGoodsInfo () {
			this.$http.get('https://www.apiopen.top/journalismApi').then(res=>{
				if(res.body.code === 200){
					// console.log(res.body.data.tech[2])
					// 商品对象
					this.goodsInfo = res.body.data.tech[2];
				}
			});
		},
		// 点击使用 编程式导航
		// 商品详情介绍
		toGoodsDetails (id) {
			// console.log(this)
			this.$router.push({name: "goodsInfoDetails", params: { id }});
		},
		// 商品评价
		toGoodsComment (id) {
			this.$router.push({ path: "/home/goodsList/goodsInfo/goodsComment/" + id });
		},
		// 获取 点击商品选择加入购物车的数量
		getSelectCount (data) {
			this.counts = data;
			// console.log("父组件获取到的数量" + this.counts);
		},
		// 添加到购物车中
		addToShopCar () {
			this.flag = !this.flag;
			// 商品对象: { id: 该商品的ID, count: 要购买商品的数量, price: 该商品的价格, selected: false(是否被选中) }
			// 拼接出一个, 要保存到 store 中 car 数组中的 商品信息对象
			let goodsObjInfo = { id: this.id, count: this.counts, price: this.goodPrice, selected: true };
			// 调用 store 中的 mutations 将商品添加到购物车
			this.$store.commit("addToCar", goodsObjInfo);
		},
		// 小球动画过渡效果
		beforeEnter (el) {
			el.style.transform = "translate(0, 0)";
		},
		enter (el, done) {
			// 由于页面滚动, 加上 购物车 不在同一页面
			// 采用 domObhject.getBoundingClintRect() 原生方法 获取 小球 距离左顶点的距离
			// 移动前:
			// 移动前的小球, 可以用 this.$refs 的方式来获取元素
			// console.log(this.$refs)
			let ball = this.$refs.ball.getBoundingClientRect();
			// 移动后:
			// 使用操作 dom 方式, 获取 小球
			let badge = document.querySelector("#badge").getBoundingClientRect();
			// 偏移量
			let moveX = badge.left - ball.left;
			let moveY = badge.top - ball.top;
			
			el.style.transform = `translate(${moveX}px, ${moveY}px)`;
			el.style.transition = "all 0.6s cubic-bezier(.73,-0.31,.99,.34)";
			done();
		},
		afterEnter () {
			this.flag = !this.flag;
		}
	},
	components: {
		'my-swipe': swipe,
		numbox
	}
};
</script>

<style lang="scss" scoped>
.good-info-container {
	background-color: #eeeeee;
	overflow: hidden;
	.ball{
		position: absolute;
		top: 345px;
		left: 145px;
		width: 17px;
		height: 18px;
		border-radius: 50%;
		background-color: red;
		z-index: 99;
	}
	.price {
		del {
			color: #696969;
		}
		.new-price {
			color: #c40000;
			font-size: 17px;
		}
	}
	.count {
		display: flex;
		align-items: center;
		margin: 5px 0 10px 0;
	}
	.mui-card-footer {
		display: block;
		button:nth-child(2){
			margin-top: 8px;
		}
	}
}
</style>
