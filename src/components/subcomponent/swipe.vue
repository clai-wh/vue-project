<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="2000">
			<mt-swipe-item v-for="(item, i) in carousel" v-if="i < 3" :key="item.url">
				<img :src="item.url" :class="{ full: isFull }" />
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		props:["carousel", "isFull"]
	}
</script>

<style lang="scss" scoped>
.mint-swipe {
	height: 160px;
	.mint-swipe-item {
		text-align: center;
		> img {
			height: 100%;
		}
	}
}
.full {
	width: 100%;
}
</style>
