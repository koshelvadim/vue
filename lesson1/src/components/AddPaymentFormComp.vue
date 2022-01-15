<template>
  <div class="wrap">
    <div class="payment__add">
      <input placeholder="Date" v-model="date">
      <input placeholder="Category" v-model="category">
      <input placeholder="Value" v-model.number="value">
      <button class="button" @click="addPayment">Save!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentFormComp',
  data: () => ({
    date: '',
    category: '',
    value: '',
  }),
  methods: {
    addPayment() {
      const {
        date, category, value, paymentDay,
      } = this;
      const data = {
        date: date || paymentDay,
        category,
        value,
      };
      this.$emit('add-payment', data);
      this.value = '';
      this.category = '';
      this.data = '';
    },
  },
  computed: {
    paymentDay() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
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

  display: flex;
  flex-direction: column;
  & input {
    margin: 10px 0;
    height: 26px;
    width: 200px;
  }
}
</style>
