<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        uta {{article.no}}
      </h1>
      <h1 class="title">
        uta {{article.getNo()}}
      </h1>
      <button @click="article.add()">add</button>



      <button @click="$router.push('/index2')">go</button>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

import Article from '~/static/model/Article'

export default {
  components: {
    AppLogo
  },
  asyncData ({ params , store }, callback) {
    let article2 = new Article();
    article2.no = "999"
    setTimeout(callback(null , { article2: article2 }) , 500);
  },
  data () {
    return {
      article: new Article()
    }
  },
  created(){
    this.article.render(this.article2);
    console.log(this.article);
    console.log(this.article.getNo);
  },
  beforeMount() {

  },
  mounted(){
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
