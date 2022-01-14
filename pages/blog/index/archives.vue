<template>
  <div class="page-archives">
    <BlogError type="DIRECT_COMPILATION" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  transition: 'fade'
})
</script>

<style lang="less">
.page-archives {
  height: 100%;
}
</style>
