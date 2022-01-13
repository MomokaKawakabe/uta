<template>
  <div class="blog-error">
    <div class="error-img">
      <img width="160px" height="160px" src="/img/blog/error.png" alt="错误">
    </div>
    <div class="error-msg">
      文章不存在或已删除
    </div>
    <div class="error-btn">
      <nuxt-link class="btn-link" to="/blog">
        返回首页
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="less">
@import "./assets/css/color.less";
.blog-error {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  @media (min-width: 1600px) {
    font-size: 16px;
  }
  .error-msg {
    margin-top: 10px;
    color: @f_secondary;
  }
  .error-btn {
    margin-top: 30px;
    .btn-link {
      color: @f_main;
      border-bottom: none;
      line-height: 1.2;
      vertical-align: top;
      text-decoration: none;
      outline: none;
      word-wrap: break-word;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: @f_main;
        visibility: visible;
      }
    }
  }
}
</style>
