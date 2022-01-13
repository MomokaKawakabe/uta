<template>
  <div class="about">
    <div v-if="!isError">
      文章内容
    </div>
    <BlogError v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticleContent',
  transition: 'fade',
  asyncData () {
    return {
      isError: true
    }
  }
})
</script>

<style lang="less">
.about {
  height: 100%;
}
</style>
