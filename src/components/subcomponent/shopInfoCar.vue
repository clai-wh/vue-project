<template>
	<div>
		<div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
			<!-- "-"按钮，点击可减小当前数值 -->
			<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
			<input class="mui-numbox-input" type="number" :value="initCount" @change="numbers" ref="numberbox" readonly/>
			<!-- "+"按钮，点击可增大当前数值 -->
			<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
		</div>
	</div>
</template>

<script>
import mui from '../../lib/mui/dist/js/mui.min.js';
export default {
	// 接收由 父组件 传递过来的数据
	props: ["initCount", "updateID"],
	methods: {
		// 当文本框的数据被修改时, 触发该事件
		numbers() {
			// 数量改变了
			// console.log("id: " + this.updateID+ ", 数量值: " + this.$refs.numberbox.value);
			// 每当数量值改变, 就立即把最新数据同步到 购物车 store 中, 覆盖之前的数据值
			this.$store.commit("updateShopCar", { id: this.updateID, count: this.$refs.numberbox.value })
		}
	},
	mounted() {
		mui('.mui-numbox').numbox();
		// console.log(this.initCount);
	}
};
</script>

<style lang="scss" scoped>
.mui-numbox {
	height: 28px;
}
</style>
