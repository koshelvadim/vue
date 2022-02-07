<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex flex-row align-center">
        <v-btn to="/dashboard" :ripple="true">Dashboard</v-btn>
        <v-btn to="/about" :ripple="true">About</v-btn>
        <v-btn to="/notfound" :ripple="true">Not Found</v-btn>
        <v-btn to="/calc" :ripple="true">Calculator</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
