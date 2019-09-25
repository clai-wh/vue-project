<template>
	<div class="info-container">
		<!-- 头部 -->
		<header>
			<h2>图片详情信息</h2>
			<div class="head-info">
				<span>发表时间:</span>
				<span>点击:</span>
			</div>
		</header>
		<hr />
		<!-- 图片 -->
		<div class="thumbs"><vue-preview :slides="slide1" @close="handleClose"></vue-preview></div>
		<div class="content" v-for="item in msgInfo" :key="item.docid">{{ item.digest }}</div>
		<hr />
		<!-- 评论 -->
		<div><my-comment></my-comment></div>
	</div>
</template>

<script>
import comment from '../subcomponent/comment.vue';
export default {
	data() {
		return {
			msgInfo: [],
			slide1: [
				{
					src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
					msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
					alt: 'picture1',
					title: 'Image Caption 1',
					w: 600,
					h: 400
				},
				{
					src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
					msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
					alt: 'picture2',
					title: 'Image Caption 2',
					w: 1200,
					h: 900
				}
			]
		};
	},
	created() {
		this.getPhotonfo();
	},
	methods: {
		handleClose() {
			console.log('close event');
		},
		// 详情信息
		getPhotonfo() {
			this.$http.get('https://www.apiopen.top/journalismApi').then(res => {
				if (res.body.code === 200) {
					// console.log(res.body.data.auto);
					this.msgInfo = res.body.data.auto;

					res.body.data.auto.forEach(item => {
						item.w = 600;
						item.h = 400;
						item.msrc = item.picInfo[0].url;
					});
					this.slide1 = this.slide1.concat(res.body.data.auto);
				}
			});
		}
	},
	components: {
		'my-comment': comment
	}
};
</script>

<style lang="less" scoped>
.info-container {
	.head-info {
		display: flex;
		justify-content: space-between;
	}
	.thumbs {
		.my-gallery {
			// display: flex;
			// flex-wrap: wrap;
			> figure {
				width: 60px;
				height: 60px;
				box-shadow: 0 0 8px #999;
				img {
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
				}
			}
		}
	}
}
</style>
