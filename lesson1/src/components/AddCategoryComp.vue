<template>
 <div class="wrap">
    <div class="payment__add">
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
export default {
  name: 'AddCategoryComp',
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    newCategory: '',
  }),
  methods: {
    addCategory() {
      const data = this.newCategory;
      this.$emit('add-category', data);
      this.newCategory = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
}
.payment__add {
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
  color: #000;
  width: 200px;

  display: flex;
  flex-direction: column;
  & input {
    margin: 10px 0;
    height: 26px;
  }
  & select {
    height: 32px;
  }
}
</style>
