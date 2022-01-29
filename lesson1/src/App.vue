<template>
  <div id="app">
    <nav>
      <router-link to="dashboard">Dashboard</router-link>
      <router-link to="about">About</router-link>
      <router-link to="notfound">Not Found</router-link>
      <router-link to="calc">Calculator</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({}),
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
nav {
  padding: 20px;
  a {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: blue;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
