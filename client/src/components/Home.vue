<template lang="html">
  <div>
    <NavBar/>
    <!-- <h3>welcome home!</h3> -->
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="css">
</style>
