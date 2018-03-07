<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        uta {{article2.no}}
      </h1>
      <h1 class="title">
        uta {{article.getNo(article2)}}
      </h1>
      <button @click="article.add(article2)">add</button>


      <button @click="$router.push('/')">return</button>
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
    callback(null , { article2: article2 });
  },
  data () {
    console.log("******data************")
    return {
      article: new Article()
    }
  },
  beforeMount() {

  },
  mounted(){
    console.log(this.article);
    console.log(this.article2);
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
