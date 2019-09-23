<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../lib/mui/examples/hello-mui/images/cbd.jpg"
          />
          <div class="mui-media-body">
            <h4>hello</h4>
            <p class="mui-ellipsis">
              <span>发表时间: 2020-06-03 12:10</span>
              <span>点击: 0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../lib/mui/examples/hello-mui/images/shuijiao.jpg"
          />
          <div class="mui-media-body">
            <h4>hello</h4>
            <p class="mui-ellipsis">
              <span>发表时间: 2020-06-03 12:10</span>
              <span>点击: 0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../lib/mui/examples/hello-mui/images/yuantiao.jpg"
          />
          <div class="mui-media-body">
            <h4>Node</h4>
            <p class="mui-ellipsis">
              <span>发表时间: 2020-06-04 12:10</span>
              <span>点击: 0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
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