<template>
  <div>
    <button @click="$router.push('/')">return</button>
  </div>
</template>

<script>
import Article from '~/static/model/Article'

export default {
  data () {
    return {
      article: new Article()
    }
  },
  beforeMount() {

  },
  mounted(){

  }
}
</script>
