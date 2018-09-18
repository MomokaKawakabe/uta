<template>
  <section class="container">
    <div>
      <h1 class="title">
        hit： {{article.hit}}
      </h1>
      <button @click="article.praise()">赞扬</button>

      <button @click="$router.push('/index2')">go2</button>

    </div>
  </section>
</template>

<script>
import Article from '~/static/model/Article'

export default {
  asyncData ({ params , store }, callback) {
    let article2 = new Article();
    article2.title = "文章2";
    article2.creator.name = "尹炫";
    setTimeout(callback(null , { article2: article2 }) , 500);
  },
  data () {
    return {
      article: new Article()
    }
  },
  created(){
    this.article.render(this.article2);
  },
  mounted(){
    console.log(this.article)
  }
}
</script>

