<template>
  <div class="page-error">
    <BlogError />
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
.page-error {
  height: 100%;
}
</style>
