<template>
	<div>
		<!-- 顶部滑块 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll" >
					<a v-for="(item, val, i) in cates" :key="i" :class="['mui-control-item', i==0 ? 'mui-active':'']">
						{{ val }}
					</a>
				</div>
			</div>
		</div>
		
		<!-- 图片列表 -->
		<ul>
		  <li v-for="item in list">
		    <img v-lazy="item">
		  </li>
		</ul>
		
	</div>
</template>

<script>
import mui from '../../lib/mui/dist/js/mui.min.js';
export default {
	data() {
		return {
			cates: [],
			list: []
		};
	},
	created() {
		this.getCategory();
	},
	mounted() {
		// 初始化scroll控件：
		mui('.mui-scroll-wrapper').scroll({
			// 	// flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			deceleration: 0.0005
		});
	},
	methods: {
		getCategory() {
			this.$http.get('https://www.apiopen.top/journalismApi').then(res => {
				if(res.body.code === 200){
					// console.log(res.body.data)
					this.cates = res.body.data;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
* {
	touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
