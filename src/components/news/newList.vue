<template>
  <div>
    <ul class="mui-table-view" v-for="item in infoLists" :key="item.docid">
      <li class="mui-table-view-cell mui-media">
        <!-- <a :href="item.link"> -->
        <router-link :to="'/home/newList/newListInfo/' + item.docid">
          <img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url" ait="图片" />
          <div class="mui-media-body">
            <h4>{{ item.title }}</h4>
            <p class="mui-ellipsis">
              <span>时间: {{ item.ptime | dateFormat("YYYY-MM-DD HH:mm") }}</span>
              <span>说明: {{ item.digest }}</span>
            </p>
          </div>
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
      infoLists: {}
    };
  },
  created() {
    this.getInfoLists();
  },
  methods: {
    getInfoLists() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(res => {
        if (res.status == 200) {
          // console.log(res);
          this.infoLists = res.body.data.auto;
          Toast("资讯数据请求成功!!!");
        } else {
          Toast("数据请求失败...");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  .mui-media-object {
    line-height: 50px;
    max-width: 50px;
    height: 50px;
  }
  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
  }
}
</style>