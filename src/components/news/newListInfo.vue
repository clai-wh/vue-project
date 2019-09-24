<template>
  <div class="new-info-container">
    <h3>新闻详情</h3>
    <div class="sub-title">
      <span>时间:{{ time }}</span>
      <span>浏览量: {{ counts }}</span>
    </div>
    <!-- 新闻详情信息 -->
    <div class="info-list-content">
      <a :href="href">
        <img :src="src" />
        页面正在维护中...请跳转到最新页面
      </a>
    </div>
    <hr>
    <div>
      <my-comment></my-comment>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// 引入评论子组件
import comment from "../subcomponent/comment.vue"
export default {
  data() {
    return {
      id: this.$route.params.docid,
      href: "",
      time: null,
      counts: 1,
      src: ""
    };
  },
  created() {
    this.getInfoListContent();
  },
  methods: {
    getInfoListContent() {
      // console.log(this.$route.params.docid);
      this.$http.get("https://www.apiopen.top/journalismApi").then(res => {
        if (res.status === 200) {
          // console.log(res.body.data.auto);
          res.body.data.auto.forEach(item => {
            // console.log(item.docid);
            if (item.docid == this.id) {
              Toast("ok");
              // 地址
              this.href = item.link;
              // 时间
              this.time = item.ptime;
              // 浏览量
              this.counts = item.tcount;
              // 图片
              this.src = item.picInfo[0].url;
            }
          });
        } else {
          Toast("failure");
        }
      });
    }
  },
  components: {
    "my-comment": comment
  }
};
</script>

<style lang="scss" scoped>
.new-info-container {
  padding: 0 5px;
  h3 {
    text-align: center;
    margin: 15px 0;
  }
  .sub-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666666;
  }
  .info-list-content {
    text-align: center;
    margin-top: 20px;
    > a {
      color: red;
      font-size: 20px;
      line-height: 40px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
