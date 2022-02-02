<template>
  <div class="wrapper">
    <div class="modal-window">
      <div>{{ title }}</div>
      <button
        class="close"
        @click="closeModalWindow">
        x
      </button>
      <component
        :is="settings.content"
        :settings="settings"/>
    </div>
  </div>
</template>

<script>
import AddPaymentFormComp from '@/components/AddPaymentFormComp.vue';
import AddCategoryComp from '@/components/AddCategoryComp.vue';
import EditPaymentComp from '@/components/EditPaymentComp.vue';

export default {
  name: 'ModalWindowComp',
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { AddPaymentFormComp, AddCategoryComp, EditPaymentComp },
  methods: {
    closeModalWindow() {
      this.$modal.hide();
    },
  },
  computed: {
    title() {
      return this.settings.title;
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
}
.modal-window {
  position: relative;
  padding: 30px;
  border-radius: 15px;
  background-color: #fff;
  color: #000;
  max-width: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;
  & input {
    margin: 10px 0;
    height: 26px;
    width: 100%;
  }
  & select {
    height: 32px;
    width: 104%;
  }
}
.close {
  display: flex;
  justify-content: center;
  padding: 2px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: lightblue;
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: darken(lightblue, 40%);
    color: white;
  }
}
</style>
