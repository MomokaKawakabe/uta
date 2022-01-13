<template>
  <nuxt class="app" />
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style lang="less">
@import "assets/css/color.less";
.app {
  min-height: 100vh;
}
html {
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif,
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  color: @f_main;
}

body {
  width: 100vw;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  height: 100vh;
}
</style>
