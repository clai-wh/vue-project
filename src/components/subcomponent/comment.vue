<template>
	<div class="cmt-container">
		<h3>评论区</h3>
		<textarea class="textarea" placeholder="评论区"></textarea>
		<mt-button type="primary" size="large">发表评论</mt-button>
		<div class="cmt-list" v-for="(item, i) in commetLists" :key="item.soureid">
			<hr />
			<div class="cmt-item">
				<div class="cmt-title">
					<span>第 {{ i + 1 }} 楼</span>
					<span>用户: {{ item.top_commentsName }}</span>
					<span>发表时间: {{ item.passtime }}</span>
				</div>
				<div class="cmt-body">{{ item.text }}</div>
			</div>
		</div>
		<mt-button type="danger" plain size="large" @click="getMoreComment">加载更多</mt-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			commetLists: [],
			page: 1
		};
	},
	methods: {
		getComment() {
			this.$http.get('https://www.apiopen.top/satinGodApi?type=1&page=' + this.page).then(res => {
				if (res.body.code === 200) {
					console.log(res.data);
					// this.commetLists = res.body.data;
					// 每当获取新数据的时候, 不要把老数据覆盖清空, 而是应该以老数据, 拼接新数据
					this.commetLists = this.commetLists.concat(res.body.data);
				}
			});
		},
		getMoreComment() {
			this.page++;
			this.getComment();
		}
	},
	created() {
		this.getComment();
	}
};
</script>

<style lang="scss" scoped>
.cmt-container {
	.textarea {
		margin-bottom: 0;
		&::placeholder {
			font-size: 18px;
			color: darkgreen;
		}
	}
	.cmt-list {
		margin: 10px 0;
		.cmt-title {
			display: flex;
			justify-content: space-between;
			padding: 3px;
			color: #666;
			font-size: 13px;
			background-color: aquamarine;
		}
	}
	.cmt-body {
		margin: 7px 0;
		padding: 3px;
		color: #333333;
		font-size: 20px;
		text-indent: 2em;
	}
}
</style>
