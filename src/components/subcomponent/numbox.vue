<template>
	<div>
		<div class="mui-numbox" data-numbox-step="1" data-numbox-min="1" data-numbox-max="10">
			<!-- "-"按钮，点击可减小当前数值 -->
			<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
			<input class="mui-numbox-input" type="number" value="1" />
			<!-- "+"按钮，点击可增大当前数值 -->
			<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
		</div>
	</div>
</template>

<script>
import mui from '../../lib/mui/dist/js/mui.min.js';
export default {
	created() {
		mui('mui-numbox').numbox();
	}
};
</script>

<style lang="scss" scoped></style>
