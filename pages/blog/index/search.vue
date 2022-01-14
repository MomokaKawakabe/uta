<template>
  <div class="page-search">
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
.page-search {
  height: 100%;
}
</style>
