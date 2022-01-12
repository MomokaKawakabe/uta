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
              <nuxt-link to="/about">
                主页
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link to="/about">
                关于
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link to="/about">
                标签
              </nuxt-link>
            </div>
            <div class="menu-item">
              <nuxt-link to="/about">
                日志
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="deputy-panel">
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

export default {
  name: 'BlogIndex'
}
</script>
<style lang="less">
.blog-index {
  background: rgb(245, 247, 249);
  color: rgb(85, 85, 85);
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
        background: white;
        .title-bar {
          background: #222;
          text-align: center;
          font-size: 20px;
          color: #fff;
          line-height: 80px;
        }
        .menu-bar {
          margin-top: 20px;
          margin-bottom: 10px;
          .menu-item {
            padding: 5px 20px;
          }
        }
      }
      .deputy-panel {
        margin-top: 20px;
        background: white;
        height: 100px;
      }
    }
    .blog-content {
      min-height: 4000px;
      width: 100%;
      background: white;

    }
  }
}
</style>
