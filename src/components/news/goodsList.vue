<template>
	<div class="goods-container">
		<router-link :to="'/home/goodsList/goodsInfo/' + item.channelid" tag="div" class="a-product" v-for="(item, val, i) in goods" :key="i">
			<img :src="item.thumb" alt="photo" />
			<h3>{{ item.name }}</h3>
			<div class="good-info">
				<div class="bg-pad">
					<div class="price">
						<span>限时售价: {{ item.value }}</span>
						<span>原价: {{ item.value * 1.5 }}</span>
					</div>
					<div class="state-now">
						<span>热卖中</span>
						<span>销售量:{{ item.channelid }}</span>
					</div>
				</div>
			</div>
		</router-link>
		
		<mt-button type="primary" plain size="large" @click="getMoreGoods">加载更多</mt-button>
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
		// 获取商品列表
		getGoodsList() {
			this.$http.get('https://api.apiopen.top/musicBroadcasting').then(res => {
				if (res.body.code === 200) {
					// this.goods = res.body.result[0].channellist;
					this.goods = this.goods.concat(res.body.result[0].channellist);
				}
			});
		},
		// 加载更多
		getMoreGoods () {
			this.getGoodsList();
		}
	}
};
</script>

<style lang="scss" scoped>
.goods-container {
	display: flex;
	flex-wrap: wrap;
	padding: 0 8px;
	justify-content: space-between;
	.a-product {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 49%;
		min-height: 275px;
		border: 1px solid #7c7c80;
		margin-top: 8px;
		border-radius: 7.5px;
		box-shadow: 0 0 8px #cccccc;
		img {
			border-radius: 6px 6px 0 0;
			width: 100%;
		}
		h3 {
			padding: 0 5px;
			font-size: 15px;
			word-wrap: break-word; 
			word-break: normal;
		}
		.good-info {
				padding: 2px;
				border-top: 1px solid #666666;
			.bg-pad {
				border-radius: 0 0 7px 7px;
				background-color: #e6e6e6;
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
}
</style>
