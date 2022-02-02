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
    ]),
    paymentDelete() {
      const data = this.settings;
      this.DELETE_PAYMENT_DATA(data);
      this.$contextmenu.trigger();
    },
    paymentEdit() {
      const data = this.settings;
      this.EDIT_PAYMENT_DATA(data);
      this.$contextmenu.trigger();
      this.$modal.show({
        title: 'Edit payment',
        content: 'editPaymentComp',
        data: this.settings,
      });
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
