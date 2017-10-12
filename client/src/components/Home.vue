<template lang="html">
  <div>
    <Nav/>
    <h3>komponen home</h3>
    <div v-for="(article, idx) in allArticles">
      <h3>{{ article.title }}</h3>
      <p>{{ article.content }}</p>
      <p>category: {{ article.category }}</p>
      <p>author: {{ article.author.username }}</p>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Nav
  },
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
