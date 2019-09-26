<template>
	<div class="good-info-container">
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
			<div class="mui-card-header">加入购物车</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="shop-car">
						<div class="price">
							<span>
								市场价:
								<del>$1234</del>
							</span>
							<span>
								&nbsp;&nbsp; 销售价:
								<b class="new-price">$1234</b>
							</span>
						</div>
						<div class="count">
							<span>购买数量: &nbsp;</span>
							<numbox></numbox>
						</div>
						<div>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small">加入购物车</mt-button>
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
						<span>60件</span>
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
			carousel: []
		};
	},
	created() {
		this.getCarousel();
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
		// 点击使用 编程式导航
		// 商品详情介绍
		toGoodsDetails (id) {
			// console.log(this)
			this.$router.push({name: "goodsInfoDetails", params: { id }});
		},
		// 商品评价
		toGoodsComment () {
			this.$router.push({ path: "/home/goodsList/goodsInfo/goodsComment" });
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
