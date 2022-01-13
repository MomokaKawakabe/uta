<template>
  <footer class="component-blog-footer">
    ©2022 瘾瘾怍痛 |
    <nuxt-link class="footer-link" to="/blog">
      沪ICP备17036278号-1
    </nuxt-link>
  </footer>
</template>

<style lang="less">
@import "./assets/css/color.less";
.component-blog-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  background: @b_theme;
  color: @f_contrast;
  .footer-link {
    color: @f_contrast;
    border-bottom: none;
    text-decoration: none;
    outline: none;
  }
}
</style>
