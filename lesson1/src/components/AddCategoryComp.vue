<template>
  <v-card class="text-center pa-8">
    <v-text-field v-model="newCategory" label="New Category"/>
    <v-btn @click="addCategory">Add Category</v-btn>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AddCategoryComp',
  data: () => ({
    newCategory: '',
  }),
  methods: {
    ...mapMutations(['ADD_CATEGORY_DATA']),

    addCategory() {
      const data = this.newCategory;
      if (data && data !== ' ') {
        this.ADD_CATEGORY_DATA(data);
        this.newCategory = '';
        this.$modal.hide();
      }
    },
  },
  computed: {
    ...mapGetters(['categoryList']),
  },
};
</script>

<style lang="scss">
</style>
