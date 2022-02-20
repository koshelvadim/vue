<template>
  <div>
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
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AddPaymentFormComp',
  data: () => ({
    id: '',
    date: '',
    category: '',
    value: '',
  }),
  methods: {
    ...mapMutations(['ADD_PAYMETN_DATA']),

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
      if (data.value && data.category) {
        this.ADD_PAYMETN_DATA(data);
        this.value = '';
        this.category = '';
        this.data = '';
        this.$modal.hide();
      }
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),
    paymentDay() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
    getId() {
      return this.paymentsList.length + 1;
    },
  },
};
</script>

<style lang="scss">
</style>
