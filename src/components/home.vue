<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item, i) in carousel" v-if="i<5" :key="item.url">
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <span class="mui-icon mui-icon-location-filled"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/sharePhoto">
          <span class="mui-icon mui-icon-paperplane"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/toBuy">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
          <div class="mui-media-body">商品够买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/feedback">
          <span class="mui-icon mui-icon-chat"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/videos">
          <span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/contact">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      // 保存轮播图的数组
      carousel: []
    };
  },
  methods: {
    getCarousel() {
      this.$http.get("https://www.apiopen.top/meituApi?page=3").then(res => {
        if (res.status == 200) {
          console.log(res.body);
          this.carousel = res.body.data;
          Toast("轮播图加载成功!!!");
        } else {
          Toast("请求超时...");
        }
      });
    }
  },
  created() {
    this.getCarousel();
  }
};
</script>

<style lang="scss" scoped>
div {
  .mint-swipe {
    height: 160px;
    .mint-swipe-item {
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .mui-grid-view.mui-grid-9 {
    background-color: transparent;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: none;
    border-bottom: none;
  }
  .mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 14px;
  }
  .mui-table-view-cell > router-link:not(.mui-btn) {
    color: white;
  }
  .mui-icon {
    width: 60px;
    height: 60px;
    line-height: 60px;
    background-color: rgb(4, 230, 106);
    border-radius: 50%;
  }
}
</style>