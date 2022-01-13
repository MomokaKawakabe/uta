<template>
  <div class="blog-index">
    <BlogHeader />
    <div class="index-content">
      <div class="blog-deputy">
        <div class="deputy-title">
          <div class="title-bar">
            世界终有时
          </div>
          <div class="menu-bar">
            <div class="menu-item">
              <nuxt-link class="link" to="/blog">
                · 主页
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link class="link" to="/blog/about">
                · 关于
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link class="link" to="/blog/tags">
                · 标签
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link class="link" to="/blog/archives">
                · 日志
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          ref="deputyPanel"
          class="deputy-panel"
          :class="{'deputy-welt': deputyIsWelt}"
        >
          动态面板
        </div>
      </div>
      <div class="blog-content">
        <nuxt-child />
      </div>
    </div>
    <BlogFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BlogIndex',
  transition: 'fade',
  data () {
    return {
      deputyIsWelt: false
    }
  },
  mounted ():void {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll (): void {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.deputyIsWelt = scrollTop > 267
    }
  }
})
</script>

<style lang="less">
@import "./assets/css/color";
.blog-index {
  background: @b_backplane;
  position: relative;
  .index-content {
    @media (min-width: 991px) {
      width: 960px;
      display: flex;
    }
    @media (max-width: 991px) {
      width: 100%;
    }
    margin: 0 auto;
    .blog-deputy {
      width: 240px;
      margin-right: 20px;
      flex-shrink: 0;
      .deputy-title {
        background: @b_panel;
        .title-bar {
          background: @b_theme;
          text-align: center;
          font-size: 20px;
          color: @f_contrast;
          line-height: 80px;
        }
        .menu-bar {
          padding: 10px 0;
          font-size: 13px;
          .menu-item {
            padding: 5px 20px;
            .link {
              display: block;
              font-size: 13px;
              color: @f_main;
              line-height: 26px;
              border-bottom: none;
              text-decoration: none;
              outline: none;
              &:hover {
                color: @b_theme;
              }
            }
          }
        }
      }
      .deputy-panel {
        margin-top: 10px;
        background: @b_panel;
        height: 100px;
        position: static;
        &.deputy-welt {
          position: fixed;
          width: 240px;
          top: 0;
        }
      }
    }
    .blog-content {
      min-height: 700px;
      padding: 20px;
      width: 100%;
      background: @b_panel;

    }
  }
}
</style>
