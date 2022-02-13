<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: true,
        href: '/',
      },
      {
        text: 'Dashboard',
        disabled: false,
        href: '/dashboard',
      },
      {
        text: 'About',
        disabled: false,
        href: '/about',
      },
      {
        text: 'Calculator',
        disabled: false,
        href: '/calculator',
      },
    ],
  }),
};
</script>

<style>
</style>
