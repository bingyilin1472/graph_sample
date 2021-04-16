<template>
  <div id="app">
    <div id="nav" class="bg-o_purple-100">
      <router-link to="/" class="text-7xl font-urw_form_family text-t_purple">Home</router-link>
      <router-link to="/" class="text-7xl">Home</router-link>
      <router-link to="/about" class="text-t_purple">About</router-link>
    </div>
    <router-view/>
    <h1 class="text-6xl text-t_purple">Hello </h1>
  </div>
</template>

<script>
// import Platform from './views/Platform'
// export default {
//   components: { Platform }
// }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
