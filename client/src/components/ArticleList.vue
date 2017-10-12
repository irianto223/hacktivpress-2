<template lang="html">
  <div>
    <div v-for="(article, idx) in allArticles">
      <router-link :to="'/article/' + article._id">
        <h3>{{ article.title }}</h3>
      </router-link>
      <p>{{ article.content }}</p>
      <p>category: {{ article.category }}</p>
      <p>author: {{ article.author.username }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'allArticles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  mounted () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
