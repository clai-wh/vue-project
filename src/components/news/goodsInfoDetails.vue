<template>
	<div class="infoDetails-container">
		<h4>{{ goodsInfo.name }}</h4>
		<hr />
		<div>
			<p class="infoDetails-content">{{ goodsInfo.text }}</p>
			<img :src="goodsInfo.images" alt="photo">
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			id: this.$route.params.id,
			goodsInfo: {}
		}
	},
	created () {
		this.getContent();
	},
	methods:{
		getContent () {
			this.$http.get("https://api.apiopen.top/getJoke?count=" + this.id).then(res=>{
				if (res.body.code === 200) {
					this.goodsInfo = res.body.result[0];
				}
			});
		}
	}
	
};
</script>

<style lang="scss" scoped>
.infoDetails-container{
	h4{
		font-size: 20px;
		text-align: center;
	}
	.infoDetails-content{
		color: #333333;
		font-size: 18px;
	}
	img{
		width: 100%;
	}
}
</style>
