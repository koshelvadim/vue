<template>
  <v-app>

    <header-comp/>

    <v-main>
      <bread-crumbs-comp/>

      <router-view/>

    </v-main>

  </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import BreadCrumbsComp from './components/BreadCrumbsComp.vue';

export default {
  components: { HeaderComp, BreadCrumbsComp },
  name: 'App',

  data: () => ({
  }),
};
</script>
<style scoped>
</style>
