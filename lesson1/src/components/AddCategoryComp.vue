<template>
  <div class="wrapper">
    <div class="modal-window">
      <button
        class="close"
        @click="$emit('close-modal-category')">
        x
      </button>
      <input
        placeholder="New category"
        v-model="newCategory">
      <button
        class="button"
        @click="addCategory">
        Save Category
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AddCategoryComp',
  data: () => ({
    newCategory: '',
  }),
  methods: {
    addCategory() {
      const data = this.newCategory;
      if (data && data !== ' ') {
        this.$emit('add-category', data);
        this.newCategory = '';
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
