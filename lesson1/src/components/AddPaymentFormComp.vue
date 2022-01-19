<template>
  <div class="wrap">
    <div class="payment__add">
      <input placeholder="Date" v-model="date">
        <select v-model="category">
          <option value="" selected disabled>Select category</option>
          <option
            v-for="category of categoryList"
            :key="category"
            :value="category">
            {{ category }}
          </option>
        </select>
      <input
        placeholder="Value"
        v-model.number="value">
      <button
        class="button"
        @click="addPayment">
        Save Cost
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentFormComp',
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    id: '',
    date: '',
    category: '',
    value: '',
  }),
  methods: {
    addPayment() {
      const {
        date, category, value, paymentDay, getId,
      } = this;
      const data = {
        id: getId,
        date: date || paymentDay,
        category,
        value: +value,
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
    getId() {
      return this.items.length + 1;
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
