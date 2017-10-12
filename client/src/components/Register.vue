<template lang="html">
  <div>
    <form @submit.prevent="register(registerForm)">
      <input v-model="registerForm.username" type="text" placeholder="Username"><br>
      <input v-model="registerForm.password" type="text" placeholder="Password"><br>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      registerForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'register'
    ])
  }
}
</script>

<style lang="css">
</style>
