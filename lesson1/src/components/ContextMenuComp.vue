<template>
  <div class="contextmenu">
    <button
      class="button"
      @click="paymentEdit">
      редактировать
    </button>
    <button
      class="button"
      @click="paymentDelete">
      удалить
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ContextMenuComp',
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapMutations([
      'DELETE_PAYMENT_DATA',
      'EDIT_PAYMENT_DATA',
      'CLEAR_CLASS_ACTIVE',
    ]),
    paymentDelete() {
      const data = this.settings;
      this.DELETE_PAYMENT_DATA(data);
      this.$contextmenu.hide();
      this.CLEAR_CLASS_ACTIVE();
    },
    paymentEdit() {
      this.$contextmenu.hide();
      this.$modal.show({
        title: 'Edit payment',
        content: 'editPaymentComp',
        data: this.settings,
      });
      const data = this.settings;
      this.EDIT_PAYMENT_DATA(data);
      this.CLEAR_CLASS_ACTIVE();
    },
  },
};
</script>

<style lang="scss">
.contextmenu {
  position: absolute;
  top: 340px;
  left: 395px;

  display: flex;
  flex-direction: column;
  max-width: 140px;
  button {
    margin: 0;
  }
}

</style>
