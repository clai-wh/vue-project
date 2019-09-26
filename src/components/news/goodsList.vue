<template>
	<div class="goods-container">
		<router-link to="/home/goodsList/goodsInfo" tag="div" class="a-product" v-for="item in goods" :key="item.channelid">
			<img :src="item.thumb" alt="photo" />
			<h3>{{ item.name }}</h3>
			<div class="good-info">
				<div class="price">
					<span>限时售价: {{ item.value }}</span>
					<span>原价: {{ item.value * 1.5 }}</span>
				</div>
				<div class="state-now">
					<span>热卖中</span>
					<span>销售量:{{ item.channelid }}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			goods: []
		};
	},
	created() {
		this.getGoodsList();
	},
	methods: {
		getGoodsList() {
			this.$http.get('https://api.apiopen.top/musicBroadcasting').then(res => {
				if (res.body.code === 200) {
					this.goods = res.body.result[0].channellist;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.goods-container {
	display: flex;
	flex-wrap: wrap;
	.a-product {
		width: 47%;
		border: 1px solid #7c7c80;
		background-color: #e6e6e6;
		margin-top: 2%;
		margin-left: 2%;
		border-radius: 5px;
		box-shadow: 0 0 2px #666;
		img {
			border-radius: 5px 5px 0 0;
			width: 100%;
		}
		h3 {
			padding: 0 5px;
			font-size: 15px;
		}
		.good-info {
			border-top: 1px solid #666666;
			padding: 0 5px;
			font-size: 12px;
			.price {
				span {
					display: block;
					font-size: 14px;
					color: #c40000;
				}
				span:nth-child(2) {
					margin-left: 10px;
					color: #666;
					font-size: 12px;
					text-decoration: line-through;
				}
			}
			.state-now {
				display: flex;
				justify-content: space-between;
			}
		}
	}
}
</style>
