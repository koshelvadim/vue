<template>
  <div>
    <input
      placeholder="New category"
      v-model="newCategory">
    <button
      class="button"
      @click="addCategory">
      Save Category
    </button>
  </div>
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
