<template lang="html">
  <div>
    <Nav/>
    <!-- <h3>welcome home!</h3> -->
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="css">
</style>
