<template lang="html">
  <div>
    <Nav/>
    <h3>welcome home!</h3>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import ArticleList from '@/components/ArticleList'
export default {
  components: {
    Nav,
    ArticleList
  }
}
</script>

<style lang="css">
</style>
