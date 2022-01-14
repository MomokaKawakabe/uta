<template>
  <div class="blog-error">
    <div class="error-img">
      <img v-if="type === 'DIRECT_COMPILATION'" width="160" height="162" src="/img/blog/wait.png" alt="开发中...">
      <img v-else width="160" height="152" src="/img/blog/error.png" alt="页面不存在">
    </div>
    <div class="error-msg">
      {{ tips }}
    </div>
    <div class="error-btn">
      <nuxt-link class="btn-link" to="/blog">
        返回首页
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BlogError',
  transition: 'fade',
  props: {
    // NOT_FOUND_PAGE\NOT_FOUND_ARTICLE\DIRECT_COMPILATION
    type: {
      type: String,
      default: 'NOT_FOUND_PAGE'
    }
  },
  data () {
    return {
      tips: ''
    }
  },
  mounted () {
    switch (this.type) {
      case 'NOT_FOUND_PAGE':
        this.tips = '页面不存在'
        break
      case 'NOT_FOUND_ARTICLE':
        this.tips = '文章不存在或已删除'
        break
      case 'DIRECT_COMPILATION':
        this.tips = '页面施工中...'
        break
    }
  }
})
</script>

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
