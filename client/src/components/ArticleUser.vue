<template lang="html">
  <div>
    <form @submit.prevent="postArticle(articleForm)">
      <input v-model="articleForm.title" type="text" placeholder="Title"><br>
      <input v-model="articleForm.content" type="text" placeholder="Content"><br>
      <input v-model="articleForm.category" type="text" placeholder="Category"><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      articleForm: {
        title: '',
        content: '',
        category: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'postArticle'
    ])
  }
}
</script>

<style lang="css">
</style>
