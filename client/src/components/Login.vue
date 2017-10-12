<template lang="html">
  <div>
    <form @submit.prevent="login(loginForm)">
      <input v-model="loginForm.username" type="text" placeholder="Username"><br>
      <input v-model="loginForm.password" type="text" placeholder="Password"><br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'login'
    ])
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
