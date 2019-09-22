<template>
  <div>
    <input type="text" v-model="msg">
    <p v-html="msg"></p>
    <h1>home</h1>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item, i) in carousel" v-if="i<5" :key="item.url">
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      msg:'',
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
          // alert("请求超时...")
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
    height: 200px;
    .mint-swipe-item {
      > img {
        width:  100%;
        height: 100%;
      }
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: blue;
      }
      &:nth-child(3) {
        background-color: cyan;
      }
    }
  }
}
</style>