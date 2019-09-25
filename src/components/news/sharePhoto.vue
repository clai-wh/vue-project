<template>
	<div>
		<!-- 顶部滑块 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a v-for="(item, val, i) in cates" :key="i" :class="['mui-control-item', val == 'auto' ? 'mui-active' : '']" @click="getPhotos(0)">{{ val }}</a>
				</div>
			</div>
		</div>
		<hr style="margin-top: 0;" />

		<!-- 图片列表 -->
		<ul class="img-lists">
			<router-link tag="li" v-for="item in list" :key="item.createdAt" to="/home/sharePhoto/photoInfo">
				<img v-lazy="item.url" />
				<div class="img-text">
					<div class="img-title">{{ item.type }}</div>
					<div class="img-content">{{ item.createdAt | dateFormat }}</div>
				</div>
			</router-link>
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
		this.getPhotos(0);
	},
	mounted() {
		// 初始化scroll控件：
		mui('.mui-scroll-wrapper').scroll({
			// 	// flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			deceleration: 0.0005
		});
	},
	methods: {
		getCategory(val) {
			this.$http.get('https://www.apiopen.top/journalismApi').then(res => {
				if (res.body.code === 200) {
					// console.log(res.body.data)
					this.cates = res.body.data;
				}
			});
		},
		getPhotos(num) {
			this.$http.get('https://www.apiopen.top/meituApi?page=' + num).then(res => {
				if (res.body.code === 200) {
					// console.log(res.body);
					this.list = res.body.data;
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
.img-lists {
	margin: 0;
	padding: 0;
	li {
		position: relative;
		margin: 0 5px 10px 5px;
		text-align: center;
		border-radius: 3%;
		list-style: none;
		background-color: #eaeaea;
		box-shadow: 0px 0px 3px #333;
		img {
			width: 100%;
			vertical-align: middle;
			border-radius: 3%;
		}
		.img-text {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			max-height: 55px;
			line-height: 25px;
			color: white;
			background-color: rgba(10, 10, 10, 0.3);
			font-size: 15px;
			border-radius: 0 0 10px 10px;
		}
		img[lazy='loading'] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
	}
}
</style>
