<template>
  <div class="p-top">
    <!-- 顶部 header 区域 -->
    <mt-header fixed title="爱凡之家"></mt-header>
    <!-- <h1>123</h1> -->

    <!-- 低部 tabBar 区域 -->
    <!-- mui-active: 高亮类名 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/number">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    
    <!-- 中间部分 router-view 区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.p-top {
  padding-top: 40px;
  h1 {
    padding: 0;
    margin: 0;
  }
}
</style>