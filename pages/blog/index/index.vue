<template>
  <div class="blog-list">
    <div class="index-banner">
      <div class="banner-title" />
    </div>
    <div class="list-box">
      <div
        v-for="index in articleNumber"
        :key="index"
        class="article-item"
      >
        <div class="article-title">
          <nuxt-link class="article-link" to="/blog/article">
            {{ index + 'UI.cn - UI中国iOS版设计初探' }}
          </nuxt-link>
        </div>
        <div class="article-tag">
          2022年1月12日|分类|标签|评论数
        </div>
        <div class="article-abstract">
          一直很喜欢UI.cn这个网站，有次偶然的机会，我用iPhone的Safari打开UI.cn的时候，发现许多页面并未做成响应式，非常不方便阅读，我再一想，连站酷都有iOS版的，UI中国应该也有iOS版的吧，所以我就跑去App Store里搜，结果什么也没有，这个时候我就萌生了设计UI.cn iOS版的交互原型的想法，做好之后还能放进自己的作品集里。
        </div>
        <div
          v-if="index !== articleNumber"
          class="article-demarcation"
        />
      </div>
    </div>
    <div class="blog-pager">
      分页器
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'BlogList',
  transition: 'fade',
  data () {
    return {
      articleNumber: 10
    }
  }

}
</script>

<style lang="less">
@import "./assets/css/color";
.blog-list {
  .index-banner {
    width: 100%;
    height: 260px;
    background-image: url("/img/blog/banner_technique.png");
    background-position: center;
    background-size: cover;
    padding: 70px 50px;
    .banner-title {
      font-size: 40px;
      color: white;
    }
  }
  .list-box {
    padding: 40px 20px;
    .article-item {
      .article-title {
        font-size: 22px;
        font-weight: 400;
        text-align: center;
        .article-link {
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
            visibility: hidden;
            transform: scaleX(0);
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;
          }
          &:hover::before {
            visibility: visible;
            transform: scaleX(1);
          }
        }
      }
      .article-tag {
        font-size: 12px;
        color: @f_secondary;
        text-align: center;
        line-height: 2;
        margin: 10px auto 30px;
      }
      .article-abstract {
        @media (min-width: 1600px) {
          font-size: 16px;
        }
        @media (max-width: 1600px) {
          font-size: 14px;
        }
        color: @f_main;
        line-height: 2;
      }
      .article-demarcation {
        height: 1px;
        width: 50px;
        background-color: @b_theme_line;
        margin: 35px auto 60px;
      }
    }
  }
  .blog-pager {
    margin-bottom: 100px;
    text-align: center;
  }
}
</style>
