<template>
  <v-app>
    <v-app-bar
      app
      color="orange"
      dark
      width="100%"
    >
      <div class="d-flex flex-row align-center justify-space-between">
        <v-btn class="mx-1" to="/dashboard" :ripple="true">Dashboard</v-btn>
        <v-btn class="mx-1" to="/about" :ripple="true">About</v-btn>
        <v-btn class="mx-1" to="/notfound" :ripple="true">Not Found</v-btn>
        <v-btn class="mx-1" to="/calc" :ripple="true">Calculator</v-btn>
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
