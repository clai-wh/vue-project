<template>
	<div class="car-container">
		<h1>购物车</h1>
		<hr />
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="car-info">
						<div class="mui-switch mui-switch-mini mui-active">
							<div class="mui-switch-handle"></div>
						</div>
						<img src="../lib/mui/examples/hello-mui/images/logo.png" />
						<div class="goodCarInfo">
							<h4>1111111111111</h4>
							<div class="num-price">
								<span>$1243</span>
								<numbox></numbox>
								<a href="javascript:;">删除</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="bought">
						<p>
							<span>总计(不含运费)</span><br>
							<span>已勾选商品&nbsp;&nbsp;0件, 总价: &nbsp;$0</span>
						</p>
						<mt-button type="danger" size="small">结算</mt-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import numbox from './subcomponent/numbox.vue';
// import mui from "../lib/mui/dist/js/mui.min.js"
export default {
	components: {
		numbox
	},
	mounted() {
		// mui('.mui-switch')['switch']()
	}
};
</script>

<style lang="scss" scoped>
.car-container {
	.car-info {
		display: flex;
		justify-content: space-around;
		align-items: center;
		.mui-switch {
		}
		img {
			width: 45px;
			height: 45px;
		}
		.goodCarInfo {
			text-align: center;
			font-size: 16px;
			.num-price {
				display: flex;
				justify-content: space-around;
				align-items: center;
				span {
					padding-right: 10px;
				}
				.mui-numbox {
					height: 25px;
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
		p {
			margin-bottom: 0;
		}
	}
}
</style>
