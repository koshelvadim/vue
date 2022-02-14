<template>
  <v-app>

    <header-comp/>

    <v-main>

      <router-view/>

    </v-main>

  </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';

export default {
  components: { HeaderComp },
  name: 'App',

  data: () => ({
  }),
};
</script>
<style scoped>
</style>
