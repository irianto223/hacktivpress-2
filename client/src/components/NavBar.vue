<template lang="html">
  <div>
    <ul>
      <router-link :to="'/'"><li>Home</li></router-link>
      <router-link v-if="isLogin" :to="'/article/mine'"><li>My Articles</li></router-link>
    </ul>
    <ul>
      <li v-if="isLogin"><a @click="logout()" href="#!">Logout</a></li>
      <div v-else>
        <li><router-link :to="'/register'">Register</router-link></li>
        <li><router-link :to="'/login'">Login</router-link></li>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'logout',
      'checkLoginStatus'
    ])
  },
  created () {
    this.checkLoginStatus()
  }
}
</script>

<style lang="css">
</style>
