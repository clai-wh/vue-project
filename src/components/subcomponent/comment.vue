<template>
  <div class="cmt-container">
    <h3>评论子组件</h3>
    <hr />
    <label class="input-group">
      <textarea cols="30" rows="5" placeholder="评论区"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="cmt-list">
        <div class="cmt-item">
          <div class="cmt-title">
            <span>第一楼</span>
            <span>用户: 匿名用户</span>
            <span>发表时间: 2017-10-04 12:30:00</span>
          </div>
          <div class="cmt-body">hello</div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            <span>第一楼</span>
            <span>用户: 匿名用户</span>
            <span>发表时间: 2017-10-04 12:30:00</span>
          </div>
          <div class="cmt-body">hello</div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            <span>第一楼</span>
            <span>用户: 匿名用户</span>
            <span>发表时间: 2017-10-04 12:30:00</span>
          </div>
          <div class="cmt-body">hello</div>
        </div>
      </div>
      <mt-button type="danger" plain size="large">加载更多</mt-button>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input-group {
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