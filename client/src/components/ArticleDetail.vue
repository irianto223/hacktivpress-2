<template lang="html">
  <div>
    <h3>{{ detailArticle.title }}</h3>
    <p>{{ detailArticle.content }}</p>
    <p>category: {{ detailArticle.category }}</p>
    <p>author: {{ detailArticle.author.username }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapState([
      'detailArticle'
    ])
  },
  methods: {
    ...mapActions([
      'getOneArticle'
    ])
  },
  mounted () {
    this.getOneArticle(this.id)
  }
}
</script>

<style lang="css">
</style>
