<template>
  <div class="component-deputy-panel">
    <div class="panel-avatar">
      <div>
        <img width="100" height="100" src="/img/blog/avatar.png" alt="头像">
      </div>
      <div class="statistics-name">
        瘾瘾怍痛
      </div>
      <div class="avatar-statistics">
        <nuxt-link class="statistics-item" to="/blog/archives">
          <div class="statistics-number">
            10
          </div>
          <div class="statistics-text">
            文章
          </div>
        </nuxt-link>
        <nuxt-link class="statistics-item" to="/blog/archives">
          <div class="statistics-number">
            5
          </div>
          <div class="statistics-text">
            标签
          </div>
        </nuxt-link>
      </div>
      <div class="avatar-rss">
        <a
          target="view_window"
          href="http://www.baidu.com"
        >
          RSS
        </a>
      </div>
      <div class="avatar-contact">
        <div class="contact-item">
          <a target="view_window" href="https://github.com/MomokaKawakabe">GitHub</a>
        </div>
        <div class="contact-item">
          <a target="view_window" href="https://space.bilibili.com/44395344">BiliBili</a>
        </div>
        <div class="contact-item">
          <a
            target="view_window"
            href="https://tieba.baidu.com/home/main?id=tb.1.828222e5.2W08H_FcPtfBZEvLUl0cDw&fr=index"
          >
            贴吧
          </a>
        </div>
        <div class="contact-item">
          <a target="view_window" href="mailto:yinyinzuotong@outlook.com">E-Mail</a>
        </div>
      </div>
    </div>
    <div class="panel-navigation">
      <!--      导航-->
    </div>
  </div>
</template>

<style lang="less">
@import "./assets/css/color.less";
.component-deputy-panel {
  padding: 20px 10px;
  .panel-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    .statistics-name {
      color: @f_emphasize;
      font-weight: 600;
      font-size: 14px;
    }
    .avatar-statistics {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 15px;
      .statistics-item {
        text-align: center;
        padding: 5px;
        .statistics-number {
          font-size: 16px;
          color: @f_main;
          font-weight: 600;
        }
        .statistics-text {
          font-size: 13px;
          color: @f_secondary;
          margin-top: 5px;
        }
      }
    }
    .avatar-rss {
      width: 100%;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px @b_theme_line dotted;
      border-top: 1px @b_theme_line dotted;
      margin-top: 15px;
      padding: 4px 0;
      a {
        color: #fc6423;
      }
    }
    .avatar-contact {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
      .contact-item {
        width: 50%;
        a {
          padding: 1px;
          margin-left: 30px;
          display: inline-block;
          width: 70px;
          text-align: left;
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
}
</style>
