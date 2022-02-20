<template>
  <div>
    <v-app-bar
      app
      color="cyan accent-1"
    >
      <v-col class="d-flex flex-row align-center justify-start">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>myProject</v-app-bar-title>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      color="cyan accent-1"
      width="100"
      height="190"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--acent-10"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link to="dashboard">Dashboard</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="about">About</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="notfound">Not Found</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="calculator">Calculator</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style lang="scss" scope>
.v-list-item__title{
  a {
    text-decoration: none;
  }
}
</style>
