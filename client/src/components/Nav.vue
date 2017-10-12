<template lang="html">
  <div>
    <ul>
      <router-link :to="'/'"><li>Home</li></router-link>
      <router-link :to="'/article/mine'"><li>My Articles</li></router-link>
    </ul>
    <ul>
      <router-link :to="'/register'"><li>Register</li></router-link>
      <router-link :to="'/login'"><li>Login</li></router-link>
      <!-- <li><a href="#!">Logout</a></li> -->
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
