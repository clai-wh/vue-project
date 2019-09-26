<template>
	<div class="good-info-container">
		<!-- 商品轮播 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner"><my-swipe :carousel="carousel" :isFull="true"></my-swipe></div>
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
								<b class="old-price">$1234</b>
							</span>
							<span>
								销售价:
								<b class="new-price">$1234</b>
							</span>
						</div>
						<div class="count">
							<span>购买数量:</span>
							<div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" data-numbox-max="10">
								<!-- "-"按钮，点击可减小当前数值 -->
								<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
								<input class="mui-numbox-input" type="number" value="1" />
								<!-- "+"按钮，点击可增大当前数值 -->
								<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
							</div>
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
				<mt-button type="primary" size="large" plain>图文介绍</mt-button>
				<mt-button type="danger" size="large" plain>商品评价</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
import swipe from '../subcomponent/swipe.vue';
import mui from '../../lib/mui/dist/js/mui.min.js';
export default {
	data() {
		return {
			carousel: []
		};
	},
	created() {
		this.getCarousel();
		mui('mui-numbox').numbox();
	},
	methods: {
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
		}
	},
	components: {
		'my-swipe': swipe
	}
};
</script>

<style lang="scss" scoped>
.good-info-container {
	background-color: #eeeeee;
	overflow: hidden;
	.mui-card {
		.shop-car {
			.price {
				font-size: 13px;
				color: #333333;
				span {
					&:nth-child(2) {
						margin-left: 10px;
					}
					b {
						padding-left: 5px;
					}
					.old-price {
						text-decoration: line-through;
						color: #696969;
					}
					.new-price {
						color: #c40000;
						font-size: 17px;
					}
				}
			}
			.count {
				margin: 5px 0 10px 0;
				.mui-numbox {
					width: 120px;
					height: 25px;
				}
			}
		}
	}
	.mui-card-footer{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		button:nth-child(2){
			margin-top: 8px;
		}
	}
}
</style>
