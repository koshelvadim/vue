<template>
  <v-card class="text-center pa-8">
    <v-text-field v-model="date" label="Data"/>
    <v-select
      v-model="category"
      label="Category"
      :items="categoryList"
    />
    <v-text-field v-model="value" label="Value"/>
    <v-btn @click="addPayment">Add Payment</v-btn>
  </v-card>
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

<style lang="scss" scope>
</style>
