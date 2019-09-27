<template>
	<div>
		<div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
			<!-- "-"按钮，点击可减小当前数值 -->
			<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
			<input class="mui-numbox-input" type="number" @change="numbers" ref="numberbox"/>
			<!-- "+"按钮，点击可增大当前数值 -->
			<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
		</div>
	</div>
</template>

<script>
import mui from '../../lib/mui/dist/js/mui.min.js';
export default {
	// 接收由 父组件 传递过来的数据
	props:["max"],
	methods: {
		// 当文本框的数据被修改时, 触发该事件
		numbers () {
			// console.log(this.$refs.numberbox.value);
			this.$emit("getCount", parseInt(this.$refs.numberbox.value));
		}
	},
	// 利用 watch 监听 父组件传递过来的数据
	watch:{
		// 使用 js API 设置 numberbox 的最大值
		"max": function (newValue, oldValue) {
			mui('.mui-numbox').numbox().setOption("max", newValue);
		}
	},
	mounted () {
		mui('.mui-numbox').numbox();
			console.log(this.max)
	}
};
</script>

<style lang="scss" scoped>
</style>
